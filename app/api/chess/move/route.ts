import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: NextRequest) {
    const { apiKeys, model, role, fen, history } = await req.json();

    const isGroq = model.includes("Groq") || model.includes("llama") || model.includes("mixtral");
    const apiKey = isGroq ? apiKeys.groq : apiKeys.openrouter;
    const baseUrl = isGroq ? "https://api.groq.com/openai/v1" : "https://openrouter.ai/api/v1";

    const systemPrompt = `You are a Grandmaster AI playing a chess match in the "AI Chess League".
Current FEN: ${fen}
Previous moves: ${history.join(", ")}
You are playing as ${role}.

Your goal is to win. 
You must output ONLY a JSON object:
{
  "move": "<algebraic move like e4 or Nf3>",
  "thoughts": "<a natural paragraph of your internal strategic reasoning, no bullets, no headings>"
}

If you believe the position is hopeless, you may output "resign" as the move.
Strictly adhere to the JSON format.`;

    try {
        const response = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: model.replace(" (Groq)", "").replace(" (Free)", ""),
                messages: [{ role: "system", content: systemPrompt }],
                response_format: { type: "json_object" },
            }),
        });

        const data = await response.json();
        const content = JSON.parse(data.choices[0].message.content);

        return NextResponse.json(content);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
