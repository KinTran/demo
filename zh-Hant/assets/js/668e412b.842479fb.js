"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3735],{9382:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=n(4848),d=n(8453);const t={},i="\u9078\u64c7 web-sys \u6216 stdweb",c={id:"getting-started/choose-web-library",title:"\u9078\u64c7 web-sys \u6216 stdweb",description:"\u7c21\u4ecb",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.18.0/getting-started/choose-web-library.mdx",sourceDirName:"getting-started",slug:"/getting-started/choose-web-library",permalink:"/demo/zh-Hant/docs/0.18.0/getting-started/choose-web-library",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/getting-started/choose-web-library.mdx",tags:[],version:"0.18.0",frontMatter:{},sidebar:"docs",previous:{title:"\u7b2c\u4e00\u500b\u7c21\u55ae\u7684 App",permalink:"/demo/zh-Hant/docs/0.18.0/getting-started/build-a-sample-app"},next:{title:"\u900f\u904e\u7bc4\u4f8b\u5b78\u7fd2",permalink:"/demo/zh-Hant/docs/0.18.0/getting-started/examples"}},l={},o=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u4f7f\u7528\u7bc4\u4f8b",id:"\u4f7f\u7528\u7bc4\u4f8b",level:2},{value:"\u6bd4\u8f03",id:"\u6bd4\u8f03",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"\u9078\u64c7-web-sys-\u6216-stdweb",children:"\u9078\u64c7 web-sys \u6216 stdweb"})}),"\n",(0,r.jsx)(s.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,r.jsxs)(s.p,{children:["Yew apps \u53ef\u4ee5\u7528 ",(0,r.jsx)(s.code,{children:"web-sys"})," \u6216 ",(0,r.jsx)(s.code,{children:"stdweb"})," \u7de8\u8b6f\u3002\u9019\u5169\u500b creates \u90fd\u63d0\u4f9b\u4e86 Rust \u8207 WebAPIs \u7684\u9023\u7d50\u3002\u7576\u628a ",(0,r.jsx)(s.code,{children:"yew"})," \u52a0\u9032\u4f60\u7684\u4f9d\u8cf4\u6642\uff0c\u8acb\u64c7\u5176\u4e00\u4f7f\u7528\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",metastring:'title="Cargo.toml"',children:'# \u9078\u64c7 `web-sys`\r\nyew = { version = "0.13", features = ["web_sys"] }\r\n\r\n# \u9078\u64c7 `stdweb`\r\nyew = { version = "0.13", features = ["std_web"] }\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u6211\u5011\u5efa\u8b70\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"web-sys"}),"\uff0c\u56e0\u70ba\u4ed6\u662f\u7531 ",(0,r.jsx)(s.a,{href:"https://rustwasm.github.io/",children:"Rust / Wasm Working Group"})," \u7dad\u8b77\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u7bc4\u4f8b",children:"\u4f7f\u7528\u7bc4\u4f8b"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'// web-sys\r\nlet window: web_sys::Window = web_sys::window().expect("window not available");\r\nwindow.alert_with_message("hello from wasm!").expect("alert failed");\r\n\r\n// stdweb\r\nlet window: stdweb::web::Window = stdweb::web::window();\r\nwindow.alert("hello from wasm!");\r\n\r\n// stdweb with js! macro\r\nuse stdweb::js;\r\nuse stdweb::unstable::TryFrom;\r\nuse stdweb::web::Window;\r\n\r\nlet window_val: stdweb::Value = js!{ return window; }; // <- JS syntax inside!\r\nlet window = Window::try_from(window_val).expect("conversion to window failed");\r\nwindow.alert("hello from wasm!");\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u5169\u500b crates \u63d0\u4f9b\u7684 APIs \u96d6\u7136\u4e0d\u4e00\u6a23\uff0c\u4f46\u662f\u4ed6\u5011\u7684\u76ee\u6a19\u8207\u529f\u80fd\u5927\u81f4\u76f8\u540c\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u6bd4\u8f03",children:"\u6bd4\u8f03"}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u5217\u51fa\u5e7e\u9ede\uff0c\u5e6b\u52a9\u4f60\u5f9e\u4e0d\u540c\u7684\u89d2\u5ea6\u53bb\u8003\u616e\u8981\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"web-sys"})," \u9084\u662f ",(0,r.jsx)(s.code,{children:"stdweb"}),"\u3002\u8acb\u6ce8\u610f\uff0c\u96d6\u7136\u4f60\u53ef\u4ee5\u5169\u500b crates \u90fd\u4f7f\u7528\uff0c\u4f46\u662f\u70ba\u4e86\u6e1b\u5c11\u7de8\u8b6f\u6210 ",(0,r.jsx)(s.code,{children:".wasm"})," \u7684\u6a94\u6848\u5927\u5c0f\uff0c\u6700\u597d\u9084\u662f\u53ea\u9078\u4e00\u500b\u4f7f\u7528\u3002"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"web-sys"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"stdweb"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u5c08\u6848\u72c0\u614b"}),(0,r.jsxs)(s.td,{children:["\u7531 ",(0,r.jsx)(s.a,{href:"https://rustwasm.github.io/",children:"Rust / Wasm Working Group"})," \u6301\u7e8c\u7dad\u8b77\u4e2d"]}),(0,r.jsx)(s.td,{children:"GitHub repo \u5df2\u7d93\u6709\u56db\u500b\u6708\u6c92\u6709\u52d5\u975c\u4e86"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Web API \u8986\u84cb\u7387"}),(0,r.jsx)(s.td,{children:"Rust APIs \u662f\u7531 Web IDL \u81ea\u52d5\u7522\u751f\uff0c\u6240\u4ee5\u61c9\u8a72\u5df2\u7d93\u6709 100% \u7684\u8986\u84cb\u7387"}),(0,r.jsx)(s.td,{children:"\u4f9d\u793e\u7fa4\u6240\u9700\u52a0\u5165 Browser APIs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Rust API \u8a2d\u8a08"}),(0,r.jsxs)(s.td,{children:["\u4f7f\u7528\u4fdd\u5b88\u7684\u65b9\u5f0f\uff0c\u5927\u591a\u7684 API \u547c\u53eb\u5f8c\u6703\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"Result"})]}),(0,r.jsxs)(s.td,{children:["\u901a\u5e38\u6bd4\u8d77\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"Result"})," \u66f4\u50be\u5411\u65bc\u76f4\u63a5\u9020\u6210 panic\u3002\u4f8b\u5982\uff0c\u5728 worker \u4e2d\u547c\u53eb ",(0,r.jsx)(s.code,{children:"stdweb::web::window()"})," \u7684\u8a71\u5c31\u6703 panic\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u652f\u63f4\u7684\u5efa\u7f6e\u5de5\u5177"}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"wasm-bindgen"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"wasm-pack"})})]})}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"cargo-web"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"wasm-bindgen"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"wasm-pack"})})]})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u652f\u63f4\u7684\u76ee\u6a19\u5e73\u53f0"}),(0,r.jsx)(s.td,{children:(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"wasm32-unknown-unknown"})})})}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"wasm32-unknown-unknown"})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"wasm32-unknown-emscripten"})})," ",(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"asmjs-unknown-emscripten"})})]})})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(6540);const d={},t=r.createContext(d);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);