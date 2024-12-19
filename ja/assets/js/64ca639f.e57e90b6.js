"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1125],{2919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var o=t(4848),s=t(8453);const c={title:"Node Refs",description:"Out-of-band DOM access"},r=void 0,i={id:"concepts/function-components/node-refs",title:"Node Refs",description:"Out-of-band DOM access",source:"@site/versioned_docs/version-0.21/concepts/function-components/node-refs.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/node-refs",permalink:"/demo/ja/docs/concepts/function-components/node-refs",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/function-components/node-refs.mdx",tags:[],version:"0.21",frontMatter:{title:"Node Refs",description:"Out-of-band DOM access"},sidebar:"docs",previous:{title:"Custom Hooks",permalink:"/demo/ja/docs/concepts/function-components/hooks/custom-hooks"},next:{title:"State",permalink:"/demo/ja/docs/concepts/function-components/state"}},d={},a=[{value:"Further Reading",id:"further-reading",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ref"})," attribute can be used to attach the ",(0,o.jsx)(n.code,{children:"NodeRef"})," to an HTML element. In callbacks,\r\nyou can then get the DOM ",(0,o.jsx)(n.code,{children:"Element"})," that the ref is attached to. This can be used to make\r\nchanges to the DOM outside of the ",(0,o.jsx)(n.code,{children:"view"})," lifecycle method, retrieve the value of an ",(0,o.jsx)(n.code,{children:"<input>"}),"\r\nand other direct interactions with the DOM via the javascript API."]}),"\n",(0,o.jsx)(n.p,{children:"This is useful for getting ahold of canvas elements, or scrolling to different sections of a page."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Do not manually modify the DOM tree that is rendered by Yew. Treat the ",(0,o.jsx)(n.code,{children:"NodeRef"})," as a read-only\r\naccess, if you are unsure."]})}),"\n",(0,o.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_node_ref.html",children:"use_node_ref hook"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/node_refs",children:[(0,o.jsx)(n.code,{children:"node_refs"})," example"]})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(6540);const s={},c=o.createContext(s);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);