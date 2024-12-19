"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4111],{7870:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=s(4848),t=s(8453);const r={title:"Debugging"},i=void 0,a={id:"more/debugging",title:"Debugging",description:"Panics",source:"@site/versioned_docs/version-0.19.0/more/debugging.mdx",sourceDirName:"more",slug:"/more/debugging",permalink:"/zh-Hans/docs/0.19.0/more/debugging",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/more/debugging.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Debugging"},sidebar:"docs",previous:{title:"Portals",permalink:"/zh-Hans/docs/0.19.0/advanced-topics/portals"},next:{title:"Tips for developing Yew applications",permalink:"/zh-Hans/docs/0.19.0/more/development-tips"}},l={},c=[{value:"Panics",id:"panics",level:2},{value:"Console Logging",id:"console-logging",level:2},{value:"<code>wasm-logger</code>",id:"wasm-logger",level:3},{value:"Source Maps",id:"source-maps",level:2},{value:"Latest Info",id:"latest-info",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"panics",children:"Panics"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/rustwasm/console_error_panic_hook",children:(0,o.jsx)(n.code,{children:"console_error_panic"})})," crate catches\r\n",(0,o.jsx)(n.code,{children:"panic!"}),"s and outputs them to the console. Yew will automatically catch ",(0,o.jsx)(n.code,{children:"panic!"}),"s and log them to\r\nyour browser's console."]}),"\n",(0,o.jsx)(n.h2,{id:"console-logging",children:"Console Logging"}),"\n",(0,o.jsxs)(n.p,{children:["In general, Wasm web apps are able to interact with Browser APIs, and the ",(0,o.jsx)(n.code,{children:"console.log"})," API is no\r\nexception. There are a few options available:"]}),"\n",(0,o.jsx)(n.h3,{id:"wasm-logger",children:(0,o.jsx)(n.a,{href:"https://crates.io/crates/wasm-logger",children:(0,o.jsx)(n.code,{children:"wasm-logger"})})}),"\n",(0,o.jsxs)(n.p,{children:["This crate integrates with the familiar Rust ",(0,o.jsx)(n.code,{children:"log"})," crate:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'// setup\r\nfn main() {\r\n    wasm_logger::init(wasm_logger::Config::default());\r\n}\r\n\r\n// usage\r\nlog::info!("Update: {:?}", msg);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"source-maps",children:"Source Maps"}),"\n",(0,o.jsx)(n.p,{children:"There is currently no first-class support for source maps for Rust / Wasm web apps. This, of course, is subject to change. If this is no longer true or if progress is made, please suggest a change!"}),"\n",(0,o.jsx)(n.h3,{id:"latest-info",children:"Latest Info"}),"\n",(0,o.jsxs)(n.p,{children:["[Dec 2019] ",(0,o.jsx)(n.a,{href:"https://developers.google.com/web/updates/2019/12/webassembly#the_future",children:"Chrome DevTools update"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"There is still quite a bit of work to do though. For example, on the tooling side, Emscripten (Binaryen) and wasm-pack (wasm-bindgen) don\u2019t support updating DWARF information on transformations they perform yet."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["[2020] ",(0,o.jsx)(n.a,{href:"https://rustwasm.github.io/book/reference/debugging.html#using-a-debugger",children:"Rust Wasm debugging guide"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Unfortunately, the debugging story for WebAssembly is still immature. On most Unix systems, ",(0,o.jsx)(n.a,{href:"http://dwarfstd.org/",children:"DWARF"})," is used to encode the information that a debugger needs to provide source-level inspection of a running program. There is an alternative format that encodes similar information on Windows. Currently, there is no equivalent for WebAssembly."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["[2019] ",(0,o.jsx)(n.a,{href:"https://rustwasm.github.io/rfcs/007-2019-roadmap.html#debugging",children:"Rust Wasm roadmap"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Debugging is tricky because much of the story is out of this working group's hands, and depends on both the WebAssembly standardization bodies and the folks implementing browser developer tools instead."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(6540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);