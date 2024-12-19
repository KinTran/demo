"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6601],{7308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(4848),r=n(8453);const i={title:"Using trunk"},o=void 0,a={id:"getting-started/project-setup/using-trunk",title:"Using trunk",description:"Install",source:"@site/versioned_docs/version-0.18.0/getting-started/project-setup/using-trunk.mdx",sourceDirName:"getting-started/project-setup",slug:"/getting-started/project-setup/using-trunk",permalink:"/docs/0.18.0/getting-started/project-setup/using-trunk",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/getting-started/project-setup/using-trunk.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Using trunk"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.18.0/getting-started/introduction"},next:{title:"Using wasm-pack",permalink:"/docs/0.18.0/getting-started/project-setup/using-wasm-pack"}},l={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo install trunk wasm-bindgen-cli\n"})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Check out ",(0,s.jsx)(t.a,{href:"/docs/0.18.0/getting-started/build-a-sample-app",children:'"Build a sample app"'})," for a short guide on how to build Yew apps with Trunk."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also see it in action by looking at our ",(0,s.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples",children:"examples"}),",\r\nall of which are built with Trunk."]}),"\n",(0,s.jsxs)(t.p,{children:["Trunk builds your app based on the ",(0,s.jsx)(t.code,{children:"index.html"})," file which serves as a config file of sorts.\r\nUnlike ",(0,s.jsx)(t.code,{children:"wasm-pack"}),", this tool is actually designed to build apps.\r\nThis means you don't need to add ",(0,s.jsx)(t.code,{children:"cdylib"})," as a library target and you can use the ",(0,s.jsx)(t.code,{children:"main"})," function\r\nas an entry point."]}),"\n",(0,s.jsxs)(t.p,{children:["To build a simple Yew app you just need an ",(0,s.jsx)(t.code,{children:"index.html"})," file at the root of your project:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<!doctype html>\r\n<html>\r\n    <head>\r\n        <meta charset="utf-8" />\r\n        <title>Yew App</title>\r\n    </head>\r\n</html>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The Trunk CLI provides several useful commands but during development ",(0,s.jsx)(t.code,{children:"trunk serve"})," is certainly the most useful one.\r\nIt runs a local server for you and automatically rebuilds the app when it detects changes."]}),"\n",(0,s.jsxs)(t.p,{children:["When you're ready to release your app, you can just run ",(0,s.jsx)(t.code,{children:"trunk build --release"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This summary here doesn't nearly cover all of Trunk's features,\r\nbe sure to check out the ",(0,s.jsx)(t.a,{href:"https://github.com/thedodd/trunk",children:"README"}),"!"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);