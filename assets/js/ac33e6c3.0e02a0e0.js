"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7750],{5476:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(4848),o=r(8453);const t={title:"Debugging"},i=void 0,l={id:"more/debugging",title:"Debugging",description:"Panics",source:"@site/versioned_docs/version-0.21/more/debugging.mdx",sourceDirName:"more",slug:"/more/debugging",permalink:"/docs/more/debugging",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/more/debugging.mdx",tags:[],version:"0.21",frontMatter:{title:"Debugging"},sidebar:"docs",previous:{title:"More",permalink:"/docs/category/more"},next:{title:"Deployment",permalink:"/docs/more/deployment"}},c={},a=[{value:"Panics",id:"panics",level:2},{value:"Console Logging",id:"console-logging",level:2},{value:"<code>wasm-logger</code>",id:"wasm-logger",level:3},{value:"<code>gloo-console</code>",id:"gloo-console",level:3},{value:"<code>tracing-web</code>",id:"tracing-web",level:3},{value:"Debugging component lifecycles",id:"debugging-component-lifecycles",level:2},{value:"Source Maps",id:"source-maps",level:2},{value:"Past Articles",id:"past-articles",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"panics",children:"Panics"}),"\n",(0,s.jsx)(n.p,{children:"Yew automatically logs panics in the browser console."}),"\n",(0,s.jsx)(n.h2,{id:"console-logging",children:"Console Logging"}),"\n",(0,s.jsxs)(n.p,{children:["In JavaScript, ",(0,s.jsx)(n.code,{children:"console.log()"})," is used to log to the browser console. Some options for Yew are listed below."]}),"\n",(0,s.jsx)(n.h3,{id:"wasm-logger",children:(0,s.jsx)(n.a,{href:"https://crates.io/crates/wasm-logger",children:(0,s.jsx)(n.code,{children:"wasm-logger"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"wasm-logger"})," crate integrates with ",(0,s.jsx)(n.a,{href:"https://crates.io/crates/log",children:(0,s.jsx)(n.code,{children:"log"})})," crate to send the log level, source line, and filename to the browser console."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use log::info;\r\nuse wasm_bindgen::JsValue;\r\n\r\nfn main() {\r\n    wasm_logger::init(wasm_logger::Config::default());\r\n\r\n    let object = JsValue::from("world");\r\n    info!("Hello {}", object.as_string().unwrap());\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"gloo-console",children:(0,s.jsx)(n.a,{href:"https://crates.io/crates/gloo-console",children:(0,s.jsx)(n.code,{children:"gloo-console"})})}),"\n",(0,s.jsxs)(n.p,{children:["This crate is part of Gloo, a collection of libraries providing ergonomic Rust wrappers for browser APIs.\r\nThe ",(0,s.jsx)(n.code,{children:"log!"})," macro can take a ",(0,s.jsx)(n.code,{children:"JsValue"})," directly which is slightly easier to use than ",(0,s.jsx)(n.code,{children:"wasm_logger"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use gloo_console::log;\r\nuse wasm_bindgen::JsValue;\r\n\r\nfn main() {\r\n    let object = JsValue::from("world");\r\n    log!("Hello", object)\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"tracing-web",children:(0,s.jsx)(n.a,{href:"https://crates.io/crates/tracing-web",children:(0,s.jsx)(n.code,{children:"tracing-web"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tracing-web"})," can be used with ",(0,s.jsx)(n.a,{href:"https://crates.io/crates/tracing-subscriber",children:(0,s.jsx)(n.code,{children:"tracing-subscriber"})})," to output messages to the browser console."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust,",metastring:"ignore",children:'use tracing_subscriber::{\r\n    fmt::{\r\n        format::{FmtSpan, Pretty},\r\n        time::UtcTime,\r\n    },\r\n    prelude::*,\r\n};\r\nuse wasm_bindgen::JsValue;\r\n\r\nfn main() {\r\n    let fmt_layer = tracing_subscriber::fmt::layer()\r\n        .with_ansi(false)\r\n        .with_timer(UtcTime::rfc_3339())\r\n        .with_writer(tracing_web::MakeConsoleWriter)\r\n        .with_span_events(FmtSpan::ACTIVE);\r\n    let perf_layer = tracing_web::performance_layer().with_details_from_fields(Pretty::default());\r\n\r\n    tracing_subscriber::registry()\r\n        .with(fmt_layer)\r\n        .with(perf_layer)\r\n        .init();\r\n    let object = JsValue::from("world");\r\n    tracing::info!("Hello {}", object.as_string().unwrap());\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"debugging-component-lifecycles",children:"Debugging component lifecycles"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://crates.io/crates/tracing",children:(0,s.jsx)(n.code,{children:"tracing"})})," can be used to collect event information related to a component's lifecycle. ",(0,s.jsx)(n.code,{children:"tracing"})," also comes with a feature flag for ",(0,s.jsx)(n.code,{children:"log"})," support, which integrates nicely with ",(0,s.jsx)(n.code,{children:"wasm-logger"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.rs/tracing/latest/tracing/level_filters/index.html#compile-time-filters",children:"Compile time filters"})," can be used to adjust verbosity or disable logging, which should result in a smaller Wasm file."]}),"\n",(0,s.jsx)(n.h2,{id:"source-maps",children:"Source Maps"}),"\n",(0,s.jsxs)(n.p,{children:["There is ",(0,s.jsx)(n.a,{href:"https://developer.chrome.com/blog/wasm-debugging-2019/#enter-dwarf",children:"some support"})," for source maps.\r\nHowever, some configuration is required."]}),"\n",(0,s.jsx)(n.h2,{id:"past-articles",children:"Past Articles"}),"\n",(0,s.jsx)(n.p,{children:"Some past articles on the state of debugging in WebAssembly in Rust can be found below. They may serve as interesting reads."}),"\n",(0,s.jsxs)(n.p,{children:["[Dec 2019] ",(0,s.jsx)(n.a,{href:"https://developers.google.com/web/updates/2019/12/webassembly#the_future",children:"Chrome DevTools update"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"There is still quite a bit of work to do though. For example, on the tooling side, Emscripten (Binaryen) and wasm-pack (wasm-bindgen) does not support updating DWARF information on transformations they perform yet."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["[2020] ",(0,s.jsx)(n.a,{href:"https://rustwasm.github.io/book/reference/debugging.html#using-a-debugger",children:"Rust Wasm debugging guide"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Unfortunately, the debugging story for WebAssembly is still immature. On most Unix systems, ",(0,s.jsx)(n.a,{href:"http://dwarfstd.org/",children:"DWARF"})," is used to encode the information that a debugger needs to provide source-level inspection of a running program. There is an alternative format that encodes similar information on Windows. Currently, there is no equivalent for WebAssembly."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["[2019] ",(0,s.jsx)(n.a,{href:"https://rustwasm.github.io/rfcs/007-2019-roadmap.html#debugging",children:"Rust Wasm roadmap"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Debugging is tricky because much of the story is out of this working group's hands, and depends on both the WebAssembly standardization bodies and the folks implementing browser developer tools instead."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);