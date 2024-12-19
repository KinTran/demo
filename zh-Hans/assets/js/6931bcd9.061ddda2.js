"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1376],{7652:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=n(4848),r=n(8453),a=n(1470),l=n(9365);const c={title:"CSS with classes!",description:"A handy macro to handle classes",comment:"Keep this file as short and simple as possible. Its purpose is to ease the reader into components in Yew instead of providing proper API docs"},i=void 0,o={id:"concepts/basic-web-technologies/css",title:"CSS with classes!",description:"A handy macro to handle classes",source:"@site/versioned_docs/version-0.21/concepts/basic-web-technologies/css.mdx",sourceDirName:"concepts/basic-web-technologies",slug:"/concepts/basic-web-technologies/css",permalink:"/zh-Hans/docs/concepts/basic-web-technologies/css",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/basic-web-technologies/css.mdx",tags:[],version:"0.21",frontMatter:{title:"CSS with classes!",description:"A handy macro to handle classes",comment:"Keep this file as short and simple as possible. Its purpose is to ease the reader into components in Yew instead of providing proper API docs"},sidebar:"docs",previous:{title:"HTML with html!",permalink:"/zh-Hans/docs/concepts/basic-web-technologies/html"},next:{title:"JS with RS",permalink:"/zh-Hans/docs/concepts/basic-web-technologies/js"}},u={},d=[{value:"Classes",id:"classes",level:2},{value:"Inline Styles",id:"inline-styles",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Yew does not natively provide a CSS-in-Rust solution but helps with styling by providing\r\nprogrammatic ways to interact with the HTML ",(0,t.jsx)(s.code,{children:"class"})," attribute."]}),"\n",(0,t.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"classes!"})," macro and associated ",(0,t.jsx)(s.code,{children:"Classes"})," struct simplify the use of HTML classes:"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"Literal",label:"Literal",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!("container")}></div>\r\n};\n'})})}),(0,t.jsx)(l.A,{value:"Multiple",label:"Multiple",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!("class-1", "class-2")}></div>\r\n};\n'})})}),(0,t.jsx)(l.A,{value:"String",label:"String",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(String::from("class-1 class-2"))}></div>\r\n};\n'})})}),(0,t.jsx)(l.A,{value:"Optional",label:"Optional",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(Some("class"))} />\r\n};\n'})})}),(0,t.jsx)(l.A,{value:"Vector",label:"Vector",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(vec!["class-1", "class-2"])}></div>\r\n};\n'})})}),(0,t.jsx)(l.A,{value:"Slice",label:"Slice",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(["class-1", "class-2"].as_ref())}></div>\r\n};\n'})})})]}),"\n",(0,t.jsxs)(s.p,{children:["We will expand upon this concept in ",(0,t.jsx)(s.a,{href:"../../more/css",children:"more CSS"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"inline-styles",children:"Inline Styles"}),"\n",(0,t.jsxs)(s.p,{children:["Currently Yew does not provide any special help with inline styles specified via the ",(0,t.jsx)(s.code,{children:"styles"})," attribute,\r\nbut you can use it like any other HTML attribute:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div style="color: red;"></div>\r\n};\n'})}),"\n",(0,t.jsxs)(s.p,{children:["We will expand upon this concept in ",(0,t.jsx)(s.a,{href:"../../more/css",children:"more CSS"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,s,n)=>{n.d(s,{A:()=>l});n(6540);var t=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:s,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:n,children:s})}},1470:(e,s,n)=>{n.d(s,{A:()=>j});var t=n(6540),r=n(4164),a=n(3104),l=n(6347),c=n(205),i=n(7485),o=n(1682),u=n(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.W6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})}),[a,r])]}function b(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,a=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:a}))),[o,d]=m({queryString:n,groupId:r}),[b,v]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,a]=(0,u.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=o??b;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:s,block:n,selectedValue:t,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const s=e.currentTarget,n=i.indexOf(s),r=c[n].value;r!==t&&(o(s),l(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;s=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;s=i[n]??i[i.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:c.map((e=>{let{value:s,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function w(e){let{lazy:s,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function y(e){const s=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...s,...e}),(0,g.jsx)(w,{...s,...e})]})}function j(e){const s=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var t=n(6540);const r={},a=t.createContext(r);function l(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);