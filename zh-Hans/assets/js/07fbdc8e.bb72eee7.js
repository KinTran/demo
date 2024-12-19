"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7666],{5969:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(4848),s=r(8453);const l={title:"\u5b57\u9762\u91cf\u548c\u8868\u8fbe\u5f0f"},i=void 0,o={id:"concepts/html/literals-and-expressions",title:"\u5b57\u9762\u91cf\u548c\u8868\u8fbe\u5f0f",description:"\u5b57\u9762\u91cf",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/html/literals-and-expressions.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/literals-and-expressions",permalink:"/demo/zh-Hans/docs/next/concepts/html/literals-and-expressions",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/html/literals-and-expressions.mdx",tags:[],version:"current",frontMatter:{title:"\u5b57\u9762\u91cf\u548c\u8868\u8fbe\u5f0f"},sidebar:"docs",previous:{title:"\u5217\u8868",permalink:"/demo/zh-Hans/docs/next/concepts/html/lists"},next:{title:"\u6761\u4ef6\u6e32\u67d3",permalink:"/demo/zh-Hans/docs/next/concepts/html/conditional-rendering"}},c={},d=[{value:"\u5b57\u9762\u91cf",id:"\u5b57\u9762\u91cf",level:2},{value:"\u8868\u8fbe\u5f0f",id:"\u8868\u8fbe\u5f0f",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u5b57\u9762\u91cf",children:"\u5b57\u9762\u91cf"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u8868\u8fbe\u5f0f\u89e3\u6790\u4e3a\u5b9e\u73b0\u4e86 ",(0,t.jsx)(n.code,{children:"Display"})," \u7684\u7c7b\u578b\uff0c\u5b83\u4eec\u5c06\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u5e76\u63d2\u5165\u5230 DOM \u4e2d\u4f5c\u4e3a ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Text",children:"Text"})," \u8282\u70b9\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u521b\u5efa ",(0,t.jsx)(n.code,{children:"Text"})," \u8282\u70b9\uff0c\u6d4f\u89c8\u5668\u5c06\u5176\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002\u56e0\u6b64\uff0c\u5373\u4f7f\u8868\u8fbe\u5f0f\u5305\u542b ",(0,t.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\uff0c\u60a8\u4e5f\u4e0d\u4f1a\u9047\u5230 XSS \u7b49\u5b89\u5168\u95ee\u9898\uff0c\u9664\u975e\u60a8\u5c06\u8868\u8fbe\u5f0f\u5305\u88c5\u5728 ",(0,t.jsx)(n.code,{children:"<script>"})," \u5757\u4e2d\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u6709\u663e\u793a\u6587\u672c\u90fd\u5fc5\u987b\u7528 ",(0,t.jsx)(n.code,{children:"{}"})," \u5757\u62ec\u8d77\u6765\uff0c\u56e0\u4e3a\u6587\u672c\u88ab\u89c6\u4e3a\u8868\u8fbe\u5f0f\u3002\u8fd9\u662f Yew \u4e0e\u666e\u901a HTML \u8bed\u6cd5\u6700\u5927\u7684\u504f\u5dee\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet text = "lorem ipsum";\r\nhtml!{\r\n    <>\r\n        <div>{text}</div>\r\n        <div>{"dolor sit"}</div>\r\n        <span>{42}</span>\r\n    </>\r\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u8868\u8fbe\u5f0f",children:"\u8868\u8fbe\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"{}"})," \u5757\u5728 HTML \u4e2d\u63d2\u5165\u8868\u8fbe\u5f0f\uff0c\u53ea\u8981\u5b83\u4eec\u89e3\u6790\u4e3a ",(0,t.jsx)(n.code,{children:"Html"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet show_link = true;\r\n\r\nhtml! {\r\n  <div>\r\n    {\r\n      if show_link {\r\n        html! {\r\n          <a href="https://example.com">{"Link"}</a>\r\n        }\r\n      } else {\r\n        html! {}\r\n      }\r\n    }\r\n  </div>\r\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u5c06\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u63d0\u53d6\u5230\u51fd\u6570\u6216\u95ed\u5305\u4e2d\u4ee5\u4f18\u5316\u53ef\u8bfb\u6027\u662f\u6709\u610f\u4e49\u7684\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet show_link = true;\r\nlet maybe_display_link = move || -> Html {\r\n  if show_link {\r\n    html! {\r\n      <a href="https://example.com">{"Link"}</a>\r\n    }\r\n  } else {\r\n    html! {}\r\n  }\r\n};\r\n\r\nhtml! {\r\n     <div>{maybe_display_link()}</div>\r\n};\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);