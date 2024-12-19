"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8602],{8050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var s=n(4848),c=n(8453);const d={title:"\u72b6\u6001"},r=void 0,i={id:"concepts/function-components/state",title:"\u72b6\u6001",description:"\u5982\u4f55\u5b58\u50a8\u72b6\u6001\u7684\u4e00\u822c\u89c6\u56fe",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/function-components/state.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/state",permalink:"/demo/zh-Hans/docs/next/concepts/function-components/state",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/function-components/state.mdx",tags:[],version:"current",frontMatter:{title:"\u72b6\u6001"},sidebar:"docs",previous:{title:"\u8282\u70b9\u5f15\u7528",permalink:"/demo/zh-Hans/docs/next/concepts/function-components/node-refs"},next:{title:"\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1",permalink:"/demo/zh-Hans/docs/next/concepts/function-components/communication"}},l={},o=[{value:"\u5982\u4f55\u5b58\u50a8\u72b6\u6001\u7684\u4e00\u822c\u89c6\u56fe",id:"\u5982\u4f55\u5b58\u50a8\u72b6\u6001\u7684\u4e00\u822c\u89c6\u56fe",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u5982\u4f55\u5b58\u50a8\u72b6\u6001\u7684\u4e00\u822c\u89c6\u56fe",children:"\u5982\u4f55\u5b58\u50a8\u72b6\u6001\u7684\u4e00\u822c\u89c6\u56fe"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u4e2a\u8868\u683c\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6307\u5357\uff0c\u5e2e\u52a9\u60a8\u51b3\u5b9a\u54ea\u79cd\u72b6\u6001\u5b58\u50a8\u7c7b\u578b\u6700\u9002\u5408\u60a8\u7684\u7528\u4f8b\uff1a"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Hook"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u4f55\u65f6\u6e32\u67d3?"}),(0,s.jsx)(t.th,{children:"\u4f5c\u7528\u57df"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_state.html",children:"use_state"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{children:"\u88ab\u8bbe\u7f6e\u4e00\u4e2a\u503c"}),(0,s.jsx)(t.td,{children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u4f8b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_state_eq.html",children:"use_state_eq"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T: PartialEq"})}),(0,s.jsx)(t.td,{children:"\u88ab\u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u540c\u7684\u503c"}),(0,s.jsx)(t.td,{children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u4f8b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_reducer.html",children:"use_reducer"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T: Reducible"})}),(0,s.jsx)(t.td,{children:"\u88ab\u8c03\u7528\u5f52\u7eb3"}),(0,s.jsx)(t.td,{children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u4f8b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_reducer_eq.html",children:"use_reducer_eq"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T: Reducible + PartialEq"})}),(0,s.jsx)(t.td,{children:"\u88ab\u8c03\u7528\u5f52\u7eb3\uff0c\u5f52\u7eb3\u540e\u7684\u503c\u4e0e\u4e4b\u524d\u4e0d\u540c"}),(0,s.jsx)(t.td,{children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u4f8b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_memo.html",children:"use_memo"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Deps -> T"})}),(0,s.jsx)(t.td,{children:"\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316"}),(0,s.jsx)(t.td,{children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u4f8b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_callback.html",children:"use_callback"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Deps -> Callback<E>"})}),(0,s.jsx)(t.td,{children:"\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316"}),(0,s.jsx)(t.td,{children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u4f8b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_mut_ref.html",children:"use_mut_ref"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u4f8b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u5168\u5c40\u9759\u6001\u5e38\u91cf"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"\u5168\u5c40\uff0c\u4efb\u4f55\u4f4d\u7f6e\u90fd\u53ef\u4ee5\u4f7f\u7528"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(6540);const c={},d=s.createContext(c);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);