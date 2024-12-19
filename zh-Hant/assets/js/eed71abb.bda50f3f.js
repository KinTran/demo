"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[780],{8700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(4848),r=n(8453);const s={title:"Portals",description:"Rendering into out-of-tree DOM nodes"},i=void 0,a={id:"advanced-topics/portals",title:"Portals",description:"Rendering into out-of-tree DOM nodes",source:"@site/versioned_docs/version-0.19.0/advanced-topics/portals.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/portals",permalink:"/zh-Hant/docs/0.19.0/advanced-topics/portals",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/advanced-topics/portals.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Portals",description:"Rendering into out-of-tree DOM nodes"},sidebar:"docs",previous:{title:"Optimizations",permalink:"/zh-Hant/docs/0.19.0/advanced-topics/optimizations"},next:{title:"Debugging",permalink:"/zh-Hant/docs/0.19.0/more/debugging"}},d={},l=[{value:"How to think about portals?",id:"how-to-think-about-portals",level:2},{value:"Usage",id:"usage",level:2},{value:"Further reading",id:"further-reading",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"how-to-think-about-portals",children:"How to think about portals?"}),"\n",(0,o.jsxs)(t.p,{children:["Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.\r\n",(0,o.jsx)(t.code,{children:"yew::create_portal(child, host)"})," returns a ",(0,o.jsx)(t.code,{children:"Html"})," value that renders ",(0,o.jsx)(t.code,{children:"child"})," not hierarchically under its parent component,\r\nbut as a child of the ",(0,o.jsx)(t.code,{children:"host"})," element."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Typical uses of portals can include modal dialogs and hovercards, as well as more technical applications such as controlling the contents of an element's ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot",children:(0,o.jsx)(t.code,{children:"shadowRoot"})}),", appending stylesheets to the surrounding document's ",(0,o.jsx)(t.code,{children:"<head>"})," and collecting referenced elements inside a central ",(0,o.jsx)(t.code,{children:"<defs>"})," element of an ",(0,o.jsx)(t.code,{children:"<svg>"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"yew::create_portal"})," is a rather low-level building block, on which other components should be built that provide the interface for your specific use case. As an example, here is a simple modal dialogue that renders its ",(0,o.jsx)(t.code,{children:"children"})," into an element outside ",(0,o.jsx)(t.code,{children:"yew"}),"'s control, identified by the ",(0,o.jsx)(t.code,{children:'id="modal_host"'}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:'use yew::{html, create_portal, function_component, Children, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ModalProps {\r\n    #[prop_or_default]\r\n    pub children: Children,\r\n}\r\n\r\n#[function_component(Modal)]\r\nfn modal(props: &ModalProps) -> Html {\r\n    let modal_host = gloo_utils::document()\r\n        .get_element_by_id("modal_host")\r\n        .expect("a #modal_host element");\r\n\r\n    create_portal(\r\n        html!{ {for props.children.iter()} },\r\n        modal_host.into(),\r\n    )\r\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.19.3/examples/portals",children:"Portals example"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);