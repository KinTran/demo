"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7909],{4226:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var s=c(4848),l=c(8453);const a={description:"ComponentLink \u8207 Callbacks."},o="Callbacks",t={id:"concepts/components/callbacks",title:"Callbacks",description:"ComponentLink \u8207 Callbacks.",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/version-0.18.0/concepts/components/callbacks.mdx",sourceDirName:"concepts/components",slug:"/concepts/components/callbacks",permalink:"/zh-Hant/docs/0.18.0/concepts/components/callbacks",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/components/callbacks.mdx",tags:[],version:"0.18.0",frontMatter:{description:"ComponentLink \u8207 Callbacks."},sidebar:"docs",previous:{title:"Introduction",permalink:"/zh-Hant/docs/0.18.0/concepts/components/introduction"},next:{title:"Properties",permalink:"/zh-Hant/docs/0.18.0/concepts/components/properties"}},i={},d=[{value:"ComponentLink API",id:"componentlink-api",level:2},{value:"callback",id:"callback",level:3},{value:"send_message",id:"send_message",level:3},{value:"send_message_batch",id:"send_message_batch",level:3},{value:"Callbacks",id:"callbacks-1",level:2}];function r(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"callbacks",children:"Callbacks"})}),"\n",(0,s.jsx)(n.p,{children:"\u5143\u4ef6\u7684\u300clink\u300d\u662f\u4e00\u500b\u8b93\u5143\u4ef6\u8a3b\u518a callbacks \u4e26\u81ea\u6211\u66f4\u65b0\u7684\u6a5f\u5236\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"componentlink-api",children:"ComponentLink API"}),"\n",(0,s.jsx)(n.h3,{id:"callback",children:"callback"}),"\n",(0,s.jsxs)(n.p,{children:["\u8a3b\u518a\u4e00\u500b callback \u5f8c\uff0c\u7576\u9019\u500b callback \u88ab\u57f7\u884c\u6642\uff0c\u6703\u767c\u9001\u4e00\u500b\u8a0a\u606f\u7d66\u5143\u4ef6\u7684\u66f4\u65b0\u6a5f\u5236\u3002\u5728\u751f\u547d\u5468\u671f\u7684\u52fe\u5b50\u4e0b\uff0c\u4ed6\u6703\u547c\u53eb ",(0,s.jsx)(n.code,{children:"send_self"})," \u4e26\u5c07\u88ab\u9589\u5305\u56de\u50b3\u7684\u8a0a\u606f\u5e36\u7d66\u4ed6\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63d0\u4f9b\u4e00\u500b ",(0,s.jsx)(n.code,{children:"Fn(IN) -> Vec<COMP::Message>"})," \u4e26\u56de\u50b3\u4e00\u500b ",(0,s.jsx)(n.code,{children:"Callback<IN>"})," \u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"send_message",children:"send_message"}),"\n",(0,s.jsx)(n.p,{children:"\u7576\u73fe\u5728\u7684\u8ff4\u5708\u7d50\u675f\u5f8c\uff0c\u5411\u5143\u4ef6\u767c\u9001\u8a0a\u606f\uff0c\u4e26\u4e14\u958b\u555f\u53e6\u4e00\u500b\u8ff4\u5708\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"send_message_batch",children:"send_message_batch"}),"\n",(0,s.jsx)(n.p,{children:"\u8a3b\u518a\u4e00\u500b callback\uff0c\u7576\u9019\u500b callback \u88ab\u57f7\u884c\u6642\uff0c\u9019\u500b callback \u6703\u4e00\u6b21\u9001\u5f88\u591a\u8a0a\u606f\u3002\u5982\u679c\u6709\u4efb\u4f55\u4e00\u500b\u8a0a\u606f\u5c0e\u81f4\u5143\u4ef6\u88ab\u91cd\u65b0\u6e32\u67d3\uff0c\u5143\u4ef6\u6703\u5728\u6240\u6709\u6279\u6b21\u9001\u4f86\u7684\u8a0a\u606f\u90fd\u88ab\u8655\u7406\u5b8c\u5f8c\uff0c\u518d\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u63d0\u4f9b\u4e00\u500b ",(0,s.jsx)(n.code,{children:"Fn(IN) -> COMP::Message"})," \u4e26\u56de\u50b3\u4e00\u500b ",(0,s.jsx)(n.code,{children:"Callback<IN>"})," \u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"callbacks-1",children:"Callbacks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\uff08\u4ed6\u53ef\u80fd\u9700\u8981\u4e00\u500b\u7368\u7acb\u7684\u77ed\u9801\u4f86\u4ecb\u7d39\uff09"})}),"\n",(0,s.jsxs)(n.p,{children:["Callbacks \u88ab\u7528\u4f86\u7576\u4f5c services \u3001 agents \u8207\u7236\u5143\u4ef6\u8ddf Yew \u6e9d\u901a\u7684\u65b9\u5f0f\u3002\u4ed6\u5011\u53ea\u662f\u4e00\u500b\u88ab ",(0,s.jsx)(n.code,{children:"Rc"})," \u5305\u88f9\u8457\u7684 ",(0,s.jsx)(n.code,{children:"Fn"}),"\uff0c\u597d\u8b93\u4ed6\u5011\u53ef\u4ee5\u88ab\u8907\u88fd\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ed6\u5011\u6709\u4e00\u500b ",(0,s.jsx)(n.code,{children:"emit"})," \u65b9\u6cd5\uff0c\u9019\u500b\u65b9\u6cd5\u62ff\u4ed6\u5011\u7684 ",(0,s.jsx)(n.code,{children:"<IN>"})," \u578b\u5225\u7576\u4f5c\u53c3\u6578\uff0c\u4e26\u4e14\u8f49\u63db\u4ed6\u4f5c\u70ba\u76ee\u7684\u5730\u6240\u671f\u671b\u7684\u8a0a\u606f\u3002\u5982\u679c\u4e00\u500b\u5f9e\u7236\u5143\u4ef6\u4f86\u7684 callback \u88ab\u63d0\u4f9b\u4f5c\u70ba\u5b50\u5143\u4ef6\u7684\u5c6c\u6027\uff0c\u5b50\u5143\u4ef6\u53ef\u4ee5\u5728\u4ed6\u7684 update \u751f\u547d\u5468\u671f\u4e2d\uff0c\u547c\u53eb callback \u4e2d\u7684 emit \u4ee5\u50b3\u905e\u8a0a\u606f\u56de\u7d66\u7236\u5143\u4ef6\u3002 \u5728 ",(0,s.jsx)(n.code,{children:"html!"})," \u5de8\u96c6\u4e2d\u7684\u9589\u5305\u8207\u65b9\u6cd5\u5982\u679c\u88ab\u7576\u4f5c\u5c6c\u6027\u50b3\u905e\uff0c\u6703\u88ab\u81ea\u52d5\u8f49\u70ba Callbacks\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>t});var s=c(6540);const l={},a=s.createContext(l);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);