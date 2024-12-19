"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6751],{9669:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=n(4848),t=n(8453);const c={title:"\u8c03\u8bd5"},i=void 0,o={id:"more/debugging",title:"\u8c03\u8bd5",description:"\u610f\u5916\u7ec8\u6b62 (Panics)",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/more/debugging.mdx",sourceDirName:"more",slug:"/more/debugging",permalink:"/demo/zh-Hans/docs/next/more/debugging",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/more/debugging.mdx",tags:[],version:"current",frontMatter:{title:"\u8c03\u8bd5"},sidebar:"docs",previous:{title:"More",permalink:"/demo/zh-Hans/docs/next/category/more"},next:{title:"\u90e8\u7f72",permalink:"/demo/zh-Hans/docs/next/more/deployment"}},l={},a=[{value:"\u610f\u5916\u7ec8\u6b62 (Panics)",id:"\u610f\u5916\u7ec8\u6b62-panics",level:2},{value:"\u63a7\u5236\u53f0\u65e5\u5fd7",id:"\u63a7\u5236\u53f0\u65e5\u5fd7",level:2},{value:"<code>wasm-logger</code>",id:"wasm-logger",level:3},{value:"<code>gloo-console</code>",id:"gloo-console",level:3},{value:"<code>tracing-web</code>",id:"tracing-web",level:3},{value:"\u8c03\u8bd5\u7ec4\u4ef6\u751f\u547d\u5468\u671f",id:"\u8c03\u8bd5\u7ec4\u4ef6\u751f\u547d\u5468\u671f",level:2},{value:"\u6e90\u6620\u5c04 (Source Maps)",id:"\u6e90\u6620\u5c04-source-maps",level:2},{value:"\u8fc7\u53bb\u7684\u6587\u7ae0",id:"\u8fc7\u53bb\u7684\u6587\u7ae0",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u610f\u5916\u7ec8\u6b62-panics",children:"\u610f\u5916\u7ec8\u6b62 (Panics)"}),"\n",(0,s.jsx)(r.p,{children:"Yew \u4f1a\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u4e2d\u8f93\u51fa\u610f\u5916\u7ec8\u6b62\u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u63a7\u5236\u53f0\u65e5\u5fd7",children:"\u63a7\u5236\u53f0\u65e5\u5fd7"}),"\n",(0,s.jsxs)(r.p,{children:["\u5728 JavaScript \u4e2d\uff0c",(0,s.jsx)(r.code,{children:"console.log()"})," \u7528\u4e8e\u8f93\u51fa\u5230\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b Yew \u7684\u9009\u9879\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"wasm-logger",children:(0,s.jsx)(r.a,{href:"https://crates.io/crates/wasm-logger",children:(0,s.jsx)(r.code,{children:"wasm-logger"})})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"wasm-logger"})," crate \u4e0e ",(0,s.jsx)(r.a,{href:"https://crates.io/crates/log",children:(0,s.jsx)(r.code,{children:"log"})})," crate \u96c6\u6210\uff0c\u4ee5\u5c06\u65e5\u5fd7\u7ea7\u522b\u3001\u6e90\u884c\u548c\u6587\u4ef6\u540d\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",metastring:",ignore",children:'use log::info;\r\nuse wasm_bindgen::JsValue;\r\n\r\nfn main() {\r\n    wasm_logger::init(wasm_logger::Config::default());\r\n\r\n    let object = JsValue::from("world");\r\n    info!("Hello {}", object.as_string().unwrap());\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"gloo-console",children:(0,s.jsx)(r.a,{href:"https://crates.io/crates/gloo-console",children:(0,s.jsx)(r.code,{children:"gloo-console"})})}),"\n",(0,s.jsxs)(r.p,{children:["\u8fd9\u4e2a crate \u662f Gloo \u7684\u4e00\u90e8\u5206\uff0c\u63d0\u4f9b\u4e86\u5bf9\u6d4f\u89c8\u5668 API \u7684 Rust \u5305\u88c5\u3002",(0,s.jsx)(r.code,{children:"log!"})," \u5b8f\u53ef\u4ee5\u76f4\u63a5\u63a5\u53d7 ",(0,s.jsx)(r.code,{children:"JsValue"}),"\uff0c\u6bd4 ",(0,s.jsx)(r.code,{children:"wasm_logger"})," \u66f4\u5bb9\u6613\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",metastring:",ignore",children:'use gloo_console::log;\r\nuse wasm_bindgen::JsValue;\r\n\r\nfn main() {\r\n    let object = JsValue::from("world");\r\n    log!("Hello", object)\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"tracing-web",children:(0,s.jsx)(r.a,{href:"https://crates.io/crates/tracing-web",children:(0,s.jsx)(r.code,{children:"tracing-web"})})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"tracing-web"})," \u53ef\u4ee5\u4e0e ",(0,s.jsx)(r.a,{href:"https://crates.io/crates/tracing-subscriber",children:(0,s.jsx)(r.code,{children:"tracing-subscriber"})})," \u4e00\u8d77\u4f7f\u7528\uff0c\u5c06\u6d88\u606f\u8f93\u51fa\u5230\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",metastring:",ignore",children:'use tracing_subscriber::{\r\n    fmt::{\r\n        format::{FmtSpan, Pretty},\r\n        time::UtcTime,\r\n    },\r\n    prelude::*,\r\n};\r\nuse wasm_bindgen::JsValue;\r\n\r\nfn main() {\r\n    let fmt_layer = tracing_subscriber::fmt::layer()\r\n        .with_ansi(false)\r\n        .with_timer(UtcTime::rfc_3339())\r\n        .with_writer(tracing_web::MakeConsoleWriter)\r\n        .with_span_events(FmtSpan::ACTIVE);\r\n    let perf_layer = tracing_web::performance_layer().with_details_from_fields(Pretty::default());\r\n\r\n    tracing_subscriber::registry()\r\n        .with(fmt_layer)\r\n        .with(perf_layer)\r\n        .init();\r\n    let object = JsValue::from("world");\r\n    tracing::info!("Hello {}", object.as_string().unwrap());\r\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"\u8c03\u8bd5\u7ec4\u4ef6\u751f\u547d\u5468\u671f",children:"\u8c03\u8bd5\u7ec4\u4ef6\u751f\u547d\u5468\u671f"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://crates.io/crates/tracing",children:(0,s.jsx)(r.code,{children:"tracing"})})," \u53ef\u4ee5\u7528\u4e8e\u6536\u96c6\u4e0e\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u76f8\u5173\u7684\u4e8b\u4ef6\u4fe1\u606f\u3002",(0,s.jsx)(r.code,{children:"tracing"})," \u8fd8\u5e26\u6709\u4e00\u4e2a ",(0,s.jsx)(r.code,{children:"log"})," \u652f\u6301\u7684\u7279\u6027\u6807\u5fd7\uff0c\u53ef\u4ee5\u4e0e ",(0,s.jsx)(r.code,{children:"wasm-logger"})," \u5f88\u597d\u5730\u96c6\u6210\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://docs.rs/tracing/latest/tracing/level_filters/index.html#compile-time-filters",children:"\u7f16\u8bd1\u65f6\u8fc7\u6ee4\u5668"})," \u53ef\u4ee5\u7528\u4e8e\u8c03\u6574\u8be6\u7ec6\u7a0b\u5ea6\u6216\u7981\u7528\u65e5\u5fd7\u8bb0\u5f55\uff0c\u8fd9\u5e94\u8be5\u4f1a\u5bfc\u81f4\u66f4\u5c0f\u7684 Wasm \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u6e90\u6620\u5c04-source-maps",children:"\u6e90\u6620\u5c04 (Source Maps)"}),"\n",(0,s.jsxs)(r.p,{children:["\u6709\u4e00\u4e9b\u652f\u6301 ",(0,s.jsx)(r.a,{href:"https://developer.chrome.com/blog/wasm-debugging-2019/#enter-dwarf",children:"\u6e90\u6620\u5c04"}),"\u3002\u4f46\u662f\uff0c\u9700\u8981\u4e00\u4e9b\u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u8fc7\u53bb\u7684\u6587\u7ae0",children:"\u8fc7\u53bb\u7684\u6587\u7ae0"}),"\n",(0,s.jsx)(r.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5173\u4e8e Rust \u4e2d WebAssembly \u8c03\u8bd5\u72b6\u6001\u7684\u8fc7\u53bb\u6587\u7ae0\u3002\u5b83\u4eec\u53ef\u80fd\u662f\u6709\u8da3\u7684\u9605\u8bfb\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["[Dec 2019] ",(0,s.jsx)(r.a,{href:"https://developers.google.com/web/updates/2019/12/webassembly#the_future",children:"Chrome DevTools \u66f4\u65b0"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"\u8fd9\u4e9b\u5de5\u4f5c\u8fd8\u6709\u5f88\u591a\u8981\u505a\u3002\u4f8b\u5982\uff0c\u5728\u5de5\u5177\u65b9\u9762\uff0cEmscripten\uff08Binaryen\uff09\u548c wasm-pack\uff08wasm-bindgen\uff09\u5c1a\u672a\u652f\u6301\u5728\u5b83\u4eec\u6267\u884c\u7684\u8f6c\u6362\u4e0a\u66f4\u65b0 DWARF \u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["[2020] ",(0,s.jsx)(r.a,{href:"https://rustwasm.github.io/book/reference/debugging.html#using-a-debugger",children:"Rust Wasm \u8c03\u8bd5\u6307\u5357"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["\u4e0d\u5e78\u7684\u662f\uff0cWebAssembly \u7684\u8c03\u8bd5\u80fd\u529b\u4ecd\u7136\u4e0d\u6210\u719f\u3002\u5728\u5927\u591a\u6570 Unix \u7cfb\u7edf\u4e0a\uff0c",(0,s.jsx)(r.a,{href:"http://dwarfstd.org/",children:"DWARF"})," \u7528\u4e8e\u7f16\u7801\u8c03\u8bd5\u5668\u9700\u8981\u63d0\u4f9b\u8fd0\u884c\u4e2d\u7a0b\u5e8f\u7684\u6e90\u7ea7\u68c0\u67e5\u7684\u4fe1\u606f\uff0c\u5c31\u8fde\u5728 Windows \u4e0a\u6709\u4e00\u79cd\u7f16\u7801\u7c7b\u4f3c\u4fe1\u606f\u7684\u66ff\u4ee3\u683c\u5f0f\u3002\u4f46\u76ee\u524d\uff0cWebAssembly \u6ca1\u6709\u76f8\u5e94\u7684\u683c\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["[2019] ",(0,s.jsx)(r.a,{href:"https://rustwasm.github.io/rfcs/007-2019-roadmap.html#debugging",children:"Rust Wasm \u8def\u7ebf\u56fe"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"\u8c03\u8bd5\u5f88\u68d8\u624b\uff0c\u56e0\u4e3a\u5f88\u591a\u60c5\u51b5\u4e0d\u5728\u8fd9\u4e2a\u5de5\u4f5c\u7ec4\u7684\u638c\u63a7\u4e4b\u4e2d\uff0c\u800c\u662f\u53d6\u51b3\u4e8e WebAssembly \u6807\u51c6\u5316\u673a\u6784\u548c\u5b9e\u73b0\u6d4f\u89c8\u5668\u5f00\u53d1\u8005\u5de5\u5177\u7684\u4eba\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var s=n(6540);const t={},c=s.createContext(t);function i(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);