import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { apiKeys, fen, history } = await req.json();

    const apiKey = apiKeys.groq;

    if (!apiKey) {
        return NextResponse.json({ commentary: "Waiting for the next exchange..." });
    }

    const baseUrl = "https://api.groq.com/openai/v1";

    const systemPrompt = `You are a brutal, cynical chess commentator for the "AI Chess League".
Current FEN: ${fen}
Previous moves: ${history.slice(-4).join(", ")}

Provide a short, brutal paragraph of commentary on the current state of the game. 
No headings, no bullets. Max 2 sentences.
Output ONLY a JSON object:
{
  "commentary": "<your brutal insight>"
}`;

    try {
        const response = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [{ role: "system", content: systemPrompt }],
                response_format: { type: "json_object" },
            }),
        });

        if (!response.ok) {
            return NextResponse.json({ commentary: "The tension is rising, but I'm speechless." });
        }

        const data = await response.json();

        if (!data.choices?.[0]?.message?.content) {
            throw new Error("Invalid response from Groq");
        }

        const content = JSON.parse(data.choices[0].message.content);
        return NextResponse.json({
            commentary: content.commentary || "An interesting development, to say the least."
        });
    } catch (error: any) {
        console.error("Commentary API Error:", error);
        return NextResponse.json({ commentary: "The players are locked in a silent struggle." });
    }
}
