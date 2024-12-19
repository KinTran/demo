"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2844],{7181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(4848),i=t(8453);const r={description:"Yew \u7684 Actor \u7cfb\u7d71"},c="Agents",d={id:"concepts/agents",title:"Agents",description:"Yew \u7684 Actor \u7cfb\u7d71",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.18.0/concepts/agents.mdx",sourceDirName:"concepts",slug:"/concepts/agents",permalink:"/demo/zh-Hant/docs/0.18.0/concepts/agents",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/agents.mdx",tags:[],version:"0.18.0",frontMatter:{description:"Yew \u7684 Actor \u7cfb\u7d71"},sidebar:"docs",previous:{title:"\u8def\u7531\u5668",permalink:"/demo/zh-Hant/docs/0.18.0/concepts/router"},next:{title:"\u5167\u90e8\u5e95\u5c64\u7684 library",permalink:"/demo/zh-Hant/docs/0.18.0/advanced-topics/how-it-works"}},o={},l=[{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2},{value:"Agents \u7684\u578b\u5225",id:"agents-\u7684\u578b\u5225",level:2},{value:"\u7bc4\u570d",id:"\u7bc4\u570d",level:4},{value:"\u5728 Agents \u8207\u5143\u4ef6\u4e4b\u9593\u6e9d\u901a",id:"\u5728-agents-\u8207\u5143\u4ef6\u4e4b\u9593\u6e9d\u901a",level:2},{value:"Bridges",id:"bridges",level:3},{value:"Dispatchers",id:"dispatchers",level:3},{value:"\u958b\u92b7",id:"\u958b\u92b7",level:2},{value:"\u5ef6\u4f38\u95b1\u8b80",id:"\u5ef6\u4f38\u95b1\u8b80",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"agents",children:"Agents"})}),"\n",(0,s.jsxs)(n.p,{children:["Agents \u985e\u4f3c\u65bc Angular \u7684 ",(0,s.jsx)(n.a,{href:"https://angular.io/guide/architecture-services",children:"Services"})," \uff08\u4f46\u6c92\u6709\u4f9d\u8cf4\u6ce8\u5165\uff09\u800c\u4e14\u63d0\u4f9b Tew \u4e00\u500b ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Actor_model",children:"Actor Model"}),". Agents \u53ef\u4ee5\u7528\u4f86\u4f5c\u70ba\u5169\u500b\u5143\u4ef6\u9593\u7684\u8def\u7531\u8a0a\u606f\uff0c\u800c\u4e14\u8207\u4ed6\u5011\u5728\u5143\u4ef6\u9593\u7684\u5c64\u7d1a\u95dc\u4fc2\u7368\u7acb\u51fa\u4f86\uff0c\u6240\u4ee5\u4ed6\u4e5f\u53ef\u4ee5\u7528\u4f86\u4f5c\u70ba\u4e00\u500b\u5168\u57df\u7684\u72c0\u614b\uff0c\u751a\u81f3\u53ef\u4ee5\u7528\u4f86\u6e1b\u8f15\u7528\u4f86\u6e32\u67d3 UI \u756b\u9762\u7684\u4e3b\u57f7\u884c\u7dd2\u7684\u5927\u91cf\u904b\u7b97\u4efb\u52d9\u3002 \u672a\u4f86\uff0c\u6211\u5011\u9084\u898f\u5283\u8981\u8b93 agents \u5e6b\u5fd9 Yew \u5c08\u6848\u53ef\u4ee5\u8de8\u9801\u7c64\u6e9d\u901a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u70ba\u4e86\u8b93 agents \u53ef\u4ee5\u4e26\u884c\uff0c Yew \u4f7f\u7528\u4e86 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",children:"web-workers"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/42674621/79125224-b6481d80-7d95-11ea-8e6a-ab9b52d1d8ac.png",alt:"Agent \u751f\u547d\u5468\u671f"})}),"\n",(0,s.jsx)(n.h2,{id:"agents-\u7684\u578b\u5225",children:"Agents \u7684\u578b\u5225"}),"\n",(0,s.jsx)(n.h4,{id:"\u7bc4\u570d",children:"\u7bc4\u570d"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Job - \u5728 UI \u57f7\u884c\u7dd2\u4e0a\uff0c\u70ba\u6bcf\u4e00\u500b bridge\uff0c\u65b0\u589e\u4e00\u500b agent\u3002\u9019\u5c0d\u65bc\u5c07\u300c\u5171\u4eab\u4f46\u7368\u7acb\u7684\u884c\u70ba\u300d\u79fb\u51fa\u5143\u4ef6\u5f88\u6709\u7528\u3002\uff08\u5f85\u9a57\u8b49\uff09\u7576\u5de5\u4f5c\u7d50\u675f\uff0cagent \u6703\u6d88\u5931\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Context - Bridges \u6703\u5efa\u7acb\u4e26\u9023\u63a5\u4e0a UI \u57f7\u884c\u7dd2\u4e0a\u7684 agent\u3002\u9019\u53ef\u4ee5\u7528\u4f86\u5354\u8abf\u5143\u4ef6\u8207\u5176\u4ed6 agent \u4e4b\u9593\u7684\u72c0\u614b\u3002\u7576\u6c92\u6709\u4efb\u4f55 bridge \u9023\u63a5\u4e0a\u9019\u500b agent\uff0c\u9019\u500b agnet \u5c31\u6703\u6d88\u5931\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Private - \u8207 Job \u76f8\u540c\uff0c\u4f46\u662f\u662f\u5728\u81ea\u5df1\u7684 web worker \u4e0a\u57f7\u884c\u7684\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Public - \u8207 Context \u76f8\u540c\uff0c\u4f46\u662f\u662f\u5728\u81ea\u5df1\u7684 web worker \u4e0a\u57f7\u884c\u7684\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Global \uff08\u7de8\u5beb\u4e2d\uff09"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5728-agents-\u8207\u5143\u4ef6\u4e4b\u9593\u6e9d\u901a",children:"\u5728 Agents \u8207\u5143\u4ef6\u4e4b\u9593\u6e9d\u901a"}),"\n",(0,s.jsx)(n.h3,{id:"bridges",children:"Bridges"}),"\n",(0,s.jsx)(n.p,{children:"bridge \u5141\u8a31 agent \u8207\u5143\u4ef6\u9032\u884c\u96d9\u5411\u7684\u6e9d\u901a\u3002bridge \u4e5f\u5141\u8a31 agents \u4e4b\u9593\u4e92\u76f8\u6e9d\u901a\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"dispatchers",children:"Dispatchers"}),"\n",(0,s.jsx)(n.p,{children:"dispatcher \u5141\u8a31\u5143\u4ef6\u8207 agnet \u9032\u884c\u55ae\u5411\u7684\u6e9d\u901a\u3002dispatcher \u4e5f\u5141\u8a31\u5143\u4ef6\u5411 agnet \u767c\u9001\u8a0a\u606f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u958b\u92b7",children:"\u958b\u92b7"}),"\n",(0,s.jsxs)(n.p,{children:["Agents \u900f\u904e\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://github.com/servo/bincode",children:"bincode"})," \u5e8f\u5217\u5316\u4ed6\u5011\u7684\u8a0a\u606f\uff0c\u4f86\u6e9d\u901a\u3002\u6240\u4ee5\u6bd4\u8d77\u547c\u53eb\u65b9\u6cd5\uff0c\u4ed6\u7684\u6548\u80fd\u82b1\u8cbb\u6bd4\u8f03\u9ad8\u3002\u9664\u975e\u8a08\u7b97\u7684\u6210\u672c\uff0c\u6216\u662f\u8de8\u5143\u4ef6\u8a08\u7b97\u7684\u6210\u672c\uff0c\u6bd4\u50b3\u905e\u8a0a\u606f\u7684\u6210\u672c\u8981\u9ad8\uff0c\u5426\u5247 agnet \u7684\u65b9\u6cd5\u5118\u91cf\u53ea\u6709\u5305\u542b\u55ae\u7d14\u7684\u908f\u8f2f\u904b\u7b97\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5ef6\u4f38\u95b1\u8b80",children:"\u5ef6\u4f38\u95b1\u8b80"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/v0.18/examples/pub_sub",children:"pub_sub"})," \u7bc4\u4f8b\u986f\u793a\u4e86\u5982\u4f55\u5728 agnets \u4e4b\u9593\u6e9d\u901a\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(6540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);