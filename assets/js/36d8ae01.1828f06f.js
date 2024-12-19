"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2159],{5472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),i=n(8453);const a={title:"Using wasm-pack"},r=void 0,o={id:"getting-started/project-setup/using-wasm-pack",title:"Using wasm-pack",description:"This tool was created by the Rust / Wasm Working Group for building WebAssembly applications. It supports packaging code into npm modules and has an accompanying Webpack plugin for easy integration with existing JavaScript applications. More information is given in the wasm-pack documentation.",source:"@site/versioned_docs/version-0.18.0/getting-started/project-setup/using-wasm-pack.mdx",sourceDirName:"getting-started/project-setup",slug:"/getting-started/project-setup/using-wasm-pack",permalink:"/demo/docs/0.18.0/getting-started/project-setup/using-wasm-pack",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/getting-started/project-setup/using-wasm-pack.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Using wasm-pack"},sidebar:"docs",previous:{title:"Using trunk",permalink:"/demo/docs/0.18.0/getting-started/project-setup/using-trunk"},next:{title:"Using cargo-web",permalink:"/demo/docs/0.18.0/getting-started/project-setup/using-cargo-web"}},c={},l=[{value:"Install",id:"install",level:2},{value:"Build",id:"build",level:2},{value:"Bundle",id:"bundle",level:2},{value:"Serve",id:"serve",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This tool was created by the Rust / Wasm Working Group for building WebAssembly applications. It supports packaging code into ",(0,s.jsx)(t.code,{children:"npm"})," modules and has an accompanying ",(0,s.jsx)(t.a,{href:"https://github.com/wasm-tool/wasm-pack-plugin",children:"Webpack plugin"})," for easy integration with existing JavaScript applications. More information is given in ",(0,s.jsxs)(t.a,{href:"https://rustwasm.github.io/docs/wasm-pack/introduction.html",children:["the ",(0,s.jsx)(t.code,{children:"wasm-pack"})," documentation"]}),"."]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"wasm-pack"})," requires that you set the crate-type explicitly to include ",(0,s.jsx)(t.code,{children:"cdylib"}),":"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[lib]\r\ncrate-type = ["rlib", "cdylib"]\n'})})]}),"\n",(0,s.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo install wasm-pack\n"})}),"\n",(0,s.jsx)(t.h2,{id:"build",children:"Build"}),"\n",(0,s.jsxs)(t.p,{children:["This command will produce a bundle in the ",(0,s.jsx)(t.code,{children:"./pkg"})," directory with your app's compiled WebAssembly\r\nalong with a JavaScript wrapper which can be used to start your application."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"wasm-pack build --target web\n"})}),"\n",(0,s.jsx)(t.h2,{id:"bundle",children:"Bundle"}),"\n",(0,s.jsxs)(t.p,{children:["For more information on rollup.js visit this ",(0,s.jsx)(t.a,{href:"https://rollupjs.org/guide/en/#quick-start",children:"guide"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"rollup ./main.js --format iife --file ./pkg/bundle.js\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When using a bundler like rollup.js you can omit ",(0,s.jsx)(t.code,{children:"--target web"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"serve",children:"Serve"}),"\n",(0,s.jsx)(t.p,{children:"Feel free to use your preferred server. Here we use a simple Python server to serve the built app."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"python -m http.server 8000\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you don't have Python installed, you can install and use the ",(0,s.jsx)(t.a,{href:"https://github.com/TheWaWaR/simple-http-server",children:(0,s.jsx)(t.code,{children:"simple-http-server"})})," crate instead."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);