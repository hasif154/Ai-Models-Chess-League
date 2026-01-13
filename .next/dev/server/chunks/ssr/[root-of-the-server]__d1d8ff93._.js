module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Ai chess/components/ApiKeyEntry.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApiKeyEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ApiKeyEntry({ onSubmit }) {
    const [groq, setGroq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [openrouter, setOpenrouter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [focusedField, setFocusedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (groq) {
            onSubmit({
                groq,
                openrouter
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center justify-center min-h-screen p-4 bg-pattern overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-lg space-y-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-8 h-8 text-white",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 22H5v-2h14v2M17.16 8.26A8.94 8.94 0 0018 5H6a9 9 0 00.84 3.26L4.2 12.58c-.31.71-.2 1.55.27 2.15.47.6 1.2.97 1.97.97H12v4h4v-4h5.56c.77 0 1.5-.37 1.97-.97.47-.6.58-1.44.27-2.15l-2.64-4.32zM12 14a2 2 0 110-4 2 2 0 010 4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 36,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -inset-2 bg-white/5 rounded-3xl blur-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-black tracking-tighter text-white uppercase italic text-glow",
                                children: "AI Chess League"
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-500 text-sm tracking-wide",
                                children: "Watch AI models battle it out on the chessboard"
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-8 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-widest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 33
                                                    }, this),
                                                    "Groq API Key",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto text-[10px] text-zinc-600 normal-case tracking-normal font-normal",
                                                        children: "Required"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "password",
                                                        value: groq,
                                                        onChange: (e)=>setGroq(e.target.value),
                                                        onFocus: ()=>setFocusedField('groq'),
                                                        onBlur: ()=>setFocusedField(null),
                                                        className: "premium-input w-full p-4 text-white text-sm",
                                                        placeholder: "gsk_...",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 33
                                                    }, this),
                                                    focusedField === 'groq' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 rounded-xl border border-emerald-500/20 pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 62,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-zinc-600",
                                                children: [
                                                    "Get your free API key at",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://console.groq.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-zinc-400 hover:text-white underline underline-offset-2 transition-colors",
                                                        children: "console.groq.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 77,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fancy-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-widest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-purple-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 33
                                                    }, this),
                                                    "OpenRouter API Key",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto text-[10px] text-zinc-600 normal-case tracking-normal font-normal",
                                                        children: "Optional"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 94,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "password",
                                                        value: openrouter,
                                                        onChange: (e)=>setOpenrouter(e.target.value),
                                                        onFocus: ()=>setFocusedField('openrouter'),
                                                        onBlur: ()=>setFocusedField(null),
                                                        className: "premium-input w-full p-4 text-white text-sm",
                                                        placeholder: "sk-or-v1-..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 33
                                                    }, this),
                                                    focusedField === 'openrouter' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 rounded-xl border border-purple-500/20 pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 99,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-zinc-600",
                                                children: [
                                                    "Unlocks GPT-4o, Claude, Gemini & more at",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://openrouter.ai",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-zinc-400 hover:text-white underline underline-offset-2 transition-colors",
                                                        children: "openrouter.ai"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 113,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !groq,
                                className: `premium-button w-full py-4 px-6 text-sm ${!groq ? 'opacity-40 cursor-not-allowed' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 flex items-center justify-center gap-2",
                                    children: [
                                        "Continue",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2.5,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                                lineNumber: 136,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-zinc-700",
                        children: "Your API keys are used locally and never stored on any server."
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Ai chess/components/ApiKeyEntry.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/Ai chess/components/ModelSelection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModelSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const GROQ_MODELS = [
    {
        id: "llama-3.3-70b-versatile",
        name: "Llama 3.3 70B",
        provider: "Groq",
        icon: "🦙",
        speed: "Fast"
    },
    {
        id: "llama-3.1-8b-instant",
        name: "Llama 3.1 8B",
        provider: "Groq",
        icon: "🦙",
        speed: "Instant"
    },
    {
        id: "mixtral-8x7b-32768",
        name: "Mixtral 8x7B",
        provider: "Groq",
        icon: "🔀",
        speed: "Fast"
    }
];
const OPENROUTER_MODELS = [
    {
        id: "google/gemini-2.0-flash-exp:free",
        name: "Gemini 2.0",
        provider: "Google",
        icon: "✨",
        speed: "Fast"
    },
    {
        id: "anthropic/claude-3.5-sonnet",
        name: "Claude 3.5",
        provider: "Anthropic",
        icon: "🎭",
        speed: "Premium"
    },
    {
        id: "openai/gpt-4o",
        name: "GPT-4o",
        provider: "OpenAI",
        icon: "🧠",
        speed: "Premium"
    }
];
function ModelSelection({ apiKeys, onSubmit }) {
    const availableModels = [
        ...GROQ_MODELS
    ];
    if (apiKeys.openrouter) availableModels.push(...OPENROUTER_MODELS);
    const [model1, setModel1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(availableModels[0].id);
    const [model2, setModel2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(availableModels[1]?.id || availableModels[0].id);
    const getModelInfo = (id)=>[
            ...GROQ_MODELS,
            ...OPENROUTER_MODELS
        ].find((m)=>m.id === id);
    const m1 = getModelInfo(model1);
    const m2 = getModelInfo(model2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center justify-center min-h-screen p-4 bg-pattern",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/3 left-1/4 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl space-y-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-black tracking-tighter text-white uppercase italic text-glow",
                                children: "Choose Your Fighters"
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-500 text-sm",
                                children: "Select AI models for an epic chess battle"
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-80 player-card player-card-white p-6 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-white flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-black",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "8",
                                                            r: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 68
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 50,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-zinc-500 uppercase tracking-widest",
                                                        children: "Player 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: "White Pieces"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 55,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: model1,
                                        onChange: (e)=>setModel1(e.target.value),
                                        className: "premium-select w-full p-4 text-white text-sm",
                                        children: availableModels.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m.id,
                                                children: [
                                                    m.icon,
                                                    " ",
                                                    m.name
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 61,
                                                columnNumber: 57
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    m1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-500",
                                                children: m1.provider
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 63,
                                                columnNumber: 91
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-0.5 rounded-full text-[10px] ${m1.speed === 'Instant' ? 'bg-emerald-500/20 text-emerald-400' : m1.speed === 'Fast' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`,
                                                children: m1.speed
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 63,
                                                columnNumber: 143
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                        lineNumber: 63,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vs-badge shrink-0",
                                children: "VS"
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-80 player-card player-card-black p-6 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-white",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "8",
                                                            r: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 68
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-zinc-500 uppercase tracking-widest",
                                                        children: "Player 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: "Black Pieces"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 75,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: model2,
                                        onChange: (e)=>setModel2(e.target.value),
                                        className: "premium-select w-full p-4 text-white text-sm",
                                        children: availableModels.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m.id,
                                                children: [
                                                    m.icon,
                                                    " ",
                                                    m.name
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 81,
                                                columnNumber: 57
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    m2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-500",
                                                children: m2.provider
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 83,
                                                columnNumber: 91
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-0.5 rounded-full text-[10px] ${m2.speed === 'Instant' ? 'bg-emerald-500/20 text-emerald-400' : m2.speed === 'Fast' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`,
                                                children: m2.speed
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                                lineNumber: 83,
                                                columnNumber: 143
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                        lineNumber: 83,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSubmit(model1, model2),
                        className: "premium-button py-4 px-12 text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 5v14l11-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 90
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                "Start Match"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    !apiKeys.openrouter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-zinc-600",
                        children: "Add OpenRouter API key to unlock GPT-4o, Claude, and Gemini."
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                        lineNumber: 94,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/ModelSelection.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Ai chess/components/ModelSelection.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[project]/Ai chess/components/chess/Scene3d.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene3d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/// <reference types="@react-three/fiber" />
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/ContactShadows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/@react-three/drei/core/Environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/chess.js/dist/esm/chess.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Map piece positions
function fenToBoard(fen) {
    const chess = new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](fen);
    return chess.board();
}
function Scene3d({ fen, lastMove }) {
    const board = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>fenToBoard(fen), [
        fen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            dpr: [
                1,
                2
            ],
            gl: {
                antialias: true,
                alpha: false
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                    makeDefault: true,
                    position: [
                        0,
                        5,
                        11
                    ],
                    fov: 42
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                    enablePan: false,
                    maxPolarAngle: Math.PI / 2.1,
                    minPolarAngle: Math.PI / 8,
                    minDistance: 11,
                    maxDistance: 20,
                    autoRotate: false,
                    enableDamping: true,
                    dampingFactor: 0.05,
                    target: [
                        0,
                        0.5,
                        0
                    ]
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                    attach: "background",
                    args: [
                        "#0a0a0a"
                    ]
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.5
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        8,
                        15,
                        12
                    ],
                    intensity: 1.8,
                    castShadow: true,
                    "shadow-mapSize": [
                        2048,
                        2048
                    ],
                    "shadow-bias": -0.0001
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -10,
                        10,
                        5
                    ],
                    intensity: 0.6,
                    color: "#f8f8ff"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        8,
                        -15
                    ],
                    intensity: 40,
                    color: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
                            preset: "studio"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChessBoard, {}, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChessPieces, {
                            board: board
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactShadows"], {
                    position: [
                        0,
                        -0.01,
                        0
                    ],
                    opacity: 0.35,
                    scale: 14,
                    blur: 2.5,
                    far: 4,
                    resolution: 1024,
                    color: "#000000"
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 72,
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
function ChessBoard() {
    // Colors matching the reference image exactly
    const darkSquareColor = "#3d3d3d"; // Deep charcoal grey
    const lightSquareColor = "#d4d4d4"; // Clean off-white/light grey
    const borderColor = "#8b7355"; // Muted tan/dusty brown
    const squares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = [];
        for(let row = 0; row < 8; row++){
            for(let col = 0; col < 8; col++){
                const isDark = (row + col) % 2 === 1;
                const x = col - 3.5;
                const z = row - 3.5;
                result.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        x,
                        0.06,
                        z
                    ],
                    receiveShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                1,
                                0.12,
                                1
                            ]
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: isDark ? darkSquareColor : lightSquareColor,
                            roughness: 0.55,
                            metalness: 0.02
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this)
                    ]
                }, `${row}-${col}`, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 100,
                    columnNumber: 21
                }, this));
            }
        }
        return result;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            squares,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -0.02,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8.6,
                            0.2,
                            8.6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: borderColor,
                        roughness: 0.65,
                        metalness: 0.02
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.005,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8.02,
                            0.01,
                            8.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#2a2a2a",
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
        lineNumber: 119,
        columnNumber: 9
    }, this);
}
function ChessPieces({ board }) {
    const pieces = [];
    board.forEach((row, rowIndex)=>{
        row.forEach((cell, colIndex)=>{
            if (cell) {
                const x = colIndex - 3.5;
                const z = rowIndex - 3.5;
                pieces.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChessPiece, {
                    type: cell.type,
                    color: cell.color,
                    targetPosition: [
                        x,
                        0.12,
                        z
                    ]
                }, `${cell.type}-${cell.color}-${rowIndex}-${colIndex}`, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                }, this));
            }
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: pieces
    }, void 0, false);
}
function ChessPiece({ type, color, targetPosition }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...targetPosition));
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...targetPosition), [
        targetPosition
    ]);
    const isWhite = color === "w";
    // Materials matching reference - creamy white and glossy black
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isWhite) {
            // Creamy ivory white with semi-gloss
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#e8e4dc",
                roughness: 0.18,
                metalness: 0.05,
                envMapIntensity: 0.9
            });
        } else {
            // Deep glossy black with reflections
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#1a1a1a",
                roughness: 0.12,
                metalness: 0.35,
                envMapIntensity: 1.2
            });
        }
    }, [
        isWhite
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        if (meshRef.current) {
            currentPos.current.lerp(target, 0.12);
            meshRef.current.position.copy(currentPos.current);
        }
    });
    const getPieceGeometry = ()=>{
        const t = type.toLowerCase();
        switch(t){
            case "p":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.05,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.28,
                                    0.32,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 217,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 216,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.15,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.18,
                                    0.26,
                                    0.14,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 221,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 220,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.26,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.12,
                                    0.16,
                                    0.1,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 225,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 224,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.38,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.14,
                                    32,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 229,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 228,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 214,
                    columnNumber: 21
                }, this);
            case "r":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.05,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.3,
                                    0.34,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 238,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 237,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.28,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.22,
                                    0.28,
                                    0.4,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 241,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 240,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.52,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.26,
                                    0.22,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 244,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 243,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.62,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.24,
                                    0.26,
                                    0.12,
                                    6
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 248,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 247,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 236,
                    columnNumber: 21
                }, this);
            case "n":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.05,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.3,
                                    0.34,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 257,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 256,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.2,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.16,
                                    0.26,
                                    0.24,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 260,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 259,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.42,
                                0.03
                            ],
                            rotation: [
                                -0.3,
                                0,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.1,
                                    0.14,
                                    0.3,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 264,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 263,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.6,
                                0.1
                            ],
                            rotation: [
                                -0.5,
                                0,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.16,
                                    0.28,
                                    0.24
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 268,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 267,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.58,
                                0.28
                            ],
                            rotation: [
                                0.1,
                                0,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.12,
                                    0.15,
                                    0.18
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 272,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 271,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.74,
                                0.05
                            ],
                            rotation: [
                                -0.2,
                                0,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                                args: [
                                    0.05,
                                    0.1,
                                    16
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 276,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 275,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 255,
                    columnNumber: 21
                }, this);
            case "b":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.05,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.3,
                                    0.34,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 285,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 284,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.26,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.1,
                                    0.26,
                                    0.36,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 288,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 287,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.52,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.16,
                                    32,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 292,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 291,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.58,
                                0.08
                            ],
                            rotation: [
                                0.3,
                                0,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.04,
                                    0.12,
                                    0.02
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 296,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 295,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.7,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.05,
                                    16,
                                    16
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 300,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 299,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 283,
                    columnNumber: 21
                }, this);
            case "q":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.05,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.32,
                                    0.36,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 309,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 308,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.35,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.1,
                                    0.3,
                                    0.54,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 312,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 311,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.66,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.18,
                                    32,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 316,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 315,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.82,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.14,
                                    0.1,
                                    0.1,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 320,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 319,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.92,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.08,
                                    24,
                                    24
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 324,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 323,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 307,
                    columnNumber: 21
                }, this);
            case "k":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.05,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.32,
                                    0.36,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 333,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 332,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.35,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.12,
                                    0.3,
                                    0.54,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 336,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 335,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.66,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.18,
                                    32,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 340,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 339,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.8,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.12,
                                    0.15,
                                    0.08,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 344,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 343,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                0.96,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.05,
                                    0.24,
                                    0.05
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 348,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 347,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            position: [
                                0,
                                1.0,
                                0
                            ],
                            material: material,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.18,
                                    0.05,
                                    0.05
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                                lineNumber: 352,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                            lineNumber: 351,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 331,
                    columnNumber: 21
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    castShadow: true,
                    receiveShadow: true,
                    material: material,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.2,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                        lineNumber: 360,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
                    lineNumber: 359,
                    columnNumber: 21
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: meshRef,
        children: getPieceGeometry()
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/chess/Scene3d.tsx",
        lineNumber: 367,
        columnNumber: 9
    }, this);
}
}),
"[project]/Ai chess/components/MatchBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/chess.js/dist/esm/chess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$chess$2f$Scene3d$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/chess/Scene3d.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function getShortModelName(model) {
    if (model.includes("llama-3.3-70b")) return "Llama 3.3 70B";
    if (model.includes("llama-3.1-8b")) return "Llama 3.1 8B";
    if (model.includes("mixtral")) return "Mixtral 8x7B";
    if (model.includes("gpt-4o")) return "GPT-4o";
    if (model.includes("claude")) return "Claude 3.5";
    if (model.includes("gemini")) return "Gemini 2.0";
    if (model.includes("grok")) return "Grok";
    return model.split("/").pop()?.split(":")[0] || model;
}
function ModelIcon({ model }) {
    const m = model.toLowerCase();
    if (m.includes("gpt") || m.includes("openai")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm",
        children: "🧠"
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
        lineNumber: 26,
        columnNumber: 59
    }, this);
    if (m.includes("claude") || m.includes("anthropic")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm",
        children: "🎭"
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
        lineNumber: 27,
        columnNumber: 65
    }, this);
    if (m.includes("gemini") || m.includes("google")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm",
        children: "✨"
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
        lineNumber: 28,
        columnNumber: 62
    }, this);
    if (m.includes("grok")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm font-bold",
        children: "𝕏"
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
        lineNumber: 29,
        columnNumber: 36
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm",
        children: "🦙"
    }, void 0, false, {
        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
        lineNumber: 30,
        columnNumber: 12
    }, this);
}
function MatchBoard({ apiKeys, model1, model2 }) {
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"]());
    const [thoughts1, setThoughts1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thoughts2, setThoughts2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commentary, setCommentary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("playing");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [moveCount, setMoveCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [score1, setScore1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [score2, setScore2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gameTime, setGameTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [thinkingModel, setThinkingModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const gameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(game);
    const isThinkingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const statusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("playing");
    const scrollRef1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        gameRef.current = game;
    }, [
        game
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isThinkingRef.current = isThinking;
    }, [
        isThinking
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        statusRef.current = status;
    }, [
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scrollRef1.current) scrollRef1.current.scrollTop = scrollRef1.current.scrollHeight;
    }, [
        thoughts1
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scrollRef2.current) scrollRef2.current.scrollTop = scrollRef2.current.scrollHeight;
    }, [
        thoughts2
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === "playing") {
            const timer = setInterval(()=>setGameTime((prev)=>prev + 1), 1000);
            return ()=>clearInterval(timer);
        }
    }, [
        status
    ]);
    const formatTime = (s)=>`${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
    const requestMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (statusRef.current === "ended" || isThinkingRef.current) return;
        setIsThinking(true);
        isThinkingRef.current = true;
        setError(null);
        const currentGame = gameRef.current;
        const turn = currentGame.turn();
        const currentModel = turn === "w" ? model1 : model2;
        setThinkingModel(getShortModelName(currentModel));
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 60000);
            const res = await fetch("/api/chess/move", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    apiKeys,
                    model: currentModel,
                    role: turn === "w" ? "white" : "black",
                    fen: currentGame.fen(),
                    history: currentGame.history()
                }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!res.ok) throw new Error(`API error: ${res.status}`);
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            if (!data.move) throw new Error("No move received from AI");
            if (data.move.toLowerCase() === "resign") {
                setStatus("ended");
                statusRef.current = "ended";
                if (turn === "w") setScore2((prev)=>prev + 1);
                else setScore1((prev)=>prev + 1);
                setCommentary(`${getShortModelName(currentModel)} has resigned!`);
                return;
            }
            const newGame = new __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](currentGame.fen());
            let moveResult = newGame.move(data.move);
            if (!moveResult) {
                const legalMoves = newGame.moves();
                const matchedMove = legalMoves.find((m)=>m.toLowerCase().includes(data.move.toLowerCase()) || data.move.toLowerCase().includes(m.toLowerCase()));
                if (matchedMove) newGame.move(matchedMove);
                else throw new Error(`Invalid move: ${data.move}`);
            }
            setGame(newGame);
            gameRef.current = newGame;
            setMoveCount((prev)=>prev + 1);
            const thoughtText = data.thoughts || `Played ${data.move}`;
            if (turn === "w") setThoughts1((prev)=>[
                    ...prev,
                    thoughtText
                ]);
            else setThoughts2((prev)=>[
                    ...prev,
                    thoughtText
                ]);
            if (newGame.isGameOver()) {
                setStatus("ended");
                statusRef.current = "ended";
                if (newGame.isCheckmate()) {
                    if (turn === "w") setScore1((prev)=>prev + 1);
                    else setScore2((prev)=>prev + 1);
                    setCommentary(`Checkmate! ${getShortModelName(currentModel)} wins!`);
                } else if (newGame.isDraw()) setCommentary("Draw!");
                else if (newGame.isStalemate()) setCommentary("Stalemate!");
                return;
            }
            if (turn === "b" && moveCount > 0) {
                try {
                    const commRes = await fetch("/api/chess/commentary", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            apiKeys,
                            fen: newGame.fen(),
                            history: newGame.history()
                        })
                    });
                    if (commRes.ok) {
                        const commData = await commRes.json();
                        if (commData.commentary) setCommentary(commData.commentary);
                    }
                } catch  {}
            }
        } catch (err) {
            setError(err.message || "Error requesting move");
            setTimeout(()=>setError(null), 3000);
        } finally{
            setIsThinking(false);
            isThinkingRef.current = false;
            setThinkingModel("");
        }
    }, [
        apiKeys,
        model1,
        model2,
        moveCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === "ended") return;
        const timer = setTimeout(()=>{
            if (!isThinkingRef.current && statusRef.current === "playing") requestMove();
        }, 1500);
        return ()=>clearTimeout(timer);
    }, [
        game,
        status,
        isThinking,
        requestMove
    ]);
    const history = game.history();
    const lastMove = history.length > 0 ? history[history.length - 1] : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 border-b border-white/5 flex items-center justify-between px-6 bg-black shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelIcon, {
                                    model: model1
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-sm font-medium",
                                    children: getShortModelName(model1)
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl font-black tracking-tighter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: score1
                                    }, void 0, false, {
                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                        lineNumber: 192,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/20 mx-3",
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: score2
                                    }, void 0, false, {
                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 191,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-white/40 font-mono",
                                children: formatTime(gameTime)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-sm font-medium",
                                    children: getShortModelName(model2)
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 201,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelIcon, {
                                    model: model2
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 202,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full bg-zinc-600"
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 203,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 200,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-[280px_1fr_280px] min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-r border-white/5 flex flex-col overflow-hidden bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-white flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-black",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "8",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 68
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                lineNumber: 215,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 214,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-white/40 uppercase tracking-widest",
                                                    children: "White"
                                                }, void 0, false, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-white",
                                                    children: getShortModelName(model1)
                                                }, void 0, false, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 213,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollRef1,
                                className: "flex-1 overflow-y-auto p-4 space-y-3 thoughts-scroll",
                                children: [
                                    thoughts1.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-lg bg-white/[0.02] border border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-white/30 mb-1",
                                                    children: [
                                                        "Move ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm leading-relaxed",
                                                    children: t
                                                }, void 0, false, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 227,
                                            columnNumber: 29
                                        }, this)),
                                    thinkingModel === getShortModelName(model1) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-white/40 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-white rounded-full thinking-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-white rounded-full thinking-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-white rounded-full thinking-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                lineNumber: 234,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Thinking..."
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                lineNumber: 239,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 211,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$chess$2f$Scene3d$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                fen: game.fen(),
                                lastMove: lastMove
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this),
                            isThinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/80 border border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs uppercase tracking-widest text-white/60 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-white rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this),
                                        thinkingModel,
                                        " thinking..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 250,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 249,
                                columnNumber: 25
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-1/2 -translate-x-1/2 bg-red-900/80 px-4 py-2 rounded-full border border-red-700/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-red-300",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 258,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 257,
                                columnNumber: 25
                            }, this),
                            status === "ended" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-10 rounded-2xl bg-white/5 border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-5xl font-black uppercase tracking-tighter italic mb-4 text-white",
                                            children: "Match Over"
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 264,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-white/50 mb-8",
                                            children: commentary
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 265,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>window.location.reload(),
                                            className: "px-8 py-3 rounded-lg bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors",
                                            children: "New Match"
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 266,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 263,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 262,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white/40",
                                    children: [
                                        "Move ",
                                        moveCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 276,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 275,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 246,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l border-white/5 flex flex-col overflow-hidden bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-white/40 uppercase tracking-widest text-right",
                                                    children: "Black"
                                                }, void 0, false, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-white text-right",
                                                    children: getShortModelName(model2)
                                                }, void 0, false, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-zinc-400",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "8",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 68
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                lineNumber: 289,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 288,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                    lineNumber: 283,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollRef2,
                                className: "flex-1 overflow-y-auto p-4 space-y-3 thoughts-scroll",
                                children: [
                                    thoughts2.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-lg bg-white/[0.02] border border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-white/30 mb-1 text-right",
                                                    children: [
                                                        "Move ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm leading-relaxed text-right",
                                                    children: t
                                                }, void 0, false, {
                                                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                            lineNumber: 297,
                                            columnNumber: 29
                                        }, this)),
                                    thinkingModel === getShortModelName(model2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-end gap-2 text-white/40 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Thinking..."
                                            }, void 0, false, {
                                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                lineNumber: 304,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-zinc-400 rounded-full thinking-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-zinc-400 rounded-full thinking-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-zinc-400 rounded-full thinking-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                                lineNumber: 305,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                        lineNumber: 303,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                        lineNumber: 281,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                lineNumber: 209,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 border-t border-white/5 flex items-center justify-center bg-black shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl text-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-white/30 uppercase tracking-widest mb-1",
                            children: "AI Commentary"
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 319,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base font-medium text-white/70 italic leading-relaxed",
                            children: commentary || "The battle begins... waiting for the first exchange."
                        }, void 0, false, {
                            fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                            lineNumber: 320,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                    lineNumber: 318,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Ai chess/components/MatchBoard.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Ai chess/components/MatchBoard.tsx",
        lineNumber: 179,
        columnNumber: 9
    }, this);
}
}),
"[project]/Ai chess/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ApiKeyEntry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/ApiKeyEntry.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ModelSelection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/ModelSelection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$MatchBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Ai chess/components/MatchBoard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [apiKeys, setApiKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        groq: "",
        openrouter: ""
    });
    const [models, setModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black text-white",
        children: [
            step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ApiKeyEntry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: handleApiKeysSubmit
            }, void 0, false, {
                fileName: "[project]/Ai chess/app/page.tsx",
                lineNumber: 25,
                columnNumber: 28
            }, this),
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$ModelSelection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                apiKeys: apiKeys,
                onSubmit: handleModelsSubmit
            }, void 0, false, {
                fileName: "[project]/Ai chess/app/page.tsx",
                lineNumber: 26,
                columnNumber: 28
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Ai__chess$2f$components$2f$MatchBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d1d8ff93._.js.map