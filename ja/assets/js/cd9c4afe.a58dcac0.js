"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2252],{5762:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var d=c(4848),s=c(8453);const t={title:"\u4ed5\u7d44\u307f",description:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u4f4e\u30ec\u30d9\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066"},r="\u57fa\u672c\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5185\u90e8\u8a73\u7d30",o={id:"advanced-topics/how-it-works",title:"\u4ed5\u7d44\u307f",description:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u4f4e\u30ec\u30d9\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/advanced-topics/how-it-works.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/how-it-works",permalink:"/ja/docs/next/advanced-topics/how-it-works",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/how-it-works.mdx",tags:[],version:"current",frontMatter:{title:"\u4ed5\u7d44\u307f",description:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u4f4e\u30ec\u30d9\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066"},sidebar:"docs",previous:{title:"Advanced topics",permalink:"/ja/docs/next/category/advanced-topics"},next:{title:"\u7d39\u4ecb",permalink:"/ja/docs/next/advanced-topics/struct-components/introduction"}},i={},l=[{value:"<code>html!</code> \u30de\u30af\u30ed\u306e\u5185\u90e8",id:"html-\u30de\u30af\u30ed\u306e\u5185\u90e8",level:2},{value:"\u4eee\u60f3 DOM \u3068\u306f\uff1f",id:"\u4eee\u60f3-dom-\u3068\u306f",level:2},{value:"Yew\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30b9\u30b3\u30fc\u30d7\u306e\u30a4\u30d9\u30f3\u30c8\u30eb\u30fc\u30d7",id:"yew\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30b9\u30b3\u30fc\u30d7\u306e\u30a4\u30d9\u30f3\u30c8\u30eb\u30fc\u30d7",level:2},{value:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269",id:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u57fa\u672c\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5185\u90e8\u8a73\u7d30",children:"\u57fa\u672c\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5185\u90e8\u8a73\u7d30"})}),"\n",(0,d.jsxs)(n.h2,{id:"html-\u30de\u30af\u30ed\u306e\u5185\u90e8",children:[(0,d.jsx)(n.code,{children:"html!"})," \u30de\u30af\u30ed\u306e\u5185\u90e8"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"html!"})," \u30de\u30af\u30ed\u306f\u3001HTML\u306b\u4f3c\u305f\u30ab\u30b9\u30bf\u30e0\u69cb\u6587\u3067\u8a18\u8ff0\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3092\u6709\u52b9\u306aRust\u30b3\u30fc\u30c9\u306b\u5909\u63db\u3057\u307e\u3059\u3002\u3053\u306e\u30de\u30af\u30ed\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306fYew\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30de\u30af\u30ed\u304c\u751f\u6210\u3059\u308b\u30b3\u30fc\u30c9\u306fYew\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30e9\u30a4\u30d6\u30e9\u30eaAPI\u3092\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001\u5e0c\u671b\u3059\u308c\u3070\u76f4\u63a5\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3044\u304f\u3064\u304b\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u610f\u56f3\u7684\u306b\u6587\u66f8\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u8aa4\u7528\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,d.jsx)(n.code,{children:"yew-macro"}),"\u306e\u5404\u66f4\u65b0\u306b\u3088\u308a\u3001\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3088\u308a\u52b9\u7387\u7684\u306b\u306a\u308a\u3001",(0,d.jsx)(n.code,{children:"html!"}),"\u69cb\u6587\u3092\u307b\u3068\u3093\u3069\uff08\u307e\u305f\u306f\u5168\u304f\uff09\u5909\u66f4\u3059\u308b\u3053\u3068\u306a\u304f\u7834\u58ca\u7684\u306a\u5909\u66f4\u3092\u51e6\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"html!"})," \u30de\u30af\u30ed\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5ba3\u8a00\u7684\u306a\u30b9\u30bf\u30a4\u30eb\u3067\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3067\u304d\u308b\u305f\u3081\u3001UI\u30ec\u30a4\u30a2\u30a6\u30c8\u30b3\u30fc\u30c9\u306f\u30da\u30fc\u30b8\u306eHTML\u306b\u975e\u5e38\u306b\u4f3c\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3088\u308a\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306b\u306a\u308a\u3001\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u304c\u5927\u304d\u304f\u306a\u308b\u306b\u3064\u308c\u3066\u3001\u3053\u306e\u65b9\u6cd5\u306f\u307e\u3059\u307e\u3059\u6709\u7528\u306b\u306a\u308a\u307e\u3059\u3002DOM \u64cd\u4f5c\u306e\u3059\u3079\u3066\u306e\u30b3\u30fc\u30c9\u3092\u624b\u52d5\u3067\u8a18\u8ff0\u3059\u308b\u306e\u306b\u6bd4\u3079\u3066\u3001\u30de\u30af\u30ed\u304c\u3053\u308c\u3089\u3059\u3079\u3066\u3092\u51e6\u7406\u3057\u3066\u304f\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"html!"})," \u30de\u30af\u30ed\u306e\u4f7f\u7528\u306f\u975e\u5e38\u306b\u9b54\u6cd5\u306e\u3088\u3046\u306b\u611f\u3058\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u96a0\u3059\u3079\u304d\u3082\u306e\u306f\u4f55\u3082\u3042\u308a\u307e\u305b\u3093\u3002\u305d\u306e\u4ed5\u7d44\u307f\u306b\u8208\u5473\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u5185\u306e ",(0,d.jsx)(n.code,{children:"html!"})," \u30de\u30af\u30ed\u547c\u3073\u51fa\u3057\u3092\u5c55\u958b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002",(0,d.jsx)(n.code,{children:"cargo expand"})," \u3068\u3044\u3046\u4fbf\u5229\u306a\u30b3\u30de\u30f3\u30c9\u304c\u3042\u308a\u3001Rust\u30de\u30af\u30ed\u306e\u5c55\u958b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,d.jsx)(n.code,{children:"cargo expand"})," \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,d.jsx)(n.code,{children:"cargo"})," \u306b\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u307e\u3060\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f ",(0,d.jsx)(n.code,{children:"cargo install cargo-expand"})," \u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,d.jsx)(n.a,{href:"https://rust-analyzer.github.io/",children:"Rust-Analyzer"})," \u3082",(0,d.jsx)(n.a,{href:"https://rust-analyzer.github.io/manual.html#expand-macro-recursively",children:"IDE\u304b\u3089\u30de\u30af\u30ed\u51fa\u529b\u3092\u53d6\u5f97\u3059\u308b\u30e1\u30ab\u30cb\u30ba\u30e0"}),"\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"html!"})," \u30de\u30af\u30ed\u306e\u51fa\u529b\u306f\u901a\u5e38\u975e\u5e38\u306b\u7c21\u6f54\u3067\u3059\uff01\u3053\u308c\u306f\u7279\u5fb4\u3067\u3059\uff1a\u6a5f\u68b0\u751f\u6210\u306e\u30b3\u30fc\u30c9\u306f\u6642\u3005\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u4ed6\u306e\u30b3\u30fc\u30c9\u3068\u885d\u7a81\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u554f\u984c\u3092\u9632\u3050\u305f\u3081\u306b\u3001",(0,d.jsx)(n.code,{children:"proc_macro"})," \u306f\u300c\u885b\u751f\u300d\u30eb\u30fc\u30eb\u306b\u5f93\u3063\u3066\u3044\u307e\u3059\u3002\u3044\u304f\u3064\u304b\u306e\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\uff1a"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Yew\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6b63\u3057\u304f\u53c2\u7167\u3059\u308b\u305f\u3081\u306b\u3001\u30de\u30af\u30ed\u751f\u6210\u30b3\u30fc\u30c9\u3067\u306f ",(0,d.jsx)(n.code,{children:"::yew::<module>"})," \u3092\u4f7f\u7528\u3057\u3001\u76f4\u63a5 ",(0,d.jsx)(n.code,{children:"yew::<module>"})," \u3092\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002\u3053\u308c\u306f ",(0,d.jsx)(n.code,{children:"::alloc::vec::Vec::new()"})," \u3092\u547c\u3073\u51fa\u3059\u306e\u3068\u540c\u3058\u7406\u7531\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u30c8\u30ec\u30a4\u30c8\u30e1\u30bd\u30c3\u30c9\u540d\u306e\u885d\u7a81\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u3001",(0,d.jsx)(n.code,{children:"<Type as Trait>"})," \u3092\u4f7f\u7528\u3057\u3066\u6b63\u3057\u3044\u30c8\u30ec\u30a4\u30c8\u30e1\u30f3\u30d0\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4eee\u60f3-dom-\u3068\u306f",children:"\u4eee\u60f3 DOM \u3068\u306f\uff1f"}),"\n",(0,d.jsx)(n.p,{children:"DOM\uff08\u300c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e2\u30c7\u30eb\u300d\uff09\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u308bHTML\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868\u73fe\u3067\u3059\u3002\u300c\u4eee\u60f3\u300d DOM \u306f\u3001\u5358\u306b\u30e1\u30e2\u30ea\u5185\u306e DOM \u306e\u30b3\u30d4\u30fc\u3067\u3059\u3002\u4eee\u60f3 DOM \u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u3001\u30e1\u30e2\u30ea\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u304c\u5897\u52a0\u3057\u307e\u3059\u304c\u3001\u30d6\u30e9\u30a6\u30b6API\u306e\u4f7f\u7528\u3092\u56de\u907f\u307e\u305f\u306f\u9045\u5ef6\u3055\u305b\u308b\u3053\u3068\u3067\u30d0\u30c3\u30c1\u51e6\u7406\u3068\u9ad8\u901f\u306a\u8aad\u307f\u53d6\u308a\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30e1\u30e2\u30ea\u5185\u306b DOM \u306e\u30b3\u30d4\u30fc\u3092\u6301\u3064\u3053\u3068\u306f\u3001\u5ba3\u8a00\u7684UI\u3092\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u7528\u3092\u4fc3\u9032\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u30a4\u30d9\u30f3\u30c8\u306b\u57fa\u3065\u3044\u3066 DOM \u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u7279\u5b9a\u306e\u30b3\u30fc\u30c9\u304c\u5fc5\u8981\u306a\u5834\u5408\u3068\u306f\u7570\u306a\u308a\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3092\u4f7f\u7528\u3057\u3066 DOM \u306e\u300c\u5dee\u5206\u300d\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Yew\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u66f4\u65b0\u3055\u308c\u3001\u305d\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u65b9\u6cd5\u3092\u5909\u66f4\u3057\u305f\u3044\u5834\u5408\u3001Yew\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4eee\u60f3 DOM \u306e2\u756a\u76ee\u306e\u30b3\u30d4\u30fc\u3092\u69cb\u7bc9\u3057\u3001\u73fe\u5728\u753b\u9762\u4e0a\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u3092\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u4eee\u60f3 DOM \u3068\u76f4\u63a5\u6bd4\u8f03\u3057\u307e\u3059\u3002\u4e21\u8005\u306e\u300c\u5dee\u5206\u300d\u306f\u5897\u5206\u66f4\u65b0\u306b\u5206\u89e3\u3055\u308c\u3001\u30d6\u30e9\u30a6\u30b6API\u3068\u5171\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u66f4\u65b0\u304c\u9069\u7528\u3055\u308c\u308b\u3068\u3001\u53e4\u3044\u4eee\u60f3 DOM \u306e\u30b3\u30d4\u30fc\u306f\u7834\u68c4\u3055\u308c\u3001\u65b0\u3057\u3044\u30b3\u30d4\u30fc\u304c\u5c06\u6765\u306e\u5dee\u5206\u30c1\u30a7\u30c3\u30af\u306e\u305f\u3081\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306e\u300c\u5dee\u5206\u300d\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u3001\u6642\u9593\u306e\u7d4c\u904e\u3068\u3068\u3082\u306b\u6700\u9069\u5316\u3055\u308c\u3001\u8907\u96d1\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Yew\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fWebAssembly\u3092\u4ecb\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u3001Yew\u306f\u5c06\u6765\u7684\u306b\u3088\u308a\u8907\u96d1\u306a\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u63a1\u7528\u3059\u308b\u4e0a\u3067\u7af6\u4e89\u529b\u3092\u6301\u3064\u3068\u4fe1\u3058\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"Yew\u306e\u4eee\u60f3 DOM \u306f\u30d6\u30e9\u30a6\u30b6\u306e DOM \u3068\u5b8c\u5168\u306b\u4e00\u5bfe\u4e00\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002DOM \u8981\u7d20\u3092\u6574\u7406\u3059\u308b\u305f\u3081\u306e\u300c\u30ea\u30b9\u30c8\u300d\u3084\u300c\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u300d\u3082\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306f\u5358\u306b\u8981\u7d20\u306e\u9806\u5e8f\u4ed8\u304d\u30ea\u30b9\u30c8\u3067\u3042\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u3088\u308a\u5f37\u529b\u306a\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u5404\u30ea\u30b9\u30c8\u8981\u7d20\u306b\u300c\u30ad\u30fc\u300d\u6ce8\u91c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u8005\u306f\u30ea\u30b9\u30c8\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u5dee\u5206\u66f4\u65b0\u306e\u8a08\u7b97\u306b\u5fc5\u8981\u306a\u4f5c\u696d\u91cf\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u305f\u3081\u306e\u8ffd\u52a0\u306e\u6700\u9069\u5316\u3092Yew\u306b\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002\u540c\u69d8\u306b\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u5fc5\u8981\u304b\u3069\u3046\u304b\u3092\u793a\u3059\u30ab\u30b9\u30bf\u30e0\u30ed\u30b8\u30c3\u30af\u3092\u63d0\u4f9b\u3057\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"yew\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30b9\u30b3\u30fc\u30d7\u306e\u30a4\u30d9\u30f3\u30c8\u30eb\u30fc\u30d7",children:"Yew\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30b9\u30b3\u30fc\u30d7\u306e\u30a4\u30d9\u30f3\u30c8\u30eb\u30fc\u30d7"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.em,{children:["\u8ca2\u732e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 - ",(0,d.jsx)(n.code,{children:"yew::scheduler"})," \u3068 ",(0,d.jsx)(n.code,{children:"yew::html::scope"})," \u306e\u4ed5\u7d44\u307f\u3092\u8a73\u3057\u304f\u8aac\u660e"]})}),"\n",(0,d.jsx)(n.h2,{id:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269",children:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.rust-lang.org/stable/book/ch19-06-macros.html",children:"Rust\u306e\u30de\u30af\u30ed\u306b\u95a2\u3059\u308b\u8a73\u7d30\u60c5\u5831"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.a,{href:"https://github.com/dtolnay/cargo-expand",children:[(0,d.jsx)(n.code,{children:"cargo-expand"})," \u306b\u95a2\u3059\u308b\u8a73\u7d30\u60c5\u5831"]})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.a,{href:"https://docs.rs/yew/*/yew/virtual_dom/index.html",children:[(0,d.jsx)(n.code,{children:"yew::virtual_dom"})," \u306eAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>o});var d=c(6540);const s={},t=d.createContext(s);function r(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);