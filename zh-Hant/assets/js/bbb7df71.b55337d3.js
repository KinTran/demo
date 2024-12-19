"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2148],{3574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=t(4848),o=t(8453);const r={description:"\u5916\u5e36 DOM \u7684\u5b58\u53d6"},c="Refs",i={id:"concepts/components/refs",title:"Refs",description:"\u5916\u5e36 DOM \u7684\u5b58\u53d6",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.18.0/concepts/components/refs.mdx",sourceDirName:"concepts/components",slug:"/concepts/components/refs",permalink:"/zh-Hant/docs/0.18.0/concepts/components/refs",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/components/refs.mdx",tags:[],version:"0.18.0",frontMatter:{description:"\u5916\u5e36 DOM \u7684\u5b58\u53d6"},sidebar:"docs",previous:{title:"Children",permalink:"/zh-Hant/docs/0.18.0/concepts/components/children"},next:{title:"Introduction",permalink:"/zh-Hant/docs/0.18.0/concepts/wasm-bindgen/"}},d={},a=[{value:"Refs",id:"refs-1",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"refs",children:"Refs"})}),"\n",(0,s.jsx)(n.h2,{id:"refs-1",children:"Refs"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ref"})," \u95dc\u9375\u5b57\u53ef\u4ee5\u88ab\u4f7f\u7528\u5728\u4efb\u4f55 HTML \u7684\u5143\u7d20\u6216\u662f\u5143\u4ef6\uff0c\u7528\u4f86\u5f97\u5230\u90a3\u500b\u7269\u4ef6\u9644\u52a0\u7684 DOM ",(0,s.jsx)(n.code,{children:"Element"}),"\u3002\u9019\u500b\u53ef\u4ee5\u5728 view \u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e4b\u5916\uff0c\u6539\u8b8a DOM\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5c0d\u65bc\u8981\u5b58\u53d6 canvas \u5143\u7d20\uff0c\u6216\u6efe\u52d5\u5230\u9801\u9762\u4e0d\u540c\u7684\u5340\u584a\uff0c\u5f88\u6709\u5e6b\u52a9\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8a9e\u6cd5\u53ef\u4ee5\u9019\u6a23\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"// \u5efa\u7acb\r\nself.node_ref = NodeRef::default();\r\n\r\n// \u5728 view \u88e1\r\nhtml! {\r\n    <div ref=self.node_ref.clone()></div>\r\n}\r\n\r\n// \u66f4\u65b0\r\nlet has_attributes = self.node_ref.cast::<Element>().unwrap().has_attributes();\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);