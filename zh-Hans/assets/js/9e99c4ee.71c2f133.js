"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7616],{6856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),a=n(8453),s=n(1470),l=n(9365);const o={title:"\u7a7a\u6807\u7b7e (Fragments)"},u=void 0,c={id:"concepts/html/fragments",title:"\u7a7a\u6807\u7b7e (Fragments)",description:"html! \u5b8f\u603b\u662f\u9700\u8981\u4e00\u4e2a\u6839\u8282\u70b9\u3002\u4e3a\u4e86\u7ed5\u8fc7\u8fd9\u4e2a\u9650\u5236\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u201c\u7a7a\u6807\u7b7e\u201d\uff08\u4e5f\u79f0\u4e3a\u201cfragments\u201d\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/html/fragments.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/fragments",permalink:"/zh-Hans/docs/next/concepts/html/fragments",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/html/fragments.mdx",tags:[],version:"current",frontMatter:{title:"\u7a7a\u6807\u7b7e (Fragments)"},sidebar:"docs",previous:{title:"\u7c7b",permalink:"/zh-Hans/docs/next/concepts/html/classes"},next:{title:"\u5217\u8868",permalink:"/zh-Hans/docs/next/concepts/html/lists"}},i={},d=[];function m(e){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"html!"})," \u5b8f\u603b\u662f\u9700\u8981\u4e00\u4e2a\u6839\u8282\u70b9\u3002\u4e3a\u4e86\u7ed5\u8fc7\u8fd9\u4e2a\u9650\u5236\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u201c\u7a7a\u6807\u7b7e\u201d\uff08\u4e5f\u79f0\u4e3a\u201cfragments\u201d\uff09\u3002"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Valid",label:"Valid",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"use yew::prelude::*;\r\n\r\nhtml! {\r\n    <>\r\n        <div></div>\r\n        <p></p>\r\n    </>\r\n};\r\n\n"})})}),(0,r.jsx)(l.A,{value:"Invalid",label:"Invalid",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust,",metastring:"compile_fail",children:"use yew::prelude::*;\r\n\r\n// \u9519\u8bef\uff1a\u53ea\u5141\u8bb8\u4e00\u4e2a\u6839 HTML \u5143\u7d20\r\n\r\nhtml! {\r\n    <div></div>\r\n    <p></p>\r\n};\r\n\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),a=n(4164),s=n(3104),l=n(6347),o=n(205),u=n(7485),c=n(1682),i=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),i=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:i,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);