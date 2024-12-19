"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5862],{9080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(4848),s=t(8453);const o={title:"\u5f15\u7528 (Refs)",description:"\u5b9e\u73b0\u8d8a\u754c DOM \u8bbf\u95ee"},c=void 0,d={id:"advanced-topics/struct-components/refs",title:"\u5f15\u7528 (Refs)",description:"\u5b9e\u73b0\u8d8a\u754c DOM \u8bbf\u95ee",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-topics/struct-components/refs.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/refs",permalink:"/zh-Hans/docs/next/advanced-topics/struct-components/refs",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/refs.mdx",tags:[],version:"current",frontMatter:{title:"\u5f15\u7528 (Refs)",description:"\u5b9e\u73b0\u8d8a\u754c DOM \u8bbf\u95ee"},sidebar:"docs",previous:{title:"\u5c5e\u6027 (Props)",permalink:"/zh-Hans/docs/next/advanced-topics/struct-components/properties"},next:{title:"\u5b50\u7ec4\u4ef6",permalink:"/zh-Hans/docs/next/advanced-topics/children"}},i={},l=[{value:"\u76f8\u5173\u793a\u4f8b",id:"\u76f8\u5173\u793a\u4f8b",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ref"})," \u5173\u952e\u5b57\u53ef\u4ee5\u5728\u4efb\u4f55 HTML \u5143\u7d20\u6216\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4ee5\u83b7\u53d6\u9644\u52a0\u5230\u8be5\u5143\u7d20\u7684 DOM ",(0,r.jsx)(n.code,{children:"Element"}),"\u3002\u8fd9\u53ef\u4ee5\u7528\u4e8e\u5728 ",(0,r.jsx)(n.code,{children:"view"})," \u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e4b\u5916\u5bf9 DOM \u8fdb\u884c\u66f4\u6539\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u5bf9\u4e8e\u83b7\u53d6 canvas \u5143\u7d20\u6216\u6eda\u52a8\u5230\u9875\u9762\u7684\u4e0d\u540c\u90e8\u5206\u5f88\u6709\u7528\u3002\u4f8b\u5982\uff0c\u5728\u7ec4\u4ef6\u7684 ",(0,r.jsx)(n.code,{children:"rendered"})," \u65b9\u6cd5\u4e2d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"NodeRef"})," \u5141\u8bb8\u60a8\u5728\u4ece ",(0,r.jsx)(n.code,{children:"view"})," \u6e32\u67d3\u540e\u5bf9 canvas \u5143\u7d20\u8fdb\u884c\u7ed8\u5236\u8c03\u7528\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use web_sys::Element;\r\nuse yew::{html, Component, Context, Html, NodeRef};\r\n\r\nstruct Comp {\r\n    node_ref: NodeRef,\r\n}\r\n\r\nimpl Component for Comp {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            // highlight-next-line\r\n            node_ref: NodeRef::default(),\r\n        }\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            // highlight-next-line\r\n            <div ref={self.node_ref.clone()}></div>\r\n        }\r\n    }\r\n\r\n    fn rendered(&mut self, _ctx: &Context<Self>, _first_render: bool) {\r\n        // highlight-start\r\n        let has_attributes = self.node_ref\r\n            .cast::<Element>()\r\n            .unwrap()\r\n            .has_attributes();\r\n        // highlight-end\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u76f8\u5173\u793a\u4f8b",children:"\u76f8\u5173\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/node_refs",children:"\u8282\u70b9\u5f15\u7528"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(6540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);