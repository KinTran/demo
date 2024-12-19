"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8328],{7048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var s=t(4848),o=t(8453);const c={title:"Refs",description:"Out-of-band DOM access"},r=void 0,d={id:"advanced-topics/struct-components/refs",title:"Refs",description:"Out-of-band DOM access",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-0.20/advanced-topics/struct-components/refs.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/refs",permalink:"/demo/ja/docs/0.20/advanced-topics/struct-components/refs",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/advanced-topics/struct-components/refs.mdx",tags:[],version:"0.20",frontMatter:{title:"Refs",description:"Out-of-band DOM access"},sidebar:"docs",previous:{title:"Properties",permalink:"/demo/ja/docs/0.20/advanced-topics/struct-components/properties"},next:{title:"Children",permalink:"/demo/ja/docs/0.20/advanced-topics/children"}},i={},a=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ref"}),"\u306f\u3001\u4efb\u610f\u306e HTML \u8981\u7d20\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5185\u90e8\u3067\u3001\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u308b DOM",(0,s.jsx)(n.code,{children:"Element"}),"\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\r\n\u3053\u308c\u306f\u3001",(0,s.jsx)(n.code,{children:"view"})," \u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30e1\u30bd\u30c3\u30c9\u306e\u5916\u3067 DOM \u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30f3\u30d0\u30b9\u306e\u8981\u7d20\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001\u30da\u30fc\u30b8\u306e\u7570\u306a\u308b\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u305f\u308a\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u69cb\u6587\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"// In create\r\nself.node_ref = NodeRef::default();\r\n\r\n// In view\r\nhtml! {\r\n    <div ref={self.node_ref.clone()}></div>\r\n}\r\n\r\n// In update\r\nlet has_attributes = self.node_ref.try_into::<Element>().has_attributes();\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(6540);const o={},c=s.createContext(o);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);