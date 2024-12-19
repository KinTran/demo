"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3802],{3705:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>i});var s=c(4848),l=c(8453);const d={title:"\u56de\u8c03\uff08Callbacks\uff09",description:"ComponentLink \u548c Callbacks."},o=void 0,t={id:"concepts/components/callbacks",title:"\u56de\u8c03\uff08Callbacks\uff09",description:"ComponentLink \u548c Callbacks.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.18.0/concepts/components/callbacks.mdx",sourceDirName:"concepts/components",slug:"/concepts/components/callbacks",permalink:"/demo/zh-Hans/docs/0.18.0/concepts/components/callbacks",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/components/callbacks.mdx",tags:[],version:"0.18.0",frontMatter:{title:"\u56de\u8c03\uff08Callbacks\uff09",description:"ComponentLink \u548c Callbacks."},sidebar:"docs",previous:{title:"Introduction",permalink:"/demo/zh-Hans/docs/0.18.0/concepts/components/introduction"},next:{title:"\u5c5e\u6027\uff08Properties\uff09",permalink:"/demo/zh-Hans/docs/0.18.0/concepts/components/properties"}},r={},i=[{value:"ComponentLink API",id:"componentlink-api",level:2},{value:"send_message",id:"send_message",level:3},{value:"send_message_batch",id:"send_message_batch",level:3},{value:"callback",id:"callback",level:3},{value:"batch_callback",id:"batch_callback",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"\u76f8\u5173\u4f8b\u5b50",id:"\u76f8\u5173\u4f8b\u5b50",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u7ec4\u4ef6\u201clink\u201d\u662f\u4e00\u79cd\u673a\u5236\uff0c\u901a\u8fc7\u8be5\u673a\u5236\uff0c\u7ec4\u4ef6\u53ef\u4ee5\u6ce8\u518c\u56de\u8c03\u5e76\u81ea\u884c\u66f4\u65b0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"componentlink-api",children:"ComponentLink API"}),"\n",(0,s.jsx)(n.h3,{id:"send_message",children:"send_message"}),"\n",(0,s.jsxs)(n.p,{children:["\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\u3002\u6d88\u606f\u5c06\u7531",(0,s.jsx)(n.code,{children:"update"}),"\u65b9\u6cd5\u5904\u7406\u6765\u786e\u5b9a\u7ec4\u4ef6\u662f\u5426\u5e94\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"send_message_batch",children:"send_message_batch"}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u65f6\u5411\u7ec4\u4ef6\u53d1\u9001\u591a\u6761\u6d88\u606f\u3002\u8fd9\u4e0e",(0,s.jsx)(n.code,{children:"send_message"}),"\u7c7b\u4f3c\uff0c\u4f46\u5982\u679c\u4efb\u4f55\u6d88\u606f\u5bfc\u81f4",(0,s.jsx)(n.code,{children:"update"}),"\u65b9\u6cd5\u8fd4\u56de",(0,s.jsx)(n.code,{children:"true"})," \uff0c\u5219\u7ec4\u4ef6\u5c06\u5728\u5904\u7406\u5b8c\u6240\u6709\u6d88\u606f\u540e\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u7ed9\u5b9a\u7684 vector \u4e3a\u7a7a\uff0c\u5219\u6b64\u51fd\u6570\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"callback",children:"callback"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\uff0c\u8be5\u56de\u8c03\u5c06\u5728\u6267\u884c\u65f6\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\u3002 \u5b9e\u9645\u4e0a\uff0c\u5b83\u4f1a \u5c06\u95ed\u5305\u8fd4\u56de\u7684\u7ed3\u679c\u4f20\u9012\u7ed9",(0,s.jsx)(n.code,{children:"send_message"})," \u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u4e00\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53eb\u505a",(0,s.jsx)(n.code,{children:"callback_once"})," \uff0c\u5b83\u63a5\u53d7",(0,s.jsx)(n.code,{children:"FnOnce"}),"\u800c\u4e0d\u662f",(0,s.jsx)(n.code,{children:"Fn"})," \u3002\u4f46\u662f\uff0c\u60a8\u5e94\u8be5\u5c0f\u5fc3\u4f7f\u7528\u5b83\uff0c\u56e0\u4e3a\u5982\u679c\u8fd9\u4e2a\u65b9\u6cd5\u6267\u884c\u591a\u6b21\uff0c\u5176\u56de\u8c03\u5c06\u4f1a\u5f15\u53d1 panic\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'// \u521b\u5efa\u4e00\u4e2a\u56de\u8c03\u6765\u63a5\u6536\u6587\u672c\uff0c\u5e76\u4e14\u5c06\u6587\u672c\u4f5c\u4e3a`Msg::Text`\u6d88\u606f\u53d8\u91cf\u53d1\u9001\u7ed9\u7ec4\u4ef6\u3002\r\nlet cb = link.callback(|text: String| Msg::Text(text));\r\n\r\n// \u524d\u9762\u90a3\u884c\u4ec5\u4ec5\u662f\u4e3a\u4e86\u6e05\u695a\u7684\u6f14\u793a\r\n// \u5b83\u53ef\u4ee5\u7b80\u5316\u6210\u8fd9\u6837\uff1a\r\nlet cb = link.callback(Msg::Text);\r\n\r\n// \u5c06\u4f1a\u53d1\u9001`Msg::Text("Hello World!")`\u5230\u7ec4\u4ef6\u3002\r\ncb.emit("Hello World!".to_owned());\n'})}),"\n",(0,s.jsx)(n.h3,{id:"batch_callback",children:"batch_callback"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\uff0c\u8be5\u56de\u8c03\u5c06\u5728\u6267\u884c\u65f6\u5411\u7ec4\u4ef6\u53d1\u9001\u4e00\u6279\u6d88\u606f\u3002 \u8be5\u65b9\u6cd5\u4e0e",(0,s.jsx)(n.code,{children:"callback"}),"\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u4f20\u9012\u7ed9\u6b64\u65b9\u6cd5\u7684\u95ed\u5305\u4e0d\u5fc5\u8fd4\u56de\u6d88\u606f\u3002\u4f5c\u4e3a\u66ff\u4ee3\uff0c\u95ed\u5305\u53ef\u4ee5\u8fd4\u56de",(0,s.jsx)(n.code,{children:"Vec<Msg>"}),"\u6216",(0,s.jsx)(n.code,{children:"Option<Msg>"})," \uff0c\u5176\u4e2d",(0,s.jsx)(n.code,{children:"Msg"}),"\u662f\u7ec4\u4ef6\u7684\u6d88\u606f\u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Vec<Msg>"}),"\u88ab\u89c6\u4e3a\u4e00\u6279\u6d88\u606f\uff0c\u5e76\u5728\u5e95\u5c42\u8c03\u7528",(0,s.jsx)(n.code,{children:"send_message_batch"}),"\u53d1\u9001\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Option<Msg>"}),"\u4f1a\u5728\u503c\u4e3a",(0,s.jsx)(n.code,{children:"Some"}),"\u65f6\u8c03\u7528",(0,s.jsx)(n.code,{children:"send_message"})," \u3002\u5f53\u4f60\u4e0d\u9700\u8981\u66f4\u65b0\u65f6\uff0c\u53ef\u4ee5\u5c06\u503c\u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"None"})," \uff0c\u6b64\u65f6\u4ec0\u4e48\u90fd\u4e0d\u4f1a\u53d1\u751f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u901a\u8fc7\u4f7f\u7528",(0,s.jsx)(n.code,{children:"SendAsMessage"}),"\u7279\u6027\u6765\u5b9e\u73b0\u7684\u3002\u60a8\u53ef\u4ee5\u4e3a\u4f60\u81ea\u5df1\u7684\u7c7b\u578b\u5b9e\u73b0",(0,s.jsx)(n.code,{children:"SendAsMessage"})," \uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u5728",(0,s.jsx)(n.code,{children:"batch_callback"}),"\u4e2d\u4f7f\u7528\u5b83\u4eec\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u548c",(0,s.jsx)(n.code,{children:"callback"}),"\u4e00\u6837\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4e5f\u6709\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"FnOnce"}),"\u5bf9\u5e94\u5b9e\u73b0\uff0c\u90a3\u5c31\u662f ",(0,s.jsx)(n.code,{children:"batch_callback_once"})," \u3002\u5b83\u548c",(0,s.jsx)(n.code,{children:"callback_once"}),"\u7684\u9650\u5236\u6761\u4ef6\u4e5f\u662f\u76f8\u540c\u7684\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\uff08\u8fd9\u90e8\u5206\u53ef\u80fd\u4f1a\u72ec\u7acb\u6210\u4e3a\u4e00\u5c0f\u7ae0\u3002\uff09"})}),"\n",(0,s.jsxs)(n.p,{children:["Callbacks \u7528\u4e8e\u4e0e Yew \u4e2d\u7684 services\uff0cagents \u548c\u7236\u7ec4\u4ef6\u8fdb\u884c\u901a\u4fe1\u3002\u5b83\u4eec\u4ec5\u4ec5\u662f\u4e2a ",(0,s.jsx)(n.code,{children:"Fn"}),"\uff0c\u5e76\u7531",(0,s.jsx)(n.code,{children:"Rc"})," \u5305\u88f9\uff0c\u8fd9\u5c06\u5141\u8bb8\u4ed6\u4eec\u88ab\u514b\u9686\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5b83\u4eec\u6709\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"emit"})," \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u5b83\u7684",(0,s.jsx)(n.code,{children:"<IN>"})," \u7c7b\u578b\u4f5c\u4e3a\u53c2\u6570\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u76ee\u6807\u6240\u671f\u671b\u7684\u6d88\u606f\u3002\u5982\u679c\u4e00\u4e2a\u56de\u8c03\u4ece\u7236\u7ec4\u4ef6\u4e2d\u901a\u8fc7 props \u63d0\u4f9b\u7ed9\u5b50\u7ec4\u4ef6\uff0c\u5219\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u5728\u5176 ",(0,s.jsx)(n.code,{children:"update"}),"\u751f\u547d\u5468\u671f\u94a9\u5b50\u4e2d\u5bf9\u8be5\u56de\u8c03\u8c03\u7528",(0,s.jsx)(n.code,{children:"emit"}),"\uff0c\u4ee5\u5c06\u6d88\u606f\u53d1\u9001\u56de\u7236\u7ec4\u4ef6\u3002\u5728",(0,s.jsx)(n.code,{children:"html!"})," \u5b8f\u5185\u88ab\u63d0\u4f9b\u4f5c\u4e3a props \u7684\u95ed\u5305\u6216\u51fd\u6570\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a Callbacks\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u56de\u8c03\u793a\u4f8b\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let onclick = self.link.callback(|_| Msg::Clicked);\r\nhtml! {\r\n    <button onclick=onclick>{ "Click" }</button>\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f20\u9012\u7ed9",(0,s.jsx)(n.code,{children:"callback"}),"\u7684\u51fd\u6570\u5fc5\u987b\u59cb\u7ec8\u5e26\u6709\u4e00\u4e2a\u53c2\u6570\u3002\u4f8b\u5982\uff0c ",(0,s.jsx)(n.code,{children:"onclick"}),"\u5904\u7406\u7a0b\u5e8f\u9700\u8981\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u91c7\u7528",(0,s.jsx)(n.code,{children:"MouseEvent"}),"\u7c7b\u578b\u7684\u53c2\u6570\u3002\u7136\u540e\u5904\u7406\u7a0b\u5e8f\u53ef\u4ee5\u51b3\u5b9a\u5e94\u8be5\u5411\u7ec4\u4ef6\u53d1\u9001\u4ec0\u4e48\u6837\u7684\u6d88\u606f\u3002\u8be5\u6d88\u606f\u4f1a\u88ab\u65e0\u6761\u4ef6\u5730\u5b89\u6392\u5728\u4e0b\u4e00\u4e2a\u66f4\u65b0\u5faa\u73af\u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u4e00\u4e2a\u53ef\u80fd\u4f1a\u5f15\u8d77\u66f4\u65b0\u7684\u56de\u8c03\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(n.code,{children:"batch_callback"})," \u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let onkeypress = self.link.batch_callback(|event| {\r\n    if event.key() == "Enter" {\r\n        Some(Msg::Submit)\r\n    } else {\r\n        None\r\n    }\r\n});\r\n\r\nhtml! {\r\n    <input type="text" onkeypress=onkeypress />\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u4f8b\u5b50",children:"\u76f8\u5173\u4f8b\u5b50"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/counter",children:"Counter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/timer",children:"Timer"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>t});var s=c(6540);const l={},d=s.createContext(l);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);