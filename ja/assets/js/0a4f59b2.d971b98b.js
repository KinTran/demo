"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5270],{2886:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(4848),s=t(8453);const o={title:"\u53c2\u7167 (Refs)",description:"DOM \u3078\u306e\u8d8a\u5883\u30a2\u30af\u30bb\u30b9\u3092\u5b9f\u73fe\u3059\u308b"},c=void 0,d={id:"advanced-topics/struct-components/refs",title:"\u53c2\u7167 (Refs)",description:"DOM \u3078\u306e\u8d8a\u5883\u30a2\u30af\u30bb\u30b9\u3092\u5b9f\u73fe\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/advanced-topics/struct-components/refs.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/refs",permalink:"/demo/ja/docs/next/advanced-topics/struct-components/refs",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/refs.mdx",tags:[],version:"current",frontMatter:{title:"\u53c2\u7167 (Refs)",description:"DOM \u3078\u306e\u8d8a\u5883\u30a2\u30af\u30bb\u30b9\u3092\u5b9f\u73fe\u3059\u308b"},sidebar:"docs",previous:{title:"\u30d7\u30ed\u30d1\u30c6\u30a3 (Props)",permalink:"/demo/ja/docs/next/advanced-topics/struct-components/properties"},next:{title:"\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",permalink:"/demo/ja/docs/next/advanced-topics/children"}},i={},l=[{value:"\u95a2\u9023\u4f8b",id:"\u95a2\u9023\u4f8b",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ref"})," \u30ad\u30fc\u30ef\u30fc\u30c9\u306f\u3001\u4efb\u610f\u306e HTML \u8981\u7d20\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u4f7f\u7528\u3057\u3066\u3001\u305d\u306e\u8981\u7d20\u306b\u4ed8\u968f\u3059\u308b DOM ",(0,r.jsx)(n.code,{children:"Element"})," \u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001",(0,r.jsx)(n.code,{children:"view"})," \u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30e1\u30bd\u30c3\u30c9\u306e\u5916\u3067 DOM \u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001canvas \u8981\u7d20\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001\u30da\u30fc\u30b8\u306e\u7570\u306a\u308b\u90e8\u5206\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u305f\u308a\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e ",(0,r.jsx)(n.code,{children:"rendered"})," \u30e1\u30bd\u30c3\u30c9\u3067 ",(0,r.jsx)(n.code,{children:"NodeRef"})," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001",(0,r.jsx)(n.code,{children:"view"})," \u304b\u3089\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u5f8c\u306b canvas \u8981\u7d20\u306b\u63cf\u753b\u547c\u3073\u51fa\u3057\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use web_sys::Element;\r\nuse yew::{html, Component, Context, Html, NodeRef};\r\n\r\nstruct Comp {\r\n    node_ref: NodeRef,\r\n}\r\n\r\nimpl Component for Comp {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            // highlight-next-line\r\n            node_ref: NodeRef::default(),\r\n        }\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            // highlight-next-line\r\n            <div ref={self.node_ref.clone()}></div>\r\n        }\r\n    }\r\n\r\n    fn rendered(&mut self, _ctx: &Context<Self>, _first_render: bool) {\r\n        // highlight-start\r\n        let has_attributes = self.node_ref\r\n            .cast::<Element>()\r\n            .unwrap()\r\n            .has_attributes();\r\n        // highlight-end\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u95a2\u9023\u4f8b",children:"\u95a2\u9023\u4f8b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/node_refs",children:"\u30ce\u30fc\u30c9\u53c2\u7167"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(6540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);