"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5566],{1856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var s=n(4848),c=n(8453);const d={title:"State"},o=void 0,r={id:"concepts/function-components/state",title:"State",description:"General view of how to store state",source:"@site/versioned_docs/version-0.20/concepts/function-components/state.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/state",permalink:"/demo/ja/docs/0.20/concepts/function-components/state",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/function-components/state.mdx",tags:[],version:"0.20",frontMatter:{title:"State"},sidebar:"docs",previous:{title:"Node Refs",permalink:"/demo/ja/docs/0.20/concepts/function-components/node-refs"},next:{title:"Communication between components",permalink:"/demo/ja/docs/0.20/concepts/function-components/communication"}},i={},l=[{value:"General view of how to store state",id:"general-view-of-how-to-store-state",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"general-view-of-how-to-store-state",children:"General view of how to store state"}),"\n",(0,s.jsx)(t.p,{children:"This table can be used as a guide when deciding what state storing type fits best for your use case:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Hook"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Rerender when?"}),(0,s.jsx)(t.th,{children:"Scope"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_state.html",children:"use_state"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{children:"got set"}),(0,s.jsx)(t.td,{children:"component instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_state_eq.html",children:"use_state_eq"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T: PartialEq"})}),(0,s.jsx)(t.td,{children:"got set with diff. value"}),(0,s.jsx)(t.td,{children:"component instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_reducer.html",children:"use_reducer"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T: Reducible"})}),(0,s.jsx)(t.td,{children:"got reduced"}),(0,s.jsx)(t.td,{children:"component instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_reducer_eq.html",children:"use_reducer_eq"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T: Reducible + PartialEq"})}),(0,s.jsx)(t.td,{children:"got reduced with diff. value"}),(0,s.jsx)(t.td,{children:"component instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_memo.html",children:"use_memo"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Deps -> T"})}),(0,s.jsx)(t.td,{children:"dependencies changed"}),(0,s.jsx)(t.td,{children:"component instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_callback.html",children:"use_callback"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Deps -> Callback<E>"})}),(0,s.jsx)(t.td,{children:"dependencies changed"}),(0,s.jsx)(t.td,{children:"component instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_mut_ref.html",children:"use_mut_ref"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"component instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"a static global variable"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"global, used by all"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const c={},d=s.createContext(c);function o(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);