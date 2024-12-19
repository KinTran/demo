"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3915],{7803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(4848),r=n(8453);const s={title:"Immutable Types",description:"Immutable data structures for Yew"},i=void 0,o={id:"advanced-topics/immutable",title:"Immutable Types",description:"Immutable data structures for Yew",source:"@site/versioned_docs/version-0.20/advanced-topics/immutable.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/immutable",permalink:"/demo/ja/docs/0.20/advanced-topics/immutable",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/advanced-topics/immutable.mdx",tags:[],version:"0.20",frontMatter:{title:"Immutable Types",description:"Immutable data structures for Yew"},sidebar:"docs",previous:{title:"Server-side Rendering",permalink:"/demo/ja/docs/0.20/advanced-topics/server-side-rendering"},next:{title:"More",permalink:"/demo/ja/docs/0.20/category/more"}},c={},l=[{value:"What are immutable types?",id:"what-are-immutable-types",level:2},{value:"Why using immutable types?",id:"why-using-immutable-types",level:2},{value:"Further reading",id:"further-reading",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-are-immutable-types",children:"What are immutable types?"}),"\n",(0,a.jsx)(t.p,{children:"These are types that you can instantiate but never mutate the values. In order\r\nto update a value, you must instantiate a new value."}),"\n",(0,a.jsx)(t.h2,{id:"why-using-immutable-types",children:"Why using immutable types?"}),"\n",(0,a.jsxs)(t.p,{children:["Properties, like in React, are propagated from ancestors to\r\nchildren. This means that the properties must live when each component is\r\nupdated. This is why properties should \u2014ideally\u2014 be cheap to clone. In order to\r\nachieve this we usually wrap things in ",(0,a.jsx)(t.code,{children:"Rc"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Immutable types are a great fit for holding property's values because they can\r\nbe cheaply cloned when passed from component to component."}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.20.0/examples/immutable",children:"Immutable example"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsxs)(t.a,{href:"https://docs.rs/implicit-clone/",children:["Crate ",(0,a.jsx)(t.code,{children:"implicit-clone"})]})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);