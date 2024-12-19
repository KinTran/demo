"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7503],{3549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=t(4848),r=t(8453);const l={title:"Lists"},c=void 0,o={id:"concepts/html/lists",title:"Lists",description:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-0.21/concepts/html/lists.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/lists",permalink:"/ja/docs/concepts/html/lists",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/html/lists.mdx",tags:[],version:"0.21",frontMatter:{title:"Lists"},sidebar:"docs",previous:{title:"Fragments",permalink:"/ja/docs/concepts/html/fragments"},next:{title:"Literals and Expressions",permalink:"/ja/docs/concepts/html/literals-and-expressions"}},i={},d=[{value:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8",id:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8",level:2},{value:"\u30a4\u30c6\u30ec\u30fc\u30bf",id:"\u30a4\u30c6\u30ec\u30fc\u30bf",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8",children:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"html!"}),"\u30de\u30af\u30ed\u306f\u5e38\u306b\u30eb\u30fc\u30c8\u30ce\u30fc\u30c9\u304c 1 \u3064\u3067\u3042\u308b\u3053\u3068\u3092\u8981\u6c42\u3057\u307e\u3059\u3002\r\n\u3053\u306e\u5236\u9650\u306e\u305f\u3081\u306b\u3001\u7a7a\u306e\u30bf\u30b0\u3092\u4f7f\u3063\u3066\u5185\u5bb9\u3092\u30e9\u30c3\u30d7\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"html! {\r\n    <>\r\n        <div></div>\r\n        <p></p>\r\n    </>\r\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"/* error: only one root html element allowed */\r\n\r\nhtml! {\r\n    <div></div>\r\n    <p></p>\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30a4\u30c6\u30ec\u30fc\u30bf",children:"\u30a4\u30c6\u30ec\u30fc\u30bf"}),"\n",(0,s.jsx)(n.p,{children:"Yew \u306f\u30a4\u30c6\u30ec\u30fc\u30bf\u304b\u3089 HTML \u3092\u30d3\u30eb\u30c9\u3059\u308b\u306e\u306b 2 \u3064\u306e\u65b9\u6cd5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'html! {\r\n    <ul class="item-list">\r\n        { self.props.items.iter().map(renderItem).collect::<Html>() }\r\n    </ul>\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'html! {\r\n    <ul class="item-list">\r\n        { for self.props.items.iter().map(renderItem) }\r\n    </ul>\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(6540);const r={},l=s.createContext(r);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);