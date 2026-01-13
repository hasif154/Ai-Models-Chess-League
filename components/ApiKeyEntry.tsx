"use client";

import { useState } from "react";

interface ApiKeyEntryProps {
    onSubmit: (keys: { groq: string; openrouter: string }) => void;
}

export default function ApiKeyEntry({ onSubmit }: ApiKeyEntryProps) {
    const [groq, setGroq] = useState("");
    const [openrouter, setOpenrouter] = useState("");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (groq) {
            onSubmit({ groq, openrouter });
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-pattern overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-lg space-y-10 text-center">
                {/* Logo & Title */}
                <div className="space-y-4">
                    {/* Chess Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 22H5v-2h14v2M17.16 8.26A8.94 8.94 0 0018 5H6a9 9 0 00.84 3.26L4.2 12.58c-.31.71-.2 1.55.27 2.15.47.6 1.2.97 1.97.97H12v4h4v-4h5.56c.77 0 1.5-.37 1.97-.97.47-.6.58-1.44.27-2.15l-2.64-4.32zM12 14a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </div>
                            <div className="absolute -inset-2 bg-white/5 rounded-3xl blur-xl" />
                        </div>
                    </div>

                    <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic text-glow">
                        AI Chess League
                    </h1>
                    <p className="text-zinc-500 text-sm tracking-wide">
                        Watch AI models battle it out on the chessboard
                    </p>
                </div>

                {/* API Key Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="glass-card rounded-2xl p-8 space-y-6">
                        {/* Groq API Key */}
                        <div className="space-y-3 text-left">
                            <label className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Groq API Key
                                <span className="ml-auto text-[10px] text-zinc-600 normal-case tracking-normal font-normal">Required</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={groq}
                                    onChange={(e) => setGroq(e.target.value)}
                                    onFocus={() => setFocusedField('groq')}
                                    onBlur={() => setFocusedField(null)}
                                    className="premium-input w-full p-4 text-white text-sm"
                                    placeholder="gsk_..."
                                    required
                                />
                                {focusedField === 'groq' && (
                                    <div className="absolute inset-0 rounded-xl border border-emerald-500/20 pointer-events-none" />
                                )}
                            </div>
                            <p className="text-[11px] text-zinc-600">
                                Get your free API key at{" "}
                                <a
                                    href="https://console.groq.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                                >
                                    console.groq.com
                                </a>
                            </p>
                        </div>

                        <div className="fancy-divider" />

                        {/* OpenRouter API Key */}
                        <div className="space-y-3 text-left">
                            <label className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                OpenRouter API Key
                                <span className="ml-auto text-[10px] text-zinc-600 normal-case tracking-normal font-normal">Optional</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={openrouter}
                                    onChange={(e) => setOpenrouter(e.target.value)}
                                    onFocus={() => setFocusedField('openrouter')}
                                    onBlur={() => setFocusedField(null)}
                                    className="premium-input w-full p-4 text-white text-sm"
                                    placeholder="sk-or-v1-..."
                                />
                                {focusedField === 'openrouter' && (
                                    <div className="absolute inset-0 rounded-xl border border-purple-500/20 pointer-events-none" />
                                )}
                            </div>
                            <p className="text-[11px] text-zinc-600">
                                Unlocks GPT-4o, Claude, Gemini &amp; more at{" "}
                                <a
                                    href="https://openrouter.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                                >
                                    openrouter.ai
                                </a>
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!groq}
                        className={`premium-button w-full py-4 px-6 text-sm ${!groq ? 'opacity-40 cursor-not-allowed' : ''
                            }`}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Continue
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </form>

                {/* Footer Note */}
                <p className="text-[11px] text-zinc-700">
                    Your API keys are used locally and never stored on any server.
                </p>
            </div>
        </div>
    );
}
