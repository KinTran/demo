"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3874],{1806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=t(4848),o=t(8453);t(1470),t(9365);const a={title:"\u6cdb\u578b\u5143\u4ef6",description:"\u51fd\u6578\u5143\u4ef6\u7684 #[function_component] \u5c6c\u6027"},s=void 0,u={id:"concepts/function-components/generics",title:"\u6cdb\u578b\u5143\u4ef6",description:"\u51fd\u6578\u5143\u4ef6\u7684 #[function_component] \u5c6c\u6027",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/concepts/function-components/generics.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/generics",permalink:"/demo/zh-Hant/docs/next/concepts/function-components/generics",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/function-components/generics.mdx",tags:[],version:"current",frontMatter:{title:"\u6cdb\u578b\u5143\u4ef6",description:"\u51fd\u6578\u5143\u4ef6\u7684 #[function_component] \u5c6c\u6027"},sidebar:"docs",previous:{title:"\u7d44\u4ef6\u4e4b\u9593\u7684\u901a\u8a0a",permalink:"/demo/zh-Hant/docs/next/concepts/function-components/communication"},next:{title:"Introduction",permalink:"/demo/zh-Hant/docs/next/concepts/html"}},c={},l=[];function i(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"#[function_component]"})," \u5c6c\u6027\u4e5f\u9069\u7528\u65bc\u7528\u65bc\u5efa\u7acb\u6cdb\u578b\u5143\u4ef6\u7684\u6cdb\u578b\u51fd\u6578\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use std::fmt::Display;\r\nuse yew::{function_component, html, Properties, Html};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props<T>\r\nwhere\r\n    T: PartialEq,\r\n{\r\n    data: T,\r\n}\r\n\r\n#[function_component]\r\npub fn MyGenericComponent<T>(props: &Props<T>) -> Html\r\nwhere\r\n    T: PartialEq + Clone + Into<Html>,\r\n{\r\n    html! {\r\n        <p>\r\n            { props.data.clone().into() }\r\n        </p>\r\n    }\r\n}\r\n\r\n// \u4e4b\u5f8c\u53ef\u4ee5\u9019\u6a23\u4f7f\u7528\r\nhtml! {\r\n    <MyGenericComponent<i32> data=123 />\r\n};\r\n\r\n// \u6216\u8005\r\nhtml! {\r\n    <MyGenericComponent<String> data={"foo".to_string()} />\r\n};\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const o={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(6540),o=t(4164),a=t(3104),s=t(6347),u=t(205),c=t(7485),l=t(1682),i=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=f({queryString:t,groupId:o}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,i.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),v=(()=>{const e=l??h;return m({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),i=e=>{const n=e.currentTarget,t=c.indexOf(n),o=u[t].value;o!==r&&(l(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:i,...a,className:(0,o.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>u});var r=t(6540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);