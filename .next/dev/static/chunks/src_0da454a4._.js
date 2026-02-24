(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/mandalart/ui/ItemCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItemCard",
    ()=>ItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputBase$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputBase/InputBase.js [app-client] (ecmascript) <export default as InputBase>");
;
;
;
const ItemCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "f0d46938acf812674dcefac4bdb79638b06ae0a5c19c2b8437a7c5ab23330c0b") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0d46938acf812674dcefac4bdb79638b06ae0a5c19c2b8437a7c5ab23330c0b";
    }
    const { value, onChange, cellId, isCenterBlock } = t0;
    const isTitle = cellId === "title";
    const t1 = isTitle ? isCenterBlock ? "#d3fbff" : "#f0f0f0" : "white";
    const t2 = isTitle ? undefined : "#fafafa";
    let t3;
    if ($[1] !== t2) {
        t3 = {
            bgcolor: t2
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t1 || $[4] !== t3) {
        t4 = {
            border: "1px solid #ddd",
            aspectRatio: "1/1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: t1,
            transition: "0.2s",
            "&:hover": t3
        };
        $[3] = t1;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== onChange) {
        t5 = (e)=>onChange(e.target.value);
        $[6] = onChange;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = isTitle ? "bold" : "normal";
    let t7;
    if ($[8] !== t6) {
        t7 = {
            width: "100%",
            height: "100%",
            "& .MuiInputBase-input": {
                textAlign: "center",
                fontSize: "17px",
                fontWeight: t6,
                color: "#000",
                p: 1,
                whiteSpace: "pre-wrap",
                wordBreak: "keep-all",
                overflowWrap: "break-word"
            }
        };
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t5 || $[11] !== t7 || $[12] !== value) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputBase$3e$__["InputBase"], {
            multiline: true,
            value: value,
            onChange: t5,
            sx: t7
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/ItemCard.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
        $[11] = t7;
        $[12] = value;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t4 || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t4,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/ItemCard.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t4;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    return t9;
};
_c = ItemCard;
var _c;
__turbopack_context__.k.register(_c, "ItemCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/mandalart/ui/GridView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridView",
    ()=>GridView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$ItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/ui/ItemCard.tsx [app-client] (ecmascript)");
;
;
;
;
const GridView = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "79bc1a62bcb7dce003484d9390e7c7e359382d3f90d242d78d1fb75698a93a4f") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79bc1a62bcb7dce003484d9390e7c7e359382d3f90d242d78d1fb75698a93a4f";
    }
    const { bId, data, onUpdate } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "1",
            "2",
            "3",
            "4",
            "title",
            "5",
            "6",
            "7",
            "8"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const cellLayout = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 0.5,
            p: 0.5,
            boxSizing: "border-box"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== bId || $[4] !== data || $[5] !== onUpdate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t2,
            children: cellLayout.map((cId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$ItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemCard"], {
                    cellId: cId,
                    isCenterBlock: bId === "center",
                    value: data[bId].cells[cId] || "",
                    onChange: (val)=>onUpdate(bId, cId, val)
                }, cId, false, {
                    fileName: "[project]/src/features/mandalart/ui/GridView.tsx",
                    lineNumber: 43,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/GridView.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = bId;
        $[4] = data;
        $[5] = onUpdate;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_c = GridView;
var _c;
__turbopack_context__.k.register(_c, "GridView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/mandalart/ui/ListView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListView",
    ()=>ListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputBase$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputBase/InputBase.js [app-client] (ecmascript) <export default as InputBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$GridView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/ui/GridView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ListView = ({ bId, data, onUpdate })=>{
    _s();
    if (bId === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$GridView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridView"], {
            bId: bId,
            data: data,
            onUpdate: onUpdate
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    const cellIds = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
    ];
    const cells = data[bId].cells;
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [focusedId, setFocusedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            height: "100%",
            p: 1,
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    mb: 1,
                    p: 0.5,
                    bgcolor: "#f0f0f0",
                    fontWeight: 700,
                    fontSize: "0.8rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputBase$3e$__["InputBase"], {
                    fullWidth: true,
                    placeholder: "주제를 입력해주세요",
                    value: cells.title || "",
                    onChange: (e)=>onUpdate(bId, "title", e.target.value),
                    sx: {
                        "& input": {
                            textAlign: "center"
                        },
                        fontWeight: 700
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flexGrow: 1
                },
                children: cellIds.map((cId, idx)=>{
                    const hasValue = Boolean(cells[cId]?.trim());
                    const isFocused = focusedId === cId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            height: 31,
                            borderBottom: "1px solid #eee",
                            py: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: 20,
                                    fontSize: "0.7rem",
                                    color: "#aaa",
                                    textAlign: "center",
                                    visibility: hasValue || isFocused ? "visible" : "hidden"
                                },
                                children: idx + 1
                            }, void 0, false, {
                                fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputBase$3e$__["InputBase"], {
                                fullWidth: true,
                                inputRef: (el)=>inputRefs.current[idx] = el,
                                value: cells[cId] || "",
                                onFocus: ()=>setFocusedId(cId),
                                onBlur: ()=>setFocusedId(null),
                                onChange: (e_0)=>onUpdate(bId, cId, e_0.target.value),
                                onKeyDown: (e_1)=>{
                                    if (e_1.nativeEvent.isComposing) return;
                                    if (e_1.key === "Enter") {
                                        e_1.preventDefault();
                                        inputRefs.current[idx + 1]?.focus();
                                    }
                                },
                                sx: {
                                    fontSize: "0.75rem"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, cId, true, {
                        fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
                        lineNumber: 50,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/mandalart/ui/ListView.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ListView, "VdAARKu9IYfixLWi9ricYv9L2lw=");
_c = ListView;
var _c;
__turbopack_context__.k.register(_c, "ListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/mandalart/ui/DownloadBtn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const C = {
    centerCell: "#b2ebf2",
    titleCell: "#e8e8e8",
    white: "#ffffff",
    border: "#cccccc",
    outerBorder: "#aaaaaa",
    text: "#000000",
    bg: "#e0e0e0",
    listHeader: "#eeeeee",
    subText: "#666666"
};
const GRID_POS = {
    "1": [
        0,
        0
    ],
    "2": [
        0,
        1
    ],
    "3": [
        0,
        2
    ],
    "4": [
        1,
        0
    ],
    center: [
        1,
        1
    ],
    "5": [
        1,
        2
    ],
    "6": [
        2,
        0
    ],
    "7": [
        2,
        1
    ],
    "8": [
        2,
        2
    ]
};
const INNER_ORDER = [
    "1",
    "2",
    "3",
    "4",
    "title",
    "5",
    "6",
    "7",
    "8"
];
function getFontFamily() {
    if (typeof document !== "undefined") {
        const val = getComputedStyle(document.documentElement).getPropertyValue("--font-nanum-gothic").trim();
        if (val) return `${val}, sans-serif`;
    }
    return "sans-serif";
}
function font(px, bold = false, family) {
    return `${bold ? "bold " : ""}${px}px ${family ?? getFontFamily()}`;
}
function fillTextWrapped(ctx, text, cx, cy, maxWidth, lineHeight) {
    if (!text) return;
    let line = "";
    const lines = [];
    for (const ch of text){
        const test = line + ch;
        if (ctx.measureText(test).width > maxWidth && line.length > 0) {
            lines.push(line);
            line = ch;
            if (lines.length === 2) break;
        } else {
            line = test;
        }
    }
    if (line && lines.length < 2) lines.push(line);
    const startY = cy - (lines.length - 1) * lineHeight / 2;
    lines.forEach((l, i)=>{
        ctx.fillText(l, cx, startY + i * lineHeight, maxWidth);
    });
}
function drawInnerGrid(ctx, section, secKey, x, y, w, h, scale, family) {
    const isCenter = secKey === "center";
    const cellW = w / 3;
    const cellH = h / 3;
    const s = scale;
    INNER_ORDER.forEach((cKey, idx)=>{
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        const cx = x + col * cellW;
        const cy = y + row * cellH;
        const isTitle = cKey === "title";
        if (isTitle) {
            ctx.fillStyle = isCenter ? C.centerCell : C.titleCell;
            ctx.fillRect(cx, cy, cellW, cellH);
        }
        ctx.strokeStyle = C.border;
        ctx.lineWidth = 0.5 * s;
        ctx.strokeRect(cx, cy, cellW, cellH);
        const value = isTitle ? section.cells.title ?? secKey : section.cells[cKey] ?? "";
        ctx.fillStyle = C.text;
        ctx.font = font(isTitle ? 13 * s : 11 * s, isTitle, family);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        fillTextWrapped(ctx, value, cx + cellW / 2, cy + cellH / 2, cellW - 6 * s, 13 * s);
    });
}
function drawListCard(ctx, section, secKey, x, y, cardW, cardH, headerH, scale, family) {
    const s = scale;
    const rowH = (cardH - headerH) / 8;
    ctx.fillStyle = C.white;
    ctx.fillRect(x, y, cardW, cardH);
    ctx.strokeStyle = C.outerBorder;
    ctx.lineWidth = 1 * s;
    ctx.strokeRect(x, y, cardW, cardH);
    ctx.fillStyle = C.listHeader;
    ctx.fillRect(x, y, cardW, headerH);
    ctx.beginPath();
    ctx.strokeStyle = C.border;
    ctx.lineWidth = 1 * s;
    ctx.moveTo(x, y + headerH);
    ctx.lineTo(x + cardW, y + headerH);
    ctx.stroke();
    ctx.fillStyle = C.text;
    ctx.font = font(14 * s, true, family);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(section.cells.title ?? secKey, x + cardW / 2, y + headerH / 2);
    [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
    ].forEach((cKey, i)=>{
        const cy = y + headerH + i * rowH;
        if (i > 0) {
            ctx.beginPath();
            ctx.strokeStyle = C.border;
            ctx.lineWidth = 0.5 * s;
            ctx.moveTo(x, cy);
            ctx.lineTo(x + cardW, cy);
            ctx.stroke();
        }
        const numW = 22 * s;
        const midY = cy + rowH / 2;
        ctx.fillStyle = C.subText;
        ctx.font = font(11 * s, false, family);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(cKey, x + numW, midY);
        ctx.fillStyle = C.text;
        ctx.font = font(12 * s, false, family);
        ctx.textAlign = "left";
        ctx.fillText(section.cells[cKey] ?? "", x + numW + 5 * s, midY, cardW - numW - 10 * s);
    });
}
function drawGridView(ctx, data, scale) {
    const family = getFontFamily();
    const s = scale;
    const SEC = 200;
    const GAP = 8;
    const PAD = 16;
    const SS = SEC * s;
    const G = GAP * s;
    const P = PAD * s;
    ctx.canvas.width = SS * 3 + G * 2 + P * 2;
    ctx.canvas.height = SS * 3 + G * 2 + P * 2;
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    Object.entries(GRID_POS).forEach(([secKey, [secRow, secCol]])=>{
        const section = data[secKey];
        if (!section) return;
        const x = P + secCol * (SS + G);
        const y = P + secRow * (SS + G);
        ctx.fillStyle = C.white;
        ctx.fillRect(x, y, SS, SS);
        ctx.strokeStyle = C.outerBorder;
        ctx.lineWidth = 1.5 * s;
        ctx.strokeRect(x, y, SS, SS);
        drawInnerGrid(ctx, section, secKey, x, y, SS, SS, s, family);
    });
}
function drawListView(ctx, data, scale) {
    const family = getFontFamily();
    const s = scale;
    const COL = 3;
    const CARD_W = 290;
    const HEADER_H = 38 * s;
    const CARD_H = CARD_W * s;
    const CW = CARD_W * s;
    const GX = 14 * s;
    const GY = 14 * s;
    const P = 16 * s;
    const LIST_ORDER = [
        "1",
        "2",
        "3",
        "4",
        "center",
        "5",
        "6",
        "7",
        "8"
    ];
    const rowCount = 3;
    ctx.canvas.width = COL * CW + 2 * GX + P * 2;
    ctx.canvas.height = rowCount * CARD_H + (rowCount - 1) * GY + P * 2;
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    LIST_ORDER.forEach((key, idx)=>{
        const section = data[key];
        if (!section) return;
        const col = idx % COL;
        const row = Math.floor(idx / COL);
        const x = P + col * (CW + GX);
        const y = P + row * (CARD_H + GY);
        if (key === "center") {
            ctx.fillStyle = C.white;
            ctx.fillRect(x, y, CW, CARD_H);
            ctx.strokeStyle = C.outerBorder;
            ctx.lineWidth = 1 * s;
            ctx.strokeRect(x, y, CW, CARD_H);
            drawInnerGrid(ctx, section, "center", x, y, CW, CARD_H, s, family);
        } else {
            drawListCard(ctx, section, key, x, y, CW, CARD_H, HEADER_H, s, family);
        }
    });
}
const DownloadBtn = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "35a43730089542b2e83a1ae2068c19638da68bf6ae8830be53b5ccea18b25970") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "35a43730089542b2e83a1ae2068c19638da68bf6ae8830be53b5ccea18b25970";
    }
    const { type, data, viewMode: t1 } = t0;
    const viewMode = t1 === undefined ? "grid" : t1;
    let t2;
    if ($[1] !== data || $[2] !== type || $[3] !== viewMode) {
        t2 = async ()=>{
            await document.fonts.ready;
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                return;
            }
            if (viewMode === "grid") {
                drawGridView(ctx, data, 2);
            } else {
                drawListView(ctx, data, 2);
            }
            const fileName = `mandalart_${viewMode}`;
            if (type === "png") {
                canvas.toBlob((blob)=>{
                    if (!blob) {
                        return;
                    }
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${fileName}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                }, "image/png");
            } else {
                if (type === "pdf") {
                    const imgData = canvas.toDataURL("image/png");
                    const pxToMm = _temp;
                    const pdfW = pxToMm(canvas.width);
                    const pdfH = pxToMm(canvas.height);
                    const orientation = pdfW > pdfH ? "landscape" : "portrait";
                    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                        orientation,
                        unit: "mm",
                        format: [
                            pdfW,
                            pdfH
                        ]
                    });
                    pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
                    pdf.save(`${fileName}.pdf`);
                }
            }
        };
        $[1] = data;
        $[2] = type;
        $[3] = viewMode;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleDownload = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            height: "40px",
            color: "black",
            backgroundColor: "pink"
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== handleDownload) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
            variant: "contained",
            sx: t3,
            onClick: handleDownload,
            children: "다운로드"
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/DownloadBtn.tsx",
            lineNumber: 278,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = handleDownload;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
};
_c = DownloadBtn;
const __TURBOPACK__default__export__ = DownloadBtn;
function _temp(px) {
    return px / 2 / 96 * 25.4;
}
var _c;
__turbopack_context__.k.register(_c, "DownloadBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/mandalart/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MandalartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ToggleButton/ToggleButton.js [app-client] (ecmascript) <export default as ToggleButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButtonGroup$2f$ToggleButtonGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleButtonGroup$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ToggleButtonGroup/ToggleButtonGroup.js [app-client] (ecmascript) <export default as ToggleButtonGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GridView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/GridView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$GridView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/ui/GridView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$ListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/ui/ListView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$DownloadBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/ui/DownloadBtn.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const createInitialData = ()=>{
    const blocks = {
        center: {
            cells: {}
        }
    };
    [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
    ].forEach((id)=>{
        blocks[id] = {
            cells: {}
        };
    });
    return blocks;
};
const blockStyle = {
    border: "2px solid #333",
    borderRadius: "4px",
    bgcolor: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%"
};
function MandalartPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "59b24f0f83aac2c6fefd7a8c9c701ba8dbb087854ffc5561678a6d1d3dd735c6") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "59b24f0f83aac2c6fefd7a8c9c701ba8dbb087854ffc5561678a6d1d3dd735c6";
    }
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = createInitialData();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [downloadType, setDownloadType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("png");
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "1",
            "2",
            "3",
            "4",
            "center",
            "5",
            "6",
            "7",
            "8"
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const blockLayout = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MandalartPage[handleUpdate]": (blockId, cellId, value)=>{
                setData({
                    "MandalartPage[handleUpdate > setData()]": (prev)=>{
                        const next = {
                            ...prev,
                            [blockId]: {
                                ...prev[blockId],
                                cells: {
                                    ...prev[blockId].cells,
                                    [cellId]: value
                                }
                            }
                        };
                        if (blockId === "center" && cellId !== "title") {
                            next[cellId] = {
                                ...next[cellId],
                                cells: {
                                    ...next[cellId].cells,
                                    title: value
                                }
                            };
                        }
                        if (blockId !== "center" && cellId === "title") {
                            next.center = {
                                ...next.center,
                                cells: {
                                    ...next.center.cells,
                                    [blockId]: value
                                }
                            };
                        }
                        return next;
                    }
                }["MandalartPage[handleUpdate > setData()]"]);
            }
        })["MandalartPage[handleUpdate]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleUpdate = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "MandalartPage[handleChange]": (event)=>{
                setDownloadType(event.target.value);
            }
        })["MandalartPage[handleChange]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleChange = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            display: "flex"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            flex: 3,
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            mb: 2
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1000px"
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MandalartPage[<ToggleButtonGroup>.onChange]": (_, v)=>v && setView(v)
        })["MandalartPage[<ToggleButtonGroup>.onChange]"];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleButton$3e$__["ToggleButton"], {
            value: "grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GridView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/features/mandalart/index.tsx",
                    lineNumber: 159,
                    columnNumber: 37
                }, this),
                " Grid View"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleButton$3e$__["ToggleButton"], {
            value: "list",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/features/mandalart/index.tsx",
                    lineNumber: 166,
                    columnNumber: 37
                }, this),
                " List View"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== view) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButtonGroup$2f$ToggleButtonGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleButtonGroup$3e$__["ToggleButtonGroup"], {
            value: view,
            exclusive: true,
            onChange: t7,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[11] = view;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            display: "flex",
            gap: 2,
            alignItems: "center"
        };
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    let t13;
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "black"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "pink",
                borderWidth: 2
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "pink"
            }
        };
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
            value: "png",
            children: "PNG"
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
            value: "pdf",
            children: "PDF"
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[14] = t12;
        $[15] = t13;
        $[16] = t14;
    } else {
        t12 = $[14];
        t13 = $[15];
        t14 = $[16];
    }
    let t15;
    if ($[17] !== downloadType) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                value: downloadType,
                onChange: handleChange,
                size: "small",
                sx: t12,
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/mandalart/index.tsx",
                lineNumber: 218,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[17] = downloadType;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== data || $[20] !== downloadType || $[21] !== view) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$DownloadBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            type: downloadType,
            data: data,
            viewMode: view
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[19] = data;
        $[20] = downloadType;
        $[21] = view;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== t15 || $[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t11,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[23] = t15;
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== t10 || $[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t6,
            children: [
                t10,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            flexGrow: 1
        };
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 2,
            width: "1000px"
        };
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== data || $[32] !== view) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t19,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t20,
                children: blockLayout.map({
                    "MandalartPage[blockLayout.map()]": (bId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: blockStyle,
                            children: view === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$GridView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridView"], {
                                bId: bId,
                                data: data,
                                onUpdate: handleUpdate
                            }, void 0, false, {
                                fileName: "[project]/src/features/mandalart/index.tsx",
                                lineNumber: 277,
                                columnNumber: 104
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$ListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListView"], {
                                bId: bId,
                                data: data,
                                onUpdate: handleUpdate
                            }, void 0, false, {
                                fileName: "[project]/src/features/mandalart/index.tsx",
                                lineNumber: 277,
                                columnNumber: 165
                            }, this)
                        }, bId, false, {
                            fileName: "[project]/src/features/mandalart/index.tsx",
                            lineNumber: 277,
                            columnNumber: 54
                        }, this)
                }["MandalartPage[blockLayout.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/mandalart/index.tsx",
                lineNumber: 276,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[31] = data;
        $[32] = view;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== t18 || $[35] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t4,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t5,
                children: [
                    t18,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/mandalart/index.tsx",
                lineNumber: 287,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/index.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[34] = t18;
        $[35] = t21;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    return t22;
}
_s(MandalartPage, "WDpO1DyHLN9uqhikEBdhFuPAFHw=");
_c = MandalartPage;
var _c;
__turbopack_context__.k.register(_c, "MandalartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/mandalart/ui/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
;
;
const About = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "dda05b62e60179efb233b2acad583056aacdb3005474584ddc8de9658c136563") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dda05b62e60179efb233b2acad583056aacdb3005474584ddc8de9658c136563";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            ml: 3,
            mt: 1
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "h4",
            sx: {
                fontWeight: "bold"
            },
            children: "✨ 나만의 만다르트 만들기"
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/About.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            sx: {
                mt: 2,
                fontSize: "19px"
            },
            children: "나만의 만다르트를 만들어서 다운로드 해보세요!"
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/About.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            sx: {
                mt: 0.5,
                fontSize: "19px"
            },
            children: "8칸을 다 채우지 않아도 돼요! 리스트/그리드 형태 중 원하는대로 만들어보세요!"
        }, void 0, false, {
            fileName: "[project]/src/features/mandalart/ui/About.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t0,
            children: [
                t1,
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: {
                        mt: 0.5,
                        fontSize: "19px"
                    },
                    children: "완성 후 png, pdf 확장자로 저장해보세요!"
                }, void 0, false, {
                    fileName: "[project]/src/features/mandalart/ui/About.tsx",
                    lineNumber: 52,
                    columnNumber: 35
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/mandalart/ui/About.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/mandalart/ui/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Link/Link.js [app-client] (ecmascript) <export default as Link>");
;
;
;
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "1ca9d3f96fa1dfa38208b7308b278abf99272f8fd770c26f042b5b6d1249c1c6") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ca9d3f96fa1dfa38208b7308b278abf99272f8fd770c26f042b5b6d1249c1c6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            color: "gray"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            sx: t0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                    href: "https://github.com/ahyunnn/habit-tracker",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    underline: "hover",
                    sx: {
                        color: "inherit"
                    },
                    children: "@ahyunnnn"
                }, void 0, false, {
                    fileName: "[project]/src/features/mandalart/ui/Footer.tsx",
                    lineNumber: 22,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0)),
                " ",
                "All rights reserved. 2026"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/mandalart/ui/Footer.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/mandalart/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/ui/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/mandalart/ui/Footer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const MandalartPage = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "61f0e67368fab3698772c6c4478aa5bf8134ee92ef0f969cdc07abfe2a5364df") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "61f0e67368fab3698772c6c4478aa5bf8134ee92ef0f969cdc07abfe2a5364df";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                px: 10,
                py: 5,
                display: "flex"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/mandalart/page.tsx",
                    lineNumber: 22,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/mandalart/page.tsx",
                    lineNumber: 22,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/mandalart/page.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        py: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$mandalart$2f$ui$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/mandalart/page.tsx",
                        lineNumber: 33,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/mandalart/page.tsx",
                    lineNumber: 29,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/mandalart/page.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = MandalartPage;
const __TURBOPACK__default__export__ = MandalartPage;
var _c;
__turbopack_context__.k.register(_c, "MandalartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0da454a4._.js.map