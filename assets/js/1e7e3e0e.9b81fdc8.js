"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7608],{8668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(4848),i=t(8453);const r={title:"External libraries",description:"Libraries that can help with Yew development"},o=void 0,l={id:"more/external-libs",title:"External libraries",description:"Libraries that can help with Yew development",source:"@site/versioned_docs/version-0.18.0/more/external-libs.mdx",sourceDirName:"more",slug:"/more/external-libs",permalink:"/docs/0.18.0/more/external-libs",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/more/external-libs.mdx",tags:[],version:"0.18.0",frontMatter:{title:"External libraries",description:"Libraries that can help with Yew development"},sidebar:"docs",previous:{title:"CSS",permalink:"/docs/0.18.0/more/css"},next:{title:"Testing apps",permalink:"/docs/0.18.0/more/testing"}},c={},a=[{value:"Yewtil",id:"yewtil",level:3},{value:"Looking For",id:"looking-for",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"yewtil",children:"Yewtil"}),"\n",(0,s.jsx)(n.p,{children:"Yewtil is a collection of common utilities that help you build applications using Yew. It includes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["NeqAssign - This is described in more detail in the section on\r\n",(0,s.jsx)(n.a,{href:"/docs/0.18.0/advanced-topics/optimizations",children:"optimizations and best practices"})," and ensures that identical\r\nsets of props don't cause a component to re-render."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["PureComponents - Components that don't update any of their state. Using NeqAssign under the hood, they act as memoized\r\nfunctions that are called from inside the ",(0,s.jsx)(n.code,{children:"html!"})," macro like normal components are."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Lrc - linked list reference counted smart pointer functions like ",(0,s.jsx)(n.code,{children:"Rc"})," does, but allows for novel data update patterns."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Mrc/Irc - Mutable/Immutable reference counted smart pointers that function like ",(0,s.jsx)(n.code,{children:"Rc"})," but are more ergonomic to use"]}),"\n",(0,s.jsxs)(n.p,{children:["within Yew, because they implement ",(0,s.jsx)(n.code,{children:"DerefMut"})," and ",(0,s.jsx)(n.code,{children:"BorrowMut"}),"for ",(0,s.jsx)(n.code,{children:"Mrc"}),". This allows ",(0,s.jsx)(n.code,{children:"Mrc"})," to be used with ",(0,s.jsx)(n.code,{children:"NeqAssign"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Irc"})," acts as an immutable view of the data, which makes this ideal for holding data used in display-only tasks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["History - A history tracking wrapper that uses a ",(0,s.jsx)(n.code,{children:"VecDeque"})," to hold on to previous values that it\r\nhas represented."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Futures - Support for running futures that send messages to component update loops."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fetch - A wrapper around ",(0,s.jsx)(n.code,{children:"web_sys"})," to make HTTP requests."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"looking-for",children:"Looking For"}),"\n",(0,s.jsx)(n.p,{children:"Libraries that the ecosystem needs, but doesn't have yet."}),"\n",(0,s.jsx)(n.p,{children:"Bootstrap/MaterialUi/arbitrary css framework component wrappers."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);