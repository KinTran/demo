"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8053],{84:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var s=n(4848),r=n(8453);const c={title:"\u4f7f\u7528trunk"},i=void 0,d={id:"getting-started/project-setup/using-trunk",title:"\u4f7f\u7528trunk",description:"\u5b89\u88c5",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.18.0/getting-started/project-setup/using-trunk.mdx",sourceDirName:"getting-started/project-setup",slug:"/getting-started/project-setup/using-trunk",permalink:"/zh-Hans/docs/0.18.0/getting-started/project-setup/using-trunk",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/getting-started/project-setup/using-trunk.mdx",tags:[],version:"0.18.0",frontMatter:{title:"\u4f7f\u7528trunk"},sidebar:"docs",previous:{title:"Introduction",permalink:"/zh-Hans/docs/0.18.0/getting-started/introduction"},next:{title:"\u4f7f\u7528 wasm-pack",permalink:"/zh-Hans/docs/0.18.0/getting-started/project-setup/using-wasm-pack"}},o={},a=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo install trunk wasm-bindgen-cli\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,s.jsxs)(t.p,{children:["\u8bf7\u67e5\u770b",(0,s.jsx)(t.a,{href:"/zh-Hans/docs/0.18.0/getting-started/build-a-sample-app",children:"\u201c\u6784\u5efa\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u201d"}),"\uff0c\u4ee5\u83b7\u53d6\u6709\u5173\u5982\u4f55\u4f7f\u7528 Trunk \u6784\u5efa Yew \u5e94\u7528\u7a0b\u5e8f\u7684\u7b80\u77ed\u6307\u5357\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u6211\u4eec\u7684",(0,s.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples",children:"\u793a\u4f8b"}),"\u6765\u67e5\u770b\u5b9e\u9645\u8868\u73b0\uff0c\u5b83\u4eec\u90fd\u662f\u4f7f\u7528 Trunk \u6784\u5efa\u7684\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["Trunk \u57fa\u4e8e",(0,s.jsx)(t.code,{children:"index.html"}),"\u6587\u4ef6\u6784\u5efa\u60a8\u7684\u5e94\u7528\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u3002\u4e0e",(0,s.jsx)(t.code,{children:"wasm-pack"}),"\u4e0d\u540c\uff0cTrunk \u5b9e\u9645\u4e0a\u662f\u4e3a\u6784\u5efa\u5e94\u7528\u800c\u8bbe\u8ba1\u7684\u3002\u8fd9\u610f\u5473\u7740\u60a8\u4e0d\u9700\u8981\u6dfb\u52a0",(0,s.jsx)(t.code,{children:"cdylib"}),"\u5e93\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(t.code,{children:"main"}),"\u51fd\u6570\u4f5c\u4e3a\u5165\u53e3\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u8981\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 Yew \u5e94\u7528\u7a0b\u5e8f\uff0c\u60a8\u53ea\u9700\u8981\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u521b\u5efa",(0,s.jsx)(t.code,{children:"index.html"}),"\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<!doctype html>\r\n<html>\r\n    <head>\r\n        <meta charset="utf-8" />\r\n        <title>Yew App</title>\r\n    </head>\r\n</html>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Trunk CLI \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u547d\u4ee4\uff0c\u4f46\u662f\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c ",(0,s.jsx)(t.code,{children:"trunk serve"}),"\u65e0\u7591\u662f\u6700\u6709\u7528\u7684\u547d\u4ee4\u3002\u5b83\u4e3a\u60a8\u8fd0\u884c\u672c\u5730\u670d\u52a1\u5668\uff0c\u5e76\u5728\u68c0\u6d4b\u5230\u66f4\u6539\u540e\u81ea\u52a8\u91cd\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5f53\u60a8\u51c6\u5907\u53d1\u5e03\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u53ea\u9700\u8fd0\u884c",(0,s.jsx)(t.code,{children:"trunk build --release"})," \u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5f53\u524d\u6458\u8981\u4ec5\u4ecb\u7ecd\u4e86 Trunk \u7684\u90e8\u5206\u529f\u80fd\uff0c\u8bf7\u52a1\u5fc5\u67e5\u770b",(0,s.jsx)(t.a,{href:"https://github.com/thedodd/trunk",children:"README"})," \uff01"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(6540);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);