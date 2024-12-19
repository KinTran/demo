"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9701],{9748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var r=t(4848),s=t(8453);const o={title:"Refs",description:"Out-of-band DOM access"},c=void 0,d={id:"advanced-topics/struct-components/refs",title:"Refs",description:"Out-of-band DOM access",source:"@site/docs/advanced-topics/struct-components/refs.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/refs",permalink:"/docs/next/advanced-topics/struct-components/refs",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/refs.mdx",tags:[],version:"current",frontMatter:{title:"Refs",description:"Out-of-band DOM access"},sidebar:"docs",previous:{title:"Properties",permalink:"/docs/next/advanced-topics/struct-components/properties"},next:{title:"Children",permalink:"/docs/next/advanced-topics/children"}},i={},a=[{value:"Relevant examples",id:"relevant-examples",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ref"})," keyword can be used inside of any HTML element or component to get the DOM ",(0,r.jsx)(n.code,{children:"Element"})," that\r\nthe item is attached to. This can be used to make changes to the DOM outside of the ",(0,r.jsx)(n.code,{children:"view"})," lifecycle\r\nmethod."]}),"\n",(0,r.jsxs)(n.p,{children:["This is useful for getting ahold of canvas elements, or scrolling to different sections of a page.\r\nFor example, using a ",(0,r.jsx)(n.code,{children:"NodeRef"})," in a component's ",(0,r.jsx)(n.code,{children:"rendered"})," method allows you to make draw calls to\r\na canvas element after it has been rendered from ",(0,r.jsx)(n.code,{children:"view"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The syntax is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use web_sys::Element;\r\nuse yew::{html, Component, Context, Html, NodeRef};\r\n\r\nstruct Comp {\r\n    node_ref: NodeRef,\r\n}\r\n\r\nimpl Component for Comp {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            // highlight-next-line\r\n            node_ref: NodeRef::default(),\r\n        }\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            // highlight-next-line\r\n            <div ref={self.node_ref.clone()}></div>\r\n        }\r\n    }\r\n\r\n    fn rendered(&mut self, _ctx: &Context<Self>, _first_render: bool) {\r\n        // highlight-start\r\n        let has_attributes = self.node_ref\r\n            .cast::<Element>()\r\n            .unwrap()\r\n            .has_attributes();\r\n        // highlight-end\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/node_refs",children:"Node Refs"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(6540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);