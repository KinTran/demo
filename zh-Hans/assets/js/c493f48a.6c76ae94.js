"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9445],{6572:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var s=r(4848),t=r(8453);const l={title:"\u7b2c\u4e00\u4e2a\u7b80\u5355\u7684 App"},o=void 0,d={id:"getting-started/build-a-sample-app",title:"\u7b2c\u4e00\u4e2a\u7b80\u5355\u7684 App",description:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 cargo \u9879\u76ee\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.18.0/getting-started/build-a-sample-app.mdx",sourceDirName:"getting-started",slug:"/getting-started/build-a-sample-app",permalink:"/demo/zh-Hans/docs/0.18.0/getting-started/build-a-sample-app",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/getting-started/build-a-sample-app.mdx",tags:[],version:"0.18.0",frontMatter:{title:"\u7b2c\u4e00\u4e2a\u7b80\u5355\u7684 App"},sidebar:"docs",previous:{title:"\u4f7f\u7528 cargo-web",permalink:"/demo/zh-Hans/docs/0.18.0/getting-started/project-setup/using-cargo-web"},next:{title:"\u9009\u62e9\u4e00\u4e2aweb\u5e93",permalink:"/demo/zh-Hans/docs/0.18.0/getting-started/choose-web-library"}},a={},i=[{value:"\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f!",id:"\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 cargo \u9879\u76ee\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo new yew-app\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\u521a\u521a\u521b\u5efa\u7684\u76ee\u5f55\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u5728",(0,s.jsx)(n.code,{children:"Cargo.toml"}),"\u6587\u4ef6\u4e2d\u6dfb\u52a0",(0,s.jsx)(n.code,{children:"yew"}),"\u4f5c\u4e3a\u4f9d\u8d56\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[package]\r\nname = "yew-app"\r\nversion = "0.1.0"\r\nedition = "2018"\r\n\r\n[dependencies]\r\n# \u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u67e5\u770b\u6700\u65b0\u7248\u672c: https://crates.io/crates/yew\r\nyew = "0.18"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u5230\u60a8\u7684",(0,s.jsx)(n.code,{children:"src/main.rs"}),"\u6587\u4ef6\u4e2d\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nenum Msg {\r\n    AddOne,\r\n}\r\n\r\nstruct Model {\r\n    // `ComponentLink` is like a reference to a component.\r\n    // It can be used to send messages to the component\r\n    link: ComponentLink<Self>,\r\n    value: i64,\r\n}\r\n\r\nimpl Component for Model {\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {\r\n        Self {\r\n            link,\r\n            value: 0,\r\n        }\r\n    }\r\n\r\n    fn update(&mut self, msg: Self::Message) -> ShouldRender {\r\n        match msg {\r\n            Msg::AddOne => {\r\n                self.value += 1;\r\n                // the value has changed so we need to\r\n                // re-render for it to appear on the page\r\n                true\r\n            }\r\n        }\r\n    }\r\n\r\n    fn change(&mut self, _props: Self::Properties) -> ShouldRender {\r\n        // Should only return "true" if new properties are different to\r\n        // previously received properties.\r\n        // This component has no properties so we will always return "false".\r\n        false\r\n    }\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <div>\r\n                <button onclick=self.link.callback(|_| Msg::AddOne)>{ "+1" }</button>\r\n                <p>{ self.value }</p>\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\nfn main() {\r\n    yew::start_app::<Model>();\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4efd\u4ee3\u7801\u901a\u8fc7\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Model"})," \u6784\u5efa\u4e86\u4f60\u7684\u6839 ",(0,s.jsx)(n.code,{children:"\u7ec4\u4ef6"}),"\uff0c\u5b83\u4f1a\u663e\u793a\u4e00\u4e2a\u6309\u94ae\uff0c\u5f53\u4f60\u70b9\u51fb\u6309\u94ae\u65f6\uff0cModel \u5c06\u4f1a\u66f4\u65b0\u81ea\u5df1\u7684\u72b6\u6001\u3002\u7279\u522b\u6ce8\u610f main() \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"yew::start_app::<Model>()"}),"\uff0c\u5b83\u4f1a\u542f\u52a8\u4f60\u7684\u5e94\u7528\u5e76\u5c06\u5176\u6302\u8f7d\u5230\u9875\u9762\u7684 ",(0,s.jsx)(n.code,{children:"<body>"})," \u6807\u7b7e\u4e2d\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u4efb\u4f55\u52a8\u6001\u5c5e\u6027\u6765\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"yew::start_app_with_props::<Model>(..)"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u5c06",(0,s.jsx)(n.code,{children:"index.html"}),"\u6587\u4ef6\u6dfb\u52a0\u5f53\u524d\u5e94\u7528\u7684\u6839\u76ee\u5f55\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!doctype html>\r\n<html>\r\n    <head>\r\n        <meta charset="utf-8" />\r\n        <title>Yew App</title>\r\n    </head>\r\n</html>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",children:"\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f!"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5c1a\u672a\u5b89\u88c5 ",(0,s.jsx)(n.a,{href:"https://github.com/thedodd/trunk",children:"Trunk"}),"\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo install trunk wasm-bindgen-cli\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06",(0,s.jsx)(n.code,{children:"wasm32-unknown-unknown"}),"\u6dfb\u52a0\u4e3a\u7f16\u8bd1\u76ee\u6807\u3002 \u5982\u679c\u8fd8\u672a\u5b89\u88c5\uff0c\u8bf7\u4f7f\u7528 Rustup \u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u60a8\u6240\u8981\u505a\u7684\u5c31\u662f\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"trunk serve\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u5c06\u542f\u52a8\u4e00\u4e2a\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u8be5\u670d\u52a1\u5668\u5728\u60a8\u6bcf\u6b21\u8fdb\u884c\u66f4\u6539\u65f6\u90fd\u4f1a\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Trunk \u5b89\u88c5\u5931\u8d25\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u786e\u4fdd\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 openssl \u7684\u5f00\u53d1\u5305\u3002\u4f8b\u5982\uff0cUbuntu \u4e0a\u7684 libssl-dev \u6216 Fedora \u4e0a\u7684 openssl-devel\u3002"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(6540);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);