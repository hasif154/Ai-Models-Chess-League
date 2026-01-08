"use client";

import { useState } from "react";

interface ApiKeyEntryProps {
    onSubmit: (keys: { groq: string; openrouter: string }) => void;
}

export default function ApiKeyEntry({ onSubmit }: ApiKeyEntryProps) {
    const [groq, setGroq] = useState("");
    const [openrouter, setOpenrouter] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (groq) {
            onSubmit({ groq, openrouter });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md space-y-8 text-center">
                <h1 className="text-4xl font-bold tracking-tighter text-white uppercase italic">
                    AI Chess League
                </h1>
                <p className="text-zinc-500">Enter your API keys to run the match</p>

                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                    <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-widest">
                            Groq API Key (required)
                        </label>
                        <input
                            type="password"
                            value={groq}
                            onChange={(e) => setGroq(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-none p-4 text-white focus:outline-none focus:border-white transition-colors"
                            placeholder="gsk_..."
                            required
                        />
                    </div>

                    <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-widest">
                            OpenRouter API Key (optional)
                        </label>
                        <input
                            type="password"
                            value={openrouter}
                            onChange={(e) => setOpenrouter(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-none p-4 text-white focus:outline-none focus:border-white transition-colors"
                            placeholder="sk-or-v1-..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
}
