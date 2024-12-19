"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2657],{3412:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>i});var s=c(4848),t=c(8453);const d={title:"\u4f5c\u7528\u57df",description:"\u7ec4\u4ef6\u7684\u4f5c\u7528\u57df"},o=void 0,r={id:"advanced-topics/struct-components/scope",title:"\u4f5c\u7528\u57df",description:"\u7ec4\u4ef6\u7684\u4f5c\u7528\u57df",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-topics/struct-components/scope.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/scope",permalink:"/demo/zh-Hans/docs/next/advanced-topics/struct-components/scope",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/scope.mdx",tags:[],version:"current",frontMatter:{title:"\u4f5c\u7528\u57df",description:"\u7ec4\u4ef6\u7684\u4f5c\u7528\u57df"},sidebar:"docs",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/demo/zh-Hans/docs/next/advanced-topics/struct-components/lifecycle"},next:{title:"\u56de\u8c03\u51fd\u6570 (Callbacks)",permalink:"/demo/zh-Hans/docs/next/advanced-topics/struct-components/callbacks"}},l={},i=[{value:"\u7ec4\u4ef6\u7684 <code>Scope&lt;_&gt;</code> \u63a5\u53e3",id:"\u7ec4\u4ef6\u7684-scope_-\u63a5\u53e3",level:2},{value:"<code>send_message</code>",id:"send_message",level:3},{value:"<code>send_message_batch</code>",id:"send_message_batch",level:3},{value:"<code>callback</code>",id:"callback",level:3},{value:"<code>batch_callback</code>",id:"batch_callback",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"\u7ec4\u4ef6\u7684-scope_-\u63a5\u53e3",children:["\u7ec4\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"Scope<_>"})," \u63a5\u53e3"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Scope"})," \u662f\u901a\u8fc7\u6d88\u606f\u521b\u5efa\u56de\u8c03\u5e76\u66f4\u65b0\u81ea\u8eab\u7684\u673a\u5236\u3002\u6211\u4eec\u901a\u8fc7\u5728\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4e0a\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"link()"})," \u6765\u83b7\u5f97\u5bf9\u5b83\u7684\u5f15\u7528\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"send_message",children:(0,s.jsx)(n.code,{children:"send_message"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\u3002\u6d88\u606f\u7531 ",(0,s.jsx)(n.code,{children:"update"})," \u65b9\u6cd5\u5904\u7406\uff0c\u8be5\u65b9\u6cd5\u786e\u5b9a\u7ec4\u4ef6\u662f\u5426\u5e94\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"send_message_batch",children:(0,s.jsx)(n.code,{children:"send_message_batch"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u540c\u65f6\u5411\u7ec4\u4ef6\u53d1\u9001\u591a\u4e2a\u6d88\u606f\u3002\u8fd9\u7c7b\u4f3c\u4e8e ",(0,s.jsx)(n.code,{children:"send_message"}),"\uff0c\u4f46\u662f\u5982\u679c\u4efb\u4f55\u6d88\u606f\u5bfc\u81f4 ",(0,s.jsx)(n.code,{children:"update"})," \u65b9\u6cd5\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u7ec4\u4ef6\u5c06\u5728\u5904\u7406\u5b8c\u6279\u5904\u7406\u4e2d\u7684\u6240\u6709\u6d88\u606f\u540e\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u7ed9\u5b9a\u7684\u53c2\u6570\u5411\u91cf\u4e3a\u7a7a\uff0c\u5219\u6b64\u51fd\u6570\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"callback",children:(0,s.jsx)(n.code,{children:"callback"})}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\uff0c\u5f53\u6267\u884c\u65f6\u5c06\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\u3002\u5728\u5185\u90e8\uff0c\u5b83\u5c06\u4f7f\u7528\u63d0\u4f9b\u7684\u95ed\u5305\u8fd4\u56de\u7684\u6d88\u606f\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"send_message"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html};\r\n\r\nenum Msg {\r\n    Text(String),\r\n}\r\n\r\nstruct Comp;\r\n\r\nimpl Component for Comp {\r\n\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        // \u521b\u5efa\u4e00\u4e2a\u63a5\u53d7\u4e00\u4e9b\u6587\u672c\u5e76\u5c06\u5176\u4f5c\u4e3a `Msg::Text` \u6d88\u606f\u53d8\u4f53\u53d1\u9001\u5230\u7ec4\u4ef6\u7684\u56de\u8c03\u3002\r\n        // highlight-next-line\r\n        let cb = ctx.link().callback(|text: String| Msg::Text(text));\r\n\r\n        // \u4e0a\u4e00\u884c\u662f\u591a\u4f59\u7684\u5197\u957f\uff0c\u4e3a\u4e86\u66f4\u6e05\u6670\uff0c\u53ef\u4ee5\u7b80\u5316\u4e3a\u8fd9\u6837\uff1a\r\n        // highlight-next-line\r\n        let cb = ctx.link().callback(Msg::Text);\r\n\r\n        // \u5c06 `Msg::Text("Hello World!")` \u53d1\u9001\u5230\u7ec4\u4ef6\u3002\r\n        // highlight-next-line\r\n        cb.emit("Hello World!".to_owned());\r\n\r\n        html! {\r\n            // \u5728\u8fd9\u91cc\u653e\u7f6e HTML\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"batch_callback",children:(0,s.jsx)(n.code,{children:"batch_callback"})}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\uff0c\u5f53\u6267\u884c\u65f6\u5c06\u5411\u7ec4\u4ef6\u53d1\u9001\u4e00\u6279\u6d88\u606f\u3002\u4e0e ",(0,s.jsx)(n.code,{children:"callback"})," \u7684\u533a\u522b\u5728\u4e8e\uff0c\u4f20\u9012\u7ed9\u6b64\u65b9\u6cd5\u7684\u95ed\u5305\u4e0d\u5fc5\u8fd4\u56de\u6d88\u606f\u3002\u76f8\u53cd\uff0c\u95ed\u5305\u53ef\u4ee5\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"Vec<Msg>"})," \u6216 ",(0,s.jsx)(n.code,{children:"Option<Msg>"}),"\uff0c\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"Msg"})," \u662f\u7ec4\u4ef6\u7684\u6d88\u606f\u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Vec<Msg>"})," \u88ab\u89c6\u4e3a\u4e00\u6279\u6d88\u606f\uff0c\u5e76\u5728\u5185\u90e8\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"send_message_batch"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Option<Msg>"})," \u5728\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"Some"})," \u65f6\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"send_message"}),"\u3002\u5982\u679c\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"None"}),"\uff0c\u5219\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u8fd9\u53ef\u4ee5\u7528\u4e8e\u6839\u636e\u60c5\u51b5\uff0c\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u60c5\u51b5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u901a\u8fc7\u4f7f\u7528\u4ec5\u4e3a\u8fd9\u4e9b\u7c7b\u578b\u5b9e\u73b0\u7684 ",(0,s.jsx)(n.code,{children:"SendAsMessage"})," trait \u5b9e\u73b0\u7684\u3002\u60a8\u53ef\u4ee5\u4e3a\u81ea\u5df1\u7684\u7c7b\u578b\u5b9e\u73b0 ",(0,s.jsx)(n.code,{children:"SendAsMessage"}),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.code,{children:"batch_callback"})," \u4e2d\u4f7f\u7528\u5b83\u4eec\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>r});var s=c(6540);const t={},d=s.createContext(t);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);