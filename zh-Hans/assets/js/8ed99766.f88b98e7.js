"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9227],{9780:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var n=t(4848),r=t(8453);const d={title:"Wasm Build Tools",description:"Information about build tools"},o=void 0,i={id:"more/wasm-build-tools",title:"Wasm Build Tools",description:"Information about build tools",source:"@site/versioned_docs/version-0.19.0/more/wasm-build-tools.mdx",sourceDirName:"more",slug:"/more/wasm-build-tools",permalink:"/demo/zh-Hans/docs/0.19.0/more/wasm-build-tools",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/more/wasm-build-tools.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Wasm Build Tools",description:"Information about build tools"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/demo/zh-Hans/docs/0.19.0/more/roadmap"},next:{title:"From 0.18.0 to 0.19.0",permalink:"/demo/zh-Hans/docs/0.19.0/migration-guides/yew/from-0_18_0-to-0_19_0"}},l={},a=[{value:"<strong>Wasm Build Tools</strong>",id:"wasm-build-tools",level:2},{value:"<strong><code>trunk</code></strong>",id:"trunk",level:3},{value:"<strong><code>wasm-pack</code></strong>",id:"wasm-pack",level:3},{value:"Comparison",id:"comparison",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"wasm-build-tools",children:(0,n.jsx)(s.strong,{children:"Wasm Build Tools"})}),"\n",(0,n.jsxs)(s.p,{children:["Extra tooling is needed to facilitate the interop between WebAssembly and JavaScript. Additionally,\r\ndepending on the tool you choose, they can help make deployment and packaging much less of a\r\nheadache by generating all of the JavaScript code necessary to load and run your app's ",(0,n.jsx)(s.code,{children:".wasm"}),"\r\nbinary in a browser."]}),"\n",(0,n.jsx)(s.h3,{id:"trunk",children:(0,n.jsx)(s.a,{href:"https://github.com/thedodd/trunk/",children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"trunk"})})})}),"\n",(0,n.jsxs)(s.p,{children:["A tool practically made for building Yew apps.\r\nIt can build any ",(0,n.jsx)(s.code,{children:"wasm-bindgen"})," based app and its design is inspired by rollup.js.\r\nWith Trunk you don't need to have Node.js installed or touch any JavaScript code for that matter.\r\nIt can bundle assets for your app and even ships with a Sass compiler."]}),"\n",(0,n.jsx)(s.p,{children:"All of our examples are built with Trunk."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.a,{href:"/demo/zh-Hans/docs/0.19.0/getting-started/project-setup/using-trunk",children:["Getting started with ",(0,n.jsx)(s.code,{children:"trunk"})]})}),"\n",(0,n.jsx)(s.h3,{id:"wasm-pack",children:(0,n.jsx)(s.a,{href:"https://rustwasm.github.io/docs/wasm-pack/",children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"wasm-pack"})})})}),"\n",(0,n.jsxs)(s.p,{children:["A CLI tool developed by the Rust / Wasm Working Group for packaging up WebAssembly. Best used\r\ntogether with the ",(0,n.jsx)(s.a,{href:"https://github.com/wasm-tool/wasm-pack-plugin",children:(0,n.jsx)(s.code,{children:"wasm-pack-plugin"})})," for Webpack.\r\nThe primary purpose of ",(0,n.jsx)(s.code,{children:"wasm-pack"})," is building Wasm libraries for use in JavaScript.\r\nBecause of this, it can only build libraries and doesn't provide useful tools like a development server or automatic rebuilds."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.a,{href:"/demo/zh-Hans/docs/0.19.0/getting-started/project-setup/using-wasm-pack",children:["Get started with ",(0,n.jsx)(s.code,{children:"wasm-pack"})]})}),"\n",(0,n.jsx)(s.h3,{id:"comparison",children:"Comparison"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.code,{children:"trunk"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.code,{children:"wasm-pack"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Project Status"}),(0,n.jsx)(s.td,{children:"Actively maintained"}),(0,n.jsxs)(s.td,{children:["Actively maintained by the ",(0,n.jsx)(s.a,{href:"https://rustwasm.github.io",children:"Rust / Wasm Working Group"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Dev Experience"}),(0,n.jsx)(s.td,{children:"Just works! Batteries included, no external dependencies needed."}),(0,n.jsx)(s.td,{children:"Bare-bones. You'll need to write some scripts to streamline the experience or use the webpack plugin."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Local Server"}),(0,n.jsx)(s.td,{children:"Supported"}),(0,n.jsx)(s.td,{children:"Only with webpack plugin"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Auto rebuild on local changes"}),(0,n.jsx)(s.td,{children:"Supported"}),(0,n.jsx)(s.td,{children:"Only with webpack plugin"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Asset handling"}),(0,n.jsx)(s.td,{children:"Supported"}),(0,n.jsx)(s.td,{children:"Only with webpack plugin"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Headless Browser Testing"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/thedodd/trunk/issues/20",children:"In Progress"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-pack/book/commands/test.html",children:"Supported"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Supported Targets"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)("code",{children:"wasm32-unknown-unknown"})})})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)("code",{children:"wasm32-unknown-unknown"})})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Example Usage"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/demo/zh-Hans/docs/0.19.0/getting-started/build-a-sample-app",children:"Sample app"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/yewstack/yew-wasm-pack-minimal",children:"Starter template"})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(6540);const r={},d=n.createContext(r);function o(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);