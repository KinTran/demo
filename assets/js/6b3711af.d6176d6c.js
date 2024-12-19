"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9210],{3524:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var o=t(4848),r=t(8453);const c={title:"Children"},i=void 0,s={id:"concepts/function-components/children",title:"Children",description:"Children is a special prop type that allows you to receive nested Html that is provided like html child elements.",source:"@site/docs/concepts/function-components/children.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/children",permalink:"/docs/next/concepts/function-components/children",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/function-components/children.mdx",tags:[],version:"current",frontMatter:{title:"Children"},sidebar:"docs",previous:{title:"Callbacks",permalink:"/docs/next/concepts/function-components/callbacks"},next:{title:"Pure Components",permalink:"/docs/next/concepts/function-components/pure-components"}},l={},p=[];function d(n){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Children"})," is a special prop type that allows you to receive nested ",(0,o.jsx)(e.code,{children:"Html"})," that is provided like html child elements."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties};\r\n\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! {\r\n        // highlight-start\r\n        <HelloWorld>\r\n            <span>{"Hey what is up ;)"}</span>\r\n            <h1>{"THE SKY"}</h1>\r\n        </HelloWorld>\r\n        // highlight-end\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    // highlight-next-line\r\n    pub children: Html, // the field name `children` is important!\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    html! {\r\n        <div class="very-stylized-container">\r\n    // highlight-next-line\r\n            { props.children.clone() } // you can forward children like this\r\n        </div>\r\n    }\r\n}\n'})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var o=t(6540);const r={},c=o.createContext(r);function i(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);