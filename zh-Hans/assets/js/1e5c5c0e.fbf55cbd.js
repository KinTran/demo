"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8132],{6801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=n(4848),r=n(8453),a=n(1470),o=n(9365);const c={title:"Javascript \u4e0e Rust",description:"\u5728 Rust \u4e2d\u4f7f\u7528 JavaScript",comment:"\u5c3d\u91cf\u4fdd\u6301\u6587\u4ef6\u7b80\u77ed\u548c\u7b80\u5355\u3002\u5b83\u7684\u76ee\u7684\u662f\u8ba9\u8bfb\u8005\u66f4\u5bb9\u6613\u5730\u4e86\u89e3 Yew \u4e2d\u7684\u7ec4\u4ef6\uff0c\u800c\u4e0d\u662f\u63d0\u4f9b\u6b63\u786e\u7684 API \u6587\u6863"},l=void 0,i={id:"concepts/basic-web-technologies/js",title:"Javascript \u4e0e Rust",description:"\u5728 Rust \u4e2d\u4f7f\u7528 JavaScript",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/basic-web-technologies/js.mdx",sourceDirName:"concepts/basic-web-technologies",slug:"/concepts/basic-web-technologies/js",permalink:"/zh-Hans/docs/next/concepts/basic-web-technologies/js",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/basic-web-technologies/js.mdx",tags:[],version:"current",frontMatter:{title:"Javascript \u4e0e Rust",description:"\u5728 Rust \u4e2d\u4f7f\u7528 JavaScript",comment:"\u5c3d\u91cf\u4fdd\u6301\u6587\u4ef6\u7b80\u77ed\u548c\u7b80\u5355\u3002\u5b83\u7684\u76ee\u7684\u662f\u8ba9\u8bfb\u8005\u66f4\u5bb9\u6613\u5730\u4e86\u89e3 Yew \u4e2d\u7684\u7ec4\u4ef6\uff0c\u800c\u4e0d\u662f\u63d0\u4f9b\u6b63\u786e\u7684 API \u6587\u6863"},sidebar:"docs",previous:{title:"\u4f7f\u7528 classes! \u5b8f\u5904\u7406 CSS \u7c7b",permalink:"/zh-Hans/docs/next/concepts/basic-web-technologies/css"},next:{title:"wasm-bindgen",permalink:"/zh-Hans/docs/next/concepts/basic-web-technologies/wasm-bindgen"}},u={},d=[{value:"wasm-bindgen",id:"wasm-bindgen",level:2},{value:"web-sys",id:"web-sys",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Yew \u5728\u4e00\u4e2a\u5730\u65b9\u96c6\u4e2d\u4e86\u4e00\u4e2a\u53ef\u91cd\u7528\u7684 UI \u90e8\u5206\u53ef\u80fd\u9700\u8981\u7684\u6240\u6709\u5185\u5bb9 - rust \u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u5728\u5fc5\u8981\u65f6\u4fdd\u6301\u5e95\u5c42\u6280\u672f\u7684\u53ef\u8bbf\u95ee\u6027\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u622a\u81f3\u4eca\u5929\uff0cWebAssembly \u5bf9\u4e8e DOM \u4ea4\u4e92\u8fd8\u4e0d\u5b8c\u5168\u652f\u6301\u3002\u8fd9\u610f\u5473\u7740\u5373\u4f7f\u5728 Yew \u4e2d\uff0c\u6211\u4eec\u6709\u65f6\u4e5f\u4f9d\u8d56\u4e8e\u8c03\u7528 JavaScript\u3002\u63a5\u4e0b\u6765\u662f\u6d89\u53ca\u7684\u5e93\u7684\u6982\u8ff0\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"wasm-bindgen",children:"wasm-bindgen"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/rustwasm/wasm-bindgen",children:(0,s.jsx)(t.code,{children:"wasm-bindgen"})})," \u662f\u4e00\u4e2a\u5728 JavaScript \u548c Rust \u51fd\u6570\u4e4b\u95f4\u5efa\u7acb\u8c03\u7528\u6865\u6881\u7684\u5e93\u548c\u5de5\u5177\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u67e5\u770b\u4ed6\u4eec\u7684",(0,s.jsx)(t.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:"\u6587\u6863"}),"\u548c\u6211\u4eec\u7684",(0,s.jsx)(t.a,{href:"/zh-Hans/docs/next/concepts/basic-web-technologies/wasm-bindgen",children:"\u5feb\u901f\u6307\u5357"}),"\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"web-sys",children:"web-sys"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.a,{href:"https://crates.io/crates/web-sys",children:[(0,s.jsx)(t.code,{children:"web-sys"})," crate"]})," \u4e3a Web API \u63d0\u4f9b\u4e86\u7ed1\u5b9a\uff0c\u5e76\u5141\u8bb8\u6211\u4eec\u4ee5\u4e00\u79cd\u7ecf\u8fc7 Rust \u5904\u7406\u548c\u5b89\u5168\u7684\u65b9\u5f0f\u7f16\u5199 JavaScript \u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{value:"JS",label:"JS",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let document = window.document\n"})})}),(0,s.jsx)(o.A,{value:"RS",label:"RS",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:",no_run",children:'use wasm_bindgen::UnwrapThrowExt;\r\nuse web_sys::window;\r\n\r\nlet document = window()\r\n    .expect_throw("window is undefined")\r\n    .document()\r\n    .expect_throw("document is undefined");\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["\u518d\u6b21\u5f3a\u8c03\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u67e5\u770b\u4ed6\u4eec\u7684",(0,s.jsx)(t.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:"\u6587\u6863"}),"\u548c\u6211\u4eec\u7684",(0,s.jsx)(t.a,{href:"/zh-Hans/docs/next/concepts/basic-web-technologies/web-sys",children:"\u5feb\u901f\u6307\u5357"}),"\u3002"]})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),r=n(4164),a=n(3104),o=n(6347),c=n(205),l=n(7485),i=n(1682),u=n(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[i,d]=p({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),w=(()=>{const e=i??m;return b({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{w&&l(w)}),[w]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(2303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=c[n].value;r!==s&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",w.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",w.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);