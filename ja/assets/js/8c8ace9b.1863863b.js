"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3972],{2308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(4848),s=n(8453);const r={title:"Project Setup",sidebar_label:"Introduction",description:"Set yourself up for success"},i=void 0,a={id:"getting-started/introduction",title:"Project Setup",description:"Set yourself up for success",source:"@site/versioned_docs/version-0.19.0/getting-started/introduction.mdx",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/demo/ja/docs/0.19.0/getting-started/introduction",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/getting-started/introduction.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Project Setup",sidebar_label:"Introduction",description:"Set yourself up for success"},sidebar:"docs",next:{title:"Using trunk",permalink:"/demo/ja/docs/0.19.0/getting-started/project-setup/using-trunk"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Installing Rust",id:"installing-rust",level:2},{value:"Install WebAssembly target",id:"install-webassembly-target",level:2},{value:"Install Trunk",id:"install-trunk",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"Your local development environment will need a couple of tools to compile, build, package and debug your Yew application."}),"\n",(0,o.jsx)(t.h2,{id:"installing-rust",children:"Installing Rust"}),"\n",(0,o.jsxs)(t.p,{children:["To install Rust, follow the ",(0,o.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"official instructions"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"important",children:(0,o.jsxs)(t.p,{children:["The minimum supported Rust version (MSRV) for Yew is ",(0,o.jsx)(t.code,{children:"1.56.0"}),". Older versions can cause unexpected issues accompanied\r\nby incomprehensible error messages or outright fail to compile. You can check your toolchain version using\r\n",(0,o.jsx)(t.code,{children:"rustup show"}),' (under "active toolchain") or alternatively ',(0,o.jsx)(t.code,{children:"rustc --version"}),". To update your toolchain, run ",(0,o.jsx)(t.code,{children:"rustup update"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"install-webassembly-target",children:"Install WebAssembly target"}),"\n",(0,o.jsx)(t.p,{children:'Rust can compile source codes for different "targets" (e.g. different processors). The compilation target for browser-based WebAssembly is called "wasm32-unknown-unknown". The following command will add this target to your development environment.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,o.jsx)(t.h2,{id:"install-trunk",children:"Install Trunk"}),"\n",(0,o.jsxs)(t.p,{children:["Trunk is the recommended tool for managing deployment and packaging, and will be used throughout the documentation and examples.\r\nSee ",(0,o.jsx)(t.a,{href:"/demo/ja/docs/0.19.0/more/wasm-build-tools",children:"Wasm Build Tools"})," for more information on packaging and alternatives."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"# note that this might take a while to install, because it compiles everything from scratch\r\n# Trunk also provides prebuilt binaries for a number of major package managers\r\n# See https://trunkrs.dev/#install for further details\r\ncargo install trunk\n"})}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you have all the tools needed, we can ",(0,o.jsx)(t.a,{href:"/demo/ja/docs/0.19.0/getting-started/build-a-sample-app",children:"build a sample application"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);