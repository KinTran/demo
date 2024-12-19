"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7834],{1391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(4848),a=r(8453),s=r(1470),l=r(9365);const o={title:"Fragments"},u=void 0,c={id:"concepts/html/fragments",title:"Fragments",description:"The html! macro always requires a single root node. To get around this restriction, you",source:"@site/versioned_docs/version-0.21/concepts/html/fragments.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/fragments",permalink:"/demo/zh-Hant/docs/concepts/html/fragments",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/html/fragments.mdx",tags:[],version:"0.21",frontMatter:{title:"Fragments"},sidebar:"docs",previous:{title:"Classes",permalink:"/demo/zh-Hant/docs/concepts/html/classes"},next:{title:"Lists",permalink:"/demo/zh-Hant/docs/concepts/html/lists"}},i={},d=[];function m(e){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"html!"}),' macro always requires a single root node. To get around this restriction, you\r\ncan use an "empty tag" (these are also called "fragments").']}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"Valid",label:"Valid",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"use yew::prelude::*;\r\n\r\nhtml! {\r\n    <>\r\n        <div></div>\r\n        <p></p>\r\n    </>\r\n};\r\n\n"})})}),(0,n.jsx)(l.A,{value:"Invalid",label:"Invalid",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust,",metastring:"compile_fail",children:"use yew::prelude::*;\r\n\r\n// error: only one root html element allowed\r\n\r\nhtml! {\r\n    <div></div>\r\n    <p></p>\r\n};\r\n\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),a=r(4164),s=r(3104),l=r(6347),o=r(205),u=r(7485),c=r(1682),i=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=m(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),i=e=>{const t=e.currentTarget,r=u.indexOf(t),a=o[r].value;a!==n&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:i,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(6540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);