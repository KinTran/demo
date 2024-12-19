"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3076],{5296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(4848),s=t(8453);const r={title:"Introduction",description:"Components in Yew"},i=void 0,c={id:"advanced-topics/struct-components/introduction",title:"Introduction",description:"Components in Yew",source:"@site/versioned_docs/version-0.20/advanced-topics/struct-components/introduction.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/introduction",permalink:"/demo/zh-Hant/docs/0.20/advanced-topics/struct-components/introduction",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/advanced-topics/struct-components/introduction.mdx",tags:[],version:"0.20",frontMatter:{title:"Introduction",description:"Components in Yew"},sidebar:"docs",previous:{title:"\u5167\u90e8\u5e95\u5c64\u7684 library",permalink:"/demo/zh-Hant/docs/0.20/advanced-topics/how-it-works"},next:{title:"Higher Order Components",permalink:"/demo/zh-Hant/docs/0.20/advanced-topics/struct-components/hoc"}},a={},d=[{value:"What are Components?",id:"what-are-components",level:2},{value:"Writing Component&#39;s markup",id:"writing-components-markup",level:2},{value:"Passing data to a component",id:"passing-data-to-a-component",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"what-are-components",children:"What are Components?"}),"\n",(0,o.jsxs)(n.p,{children:["Components are the building blocks of Yew. They manage their own state and can render themselves to the DOM.\r\nComponents are created by implementing the ",(0,o.jsx)(n.code,{children:"Component"})," trait for a type."]}),"\n",(0,o.jsx)(n.h2,{id:"writing-components-markup",children:"Writing Component's markup"}),"\n",(0,o.jsxs)(n.p,{children:["Yew uses Virtual DOM to render elements to the DOM. The Virtual DOM tree can be constructed by using the\r\n",(0,o.jsx)(n.code,{children:"html!"})," macro. ",(0,o.jsx)(n.code,{children:"html!"})," uses syntax which is similar to HTML but is not exactly the same. The rules are also\r\nmuch stricter. It also provides super-powers like conditional rendering and rendering of lists using iterators."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.a,{href:"/demo/zh-Hant/docs/0.20/concepts/html",children:["Learn more about the ",(0,o.jsx)(n.code,{children:"html!"})," macro, how it's used and its syntax"]})})}),"\n",(0,o.jsx)(n.h2,{id:"passing-data-to-a-component",children:"Passing data to a component"}),"\n",(0,o.jsxs)(n.p,{children:["Yew components use ",(0,o.jsx)(n.em,{children:"props"})," to communicate between parent and children. A parent component may pass any data as props to\r\nits children. Props are similar to HTML attributes but any Rust type can be passed as props."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/demo/zh-Hant/docs/0.20/advanced-topics/struct-components/properties",children:"Learn more about the props"})})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For other than parent/child communication, use ",(0,o.jsx)(n.a,{href:"/demo/zh-Hant/docs/0.20/concepts/contexts",children:"contexts"})]})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);