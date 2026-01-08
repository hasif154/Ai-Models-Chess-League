import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { apiKeys, fen, history } = await req.json();

    const apiKey = apiKeys.groq;
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

        const data = await response.json();
        const content = JSON.parse(data.choices[0].message.content);

        return NextResponse.json(content);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
