"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3067],{289:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(4848),t=s(8453);const i={title:"Literals and Expressions"},l=void 0,o={id:"concepts/html/literals-and-expressions",title:"Literals and Expressions",description:"\u30ea\u30c6\u30e9\u30eb",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-0.20/concepts/html/literals-and-expressions.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/literals-and-expressions",permalink:"/demo/ja/docs/0.20/concepts/html/literals-and-expressions",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/html/literals-and-expressions.mdx",tags:[],version:"0.20",frontMatter:{title:"Literals and Expressions"},sidebar:"docs",previous:{title:"Lists",permalink:"/demo/ja/docs/0.20/concepts/html/lists"},next:{title:"Conditional rendering",permalink:"/demo/ja/docs/0.20/concepts/html/conditional-rendering"}},c={},d=[{value:"\u30ea\u30c6\u30e9\u30eb",id:"\u30ea\u30c6\u30e9\u30eb",level:2},{value:"\u5f0f",id:"\u5f0f",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u30ea\u30c6\u30e9\u30eb",children:"\u30ea\u30c6\u30e9\u30eb"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f0f\u304c",(0,r.jsx)(n.code,{children:"Display"}),"\u3092\u5b9f\u88c5\u3057\u305f\u578b\u3092\u89e3\u6c7a\u3059\u308b\u5834\u5408\u3001\u6587\u5b57\u5217\u306b\u5909\u63db\u3055\u308c\u3066 DOM \u306b",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Text",children:"Text"}),"\u30ce\u30fc\u30c9\u3068\u3057\u3066\u633f\u5165\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30c6\u30ad\u30b9\u30c8\u306f\u5f0f\u3068\u3057\u3066\u51e6\u7406\u3055\u308c\u308b\u305f\u3081\u3001\u5168\u3066\u306e\u8868\u793a\u3055\u308c\u308b\u5185\u5bb9\u306f",(0,r.jsx)(n.code,{children:"{}"}),"\u30d6\u30ed\u30c3\u30af\u306b\u3088\u3063\u3066\u56f2\u307e\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\r\n\u3053\u308c\u306f Yew \u306e\u30a2\u30d7\u30ea\u3068\u901a\u5e38\u306e HTML \u306e\u69cb\u6587\u3067\u6700\u3082\u7570\u306a\u308b\u70b9\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let text = "lorem ipsum";\r\nhtml!{\r\n    <>\r\n        <div>{text}</div>\r\n        <div>{"dolor sit"}</div>\r\n        <span>{42}</span>\r\n    </>\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5f0f",children:"\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:["HTML \u306b",(0,r.jsx)(n.code,{children:"{}"}),"\u30d6\u30ed\u30c3\u30af\u3092\u4f7f\u3063\u3066\u5f0f\u3092\u633f\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'html! {\r\n  <div>\r\n    {\r\n      if show_link {\r\n        html! {\r\n          <a href="https://example.com">{"Link"}</a>\r\n        }\r\n      } else {\r\n        html! {}\r\n      }\r\n    }\r\n  </div>\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5f0f\u3092\u95a2\u6570\u3084\u30af\u30ed\u30fc\u30b8\u30e3\u306b\u5206\u96e2\u3059\u308b\u306e\u306f\u30b3\u30fc\u30c9\u306e\u53ef\u8aad\u6027\u306e\u89b3\u70b9\u304b\u3089\u6709\u52b9\u306a\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let show_link = true;\r\nlet maybe_display_link = move || -> Html {\r\n  if show_link {\r\n    html! {\r\n      <a href="https://example.com">{"Link"}</a>\r\n    }\r\n  } else {\r\n    html! {}\r\n  }\r\n};\r\n\r\nhtml! {\r\n     <div>{maybe_display_link()}</div>\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);