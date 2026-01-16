"use client";

import { useState } from "react";

interface ModelSelectionProps {
    apiKeys: { groq: string; openrouter: string };
    onSubmit: (model1: string, model2: string) => void;
}

const GROQ_MODELS = [
    { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B" },
    { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B" },
    { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B" },
];

const OPENROUTER_MODELS = [
    { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash" },
    { id: "anthropic/claude-3.5-sonnet", name: "Claude 3.5 Sonnet" },
    { id: "openai/gpt-4o", name: "GPT-4o" },
];

export default function ModelSelection({ apiKeys, onSubmit }: ModelSelectionProps) {
    const availableModels = [...GROQ_MODELS];
    if (apiKeys.openrouter) availableModels.push(...OPENROUTER_MODELS);

    const [model1, setModel1] = useState(availableModels[0].id);
    const [model2, setModel2] = useState(availableModels[1]?.id || availableModels[0].id);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-pattern">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-5xl space-y-12 text-center">
                <div className="space-y-3">
                    <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic text-glow">
                        Choose Your Fighters
                    </h1>
                    <p className="text-zinc-500 text-sm">Select AI models for an epic chess battle</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    <div className="w-full lg:w-80 player-card player-card-white p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="12" cy="8" r="4" /><path d="M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest">Player 1</div>
                                <div className="text-sm font-semibold text-white">White Pieces</div>
                            </div>
                        </div>
                        <select value={model1} onChange={(e) => setModel1(e.target.value)} className="premium-select w-full p-4 text-white text-sm">
                            {availableModels.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                        </select>
                    </div>

                    <div className="vs-badge shrink-0">VS</div>

                    <div className="w-full lg:w-80 player-card player-card-black p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="12" cy="8" r="4" /><path d="M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest">Player 2</div>
                                <div className="text-sm font-semibold text-white">Black Pieces</div>
                            </div>
                        </div>
                        <select value={model2} onChange={(e) => setModel2(e.target.value)} className="premium-select w-full p-4 text-white text-sm">
                            {availableModels.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                        </select>
                    </div>
                </div>

                <button onClick={() => onSubmit(model1, model2)} className="premium-button py-4 px-12 text-sm">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        Start Match
                    </span>
                </button>

                {!apiKeys.openrouter && <p className="text-[11px] text-zinc-600">Add OpenRouter API key to unlock GPT-4o, Claude, and Gemini.</p>}
            </div>
        </div>
    );
}
