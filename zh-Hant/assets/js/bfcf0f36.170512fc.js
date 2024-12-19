"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3973],{8241:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var t=r(4848),o=r(8453);const n={title:"Services",sidebar_label:"Overview",description:"Yew's glue to browser APIs"},c=void 0,i={id:"concepts/services/introduction",title:"Services",description:"Yew's glue to browser APIs",source:"@site/versioned_docs/version-0.18.0/concepts/services/introduction.mdx",sourceDirName:"concepts/services",slug:"/concepts/services/introduction",permalink:"/zh-Hant/docs/0.18.0/concepts/services/introduction",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/services/introduction.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Services",sidebar_label:"Overview",description:"Yew's glue to browser APIs"},sidebar:"docs",previous:{title:"Literals & Expressions",permalink:"/zh-Hant/docs/0.18.0/concepts/html/literals-and-expressions"},next:{title:"Fetch",permalink:"/zh-Hant/docs/0.18.0/concepts/services/fetch"}},l={},d=[];function a(e){const s={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(s.admonition,{type:"caution",children:[(0,t.jsxs)(s.p,{children:["Yew services will be removed in the next version of Yew ",(0,t.jsx)(s.code,{children:"v0.19"}),"."]}),(0,t.jsx)(s.p,{children:"Recommended replacements:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ConsoleService"})," - ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/weblog",children:"weblog"})," or ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/gloo-console",children:"gloo_console"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"DialogService"})," - ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/gloo-dialogs",children:"gloo_dialogs"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"IntervalService"})," - ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/gloo-timers",children:"gloo-timers"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"KeyboardService"})," - ",(0,t.jsx)(s.code,{children:"onkeydown"})," / ",(0,t.jsx)(s.code,{children:"onkeypress"})," / ",(0,t.jsx)(s.code,{children:"onkeyup"})," like so:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'let callback = Callback::from(|e| {\r\n    e.prevent_default();\r\n    todo!("use `e`, like you would in service methods.");\r\n});\r\nhtml! {\r\n    <input onkeydown={callback} />\r\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ResizeService"})," - use ",(0,t.jsx)(s.code,{children:"EventListener"})," from ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/gloo-events",children:"gloo_events"}),"\r\nto attach the event listener instead."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"StorageService"})," - ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/gloo-storage",children:"gloo-storage"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"TimeoutService"})," - ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/gloo-timers",children:"gloo-timers"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"WebSocketService"})," - ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/wasm-sockets",children:"wasm-sockets"})," or ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/reqwasm",children:"reqwasm"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"FetchService"})," - ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/reqwest",children:"reqwest"})," or ",(0,t.jsx)(s.a,{href:"https://crates.io/crates/reqwasm",children:"reqwasm"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>i});var t=r(6540);const o={},n=t.createContext(o);function c(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);