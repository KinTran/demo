"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7732],{1474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(4848),o=t(8453);const r={title:"Refs",description:"\u8d85\u51fa\u754c\u9650\u7684 DOM \u8bbf\u95ee"},c=void 0,d={id:"advanced-topics/struct-components/refs",title:"Refs",description:"\u8d85\u51fa\u754c\u9650\u7684 DOM \u8bbf\u95ee",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.20/advanced-topics/struct-components/refs.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/refs",permalink:"/demo/zh-Hans/docs/0.20/advanced-topics/struct-components/refs",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/advanced-topics/struct-components/refs.mdx",tags:[],version:"0.20",frontMatter:{title:"Refs",description:"\u8d85\u51fa\u754c\u9650\u7684 DOM \u8bbf\u95ee"},sidebar:"docs",previous:{title:"\u5c5e\u6027\uff08Properties\uff09",permalink:"/demo/zh-Hans/docs/0.20/advanced-topics/struct-components/properties"},next:{title:"Children",permalink:"/demo/zh-Hans/docs/0.20/advanced-topics/children"}},i={},a=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ref"})," \u5173\u952e\u8bcd\u53ef\u88ab\u7528\u5728\u4efb\u4f55 HTML \u5143\u7d20\u6216\u7ec4\u4ef6\u5185\u90e8\u4ee5\u83b7\u5f97\u8be5\u9879\u6240\u9644\u52a0\u5230\u7684 DOM \u5143\u7d20\u3002\u8fd9\u53ef\u88ab\u7528\u4e8e\u5728 ",(0,s.jsx)(n.code,{children:"view"})," \u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e4b\u5916\u6765\u5bf9 DOM \u8fdb\u884c\u66f4\u6539\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u5bf9\u4e8e\u83b7\u53d6 canvas \u5143\u7d20\u6216\u8005\u6eda\u52a8\u5230\u9875\u9762\u7684\u4e0d\u540c\u90e8\u5206\u662f\u6709\u7528\u7684\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"// \u5728 create \u4e2d\r\nself.node_ref = NodeRef::default();\r\n\r\n// \u5728 view \u4e2d\r\nhtml! {\r\n    <div ref={self.node_ref.clone()}></div>\r\n}\r\n\r\n// \u5728 update \u4e2d\r\nlet has_attributes = self.node_ref.cast::<Element>().unwrap().has_attributes();\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(6540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);