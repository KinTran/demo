"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9732],{5477:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var o=t(4848),r=t(8453);const c={title:"\u56de\u8c03 (Callbacks)"},l=void 0,s={id:"concepts/function-components/callbacks",title:"\u56de\u8c03 (Callbacks)",description:"\u56de\u8c03\u51fd\u6570\u7528\u4e8e\u5728\u7ec4\u4ef6\u6811\u4e2d\u5411\u4e0a\u4f20\u9012\u4fe1\u606f\uff0c\u4ee5\u53ca\u5728\u4e8b\u4ef6\u5904\u7406\u671f\u95f4\u4e0e\u5176\u4ed6\u7ec4\u4ef6\uff08\u5982\u4ee3\u7406\u6216 DOM\uff09\u8fdb\u884c\u901a\u4fe1\u3002\u5728\u5185\u90e8\uff0c\u56de\u8c03\u51fd\u6570\u7684\u7c7b\u578b\u53ea\u662f\u4e00\u4e2a Fn\uff0c\u5e76\u4e14\u88ab\u5305\u88c5\u5728 Rc \u4e2d\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u88ab\u5ec9\u4ef7\u5730\u514b\u9686\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/function-components/callbacks.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/callbacks",permalink:"/demo/zh-Hans/docs/next/concepts/function-components/callbacks",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/function-components/callbacks.mdx",tags:[],version:"current",frontMatter:{title:"\u56de\u8c03 (Callbacks)"},sidebar:"docs",previous:{title:"\u5c5e\u6027 (Properties)",permalink:"/demo/zh-Hans/docs/next/concepts/function-components/properties"},next:{title:"\u5b50\u5143\u7d20 (Children)",permalink:"/demo/zh-Hans/docs/next/concepts/function-components/children"}},i={},a=[{value:"\u5c06\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012",id:"\u5c06\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012",level:2},{value:"DOM \u4e8b\u4ef6\u548c\u56de\u8c03\u51fd\u6570",id:"dom-\u4e8b\u4ef6\u548c\u56de\u8c03\u51fd\u6570",level:2}];function m(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u56de\u8c03\u51fd\u6570\u7528\u4e8e\u5728\u7ec4\u4ef6\u6811\u4e2d\u5411\u4e0a\u4f20\u9012\u4fe1\u606f\uff0c\u4ee5\u53ca\u5728\u4e8b\u4ef6\u5904\u7406\u671f\u95f4\u4e0e\u5176\u4ed6\u7ec4\u4ef6\uff08\u5982\u4ee3\u7406\u6216 DOM\uff09\u8fdb\u884c\u901a\u4fe1\u3002\u5728\u5185\u90e8\uff0c\u56de\u8c03\u51fd\u6570\u7684\u7c7b\u578b\u53ea\u662f\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"Fn"}),"\uff0c\u5e76\u4e14\u88ab\u5305\u88c5\u5728 ",(0,o.jsx)(e.code,{children:"Rc"})," \u4e2d\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u88ab\u5ec9\u4ef7\u5730\u514b\u9686\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u60f3\u624b\u52a8\u8c03\u7528\u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"emit"})," \u51fd\u6570\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html, Callback};\r\n\r\nlet cb: Callback<String, String> = Callback::from(move |name: String| {\r\n    format!("Bye {}", name)\r\n});\r\n\r\nlet result = cb.emit(String::from("Bob"));  // \u8c03\u7528\u56de\u8c03\u51fd\u6570\r\n// web_sys::console::log_1(&result.into()); // \u5982\u679c\u53d6\u6d88\u6ce8\u91ca\uff0c\u5c06\u6253\u5370 "Bye Bob"\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u5c06\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012",children:"\u5c06\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012"}),"\n",(0,o.jsx)(e.p,{children:"\u5728 yew \u4e2d\u7684\u4e00\u4e2a\u5e38\u89c1\u6a21\u5f0f\u662f\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties, Callback};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    pub on_name_entry: Callback<String>,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n\r\n    props.on_name_entry.emit(String::from("Bob"));\r\n\r\n    html! { "Hello" }\r\n}\r\n\r\n// \u7136\u540e\u63d0\u4f9b\u5c5e\u6027 (Props)\r\n#[function_component]\r\nfn App() -> Html {\r\n    let on_name_entry: Callback<String> = Callback::from(move |name: String| {\r\n        let greeting = format!("Hey, {}!", name);\r\n        // web_sys::console::log_1(&greeting.into()); // \u5982\u679c\u53d6\u6d88\u6ce8\u91ca\uff0c\u8fd9\u91cc\u4f1a\u6253\u5370\u6587\u672c\r\n    });\r\n\r\n    html! { <HelloWorld {on_name_entry} /> }\r\n}\r\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"dom-\u4e8b\u4ef6\u548c\u56de\u8c03\u51fd\u6570",children:"DOM \u4e8b\u4ef6\u548c\u56de\u8c03\u51fd\u6570"}),"\n",(0,o.jsx)(e.p,{children:"\u56de\u8c03\u51fd\u6570\u4e5f\u7528\u4e8e\u8fde\u63a5\u5230 DOM \u4e8b\u4ef6\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5f53\u7528\u6237\u70b9\u51fb\u6309\u94ae\u65f6\u5c06\u4f1a\u8c03\u7528\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties, Callback};\r\n\r\n#[function_component]\r\nfn App() -> Html {\r\n    let onclick = Callback::from(move |_| {\r\n        let greeting = String::from("Hi there");\r\n        // web_sys::console::log_1(&greeting.into()); // \u5982\u679c\u53d6\u6d88\u6ce8\u91ca\uff0c\u8fd9\u91cc\u4f1a\u6253\u5370\u6587\u672c\r\n    });\r\n\r\n    html! {\r\n        <button {onclick}>{ "Click" }</button>\r\n    }\r\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var o=t(6540);const r={},c=o.createContext(r);function l(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);