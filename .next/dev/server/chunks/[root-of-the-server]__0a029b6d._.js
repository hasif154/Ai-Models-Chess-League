module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Ai chess/app/api/chess/move/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/chess.js/dist/esm/chess.js [app-route] (ecmascript)");
;
;
// Utility: Sleep for a given number of milliseconds
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
// Retry configuration
const MAX_RETRIES = 3;
const INITIAL_DELAY_MS = 2000; // 2 seconds
async function POST(req) {
    let legalMoves = [];
    let cleanModel = "unknown";
    try {
        // Parse request body with error handling
        let requestBody;
        try {
            requestBody = await req.json();
        } catch (parseError) {
            console.error("Failed to parse request body:", parseError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid request body"
            }, {
                status: 400
            });
        }
        const { apiKeys, model, role, fen, history } = requestBody;
        console.log("=== Chess Move Request ===");
        console.log("Model:", model);
        console.log("Role:", role);
        console.log("FEN:", fen);
        console.log("History length:", history?.length || 0);
        // Validate required fields
        if (!model || !fen) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required fields: model or fen"
            }, {
                status: 400
            });
        }
        // Determine which API to use based on model ID format
        const isGroq = !model.includes("/");
        const apiKey = isGroq ? apiKeys?.groq : apiKeys?.openrouter;
        const baseUrl = isGroq ? "https://api.groq.com/openai/v1" : "https://openrouter.ai/api/v1";
        const providerName = isGroq ? "Groq" : "OpenRouter";
        if (!apiKey) {
            console.error("Missing API Key for:", providerName);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `API key for ${providerName} not provided`
            }, {
                status: 400
            });
        }
        // Initialize chess with FEN - with error handling
        let chess;
        try {
            chess = new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Chess"](fen);
        } catch (fenError) {
            console.error("Invalid FEN:", fen, fenError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid FEN position"
            }, {
                status: 400
            });
        }
        legalMoves = chess.moves();
        console.log("Legal moves count:", legalMoves.length);
        if (legalMoves.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                move: "resign",
                thoughts: "No legal moves available."
            });
        }
        const systemPrompt = `You are a Grandmaster AI playing a chess match in the "AI Chess League".
Current FEN: ${fen}
Previous moves: ${history && history.length > 0 ? history.join(", ") : "None (opening)"}
You are playing as ${role}.
Legal moves available: ${legalMoves.join(", ")}

Your goal is to win. Analyze the position carefully and choose the best move.

CRITICAL: You MUST output ONLY a valid JSON object with this exact format:
{
  "move": "<one of the legal moves listed above, e.g., e4 or Nf3>",
  "thoughts": "<a natural paragraph explaining your strategic reasoning, no bullets, no headings, 1-2 sentences>"
}

IMPORTANT:
- The "move" field MUST be exactly one of the legal moves listed above
- Use standard algebraic notation (e.g., e4, Nf3, O-O for castling, Qxd7+, etc.)
- If the position is hopeless, you may use "resign" as the move
- Output valid JSON only, no additional text`;
        // Clean model name for API call
        cleanModel = model;
        if (model === "Llama 3.3 70B") cleanModel = "llama-3.3-70b-versatile";
        else if (model === "Llama 3.1 8B") cleanModel = "llama-3.1-8b-instant";
        else if (model === "Mixtral 8x7B") cleanModel = "mixtral-8x7b-32768";
        const apiRequestBody = {
            model: cleanModel,
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: "Choose your move. Remember to output valid JSON only."
                }
            ],
            temperature: 0.3,
            max_tokens: 500
        };
        // Add JSON response format for supported models
        const supportsJson = isGroq || cleanModel.includes("gpt") || cleanModel.includes("claude-3-5") || cleanModel.includes("gemini-2.0");
        if (supportsJson) {
            apiRequestBody.response_format = {
                type: "json_object"
            };
        }
        console.log(`Requesting move from ${cleanModel} via ${providerName}`);
        // Retry loop with exponential backoff
        let response = null;
        let lastError = "";
        for(let attempt = 0; attempt < MAX_RETRIES; attempt++){
            try {
                response = await fetch(`${baseUrl}/chat/completions`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                        ...isGroq ? {} : {
                            "HTTP-Referer": "https://ai-chess-league.com",
                            "X-Title": "AI Chess League"
                        }
                    },
                    body: JSON.stringify(apiRequestBody)
                });
                // Check if successful
                if (response.ok) {
                    console.log(`API request succeeded on attempt ${attempt + 1}`);
                    break;
                }
                // Handle rate limiting with retry
                if (response.status === 429) {
                    const retryAfter = response.headers.get("retry-after");
                    const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : INITIAL_DELAY_MS * Math.pow(2, attempt);
                    console.warn(`Rate limited (429) on attempt ${attempt + 1}. Waiting ${waitTime}ms before retry...`);
                    lastError = `Rate limited by ${providerName}`;
                    if (attempt < MAX_RETRIES - 1) {
                        await sleep(waitTime);
                        continue;
                    }
                }
                // Handle server errors with retry
                if (response.status >= 500) {
                    const waitTime = INITIAL_DELAY_MS * Math.pow(2, attempt);
                    console.warn(`Server error (${response.status}) on attempt ${attempt + 1}. Waiting ${waitTime}ms before retry...`);
                    lastError = `${providerName} server error (${response.status})`;
                    if (attempt < MAX_RETRIES - 1) {
                        await sleep(waitTime);
                        continue;
                    }
                }
                // Non-retryable errors
                if (response.status === 401) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: `Invalid ${providerName} API Key`
                    }, {
                        status: 401
                    });
                }
                if (response.status === 402) {
                    lastError = `${providerName} requires payment or credits`;
                    break;
                }
                // Other errors - log and break
                const errorText = await response.text();
                console.error(`API Error (${response.status}):`, errorText);
                lastError = `${providerName} error: ${response.status}`;
                break;
            } catch (fetchError) {
                console.error(`Fetch error on attempt ${attempt + 1}:`, fetchError);
                lastError = "Network connection error";
                if (attempt < MAX_RETRIES - 1) {
                    const waitTime = INITIAL_DELAY_MS * Math.pow(2, attempt);
                    await sleep(waitTime);
                    continue;
                }
            }
        }
        // If all retries failed, return a fallback move
        if (!response || !response.ok) {
            const fallbackMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
            console.warn(`All ${MAX_RETRIES} attempts failed. Using fallback move: ${fallbackMove}`);
            let errorMessage = lastError || "API unavailable";
            // Provide specific guidance for OpenRouter limits
            if (!isGroq && lastError.includes("Rate limited")) {
                errorMessage = "OpenRouter rate limit reached (50/day free tier). Consider using Groq models.";
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                move: fallbackMove,
                thoughts: `${errorMessage} Playing ${fallbackMove}.`
            });
        }
        // Parse API response with error handling
        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            console.error("Failed to parse API response:", jsonError);
            const fallbackMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                move: fallbackMove,
                thoughts: "Response parsing failed, playing a legal move."
            });
        }
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error("Unexpected API response structure:", JSON.stringify(data));
            const fallbackMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                move: fallbackMove,
                thoughts: "Unexpected API response, playing a legal move."
            });
        }
        const content = data.choices[0].message.content;
        console.log(`AI Response from ${cleanModel}:`, content?.substring(0, 200));
        if (!content) {
            const fallbackMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                move: fallbackMove,
                thoughts: "Empty AI response, playing a legal move."
            });
        }
        // Parse JSON from response with multiple fallback strategies
        let parsed = {};
        // Strategy 1: Direct JSON parse
        try {
            parsed = JSON.parse(content);
        } catch  {
            // Strategy 2: Extract JSON from text
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                try {
                    parsed = JSON.parse(jsonMatch[0]);
                } catch  {
                // Continue to text extraction
                }
            }
        }
        // Strategy 3: Extract move from text patterns
        if (!parsed.move) {
            const movePatterns = [
                /["']?move["']?\s*[:\-]\s*["']?([a-zA-Z0-9\-\+\=\#]+)["']?/i,
                /\b(O-O-O|O-O)\b/,
                /\b([NBRQK]?[a-h]?[1-8]?x?[a-h][1-8](?:=[NBRQ])?[\+\#]?)\b/
            ];
            for (const pattern of movePatterns){
                const match = content.match(pattern);
                if (match && match[1]) {
                    // Verify this is actually a legal move
                    if (legalMoves.some((m)=>m.toLowerCase() === match[1].toLowerCase())) {
                        parsed.move = match[1];
                        parsed.thoughts = parsed.thoughts || "Move extracted from response.";
                        break;
                    }
                }
            }
        }
        // Strategy 4: Pick random legal move as last resort
        if (!parsed.move) {
            parsed.move = legalMoves[Math.floor(Math.random() * legalMoves.length)];
            parsed.thoughts = "Could not parse AI response, playing a legal move.";
            console.warn(`Failed to parse move from ${cleanModel}, using fallback: ${parsed.move}`);
        }
        // Validate and correct the move
        if (parsed.move && parsed.move.toLowerCase() !== "resign") {
            const testChess = new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Chess"](fen);
            let moveValid = false;
            try {
                const testMove = testChess.move(parsed.move);
                moveValid = !!testMove;
            } catch  {
                moveValid = false;
            }
            if (!moveValid) {
                // Try fuzzy matching against legal moves
                const inputMove = parsed.move.toLowerCase().replace(/[^a-z0-9]/g, '');
                const matchedMove = legalMoves.find((m)=>{
                    const cleanM = m.toLowerCase().replace(/[^a-z0-9]/g, '');
                    return cleanM === inputMove || cleanM.includes(inputMove) || inputMove.includes(cleanM);
                });
                if (matchedMove) {
                    console.log(`Corrected move from "${parsed.move}" to "${matchedMove}"`);
                    parsed.thoughts = `${parsed.thoughts || ""} (Corrected to ${matchedMove})`.trim();
                    parsed.move = matchedMove;
                } else {
                    // Use random legal move
                    const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
                    console.warn(`Invalid move "${parsed.move}" from ${cleanModel}, using ${randomMove}`);
                    parsed.thoughts = `Move corrected to ${randomMove}.`;
                    parsed.move = randomMove;
                }
            }
        }
        console.log("=== Returning Move ===", parsed.move);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            move: parsed.move || legalMoves[0],
            thoughts: parsed.thoughts || "Strategic move played."
        });
    } catch (error) {
        const err = error;
        console.error("=== Move API Unhandled Error ===");
        console.error("Error:", err.message);
        console.error("Stack:", err.stack);
        // Even on unhandled errors, try to return a legal move if we have them
        if (legalMoves.length > 0) {
            const fallbackMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
            return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                move: fallbackMove,
                thoughts: "An error occurred, playing a safe move."
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message || "Unknown error",
            stack: ("TURBOPACK compile-time truthy", 1) ? err.stack : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a029b6d._.js.map