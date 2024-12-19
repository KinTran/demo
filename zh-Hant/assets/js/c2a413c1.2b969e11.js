"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7251],{57:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(4848),s=t(8453),l=t(1470),a=t(9365);const i={title:"\u5217\u8868"},c=void 0,o={id:"concepts/html/lists",title:"\u5217\u8868",description:"\u8fed\u4ee3\u5668",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/concepts/html/lists.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/lists",permalink:"/demo/zh-Hant/docs/next/concepts/html/lists",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/html/lists.mdx",tags:[],version:"current",frontMatter:{title:"\u5217\u8868"},sidebar:"docs",previous:{title:"\u7a7a\u6a19\u7c64 (Fragments)",permalink:"/demo/zh-Hant/docs/next/concepts/html/fragments"},next:{title:"\u5b57\u9762\u91cf\u8207\u8868\u9054\u5f0f",permalink:"/demo/zh-Hant/docs/next/concepts/html/literals-and-expressions"}},u={},d=[{value:"\u8fed\u4ee3\u5668",id:"\u8fed\u4ee3\u5668",level:2},{value:"\u9375 (Key) \u5217\u8868",id:"\u9375-key-\u5217\u8868",level:2},{value:"\u6548\u80fd\u512a\u5316",id:"\u6548\u80fd\u512a\u5316",level:3},{value:"\u539f\u7406\u89e3\u91cb",id:"\u539f\u7406\u89e3\u91cb",level:3},{value:"\u9032\u4e00\u6b65\u95b1\u8b80",id:"\u9032\u4e00\u6b65\u95b1\u8b80",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u8fed\u4ee3\u5668",children:"\u8fed\u4ee3\u5668"}),"\n",(0,r.jsx)(n.p,{children:"Yew \u652f\u63f4\u5169\u7a2e\u4e0d\u540c\u7684\u8a9e\u6cd5\u4f86\u5f9e\u8fed\u4ee3\u5668\u5efa\u7acb HTML\u3002"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsxs)(a.A,{value:"Syntax type 1",label:"Syntax type 1",children:[(0,r.jsxs)(n.p,{children:["\u7b2c\u4e00\u7a2e\u65b9\u6cd5\u662f\u5728\u8fed\u4ee3\u5668\u7684\u6700\u7d42\u8f49\u63db\u4e0a\u547c\u53eb ",(0,r.jsx)(n.code,{children:"collect::<Html>()"}),"\uff0c\u5b83\u50b3\u56de\u4e00\u500b Yew \u53ef\u4ee5\u986f\u793a\u7684\u6e05\u55ae\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet items = (1..=10).collect::<Vec<_>>();\r\n\r\nhtml! {\r\n    <ul class="item-list">\r\n        { items.iter().collect::<Html>() }\r\n    </ul>\r\n};\n'})})]}),(0,r.jsxs)(a.A,{value:"Syntax type 2",label:"Syntax type 2",children:[(0,r.jsxs)(n.p,{children:["\u53e6\u4e00\u7a2e\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"for"})," \u95dc\u9375\u5b57\uff0c\u9019\u4e0d\u662f\u539f\u751f\u7684 Rust \u8a9e\u6cd5\uff0c\u800c\u662f\u7531 HTML \u5de8\u96c6\u7528\u65bc\u8f38\u51fa\u986f\u793a\u8fed\u4ee3\u5668\u6240\u9700\u7684\u7a0b\u5f0f\u78bc\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet items = (1..=10).collect::<Vec<_>>();\r\n\r\nhtml! {\r\n    <ul class="item-list">\r\n        { for items.iter() }\r\n    </ul>\r\n};\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u9375-key-\u5217\u8868",children:"\u9375 (Key) \u5217\u8868"}),"\n",(0,r.jsxs)(n.p,{children:["\u9375 (Key) \u5217\u8868\u662f\u4e00\u500b\u6700\u4f73\u5316\u7684\u5217\u8868\uff0c\u5176\u4e2d",(0,r.jsx)(n.strong,{children:"\u6240\u6709"}),"\u5b50\u5143\u7d20\u90fd\u6709\u9375\u3002\r\n",(0,r.jsx)(n.code,{children:"key"})," \u662f Yew \u63d0\u4f9b\u7684\u4e00\u500b\u7279\u6b8a\u5c6c\u6027\uff0c\u5b83\u70ba HTML \u5143\u7d20\u6216\u5143\u4ef6\u63d0\u4f9b\u4e00\u500b\u552f\u4e00\u6a19\u8b58\u7b26\uff0c\u7528\u65bc Yew \u5167\u90e8\u7684\u6700\u4f73\u5316\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Key \u53ea\u9700\u8981\u5728\u6bcf\u500b\u6e05\u55ae\u4e2d\u662f\u552f\u4e00\u7684\uff0c\u8207 HTML ",(0,r.jsx)(n.code,{children:"id"})," \u7684\u5168\u57df\u552f\u4e00\u6027\u76f8\u53cd\u3002\u5b83\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u5217\u8868\u7684\u9806\u5e8f\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:"\u59cb\u7d42\u5efa\u8b70\u70ba\u6e05\u55ae\u65b0\u589e\u6309\u9375 (key)\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u900f\u904e\u5c07\u552f\u4e00\u7684 ",(0,r.jsx)(n.code,{children:"String"}),"\u3001",(0,r.jsx)(n.code,{children:"str"})," \u6216\u6574\u6578\u50b3\u905e\u7d66\u7279\u6b8a\u7684 ",(0,r.jsx)(n.code,{children:"key"})," \u5c6c\u6027\u4f86\u65b0\u589e\u9375\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:", ignore",children:'use yew::prelude::*;\r\n\r\nlet names = vec!["Sam","Bob","Ray"]\r\n\r\nhtml! {\r\n    <div id="introductions">\r\n        {\r\n            names.into_iter().map(|name| {\r\n                html!{<div key={name}>{ format!("Hello, I\'am {}!",name) }</div>}\r\n            }).collect::<Html>()\r\n        }\r\n    </div>\r\n};\r\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u6548\u80fd\u512a\u5316",children:"\u6548\u80fd\u512a\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u5011\u6709\u4e00\u500b",(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/keyed_list",children:"\u5e36\u6709\u9375 (keys) \u7684\u5217\u8868\u7bc4\u4f8b"}),"\u53ef\u4ee5\u8b93\u4f60\u6e2c\u8a66\u6548\u80fd\u4e0a\u7684\u6539\u9032\uff0c\u9019\u88e1\u6709\u4e00\u500b\u7c21\u55ae\u7684\u6e2c\u8a66\u6d41\u7a0b\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9032\u5165",(0,r.jsx)(n.a,{href:"https://examples.yew.rs/keyed_list",children:"\u7dda\u4e0a\u793a\u7bc4"})]}),"\n",(0,r.jsx)(n.li,{children:"\u65b0\u589e 500 \u500b\u5143\u7d20"}),"\n",(0,r.jsx)(n.li,{children:"\u505c\u7528\u9375"}),"\n",(0,r.jsx)(n.li,{children:"\u53cd\u8f49\u5217\u8868"}),"\n",(0,r.jsx)(n.li,{children:'\u770b "\u6700\u5f8c\u4e00\u6b21\u6e32\u67d3\u82b1\u8cbb\u4e86 Xms"\uff08\u5728\u64b0\u5beb\u672c\u6587\u6642\uff0c\u5927\u7d04\u70ba 60ms\uff09'}),"\n",(0,r.jsx)(n.li,{children:"\u555f\u7528\u9375"}),"\n",(0,r.jsx)(n.li,{children:"\u518d\u6b21\u53cd\u8f49\u5217\u8868"}),"\n",(0,r.jsx)(n.li,{children:'\u770b "\u6700\u5f8c\u4e00\u6b21\u6e32\u67d3\u82b1\u8cbb\u4e86 Xms"\uff08\u5728\u64b0\u5beb\u672c\u6587\u6642\uff0c\u5927\u7d04\u70ba 30ms\uff09'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u622a\u81f3\u64b0\u5beb\u672c\u6587\u6642\uff0c\u5c0d\u65bc 500 \u500b\u7d44\u4ef6\uff0c\u901f\u5ea6\u63d0\u9ad8\u4e86 2 \u500d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u539f\u7406\u89e3\u91cb",children:"\u539f\u7406\u89e3\u91cb"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u7576\u4f60\u8fed\u4ee3\u6642\uff0c\u53ea\u9700\u8981\u5728\u6bcf\u500b\u5217\u8868\u9805\u76ee\u4e0a\u6dfb\u52a0\u4e00\u500b\u9375\uff0c\u8cc7\u6599\u7684\u9806\u5e8f\u53ef\u80fd\u6703\u6539\u8b8a\u3002\r\n\u5728\u91cd\u65b0\u6e32\u67d3\u6e05\u55ae\u6642\uff0c\u5b83\u7528\u65bc\u52a0\u901f\u5354\u8abf\u904e\u7a0b\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6c92\u6709\u9375\uff0c\u5047\u8a2d\u4f60\u8fed\u4ee3 ",(0,r.jsx)(n.code,{children:'["bob", "sam", "rob"]'}),"\uff0c\u6700\u7d42\u5f97\u5230\u7684 HTML \u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div id="bob">My name is Bob</div>\r\n<div id="sam">My name is Sam</div>\r\n<div id="rob">My name is rob</div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u5f8c\u5728\u4e0b\u4e00\u6b21\u6e32\u67d3\u6642\uff0c\u5982\u679c\u4f60\u7684\u6e05\u55ae\u66f4\u6539\u70ba ",(0,r.jsx)(n.code,{children:'["bob", "rob"]'}),'\uff0cYew \u53ef\u4ee5\u522a\u9664 id="rob" \u7684\u5143\u7d20\uff0c\u4e26\u5c07 id="sam" \u66f4\u65b0\u70ba id="rob"\u3002']}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u70ba\u6bcf\u500b\u5143\u7d20\u6dfb\u52a0\u4e86\u4e00\u500b\u9375\uff0c\u521d\u59cbHTML \u5c07\u4fdd\u6301\u4e0d\u8b8a\uff0c\u4f46\u5728\u4f7f\u7528\u4fee\u6539\u5f8c\u7684\u5217\u8868",(0,r.jsx)(n.code,{children:'["bob", "rob"]'})," \u9032\u884c\u6e32\u67d3\u5f8c\uff0cYew \u53ea\u6703\u522a\u9664\u7b2c\u4e8c\u500bHTML \u5143\u7d20\uff0c\u800c\u5176\u4ed6\u5143\u7d20\u5247\u4fdd\u6301\u4e0d\u8b8a\uff0c\u56e0\u70ba\u5b83\u53ef\u4ee5\u4f7f\u7528\u9375\u5c07\u5b83\u5011\u95dc\u806f\u8d77\u4f86\u3002"]}),"\n",(0,r.jsx)(n.p,{children:'\u5982\u679c\u4f60\u9047\u5230\u4e86\u4e00\u500b\u5f9e\u4e00\u500b\u5143\u4ef6\u5207\u63db\u5230\u53e6\u4e00\u500b\u5143\u4ef6\u7684 bug/"feature"\uff0c\u4f46\u5169\u8005\u90fd\u6709\u4e00\u500b div \u4f5c\u70ba\u6700\u9ad8\u6e32\u67d3\u5143\u7d20\u3002\r\nYew \u5728\u9019\u4e9b\u60c5\u6cc1\u4e0b\u6703\u91cd\u8907\u4f7f\u7528\u5df2\u6e32\u67d3\u7684 HTML div \u4f5c\u70ba\u6700\u4f73\u5316\u3002\r\n\u5982\u679c\u4f60\u9700\u8981\u8a72 div \u88ab\u91cd\u65b0\u5efa\u7acb\u800c\u4e0d\u662f\u88ab\u91cd\u8907\u4f7f\u7528\uff0c\u90a3\u9ebc\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4e0d\u540c\u7684\u9375\uff0c\u5b83\u5011\u5c07\u4e0d\u6703\u88ab\u91cd\u8907\u4f7f\u7528\u3002'}),"\n",(0,r.jsx)(n.h2,{id:"\u9032\u4e00\u6b65\u95b1\u8b80",children:"\u9032\u4e00\u6b65\u95b1\u8b80"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/todomvc",children:"TodoMVC \u7bc4\u4f8b"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/keyed_list",children:"\u5e36\u6709\u6309\u9375 (keys) \u7684\u6e05\u55ae\u7bc4\u4f8b"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/router",children:"\u8def\u7531\u7bc4\u4f8b"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var l=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),s=t(4164),l=t(3104),a=t(6347),i=t(205),c=t(7485),o=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[o,d]=p({queryString:t,groupId:s}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),f=(()=>{const e=o??x;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(o(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function g(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const s={},l=r.createContext(s);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);