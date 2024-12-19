"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2625],{8455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(4848),s=n(8453),a=n(1470),i=n(9365);const l={title:"Lists"},o=void 0,c={id:"concepts/html/lists",title:"Lists",description:"Iterators",source:"@site/versioned_docs/version-0.21/concepts/html/lists.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/lists",permalink:"/docs/concepts/html/lists",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/html/lists.mdx",tags:[],version:"0.21",frontMatter:{title:"Lists"},sidebar:"docs",previous:{title:"Fragments",permalink:"/docs/concepts/html/fragments"},next:{title:"Literals and Expressions",permalink:"/docs/concepts/html/literals-and-expressions"}},d={},u=[{value:"Iterators",id:"iterators",level:2},{value:"Keyed lists",id:"keyed-lists",level:2},{value:"Performance increases",id:"performance-increases",level:3},{value:"Detailed explanation",id:"detailed-explanation",level:3},{value:"Further reading",id:"further-reading",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"iterators",children:"Iterators"}),"\n",(0,r.jsx)(t.p,{children:"Yew supports two different syntaxes for building HTML from an iterator."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(i.A,{value:"Syntax type 1",label:"Syntax type 1",children:[(0,r.jsxs)(t.p,{children:["The first is to call ",(0,r.jsx)(t.code,{children:"collect::<Html>()"})," on the final transform in your iterator, which returns a\r\nlist that Yew can display."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet items = (1..=10).collect::<Vec<_>>();\r\n\r\nhtml! {\r\n    <ul class="item-list">\r\n        { items.iter().collect::<Html>() }\r\n    </ul>\r\n};\n'})})]}),(0,r.jsxs)(i.A,{value:"Syntax type 2",label:"Syntax type 2",children:[(0,r.jsxs)(t.p,{children:["The alternative is to use the ",(0,r.jsx)(t.code,{children:"for"})," keyword, which is not native Rust syntax and instead is used by\r\nthe HTML macro to output the needed code to display the iterator."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\nlet items = (1..=10).collect::<Vec<_>>();\r\n\r\nhtml! {\r\n    <ul class="item-list">\r\n        { for items.iter() }\r\n    </ul>\r\n};\n'})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"keyed-lists",children:"Keyed lists"}),"\n",(0,r.jsxs)(t.p,{children:["A keyed list is an optimized list that has keys on ",(0,r.jsx)(t.strong,{children:"all"})," children.\r\n",(0,r.jsx)(t.code,{children:"key"})," is a special prop provided by Yew that gives an HTML element or component a unique identifier\r\nthat is used for optimization purposes inside Yew."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Key has to be unique only in each list, in contrast to the global uniqueness of HTML ",(0,r.jsx)(t.code,{children:"id"}),"s. It must not depend on the order of the list."]})}),"\n",(0,r.jsx)(t.p,{children:"It is always recommended to add keys to lists."}),"\n",(0,r.jsxs)(t.p,{children:["Keys can be added by passing a unique ",(0,r.jsx)(t.code,{children:"String"}),", ",(0,r.jsx)(t.code,{children:"str"})," or integer to the special ",(0,r.jsx)(t.code,{children:"key"})," prop:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:", ignore",children:'use yew::prelude::*;\r\n\r\nlet names = vec!["Sam","Bob","Ray"]\r\n\r\nhtml! {\r\n    <div id="introductions">\r\n        {\r\n            names.into_iter().map(|name| {\r\n                html!{<div key={name}>{ format!("Hello, I\'am {}!",name) }</div>}\r\n            }).collect::<Html>()\r\n        }\r\n    </div>\r\n};\r\n\n'})}),"\n",(0,r.jsx)(t.h3,{id:"performance-increases",children:"Performance increases"}),"\n",(0,r.jsxs)(t.p,{children:["We have ",(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/keyed_list",children:"Keyed list"})," example that lets you test the performance improvements, but here is a rough rundown:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/keyed_list",children:"Keyed list"})," hosted demo"]}),"\n",(0,r.jsx)(t.li,{children:"Add 500 elements."}),"\n",(0,r.jsx)(t.li,{children:"Disable keys."}),"\n",(0,r.jsx)(t.li,{children:"Reverse the list."}),"\n",(0,r.jsx)(t.li,{children:'Look at "The last rendering took Xms" (At the time of writing this it was ~60ms)'}),"\n",(0,r.jsx)(t.li,{children:"Enable keys."}),"\n",(0,r.jsx)(t.li,{children:"Reverse the list."}),"\n",(0,r.jsx)(t.li,{children:'Look at "The last rendering took Xms" (At the time of writing this it was ~30ms)'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"So just at the time of writing this, for 500 components it is a 2x increase of speed."}),"\n",(0,r.jsx)(t.h3,{id:"detailed-explanation",children:"Detailed explanation"}),"\n",(0,r.jsx)(t.p,{children:"Usually, you just need a key on every list item when you iterate and the order of data can change.\r\nIt's used to speed up the reconciliation process when re-rendering the list."}),"\n",(0,r.jsxs)(t.p,{children:["Without keys, assume you iterate through ",(0,r.jsx)(t.code,{children:'["bob", "sam", "rob"]'}),", ending up with the HTML:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<div id="bob">My name is Bob</div>\r\n<div id="sam">My name is Sam</div>\r\n<div id="rob">My name is rob</div>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Then on the next render, if your list changed to ",(0,r.jsx)(t.code,{children:'["bob", "rob"]'}),', yew could delete\r\nthe element with id="rob" and update id="sam" to be id="rob"']}),"\n",(0,r.jsxs)(t.p,{children:["If you had added a key to each element, the initial HTML would be the same, but after\r\nthe render with the modified list, ",(0,r.jsx)(t.code,{children:'["bob", "rob"]'}),", yew would just delete the second\r\nHTML element and leave the rest untouched since it can use the keys to associate them."]}),"\n",(0,r.jsx)(t.p,{children:'If you ever encounter a bug/"feature" where you switch from one component to another but both have a div as the highest rendered element.\r\nYew reuses the rendered HTML div in those cases as an optimization.\r\nIf you need that div to be recreated instead of reused, then you can add different keys and they will not be reused.'}),"\n",(0,r.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/todomvc",children:"TodoMVC"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/keyed_list",children:"Keyed list"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/router",children:"Router"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(4164),a=n(3104),i=n(6347),l=n(205),o=n(7485),c=n(1682),d=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=p({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(g,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);