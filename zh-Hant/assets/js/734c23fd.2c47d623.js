"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8797],{3618:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(4848),t=n(8453),l=n(1470),a=n(9365);const c={title:"\u985e\u5225",description:"\u4e00\u500b\u65b9\u4fbf\u7684\u5de8\u96c6\u4f86\u8655\u7406\u985e\u5225"},o=void 0,i={id:"concepts/html/classes",title:"\u985e\u5225",description:"\u4e00\u500b\u65b9\u4fbf\u7684\u5de8\u96c6\u4f86\u8655\u7406\u985e\u5225",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/concepts/html/classes.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/classes",permalink:"/demo/zh-Hant/docs/next/concepts/html/classes",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/html/classes.mdx",tags:[],version:"current",frontMatter:{title:"\u985e\u5225",description:"\u4e00\u500b\u65b9\u4fbf\u7684\u5de8\u96c6\u4f86\u8655\u7406\u985e\u5225"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6",permalink:"/demo/zh-Hant/docs/next/concepts/html/events"},next:{title:"\u7a7a\u6a19\u7c64 (Fragments)",permalink:"/demo/zh-Hant/docs/next/concepts/html/fragments"}},u={},d=[{value:"\u985e\u5225",id:"\u985e\u5225",level:2},{value:"\u63a5\u53d7\u985e\u5225\u7684\u5143\u4ef6",id:"\u63a5\u53d7\u985e\u5225\u7684\u5143\u4ef6",level:2}];function h(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"\u985e\u5225",children:"\u985e\u5225"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Classes"})," \u7d50\u69cb\u9ad4\u53ef\u4ee5\u7528\u4f86\u8655\u7406 HTML \u985e\u5225\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5c07\u5b57\u4e32\u63a8\u9001\u5230\u96c6\u5408\u6642\uff0c",(0,r.jsx)(s.code,{children:"Classes"})," \u78ba\u4fdd\u6bcf\u500b\u985e\u5225\u90fd\u6709\u4e00\u500b\u5143\u7d20\uff0c\u5373\u4f7f\u55ae\u4e00\u5b57\u4e32\u53ef\u80fd\u5305\u542b\u591a\u500b\u985e\u5225\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Classes"})," \u4e5f\u53ef\u4ee5\u900f\u904e\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"Extend"}),"\uff08\u5373 ",(0,r.jsx)(s.code,{children:"classes1.extend(classes2)"}),"\uff09\u6216 ",(0,r.jsx)(s.code,{children:"push()"}),"\uff08\u5373 ",(0,r.jsx)(s.code,{children:"classes1.push(classes2)"}),"\uff09\u4f86\u5408\u4f75\u3002\u4efb\u4f55\u5be6\u4f5c ",(0,r.jsx)(s.code,{children:"Into<Classes>"})," \u7684\u985e\u578b\u90fd\u53ef\u4ee5\u63a8\u9001\u5230\u73fe\u6709\u7684 ",(0,r.jsx)(s.code,{children:"Classes"})," \u4e0a\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"classes!"})," \u662f\u4e00\u500b\u65b9\u4fbf\u7684\u5de8\u96c6\uff0c\u5b83\u5efa\u7acb\u4e00\u500b\u55ae\u4e00\u7684 ",(0,r.jsx)(s.code,{children:"Classes"}),"\u3002\u5b83\u7684\u8f38\u5165\u63a5\u53d7\u4e00\u500b\u9017\u865f\u5206\u9694\u7684\u8868\u9054\u5f0f\u6e05\u55ae\u3002\u552f\u4e00\u7684\u8981\u6c42\u662f\u6bcf\u500b\u8868\u9054\u5f0f\u90fd\u5be6\u4f5c\u4e86 ",(0,r.jsx)(s.code,{children:"Into<Classes>"}),"\u3002"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(a.A,{value:"Literal",label:"Literal",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n    <div class={classes!("container")}></div>\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"Multiple",label:"Multiple",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!("class-1", "class-2")}></div>\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"String",label:"String",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nlet my_classes = String::from("class-1 class-2");\r\n\r\nhtml! {\r\n  <div class={classes!(my_classes)}></div>\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"Optional",label:"Optional",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(Some("class"))} />\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"Vector",label:"Vector",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(vec!["class-1", "class-2"])}></div>\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"Array",label:"Array",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(["class-1", "class-2"])}></div>\r\n};\n'})})})]}),"\n",(0,r.jsx)(s.h2,{id:"\u63a5\u53d7\u985e\u5225\u7684\u5143\u4ef6",children:"\u63a5\u53d7\u985e\u5225\u7684\u5143\u4ef6"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    #[prop_or_default]\r\n    class: Classes,\r\n    fill: bool,\r\n    children: Html,\r\n}\r\n\r\n#[function_component]\r\nfn MyComponent(props: &Props) -> Html {\r\n    let Props {\r\n        class,\r\n        fill,\r\n        children,\r\n    } = props;\r\n    html! {\r\n        <div\r\n            class={classes!(\r\n                "my-container-class",\r\n                fill.then(|| Some("my-fill-class")),\r\n                class.clone(),\r\n            )}\r\n        >\r\n            { children.clone() }\r\n        </div>\r\n    }\r\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,s,n)=>{n.d(s,{A:()=>a});n(6540);var r=n(4164);const t={tabItem:"tabItem_Ymn6"};var l=n(4848);function a(e){let{children:s,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,a),hidden:n,children:s})}},1470:(e,s,n)=>{n.d(s,{A:()=>w});var r=n(6540),t=n(4164),l=n(3104),a=n(6347),c=n(205),o=n(7485),i=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:t}}=e;return{value:s,label:n,attributes:r,default:t}}))}(n);return function(e){const s=(0,i.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const t=(0,a.W6)(),l=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(t.location.search);s.set(l,e),t.replace({...t.location,search:s.toString()})}),[l,t])]}function f(e){const{defaultValue:s,queryString:n=!1,groupId:t}=e,l=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:l}))),[i,d]=m({queryString:n,groupId:t}),[f,v]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,l]=(0,u.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),b=(()=>{const e=i??f;return p({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function g(e){let{className:s,block:n,selectedValue:r,selectValue:a,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const s=e.currentTarget,n=o.indexOf(s),t=c[n].value;t!==r&&(i(s),a(t))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},s),children:c.map((e=>{let{value:s,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,t.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function j(e){let{lazy:s,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==l})))})}function y(e){const s=f(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...s,...e}),(0,x.jsx)(j,{...s,...e})]})}function w(e){const s=(0,v.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var r=n(6540);const t={},l=r.createContext(t);function a(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);