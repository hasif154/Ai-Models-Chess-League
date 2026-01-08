"use client";

import { useState } from "react";
import ApiKeyEntry from "@/components/ApiKeyEntry";
import ModelSelection from "@/components/ModelSelection";
import MatchBoard from "@/components/MatchBoard";

export default function Home() {
    const [step, setStep] = useState(0);
    const [apiKeys, setApiKeys] = useState({ groq: "", openrouter: "" });
    const [models, setModels] = useState({ model1: "", model2: "" });

    const handleApiKeysSubmit = (keys: { groq: string; openrouter: string }) => {
        setApiKeys(keys);
        setStep(1);
    };

    const handleModelsSubmit = (model1: string, model2: string) => {
        setModels({ model1, model2 });
        setStep(2);
    };

    return (
        <main className="min-h-screen bg-black text-white">
            {step === 0 && <ApiKeyEntry onSubmit={handleApiKeysSubmit} />}
            {step === 1 && <ModelSelection apiKeys={apiKeys} onSubmit={handleModelsSubmit} />}
            {step === 2 && (
                <MatchBoard
                    apiKeys={apiKeys}
                    model1={models.model1}
                    model2={models.model2}
                />
            )}
        </main>
    );
}
