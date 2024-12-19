"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4621],{1226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(4848),r=n(8453);const o={title:"Getting Started"},i=void 0,l={id:"getting-started/introduction",title:"Getting Started",description:"You will need a couple of tools to compile, build, package and debug your Yew application.",source:"@site/versioned_docs/version-0.20/getting-started/introduction.mdx",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/0.20/getting-started/introduction",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/getting-started/introduction.mdx",tags:[],version:"0.20",frontMatter:{title:"Getting Started"},sidebar:"docs",next:{title:"Build a sample app",permalink:"/docs/0.20/getting-started/build-a-sample-app"}},a={},d=[{value:"Installing Rust",id:"installing-rust",level:2},{value:"Install WebAssembly target",id:"install-webassembly-target",level:2},{value:"Install Trunk",id:"install-trunk",level:2},{value:"Other options",id:"other-options",level:3},{value:"Next steps",id:"next-steps",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["You will need a couple of tools to compile, build, package and debug your Yew application.\r\nWhen getting started, we recommend using ",(0,s.jsx)(t.a,{href:"https://trunkrs.dev/",children:"Trunk"}),". Trunk is a WASM web application\r\nbundler for Rust."]}),"\n",(0,s.jsx)(t.h2,{id:"installing-rust",children:"Installing Rust"}),"\n",(0,s.jsxs)(t.p,{children:["To install Rust, follow the ",(0,s.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"official instructions"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["The minimum supported Rust version (MSRV) for Yew is ",(0,s.jsx)(t.code,{children:"1.56.1"}),". Older versions can cause unexpected\r\nissues accompanied by incomprehensible error messages. You can check your toolchain version using\r\n",(0,s.jsx)(t.code,{children:"rustup show"}),' (under "active toolchain") or alternatively ',(0,s.jsx)(t.code,{children:"rustc --version"}),". To update your\r\ntoolchain, run ",(0,s.jsx)(t.code,{children:"rustup update"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"install-webassembly-target",children:"Install WebAssembly target"}),"\n",(0,s.jsxs)(t.p,{children:['Rust can compile source codes for different "targets" (e.g. different processors). The compilation\r\ntarget for browser-based WebAssembly is called ',(0,s.jsx)(t.code,{children:"wasm32-unknown-unknown"}),". The following command will\r\nadd the WebAssembly target to your development environment."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,s.jsx)(t.h2,{id:"install-trunk",children:"Install Trunk"}),"\n",(0,s.jsx)(t.p,{children:"Trunk is the recommended tool for managing deployment and packaging, and is used throughout the\r\ndocumentation and examples."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# note that this might take a while to install, because it compiles everything from scratch\r\n# Trunk also provides prebuilt binaries for a number of major package managers\r\n# See https://trunkrs.dev/#install for further details\r\ncargo install --locked trunk\n"})}),"\n",(0,s.jsx)(t.h3,{id:"other-options",children:"Other options"}),"\n",(0,s.jsx)(t.p,{children:"There are options other than Trunk that may be used for bundling Yew applications. You might want to try one of these options:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://rustwasm.github.io/wasm-pack/",children:(0,s.jsx)(t.code,{children:"wasm-pack"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/IMI-eRnD-Be/wasm-run",children:(0,s.jsx)(t.code,{children:"wasm-run"})})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/rustminded/xtask-wasm/",children:(0,s.jsx)(t.code,{children:"xtask-wasm"})})," (still in early development)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(t.p,{children:["With your development environment setup, you can now proceed with reading the documentation.\r\nIf you like to learn by getting your hands dirty, we recommend you check out our ",(0,s.jsx)(t.a,{href:"../tutorial",children:"tutorial"})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);