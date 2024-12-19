"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6640],{4522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453),a=n(1470),l=n(9365);const o={title:"HTML with html!",description:"Its HTML but not quite!",comment:"Keep this file as short and simple as possible. Its purpose is to ease the reader into components in Yew instead of providing proper API docs"},i=void 0,c={id:"concepts/basic-web-technologies/html",title:"HTML with html!",description:"Its HTML but not quite!",source:"@site/versioned_docs/version-0.21/concepts/basic-web-technologies/html.mdx",sourceDirName:"concepts/basic-web-technologies",slug:"/concepts/basic-web-technologies/html",permalink:"/zh-Hant/docs/concepts/basic-web-technologies/html",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/basic-web-technologies/html.mdx",tags:[],version:"0.21",frontMatter:{title:"HTML with html!",description:"Its HTML but not quite!",comment:"Keep this file as short and simple as possible. Its purpose is to ease the reader into components in Yew instead of providing proper API docs"},sidebar:"docs",previous:{title:"Using Basic Web Technologies In Yew",permalink:"/zh-Hant/docs/category/using-basic-web-technologies-in-yew"},next:{title:"CSS with classes!",permalink:"/zh-Hant/docs/concepts/basic-web-technologies/css"}},u={},d=[];function h(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["You can write expressions resembling HTML with the ",(0,r.jsx)(t.code,{children:"html!"})," macro. Behind the scenes, Yew turns\r\nit into rust code representing the DOM to generate."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet my_header: Html = html! {\r\n    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />\r\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"Similar to format expressions, there is an easy way to embed values from the surrounding\r\ncontext into the HTML by applying curly brackets:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet header_text = "Hello world".to_string();\r\nlet header_html: Html = html! {\r\n    <h1>{header_text}</h1>\r\n};\r\n\r\nlet count: usize = 5;\r\nlet counter_html: Html = html! {\r\n    <p>{"My age is: "}{count}</p>\r\n};\r\n\r\nlet combined_html: Html = html! {\r\n    <div>{header_html}{counter_html}</div>\r\n};\n'})}),"\n",(0,r.jsxs)(t.p,{children:["One major rule comes with the use of ",(0,r.jsx)(t.code,{children:"html!"})," - you can only return 1 wrapping node.\r\nTo render a list of multiple elements, ",(0,r.jsx)(t.code,{children:"html!"})," allows fragments. Fragments are tags\r\nwithout a name, that produce no HTML element by themselves."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"Invalid",label:"Invalid",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:", compile_fail",children:"use yew::html;\r\n\r\n// error: only one root HTML element allowed\r\nhtml! {\r\n\r\n    <div></div>\r\n    <p></p>\r\n\r\n};\n"})})}),(0,r.jsx)(l.A,{value:"Valid",label:"Valid",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"use yew::html;\r\n\r\n// fixed: using HTML fragments\r\nhtml! {\r\n    <>\r\n        <div></div>\r\n        <p></p>\r\n    </>\r\n};\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["We will introduce Yew and HTML further in depth in ",(0,r.jsx)(t.a,{href:"/zh-Hant/docs/concepts/html",children:"more HTML"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),s=n(4164),a=n(3104),l=n(6347),o=n(205),i=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:n,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=c??b;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),s=o[n].value;s!==r&&(c(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);