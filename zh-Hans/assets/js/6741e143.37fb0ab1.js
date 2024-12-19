"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5946],{4975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(4848),l=t(8453),s=t(1470),a=t(9365);const i={title:"HTML",sidebar_label:"Introduction",description:"The procedural macro for generating HTML and SVG"},o=void 0,c={id:"concepts/html/introduction",title:"HTML",description:"The procedural macro for generating HTML and SVG",source:"@site/versioned_docs/version-0.19.0/concepts/html/introduction.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/introduction",permalink:"/zh-Hans/docs/0.19.0/concepts/html/introduction",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/html/introduction.mdx",tags:[],version:"0.19.0",frontMatter:{title:"HTML",sidebar_label:"Introduction",description:"The procedural macro for generating HTML and SVG"},sidebar:"docs",previous:{title:"Refs",permalink:"/zh-Hans/docs/0.19.0/concepts/components/refs"},next:{title:"Components",permalink:"/zh-Hans/docs/0.19.0/concepts/html/components"}},d={},u=[{value:"Tag Structure",id:"tag-structure",level:2},{value:"Children",id:"children",level:2},{value:"Lints",id:"lints",level:2},{value:"Special properties",id:"special-properties",level:2},{value:"If blocks",id:"if-blocks",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"html!"})," macro allows you to write HTML and SVG code declaratively. It is similar to JSX\r\n(an extension to JavaScript which allows you to write HTML-like code inside of JavaScript)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Important notes"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"html!"})," macro only accepts one root html node (you can counteract this by\r\n",(0,r.jsx)(n.a,{href:"/zh-Hans/docs/0.19.0/concepts/html/lists",children:"using fragments or iterators"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["An empty ",(0,r.jsx)(n.code,{children:"html! {}"})," invocation is valid and will not render anything"]}),"\n",(0,r.jsxs)(n.li,{children:["Literals must always be quoted and wrapped in braces: ",(0,r.jsx)(n.code,{children:'html! { "Hello, World" }'})]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"html!"})," macro will make all tag names lowercase. To use uppercase characters (which are required for some SVG elements) you must use ",(0,r.jsx)(n.a,{href:"https://docs.rs/yew/latest/yew/virtual_dom/struct.VTag.html#method.new",children:(0,r.jsx)(n.code,{children:"VTag::new"})})," to create elements directly and add ",(0,r.jsx)(n.a,{href:"https://docs.rs/yew/latest/yew/virtual_dom/struct.VTag.html#method.add_attribute",children:"attributes"})," and ",(0,r.jsx)(n.a,{href:"https://docs.rs/yew/latest/yew/virtual_dom/struct.VTag.html#method.add_child",children:"children"})," manually instead of using the macro. There is a more ergonomic solution to this in Yew Next."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"html!"})," macro can reach the default recursion limit of the compiler. If you encounter compilation errors, add an attribute like ",(0,r.jsx)(n.code,{children:'#![recursion_limit="1024"]'})," in the crate root to overcome the problem."]})}),"\n",(0,r.jsx)(n.h2,{id:"tag-structure",children:"Tag Structure"}),"\n",(0,r.jsx)(n.p,{children:"Tags are based on HTML tags. Components, Elements, and Lists are all based on this tag syntax."}),"\n",(0,r.jsxs)(n.p,{children:["Tags must either self-close ",(0,r.jsx)(n.code,{children:"<... />"})," or have a corresponding end tag for each start tag."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"Open - Close",label:"Open - Close",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nhtml! {\r\n  <div id="my_div"></div>\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"Invalid",label:"Invalid",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",compile_fail",children:'use yew::html;\r\n\r\nhtml! {\r\n  <div id="my_div"> // <- MISSING CLOSE TAG\r\n};\n'})})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"Self-closing",label:"Self-closing",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nhtml! {\r\n  <input id="my_input" />\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"Invalid",label:"Invalid",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",compile_fail",children:'use yew::html;\r\n\r\nhtml! {\r\n  <input id="my_input"> // <- MISSING SELF-CLOSE\r\n};\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For convenience, elements which ",(0,r.jsx)(n.em,{children:"usually"})," require a closing tag are ",(0,r.jsx)(n.strong,{children:"allowed"})," to self-close. For example, writing ",(0,r.jsx)(n.code,{children:'html! { <div class="placeholder" /> }'})," is valid."]})}),"\n",(0,r.jsx)(n.h2,{id:"children",children:"Children"}),"\n",(0,r.jsx)(n.p,{children:"Create complex nested HTML and SVG layouts with ease:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"HTML",label:"HTML",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nhtml! {\r\n    <div>\r\n        <div data-key="abc"></div>\r\n        <div class="parent">\r\n            <span class="child" value="anything"></span>\r\n            <label for="first-name">{ "First Name" }</label>\r\n            <input type="text" id="first-name" value="placeholder" />\r\n            <input type="checkbox" checked=true />\r\n            <textarea value="write a story" />\r\n            <select name="status">\r\n                <option selected=true disabled=false value="">{ "Selected" }</option>\r\n                <option selected=false disabled=true value="">{ "Unselected" }</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n};\n'})})}),(0,r.jsxs)(a.A,{value:"SVG",label:"SVG",children:[(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"html!"})," macro will convert all tag names to lowercase but some SVG elements require uppercase characters."]}),(0,r.jsx)(n.p,{children:"See above for a workaround."})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nhtml! {\r\n    <svg width="149" height="147" viewBox="0 0 149 147" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n        <path d="M60.5776 13.8268L51.8673 42.6431L77.7475 37.331L60.5776 13.8268Z" fill="#DEB819"/>\r\n        <path d="M108.361 94.9937L138.708 90.686L115.342 69.8642" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\r\n        <g>\r\n            <circle cx="75.3326" cy="73.4918" r="55" fill="#FDD630"/>\r\n            <circle cx="75.3326" cy="73.4918" r="52.5" stroke="black" stroke-width="5"/>\r\n        </g>\r\n        <circle cx="71" cy="99" r="5" fill="white" fill-opacity="0.75" stroke="black" stroke-width="3"/>\r\n    </svg>\r\n};\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"lints",children:"Lints"}),"\n",(0,r.jsxs)(n.p,{children:["If you compile Yew using a nightly version of the Rust compiler, the macro will warn you about some\r\ncommon pitfalls that you might run into. Of course, you may need to use the stable compiler (e.g.\r\nyour organization might have a policy mandating it) for release builds, but even if you're using a\r\nstable toolchain, running ",(0,r.jsx)(n.code,{children:"cargo +nightly check"})," might flag some ways that you could improve your\r\nHTML code."]}),"\n",(0,r.jsxs)(n.p,{children:["At the moment the lints are mostly accessibility-related. If you have ideas for lints, please feel\r\nfree to ",(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/issues/1334",children:"chime in on this issue"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"special-properties",children:"Special properties"}),"\n",(0,r.jsxs)(n.p,{children:["There are special properties which don't directly influence the DOM but instead act as instructions to Yew's virtual DOM.\r\nCurrently, there are two such special props: ",(0,r.jsx)(n.code,{children:"ref"})," and ",(0,r.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ref"})," allows you to access and manipulate the underlying DOM node directly. See ",(0,r.jsx)(n.a,{href:"../components/refs",children:"Refs"})," for more details."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"key"})," on the other hand gives an element a unique identifier which Yew can use for optimization purposes."]}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.p,{children:["The documentation for keys is yet to be written. See ",(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/issues/1263",children:"#1263"}),"."]}),(0,r.jsx)(n.p,{children:"For now, use keys when you have a list where the order of elements changes. This includes inserting or removing elements from anywhere but the end of the list."})]}),"\n",(0,r.jsx)(n.h2,{id:"if-blocks",children:"If blocks"}),"\n",(0,r.jsxs)(n.p,{children:["To conditionally render some markup, we wrap it in an ",(0,r.jsx)(n.code,{children:"if"})," block:"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"if",label:"if",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nhtml! {\r\n    if true {\r\n        <p>{ "True case" }</p>\r\n    }\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"if - else",label:"if - else",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\nlet some_condition = true;\r\n\r\nhtml! {\r\n    if some_condition {\r\n        <p>{ "True case" }</p>\r\n    } else {\r\n        <p>{ "False case" }</p>\r\n    }\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"if let",label:"if let",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\nlet some_text = Some("text");\r\n\r\nhtml! {\r\n    if let Some(text) = some_text {\r\n        <p>{ text }</p>\r\n    }\r\n};\n'})})}),(0,r.jsx)(a.A,{value:"if let else",label:"if let else",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\nlet some_text = Some("text");\r\n\r\nhtml! {\r\n    if let Some(text) = some_text {\r\n        <p>{ text }</p>\r\n    } else {\r\n        <p>{ "False case" }</p>\r\n    }\r\n};\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const l={tabItem:"tabItem_Ymn6"};var s=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),l=t(4164),s=t(3104),a=t(6347),i=t(205),o=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=p({queryString:t,groupId:l}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,d.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),g=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==r&&(c(n),a(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);