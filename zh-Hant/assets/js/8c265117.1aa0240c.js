"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7858],{6384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=n(4848),r=n(8453);const l={},o="Lists",c={id:"concepts/html/lists",title:"Lists",description:"Fragments",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.21/concepts/html/lists.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/lists",permalink:"/demo/zh-Hant/docs/concepts/html/lists",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/html/lists.mdx",tags:[],version:"0.21",frontMatter:{},sidebar:"docs",previous:{title:"Fragments",permalink:"/demo/zh-Hant/docs/concepts/html/fragments"},next:{title:"Literals & Expressions",permalink:"/demo/zh-Hant/docs/concepts/html/literals-and-expressions"}},i={},a=[{value:"Fragments",id:"fragments",level:2},{value:"Iterators",id:"iterators",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"lists",children:"Lists"})}),"\n",(0,s.jsx)(t.h2,{id:"fragments",children:"Fragments"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"html!"})," \u5de8\u96c6\u88e1\u5fc5\u9808\u53ea\u6709\u4e00\u500b\u6839\u7d50\u9ede\u3002\u70ba\u4e86\u53ef\u4ee5\u7e5e\u904e\u9019\u500b\u9650\u5236\uff0c\u5c07\u5169\u500b\u4ee5\u4e0a\u7684\u7d50\u9ede\uff0c\u7528\u7a7a\u7684\u6a19\u7c64\u5305\u88f9\u8d77\u4f86\uff0c\u662f\u5408\u6cd5\u7684\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"html! {\r\n    <>\r\n        <div></div>\r\n        <p></p>\r\n    </>\r\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"/* error: only one root html element allowed */\r\n\r\nhtml! {\r\n    <div></div>\r\n    <p></p>\r\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"iterators",children:"Iterators"}),"\n",(0,s.jsx)(t.p,{children:"Yew \u652f\u63f4\u5169\u7a2e\u4e0d\u540c\u7684\u65b9\u5f0f\uff0c\u5f9e iterator \u5efa\u69cb html\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'html! {\r\n    <ul class="item-list">\r\n        { self.props.items.iter().map(renderItem).collect::<Html>() }\r\n    </ul>\r\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'html! {\r\n    <ul class="item-list">\r\n        { for self.props.items.iter().map(renderItem) }\r\n    </ul>\r\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},l=s.createContext(r);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);