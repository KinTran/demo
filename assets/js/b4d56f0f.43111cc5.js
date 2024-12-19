"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18],{3231:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=r(4848),s=r(8453),l=r(1470),i=r(9365);const a={title:"HTML",sidebar_label:"Introduction",description:"The procedural macro for generating HTML and SVG",slug:"/concepts/html"},o=void 0,c={id:"concepts/html/introduction",title:"HTML",description:"The procedural macro for generating HTML and SVG",source:"@site/docs/concepts/html/introduction.mdx",sourceDirName:"concepts/html",slug:"/concepts/html",permalink:"/demo/docs/next/concepts/html",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/html/introduction.mdx",tags:[],version:"current",frontMatter:{title:"HTML",sidebar_label:"Introduction",description:"The procedural macro for generating HTML and SVG",slug:"/concepts/html"},sidebar:"docs",previous:{title:"Generic Components",permalink:"/demo/docs/next/concepts/function-components/generics"},next:{title:"Components",permalink:"/demo/docs/next/concepts/html/components"}},d={},u=[{value:"Tag Structure",id:"tag-structure",level:2},{value:"Children",id:"children",level:2},{value:"Lints",id:"lints",level:2},{value:"Specifying attributes and properties",id:"specifying-attributes-and-properties",level:2},{value:"Special properties",id:"special-properties",level:3},{value:"Conditional Rendering",id:"conditional-rendering",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"html!"})," macro allows you to write HTML and SVG code declaratively. It is similar to JSX\r\n(an extension to JavaScript that allows you to write HTML-like code inside of JavaScript)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Important notes"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"html!"})," macro only accepts one root html node (you can counteract this by using\r\n",(0,t.jsx)(n.a,{href:"/demo/docs/next/concepts/html/fragments",children:"fragments"})," or ",(0,t.jsx)(n.a,{href:"/demo/docs/next/concepts/html/lists",children:"iterators"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["An empty ",(0,t.jsx)(n.code,{children:"html! {}"})," invocation is valid and will not render anything"]}),"\n",(0,t.jsxs)(n.li,{children:["Literals must always be quoted and wrapped in braces: ",(0,t.jsx)(n.code,{children:'html! { <p>{ "Hello, World" }</p> }'})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"html!"})," macro will make all tag names lowercase. To use upper case characters (which are required for some SVG elements) use ",(0,t.jsx)(n.a,{href:"/demo/docs/next/concepts/html/elements#dynamic-tag-names",children:"dynamic tag names"}),": ",(0,t.jsx)(n.code,{children:'html! { <@{"myTag"}></@> }'})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"html!"})," macro can reach the default recursion limit of the compiler. If you encounter compilation errors,\r\nadd an attribute like ",(0,t.jsx)(n.code,{children:'#![recursion_limit="1024"]'})," in the crate root to overcome the problem."]})}),"\n",(0,t.jsx)(n.h2,{id:"tag-structure",children:"Tag Structure"}),"\n",(0,t.jsx)(n.p,{children:"Tags are based on HTML tags. Components, Elements, and Lists are all based on this tag syntax."}),"\n",(0,t.jsxs)(n.p,{children:["Tags must either self-close ",(0,t.jsx)(n.code,{children:"<... />"})," or have a corresponding end tag for each start tag."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"Open - Close",label:"Open - Close",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nhtml! {\r\n  <div id="my_div"></div>\r\n};\n'})})}),(0,t.jsx)(i.A,{value:"Invalid",label:"Invalid",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",compile_fail",children:'use yew::prelude::*;\r\n\r\nhtml! {\r\n  <div id="my_div"> // <- MISSING CLOSE TAG\r\n};\n'})})})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"Self-closing",label:"Self-closing",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nhtml! {\r\n  <input id="my_input" />\r\n};\n'})})}),(0,t.jsx)(i.A,{value:"Invalid",label:"Invalid",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",compile_fail",children:'use yew::prelude::*;\r\n\r\nhtml! {\r\n  <input id="my_input"> // <- MISSING SELF-CLOSE\r\n};\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For convenience, elements which ",(0,t.jsx)(n.em,{children:"usually"})," require a closing tag are ",(0,t.jsx)(n.strong,{children:"allowed"})," to self-close. For example, writing ",(0,t.jsx)(n.code,{children:'html! { <div class="placeholder" /> }'})," is valid."]})}),"\n",(0,t.jsx)(n.h2,{id:"children",children:"Children"}),"\n",(0,t.jsx)(n.p,{children:"Create complex nested HTML and SVG layouts with ease:"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"HTML",label:"HTML",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nhtml! {\r\n    <div>\r\n        <div data-key="abc"></div>\r\n        <div class="parent">\r\n            <span class="child" value="anything"></span>\r\n            <label for="first-name">{ "First Name" }</label>\r\n            <input type="text" id="first-name" value="placeholder" />\r\n            <input type="checkbox" checked=true />\r\n            <textarea value="write a story" />\r\n            <select name="status">\r\n                <option selected=true disabled=false value="">{ "Selected" }</option>\r\n                <option selected=false disabled=true value="">{ "Unselected" }</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n};\n'})})}),(0,t.jsx)(i.A,{value:"SVG",label:"SVG",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nhtml! {\r\n    <svg width="149" height="147" viewBox="0 0 149 147" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n        <path d="M60.5776 13.8268L51.8673 42.6431L77.7475 37.331L60.5776 13.8268Z" fill="#DEB819"/>\r\n        <path d="M108.361 94.9937L138.708 90.686L115.342 69.8642" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\r\n        <g filter="url(#filter0_d)">\r\n            <circle cx="75.3326" cy="73.4918" r="55" fill="#FDD630"/>\r\n            <circle cx="75.3326" cy="73.4918" r="52.5" stroke="black" stroke-width="5"/>\r\n        </g>\r\n        <circle cx="71" cy="99" r="5" fill="white" fill-opacity="0.75" stroke="black" stroke-width="3"/>\r\n        <defs>\r\n            <filter id="filter0_d" x="16.3326" y="18.4918" width="118" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\r\n                <@{"feGaussianBlur"} stdDeviation="2"/>\r\n                <@{"feColorMatrix"} in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\r\n            </filter>\r\n        </defs>\r\n    </svg>\r\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"lints",children:"Lints"}),"\n",(0,t.jsxs)(n.p,{children:["If you compile Yew using a nightly version of the Rust compiler, the macro will warn you about some\r\ncommon pitfalls that you might run into. Of course, you may need to use the stable compiler (e.g.\r\nyour organization might have a policy mandating it) for release builds, but even if you're using a\r\nstable toolchain, running ",(0,t.jsx)(n.code,{children:"cargo +nightly check"})," might flag some ways that you could improve your\r\nHTML code."]}),"\n",(0,t.jsxs)(n.p,{children:["At the moment the lints are mostly accessibility-related. If you have ideas for lints, please feel\r\nfree to ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/issues/1334",children:"chime in on this issue"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"specifying-attributes-and-properties",children:"Specifying attributes and properties"}),"\n",(0,t.jsx)(n.p,{children:"Attributes are set on elements in the same way as in normal HTML:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet value = "something";\r\nhtml! { <div attribute={value} /> };\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Properties are specified with ",(0,t.jsx)(n.code,{children:"~"})," before the element name:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nhtml! { <my-element ~property="abc" /> };\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The braces around the value can be ommited if the value is a literal."})}),"\n",(0,t.jsx)(n.admonition,{title:"What classifies as a literal",type:"note",children:(0,t.jsxs)(n.p,{children:["Literals are all valid ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/reference/expressions/literal-expr.html",children:"literal expressions"}),"\r\nin Rust. Note that ",(0,t.jsxs)(n.a,{href:"https://users.rust-lang.org/t/why-are-negative-value-literals-expressions/43333",children:["negative numbers are ",(0,t.jsx)(n.strong,{children:"not"})," literals"]}),"\r\nand thus must be encosed in curly-braces ",(0,t.jsx)(n.code,{children:"{-6}"})]})}),"\n",(0,t.jsx)(n.admonition,{title:"Component properties",type:"note",children:(0,t.jsxs)(n.p,{children:["Component properites are passed as Rust objects and are different from the element attributes/properties described here.\r\nRead more about them at ",(0,t.jsx)(n.a,{href:"/demo/docs/next/concepts/function-components/properties",children:"Component Properties"})]})}),"\n",(0,t.jsx)(n.h3,{id:"special-properties",children:"Special properties"}),"\n",(0,t.jsxs)(n.p,{children:["There are special properties which don't directly influence the DOM but instead act as instructions to Yew's virtual DOM.\r\nCurrently, there are two such special props: ",(0,t.jsx)(n.code,{children:"ref"})," and ",(0,t.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ref"})," allows you to access and manipulate the underlying DOM node directly. See ",(0,t.jsx)(n.a,{href:"/demo/docs/next/concepts/function-components/node-refs",children:"Refs"})," for more details."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"key"})," on the other hand gives an element a unique identifier which Yew can use for optimization purposes."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Read more at ",(0,t.jsx)(n.a,{href:"./html/lists",children:"Lists"})]})}),"\n",(0,t.jsx)(n.h2,{id:"conditional-rendering",children:"Conditional Rendering"}),"\n",(0,t.jsxs)(n.p,{children:["Markup can be rendered conditionally by using Rust's conditional structures. ' +\r\n'Currently only ",(0,t.jsx)(n.code,{children:"if"})," and ",(0,t.jsx)(n.code,{children:"if let"})," are supported."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nhtml! {\r\n  if true {\r\n      <p>{ "True case" }</p>\r\n  }\r\n};\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Read more at ",(0,t.jsx)(n.a,{href:"/demo/docs/next/concepts/html/conditional-rendering",children:"Conditional Rendering"})]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var l=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),s=r(4164),l=r(3104),i=r(6347),a=r(205),o=r(7485),c=r(1682),d=r(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,u]=m({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),g=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),s=a[r].value;s!==t&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:l}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);