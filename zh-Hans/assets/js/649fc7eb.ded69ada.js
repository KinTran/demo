"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6947],{4963:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=t(4848),r=t(8453);const c={title:"Children"},s=void 0,i={id:"concepts/function-components/children",title:"Children",description:"Children is a special prop type that allows you to receive nested Html that is provided like html child elements.",source:"@site/versioned_docs/version-0.21/concepts/function-components/children.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/children",permalink:"/demo/zh-Hans/docs/concepts/function-components/children",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/function-components/children.mdx",tags:[],version:"0.21",frontMatter:{title:"Children"},sidebar:"docs",previous:{title:"Callbacks",permalink:"/demo/zh-Hans/docs/concepts/function-components/callbacks"},next:{title:"Pure Components",permalink:"/demo/zh-Hans/docs/concepts/function-components/pure-components"}},l={},d=[];function p(n){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Children"})," is a special prop type that allows you to receive nested ",(0,o.jsx)(e.code,{children:"Html"})," that is provided like html child elements."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties};\r\n\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! {\r\n        // highlight-start\r\n        <HelloWorld>\r\n            <span>{"Hey what is up ;)"}</span>\r\n            <h1>{"THE SKY"}</h1>\r\n        </HelloWorld>\r\n        // highlight-end\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    // highlight-next-line\r\n    pub children: Html, // the field name `children` is important!\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    html! {\r\n        <div class="very-stylized-container">\r\n    // highlight-next-line\r\n            { props.children.clone() } // you can forward children like this\r\n        </div>\r\n    }\r\n}\n'})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>i});var o=t(6540);const r={},c=o.createContext(r);function s(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);