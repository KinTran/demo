"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7814],{4735:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=n(4848),r=n(8453),l=n(1470),a=n(9365);const c={title:"Classes",description:"A handy macro to handle classes"},o=void 0,i={id:"concepts/html/classes",title:"Classes",description:"A handy macro to handle classes",source:"@site/docs/concepts/html/classes.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/classes",permalink:"/docs/next/concepts/html/classes",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/html/classes.mdx",tags:[],version:"current",frontMatter:{title:"Classes",description:"A handy macro to handle classes"},sidebar:"docs",previous:{title:"Events",permalink:"/docs/next/concepts/html/events"},next:{title:"Fragments",permalink:"/docs/next/concepts/html/fragments"}},u={},d=[{value:"Classes",id:"classes",level:2},{value:"Components that accept classes",id:"components-that-accept-classes",level:2}];function h(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(s.p,{children:["The struct ",(0,t.jsx)(s.code,{children:"Classes"})," can be used to deal with HTML classes."]}),"\n",(0,t.jsxs)(s.p,{children:["When pushing a string to the set, ",(0,t.jsx)(s.code,{children:"Classes"})," ensures that there is one element\r\nfor every class even if a single string might contain multiple classes."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Classes"})," can also be merged by using ",(0,t.jsx)(s.code,{children:"Extend"})," (i.e.\r\n",(0,t.jsx)(s.code,{children:"classes1.extend(classes2)"}),") or ",(0,t.jsx)(s.code,{children:"push()"})," (i.e. ",(0,t.jsx)(s.code,{children:"classes1.push(classes2)"}),").\r\nAny type that implements ",(0,t.jsx)(s.code,{children:"Into<Classes>"})," can be pushed onto an existing ",(0,t.jsx)(s.code,{children:"Classes"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The macro ",(0,t.jsx)(s.code,{children:"classes!"})," is a convenient macro that creates one single ",(0,t.jsx)(s.code,{children:"Classes"}),".\r\nIts input accepts a comma-separated list of expressions. The only requirement\r\nis that every expression implements ",(0,t.jsx)(s.code,{children:"Into<Classes>"}),"."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(a.A,{value:"Literal",label:"Literal",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n    <div class={classes!("container")}></div>\r\n};\n'})})}),(0,t.jsx)(a.A,{value:"Multiple",label:"Multiple",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!("class-1", "class-2")}></div>\r\n};\n'})})}),(0,t.jsx)(a.A,{value:"String",label:"String",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nlet my_classes = String::from("class-1 class-2");\r\n\r\nhtml! {\r\n  <div class={classes!(my_classes)}></div>\r\n};\n'})})}),(0,t.jsx)(a.A,{value:"Optional",label:"Optional",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(Some("class"))} />\r\n};\n'})})}),(0,t.jsx)(a.A,{value:"Vector",label:"Vector",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(vec!["class-1", "class-2"])}></div>\r\n};\n'})})}),(0,t.jsx)(a.A,{value:"Array",label:"Array",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::{classes, html};\r\n\r\nhtml! {\r\n  <div class={classes!(["class-1", "class-2"])}></div>\r\n};\n'})})})]}),"\n",(0,t.jsx)(s.h2,{id:"components-that-accept-classes",children:"Components that accept classes"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    #[prop_or_default]\r\n    class: Classes,\r\n    fill: bool,\r\n    children: Html,\r\n}\r\n\r\n#[function_component]\r\nfn MyComponent(props: &Props) -> Html {\r\n    let Props {\r\n        class,\r\n        fill,\r\n        children,\r\n    } = props;\r\n    html! {\r\n        <div\r\n            class={classes!(\r\n                "my-container-class",\r\n                fill.then(|| Some("my-fill-class")),\r\n                class.clone(),\r\n            )}\r\n        >\r\n            { children.clone() }\r\n        </div>\r\n    }\r\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,s,n)=>{n.d(s,{A:()=>a});n(6540);var t=n(4164);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function a(e){let{children:s,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:n,children:s})}},1470:(e,s,n)=>{n.d(s,{A:()=>w});var t=n(6540),r=n(4164),l=n(3104),a=n(6347),c=n(205),o=n(7485),i=n(1682),u=n(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,i.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const r=(0,a.W6)(),l=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(r.location.search);s.set(l,e),r.replace({...r.location,search:s.toString()})}),[l,r])]}function f(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,l=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:l}))),[i,d]=m({queryString:n,groupId:r}),[f,v]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,l]=(0,u.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=i??f;return p({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function g(e){let{className:s,block:n,selectedValue:t,selectValue:a,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const s=e.currentTarget,n=o.indexOf(s),r=c[n].value;r!==t&&(i(s),a(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:c.map((e=>{let{value:s,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function j(e){let{lazy:s,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==l})))})}function y(e){const s=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...s,...e}),(0,x.jsx)(j,{...s,...e})]})}function w(e){const s=(0,v.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(6540);const r={},l=t.createContext(r);function a(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);