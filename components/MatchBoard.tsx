"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Chess } from "chess.js";
import Scene3d from "@/components/chess/Scene3d";

interface MatchBoardProps {
    apiKeys: { groq: string; openrouter: string };
    model1: string;
    model2: string;
}

function getShortModelName(model: string): string {
    if (model.includes("llama-3.3-70b")) return "Llama 3.3 70B";
    if (model.includes("llama-3.1-8b")) return "Llama 3.1 8B";
    if (model.includes("mixtral")) return "Mixtral 8x7B";
    if (model.includes("gpt-4o")) return "GPT-4o";
    if (model.includes("claude")) return "Claude 3.5";
    if (model.includes("gemini")) return "Gemini 2.0";
    if (model.includes("grok")) return "Grok";
    return model.split("/").pop()?.split(":")[0] || model;
}

function ModelIcon({ model }: { model: string }) {
    const m = model.toLowerCase();
    if (m.includes("gpt") || m.includes("openai")) return <span className="text-sm">🧠</span>;
    if (m.includes("claude") || m.includes("anthropic")) return <span className="text-sm">🎭</span>;
    if (m.includes("gemini") || m.includes("google")) return <span className="text-sm">✨</span>;
    if (m.includes("grok")) return <span className="text-sm font-bold">𝕏</span>;
    return <span className="text-sm">🦙</span>;
}

// Piece symbols for captured display
const PIECE_SYMBOLS: Record<string, string> = {
    p: "♟", n: "♞", b: "♝", r: "♜", q: "♛", k: "♚"
};

export default function MatchBoard({ apiKeys, model1, model2 }: MatchBoardProps) {
    const [game, setGame] = useState(() => new Chess());
    const [thoughts1, setThoughts1] = useState<string[]>([]);
    const [thoughts2, setThoughts2] = useState<string[]>([]);
    const [commentary, setCommentary] = useState<string | null>(null);
    const [isThinking, setIsThinking] = useState(false);
    const [status, setStatus] = useState<"playing" | "ended">("playing");
    const [error, setError] = useState<string | null>(null);
    const [moveCount, setMoveCount] = useState(0);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [thinkingModel, setThinkingModel] = useState<string>("");
    const [whitePieceStyle, setWhitePieceStyle] = useState<"maple" | "cherry">("maple");
    const [capturedByWhite, setCapturedByWhite] = useState<string[]>([]); // Black pieces captured by white
    const [capturedByBlack, setCapturedByBlack] = useState<string[]>([]); // White pieces captured by black

    const gameRef = useRef(game);
    const isThinkingRef = useRef(false);
    const statusRef = useRef<"playing" | "ended">("playing");
    const scrollRef1 = useRef<HTMLDivElement>(null);
    const scrollRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => { gameRef.current = game; }, [game]);
    useEffect(() => { isThinkingRef.current = isThinking; }, [isThinking]);
    useEffect(() => { statusRef.current = status; }, [status]);
    useEffect(() => { if (scrollRef1.current) scrollRef1.current.scrollTop = scrollRef1.current.scrollHeight; }, [thoughts1]);
    useEffect(() => { if (scrollRef2.current) scrollRef2.current.scrollTop = scrollRef2.current.scrollHeight; }, [thoughts2]);

    useEffect(() => {
        if (status === "playing") {
            const timer = setInterval(() => setGameTime(prev => prev + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [status]);

    const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

    // Get current turn
    const currentTurn = game.turn();

    const requestMove = useCallback(async () => {
        if (statusRef.current === "ended" || isThinkingRef.current) return;
        setIsThinking(true);
        isThinkingRef.current = true;
        setError(null);

        const currentGame = gameRef.current;
        const turn = currentGame.turn();
        const currentModel = turn === "w" ? model1 : model2;
        setThinkingModel(getShortModelName(currentModel));

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 60000);

            const res = await fetch("/api/chess/move", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    apiKeys,
                    model: currentModel,
                    role: turn === "w" ? "white" : "black",
                    fen: currentGame.fen(),
                    history: currentGame.history(),
                }),
                signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (!res.ok) throw new Error(`API error: ${res.status}`);
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            if (!data.move) throw new Error("No move received from AI");

            if (data.move.toLowerCase() === "resign") {
                setStatus("ended");
                statusRef.current = "ended";
                if (turn === "w") setScore2(prev => prev + 1);
                else setScore1(prev => prev + 1);
                setCommentary(`${getShortModelName(currentModel)} has resigned!`);
                return;
            }

            const newGame = new Chess(currentGame.fen());
            const moveResult = newGame.move(data.move);

            if (!moveResult) {
                const legalMoves = newGame.moves();
                const matchedMove = legalMoves.find(m =>
                    m.toLowerCase().includes(data.move.toLowerCase()) ||
                    data.move.toLowerCase().includes(m.toLowerCase())
                );
                if (matchedMove) newGame.move(matchedMove);
                else throw new Error(`Invalid move: ${data.move}`);
            }

            // Track captured pieces
            if (moveResult && moveResult.captured) {
                const capturedPiece = moveResult.captured;
                if (turn === "w") {
                    // White captured a black piece
                    setCapturedByWhite(prev => [...prev, capturedPiece]);
                } else {
                    // Black captured a white piece
                    setCapturedByBlack(prev => [...prev, capturedPiece]);
                }
            }

            setGame(newGame);
            gameRef.current = newGame;
            setMoveCount(prev => prev + 1);

            const thoughtText = data.thoughts || `Played ${data.move}`;
            if (turn === "w") setThoughts1(prev => [...prev, thoughtText]);
            else setThoughts2(prev => [...prev, thoughtText]);

            if (newGame.isGameOver()) {
                setStatus("ended");
                statusRef.current = "ended";
                if (newGame.isCheckmate()) {
                    if (turn === "w") setScore1(prev => prev + 1);
                    else setScore2(prev => prev + 1);
                    setCommentary(`Checkmate! ${getShortModelName(currentModel)} wins!`);
                } else if (newGame.isDraw()) setCommentary("Draw!");
                else if (newGame.isStalemate()) setCommentary("Stalemate!");
                return;
            }

            if (turn === "b" && moveCount > 0) {
                try {
                    const commRes = await fetch("/api/chess/commentary", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ apiKeys, fen: newGame.fen(), history: newGame.history() }),
                    });
                    if (commRes.ok) {
                        const commData = await commRes.json();
                        if (commData.commentary) setCommentary(commData.commentary);
                    }
                } catch { }
            }
        } catch (err: any) {
            setError(err.message || "Error requesting move");
            setTimeout(() => setError(null), 3000);
        } finally {
            setIsThinking(false);
            isThinkingRef.current = false;
            setThinkingModel("");
        }
    }, [apiKeys, model1, model2, moveCount]);

    useEffect(() => {
        if (status === "ended") return;
        const timer = setTimeout(() => {
            if (!isThinkingRef.current && statusRef.current === "playing") requestMove();
        }, 3000);
        return () => clearTimeout(timer);
    }, [game, status, isThinking, requestMove]);

    const history = game.history();
    const lastMove = history.length > 0 ? history[history.length - 1] : undefined;

    // Render captured pieces
    const renderCapturedPieces = (pieces: string[], isWhitePieces: boolean) => {
        return pieces.map((p, i) => (
            <div
                key={i}
                className={`text-xl ${isWhitePieces ? "text-[#E7D9B7]" : "text-[#1F1E1D]"}`}
                style={{ textShadow: isWhitePieces ? "0 1px 2px rgba(0,0,0,0.5)" : "0 1px 2px rgba(255,255,255,0.3)" }}
            >
                {PIECE_SYMBOLS[p] || "?"}
            </div>
        ));
    };

    return (
        <div className="fixed inset-0 bg-black flex flex-col">
            {/* Header */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-8 bg-black shrink-0">
                <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all ${currentTurn === "w" ? "bg-white/10 border-white/30" : "bg-white/5 border-white/10"}`}>
                        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                        <ModelIcon model={model1} />
                        <span className="text-white text-sm font-medium">{getShortModelName(model1)}</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-3xl font-black tracking-tighter">
                        <span className="text-white">{score1}</span>
                        <span className="text-white/20 mx-3">-</span>
                        <span className="text-white">{score2}</span>
                    </div>
                    <div className="text-sm text-white/40 font-mono">{formatTime(gameTime)}</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all ${currentTurn === "b" ? "bg-white/10 border-white/30" : "bg-white/5 border-white/10"}`}>
                        <span className="text-white text-sm font-medium">{getShortModelName(model2)}</span>
                        <ModelIcon model={model2} />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 grid grid-cols-[300px_1fr_300px] min-h-0 gap-4 p-4">
                {/* Player 1 Panel + Captured Pieces */}
                <div className="flex gap-3">
                    {/* Thoughts Panel */}
                    <div className="flex-1 border border-white/5 rounded-xl flex flex-col overflow-hidden bg-black/50">
                        <div className="p-4 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="8" r="4" /><path d="M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest">White</div>
                                    <div className="text-sm font-medium text-white">{getShortModelName(model1)}</div>
                                </div>
                            </div>
                        </div>
                        <div ref={scrollRef1} className="flex-1 overflow-y-auto p-4 space-y-3 thoughts-scroll">
                            {thoughts1.map((t, i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <div className="text-[10px] text-white/30 mb-1">Move {i + 1}</div>
                                    <p className="text-white/60 text-sm leading-relaxed">{t}</p>
                                </div>
                            ))}
                            {thinkingModel === getShortModelName(model1) && (
                                <div className="flex items-center gap-2 text-white/40 px-3">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full thinking-dot" />
                                        <div className="w-1.5 h-1.5 bg-white rounded-full thinking-dot" />
                                        <div className="w-1.5 h-1.5 bg-white rounded-full thinking-dot" />
                                    </div>
                                    <span className="text-xs">Thinking...</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Captured by Black (white pieces lost) */}
                    <div className="w-8 flex flex-col items-center gap-1 pt-4">
                        {renderCapturedPieces(capturedByBlack, true)}
                    </div>
                </div>

                {/* 3D Board */}
                <div className="relative bg-black rounded-xl overflow-hidden border border-white/5">
                    <Scene3d
                        fen={game.fen()}
                        lastMove={lastMove}
                        whitePieceStyle={whitePieceStyle}
                        currentTurn={currentTurn}
                    />

                    {/* White Piece Color Toggle */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        <button
                            onClick={() => setWhitePieceStyle("maple")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${whitePieceStyle === "maple"
                                ? "bg-[#E7D9B7] text-black"
                                : "bg-white/10 text-white/50 hover:bg-white/20"
                                }`}
                        >
                            Maple
                        </button>
                        <button
                            onClick={() => setWhitePieceStyle("cherry")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${whitePieceStyle === "cherry"
                                ? "bg-[#CBB88B] text-black"
                                : "bg-white/10 text-white/50 hover:bg-white/20"
                                }`}
                        >
                            Cherry
                        </button>
                    </div>

                    {isThinking && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/80 border border-white/10">
                            <span className="text-xs uppercase tracking-widest text-white/60 flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                {thinkingModel} thinking...
                            </span>
                        </div>
                    )}
                    {error && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-900/80 px-4 py-2 rounded-full border border-red-700/50">
                            <span className="text-xs text-red-300">{error}</span>
                        </div>
                    )}
                    {status === "ended" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-10">
                            <div className="text-center p-10 rounded-2xl bg-white/5 border border-white/10">
                                <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-4 text-white">Match Over</h2>
                                <p className="text-xl text-white/50 mb-8">{commentary}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-8 py-3 rounded-lg bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
                                >
                                    New Match
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">
                        <span className="text-xs text-white/40">Move {moveCount}</span>
                    </div>
                </div>

                {/* Player 2 Panel + Captured Pieces */}
                <div className="flex gap-3">
                    {/* Captured by White (black pieces lost) */}
                    <div className="w-8 flex flex-col items-center gap-1 pt-4">
                        {renderCapturedPieces(capturedByWhite, false)}
                    </div>

                    {/* Thoughts Panel */}
                    <div className="flex-1 border border-white/5 rounded-xl flex flex-col overflow-hidden bg-black/50">
                        <div className="p-4 border-b border-white/5">
                            <div className="flex items-center gap-3 justify-end">
                                <div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest text-right">Black</div>
                                    <div className="text-sm font-medium text-white text-right">{getShortModelName(model2)}</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="8" r="4" /><path d="M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div ref={scrollRef2} className="flex-1 overflow-y-auto p-4 space-y-3 thoughts-scroll">
                            {thoughts2.map((t, i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <div className="text-[10px] text-white/30 mb-1 text-right">Move {i + 1}</div>
                                    <p className="text-white/60 text-sm leading-relaxed text-right">{t}</p>
                                </div>
                            ))}
                            {thinkingModel === getShortModelName(model2) && (
                                <div className="flex items-center justify-end gap-2 text-white/40 px-3">
                                    <span className="text-xs">Thinking...</span>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full thinking-dot" />
                                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full thinking-dot" />
                                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full thinking-dot" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Commentary Footer */}
            <div className="h-14 border-t border-white/5 flex items-center justify-center bg-black shrink-0 px-8">
                <div className="max-w-4xl text-center">
                    <span className="text-[9px] text-white/30 uppercase tracking-widest mr-3">AI Commentary:</span>
                    <span className="text-sm text-white/60 italic">
                        {commentary || "The battle begins... waiting for the first exchange."}
                    </span>
                </div>
            </div>
        </div>
    );
}
