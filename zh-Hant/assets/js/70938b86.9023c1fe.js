"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1942],{8980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var c=n(4848),i=n(8453);const s={title:"\u4e0d\u53ef\u8b8a\u578b\u5225",description:"Yew \u7684\u4e0d\u53ef\u8b8a\u8cc7\u6599\u7d50\u69cb"},o=void 0,r={id:"advanced-topics/immutable",title:"\u4e0d\u53ef\u8b8a\u578b\u5225",description:"Yew \u7684\u4e0d\u53ef\u8b8a\u8cc7\u6599\u7d50\u69cb",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/advanced-topics/immutable.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/immutable",permalink:"/zh-Hant/docs/next/advanced-topics/immutable",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/immutable.mdx",tags:[],version:"current",frontMatter:{title:"\u4e0d\u53ef\u8b8a\u578b\u5225",description:"Yew \u7684\u4e0d\u53ef\u8b8a\u8cc7\u6599\u7d50\u69cb"},sidebar:"docs",previous:{title:"\u670d\u52d9\u7aef\u6e32\u67d3",permalink:"/zh-Hant/docs/next/advanced-topics/server-side-rendering"},next:{title:"More",permalink:"/zh-Hant/docs/next/category/more"}},d={},l=[{value:"\u4ec0\u9ebc\u662f\u4e0d\u53ef\u8b8a\u578b\u5225\uff1f",id:"\u4ec0\u9ebc\u662f\u4e0d\u53ef\u8b8a\u578b\u5225",level:2},{value:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u4e0d\u53ef\u8b8a\u578b\u5225\uff1f",id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u4e0d\u53ef\u8b8a\u578b\u5225",level:2},{value:"\u9032\u4e00\u6b65\u95b1\u8b80",id:"\u9032\u4e00\u6b65\u95b1\u8b80",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"\u4ec0\u9ebc\u662f\u4e0d\u53ef\u8b8a\u578b\u5225",children:"\u4ec0\u9ebc\u662f\u4e0d\u53ef\u8b8a\u578b\u5225\uff1f"}),"\n",(0,c.jsx)(t.p,{children:"\u9019\u4e9b\u985e\u578b\u662f\u60a8\u53ef\u4ee5\u5be6\u4f8b\u5316\u4f46\u6c38\u9060\u4e0d\u6703\u66f4\u6539\u503c\u7684\u985e\u578b\u3002\u70ba\u4e86\u66f4\u65b0\u503c\uff0c\u60a8\u5fc5\u9808\u5be6\u4f8b\u5316\u4e00\u500b\u65b0\u503c\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u4e0d\u53ef\u8b8a\u578b\u5225",children:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u4e0d\u53ef\u8b8a\u578b\u5225\uff1f"}),"\n",(0,c.jsxs)(t.p,{children:["\u8207 React \u4e00\u6a23\uff0c\u5c6c\u6027\u662f\u5f9e\u7956\u5148\u50b3\u64ad\u5230\u5b50\u4ee3\u7684\u3002\u9019\u610f\u5473\u8457\u5c6c\u6027\u5728\u6bcf\u500b\u5143\u4ef6\u66f4\u65b0\u6642\u5fc5\u9808\u5b58\u5728\u3002\u9019\u5c31\u662f\u70ba\u4ec0\u9ebc\u5c6c\u6027\u61c9\u8a72\u2014\u2014\u7406\u60f3\u60c5\u6cc1\u4e0b\u2014\u2014\u5f88\u5bb9\u6613\u514b\u9686\u3002\u70ba\u4e86\u5be6\u73fe\u9019\u4e00\u9ede\uff0c\u6211\u5011\u901a\u5e38\u5c07\u4e8b\u7269\u5305\u88dd\u5728 ",(0,c.jsx)(t.code,{children:"Rc"})," \u4e2d\u3002"]}),"\n",(0,c.jsx)(t.p,{children:"\u4e0d\u53ef\u8b8a\u985e\u578b\u975e\u5e38\u9069\u5408\u4fdd\u5b58\u5c6c\u6027\u7684\u503c\uff0c\u56e0\u70ba\u5b83\u5011\u53ef\u4ee5\u5728\u5f9e\u7d44\u4ef6\u50b3\u905e\u5230\u7d44\u4ef6\u6642\u4ee5\u5f88\u4f4e\u7684\u6210\u672c\u514b\u9686\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"\u9032\u4e00\u6b65\u95b1\u8b80",children:"\u9032\u4e00\u6b65\u95b1\u8b80"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/immutable",children:"\u4e0d\u53ef\u8b8a\u7bc4\u4f8b"})}),"\n",(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.a,{href:"https://docs.rs/implicit-clone/",children:["Crate ",(0,c.jsx)(t.code,{children:"implicit-clone"})]})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var c=n(6540);const i={},s=c.createContext(i);function o(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);