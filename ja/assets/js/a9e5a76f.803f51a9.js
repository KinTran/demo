"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7463],{4864:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var c=n(4848),r=n(8453);const d={title:"wasm-bindgen",sidebar_label:"wasm-bindgen"},i=void 0,t={id:"concepts/basic-web-technologies/wasm-bindgen",title:"wasm-bindgen",description:"wasm-bindgen \u306f\u3001JavaScript \u3068 Rust \u95a2\u6570\u306e\u9593\u306b\u547c\u3073\u51fa\u3057\u30d6\u30ea\u30c3\u30b8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304a\u3088\u3073\u30c4\u30fc\u30eb\u3067\u3059\u3002\u3053\u308c\u306f Rust \u3068 WebAssembly \u30ef\u30fc\u30ad\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7 \u306b\u3088\u3063\u3066 Rust \u3067\u69cb\u7bc9\u3055\u308c\u307e\u3057\u305f\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/concepts/basic-web-technologies/wasm-bindgen.mdx",sourceDirName:"concepts/basic-web-technologies",slug:"/concepts/basic-web-technologies/wasm-bindgen",permalink:"/demo/ja/docs/next/concepts/basic-web-technologies/wasm-bindgen",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/basic-web-technologies/wasm-bindgen.mdx",tags:[],version:"current",frontMatter:{title:"wasm-bindgen",sidebar_label:"wasm-bindgen"},sidebar:"docs",previous:{title:"JavaScript \u3068 Rust",permalink:"/demo/ja/docs/next/concepts/basic-web-technologies/js"},next:{title:"web-sys",permalink:"/demo/ja/docs/next/concepts/basic-web-technologies/web-sys"}},l={},a=[{value:"<code>wasm-bindgen</code>",id:"wasm-bindgen",level:2},{value:"<code>#[wasm_bindgen]</code> \u30de\u30af\u30ed",id:"wasm_bindgen-\u30de\u30af\u30ed",level:3},{value:"\u7d99\u627f\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",id:"\u7d99\u627f\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",level:3},{value:"<code>JsValue</code>",id:"jsvalue",level:3},{value:"<code>JsCast</code>",id:"jscast",level:3},{value:"<code>Closure</code>",id:"closure",level:3},{value:"<code>js-sys</code>",id:"js-sys",level:2},{value:"<code>wasm-bindgen-futures</code>",id:"wasm-bindgen-futures",level:2},{value:"<code>spawn_local</code>",id:"spawn_local",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://github.com/rustwasm/wasm-bindgen",children:(0,c.jsx)(s.code,{children:"wasm-bindgen"})})," \u306f\u3001JavaScript \u3068 Rust \u95a2\u6570\u306e\u9593\u306b\u547c\u3073\u51fa\u3057\u30d6\u30ea\u30c3\u30b8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304a\u3088\u3073\u30c4\u30fc\u30eb\u3067\u3059\u3002\u3053\u308c\u306f ",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/",children:"Rust \u3068 WebAssembly \u30ef\u30fc\u30ad\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7"})," \u306b\u3088\u3063\u3066 Rust \u3067\u69cb\u7bc9\u3055\u308c\u307e\u3057\u305f\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["Yew \u306f ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u3044\u304f\u3064\u304b\u306e\u30af\u30ec\u30fc\u30c8\u3092\u4ecb\u3057\u3066\u30d6\u30e9\u30a6\u30b6\u3068\u5bfe\u8a71\u3057\u307e\u3059\uff1a"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/js-sys",children:(0,c.jsx)(s.code,{children:"js-sys"})})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,c.jsx)(s.code,{children:"wasm-bindgen"})})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/web-sys",children:(0,c.jsx)(s.code,{children:"web-sys"})})}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u30af\u30ec\u30fc\u30c8\u3092\u3088\u308a\u62bd\u8c61\u7684\u306a\u30ec\u30d9\u30eb\u304b\u3089\u63a2\u6c42\u3057\u3001Yew \u3067\u306e ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," API \u306e\u7406\u89e3\u3068\u4f7f\u7528\u3092\u5bb9\u6613\u306b\u3057\u307e\u3059\u3002",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u304a\u3088\u3073\u95a2\u9023\u3059\u308b\u30af\u30ec\u30fc\u30c8\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306a\u30ac\u30a4\u30c9\u306b\u3064\u3044\u3066\u306f\u3001",(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:[(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u30ac\u30a4\u30c9"]})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u8a18\u306e\u30af\u30ec\u30fc\u30c8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3064\u3044\u3066\u306f\u3001",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/index.html",children:(0,c.jsx)(s.code,{children:"wasm-bindgen docs.rs"})})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"wasm-bindgen"})," doc.rs \u691c\u7d22\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30d6\u30e9\u30a6\u30b6 API \u304a\u3088\u3073 JavaScript \u30bf\u30a4\u30d7\u3092\u898b\u3064\u3051\u307e\u3059\u3002"]})}),"\n",(0,c.jsx)(s.h2,{id:"wasm-bindgen",children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,c.jsx)(s.code,{children:"wasm-bindgen"})})}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u306e\u30af\u30ec\u30fc\u30c8\u306f\u3001\u4e0a\u8a18\u306e\u4ed6\u306e\u30af\u30ec\u30fc\u30c8\u306b\u591a\u304f\u306e\u69cb\u6210\u8981\u7d20\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u30af\u30ec\u30fc\u30c8\u306e\u4e3b\u8981\u306a\u9818\u57df\u306e 2 \u3064\u3001\u3064\u307e\u308a\u30de\u30af\u30ed\u3068\u3001\u4f55\u5ea6\u3082\u76ee\u306b\u3059\u308b\u30bf\u30a4\u30d7/\u30c8\u30ec\u30a4\u30c8\u306e\u3044\u304f\u3064\u304b\u306b\u3064\u3044\u3066\u306e\u307f\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.h3,{id:"wasm_bindgen-\u30de\u30af\u30ed",children:[(0,c.jsx)(s.code,{children:"#[wasm_bindgen]"})," \u30de\u30af\u30ed"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"#[wasm_bindgen]"})," \u30de\u30af\u30ed\u306f Rust \u3068 JavaScript \u306e\u9593\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u63d0\u4f9b\u3057\u3001\u4e21\u8005\u306e\u9593\u3067\u5909\u63db\u3092\u884c\u3046\u30b7\u30b9\u30c6\u30e0\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30de\u30af\u30ed\u306e\u4f7f\u7528\u306f\u3088\u308a\u9ad8\u5ea6\u3067\u3042\u308a\u3001\u5916\u90e8\u306e JavaScript \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3092\u9664\u3044\u3066\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",(0,c.jsx)(s.code,{children:"js-sys"})," \u304a\u3088\u3073 ",(0,c.jsx)(s.code,{children:"web-sys"})," \u30af\u30ec\u30fc\u30c8\u306f\u3001\u7d44\u307f\u8fbc\u307f\u306e JavaScript \u30bf\u30a4\u30d7\u304a\u3088\u3073\u30d6\u30e9\u30a6\u30b6 API \u306b\u5bfe\u3057\u3066 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u5b9a\u7fa9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"#[wasm-bindgen]"})," \u30de\u30af\u30ed\u3092\u4f7f\u7528\u3057\u3066\u3001\u7279\u5b9a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e ",(0,c.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log",children:(0,c.jsx)(s.code,{children:"console.log"})})," \u95a2\u6570\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u7c21\u5358\u306a\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-rust",metastring:",no_run",children:'use wasm_bindgen::prelude::*;\r\n\r\n// \u307e\u305a\u3001`web_sys` \u3092\u4f7f\u7528\u305b\u305a\u306b `console.log` \u3092\u624b\u52d5\u3067\u30d0\u30a4\u30f3\u30c9\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\r\n// \u3053\u3053\u3067\u306f\u3001\u624b\u52d5\u3067 `#[wasm_bindgen]` \u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u66f8\u304d\u307e\u3059\u3002\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6b63\u78ba\u6027\u306f\u3053\u308c\u3089\u306e\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u306e\u6b63\u78ba\u6027\u306b\u4f9d\u5b58\u3057\u307e\u3059\uff01\r\n#[wasm_bindgen]\r\nextern "C" {\r\n    // \u3053\u3053\u3067 `js_namespace` \u3092\u4f7f\u7528\u3057\u3066 `console.log(..)` \u3092\u30d0\u30a4\u30f3\u30c9\u3057\u307e\u3059\u3002`log(..)` \u3060\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\r\n    #[wasm_bindgen(js_namespace = console)]\r\n    fn log(s: &str);\r\n\r\n    // `console.log` \u306f\u591a\u614b\u7684\u306a\u306e\u3067\u3001\u8907\u6570\u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u3092\u4f7f\u7528\u3057\u3066\u30d0\u30a4\u30f3\u30c9\u3067\u304d\u307e\u3059\u3002\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_u32(a: u32);\r\n\r\n    // \u8907\u6570\u306e\u5f15\u6570\u3082\u53ef\u80fd\u3067\u3059\uff01\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_many(a: &str, b: &str);\r\n}\r\n\r\n// \u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u95a2\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\uff01\r\nlog("Hello from Rust!");\r\nlog_u32(42);\r\nlog_many("Logging", "many values!");\n'})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:["\u3053\u306e\u4f8b\u306f\u3001",(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/examples/console-log.html",children:["1.2 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u30ac\u30a4\u30c9\u306e console.log \u3092\u4f7f\u7528\u3059\u308b"]})," \u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002"]})}),"\n",(0,c.jsx)(s.h3,{id:"\u7d99\u627f\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",children:"\u7d99\u627f\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,c.jsxs)(s.p,{children:["JavaScript \u30af\u30e9\u30b9\u9593\u306e\u7d99\u627f\u306f\u3001JavaScript \u8a00\u8a9e\u306e\u30b3\u30a2\u6a5f\u80fd\u3067\u3042\u308a\u3001DOM\uff08\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e2\u30c7\u30eb\uff09\u306f\u305d\u308c\u3092\u4e2d\u5fc3\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u3092\u4f7f\u7528\u3057\u3066\u578b\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u969b\u306b\u3082\u3001\u305d\u308c\u3089\u306e\u7d99\u627f\u95a2\u4fc2\u3092\u8a18\u8ff0\u3059\u308b\u5c5e\u6027\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["Rust \u3067\u306f\u3001\u3053\u306e\u7d99\u627f\u95a2\u4fc2\u306f ",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/std/ops/trait.Deref.html",children:(0,c.jsx)(s.code,{children:"Deref"})})," \u3068 ",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/std/convert/trait.AsRef.html",children:(0,c.jsx)(s.code,{children:"AsRef"})})," \u30c8\u30ec\u30a4\u30c8\u3092\u4f7f\u7528\u3057\u3066\u8868\u73fe\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u3067\u4f8b\u3092\u6319\u3052\u308b\u3068\u5f79\u7acb\u3064\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u4f8b\u3048\u3070\u3001",(0,c.jsx)(s.code,{children:"A"}),"\u3001",(0,c.jsx)(s.code,{children:"B"}),"\u3001",(0,c.jsx)(s.code,{children:"C"})," \u3068\u3044\u3046 3 \u3064\u306e\u578b\u304c\u3042\u308a\u3001",(0,c.jsx)(s.code,{children:"C"})," \u304c ",(0,c.jsx)(s.code,{children:"B"})," \u3092\u62e1\u5f35\u3057\u3001",(0,c.jsx)(s.code,{children:"B"})," \u304c ",(0,c.jsx)(s.code,{children:"A"})," \u3092\u62e1\u5f35\u3057\u3066\u3044\u308b\u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u308c\u3089\u306e\u578b\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u969b\u3001",(0,c.jsx)(s.code,{children:"#[wasm-bindgen]"})," \u30de\u30af\u30ed\u306f\u6b21\u306e\u3088\u3046\u306b ",(0,c.jsx)(s.code,{children:"Deref"})," \u3068 ",(0,c.jsx)(s.code,{children:"AsRef"})," \u30c8\u30ec\u30a4\u30c8\u3092\u5b9f\u88c5\u3057\u307e\u3059\uff1a"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"C"})," \u306f ",(0,c.jsx)(s.code,{children:"B"})," \u306b ",(0,c.jsx)(s.code,{children:"Deref"})," \u3067\u304d\u307e\u3059"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"B"})," \u306f ",(0,c.jsx)(s.code,{children:"A"})," \u306b ",(0,c.jsx)(s.code,{children:"Deref"})," \u3067\u304d\u307e\u3059"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"C"})," \u306f ",(0,c.jsx)(s.code,{children:"B"})," \u306b ",(0,c.jsx)(s.code,{children:"AsRef"})," \u3067\u304d\u307e\u3059"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"C"})," \u3068 ",(0,c.jsx)(s.code,{children:"B"})," \u306f\u3069\u3061\u3089\u3082 ",(0,c.jsx)(s.code,{children:"A"})," \u306b ",(0,c.jsx)(s.code,{children:"AsRef"})," \u3067\u304d\u307e\u3059"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u308c\u3089\u306e\u5b9f\u88c5\u306b\u3088\u308a\u3001",(0,c.jsx)(s.code,{children:"C"})," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067 ",(0,c.jsx)(s.code,{children:"A"})," \u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u305f\u308a\u3001",(0,c.jsx)(s.code,{children:"C"})," \u3092 ",(0,c.jsx)(s.code,{children:"&B"})," \u307e\u305f\u306f ",(0,c.jsx)(s.code,{children:"&A"})," \u3068\u3057\u3066\u4f7f\u7528\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u6ce8\u610f\u3059\u3079\u304d\u70b9\u306f\u3001",(0,c.jsx)(s.code,{children:"#[wasm-bindgen]"})," \u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u578b\u306b\u306f\u540c\u3058\u30eb\u30fc\u30c8\u578b\u304c\u3042\u308a\u3001\u305d\u308c\u3092\u4e0a\u8a18\u306e\u4f8b\u306e ",(0,c.jsx)(s.code,{children:"A"})," \u3068\u898b\u306a\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u3053\u306e\u578b\u306f ",(0,c.jsx)(s.a,{href:"#jsvalue",children:(0,c.jsx)(s.code,{children:"JsValue"})})," \u3067\u3042\u308a\u3001\u4ee5\u4e0b\u306b\u305d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.em,{children:(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/reference/attributes/on-js-imports/extends.html",children:[(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u30ac\u30a4\u30c9\u306e extends \u30bb\u30af\u30b7\u30e7\u30f3"]})})}),"\n",(0,c.jsx)(s.h3,{id:"jsvalue",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:(0,c.jsx)(s.code,{children:"JsValue"})})}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u308c\u306f JavaScript \u304c\u6240\u6709\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u8868\u73fe\u3067\u3042\u308a\u3001",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u306e\u30eb\u30fc\u30c8\u30ad\u30e3\u30d7\u30c1\u30e3\u578b\u3067\u3059\u3002",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u304b\u3089\u306e\u4efb\u610f\u306e\u578b\u306f ",(0,c.jsx)(s.code,{children:"JsValue"})," \u3067\u3059\u3002\u3053\u308c\u306f\u3001JavaScript \u306b\u306f\u5f37\u3044\u578b\u30b7\u30b9\u30c6\u30e0\u304c\u306a\u3044\u305f\u3081\u3001\u5909\u6570 ",(0,c.jsx)(s.code,{children:"x"})," \u3092\u53d7\u3051\u53d6\u308b\u4efb\u610f\u306e\u95a2\u6570\u304c\u305d\u306e\u578b\u3092\u5b9a\u7fa9\u3057\u306a\u3044\u305f\u3081\u3001",(0,c.jsx)(s.code,{children:"x"})," \u306f\u6709\u52b9\u306a JavaScript \u5024\u3067\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066 ",(0,c.jsx)(s.code,{children:"JsValue"})," \u3067\u3059\u3002",(0,c.jsx)(s.code,{children:"JsValue"})," \u3092\u53d7\u3051\u53d6\u308b\u30a4\u30f3\u30dd\u30fc\u30c8\u95a2\u6570\u3084\u578b\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u6280\u8853\u7684\u306b\u306f\u4efb\u610f\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u5024\u304c\u6709\u52b9\u3067\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"JsValue"})," \u306f\u95a2\u6570\u3067\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u305d\u306e\u95a2\u6570\u306f\u7279\u5b9a\u306e\u578b\u306e\u307f\u3092\u53d7\u3051\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u3001\u305d\u308c\u304c\u30d1\u30cb\u30c3\u30af\u3092\u5f15\u304d\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u5143\u306e ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," API \u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f JavaScript \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u3001\u305d\u306e\u5024\u304c\u7279\u5b9a\u306e\u578b\u3067\u306a\u3044\u5834\u5408\u306b\u4f8b\u5916\uff08\u30d1\u30cb\u30c3\u30af\uff09\u3092\u5f15\u304d\u8d77\u3053\u3059\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.em,{children:(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:[(0,c.jsx)(s.code,{children:"JsValue"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]})})}),"\n",(0,c.jsx)(s.h3,{id:"jscast",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:(0,c.jsx)(s.code,{children:"JsCast"})})}),"\n",(0,c.jsxs)(s.p,{children:["Rust \u306b\u306f\u5f37\u3044\u578b\u30b7\u30b9\u30c6\u30e0\u304c\u3042\u308a\u307e\u3059\u304c\u3001JavaScript \u306b\u306f\u3042\u308a\u307e\u305b\u3093\ud83d\ude1e\u3002Rust \u304c\u3053\u308c\u3089\u306e\u5f37\u3044\u578b\u3092\u7dad\u6301\u3057\u306a\u304c\u3089\u3082\u4fbf\u5229\u3067\u3042\u308b\u305f\u3081\u306b\u3001WebAssembly \u30ef\u30fc\u30ad\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u306f\u975e\u5e38\u306b\u5de7\u5999\u306a\u6a5f\u80fd ",(0,c.jsx)(s.code,{children:"JsCast"}),' \u3092\u63d0\u6848\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306f\u3001\u3042\u308b JavaScript "\u578b" \u304b\u3089\u5225\u306e "\u578b" \u3078\u306e\u5909\u63db\u3092\u652f\u63f4\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u3053\u308c\u306f\u66d6\u6627\u306b\u805e\u3053\u3048\u307e\u3059\u304c\u3001\u3042\u308b\u578b\u304c\u5225\u306e\u578b\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u3063\u3066\u3044\u308b\u5834\u5408\u3001',(0,c.jsx)(s.code,{children:"JsCast"})," \u306e\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3042\u308b\u578b\u304b\u3089\u5225\u306e\u578b\u306b\u30b8\u30e3\u30f3\u30d7\u3067\u304d\u307e\u3059\u3002",(0,c.jsx)(s.code,{children:"web-sys"}),"\u3001",(0,c.jsx)(s.code,{children:"wasm_bindgen"}),"\u3001",(0,c.jsx)(s.code,{children:"js-sys"})," \u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u3053\u306e\u6a5f\u80fd\u3092\u7406\u89e3\u3057\u3066\u304a\u304f\u3068\u4fbf\u5229\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30af\u30ec\u30fc\u30c8\u304b\u3089\u591a\u304f\u306e\u578b\u304c ",(0,c.jsx)(s.code,{children:"JsCast"})," \u3092\u5b9f\u88c5\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6c17\u4ed8\u304f\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"JsCast"})," \u306f\u30c1\u30a7\u30c3\u30af\u4ed8\u304d\u3068\u30c1\u30a7\u30c3\u30af\u306a\u3057\u306e\u5909\u63db\u30e1\u30bd\u30c3\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u5b9f\u884c\u6642\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3069\u306e\u578b\u3067\u3042\u308b\u304b\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001\u5909\u63db\u3092\u8a66\u307f\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u5931\u6557\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u578b\u3068\u3057\u3066 ",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/std/option/enum.Option.html",children:(0,c.jsx)(s.code,{children:"Option"})})," \u3084 ",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/std/result/enum.Result.html",children:(0,c.jsx)(s.code,{children:"Result"})})," \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4e00\u822c\u7684\u306a\u4f8b\u306f ",(0,c.jsx)(s.a,{href:"/demo/ja/docs/next/concepts/basic-web-technologies/web-sys",children:(0,c.jsx)(s.code,{children:"web-sys"})})," \u3067\u3001\u30a4\u30d9\u30f3\u30c8\u306e\u30bf\u30fc\u30b2\u30c3\u30c8\u3092\u53d6\u5f97\u3057\u3088\u3046\u3068\u3059\u308b\u5834\u5408\u3067\u3059\u3002\u30bf\u30fc\u30b2\u30c3\u30c8\u8981\u7d20\u304c\u4f55\u3067\u3042\u308b\u304b\u3092\u77e5\u3063\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html",children:(0,c.jsx)(s.code,{children:"web_sys::Event"})})," API \u306f\u5e38\u306b ",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html#method.target",children:(0,c.jsx)(s.code,{children:"Option<web_sys::EventTarget>"})})," \u3092\u8fd4\u3057\u307e\u3059\u3002\r\n\u305d\u306e\u8981\u7d20\u578b\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u305d\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-rust",children:'// \u3053\u306e\u30c8\u30ec\u30a4\u30c8\u3092\u6700\u521d\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\r\nuse wasm_bindgen::JsCast;\r\nuse web_sys::{Event, EventTarget, HtmlInputElement, HtmlSelectElement};\r\n\r\nfn handle_event(event: Event) {\r\n    let target: EventTarget = event\r\n        .target()\r\n        .expect("I\'m sure this event has a target!");\r\n\r\n    // \u3082\u3057\u304b\u3057\u305f\u3089\u30bf\u30fc\u30b2\u30c3\u30c8\u306f\u9078\u629e\u8981\u7d20\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304b\uff1f\r\n    if let Some(select_element) = target.dyn_ref::<HtmlSelectElement>() {\r\n        // \u5225\u306e\u3053\u3068\u3092\u3059\u308b\r\n        return;\r\n    }\r\n\r\n    // \u305d\u308c\u304c\u9078\u629e\u8981\u7d20\u3067\u306a\u3044\u3053\u3068\u304c\u78ba\u5b9f\u3067\u3042\u308c\u3070\u3001\u5165\u529b\u8981\u7d20\u3067\u3042\u308b\u3053\u3068\u304c\u78ba\u5b9f\u3067\u3059\uff01\r\n    let input_element: HtmlInputElement = target.unchecked_into();\r\n}\n'})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_ref",children:(0,c.jsx)(s.code,{children:"dyn_ref"})})," \u30e1\u30bd\u30c3\u30c9\u306f\u30c1\u30a7\u30c3\u30af\u4ed8\u304d\u306e\u5909\u63db\u3067\u3042\u308a\u3001",(0,c.jsx)(s.code,{children:"Option<&T>"})," \u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u5909\u63db\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u306b\u5143\u306e\u578b\u3092\u518d\u5ea6\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3001",(0,c.jsx)(s.code,{children:"None"})," \u3092\u8fd4\u3057\u307e\u3059\u3002 ",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_into",children:(0,c.jsx)(s.code,{children:"dyn_into"})})," \u30e1\u30bd\u30c3\u30c9\u306f ",(0,c.jsx)(s.code,{children:"self"})," \u3092\u6d88\u8cbb\u3057\u3001Rust \u306e ",(0,c.jsx)(s.code,{children:"into"})," \u30e1\u30bd\u30c3\u30c9\u306e\u898f\u7d04\u306b\u5f93\u3044\u3001",(0,c.jsx)(s.code,{children:"Result<T, Self>"})," \u578b\u3092\u8fd4\u3057\u307e\u3059\u3002\u5909\u63db\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u3001\u5143\u306e ",(0,c.jsx)(s.code,{children:"Self"})," \u5024\u306f ",(0,c.jsx)(s.code,{children:"Err"})," \u306b\u8fd4\u3055\u308c\u307e\u3059\u3002\u518d\u8a66\u884c\u3059\u308b\u304b\u3001\u5143\u306e\u578b\u3067\u4ed6\u306e\u64cd\u4f5c\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:[(0,c.jsx)(s.code,{children:"JsCast"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]}),"."]})}),"\n",(0,c.jsx)(s.h3,{id:"closure",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:(0,c.jsx)(s.code,{children:"Closure"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Closure"})," \u578b\u306f\u3001Rust \u306e\u30af\u30ed\u30fc\u30b8\u30e3\u3092 JavaScript \u306b\u6e21\u3059\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u5065\u5168\u6027\u306e\u7406\u7531\u304b\u3089\u3001JavaScript \u306b\u6e21\u3055\u308c\u308b\u30af\u30ed\u30fc\u30b8\u30e3\u306f ",(0,c.jsx)(s.code,{children:"'static"})," \u30e9\u30a4\u30d5\u30bf\u30a4\u30e0\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u306e\u578b\u306f\u300c\u30cf\u30f3\u30c9\u30eb\u300d\u3067\u3042\u308a\u3001\u7834\u68c4\u3055\u308c\u308b\u3068\u3001\u305d\u308c\u304c\u53c2\u7167\u3059\u308b JS \u30af\u30ed\u30fc\u30b8\u30e3\u3092\u7121\u52b9\u306b\u3057\u307e\u3059\u3002",(0,c.jsx)(s.code,{children:"Closure"})," \u304c\u7834\u68c4\u3055\u308c\u305f\u5f8c\u3001JS \u5185\u306e\u30af\u30ed\u30fc\u30b8\u30e3\u306e\u4f7f\u7528\u306f\u3059\u3079\u3066\u4f8b\u5916\u3092\u5f15\u304d\u8d77\u3053\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Closure"})," \u306f\u3001",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Function.html",children:(0,c.jsx)(s.code,{children:"&js_sys::Function"})})," \u578b\u3092\u53d7\u3051\u53d6\u308b ",(0,c.jsx)(s.code,{children:"js-sys"})," \u307e\u305f\u306f ",(0,c.jsx)(s.code,{children:"web-sys"})," API \u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u4e00\u822c\u7684\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002Yew \u3067 ",(0,c.jsx)(s.code,{children:"Closure"})," \u3092\u4f7f\u7528\u3059\u308b\u4f8b\u306f\u3001",(0,c.jsx)(s.a,{href:"/demo/ja/docs/next/concepts/html/events",children:"Events"})," \u30da\u30fc\u30b8\u306e",(0,c.jsxs)(s.a,{href:"/demo/ja/docs/next/concepts/html/events#using-closure-verbose",children:["Using ",(0,c.jsx)(s.code,{children:"Closure"})," \u30bb\u30af\u30b7\u30e7\u30f3"]})," \u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:[(0,c.jsx)(s.code,{children:"Closure"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]}),"."]})}),"\n",(0,c.jsx)(s.h2,{id:"js-sys",children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/js-sys",children:(0,c.jsx)(s.code,{children:"js-sys"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"js-sys"})," \u30af\u30ec\u30fc\u30c8\u306f\u3001JavaScript \u306e\u6a19\u6e96\u7d44\u307f\u8fbc\u307f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0/\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u305d\u308c\u3089\u306e\u30e1\u30bd\u30c3\u30c9\u3084\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u308c\u306f Web API \u3092\u542b\u307f\u307e\u305b\u3093\u3002Web API \u306f ",(0,c.jsx)(s.a,{href:"/demo/ja/docs/next/concepts/basic-web-technologies/web-sys",children:(0,c.jsx)(s.code,{children:"web-sys"})})," \u306e\u5f79\u5272\u3067\u3059\uff01"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/index.html",children:[(0,c.jsx)(s.code,{children:"js-sys"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]}),"."]})}),"\n",(0,c.jsx)(s.h2,{id:"wasm-bindgen-futures",children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})," \u30af\u30ec\u30fc\u30c8\u306f\u3001JavaScript \u306e Promise \u578b\u3092 Rust \u306e ",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/stable/std/future/trait.Future.html",children:(0,c.jsx)(s.code,{children:"Future"})})," \u3068\u3057\u3066\u6271\u3046\u305f\u3081\u306e\u30d6\u30ea\u30c3\u30b8\u3092\u63d0\u4f9b\u3057\u3001Rust \u306e Future \u3092 JavaScript \u306e Promise \u306b\u5909\u63db\u3059\u308b\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3092\u542b\u307f\u307e\u3059\u3002Rust\uff08wasm\uff09\u3067\u975e\u540c\u671f\u307e\u305f\u306f\u4ed6\u306e\u30d6\u30ed\u30c3\u30ad\u30f3\u30b0\u4f5c\u696d\u3092\u51e6\u7406\u3059\u308b\u969b\u306b\u5f79\u7acb\u3061\u3001JavaScript \u306e\u30a4\u30d9\u30f3\u30c8\u3084 JavaScript I/O \u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3068\u5bfe\u8a71\u3059\u308b\u80fd\u529b\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u73fe\u5728\u3001\u3053\u306e\u30af\u30ec\u30fc\u30c8\u306b\u306f3\u3064\u306e\u4e3b\u8981\u306a\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/struct.JsFuture.html",children:(0,c.jsx)(s.code,{children:"JsFuture"})})," -\r\n",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Promise.html",children:(0,c.jsx)(s.code,{children:"Promise"})})," \u3092\u4f7f\u7528\u3057\u3066\u69cb\u7bc9\u3055\u308c\u305f\u578b\u3067\u3001",(0,c.jsx)(s.code,{children:"Future<Output=Result<JsValue, JsValue>>"})," \u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",(0,c.jsx)(s.code,{children:"Promise"})," \u304c\u89e3\u6c7a\u3055\u308c\u308b\u3068\u3001\u3053\u306e ",(0,c.jsx)(s.code,{children:"Future"})," \u306f ",(0,c.jsx)(s.code,{children:"Ok"})," \u306b\u89e3\u6c7a\u3055\u308c\u3001",(0,c.jsx)(s.code,{children:"Promise"})," \u304c\u62d2\u5426\u3055\u308c\u308b\u3068 ",(0,c.jsx)(s.code,{children:"Err"})," \u306b\u89e3\u6c7a\u3055\u308c\u3001\u305d\u308c\u305e\u308c ",(0,c.jsx)(s.code,{children:"Promise"})," \u306e\u89e3\u6c7a\u307e\u305f\u306f\u62d2\u5426\u306e\u5024\u3092\u542b\u307f\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.future_to_promise.html",children:(0,c.jsx)(s.code,{children:"future_to_promise"})})," -\r\nRust \u306e ",(0,c.jsx)(s.code,{children:"Future<Output=Result<JsValue, JsValue>>"})," \u3092 JavaScript \u306e ",(0,c.jsx)(s.code,{children:"Promise"})," \u306b\u5909\u63db\u3057\u307e\u3059\u3002Future \u306e\u7d50\u679c\u306f\u3001JavaScript \u5185\u306e\u89e3\u6c7a\u307e\u305f\u306f\u62d2\u5426\u3055\u308c\u305f ",(0,c.jsx)(s.code,{children:"Promise"})," \u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,c.jsx)(s.code,{children:"spawn_local"})})," -\r\n\u73fe\u5728\u306e\u30b9\u30ec\u30c3\u30c9\u3067 ",(0,c.jsx)(s.code,{children:"Future<Output = ()>"})," \u3092\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001Rust \u5185\u3067 Future \u3092\u5b9f\u884c\u3059\u308b\u6700\u826f\u306e\u65b9\u6cd5\u3067\u3042\u308a\u3001JavaScript \u306b\u9001\u4fe1\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001Rust \u5185\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/index.html",children:[(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]}),"."]})}),"\n",(0,c.jsx)(s.h3,{id:"spawn_local",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,c.jsx)(s.code,{children:"spawn_local"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"spawn_local"})," \u306f\u3001\u975e\u540c\u671f API \u3092\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u3001Yew \u3067 ",(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})," \u30af\u30ec\u30fc\u30c8\u306e\u6700\u3082\u4e00\u822c\u7684\u306b\u4f7f\u7528\u3055\u308c\u308b\u90e8\u5206\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-rust",metastring:",no_run",children:'use web_sys::console;\r\nuse wasm_bindgen_futures::spawn_local;\r\n\r\nasync fn my_async_fn() -> String { String::from("Hello") }\r\n\r\nspawn_local(async {\r\n    let mut string = my_async_fn().await;\r\n    string.push_str(", world!");\r\n    // "Hello, world!" \u3092\u51fa\u529b\u3057\u307e\u3059\r\n    console::log_1(&string.into());\r\n});\n'})}),"\n",(0,c.jsxs)(s.p,{children:["Yew \u306f\u3044\u304f\u3064\u304b\u306e API \u306b futures \u306e\u30b5\u30dd\u30fc\u30c8\u3092\u8ffd\u52a0\u3057\u3066\u304a\u308a\u3001\u7279\u306b ",(0,c.jsx)(s.code,{children:"async"})," \u30d6\u30ed\u30c3\u30af\u3092\u53d7\u3051\u5165\u308c\u308b ",(0,c.jsx)(s.code,{children:"callback_future"})," \u3092\u4f5c\u6210\u3067\u304d\u308b\u3053\u3068\u304c\u6ce8\u76ee\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u5185\u90e8\u7684\u306b ",(0,c.jsx)(s.code,{children:"spawn_local"})," \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:[(0,c.jsx)(s.code,{children:"spawn_local"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]}),"."]})})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var c=n(6540);const r={},d=c.createContext(r);function i(e){const s=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(d.Provider,{value:s},e.children)}}}]);