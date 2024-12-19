"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2376],{5489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(4848),s=n(8453);const a={title:"Starter templates"},i=void 0,l={id:"getting-started/starter-templates",title:"Starter templates",description:"trunk",source:"@site/versioned_docs/version-0.19.0/getting-started/starter-templates.mdx",sourceDirName:"getting-started",slug:"/getting-started/starter-templates",permalink:"/demo/ja/docs/0.19.0/getting-started/starter-templates",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/getting-started/starter-templates.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Starter templates"},sidebar:"docs",previous:{title:"Examples",permalink:"/demo/ja/docs/0.19.0/getting-started/examples"},next:{title:"wasm-bindgen",permalink:"/demo/ja/docs/0.19.0/concepts/wasm-bindgen"}},c={},o=[{value:"<code>trunk</code>",id:"trunk",level:2},{value:"<code>wasm-pack</code>",id:"wasm-pack",level:2},{value:"Other templates",id:"other-templates",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"trunk",children:(0,r.jsx)(t.code,{children:"trunk"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew-trunk-minimal-template",children:"Minimal Template"})," - A small application built with Trunk to get you started."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"wasm-pack",children:(0,r.jsx)(t.code,{children:"wasm-pack"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew-wasm-pack-minimal",children:"Minimal Template"})," - Uses ",(0,r.jsx)(t.code,{children:"wasm-pack"})," and\r\n",(0,r.jsx)(t.code,{children:"rollup"})," to build your application, and your own server to serve it. No bells or whistles here."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew-wasm-pack-template",children:"Webpack Template"})," - Uses ",(0,r.jsx)(t.code,{children:"wasm-pack"})," and the\r\n",(0,r.jsx)(t.a,{href:"https://github.com/wasm-tool/wasm-pack-plugin",children:(0,r.jsx)(t.code,{children:"wasm-pack-plugin"})})," for Webpack to streamline development."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Unlike other tools, ",(0,r.jsx)(t.code,{children:"wasm-pack"})," forces you to use a ",(0,r.jsx)(t.code,{children:"lib"}),", not a ",(0,r.jsx)(t.code,{children:"bin"})," crate,\r\nand the entry-point to your program is annotated with a ",(0,r.jsx)(t.code,{children:"#[wasm_bindgen(start)]"})," attribute."]}),"\n",(0,r.jsxs)(t.p,{children:["Your ",(0,r.jsx)(t.code,{children:"Cargo.toml"}),' also should specify that your crate\'s type is a "cdylib".']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:'[package]\r\nname = "yew-app"\r\nversion = "0.1.0"\r\nauthors = ["Yew App Developer <name@example.com>"]\r\nedition = "2018"\r\n\r\n[lib]\r\n# You should include "rlib" (the default crate type) otherwise your crate can\'t be used as a Rust library\r\n# which, among other things, breaks unit testing\r\ncrate-type = ["rlib", "cdylib"]\r\n\r\n[dependencies]\r\nyew = "0.17"\r\nwasm-bindgen = "0.2"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"other-templates",children:"Other templates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/spielrs/yew-parcel-template",children:"Parcel Template"})," - Created by a community member\r\nand uses ",(0,r.jsx)(t.a,{href:"https://parceljs.org/",children:"Parcel"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);