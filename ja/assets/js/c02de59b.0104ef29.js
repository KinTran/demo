"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3223],{6555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(4848),r=n(8453),a=n(1470),o=n(9365);const i={title:"JS with RS",description:"Javascript with Rust",comment:"Keep this file as short and simple as possible. Its purpose is to ease in the reader into components in Yew instead of providing proper API docs"},l=void 0,c={id:"concepts/basic-web-technologies/js",title:"JS with RS",description:"Javascript with Rust",source:"@site/versioned_docs/version-0.20/concepts/basic-web-technologies/js.mdx",sourceDirName:"concepts/basic-web-technologies",slug:"/concepts/basic-web-technologies/js",permalink:"/ja/docs/0.20/concepts/basic-web-technologies/js",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/basic-web-technologies/js.mdx",tags:[],version:"0.20",frontMatter:{title:"JS with RS",description:"Javascript with Rust",comment:"Keep this file as short and simple as possible. Its purpose is to ease in the reader into components in Yew instead of providing proper API docs"},sidebar:"docs",previous:{title:"CSS with classes!",permalink:"/ja/docs/0.20/concepts/basic-web-technologies/css"},next:{title:"wasm-bindgen",permalink:"/ja/docs/0.20/concepts/basic-web-technologies/wasm-bindgen"}},u={},d=[{value:"wasm-bindgen",id:"wasm-bindgen",level:2},{value:"web-sys",id:"web-sys",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Yew centrally operates on the idea of keeping everything that a reusable piece of\r\nUI may need in one place - rust files, while also keeping the underlying technology\r\naccessible where necessary."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As of today, WebAssembly is not feature-complete for DOM interactions. This means even in Yew we\r\nsometimes rely on calling Javascript. What follows is an overview of the involved libraries."}),"\n",(0,s.jsx)(t.h2,{id:"wasm-bindgen",children:"wasm-bindgen"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/rustwasm/wasm-bindgen",children:(0,s.jsx)(t.code,{children:"wasm-bindgen"})})," is a library and tool that enables calls to javascript from rust and back to rust from javascript."]}),"\n",(0,s.jsxs)(t.p,{children:["We highly recommend you take a look at their ",(0,s.jsx)(t.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:"documentation"})," and our ",(0,s.jsx)(t.a,{href:"/ja/docs/0.20/concepts/basic-web-technologies/wasm-bindgen",children:"quick guide"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"web-sys",children:"web-sys"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsxs)(t.a,{href:"https://crates.io/crates/web-sys",children:[(0,s.jsx)(t.code,{children:"web-sys"})," crate"]})," provides bindings for Web APIs and allows us to write Javascript code in a rustyfied and safe way."]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{value:"JS",label:"JS",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let document = window.document\n"})})}),(0,s.jsx)(o.A,{value:"RS",label:"RS",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:",no_run",children:'use wasm_bindgen::UnwrapThrowExt;\r\nuse web_sys::window;\r\n\r\nlet document = window()\r\n    .expect_throw("window is undefined")\r\n    .document()\r\n    .expect_throw("document is undefined");\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Once again we highly recommend you take a look at their ",(0,s.jsx)(t.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:"documentation"})," and our ",(0,s.jsx)(t.a,{href:"/ja/docs/0.20/concepts/basic-web-technologies/web-sys",children:"quick guide"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),r=n(4164),a=n(3104),o=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,d]=b({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),w=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{w&&l(w)}),[w]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(2303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",w.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",w.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);