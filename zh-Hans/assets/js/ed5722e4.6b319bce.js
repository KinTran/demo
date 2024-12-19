"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7267],{9959:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var s=c(4848),d=c(8453);const o={title:"\u5b9e\u73b0\u8bf4\u660e",description:"\u6709\u5173\u6846\u67b6\u7684\u5e95\u5c42\u7ec6\u8282"},i="\u5e95\u5c42\u5e93\u7684\u5185\u90e8\u7ec6\u8282",t={id:"advanced-topics/how-it-works",title:"\u5b9e\u73b0\u8bf4\u660e",description:"\u6709\u5173\u6846\u67b6\u7684\u5e95\u5c42\u7ec6\u8282",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.18.0/advanced-topics/how-it-works.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/how-it-works",permalink:"/zh-Hans/docs/0.18.0/advanced-topics/how-it-works",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/advanced-topics/how-it-works.mdx",tags:[],version:"0.18.0",frontMatter:{title:"\u5b9e\u73b0\u8bf4\u660e",description:"\u6709\u5173\u6846\u67b6\u7684\u5e95\u5c42\u7ec6\u8282"},sidebar:"docs",previous:{title:"Agents",permalink:"/zh-Hans/docs/0.18.0/concepts/agents"},next:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/zh-Hans/docs/0.18.0/advanced-topics/optimizations"}},r={},l=[{value:"\u6f5c\u85cf\u5728 <code>html!</code> \u5b8f\u4e4b\u4e0b",id:"\u6f5c\u85cf\u5728-html-\u5b8f\u4e4b\u4e0b",level:2},{value:"\u4ec0\u4e48\u662f\u865a\u62df DOM\uff1f",id:"\u4ec0\u4e48\u662f\u865a\u62df-dom",level:2},{value:"Yew \u8c03\u5ea6\u7a0b\u5e8f\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af",id:"yew-\u8c03\u5ea6\u7a0b\u5e8f\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af",level:2},{value:"\u8fdb\u4e00\u6b65\u9605\u8bfb\uff1a",id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5e95\u5c42\u5e93\u7684\u5185\u90e8\u7ec6\u8282",children:"\u5e95\u5c42\u5e93\u7684\u5185\u90e8\u7ec6\u8282"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u6f5c\u85cf\u5728-html-\u5b8f\u4e4b\u4e0b",children:["\u6f5c\u85cf\u5728 ",(0,s.jsx)(n.code,{children:"html!"})," \u5b8f\u4e4b\u4e0b"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"html!"}),"\u5b8f\u4f1a\u5c06\u4ee5\u81ea\u5b9a\u4e49 HTML \u683c\u5f0f\u7684\u8bed\u6cd5\u7f16\u5199\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a\u6709\u6548\u7684 Rust \u4ee3\u7801\u3002\u5c3d\u7ba1\u53ef\u4ee5\u4e0d\u4f7f\u7528\u6b64\u5b8f\u6765\u5f00\u53d1 Yew \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u4e0d\u63a8\u8350\u8fd9\u4e48\u505a\u3002\u8be5\u5b8f\u751f\u6210\u7684\u4ee3\u7801\u4f7f\u7528\u7684\u662f Yew \u516c\u5171\u5e93\u7684 API\uff0c\u5982\u679c\u4f60\u613f\u610f\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u76f8\u5e94\u7684 API \u4f5c\u4e3a\u66ff\u4ee3\u3002\u53e6\u5916\u8bf7\u6ce8\u610f\uff0c\u67d0\u4e9b\u65b9\u6cd5\u662f\u6545\u610f\u4e0d\u5199\u5165\u6587\u6863\u7684\uff0c\u9700\u8981\u591a\u52a0\u7559\u610f\uff0c\u907f\u514d\u610f\u5916\u4f7f\u7528\u3002 ",(0,s.jsx)(n.code,{children:"yew-macro"}),"\u6bcf\u6b21\u66f4\u65b0\uff0c\u751f\u6210\u7684\u4ee3\u7801\u5c06\u66f4\u52a0\u9ad8\u6548\uff0c\u5f53\u5176\u5b58\u5728\u91cd\u5927\u4fee\u6539\u65f6\uff0c\u53ea\u9700\u5bf9",(0,s.jsx)(n.code,{children:"html!"}),"\u7684\u8bed\u6cd5\u8fdb\u884c\u5c11\u91cf\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u4fee\u6b63\u5c31\u80fd\u5e94\u5bf9\u8fd9\u4e2a\u60c5\u51b5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u4e3a",(0,s.jsx)(n.code,{children:"html!"}),"\u5b8f\u5141\u8bb8\u60a8\u901a\u8fc7\u58f0\u660e\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u6837\u5f0f\u7684\u7f16\u5199\uff0c\u60a8\u7684 UI \u5e03\u5c40\u4ee3\u7801\u5c06\u4e0e\u5728\u9875\u9762\u4e0a\u751f\u6210\u7684 HTML \u7d27\u5bc6\u5339\u914d\u3002\u968f\u7740\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u66f4\u5177\u4ea4\u4e92\u6027\u5e76\u4e14\u4ee3\u7801\u5e93\u8d8a\u6765\u8d8a\u5927\uff0c\u6b64\u529f\u80fd\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u6709\u7528\u3002\u65e0\u9700\u624b\u52a8\u7f16\u5199\u6240\u6709\u4ee3\u7801\u6765\u64cd\u4f5c DOM\uff0c\u5b8f\u4f1a\u4e3a\u60a8\u5904\u7406\u597d\u8fd9\u4e9b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"html!"}),"\u5b8f\u7ed9\u4eba\u7684\u611f\u89c9\u50cf\u662f\u9b54\u672f\u3002\u5982\u679c\u60a8\u5bf9\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f\u611f\u5230\u597d\u5947\uff0c\u8bf7\u5c1d\u8bd5\u6269\u5c55",(0,s.jsx)(n.code,{children:"html!"}),"\u7a0b\u5e8f\u4e2d\u7684\u5b8f\u8c03\u7528\u3002\u6709\u4e00\u4e2a\u6709\u7528\u7684\u547d\u4ee4\uff0c\u53eb",(0,s.jsx)(n.code,{children:"cargo expand"})," \uff0c\u5b83\u4f7f\u60a8\u53ef\u4ee5\u67e5\u770b Rust \u5b8f\u7684\u6269\u5c55\u3002 \u7531\u4e8e",(0,s.jsx)(n.code,{children:"cargo expand"}),"\u8fd8\u672a\u9644\u5e26\u5728",(0,s.jsx)(n.code,{children:"cargo"}),"\u4e2d\uff0c\u5982\u679c\u5c1a\u672a\u5b89\u88c5\uff0c\u9700\u8981\u5148\u8fd0\u884c",(0,s.jsx)(n.code,{children:"cargo install cargo-expand"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u5728\u67e5\u770b\u6269\u5c55\u7684\u5b8f\u4ee3\u7801\u65f6\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u5f02\u5e38\u5197\u957f\u7684\u4ee3\u7801\u3002\u56e0\u4e3a\u751f\u6210\u7684\u4ee3\u7801\u6709\u65f6\u53ef\u80fd\u4f1a\u4e0e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5176\u4ed6\u4ee3\u7801\u51b2\u7a81\u3002\u4e3a\u4e86\u9632\u6b62\u51fa\u73b0\u95ee\u9898\uff0c\u8bf7\u4fdd\u6301",(0,s.jsx)(n.code,{children:"proc_macro"})," \u7684\u201c\u536b\u751f\u201d\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"::yew::<module>"})," \u800c\u4e0d\u662f ",(0,s.jsx)(n.code,{children:"yew::<module>"})," \u6765\u4fdd\u8bc1\u5bf9 Yew \u5305\u7684\u6b63\u786e\u5f15\u7528\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u547c\u5401\u4f7f\u7528",(0,s.jsx)(n.code,{children:"::alloc::vec::Vec::new()"}),"\u6765\u4ee3\u66ff",(0,s.jsx)(n.code,{children:"Vec::new()"}),"\u8c03\u7528\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e3a\u4e86\u907f\u514d\u6f5c\u5728\u7684 trait \u65b9\u6cd5\u540d\u79f0\u51b2\u7a81\uff0c\u4f7f\u7528",(0,s.jsx)(n.code,{children:"<Type as Trait>"}),"\u6765\u786e\u4fdd\u6211\u4eec\u4f7f\u7528\u7684\u662f\u6b63\u786e\u7684 trait\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u865a\u62df-dom",children:"\u4ec0\u4e48\u662f\u865a\u62df DOM\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"DOM\uff08\u201c\u6587\u6863\u5bf9\u8c61\u6a21\u578b\u201d\uff09\u662f HTML \u5185\u5bb9\u7684\u8868\u793a\uff0c\u7531\u60a8\u7684\u7f51\u9875\u7684\u6d4f\u89c8\u5668\u7ba1\u7406\u3002 \u201c\u865a\u62df\u201d DOM \u53ea\u662f\u4fdd\u5b58\u5728\u5e94\u7528\u7a0b\u5e8f\u5185\u5b58\u4e2d\u7684 DOM \u7684\u526f\u672c\u3002\u7ba1\u7406\u865a\u62df DOM \u4f1a\u5bfc\u81f4\u66f4\u9ad8\u7684\u5185\u5b58\u5f00\u9500\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u907f\u514d\u6216\u5ef6\u8fdf\u4f7f\u7528\u6d4f\u89c8\u5668 API \u6765\u5b9e\u73b0\u6279\u5904\u7406\u548c\u66f4\u5feb\u7684\u8bfb\u53d6\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5185\u5b58\u4e2d\u62e5\u6709\u4e00\u4efd DOM \u526f\u672c\u5bf9\u4e8e\u4f7f\u7528\u58f0\u660e\u5f0f UI \u7684\u5e93\u975e\u5e38\u6709\u5e2e\u52a9\uff0c\u5e76\u4e14\u53ef\u4ee5\u4fc3\u8fdb\u4eba\u4eec\u4f7f\u7528\u5b83\u4eec \u3002\u4e0d\u9700\u8981\u7279\u5b9a\u7684\u4ee3\u7801\u6765\u63cf\u8ff0\u5e94\u8be5\u5982\u4f55\u4fee\u6539 DOM \u4ee5\u54cd\u5e94\u7528\u6237\u4e8b\u4ef6\uff0c\u8be5\u5e93\u53ef\u4ee5\u4f7f\u7528 DOM \u201cdiffing\u201d\u7684\u901a\u7528\u65b9\u6cd5\u3002\u5f53 Yew \u7ec4\u4ef6\u66f4\u65b0\u5e76\u60f3\u8981\u66f4\u6539\u5176\u5448\u73b0\u65b9\u5f0f\u65f6\uff0cYew \u5e93\u5c06\u6784\u5efa\u865a\u62df DOM \u7684\u7b2c\u4e8c\u4e2a\u526f\u672c\uff0c\u5e76\u76f4\u63a5\u4e0e\u53cd\u6620\u5f53\u524d\u5c4f\u5e55\u5185\u5bb9\u7684\u865a\u62df DOM \u8fdb\u884c\u6bd4\u8f83\u3002\u4e24\u8005\u4e4b\u95f4\u7684\u5dee\u5f02\u4f1a\u505a\u4e3a\u589e\u91cf\u66f4\u65b0\u7684\u4f9d\u636e\uff0c\u5e76\u901a\u8fc7\u6d4f\u89c8\u5668 API \u6279\u91cf\u64cd\u4f5c\u3002\u5e94\u7528\u66f4\u65b0\u540e\uff0c\u65e7\u7684\u865a\u62df DOM \u526f\u672c\u5c06\u88ab\u4e22\u5f03\uff0c\u800c\u65b0\u526f\u672c\u4f1a\u4fdd\u5b58\u4e0b\u6765\u4ee5\u4f9b\u5c06\u6765\u8fdb\u884c\u5dee\u5f02\u68c0\u67e5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u201cdiff\u201d\u7b97\u6cd5\u53ef\u4ee5\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u8fdb\u884c\u4f18\u5316\uff0c\u4ee5\u63d0\u9ad8\u590d\u6742\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002\u7531\u4e8e Yew \u5e94\u7528\u7a0b\u5e8f\u662f\u4f7f\u7528 WebAssembly \u8fd0\u884c\u7684\uff0c\u6211\u4eec\u76f8\u4fe1\u968f\u7740\u672a\u6765\u7684\u7b97\u6cd5\u6108\u52a0\u590d\u6742\uff0c Yew \u4f1a\u5728\u6027\u80fd\u65b9\u9762\u66f4\u5177\u4f18\u52bf\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Yew \u7684\u865a\u62df DOM \u4e0e\u6d4f\u89c8\u5668 DOM \u5e76\u4e0d\u662f\u5b8c\u5168\u5bf9\u5e94\u7684\u3002\u5b83\u8fd8\u5305\u62ec\u7528\u4e8e\u7ec4\u7ec7 DOM \u5143\u7d20\u7684\u201c\u5217\u8868\u201d\u548c\u201c\u7ec4\u4ef6\u201d\u3002\u5217\u8868\u53ef\u4ee5\u53ea\u662f\u5143\u7d20\u7684\u6709\u5e8f\u5217\u8868\uff0c\u4f46\u4e5f\u53ef\u4ee5\u66f4\u5f3a\u5927\u3002\u901a\u8fc7\u4f7f\u7528\u201ckey\u201d\u6807\u6ce8\u6bcf\u4e2a\u5217\u8868\u5143\u7d20\uff0c\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5e2e\u52a9 Yew \u8fdb\u884c\u989d\u5916\u7684\u4f18\u5316\uff0c\u4ee5\u786e\u4fdd\u5f53\u5217\u8868\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u8ba1\u7b97\u5dee\u5f02\u66f4\u65b0\u7684\u5de5\u4f5c\u91cf\u6700\u5c11\u3002\u540c\u6837\uff0c\u7ec4\u4ef6\u63d0\u4f9b\u81ea\u5b9a\u4e49\u903b\u8f91\u6765\u6307\u793a\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u4ee5\u5e2e\u52a9\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"yew-\u8c03\u5ea6\u7a0b\u5e8f\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af",children:"Yew \u8c03\u5ea6\u7a0b\u5e8f\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["\u5bf9\u6587\u6863\u505a\u51fa\u8d21\u732e\u2013\u89e3\u91ca",(0,s.jsx)(n.code,{children:"yew::scheduler"}),"\u548c",(0,s.jsx)(n.code,{children:"yew::html::scope"}),"\u7684\u5e95\u5c42\u662f\u5982\u4f55\u5de5\u4f5c\u7684"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",children:"\u8fdb\u4e00\u6b65\u9605\u8bfb\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/stable/book/ch19-06-macros.html",children:"\u4ece Rust Book \u4e2d\u4e86\u89e3\u66f4\u591a\u5b8f\u7684\u4fe1\u606f"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://github.com/dtolnay/cargo-expand",children:["\u66f4\u591a\u6709\u5173",(0,s.jsx)(n.code,{children:"cargo-expand"}),"\u7684\u4fe1\u606f"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://docs.rs/yew/*/yew/virtual_dom/index.html",children:["\u5728 API \u6587\u6863\u4e2d\u67e5\u770b",(0,s.jsx)(n.code,{children:"yew::virtual_dom"})]})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>t});var s=c(6540);const d={},o=s.createContext(d);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);