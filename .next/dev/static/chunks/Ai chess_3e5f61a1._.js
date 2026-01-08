(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Ai chess/components/ApiKeyEntry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApiKeyEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ApiKeyEntry({ onSubmit }) {
    _s();
    const [groq, setGroq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [openrouter, setOpenrouter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (groq) {
            onSubmit({
                groq,
                openrouter
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md space-y-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold tracking-tighter text-white uppercase italic",
                    children: "AI Chess League"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-500",
                    children: "Enter your API keys to run the match"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-zinc-400 uppercase tracking-widest",
                                    children: "Groq API Key (required)"
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: groq,
                                    onChange: (e)=>setGroq(e.target.value),
                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-none p-4 text-white focus:outline-none focus:border-white transition-colors",
                                    placeholder: "gsk_...",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-zinc-400 uppercase tracking-widest",
                                    children: "OpenRouter API Key (optional)"
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: openrouter,
                                    onChange: (e)=>setOpenrouter(e.target.value),
                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-none p-4 text-white focus:outline-none focus:border-white transition-colors",
                                    placeholder: "sk-or-v1-..."
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:bg-zinc-200 transition-colors",
                            children: "Continue"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(ApiKeyEntry, "KU4cHFvbT5WnlO9QBxvBFxHqy34=");
_c = ApiKeyEntry;
var _c;
__turbopack_context__.k.register(_c, "ApiKeyEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Ai chess/components/ModelSelection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModelSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const GROQ_MODELS = [
    {
        id: "llama-3.3-70b-versatile",
        name: "Llama 3.3 70B (Groq)"
    },
    {
        id: "llama-3.1-8b-instant",
        name: "Llama 3.1 8B (Groq)"
    },
    {
        id: "mixtral-8x7b-32768",
        name: "Mixtral 8x7B (Groq)"
    }
];
const OPENROUTER_MODELS = [
    {
        id: "google/gemini-2.0-flash-exp:free",
        name: "Gemini 2.0 Flash (Free)"
    },
    {
        id: "anthropic/claude-3.5-sonnet",
        name: "Claude 3.5 Sonnet"
    },
    {
        id: "openai/gpt-4o",
        name: "GPT-4o"
    }
];
function ModelSelection({ apiKeys, onSubmit }) {
    _s();
    const availableModels = [
        ...GROQ_MODELS
    ];
    if (apiKeys.openrouter) {
        availableModels.push(...OPENROUTER_MODELS);
    }
    const [model1, setModel1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(availableModels[0].id);
    const [model2, setModel2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(availableModels[1]?.id || availableModels[0].id);
    const handleSubmit = ()=>{
        onSubmit(model1, model2);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl space-y-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold tracking-tighter text-white uppercase italic",
                            children: "AI CHESS LEAGUE"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-500 uppercase tracking-widest text-sm",
                            children: "Choose AI model"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 w-full space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-zinc-500 uppercase tracking-widest text-left",
                                    children: "AI Model 1 (White)"
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: model1,
                                    onChange: (e)=>setModel1(e.target.value),
                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-none p-6 text-white text-lg focus:outline-none focus:border-white appearance-none cursor-pointer",
                                    children: availableModels.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: m.id,
                                            children: m.name
                                        }, m.id, false, {
                                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl font-bold italic text-zinc-800 hidden md:block",
                            children: "VS"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 w-full space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs text-zinc-500 uppercase tracking-widest text-left",
                                    children: "AI Model 2 (Black)"
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: model2,
                                    onChange: (e)=>setModel2(e.target.value),
                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-none p-6 text-white text-lg focus:outline-none focus:border-white appearance-none cursor-pointer",
                                    children: availableModels.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: m.id,
                                            children: m.name
                                        }, m.id, false, {
                                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSubmit,
                    className: "mt-12 px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors",
                    children: "Start Match"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                    lineNumber: 83,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(ModelSelection, "F8K02Mfg6K1GhR5mlStwdlgIkxo=");
_c = ModelSelection;
var _c;
__turbopack_context__.k.register(_c, "ModelSelection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Ai chess/components/chess/Scene3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene3d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/// <reference types="@react-three/fiber" />
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/ContactShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/chess.js/dist/esm/chess.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SQUARE_SIZE = 1;
const BOARD_SIZE = 8;
function Scene3d({ fen, lastMove }) {
    _s();
    const board = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Scene3d.useMemo[board]": ()=>{
            const c = new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"](fen);
            return c.board();
        }
    }["Scene3d.useMemo[board]"], [
        fen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            dpr: [
                1,
                2
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                    makeDefault: true,
                    position: [
                        0,
                        8,
                        8
                    ],
                    fov: 45
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                    enablePan: false,
                    maxPolarAngle: Math.PI / 2.1,
                    minDistance: 8,
                    maxDistance: 15,
                    autoRotate: false
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                    attach: "background",
                    args: [
                        "#050505"
                    ]
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                    attach: "fog",
                    args: [
                        "#050505",
                        10,
                        20
                    ]
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.2
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                    position: [
                        10,
                        15,
                        10
                    ],
                    angle: 0.3,
                    penumbra: 1,
                    intensity: 200,
                    castShadow: true,
                    "shadow-mapSize": [
                        1024,
                        1024
                    ]
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        -10,
                        5,
                        -10
                    ],
                    intensity: 50,
                    color: "#333"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Board, {}, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                board.flat().map((cell, i)=>{
                    if (!cell) return null;
                    const x = i % 8 - 3.5;
                    const z = Math.floor(i / 8) - 3.5;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Piece, {
                        type: cell.type,
                        color: cell.color,
                        position: [
                            x,
                            0,
                            z
                        ]
                    }, `${cell.type}-${cell.color}-${i}`, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 57,
                        columnNumber: 25
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactShadows"], {
                    opacity: 0.4,
                    scale: 20,
                    blur: 2,
                    far: 4.5,
                    resolution: 256,
                    color: "#000000"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                    preset: "night"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(Scene3d, "DjA+Py5MNWoFEaTMK2jwdkWQfvg=");
_c = Scene3d;
function Board() {
    const squares = [];
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            const isDark = (i + j) % 2 === 1;
            squares.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    i - 3.5,
                    -0.05,
                    j - 3.5
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1,
                            0.1,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: isDark ? "#111" : "#222",
                        roughness: 0.5,
                        metalness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this)
                ]
            }, `${i}-${j}`, true, {
                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                lineNumber: 86,
                columnNumber: 17
            }, this));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            squares,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -0.2,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            9,
                            0.2,
                            9
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#050505",
                        roughness: 1
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
_c1 = Board;
function Piece({ type, color, position }) {
    _s1();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Piece.useMemo[targetPos]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...position)
    }["Piece.useMemo[targetPos]"], [
        position
    ]);
    const currentPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...position));
    const isWhite = color === "w";
    const colorHex = isWhite ? "#ededed" : "#333333";
    const metalness = isWhite ? 0.2 : 0.8;
    const roughness = isWhite ? 0.3 : 0.1;
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Piece.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: colorHex,
                metalness,
                roughness
            })
    }["Piece.useMemo[material]"], [
        colorHex,
        metalness,
        roughness
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Piece.useFrame": (state, delta)=>{
            if (meshRef.current) {
                currentPos.current.lerp(targetPos, 0.1);
                meshRef.current.position.copy(currentPos.current);
                // Subtle float effect relative to base position
                meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.005;
            }
        }
    }["Piece.useFrame"]);
    const getGeometry = ()=>{
        switch(type){
            case "p":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    castShadow: true,
                    material: material,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.25,
                            0.3,
                            0.5,
                            20
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 143,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 142,
                    columnNumber: 21
                }, this);
            case "r":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    castShadow: true,
                    material: material,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.45,
                            0.7,
                            0.45
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 149,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                }, this);
            case "n":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                -0.1,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.15,
                                    0.35,
                                    0.4,
                                    8
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 156,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 155,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0.2,
                                0.05
                            ],
                            rotation: [
                                Math.PI / 4,
                                0,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.25,
                                    0.35,
                                    0.25
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 159,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 158,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                }, this);
            case "b":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                -0.1,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.1,
                                    0.3,
                                    0.6,
                                    20
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 167,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 166,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0.3,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.18
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 170,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 169,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 165,
                    columnNumber: 21
                }, this);
            case "q":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.15,
                                    0.3,
                                    0.8,
                                    20
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 178,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 177,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0.45,
                                0
                            ],
                            rotation: [
                                Math.PI / 2,
                                0,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                args: [
                                    0.12,
                                    0.04,
                                    8,
                                    20
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 181,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 180,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 176,
                    columnNumber: 21
                }, this);
            case "k":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.15,
                                    0.3,
                                    0.8,
                                    20
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 189,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 188,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0.5,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.15,
                                    0.3,
                                    0.15
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 192,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 191,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0.55,
                                0
                            ],
                            castShadow: true,
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.35,
                                    0.1,
                                    0.15
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 195,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 194,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 187,
                    columnNumber: 21
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    castShadow: true,
                    material: material,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 202,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 201,
                    columnNumber: 21
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: meshRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
            speed: 2,
            rotationIntensity: 0.1,
            floatIntensity: 0.2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0.3,
                    0
                ],
                children: getGeometry()
            }, void 0, false, {
                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                lineNumber: 211,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
            lineNumber: 210,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
        lineNumber: 209,
        columnNumber: 9
    }, this);
}
_s1(Piece, "KG9oQW6WoVHAYEVE44ycESIWikg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = Piece;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Scene3d");
__turbopack_context__.k.register(_c1, "Board");
__turbopack_context__.k.register(_c2, "Piece");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Ai chess/components/MatchBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/chess.js/dist/esm/chess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$chess$2f$Scene3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/chess/Scene3d.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MatchBoard({ apiKeys, model1, model2 }) {
    _s();
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"]());
    const [thoughts1, setThoughts1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thoughts2, setThoughts2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commentary, setCommentary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("playing");
    const turnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("w");
    const scrollRef1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchBoard.useEffect": ()=>{
            if (scrollRef1.current) scrollRef1.current.scrollTop = scrollRef1.current.scrollHeight;
        }
    }["MatchBoard.useEffect"], [
        thoughts1
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchBoard.useEffect": ()=>{
            if (scrollRef2.current) scrollRef2.current.scrollTop = scrollRef2.current.scrollHeight;
        }
    }["MatchBoard.useEffect"], [
        thoughts2
    ]);
    const requestMove = async ()=>{
        if (status === "ended" || isThinking) return;
        setIsThinking(true);
        const turn = game.turn();
        const currentModel = turn === "w" ? model1 : model2;
        const history = game.history();
        const fen = game.fen();
        try {
            const res = await fetch("/api/chess/move", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    apiKeys,
                    model: currentModel,
                    role: turn === "w" ? "white" : "black",
                    fen,
                    history
                })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            // Apply move
            const moveResult = game.move(data.move);
            if (moveResult) {
                setGame(new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"](game.fen()));
                if (turn === "w") {
                    setThoughts1((prev)=>[
                            ...prev,
                            data.thoughts
                        ]);
                } else {
                    setThoughts2((prev)=>[
                            ...prev,
                            data.thoughts
                        ]);
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
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        apiKeys,
                        fen: game.fen(),
                        history: game.history()
                    })
                });
                const commData = await commRes.json();
                setCommentary(commData.commentary);
            }
        } catch (err) {
            console.error(err);
        } finally{
            setIsThinking(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchBoard.useEffect": ()=>{
            // Start the game loop
            const timer = setTimeout({
                "MatchBoard.useEffect.timer": ()=>{
                    if (status === "playing" && !isThinking) {
                        requestMove();
                    }
                }
            }["MatchBoard.useEffect.timer"], 1000);
            return ({
                "MatchBoard.useEffect": ()=>clearTimeout(timer)
            })["MatchBoard.useEffect"];
        }
    }["MatchBoard.useEffect"], [
        game,
        status,
        isThinking
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 grid grid-cols-[300px_1fr_300px] grid-rows-[1fr_200px] bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-r border-zinc-900 p-6 flex flex-col justify-end overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 left-6 text-xs text-zinc-600 uppercase tracking-widest",
                        children: model1
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef1,
                        className: "thoughts-scroll fade-up overflow-y-auto space-y-8 flex flex-col-reverse",
                        children: thoughts1.slice().reverse().map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 text-sm italic leading-relaxed",
                                children: t
                            }, i, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-b border-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$chess$2f$Scene3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fen: game.fen(),
                        lastMove: game.history().slice(-1)[0]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    isThinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-8 left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs uppercase tracking-widest text-zinc-500 animate-pulse",
                            children: "AI Thinking..."
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 132,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this),
                    status === "ended" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/60 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold uppercase tracking-tighter italic",
                            children: "Match Over"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 139,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l border-zinc-900 p-6 flex flex-col justify-end overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 right-6 text-xs text-zinc-600 uppercase tracking-widest text-right",
                        children: model2
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef2,
                        className: "thoughts-scroll fade-up overflow-y-auto space-y-8 flex flex-col-reverse",
                        children: thoughts2.slice().reverse().map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 text-sm italic leading-relaxed",
                                children: t
                            }, i, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 154,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 149,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                lineNumber: 145,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-3 border-t border-zinc-900 p-8 flex flex-col items-center justify-center text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-zinc-600 uppercase tracking-widest",
                            children: "Post-Move Analytical Critique"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl font-medium text-white italic",
                            children: commentary || "Waiting for initial exchange..."
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 165,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                    lineNumber: 163,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, this);
}
_s(MatchBoard, "64uEkCSv5oVv1Gww5fF/hcb5ZUA=");
_c = MatchBoard;
var _c;
__turbopack_context__.k.register(_c, "MatchBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Ai chess/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ApiKeyEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/ApiKeyEntry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ModelSelection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/ModelSelection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$MatchBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/MatchBoard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [apiKeys, setApiKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        groq: "",
        openrouter: ""
    });
    const [models, setModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        model1: "",
        model2: ""
    });
    const handleApiKeysSubmit = (keys)=>{
        setApiKeys(keys);
        setStep(1);
    };
    const handleModelsSubmit = (model1, model2)=>{
        setModels({
            model1,
            model2
        });
        setStep(2);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black text-white",
        children: [
            step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ApiKeyEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: handleApiKeysSubmit
            }, void 0, false, {
                fileName: "[project]/Ai chess/app/page.tsx",
                lineNumber: 25,
                columnNumber: 28
            }, this),
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ModelSelection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                apiKeys: apiKeys,
                onSubmit: handleModelsSubmit
            }, void 0, false, {
                fileName: "[project]/Ai chess/app/page.tsx",
                lineNumber: 26,
                columnNumber: 28
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$MatchBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                apiKeys: apiKeys,
                model1: models.model1,
                model2: models.model2
            }, void 0, false, {
                fileName: "[project]/Ai chess/app/page.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Ai chess/app/page.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(Home, "So0XK4Nkm2XqoFoAG51iALxMxMc=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Ai%20chess_3e5f61a1._.js.map