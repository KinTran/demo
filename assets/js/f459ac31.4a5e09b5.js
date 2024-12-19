"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1608],{4590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(4848),a=n(8453);const r={title:"Immutable Types",description:"Immutable data structures for Yew"},i=void 0,o={id:"advanced-topics/immutable",title:"Immutable Types",description:"Immutable data structures for Yew",source:"@site/versioned_docs/version-0.21/advanced-topics/immutable.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/immutable",permalink:"/demo/docs/advanced-topics/immutable",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/advanced-topics/immutable.mdx",tags:[],version:"0.21",frontMatter:{title:"Immutable Types",description:"Immutable data structures for Yew"},sidebar:"docs",previous:{title:"Server-side Rendering",permalink:"/demo/docs/advanced-topics/server-side-rendering"},next:{title:"More",permalink:"/demo/docs/category/more"}},c={},l=[{value:"What are immutable types?",id:"what-are-immutable-types",level:2},{value:"Why using immutable types?",id:"why-using-immutable-types",level:2},{value:"Further reading",id:"further-reading",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"what-are-immutable-types",children:"What are immutable types?"}),"\n",(0,s.jsx)(t.p,{children:"These are types that you can instantiate but never mutate the values. In order\r\nto update a value, you must instantiate a new value."}),"\n",(0,s.jsx)(t.h2,{id:"why-using-immutable-types",children:"Why using immutable types?"}),"\n",(0,s.jsxs)(t.p,{children:["Properties, like in React, are propagated from ancestors to\r\nchildren. This means that the properties must live when each component is\r\nupdated. This is why properties should \u2014ideally\u2014 be cheap to clone. To\r\nachieve this we usually wrap things in ",(0,s.jsx)(t.code,{children:"Rc"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Immutable types are a great fit for holding property's values because they can\r\nbe cheaply cloned when passed from component to component."}),"\n",(0,s.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/immutable",children:"Immutable example"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://docs.rs/implicit-clone/",children:["Crate ",(0,s.jsx)(t.code,{children:"implicit-clone"})]})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);