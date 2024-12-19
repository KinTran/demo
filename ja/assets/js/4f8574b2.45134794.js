"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2745],{1275:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(4848),t=s(8453);const i={title:"Agents",description:"Yew's Actor System"},c=void 0,o={id:"concepts/agents",title:"Agents",description:"Yew's Actor System",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-0.20/concepts/agents.mdx",sourceDirName:"concepts",slug:"/concepts/agents",permalink:"/demo/ja/docs/0.20/concepts/agents",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/agents.mdx",tags:[],version:"0.20",frontMatter:{title:"Agents",description:"Yew's Actor System"},sidebar:"docs",previous:{title:"Conditional rendering",permalink:"/demo/ja/docs/0.20/concepts/html/conditional-rendering"},next:{title:"Contexts",permalink:"/demo/ja/docs/0.20/concepts/contexts"}},d={},l=[{value:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",level:2},{value:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u7a2e\u985e",id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u7a2e\u985e",level:2},{value:"Reaches",id:"reaches",level:3},{value:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u3084\u308a\u53d6\u308a",id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u3084\u308a\u53d6\u308a",level:2},{value:"Bridges",id:"bridges",level:3},{value:"Dispatchers",id:"dispatchers",level:3},{value:"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9",id:"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}];function a(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f Angular \u306e",(0,r.jsx)(n.a,{href:"https://angular.io/guide/architecture-services",children:"\u30b5\u30fc\u30d3\u30b9"}),"\u306b\u4f3c\u3066\u304a\u308a(\u305f\u3060\u3057\u4f9d\u5b58\u6027\u30a4\u30f3\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u306f\u3042\u308a\u307e\u305b\u3093)\u3001\r\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Actor_model",children:"\u30a2\u30af\u30bf\u30fc\u30e2\u30c7\u30eb"}),"\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\r\n\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u968e\u5c64\u306e\u3069\u3053\u306b\u4f4d\u7f6e\u3059\u308b\u304b\u306b\u95a2\u308f\u3089\u305a\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3057\u305f\u308a\u3001\u5171\u6709\u72b6\u614b\u3092\u4f5c\u6210\u3057\u305f\u308a\u3001UI \u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u304b\u3089\u8a08\u7b97\u91cf\u306e\u591a\u3044\u30bf\u30b9\u30af\u3092\u30aa\u30d5\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\r\n\u307e\u305f\u3001Yew \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30bf\u30d6\u3092\u307e\u305f\u3044\u3067\u901a\u4fe1\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30b5\u30dd\u30fc\u30c8\u3082(\u5c06\u6765\u7684\u306b\u306f)\u8a08\u753b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u4e26\u884c\u306b\u52d5\u304f\u3088\u3046\u306b Yew \u306f",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",children:"web-workers"}),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",children:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/42674621/79125224-b6481d80-7d95-11ea-8e6a-ab9b52d1d8ac.png",alt:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u7a2e\u985e",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u7a2e\u985e"}),"\n",(0,r.jsx)(n.h3,{id:"reaches",children:"Reaches"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Context - Context \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u5e38\u306b\u6700\u5927 1 \u3064\u5b58\u5728\u3057\u307e\u3059\u3002\r\nBridges \u306f\u3001UI \u30b9\u30ec\u30c3\u30c9\u4e0a\u3067\u65e2\u306b\u30b9\u30dd\u30fc\u30f3\u3055\u308c\u305f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u30b9\u30dd\u30fc\u30f3\u3059\u308b\u304b\u3001\u63a5\u7d9a\u3057\u307e\u3059\u3002\r\n\u3053\u308c\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u307e\u305f\u306f\u4ed6\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u9593\u306e\u72b6\u614b\u3092\u8abf\u6574\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\r\n\u3053\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306b Bridges \u304c\u63a5\u7d9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u6d88\u6ec5\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Job - \u65b0\u3057\u3044\u30d6\u30ea\u30c3\u30b8\u3054\u3068\u306b UI \u30b9\u30ec\u30c3\u30c9\u4e0a\u3067\u65b0\u3057\u3044\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u30b9\u30dd\u30fc\u30f3\u3057\u307e\u3059\u3002\r\n\u3053\u308c\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u3068\u901a\u4fe1\u3059\u308b\u5171\u6709\u3055\u308c\u3066\u3044\u308b\u304c\u72ec\u7acb\u3057\u305f\u52d5\u4f5c\u3092\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5916\u306b\u79fb\u52d5\u3055\u305b\u308b\u306e\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002\r\n(TODO \u78ba\u8a8d) \u30bf\u30b9\u30af\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u6d88\u3048\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Public - Context \u3068\u540c\u3058\u3067\u3059\u304c\u3001\u72ec\u81ea\u306e web worker \u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Private - Job \u3068\u540c\u3058\u3067\u3059\u304c\u3001\u72ec\u81ea\u306e web worker \u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Global (WIP)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u3084\u308a\u53d6\u308a",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u3084\u308a\u53d6\u308a"}),"\n",(0,r.jsx)(n.h3,{id:"bridges",children:"Bridges"}),"\n",(0,r.jsx)(n.p,{children:"Bridge \u306f\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u306e\u53cc\u65b9\u5411\u901a\u4fe1\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\r\n\u307e\u305f\u3001Bridge \u306f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u540c\u58eb\u306e\u901a\u4fe1\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"dispatchers",children:"Dispatchers"}),"\n",(0,r.jsx)(n.p,{children:"Dispatcher \u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u9593\u306e\u4e00\u65b9\u5411\u901a\u4fe1\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\r\nDispatcher \u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9",children:"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9"}),"\n",(0,r.jsxs)(n.p,{children:["\u72ec\u81ea\u306e\u72ec\u7acb\u3057\u305f web worker(\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u3068\u30d1\u30d6\u30ea\u30c3\u30af)\u306b\u3042\u308b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u9001\u53d7\u4fe1\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u3059\u308b\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u304c\u767a\u751f\u3057\u307e\u3059\u3002\r\n\u4ed6\u306e\u30b9\u30ec\u30c3\u30c9\u3068\u306e\u901a\u4fe1\u306b\u306f",(0,r.jsx)(n.a,{href:"https://github.com/servo/bincode",children:"bincode"}),"\u3092\u4f7f\u7528\u3059\u308b\u306e\u3067\u3001\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3088\u308a\u3082\u30b3\u30b9\u30c8\u306f\u304b\u306a\u308a\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002\r\n\u8a08\u7b97\u30b3\u30b9\u30c8\u304c\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d7\u3051\u6e21\u3057\u30b3\u30b9\u30c8\u3092\u4e0a\u56de\u308b\u5834\u5408\u3092\u9664\u304d\u3001\u30ed\u30b8\u30c3\u30af\u3092 UI \u30b9\u30ec\u30c3\u30c9\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8(Job \u307e\u305f\u306f Context)\u306b\u683c\u7d0d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003\u8cc7\u6599",children:"\u53c2\u8003\u8cc7\u6599"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/web_worker_fib",children:"web_worker_fib"}),"\u306e\u4f8b\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3069\u306e\u3088\u3046\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u901a\u4fe1\u3055\u305b\u3066\u3044\u308b\u304b\u304c\u308f\u304b\u308a\u307e\u3059\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);