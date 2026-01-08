"use client";

import { useState } from "react";

interface ModelSelectionProps {
    apiKeys: { groq: string; openrouter: string };
    onSubmit: (model1: string, model2: string) => void;
}

const GROQ_MODELS = [
    { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B (Groq)" },
    { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B (Groq)" },
    { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B (Groq)" },
];

const OPENROUTER_MODELS = [
    { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash (Free)" },
    { id: "anthropic/claude-3.5-sonnet", name: "Claude 3.5 Sonnet" },
    { id: "openai/gpt-4o", name: "GPT-4o" },
];

export default function ModelSelection({ apiKeys, onSubmit }: ModelSelectionProps) {
    const availableModels = [...GROQ_MODELS];
    if (apiKeys.openrouter) {
        availableModels.push(...OPENROUTER_MODELS);
    }

    const [model1, setModel1] = useState(availableModels[0].id);
    const [model2, setModel2] = useState(availableModels[1]?.id || availableModels[0].id);

    const handleSubmit = () => {
        onSubmit(model1, model2);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-4xl space-y-12 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter text-white uppercase italic">
                        AI CHESS LEAGUE
                    </h1>
                    <p className="text-zinc-500 uppercase tracking-widest text-sm">Choose AI model</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="flex-1 w-full space-y-4">
                        <label className="block text-xs text-zinc-500 uppercase tracking-widest text-left">
                            AI Model 1 (White)
                        </label>
                        <select
                            value={model1}
                            onChange={(e) => setModel1(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-none p-6 text-white text-lg focus:outline-none focus:border-white appearance-none cursor-pointer"
                        >
                            {availableModels.map((m) => (
                                <option key={m.id} value={m.id}>
                                    {m.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="text-4xl font-bold italic text-zinc-800 hidden md:block">VS</div>

                    <div className="flex-1 w-full space-y-4">
                        <label className="block text-xs text-zinc-500 uppercase tracking-widest text-left">
                            AI Model 2 (Black)
                        </label>
                        <select
                            value={model2}
                            onChange={(e) => setModel2(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-none p-6 text-white text-lg focus:outline-none focus:border-white appearance-none cursor-pointer"
                        >
                            {availableModels.map((m) => (
                                <option key={m.id} value={m.id}>
                                    {m.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className="mt-12 px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                >
                    Start Match
                </button>
            </div>
        </div>
    );
}
