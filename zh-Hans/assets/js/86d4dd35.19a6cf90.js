"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1597],{130:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=o(4848),s=o(8453);const c={title:"\u7eaf\u7ec4\u4ef6"},r=void 0,i={id:"concepts/function-components/pure-components",title:"\u7eaf\u7ec4\u4ef6",description:"\u6bcf\u4e2a\u51fd\u6570\u7ec4\u4ef6\u90fd\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a\u5c5e\u6027\u5bf9\u8c61\u5e76\u8fd4\u56de\u4e00\u4e2a Html \u5bf9\u8c61\u3002\u7eaf\u51fd\u6570\u662f\u6307\u5728\u7ed9\u5b9a\u76f8\u540c\u8f93\u5165\u65f6\uff0c\u603b\u662f\u8fd4\u56de\u76f8\u540c\u8f93\u51fa\u7684\u51fd\u6570\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/function-components/pure-components.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/pure-components",permalink:"/zh-Hans/docs/next/concepts/function-components/pure-components",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/function-components/pure-components.mdx",tags:[],version:"current",frontMatter:{title:"\u7eaf\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u5b50\u5143\u7d20 (Children)",permalink:"/zh-Hans/docs/next/concepts/function-components/children"},next:{title:"Hooks",permalink:"/zh-Hans/docs/next/concepts/function-components/hooks"}},p={},l=[{value:"\u975e\u7eaf\u7ec4\u4ef6",id:"\u975e\u7eaf\u7ec4\u4ef6",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u6bcf\u4e2a\u51fd\u6570\u7ec4\u4ef6\u90fd\u662f\u4e00\u4e2a",(0,t.jsx)(e.a,{href:"https://zh.wikipedia.org/wiki/%E7%BA%AF%E5%87%BD%E6%95%B0",children:"\u7eaf"}),"\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a\u5c5e\u6027\u5bf9\u8c61\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"Html"})," \u5bf9\u8c61\u3002\u7eaf\u51fd\u6570\u662f\u6307\u5728\u7ed9\u5b9a\u76f8\u540c\u8f93\u5165\u65f6\uff0c\u603b\u662f\u8fd4\u56de\u76f8\u540c\u8f93\u51fa\u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u662f\u4e00\u4e2a\u7eaf\u7ec4\u4ef6\u3002\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u5c5e\u6027 ",(0,t.jsx)(e.code,{children:"is_loading"}),"\uff0c\u5b83\u603b\u662f\u8fd4\u56de\u76f8\u540c\u7684 ",(0,t.jsx)(e.code,{children:"Html"}),"\uff0c\u6ca1\u6709\u4efb\u4f55\u526f\u4f5c\u7528\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'use yew::{Properties, function_component, Html, html};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    pub is_loading: bool,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    if props.is_loading {\r\n        html! { "Loading" }\r\n    } else {\r\n        html! { "Hello world" }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u5185\u90e8\u7eaf\u7ec4\u4ef6\uff0c\u5b83\u4e0d\u4f7f\u7528 hooks \u548c\u5176\u4ed6\u7ec4\u4ef6\u673a\u5236\uff0c\u60a8\u901a\u5e38\u53ef\u4ee5\u5c06\u5176\u7f16\u5199\u4e3a\u8fd4\u56de ",(0,t.jsx)(e.code,{children:"Html"})," \u7684\u666e\u901a\u51fd\u6570\uff0c\u4ece\u800c\u907f\u514d Yew \u8fd0\u884c\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u76f8\u5173\u7684\u4e00\u4e9b\u5f00\u9500\u3002\u4f7f\u7528 ",(0,t.jsx)(e.a,{href:"/zh-Hans/docs/next/concepts/html/literals-and-expressions#expressions",children:"\u8868\u8fbe\u5f0f\u8bed\u6cd5"})," \u5728 ",(0,t.jsx)(e.code,{children:"html!"})," \u4e2d\u6e32\u67d3\u5b83\u4eec\u3002"]})}),"\n",(0,t.jsx)(e.h2,{id:"\u975e\u7eaf\u7ec4\u4ef6",children:"\u975e\u7eaf\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(e.p,{children:["\u60a8\u53ef\u80fd\u60f3\u77e5\u9053\uff0c\u5982\u679c\u7ec4\u4ef6\u4e0d\u4f7f\u7528\u4efb\u4f55\u5168\u5c40\u53d8\u91cf\uff0c\u90a3\u4e48\u5b83\u662f\u5426\u53ef\u4ee5\u662f\u4e0d\u201c\u7eaf\u201d\u7684\uff0c\u56e0\u4e3a\u5b83\u53ea\u662f\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u8c03\u7528\u7684\u56fa\u5b9a\u51fd\u6570\u3002\r\n\u8fd9\u5c31\u662f\u4e0b\u4e00\u4e2a\u4e3b\u9898 - ",(0,t.jsx)(e.a,{href:"./hooks",children:"hooks"})," \u7684\u7528\u6b66\u4e4b\u5730\u3002"]})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>i});var t=o(6540);const s={},c=t.createContext(s);function r(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);