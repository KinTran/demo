"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4224],{3942:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var c=n(4848),r=n(8453);const d={title:"wasm-bindgen",sidebar_label:"wasm-bindgen"},i=void 0,t={id:"concepts/basic-web-technologies/wasm-bindgen",title:"wasm-bindgen",description:"wasm-bindgen \u662f\u4e00\u500b\u5728 JavaScript \u548c Rust \u51fd\u6578\u4e4b\u9593\u5efa\u7acb\u547c\u53eb\u6a4b\u6a11\u7684\u51fd\u5f0f\u5eab\u548c\u5de5\u5177\u3002\u5b83\u662f\u7531 Rust \u548c WebAssembly \u5de5\u4f5c\u5c0f\u7d44 \u4f7f\u7528 Rust \u5efa\u69cb\u7684\u3002",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/concepts/basic-web-technologies/wasm-bindgen.mdx",sourceDirName:"concepts/basic-web-technologies",slug:"/concepts/basic-web-technologies/wasm-bindgen",permalink:"/demo/zh-Hant/docs/next/concepts/basic-web-technologies/wasm-bindgen",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/basic-web-technologies/wasm-bindgen.mdx",tags:[],version:"current",frontMatter:{title:"wasm-bindgen",sidebar_label:"wasm-bindgen"},sidebar:"docs",previous:{title:"Javascript \u8207 Rust",permalink:"/demo/zh-Hant/docs/next/concepts/basic-web-technologies/js"},next:{title:"web-sys",permalink:"/demo/zh-Hant/docs/next/concepts/basic-web-technologies/web-sys"}},l={},a=[{value:"<code>wasm-bindgen</code>",id:"wasm-bindgen",level:2},{value:"<code>#[wasm_bindgen]</code> macro",id:"wasm_bindgen-macro",level:3},{value:"\u6a21\u64ec\u7e7c\u627f",id:"\u6a21\u64ec\u7e7c\u627f",level:3},{value:"<code>JsValue</code>",id:"jsvalue",level:3},{value:"<code>JsCast</code>",id:"jscast",level:3},{value:"<code>Closure</code>",id:"closure",level:3},{value:"<code>js-sys</code>",id:"js-sys",level:2},{value:"<code>wasm-bindgen-futures</code>",id:"wasm-bindgen-futures",level:2},{value:"<code>spawn_local</code>",id:"spawn_local",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://github.com/rustwasm/wasm-bindgen",children:(0,c.jsx)(s.code,{children:"wasm-bindgen"})})," \u662f\u4e00\u500b\u5728 JavaScript \u548c Rust \u51fd\u6578\u4e4b\u9593\u5efa\u7acb\u547c\u53eb\u6a4b\u6a11\u7684\u51fd\u5f0f\u5eab\u548c\u5de5\u5177\u3002\u5b83\u662f\u7531 ",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/",children:"Rust \u548c WebAssembly \u5de5\u4f5c\u5c0f\u7d44"})," \u4f7f\u7528 Rust \u5efa\u69cb\u7684\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["Yew \u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u900f\u904e\u4e00\u4e9b crate \u8207\u700f\u89bd\u5668\u9032\u884c\u4e92\u52d5\uff1a"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/js-sys",children:(0,c.jsx)(s.code,{children:"js-sys"})})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,c.jsx)(s.code,{children:"wasm-bindgen"})})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/web-sys",children:(0,c.jsx)(s.code,{children:"web-sys"})})}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u672c\u7bc0\u5c07\u5f9e\u66f4\u62bd\u8c61\u7684\u5c64\u6b21\u63a2\u8a0e\u9019\u4e9b crate\uff0c\u4ee5\u4fbf\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u4f7f\u7528 Yew \u4e2d\u7684 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," API\u3002\u8981\u4e86\u89e3\u6709\u95dc ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u53ca\u5176\u76f8\u95dc crate \u7684\u66f4\u6df1\u5165\u6307\u5357\uff0c\u8acb\u67e5\u770b ",(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:[(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u6307\u5f15"]}),"\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u6709\u95dc\u4e0a\u8ff0 crate \u7684\u6587\u6a94\uff0c\u8acb\u67e5\u770b ",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/index.html",children:(0,c.jsx)(s.code,{children:"wasm-bindgen docs.rs"})}),"\u3002"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," doc.rs \u641c\u5c0b\u4f86\u5c0b\u627e\u5df2\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u532f\u5165\u7684\u700f\u89bd\u5668 API \u548c JavaScript \u985e\u578b\u3002"]})}),"\n",(0,c.jsx)(s.h2,{id:"wasm-bindgen",children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,c.jsx)(s.code,{children:"wasm-bindgen"})})}),"\n",(0,c.jsxs)(s.p,{children:["\u9019\u500b crate \u70ba\u4e0a\u9762\u7684\u5176\u4ed6 crate \u63d0\u4f9b\u4e86\u8a31\u591a\u69cb\u5efa\u584a\u3002\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u53ea\u6703\u6db5\u84cb ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," crate \u7684\u5169\u500b\u4e3b\u8981\u9818\u57df\uff0c\u5373\u5de8\u96c6\u548c\u4e00\u4e9b\u60a8\u6703\u4e00\u904d\u53c8\u4e00\u904d\u770b\u5230\u7684\u985e\u578b/\u7279\u6027\u3002"]}),"\n",(0,c.jsxs)(s.h3,{id:"wasm_bindgen-macro",children:[(0,c.jsx)(s.code,{children:"#[wasm_bindgen]"})," macro"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"#[wasm_bindgen]"})," \u5de8\u96c6\u63d0\u4f9b\u4e86 Rust \u548c JavaScript \u4e4b\u9593\u7684\u63a5\u53e3\uff0c\u63d0\u4f9b\u4e86\u4e00\u500b\u5728\u5169\u8005\u4e4b\u9593\u9032\u884c\u8f49\u63db\u7684\u7cfb\u7d71\u3002\u4f7f\u7528\u9019\u500b\u5de8\u96c6\u66f4\u70ba\u9ad8\u7d1a\uff0c\u9664\u975e\u60a8\u8981\u4f7f\u7528\u5916\u90e8 JavaScript \u51fd\u5f0f\u5eab\uff0c\u5426\u5247\u4e0d\u61c9\u8a72\u4f7f\u7528\u5b83\u3002 ",(0,c.jsx)(s.code,{children:"js-sys"})," \u548c ",(0,c.jsx)(s.code,{children:"web-sys"})," crate \u70ba\u5167\u5efa JavaScript \u985e\u578b\u548c\u700f\u89bd\u5668 API \u63d0\u4f9b\u4e86 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u5b9a\u7fa9\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u8b93\u6211\u5011\u900f\u904e\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\u4f86\u4f7f\u7528",(0,c.jsx)(s.code,{children:"#[wasm-bindgen]"})," \u5de8\u96c6\u4f86\u532f\u5165\u4e00\u4e9b\u7279\u5b9a\u7248\u672c\u7684[",(0,c.jsx)(s.code,{children:"console.log"}),"](",(0,c.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/",children:"https://developer.mozilla.org/en-US/docs/Web/"})," API/Console/log) \u51fd\u6578\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-rust",metastring:",no_run",children:'use wasm_bindgen::prelude::*;\r\n\r\n// \u9996\u5148\u8b93\u6211\u5011\u624b\u52d5\u7d81\u5b9a `console.log`\uff0c\u800c\u4e0d\u4f7f\u7528 `web_sys` \u7684\u5e6b\u52a9\u3002\r\n// \u5728\u9019\u88e1\uff0c\u6211\u5011\u624b\u52d5\u5beb `#[wasm_bindgen]` \u8a3b\u89e3\uff0c\u6211\u5011\u7a0b\u5f0f\u7684\u6b63\u78ba\u6027\u53d6\u6c7a\u65bc\u9019\u4e9b\u8a3b\u89e3\u7684\u6b63\u78ba\u6027\uff01\r\n#[wasm_bindgen]\r\nextern "C" {\r\n    // \u5728\u9019\u88e1\u4f7f\u7528 `js_namespace` \u4f86\u7d81\u5b9a `console.log(..)` \u800c\u4e0d\u662f\u53ea\u6709 `log(..)`\r\n    #[wasm_bindgen(js_namespace = console)]\r\n    fn log(s: &str);\r\n\r\n    // `console.log` \u662f\u591a\u614b\u7684\uff0c\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u591a\u500b\u7c3d\u7ae0\u7d81\u5b9a\u5b83\u3002\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_u32(a: u32);\r\n\r\n    // \u591a\u500b\u53c3\u6578\u4e5f\u662f\u53ef\u4ee5\u7684\uff01\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_many(a: &str, b: &str);\r\n}\r\n\r\n// \u4f7f\u7528\u5c0e\u5165\u7684\u51fd\u6578\uff01\r\nlog("Hello from Rust!");\r\nlog_u32(42);\r\nlog_many("Logging", "many values!");\n'})}),"\n",(0,c.jsxs)(s.p,{children:["_\u9019\u500b\u7bc4\u4f8b\u662f\u57fa\u65bc ",(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/examples/console-log.html",children:["1.2 \u4f7f\u7528 console.log \u7684 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u6307\u5f15"]})," \u6539\u7de8\u7684\u3002 _"]}),"\n",(0,c.jsx)(s.h3,{id:"\u6a21\u64ec\u7e7c\u627f",children:"\u6a21\u64ec\u7e7c\u627f"}),"\n",(0,c.jsxs)(s.p,{children:["\u5728 JavaScript \u985e\u5225\u4e4b\u9593\u7684\u7e7c\u627f\u662f JavaScript \u8a9e\u8a00\u7684\u6838\u5fc3\u7279\u6027\uff0cDOM\uff08\u6587\u4ef6\u7269\u4ef6\u6a21\u578b\uff09\u662f\u570d\u7e5e\u5b83\u8a2d\u8a08\u7684\u3002\u7576\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u532f\u5165\u985e\u578b\u6642\uff0c\u60a8\u4e5f\u53ef\u4ee5\u65b0\u589e\u63cf\u8ff0\u5b83\u5011\u7e7c\u627f\u95dc\u4fc2\u7684\u5c6c\u6027\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5728Rust \u4e2d\uff0c\u9019\u7a2e\u7e7c\u627f\u95dc\u4fc2\u4f7f\u7528",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/std/ops/trait.Deref.html",children:(0,c.jsx)(s.code,{children:"Deref"})})," \u548c[",(0,c.jsx)(s.code,{children:"AsRef"}),"](",(0,c.jsx)(s.a,{href:"https://doc",children:"https://doc"}),". rust-lang.org/std/convert/trait.AsRef.html) \u7279\u6027\u4f86\u8868\u793a\u3002\u9019\u88e1\u8209\u500b\u4f8b\u5b50\u53ef\u80fd\u6703\u6709\u6240\u5e6b\u52a9\uff1b\u5047\u8a2d\u60a8\u6709\u4e09\u7a2e\u985e\u578b ",(0,c.jsx)(s.code,{children:"A"}),"\u3001",(0,c.jsx)(s.code,{children:"B"})," \u548c ",(0,c.jsx)(s.code,{children:"C"}),"\uff0c\u5176\u4e2d ",(0,c.jsx)(s.code,{children:"C"})," \u64f4\u5c55\u4e86 ",(0,c.jsx)(s.code,{children:"B"}),"\uff0c\u800c ",(0,c.jsx)(s.code,{children:"B"})," \u53c8\u64f4\u5c55\u4e86 ",(0,c.jsx)(s.code,{children:"A"}),"\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u532f\u5165\u9019\u4e9b\u985e\u578b\u6642\uff0c",(0,c.jsx)(s.code,{children:"#[wasm-bindgen]"})," \u5de8\u96c6\u5c07\u6309\u7167\u4e0b\u5217\u65b9\u5f0f\u5be6\u4f5c ",(0,c.jsx)(s.code,{children:"Deref"})," \u548c ",(0,c.jsx)(s.code,{children:"AsRef"})," \u7279\u6027\uff1a"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"C"})," \u53ef\u4ee5 ",(0,c.jsx)(s.code,{children:"Deref"})," \u5230 ",(0,c.jsx)(s.code,{children:"B"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"B"})," \u53ef\u4ee5 ",(0,c.jsx)(s.code,{children:"Deref"})," \u5230 ",(0,c.jsx)(s.code,{children:"A"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"C"})," \u53ef\u4ee5\u88ab ",(0,c.jsx)(s.code,{children:"AsRef"})," \u5230 ",(0,c.jsx)(s.code,{children:"B"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"C"})," \u548c ",(0,c.jsx)(s.code,{children:"B"})," \u90fd\u53ef\u4ee5\u88ab ",(0,c.jsx)(s.code,{children:"AsRef"})," \u5230 ",(0,c.jsx)(s.code,{children:"A"})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u9019\u4e9b\u5be6\u4f5c\u5141\u8a31\u60a8\u5728 ",(0,c.jsx)(s.code,{children:"C"})," \u7684\u5be6\u4f8b\u4e0a\u547c\u53eb ",(0,c.jsx)(s.code,{children:"A"})," \u7684\u65b9\u6cd5\uff0c\u4e26\u5c07 ",(0,c.jsx)(s.code,{children:"C"})," \u7528\u4f5c ",(0,c.jsx)(s.code,{children:"&B"})," \u6216 ",(0,c.jsx)(s.code,{children:"&A"}),"\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528",(0,c.jsx)(s.code,{children:"#[wasm-bindgen]"})," \u5c0e\u5165\u7684\u6bcf\u7a2e\u985e\u578b\u90fd\u6709\u76f8\u540c\u7684\u6839\u985e\u578b\uff0c\u60a8\u53ef\u4ee5\u5c07\u5176\u8996\u70ba\u4e0a\u9762\u7bc4\u4f8b\u4e2d\u7684",(0,c.jsx)(s.code,{children:"A"}),"\uff0c\u9019\u7a2e\u985e\u578b\u662f",(0,c.jsx)(s.a,{href:"#jsvalue",children:(0,c.jsx)(s.code,{children:"JsValue"})}),"\uff0c\u4e0b\u9762\u6709\u5b83\u7684\u90e8\u5206\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.em,{children:(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/reference/attributes/on-js-imports/extends.html",children:[(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u6307\u5f15\u4e2d\u7684 extends \u90e8\u5206"]})})}),"\n",(0,c.jsx)(s.h3,{id:"jsvalue",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:(0,c.jsx)(s.code,{children:"JsValue"})})}),"\n",(0,c.jsxs)(s.p,{children:["\u9019\u662f JavaScript \u64c1\u6709\u7684\u7269\u4ef6\u7684\u8868\u793a\uff0c\u9019\u662f ",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u7684\u6839\u6355\u7372\u985e\u578b\u3002\u4efb\u4f55\u4f86\u81ea",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," \u7684\u578b\u5225\u90fd\u662f",(0,c.jsx)(s.code,{children:"JsValue"}),"\uff0c\u9019\u662f\u56e0\u70baJavaScript \u6c92\u6709\u5f37\u578b\u5225\u7cfb\u7d71\uff0c\u56e0\u6b64\u63a5\u53d7\u8b8a\u6578",(0,c.jsx)(s.code,{children:"x"})," \u7684\u4efb\u4f55\u51fd\u6578\u90fd\u4e0d\u5b9a\u7fa9\u5176\u578b\u5225\uff0c\u56e0\u6b64",(0,c.jsx)(s.code,{children:"x"})," \u53ef\u4ee5\u662f\u6709\u6548\u7684JavaScript \u503c\uff1b\u56e0\u6b64",(0,c.jsx)(s.code,{children:"JsValue"}),"\u3002\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528\u63a5\u53d7 ",(0,c.jsx)(s.code,{children:"JsValue"})," \u7684\u5c0e\u5165\u51fd\u6578\u6216\u985e\u578b\uff0c\u90a3\u9ebc\u4efb\u4f55\u5c0e\u5165\u7684\u503c\u5728\u6280\u8853\u4e0a\u90fd\u662f\u6709\u6548\u7684\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"JsValue"})," \u53ef\u4ee5\u88ab\u51fd\u6578\u63a5\u53d7\uff0c\u4f46\u8a72\u51fd\u6578\u53ef\u80fd\u4ecd\u7136\u53ea\u63a5\u53d7\u67d0\u4e9b\u985e\u578b\uff0c\u9019\u53ef\u80fd\u6703\u5c0e\u81f4panic - \u56e0\u6b64\u5728\u4f7f\u7528\u539f\u59cb",(0,c.jsx)(s.code,{children:"wasm-bindgen"})," API \u6642\uff0c\u8acb\u6aa2\u67e5\u5c0e\u5165\u7684JavaScript \u7684\u6587\u6a94\uff0c\u4ee5\u78ba\u5b9a\u662f\u5426\u6703\u5728\u8a72\u503c\u4e0d\u662f\u67d0\u7a2e\u985e\u578b\u6642\u5f15\u767c\u7570\u5e38\uff08panic\uff09\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["_",(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:[(0,c.jsx)(s.code,{children:"JsValue"})," \u6587\u4ef6"]}),"\u3002 _"]}),"\n",(0,c.jsx)(s.h3,{id:"jscast",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:(0,c.jsx)(s.code,{children:"JsCast"})})}),"\n",(0,c.jsxs)(s.p,{children:["Rust \u6709\u4e00\u500b\u5f37\u578b\u5225\u7cfb\u7d71\uff0c\u800c JavaScript\u2026\u6c92\u6709\ud83d\ude1e\u3002\u70ba\u4e86\u8b93 Rust \u4fdd\u6301\u9019\u4e9b\u5f37\u578b\u5225\u4f46\u4ecd\u7136\u65b9\u4fbf\uff0cWebAssembly \u5de5\u4f5c\u5c0f\u7d44\u63d0\u51fa\u4e86\u4e00\u500b\u975e\u5e38\u5de7\u5999\u7684\u7279\u6027 ",(0,c.jsx)(s.code,{children:"JsCast"}),'\u3002\u5b83\u7684\u5de5\u4f5c\u662f\u5e6b\u52a9\u60a8\u5f9e\u4e00\u500bJavaScript "\u985e\u578b" \u8f49\u63db\u5230\u53e6\u4e00\u500b"\u985e\u578b"\uff0c\u9019\u807d\u8d77\u4f86\u5f88\u6a21\u7cca\uff0c\u4f46\u5b83\u610f\u5473\u8457\u5982\u679c\u60a8\u6709\u4e00\u500b\u985e\u578b\uff0c\u60a8\u77e5\u9053\u5b83\u662f\u53e6\u4e00\u500b\u985e\u578b\uff0c\u90a3\u9ebc\u60a8\u53ef\u4ee5\u4f7f\u7528',(0,c.jsx)(s.code,{children:"JsCast "})," \u7684\u51fd\u6578\u5f9e\u4e00\u500b\u578b\u5225\u8df3\u5230\u53e6\u4e00\u500b\u578b\u5225\u3002\u7576\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"web-sys"}),"\u3001",(0,c.jsx)(s.code,{children:"wasm_bindgen"}),"\u3001",(0,c.jsx)(s.code,{children:"js-sys"})," \u6642\uff0c\u4e86\u89e3\u9019\u500b\u5f88\u597d\u7684\u7279\u6027 - \u60a8\u6703\u6ce8\u610f\u5230\u8a31\u591a\u985e\u578b\u5c07\u5f9e\u9019\u4e9b crate \u4e2d\u5be6\u4f5c ",(0,c.jsx)(s.code,{children:"JsCast"}),"\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"JsCast"})," \u63d0\u4f9b\u4e86\u8f49\u63db\u7684\u6aa2\u67e5\u548c\u4e0d\u6aa2\u67e5\u65b9\u6cd5- \u56e0\u6b64\u5728\u904b\u884c\u6642\uff0c\u5982\u679c\u60a8\u4e0d\u78ba\u5b9a\u67d0\u500b\u7269\u4ef6\u662f\u4ec0\u9ebc\u985e\u578b\uff0c\u60a8\u53ef\u4ee5\u5617\u8a66\u5c07\u5176\u8f49\u63db\uff0c\u9019\u5c07\u8fd4\u56de\u53ef\u80fd\u7684\u5931\u6557\u985e\u578b\uff0c\u5982[",(0,c.jsx)(s.code,{children:"Option"}),"] (",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/std/option/enum.Option.html",children:"https://doc.rust-lang.org/std/option/enum.Option.html"}),") \u548c[",(0,c.jsx)(s.code,{children:"Result"}),"](",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/std/result/enum.Result",children:"https://doc.rust-lang.org/std/result/enum.Result"}),". html)\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4e00\u500b\u5e38\u898b\u7684\u4f8b\u5b50\u662f\u5728 ",(0,c.jsx)(s.a,{href:"/demo/zh-Hant/docs/next/concepts/basic-web-technologies/web-sys",children:(0,c.jsx)(s.code,{children:"web-sys"})})," \u4e2d\uff0c\u7576\u60a8\u5617\u8a66\u53d6\u5f97\u4e8b\u4ef6\u7684\u76ee\u6a19\u6642\u3002\u60a8\u53ef\u80fd\u77e5\u9053\u76ee\u6a19\u5143\u7d20\u662f\u4ec0\u9ebc\uff0c\u4f46",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html",children:(0,c.jsx)(s.code,{children:"web_sys::Event"})})," API \u7e3d\u662f\u6703\u56de\u50b3\u4e00\u500b",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html#method.target",children:(0,c.jsx)(s.code,{children:" Option<web_sys::EventTarget>"})}),"\u3002\r\n\u60a8\u9700\u8981\u5c07\u5176\u8f49\u63db\u70ba\u5143\u7d20\u985e\u578b\uff0c\u4ee5\u4fbf\u547c\u53eb\u5176\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-rust",children:'// \u9700\u8981\u5148\u5c0e\u5165\u9019\u500b Trait\r\nuse wasm_bindgen::JsCast;\r\nuse web_sys::{Event, EventTarget, HtmlInputElement, HtmlSelectElement};\r\n\r\nfn handle_event(event: Event) {\r\n    let target: EventTarget = event\r\n        .target()\r\n        .expect("I\'m sure this event has a target!");\r\n\r\n    // \u4e5f\u8a31\u76ee\u6a19\u662f\u4e00\u500b\u9078\u64c7\u5143\u7d20\uff1f\r\n    if let Some(select_element) = target.dyn_ref::<HtmlSelectElement>() {\r\n        // \u505a\u9ede\u5225\u7684\r\n        return;\r\n    }\r\n\r\n    // \u5982\u679c\u5b83\u80fd\u78ba\u5b9a\u4e0d\u662f\u4e00\u500b\u9078\u64c7\u5143\u7d20\uff0c\u90a3\u9ebc\u6211\u53ef\u4ee5\u80af\u5b9a\u5b83\u662f\u4e00\u500b\u8f38\u5165\u5143\u7d20\uff01\r\n    let input_element: HtmlInputElement = target.unchecked_into();\r\n}\n'})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_ref",children:(0,c.jsx)(s.code,{children:"dyn_ref"})})," \u65b9\u6cd5\u662f\u4e00\u500b\u6aa2\u67e5\u7684\u8f49\u63db\uff0c\u56de\u50b3\u4e00\u500b",(0,c.jsx)(s.code,{children:"Option<&T>"}),"\uff0c\u9019\u8868\u793a\u5982\u679c\u8f49\u63db\u5931\u6557\uff0c\u5247\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u539f\u59cb\u985e\u578b\uff0c\u56e0\u6b64\u50b3\u56de",(0,c.jsx)(s.code,{children:"None"}),"\u3002 ",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_into",children:(0,c.jsx)(s.code,{children:"dyn_into"})})," \u65b9\u6cd5\u5c07\u6d88\u8017",(0,c.jsx)(s.code,{children:"self"}),"\uff0c\u9019\u662fRust \u4e2d",(0,c.jsx)(s.code,{children:"into"})," \u65b9\u6cd5\u7684\u7d04\u5b9a\uff0c\u50b3\u56de\u7684\u985e\u578b\u662f",(0,c.jsx)(s.code,{children:"Result<T, Self>"}),"\u3002\u5982\u679c\u8f49\u63db\u5931\u6557\uff0c\u5247\u539f\u59cb\u7684 ",(0,c.jsx)(s.code,{children:"Self"})," \u503c\u5c07\u5728 ",(0,c.jsx)(s.code,{children:"Err"})," \u4e2d\u50b3\u56de\u3002\u60a8\u53ef\u4ee5\u518d\u8a66\u4e00\u6b21\u6216\u5c0d\u539f\u59cb\u985e\u578b\u9032\u884c\u5176\u4ed6\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:[(0,c.jsx)(s.code,{children:"JsCast"})," documentation"]}),"."]})}),"\n",(0,c.jsx)(s.h3,{id:"closure",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:(0,c.jsx)(s.code,{children:"Closure"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Closure"})," \u985e\u578b\u63d0\u4f9b\u4e86\u4e00\u7a2e\u5c07 Rust \u9589\u5305\u50b3\u905e\u5230 JavaScript \u7684\u65b9\u6cd5\uff0c\u51fa\u65bc\u5065\u5168\u6027\u539f\u56e0\uff0c\u50b3\u905e\u7d66 JavaScript \u7684\u9589\u5305\u5fc5\u9808\u5177\u6709 ",(0,c.jsx)(s.code,{children:"'static"})," \u751f\u547d\u9031\u671f\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u9019\u7a2e\u985e\u578b\u662f\u4e00\u500b\u201c\u53e5\u67c4\u201d\uff0c\u9019\u610f\u5473\u8457\u6bcf\u7576\u5b83\u88ab\u4e1f\u68c4\u6642\uff0c\u5b83\u5c07\u4f7f\u5176\u5f15\u7528\u7684 JS \u9589\u5305\u7121\u6548\u3002\u5728 ",(0,c.jsx)(s.code,{children:"Closure"})," \u88ab\u4e1f\u68c4\u5f8c\uff0c\u5c0d JS \u4e2d\u9589\u5305\u7684\u4efb\u4f55\u4f7f\u7528\u90fd\u6703\u5f15\u767c\u7570\u5e38\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u7576\u60a8\u4f7f\u7528\u63a5\u53d7\u578b\u5225",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Function.html",children:(0,c.jsx)(s.code,{children:"&js_sys::Function"})})," \u7684",(0,c.jsx)(s.code,{children:"js-sys"})," \u6216",(0,c.jsx)(s.code,{children:"web-sys"})," API \u6642\uff0c\u901a\u5e38\u6703\u4f7f\u7528",(0,c.jsx)(s.code,{children:"Closure"}),"\u3002\u5728",(0,c.jsx)(s.a,{href:"/demo/zh-Hant/docs/next/concepts/html/events",children:"Events"})," \u9801\u9762\u7684",(0,c.jsxs)(s.a,{href:"/demo/zh-Hant/docs/next/concepts/html/events#using-closure-verbose",children:["Using ",(0,c.jsx)(s.code,{children:"Closure"})," \u90e8\u5206"]})," \u4e2d\u53ef\u4ee5\u627e\u5230Yew \u4e2d\u4f7f\u7528",(0,c.jsx)(s.code,{children:"Closure"})," \u7684\u7bc4\u4f8b\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:[(0,c.jsx)(s.code,{children:"Closure"})," \u6587\u4ef6"]}),"."]})}),"\n",(0,c.jsx)(s.h2,{id:"js-sys",children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/js-sys",children:(0,c.jsx)(s.code,{children:"js-sys"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"js-sys"})," crate \u63d0\u4f9b\u4e86 JavaScript \u6a19\u6e96\u5167\u5efa\u7269\u4ef6\u7684\u7d81\u5b9a/\u5c0e\u5165\uff0c\u5305\u62ec\u5b83\u5011\u7684\u65b9\u6cd5\u548c\u5c6c\u6027\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u9019\u4e0d\u5305\u62ec\u4efb\u4f55 Web API\uff0c\u56e0\u70ba\u9019\u662f ",(0,c.jsx)(s.a,{href:"/demo/zh-Hant/docs/next/concepts/basic-web-technologies/web-sys",children:(0,c.jsx)(s.code,{children:"web-sys"})})," \u7684\u4f5c\u7528\uff01"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/index.html",children:[(0,c.jsx)(s.code,{children:"js-sys"})," \u6587\u4ef6"]}),"."]})}),"\n",(0,c.jsx)(s.h2,{id:"wasm-bindgen-futures",children:(0,c.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})," crate \u63d0\u4f9b\u4e86\u4e00\u500b\u6a4b\u6a11\uff0c\u7528\u65bc\u5c07JavaScript Promise \u985e\u578b\u4f5c\u70baRust ",(0,c.jsx)(s.a,{href:"https://doc.rust-lang.org/stable/std/future/trait.Future.html",children:(0,c.jsx)(s.code,{children:"Future"})})," \u9032\u884c\u8655\u7406\uff0c\u4e26\u5305\u542b\u5c07Rust Future \u8f49\u63db\u70baJavaScript Promise \u7684\u5be6\u7528\u7a0b\u5f0f\u3002\u7576\u5728 Rust\uff08wasm\uff09\u4e2d\u8655\u7406\u975e\u540c\u6b65\u6216\u5176\u4ed6\u963b\u585e\u5de5\u4f5c\u6642\uff0c\u9019\u53ef\u80fd\u5f88\u6709\u7528\uff0c\u4e26\u63d0\u4f9b\u4e86\u8207 JavaScript \u4e8b\u4ef6\u548c JavaScript I/O \u539f\u8a9e\u4e92\u52d5\u7684\u80fd\u529b\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u76ee\u524d\u9019\u500b crate \u4e2d\u6709\u4e09\u500b\u4e3b\u8981\u4ecb\u9762\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/struct.JsFuture.html",children:(0,c.jsx)(s.code,{children:"JsFuture"})})," -\r\n\u4e00\u500b\u4f7f\u7528",(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Promise.html",children:(0,c.jsx)(s.code,{children:"Promise"})})," \u5efa\u69cb\u7684\u985e\u578b\uff0c\u7136\u5f8c\u53ef\u4ee5\u7528\u4f5c",(0,c.jsx)(s.code,{children:"Future<Output=Result<JsValue, JsValue >>"}),"\u3002\u5982\u679c ",(0,c.jsx)(s.code,{children:"Promise"})," \u88ab\u89e3\u6790\uff0c\u9019\u500b ",(0,c.jsx)(s.code,{children:"Future"})," \u5c07\u89e3\u6790\u70ba ",(0,c.jsx)(s.code,{children:"Ok"}),"\uff0c\u5982\u679c ",(0,c.jsx)(s.code,{children:"Promise"})," \u88ab\u62d2\u7d55\uff0c\u5247\u89e3\u6790\u70ba ",(0,c.jsx)(s.code,{children:"Err"}),"\uff0c\u5206\u5225\u5305\u542b ",(0,c.jsx)(s.code,{children:"Promise"})," \u7684\u89e3\u6790\u6216\u62d2\u7d55\u503c\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.future_to_promise.html",children:(0,c.jsx)(s.code,{children:"future_to_promise"})})," -\r\n\u5c07 Rust ",(0,c.jsx)(s.code,{children:"Future<Output=Result<JsValue, JsValue>>"})," \u8f49\u63db\u70ba JavaScript ",(0,c.jsx)(s.code,{children:"Promise"}),"\u3002\u672a\u4f86\u7684\u7d50\u679c\u5c07\u8f49\u63db\u70ba JavaScript \u4e2d\u7684\u5df2\u89e3\u6790\u6216\u5df2\u62d2\u7d55 ",(0,c.jsx)(s.code,{children:"Promise"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,c.jsx)(s.code,{children:"spawn_local"})})," -\r\n\u5728\u76ee\u524d\u57f7\u884c\u7dd2\u4e0a\u7522\u751f\u4e00\u500b ",(0,c.jsx)(s.code,{children:"Future<Output = ()>"}),"\u3002\u9019\u662f\u5728 Rust \u4e2d\u904b\u884c Future \u7684\u6700\u4f73\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u5c07\u5176\u767c\u9001\u5230 JavaScript\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/index.html",children:[(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})," \u6587\u4ef6"]}),"."]})}),"\n",(0,c.jsx)(s.h3,{id:"spawn_local",children:(0,c.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,c.jsx)(s.code,{children:"spawn_local"})})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"spawn_local"})," \u5c07\u662f Yew \u4e2d ",(0,c.jsx)(s.code,{children:"wasm-bindgen-futures"})," crate \u4e2d\u6700\u5e38\u7528\u7684\u90e8\u5206\uff0c\u56e0\u70ba\u9019\u6709\u52a9\u65bc\u4f7f\u7528\u5177\u6709\u975e\u540c\u6b65 API \u7684\u51fd\u5f0f\u5eab\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-rust",metastring:",no_run",children:'use web_sys::console;\r\nuse wasm_bindgen_futures::spawn_local;\r\n\r\nasync fn my_async_fn() -> String { String::from("Hello") }\r\n\r\nspawn_local(async {\r\n    let mut string = my_async_fn().await;\r\n    string.push_str(", world!");\r\n    // \u5217\u5370 "Hello, world!"\r\n    console::log_1(&string.into());\r\n});\n'})}),"\n",(0,c.jsxs)(s.p,{children:["Yew \u9084\u5728\u67d0\u4e9b API \u4e2d\u6dfb\u52a0\u4e86\u5c0d futures \u7684\u652f\u6301\uff0c\u6700\u503c\u5f97\u6ce8\u610f\u7684\u662f\u60a8\u53ef\u4ee5\u5275\u5efa\u4e00\u500b\u63a5\u53d7 ",(0,c.jsx)(s.code,{children:"async"})," \u5340\u584a\u7684 ",(0,c.jsx)(s.code,{children:"callback_future"})," - \u9019\u5728\u5167\u90e8\u4f7f\u7528\u4e86 ",(0,c.jsx)(s.code,{children:"spawn_local"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsxs)(s.em,{children:[(0,c.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:[(0,c.jsx)(s.code,{children:"spawn_local"})," \u6587\u4ef6"]}),"."]})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var c=n(6540);const r={},d=c.createContext(r);function i(e){const s=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(d.Provider,{value:s},e.children)}}}]);