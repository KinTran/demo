"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8934],{5126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(4848),o=t(8453);const s={title:"Portals",description:"Rendering into out-of-tree DOM nodes"},i=void 0,l={id:"advanced-topics/portals",title:"Portals",description:"Rendering into out-of-tree DOM nodes",source:"@site/versioned_docs/version-0.20/advanced-topics/portals.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/portals",permalink:"/zh-Hant/docs/0.20/advanced-topics/portals",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/advanced-topics/portals.mdx",tags:[],version:"0.20",frontMatter:{title:"Portals",description:"Rendering into out-of-tree DOM nodes"},sidebar:"docs",previous:{title:"\u512a\u5316\u8207\u6700\u4f73\u5be6\u4f8b",permalink:"/zh-Hant/docs/0.20/advanced-topics/optimizations"},next:{title:"Server-side Rendering",permalink:"/zh-Hant/docs/0.20/advanced-topics/server-side-rendering"}},a={},d=[{value:"What is a portal?",id:"what-is-a-portal",level:2},{value:"Usage",id:"usage",level:2},{value:"Event handling",id:"event-handling",level:2},{value:"Further reading",id:"further-reading",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"what-is-a-portal",children:"What is a portal?"}),"\n",(0,r.jsxs)(n.p,{children:["Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.\r\n",(0,r.jsx)(n.code,{children:"yew::create_portal(child, host)"})," returns a ",(0,r.jsx)(n.code,{children:"Html"})," value that renders ",(0,r.jsx)(n.code,{children:"child"})," not hierarchically under its parent component,\r\nbut as a child of the ",(0,r.jsx)(n.code,{children:"host"})," element."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Typical uses of portals can include modal dialogs and hovercards, as well as more technical applications\r\nsuch as controlling the contents of an element's\r\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot",children:(0,r.jsx)(n.code,{children:"shadowRoot"})}),", appending\r\nstylesheets to the surrounding document's ",(0,r.jsx)(n.code,{children:"<head>"})," and collecting referenced elements inside a\r\ncentral ",(0,r.jsx)(n.code,{children:"<defs>"})," element of an ",(0,r.jsx)(n.code,{children:"<svg>"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"yew::create_portal"})," is a low-level building block. Libraries should use it to implement\r\nhigher-level APIs which can then be consumed by applications. For example, here is a\r\nsimple modal dialogue that renders its ",(0,r.jsx)(n.code,{children:"children"})," into an element outside ",(0,r.jsx)(n.code,{children:"yew"}),"'s control,\r\nidentified by the ",(0,r.jsx)(n.code,{children:'id="modal_host"'}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ModalProps {\r\n    #[prop_or_default]\r\n    pub children: Children,\r\n}\r\n\r\n#[function_component]\r\nfn Modal(props: &ModalProps) -> Html {\r\n    let modal_host = gloo::utils::document()\r\n        .get_element_by_id("modal_host")\r\n        .expect("Expected to find a #modal_host element");\r\n\r\n    create_portal(\r\n        html!{ {for props.children.iter()} },\r\n        modal_host.into(),\r\n    )\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"event-handling",children:"Event handling"}),"\n",(0,r.jsx)(n.p,{children:"Events emitted on elements inside portals follow the virtual DOM when bubbling up. That is,\r\nif a portal is rendered as the child of an element, then an event listener on that element\r\nwill catch events dispatched from inside the portal, even if the portal renders its contents\r\nin an unrelated location in the actual DOM."}),"\n",(0,r.jsx)(n.p,{children:"This allows developers to be oblivious of whether a component they consume, is implemented with\r\nor without portals. Events fired on its children will bubble up regardless."}),"\n",(0,r.jsxs)(n.p,{children:["A known issue is that events from portals into ",(0,r.jsx)(n.strong,{children:"closed"})," shadow roots will be dispatched twice,\r\nonce targeting the element inside the shadow root and once targeting the host element itself. Keep\r\nin mind that ",(0,r.jsx)(n.strong,{children:"open"})," shadow roots work fine. If this impacts you, feel free to open a bug report\r\nabout it."]}),"\n",(0,r.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.20.0/examples/portals",children:"Portals example"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);