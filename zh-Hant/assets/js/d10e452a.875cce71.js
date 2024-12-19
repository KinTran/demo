"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[137],{6727:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var t=r(4848),s=r(8453);const d={},a="\u7b2c\u4e00\u500b\u7c21\u55ae\u7684 App",i={id:"getting-started/build-a-sample-app",title:"\u7b2c\u4e00\u500b\u7c21\u55ae\u7684 App",description:"\u9996\u5148\uff0c\u5148\u5efa\u7acb\u4e00\u500b\u65b0\u7684 binary \u5c08\u6848\uff1a",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.21/getting-started/build-a-sample-app.mdx",sourceDirName:"getting-started",slug:"/getting-started/build-a-sample-app",permalink:"/demo/zh-Hant/docs/getting-started/build-a-sample-app",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/getting-started/build-a-sample-app.mdx",tags:[],version:"0.21",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/demo/zh-Hant/docs/getting-started/introduction"},next:{title:"\u900f\u904e\u7bc4\u4f8b\u5b78\u7fd2",permalink:"/demo/zh-Hant/docs/getting-started/examples"}},l={},c=[{value:"\u57f7\u884c\u4f60\u7684 App\uff01",id:"\u57f7\u884c\u4f60\u7684-app",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u7b2c\u4e00\u500b\u7c21\u55ae\u7684-app",children:"\u7b2c\u4e00\u500b\u7c21\u55ae\u7684 App"})}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5148\u5efa\u7acb\u4e00\u500b\u65b0\u7684 binary \u5c08\u6848\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo new --bin yew-app && cd yew-app\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u4f9d\u8cf4\u5eab\u88e1\u52a0\u5165 ",(0,t.jsx)(n.code,{children:"yew"})," \u8207 ",(0,t.jsx)(n.code,{children:"wasm-bindgen"}),"\uff08\u6700\u65b0\u7684\u7248\u865f\uff0c\u8acb\u53c3\u8003",(0,t.jsx)(n.a,{href:"https://docs.rs/yew",children:"\u9019\u88e1"}),"\uff09"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="Cargo.toml"',children:'[package]\r\nname = "yew-app"\r\nversion = "0.1.0"\r\nauthors = ["Yew App Developer <name@example.com>"]\r\nedition = "2018"\r\n\r\n[dependencies]\r\nyew = "0.16"\r\nwasm-bindgen = "0.2"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c07\u4e0b\u9762\u7684\u6a21\u677f\u8907\u88fd\u9032\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"src/lib.rs"})," \u6a94\u6848\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:'title="src/lib.rs"',children:'use wasm_bindgen::prelude::*;\r\nuse yew::prelude::*;\r\n\r\nstruct Model {\r\n    link: ComponentLink<Self>,\r\n    value: i64,\r\n}\r\n\r\nenum Msg {\r\n    AddOne,\r\n}\r\n\r\nimpl Component for Model {\r\n    type Message = Msg;\r\n    type Properties = ();\r\n    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {\r\n        Self {\r\n            link,\r\n            value: 0,\r\n        }\r\n    }\r\n\r\n    fn update(&mut self, msg: Self::Message) -> ShouldRender {\r\n        match msg {\r\n            Msg::AddOne => self.value += 1\r\n        }\r\n        true\r\n    }\r\n\r\n    fn change(&mut self, _props: Self::Properties) -> ShouldRender {\r\n        // \u5982\u679c\u6709\u65b0\u7684\u4e0d\u540c\u5c6c\u6027\uff0c\u61c9\u8a72\u53ea\u80fd\u56de\u50b3 true\r\n        // \u82e5\u662f\u9019\u500b\u5143\u4ef6\u6c92\u6709\u4efb\u4f55\u5c6c\u6027\uff0c\u90a3\u5c31\u53ef\u4ee5\u53ea\u56de\u50b3 false\r\n        false\r\n    }\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <div>\r\n                <button onclick={self.link.callback(|_| Msg::AddOne)}>{ "+1" }</button>\r\n                <p>{ self.value }</p>\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\n#[wasm_bindgen(start)]\r\npub fn run_app() {\r\n    App::<Model>::new().mount_to_body();\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6a21\u677f\u6703\u5efa\u7f6e\u540d\u53eb ",(0,t.jsx)(n.code,{children:"Model"})," \u7684\u6839\u5143\u4ef6 ",(0,t.jsx)(n.code,{children:"Component"}),"\uff0cModel \u6703\u986f\u793a\u4e00\u500b\u6309\u9215\uff0c\u7576\u4f60\u6309\u4e0b\u6309\u9215\u6642\uff0c ",(0,t.jsx)(n.code,{children:"Model"})," \u6703\u66f4\u65b0\u81ea\u5df1\u7684\u72c0\u614b\u3002\u9700\u8981\u7279\u5225\u6ce8\u610f\u7684\u662f\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"main()"})," \u88e1\u7684 ",(0,t.jsx)(n.code,{children:"App::<Model>::new().mount_to_body()"}),"\uff0c\u4ed6\u6703\u555f\u52d5\u4f60\u7684 app \u4e26\u4e14\u639b\u8f09 ",(0,t.jsx)(n.code,{children:"Model"})," \u88e1\u7684 HTML \u5230 ",(0,t.jsx)(n.code,{children:"<body>"})," \u6a19\u7c64\u4e2d\u3002\u5982\u679c\u4f60\u60f3\u8981\u5728\u555f\u52d5\u61c9\u7528\u7a0b\u5f0f\u6642\uff0c\u5e36\u5165\u52d5\u614b\u7684\u5c6c\u6027\uff0c\u4f60\u53ef\u4ee5\u6539\u7528 ",(0,t.jsx)(n.code,{children:"App::<Model>::new().mount_to_body_with_props(..)"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u5f8c\uff0c\u5728\u4f60\u7684\u5c08\u6848\uff0c\u65b0\u589e ",(0,t.jsx)(n.code,{children:"static"})," \u8cc7\u6599\u593e\uff0c\u4e26\u65b0\u589e ",(0,t.jsx)(n.code,{children:"index.html"})," \u6a94\u6848\u5230 static \u88e1\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir static\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="index.html"',children:'<!doctype html>\r\n<html lang="en">\r\n    <head>\r\n        <meta charset="utf-8">\r\n        <title>Yew Sample App</title>\r\n        <script type="module">\r\n            import init from "./wasm.js"\r\n            init()\r\n        <\/script>\r\n    </head>\r\n    <body></body>\r\n</html>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u57f7\u884c\u4f60\u7684-app",children:"\u57f7\u884c\u4f60\u7684 App\uff01"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/docs/wasm-pack/",children:(0,t.jsx)(n.code,{children:"wasm-pack"})})," \u4f86\u57f7\u884c\u5c08\u6848\u662f\u6bd4\u8f03\u597d\u7684\u9078\u64c7\u3002\u5982\u679c\u4f60\u9084\u6c92\u6709\u505a\u4efb\u4f55\u6e96\u5099\uff0c\u5148\u7528",(0,t.jsx)(n.code,{children:"cargo install wasm-pack"}),"\u5b89\u88dd ",(0,t.jsx)(n.code,{children:"wasm-pack"})," \uff0c\u7136\u5f8c\u7528\u4e0b\u9762\u7684\u6307\u4ee4\uff0c\u5efa\u7f6e\u8207\u958b\u555f\u958b\u767c\u7528\u4f3a\u670d\u5668\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wasm-pack build --target web --out-name wasm --out-dir ./static\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"wasm-pack"})," \u6703\u5728 ",(0,t.jsx)(n.code,{children:"./static"})," \u88e1\u7522\u751f\u4e00\u500b bundle\uff0c\u88e1\u9762\u5305\u542b\u5c08\u6848\u7de8\u6210\u7684 WebAssembly\uff0c\u4ee5\u53ca JavaScript \u7684\u5305\u88f9\u5668\uff0c\u9019\u4e9b\u6771\u897f\u90fd\u6703\u5728\u4f60\u7684\u5c08\u6848\u57f7\u884c\u6642\u88ab\u8f09\u5165\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u5f8c\uff0c\u7528\u4f60\u6700\u559c\u6b61\u7684\u7db2\u9801\u4f3a\u670d\u5668\uff0c\u53bb\u555f\u52d5\u5728",(0,t.jsx)(n.code,{children:"./static"})," \u5e95\u4e0b\u7684\u6a94\u6848\u3002\u7bc4\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo +nightly install miniserve\r\nminiserve ./static --index index.html\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const s={},d=t.createContext(s);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);