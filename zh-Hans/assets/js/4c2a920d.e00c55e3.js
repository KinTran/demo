"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9666],{6220:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var d=c(4848),s=c(8453);const t={title:"\u5de5\u4f5c\u539f\u7406",description:"\u5173\u4e8e\u6846\u67b6\u7684\u5e95\u5c42\u7ec6\u8282"},r="\u5e95\u5c42\u5e93\u7684\u5185\u90e8\u7ec6\u8282",o={id:"advanced-topics/how-it-works",title:"\u5de5\u4f5c\u539f\u7406",description:"\u5173\u4e8e\u6846\u67b6\u7684\u5e95\u5c42\u7ec6\u8282",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-topics/how-it-works.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/how-it-works",permalink:"/zh-Hans/docs/next/advanced-topics/how-it-works",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/how-it-works.mdx",tags:[],version:"current",frontMatter:{title:"\u5de5\u4f5c\u539f\u7406",description:"\u5173\u4e8e\u6846\u67b6\u7684\u5e95\u5c42\u7ec6\u8282"},sidebar:"docs",previous:{title:"Advanced topics",permalink:"/zh-Hans/docs/next/category/advanced-topics"},next:{title:"\u7b80\u4ecb",permalink:"/zh-Hans/docs/next/advanced-topics/struct-components/introduction"}},i={},l=[{value:"<code>html!</code> \u5b8f\u7684\u5185\u90e8",id:"html-\u5b8f\u7684\u5185\u90e8",level:2},{value:"\u4ec0\u4e48\u662f\u865a\u62df DOM\uff1f",id:"\u4ec0\u4e48\u662f\u865a\u62df-dom",level:2},{value:"Yew \u8c03\u5ea6\u5668\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af",id:"yew-\u8c03\u5ea6\u5668\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af",level:2},{value:"\u8fdb\u4e00\u6b65\u9605\u8bfb",id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u5e95\u5c42\u5e93\u7684\u5185\u90e8\u7ec6\u8282",children:"\u5e95\u5c42\u5e93\u7684\u5185\u90e8\u7ec6\u8282"})}),"\n",(0,d.jsxs)(n.h2,{id:"html-\u5b8f\u7684\u5185\u90e8",children:[(0,d.jsx)(n.code,{children:"html!"})," \u5b8f\u7684\u5185\u90e8"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"html!"})," macro \u4f1a\u5c06\u4f7f\u7528\u7c7b\u4f3c HTML \u7684\u81ea\u5b9a\u4e49\u8bed\u6cd5\u7f16\u5199\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a\u6709\u6548\u7684 Rust \u4ee3\u7801\u3002\u4f7f\u7528\u8fd9\u4e2a\u5b8f\u5bf9\u4e8e\u5f00\u53d1 Yew \u5e94\u7528\u7a0b\u5e8f\u5e76\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u662f\u662f\u63a8\u8350\u7684\u3002\u8fd9\u4e2a\u5b8f\u751f\u6210\u7684\u4ee3\u7801\u4f7f\u7528\u4e86 Yew \u7684\u516c\u5171\u5e93 API\uff0c\u5982\u679c\u4f60\u613f\u610f\u7684\u8bdd\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002\u8bf7\u6ce8\u610f\uff0c\u6709\u4e9b\u65b9\u6cd5\u662f\u6709\u610f\u672a\u8bb0\u5f55\u7684\uff0c\u4ee5\u907f\u514d\u610f\u5916\u7684\u8bef\u7528\u3002\u968f\u7740 ",(0,d.jsx)(n.code,{children:"yew-macro"})," \u7684\u6bcf\u6b21\u66f4\u65b0\uff0c\u751f\u6210\u7684\u4ee3\u7801\u5c06\u4f1a\u66f4\u52a0\u9ad8\u6548\uff0c\u5e76\u4e14\u53ef\u4ee5\u5904\u7406\u4efb\u4f55\u7834\u574f\u6027\u7684\u66f4\u6539\uff0c\u800c\u4e0d\u9700\u8981\u5bf9 ",(0,d.jsx)(n.code,{children:"html!"})," \u8bed\u6cd5\u8fdb\u884c\u5f88\u591a\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u4fee\u6539\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,d.jsx)(n.code,{children:"html!"})," \u5b8f\u5141\u8bb8\u60a8\u4ee5\u58f0\u660e\u5f0f\u7684\u98ce\u683c\u7f16\u5199\u4ee3\u7801\uff0c\u56e0\u6b64\u60a8\u7684 UI \u5e03\u5c40\u4ee3\u7801\u5c06\u4e0e\u4e3a\u9875\u9762\u751f\u6210\u7684 HTML \u975e\u5e38\u76f8\u4f3c\u3002\u968f\u7740\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u66f4\u52a0\u4ea4\u4e92\u5f0f\uff0c\u60a8\u7684\u4ee3\u7801\u5e93\u53d8\u5f97\u66f4\u5927\uff0c\u8fd9\u79cd\u65b9\u5f0f\u53d8\u5f97\u8d8a\u6765\u8d8a\u6709\u7528\u3002\u4e0e\u624b\u52a8\u7f16\u5199\u6240\u6709\u64cd\u4f5c DOM \u7684\u4ee3\u7801\u76f8\u6bd4\uff0c\u5b8f\u4f1a\u4e3a\u60a8\u5904\u7406\u597d\u8fd9\u4e00\u5207\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"html!"})," \u5b8f\u53ef\u80fd\u4f1a\u8ba9\u4eba\u611f\u5230\u975e\u5e38\u795e\u5947\uff0c\u4f46\u5b83\u5e76\u6ca1\u6709\u4ec0\u4e48\u53ef\u9690\u85cf\u7684\u3002\u5982\u679c\u60a8\u5bf9\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u611f\u5230\u597d\u5947\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5c55\u5f00\u60a8\u7a0b\u5e8f\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"html!"})," \u5b8f\u8c03\u7528\u3002\u6709\u4e00\u4e2a\u6709\u7528\u7684\u547d\u4ee4\u53eb\u505a ",(0,d.jsx)(n.code,{children:"cargo expand"}),"\uff0c\u5b83\u5141\u8bb8\u60a8\u67e5\u770b Rust \u5b8f\u7684\u5c55\u5f00\u3002",(0,d.jsx)(n.code,{children:"cargo expand"})," \u5e76\u4e0d\u662f\u9ed8\u8ba4\u968f ",(0,d.jsx)(n.code,{children:"cargo"})," \u4e00\u8d77\u63d0\u4f9b\u7684\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u5b89\u88c5\u5b83\uff0c\u60a8\u9700\u8981\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"cargo install cargo-expand"})," \u6765\u5b89\u88c5\u5b83\u3002",(0,d.jsx)(n.a,{href:"https://rust-analyzer.github.io/",children:"Rust-Analyzer"})," \u4e5f\u63d0\u4f9b\u4e86\u4e00\u79cd",(0,d.jsx)(n.a,{href:"https://rust-analyzer.github.io/manual.html#expand-macro-recursively",children:"\u4ece IDE \u4e2d\u83b7\u53d6\u5b8f\u8f93\u51fa\u7684\u673a\u5236"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"html!"})," \u5b8f\u7684\u8f93\u51fa\u901a\u5e38\u975e\u5e38\u7b80\u6d01\uff01\u8fd9\u662f\u4e00\u4e2a\u7279\u6027\uff1a\u673a\u5668\u751f\u6210\u7684\u4ee3\u7801\u6709\u65f6\u53ef\u80fd\u4f1a\u4e0e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5176\u4ed6\u4ee3\u7801\u51b2\u7a81\u3002\u4e3a\u4e86\u9632\u6b62\u95ee\u9898\uff0c",(0,d.jsx)(n.code,{children:"proc_macro"})," \u9075\u5faa\u4e86\u201c\u536b\u751f\u201d\u89c4\u5219\u3002\u4e00\u4e9b\u4f8b\u5b50\u5305\u62ec\uff1a"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u5f15\u7528 Yew \u5305\uff0c\u5b8f\u751f\u6210\u7684\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"::yew::<module>"}),"\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"yew::<module>"}),"\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"::alloc::vec::Vec::new()"})," \u800c\u4e0d\u662f\u76f4\u63a5\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"Vec::new()"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u7531\u4e8e\u53ef\u80fd\u5b58\u5728 trait \u65b9\u6cd5\u540d\u79f0\u51b2\u7a81\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"<Type as Trait>"})," \u6765\u786e\u4fdd\u6211\u4eec\u4f7f\u7528\u7684\u662f\u6b63\u786e\u7684 trait \u6210\u5458\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u865a\u62df-dom",children:"\u4ec0\u4e48\u662f\u865a\u62df DOM\uff1f"}),"\n",(0,d.jsx)(n.p,{children:'DOM\uff08"\u6587\u6863\u5bf9\u8c61\u6a21\u578b"\uff09\u662f\u7531\u6d4f\u89c8\u5668\u7ba1\u7406\u7684 HTML \u5185\u5bb9\u7684\u8868\u793a\u3002"\u865a\u62df" DOM \u53ea\u662f DOM \u7684\u4e00\u4e2a\u5185\u5b58\u4e2d\u7684\u526f\u672c\u3002\u7ba1\u7406\u865a\u62df DOM \u4f1a\u5bfc\u81f4\u66f4\u9ad8\u7684\u5185\u5b58\u5f00\u9500\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u907f\u514d\u6216\u5ef6\u8fdf\u4f7f\u7528\u6d4f\u89c8\u5668 API \u6765\u5b9e\u73b0\u6279\u5904\u7406\u548c\u66f4\u5feb\u7684\u8bfb\u53d6\u3002'}),"\n",(0,d.jsx)(n.p,{children:'\u5728\u5185\u5b58\u4e2d\u62e5\u6709 DOM \u7684\u526f\u672c\u5bf9\u4e8e\u4fc3\u8fdb\u4f7f\u7528\u58f0\u660e\u5f0f UI \u7684\u5e93\u662f\u6709\u5e2e\u52a9\u7684\u3002\u4e0e\u9700\u8981\u7279\u5b9a\u4ee3\u7801\u6765\u63cf\u8ff0\u5982\u4f55\u6839\u636e\u7528\u6237\u4e8b\u4ef6\u4fee\u6539 DOM \u4e0d\u540c\uff0c\u5e93\u53ef\u4ee5\u4f7f\u7528\u4e00\u79cd\u901a\u7528\u7684\u65b9\u6cd5\u6765\u8fdb\u884c DOM "diffing"\u3002\u5f53 Yew \u7ec4\u4ef6\u66f4\u65b0\u5e76\u5e0c\u671b\u66f4\u6539\u5176\u5448\u73b0\u65b9\u5f0f\u65f6\uff0cYew \u5e93\u5c06\u6784\u5efa\u865a\u62df DOM \u7684\u7b2c\u4e8c\u4e2a\u526f\u672c\uff0c\u5e76\u76f4\u63a5\u5c06\u5176\u4e0e\u955c\u50cf\u5f53\u524d\u5c4f\u5e55\u4e0a\u7684\u5185\u5bb9\u7684\u865a\u62df DOM \u8fdb\u884c\u6bd4\u8f83\u3002\u4e24\u8005\u4e4b\u95f4\u7684 "diff"\uff08\u5dee\u5f02\uff09\u53ef\u4ee5\u5206\u89e3\u4e3a\u589e\u91cf\u66f4\u65b0\uff0c\u5e76\u4e0e\u6d4f\u89c8\u5668 API \u4e00\u8d77\u5e94\u7528\u3002\u4e00\u65e6\u66f4\u65b0\u5e94\u7528\uff0c\u65e7\u7684\u865a\u62df DOM \u526f\u672c\u5c06\u88ab\u4e22\u5f03\uff0c\u65b0\u7684\u526f\u672c\u5c06\u88ab\u4fdd\u5b58\u4ee5\u4f9b\u5c06\u6765\u7684\u5dee\u5f02\u68c0\u67e5\u3002'}),"\n",(0,d.jsx)(n.p,{children:'\u8fd9\u79cd "diff" \u7b97\u6cd5\u53ef\u4ee5\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u8fdb\u884c\u4f18\u5316\uff0c\u4ee5\u63d0\u9ad8\u590d\u6742\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002\u7531\u4e8e Yew \u5e94\u7528\u7a0b\u5e8f\u662f\u901a\u8fc7 WebAssembly \u8fd0\u884c\u7684\uff0c\u6211\u4eec\u76f8\u4fe1 Yew \u5728\u672a\u6765\u91c7\u7528\u66f4\u590d\u6742\u7684\u7b97\u6cd5\u65b9\u9762\u5177\u6709\u7ade\u4e89\u4f18\u52bf\u3002'}),"\n",(0,d.jsx)(n.p,{children:'Yew \u7684\u865a\u62df DOM \u4e0e\u6d4f\u89c8\u5668 DOM \u4e0d\u5b8c\u5168\u4e00\u4e00\u5bf9\u5e94\u3002\u5b83\u8fd8\u5305\u62ec\u7528\u4e8e\u7ec4\u7ec7 DOM \u5143\u7d20\u7684 "\u5217\u8868" \u548c "\u7ec4\u4ef6"\u3002\u5217\u8868\u53ef\u4ee5\u7b80\u5355\u5730\u662f\u5143\u7d20\u7684\u6709\u5e8f\u5217\u8868\uff0c\u4f46\u4e5f\u53ef\u4ee5\u66f4\u5f3a\u5927\u3002\u901a\u8fc7\u4e3a\u6bcf\u4e2a\u5217\u8868\u5143\u7d20\u6dfb\u52a0 "key" \u6ce8\u89e3\uff0c\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5e2e\u52a9 Yew \u8fdb\u884c\u989d\u5916\u7684\u4f18\u5316\uff0c\u4ee5\u786e\u4fdd\u5728\u5217\u8868\u66f4\u6539\u65f6\uff0c\u8ba1\u7b97\u5dee\u5f02\u66f4\u65b0\u6240\u9700\u7684\u5de5\u4f5c\u91cf\u6700\u5c0f\u3002\u540c\u6837\uff0c\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u6307\u793a\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\uff0c\u4ee5\u5e2e\u52a9\u63d0\u9ad8\u6027\u80fd\u3002'}),"\n",(0,d.jsx)(n.h2,{id:"yew-\u8c03\u5ea6\u5668\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af",children:"Yew \u8c03\u5ea6\u5668\u548c\u7ec4\u4ef6\u8303\u56f4\u7684\u4e8b\u4ef6\u5faa\u73af"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.em,{children:["\u8d21\u732e\u6587\u6863 - \u6df1\u5165\u89e3\u91ca ",(0,d.jsx)(n.code,{children:"yew::scheduler"})," \u548c ",(0,d.jsx)(n.code,{children:"yew::html::scope"})," \u7684\u5de5\u4f5c\u539f\u7406"]})}),"\n",(0,d.jsx)(n.h2,{id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",children:"\u8fdb\u4e00\u6b65\u9605\u8bfb"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.rust-lang.org/stable/book/ch19-06-macros.html",children:"Rust \u624b\u518c\u4e2d\u5173\u4e8e\u5b8f\u7684\u66f4\u591a\u4fe1\u606f"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.a,{href:"https://github.com/dtolnay/cargo-expand",children:[(0,d.jsx)(n.code,{children:"cargo-expand"})," \u7684\u66f4\u591a\u4fe1\u606f"]})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.a,{href:"https://docs.rs/yew/*/yew/virtual_dom/index.html",children:[(0,d.jsx)(n.code,{children:"yew::virtual_dom"})," \u7684 API \u6587\u6863"]})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>o});var d=c(6540);const s={},t=d.createContext(s);function r(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);