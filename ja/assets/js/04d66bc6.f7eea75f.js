"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6242],{8322:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=r(4848),t=r(8453);const i={title:"Build a sample app"},l=void 0,a={id:"getting-started/build-a-sample-app",title:"Build a sample app",description:"\u306f\u3058\u3081\u306b\u3001Rust \u306e\u65b0\u898f\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046(\u91cd\u8981: --lib\u30d5\u30e9\u30b0\u3092\u6e21\u3059\u3053\u3068\u3067\u30d0\u30a4\u30ca\u30ea\u3067\u306f\u306a\u304f\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u3063\u3066\u304f\u3060\u3055\u3044)",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-0.18.0/getting-started/build-a-sample-app.mdx",sourceDirName:"getting-started",slug:"/getting-started/build-a-sample-app",permalink:"/demo/ja/docs/0.18.0/getting-started/build-a-sample-app",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/getting-started/build-a-sample-app.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Build a sample app"},sidebar:"docs",previous:{title:"Using cargo-web",permalink:"/demo/ja/docs/0.18.0/getting-started/project-setup/using-cargo-web"},next:{title:"Choosing a web library",permalink:"/demo/ja/docs/0.18.0/getting-started/choose-web-library"}},d={},o=[{value:"\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059!",id:"\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u306f\u3058\u3081\u306b\u3001Rust \u306e\u65b0\u898f\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046(",(0,s.jsx)(n.strong,{children:"\u91cd\u8981:"})," ",(0,s.jsx)(n.code,{children:"--lib"}),"\u30d5\u30e9\u30b0\u3092\u6e21\u3059\u3053\u3068\u3067",(0,s.jsx)(n.em,{children:"\u30d0\u30a4\u30ca\u30ea"}),"\u3067\u306f\u306a\u304f",(0,s.jsx)(n.em,{children:"\u30e9\u30a4\u30d6\u30e9\u30ea"}),"\u3092\u4f5c\u3063\u3066\u304f\u3060\u3055\u3044)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo new --lib yew-app && cd yew-app\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\u306b",(0,s.jsx)(n.code,{children:"yew"}),"\u3068",(0,s.jsx)(n.code,{children:"wasm-bindgen"}),"\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044 (\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3064\u3044\u3066\u306f",(0,s.jsx)(n.a,{href:"https://docs.rs/yew",children:"\u3053\u3061\u3089"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",metastring:'title="Cargo.toml"',children:'[package]\r\nname = "yew-app"\r\nversion = "0.1.0"\r\nauthors = ["Yew App Developer <name@example.com>"]\r\nedition = "2018"\r\n\r\n[lib]\r\ncrate-type = ["cdylib", "rlib"]\r\n\r\n[dependencies]\r\nyew = "0.17"\r\nwasm-bindgen = "0.2"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092 ",(0,s.jsx)(n.code,{children:"src/lib.rs"}),"\u30d5\u30a1\u30a4\u30eb\u306b\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:'title="src/lib.rs"',children:'use wasm_bindgen::prelude::*;\r\nuse yew::prelude::*;\r\n\r\nstruct Model {\r\n    link: ComponentLink<Self>,\r\n    value: i64,\r\n}\r\n\r\nenum Msg {\r\n    AddOne,\r\n}\r\n\r\nimpl Component for Model {\r\n    type Message = Msg;\r\n    type Properties = ();\r\n    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {\r\n        Self {\r\n            link,\r\n            value: 0,\r\n        }\r\n    }\r\n\r\n    fn update(&mut self, msg: Self::Message) -> ShouldRender {\r\n        match msg {\r\n            Msg::AddOne => self.value += 1\r\n        }\r\n        true\r\n    }\r\n\r\n    fn change(&mut self, _props: Self::Properties) -> ShouldRender {\r\n        // Should only return "true" if new properties are different to\r\n        // previously received properties.\r\n        // This component has no properties so we will always return "false".\r\n        false\r\n    }\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <div>\r\n                <button onclick=self.link.callback(|_| Msg::AddOne)>{ "+1" }</button>\r\n                <p>{ self.value }</p>\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\n#[wasm_bindgen(start)]\r\npub fn run_app() {\r\n    App::<Model>::new().mount_to_body();\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u30eb\u30fc\u30c8\u306b",(0,s.jsx)(n.code,{children:"Component"}),"\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001",(0,s.jsx)(n.code,{children:"Model"}),"\u3068\u547c\u3070\u308c\u308b\u30af\u30ea\u30c3\u30af\u3057\u305f\u3089\u66f4\u65b0\u3059\u308b\u30dc\u30bf\u30f3\u3092\u4f5c\u308a\u307e\u3059\u3002\r\n",(0,s.jsx)(n.code,{children:"main()"}),"\u306e\u4e2d\u306b\u3042\u308b",(0,s.jsx)(n.code,{children:"App::<Model>::new().mount_to_body()"}),"\u304c\u30a2\u30d7\u30ea\u3092\u30b9\u30bf\u30fc\u30c8\u3057\u3066\u30da\u30fc\u30b8\u306e",(0,s.jsx)(n.code,{children:"<body>"}),"\u30bf\u30b0\u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b\u3053\u3068\u306b\u7279\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\r\n\u52d5\u7684\u306a\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u30a2\u30d7\u30ea\u3092\u30b9\u30bf\u30fc\u30c8\u3057\u305f\u3044\u5834\u5408\u306f\u4ee3\u308f\u308a\u306b",(0,s.jsx)(n.code,{children:"App::<Model>::new().mount_to_body_with_props(..)"}),"\u3092\u4f7f\u3046\u3053\u3068\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u5f8c\u306b\u3001\u30a2\u30d7\u30ea\u306e\u4e2d\u306e",(0,s.jsx)(n.code,{children:"static"}),"\u3068\u3044\u3046\u540d\u524d\u306e\u30d5\u30a9\u30eb\u30c0\u306b",(0,s.jsx)(n.code,{children:"index.html"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir static\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markup",metastring:'title="index.html"',children:'<!doctype html>\r\n<html lang="en">\r\n    <head>\r\n        <meta charset="utf-8">\r\n        <title>Yew Sample App</title>\r\n        <script type="module">\r\n            import init from "./wasm.js"\r\n            init()\r\n        <\/script>\r\n    </head>\r\n    <body></body>\r\n</html>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059",children:"\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059!"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://rustwasm.github.io/docs/wasm-pack/",children:(0,s.jsx)(n.code,{children:"wasm-pack"})}),"\u3092\u4f7f\u3046\u306e\u304c\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059\u306e\u306b\u63a8\u5968\u3055\u308c\u308b\u65b9\u6cd5\u3067\u3059\u3002\r\n\u307e\u3060",(0,s.jsx)(n.code,{children:"wasm-pack"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"cargo install wasm-pack"}),"\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u958b\u767a\u30b5\u30fc\u30d0\u30fc\u3092\u52d5\u304b\u3057\u3066\u307f\u307e\u3057\u3087\u3046:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wasm-pack build --target web --out-name wasm --out-dir ./static\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"wasm-pack"}),"\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f WebAssembly \u3068 JavaScript \u30e9\u30c3\u30d1\u30fc\u3092\u307e\u3068\u3081\u305f\u3082\u306e\u3092",(0,s.jsx)(n.code,{children:"./static"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4f5c\u308a\u3001\r\n\u30a2\u30d7\u30ea\u306e WebAssembly \u30d0\u30a4\u30ca\u30ea\u3092\u8aad\u307f\u8fbc\u3093\u3067\u52d5\u304b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u305d\u3057\u3066\u3001",(0,s.jsx)(n.code,{children:"./static"}),"\u4ee5\u4e0b\u3067\u597d\u304d\u306a\u30b5\u30fc\u30d0\u30fc\u3092\u30d5\u30a1\u30a4\u30eb\u3092\u30b5\u30fc\u30d6\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\r\n\u4f8b\u3048\u3070:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo +nightly install miniserve\r\nminiserve ./static --index index.html\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);