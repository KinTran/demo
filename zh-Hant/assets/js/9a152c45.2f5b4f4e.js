"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1799],{681:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(4848),t=s(8453);const i={description:"\u51fd\u5f0f\u5eab\u53ef\u4ee5\u5e6b\u52a9 yew \u7684\u958b\u767c\u8005"},c="\u984d\u5916\u7684\u51fd\u5f0f\u5eab",o={id:"more/external-libs",title:"\u984d\u5916\u7684\u51fd\u5f0f\u5eab",description:"\u51fd\u5f0f\u5eab\u53ef\u4ee5\u5e6b\u52a9 yew \u7684\u958b\u767c\u8005",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.18.0/more/external-libs.mdx",sourceDirName:"more",slug:"/more/external-libs",permalink:"/zh-Hant/docs/0.18.0/more/external-libs",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/more/external-libs.mdx",tags:[],version:"0.18.0",frontMatter:{description:"\u51fd\u5f0f\u5eab\u53ef\u4ee5\u5e6b\u52a9 yew \u7684\u958b\u767c\u8005"},sidebar:"docs",previous:{title:"CSS",permalink:"/zh-Hant/docs/0.18.0/more/css"},next:{title:"\u6e2c\u8a66",permalink:"/zh-Hant/docs/0.18.0/more/testing"}},l={},d=[{value:"Yewtil",id:"yewtil",level:3},{value:"\u5c0b\u627e",id:"\u5c0b\u627e",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u984d\u5916\u7684\u51fd\u5f0f\u5eab",children:"\u984d\u5916\u7684\u51fd\u5f0f\u5eab"})}),"\n",(0,r.jsx)(n.h3,{id:"yewtil",children:"Yewtil"}),"\n",(0,r.jsx)(n.p,{children:"Yewtil \u662f\u4e00\u500b\u5e38\u898b\u7684\u5de5\u5177\u61f6\u4eba\u5305\uff0c\u53ef\u4ee5\u5e6b\u52a9\u4f60\u7de8\u5beb Yew \u7684\u7a0b\u5f0f\u78bc\uff0c\u88e1\u9762\u5305\u542b\u4e86\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NeqAssign - \u5982\u524d\u9762\u7684\u7ae0\u7bc0\u6240\u8ff0\uff0c\u9019\u662f\u4e00\u500b\u6e1b\u5c11\u56e0\u70ba\u5c6c\u6027\u6539\u8b8a\u800c\u91cd\u65b0\u6e32\u67d3\u7684\u6700\u4f73\u65b9\u6cd5\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["PureComponents - \u4e0d\u6703\u66f4\u65b0\u81ea\u5df1\u72c0\u614b\u7684\u5143\u4ef6\u3002\u5728\u4ed6\u7684\u751f\u547d\u5468\u671f\u5e95\u4e0b\u4f7f\u7528 NeqAssign\uff0c\u53ef\u4ee5\u8b93\u4ed6\u5c31\u50cf\u662f memoized \u7684\u51fd\u5f0f\u3002\u4ed6\u53ef\u4ee5\u5beb\u5728 ",(0,r.jsx)(n.code,{children:"html!"})," \u5de8\u96c6\u4e2d\u770b\u8d77\u4f86\u5c31\u50cf\u662f\u4e00\u822c\u7684\u5143\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Lrc - linked list \u53c3\u8003\u8a08\u6578\u7684\u667a\u6167\u6307\u91dd\u51fd\u5f0f\uff0c\u8ddf ",(0,r.jsx)(n.code,{children:"Rc"})," \u5dee\u4e0d\u591a\uff0c\u4f46\u662f\u4ed6\u53ef\u4ee5\u8b93\u65b0\u7684\u8cc7\u6599\u66f4\u65b0\u4ed6\u7684\u6a21\u578b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Mrc/Irc - \u53ef\u8b8a\u8207\u4e0d\u53ef\u8b8a\u7684\u53c3\u8003\u8a08\u6578\u667a\u6167\u6307\u91dd\uff0c\u8ddf Rc \u5dee\u4e0d\u591a\u3002\u4f46\u662f\u56e0\u70ba ",(0,r.jsx)(n.code,{children:"Mrc"})," \u5be6\u4f5c\u4e86 ",(0,r.jsx)(n.code,{children:"DerefMut"})," \u8207 ",(0,r.jsx)(n.code,{children:"BorrowMut"}),"\uff0c\u6240\u4ee5\u8b93\u4ed6\u5728 Yew \u4e2d\u66f4\u4fbf\u65bc\u4f7f\u7528\u3002 \u9019\u8b93 ",(0,r.jsx)(n.code,{children:"Mrc"})," \u53ef\u4ee5\u8207 ",(0,r.jsx)(n.code,{children:"NeqAssign"})," \u4e00\u8d77\u4f7f\u7528\u3002 ",(0,r.jsx)(n.code,{children:"Irc"})," \u5728\u8cc7\u6599\u88e1\u5c31\u50cf\u662f\u4e0d\u53ef\u8b8a\u5f97 view\uff0c\u4ed6\u53ef\u4ee5\u7ba1\u7406\u53ea\u7528\u4f86\u986f\u793a\u7528\u7684\u8cc7\u6599\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["History - \u4e00\u500b\u6b77\u53f2\u8ffd\u8e64\u5668\uff0c\u4ed6\u7528 ",(0,r.jsx)(n.code,{children:"VecDeque"})," \u7ba1\u7406\u5148\u524d\u7684\u503c\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"Futures - \u652f\u63f4\u904b\u884c futures\uff0c\u4ed6\u6703\u9001\u8a0a\u606f\u7d66\u5143\u4ef6\u7684\u66f4\u65b0\u8ff4\u5708\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Fetch - \u8655\u7406\u4f7f\u7528 web_sys \u8207\u524d\u9762\u6240\u63d0\u7684 futures \u7684\u529f\u80fd\u6240\u767c\u51fa\u7684\u8acb\u6c42\uff0c\u7684\u62bd\u8c61\u5c64\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5c0b\u627e",children:"\u5c0b\u627e"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u9700\u8981\u51fd\u5f0f\u5eab\u7684\u793e\u7fa4\u751f\u614b\uff0c\u76ee\u524d\u9084\u6c92\u6709\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Boostrap/MaterialUI/\u4efb\u4f55 css \u6846\u67b6\u7684\u5143\u4ef6\u5c01\u88dd\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);