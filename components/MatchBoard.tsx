"use client";

import { useState, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import Scene3d from "@/components/chess/Scene3d";

interface MatchBoardProps {
    apiKeys: { groq: string; openrouter: string };
    model1: string;
    model2: string;
}

export default function MatchBoard({ apiKeys, model1, model2 }: MatchBoardProps) {
    const [game, setGame] = useState(new Chess());
    const [thoughts1, setThoughts1] = useState<string[]>([]);
    const [thoughts2, setThoughts2] = useState<string[]>([]);
    const [commentary, setCommentary] = useState<string | null>(null);
    const [isThinking, setIsThinking] = useState(false);
    const [status, setStatus] = useState<"playing" | "ended">("playing");

    const turnRef = useRef<"w" | "b">("w");

    const scrollRef1 = useRef<HTMLDivElement>(null);
    const scrollRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef1.current) scrollRef1.current.scrollTop = scrollRef1.current.scrollHeight;
    }, [thoughts1]);

    useEffect(() => {
        if (scrollRef2.current) scrollRef2.current.scrollTop = scrollRef2.current.scrollHeight;
    }, [thoughts2]);

    const requestMove = async () => {
        if (status === "ended" || isThinking) return;

        setIsThinking(true);
        const turn = game.turn();
        const currentModel = turn === "w" ? model1 : model2;
        const history = game.history();
        const fen = game.fen();

        try {
            const res = await fetch("/api/chess/move", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    apiKeys,
                    model: currentModel,
                    role: turn === "w" ? "white" : "black",
                    fen,
                    history,
                }),
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            // Apply move
            const moveResult = game.move(data.move);
            if (moveResult) {
                setGame(new Chess(game.fen()));
                if (turn === "w") {
                    setThoughts1((prev) => [...prev, data.thoughts]);
                } else {
                    setThoughts2((prev) => [...prev, data.thoughts]);
                }
            }

            // Check game end
            if (game.isGameOver()) {
                setStatus("ended");
            }

            // If black just moved, call commentary
            if (turn === "b") {
                const commRes = await fetch("/api/chess/commentary", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        apiKeys,
                        fen: game.fen(),
                        history: game.history(),
                    }),
                });
                const commData = await commRes.json();
                setCommentary(commData.commentary);
            }

        } catch (err) {
            console.error(err);
        } finally {
            setIsThinking(false);
        }
    };

    useEffect(() => {
        // Start the game loop
        const timer = setTimeout(() => {
            if (status === "playing" && !isThinking) {
                requestMove();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [game, status, isThinking]);

    return (
        <div className="fixed inset-0 grid grid-cols-[300px_1fr_300px] grid-rows-[1fr_200px] bg-black">
            {/* Player 1 Thoughts (Left) */}
            <div className="border-r border-zinc-900 p-6 flex flex-col justify-end overflow-hidden relative">
                <div className="absolute top-6 left-6 text-xs text-zinc-600 uppercase tracking-widest">
                    {model1}
                </div>
                <div
                    ref={scrollRef1}
                    className="thoughts-scroll fade-up overflow-y-auto space-y-8 flex flex-col-reverse"
                >
                    {thoughts1.slice().reverse().map((t, i) => (
                        <p key={i} className="text-zinc-400 text-sm italic leading-relaxed">
                            {t}
                        </p>
                    ))}
                </div>
            </div>

            {/* 3D Board (Center) */}
            <div className="relative border-b border-zinc-900">
                <Scene3d fen={game.fen()} lastMove={game.history().slice(-1)[0]} />
                {isThinking && (
                    <div className="absolute top-8 left-1/2 -translate-x-1/2">
                        <span className="text-xs uppercase tracking-widest text-zinc-500 animate-pulse">
                            AI Thinking...
                        </span>
                    </div>
                )}
                {status === "ended" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                        <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Match Over</h2>
                    </div>
                )}
            </div>

            {/* Player 2 Thoughts (Right) */}
            <div className="border-l border-zinc-900 p-6 flex flex-col justify-end overflow-hidden relative">
                <div className="absolute top-6 right-6 text-xs text-zinc-600 uppercase tracking-widest text-right">
                    {model2}
                </div>
                <div
                    ref={scrollRef2}
                    className="thoughts-scroll fade-up overflow-y-auto space-y-8 flex flex-col-reverse"
                >
                    {thoughts2.slice().reverse().map((t, i) => (
                        <p key={i} className="text-zinc-400 text-sm italic leading-relaxed">
                            {t}
                        </p>
                    ))}
                </div>
            </div>

            {/* Commentary (Bottom) */}
            <div className="col-span-3 border-t border-zinc-900 p-8 flex flex-col items-center justify-center text-center">
                <div className="max-w-2xl space-y-2">
                    <span className="text-xs text-zinc-600 uppercase tracking-widest">Post-Move Analytical Critique</span>
                    <p className="text-xl font-medium text-white italic">
                        {commentary || "Waiting for initial exchange..."}
                    </p>
                </div>
            </div>
        </div>
    );
}
