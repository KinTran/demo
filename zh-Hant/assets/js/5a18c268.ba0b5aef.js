"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5239],{4229:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=r(4848),s=r(8453),o=r(1470),i=r(9365);const a={title:"From 0.18.0 to 0.19.0"},l=void 0,c={id:"migration-guides/yew/from-0_18_0-to-0_19_0",title:"From 0.18.0 to 0.19.0",description:"Yew 0.19.0 has changed a lot, thus this migration will not cover ALL of the changes.",source:"@site/versioned_docs/version-0.20/migration-guides/yew/from-0_18_0-to-0_19_0.mdx",sourceDirName:"migration-guides/yew",slug:"/migration-guides/yew/from-0_18_0-to-0_19_0",permalink:"/zh-Hant/docs/0.20/migration-guides/yew/from-0_18_0-to-0_19_0",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/migration-guides/yew/from-0_18_0-to-0_19_0.mdx",tags:[],version:"0.20",frontMatter:{title:"From 0.18.0 to 0.19.0"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/zh-Hant/docs/0.20/more/roadmap"},next:{title:"From 0.19.0 to 0.20.0",permalink:"/zh-Hant/docs/0.20/migration-guides/yew/from-0_19_0-to-0_20_0"}},d={},h=[{value:"<code>html!</code> requirement for braces around most props",id:"html-requirement-for-braces-around-most-props",level:2},{value:"Function components",id:"function-components",level:2},{value:"Struct components lifecycle methods and ctx",id:"struct-components-lifecycle-methods-and-ctx",level:2},{value:"ShouldRender removed in favor of bool",id:"shouldrender-removed-in-favor-of-bool",level:3},{value:"ctx, props, link",id:"ctx-props-link",level:3},{value:"Lifetime methods in Component trait",id:"lifetime-methods-in-component-trait",level:3},{value:"<code>web-sys</code> is no longer re-exported",id:"web-sys-is-no-longer-re-exported",level:2},{value:"Services",id:"services",level:2},{value:"New crate - yew-agent",id:"new-crate---yew-agent",level:2},{value:"Ending note",id:"ending-note",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Yew 0.19.0"})," has changed a lot, thus this migration will not cover ALL of the changes."]}),"\n",(0,t.jsxs)(n.p,{children:["Instead only the most impactful changes are mentioned and the rest should be picked up by ",(0,t.jsx)(n.code,{children:"cargo"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"html-requirement-for-braces-around-most-props",children:[(0,t.jsx)(n.code,{children:"html!"})," requirement for braces around most props"]}),"\n",(0,t.jsxs)(n.p,{children:["The syntax of the ",(0,t.jsx)(n.code,{children:"html!"})," macro has been updated, such that in most cases you will need to enclose\r\nprops with braces."]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(i.A,{value:"Invalid",label:"Invalid",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"{4}, ignore",children:"let super_age = 1;\r\nhtml!{\r\n    <JapaneseYew\r\n        age=super_age // ! Will throw an error\r\n    >\r\n}\n"})})}),(0,t.jsx)(i.A,{value:"Valid",label:"Valid",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"{4}, ignore",children:"let super_age = 1;\r\nhtml!{\r\n    <JapaneseYew\r\n        age={super_age} // Correct\r\n    >\r\n}\n"})})}),(0,t.jsxs)(i.A,{value:"Shorthand",label:"Shorthand",children:[(0,t.jsx)(n.p,{children:"Shorthand initialization has been added:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"{4}, ignore",children:"let age = 1;\r\nhtml!{\r\n    <JapaneseYew\r\n        {age}\r\n    >\r\n}\n"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"There is a community provided regex to help automate the update, though we can't promise it will work\r\nall the time."}),"\n",(0,t.jsxs)(n.p,{children:["It breaks when it encounters closures (specifically the ",(0,t.jsx)(n.code,{children:"|_|"})," syntax)."]}),"\n",(0,t.jsxs)(n.p,{children:["find with ",(0,t.jsx)(n.code,{children:'=(?![{">=\\s])([^\\s></]*(\\s!{0,1}[=|&]{2}\\s[^\\s></]*)*)'})]}),"\n",(0,t.jsxs)(n.p,{children:["replace with ",(0,t.jsx)(n.code,{children:"={$1}"})]}),"\n",(0,t.jsx)(n.h2,{id:"function-components",children:"Function components"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/zh-Hant/docs/0.20/concepts/function-components",children:"Function components"})," are a brand new way to write components that\r\nrequires less boilerplate than their structural counterpart."]}),"\n",(0,t.jsxs)(n.p,{children:["While this change does not force you to change your codebase, as you migrate from ",(0,t.jsx)(n.code,{children:"0.18"})," to ",(0,t.jsx)(n.code,{children:"0.19"}),", this migration time might present a good opportunity to start using them in your codebase."]}),"\n",(0,t.jsx)(n.h2,{id:"struct-components-lifecycle-methods-and-ctx",children:"Struct components lifecycle methods and ctx"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/zh-Hant/docs/0.20/advanced-topics/struct-components/introduction",children:"Struct components"})," also received changes to their API."]}),"\n",(0,t.jsx)(n.h3,{id:"shouldrender-removed-in-favor-of-bool",children:"ShouldRender removed in favor of bool"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ShouldRender"})," removed in favor of ",(0,t.jsx)(n.code,{children:"bool"})," and can be just find all - replaced throughout your code base."]}),"\n",(0,t.jsx)(n.h3,{id:"ctx-props-link",children:"ctx, props, link"}),"\n",(0,t.jsxs)(n.p,{children:["Struct components no longer own props and link, instead they receive ",(0,t.jsx)(n.code,{children:"ctx: &Context<Self>"})," argument in lifetime methods that can later give you access to ",(0,t.jsx)(n.code,{children:"ctx.props() -> &Properties"})," and ",(0,t.jsx)(n.code,{children:"ctx.link() -> &Scope<Self>"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You will need to remove ",(0,t.jsx)(n.code,{children:"link"})," and ",(0,t.jsx)(n.code,{children:"props"})," from your component struct fields as such all lifetime methods got updated."]}),"\n",(0,t.jsx)(n.h3,{id:"lifetime-methods-in-component-trait",children:"Lifetime methods in Component trait"}),"\n",(0,t.jsxs)(n.p,{children:["For new API look in the ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/blob/9b6bc96826d53ec38aa3ecc02e3a1e132692c411/packages/yew/src/html/component/mod.rs#L37-L97",children:"Component trait"})]}),"\n",(0,t.jsxs)(n.h2,{id:"web-sys-is-no-longer-re-exported",children:[(0,t.jsx)(n.code,{children:"web-sys"})," is no longer re-exported"]}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"web-sys"})," as your project dependency and one by one add the needed features like ",(0,t.jsx)(n.code,{children:"Event"})," or ",(0,t.jsx)(n.code,{children:"Window"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"services",children:"Services"}),"\n",(0,t.jsxs)(n.p,{children:["During this update all services were removed in favor of community driven solutions like ",(0,t.jsx)(n.a,{href:"https://github.com/rustwasm/gloo",children:"gloo"})]}),"\n",(0,t.jsxs)(n.p,{children:["Remove this entirely. ",(0,t.jsx)(n.code,{children:"yew-services"})," adds a layer a abstraction which makes it easier to call external resources. This is all well and good but this layer is supposed to be specific to Yew. It would be better if an framework agnostic abstraction existed instead."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConsoleService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/gloo-console",children:"gloo-console"})," or ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/weblog",children:(0,t.jsx)(n.code,{children:"weblog"})})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DialogService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://docs.rs/gloo-dialogs/",children:(0,t.jsx)(n.code,{children:"gloo-dialogs"})})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"IntervalService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://docs.rs/gloo-timers/",children:(0,t.jsx)(n.code,{children:"gloo-timers"})})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KeyboardService"}),"\r\n",(0,t.jsx)(n.code,{children:"on*"})," event handlers in yew already handle it. Using this service is even more cumbersome because it requires use of ",(0,t.jsx)(n.code,{children:"NodeRef"})," in order to call any functions provided by it."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'let onkeydown = Callback::from(|e| {\r\n    e.prevent_default();\r\n    todo!("use `e`, just like in service methods.");\r\n});\r\nhtml! {\r\n    <input {onkeydown} />\r\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ResizeService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://docs.rs/gloo-events",children:(0,t.jsx)(n.code,{children:"gloo-events"})})," to attach the listener instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"StorageService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://docs.rs/gloo-storage/",children:(0,t.jsx)(n.code,{children:"gloo-storage"})})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TimeoutService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://docs.rs/gloo-timers/",children:(0,t.jsx)(n.code,{children:"gloo-timers"})})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WebSocketService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://github.com/scratchyone/wasm-sockets",children:(0,t.jsx)(n.code,{children:"wasm-sockets"})})," or ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/gloo-net",children:(0,t.jsx)(n.code,{children:"gloo-net"})})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FetchService"}),"\r\nUse ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/reqwest",children:(0,t.jsx)(n.code,{children:"reqwest"})})," or ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/gloo-net",children:(0,t.jsx)(n.code,{children:"gloo-net"})})," instead."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"new-crate---yew-agent",children:"New crate - yew-agent"}),"\n",(0,t.jsxs)(n.p,{children:["Yew agents were removed to a separate crate, see ",(0,t.jsx)(n.a,{href:"./../yew-agent/from-0_0_0-to-0_1_0",children:"yew agents migration guide"})]}),"\n",(0,t.jsx)(n.h2,{id:"ending-note",children:"Ending note"}),"\n",(0,t.jsx)(n.p,{children:"We are sorry if some things are not covered in this guide as it was truly a huge update and we hope\r\nthat the uncovered issues will be clearly explained in error messages emitted by the Rust compiler."})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var o=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),s=r(4164),o=r(3104),i=r(6347),a=r(205),l=r(7485),c=r(1682),d=r(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=u(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,h]=p({queryString:r,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),f=(()=>{const e=c??x;return m({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,o]),tabValues:o}}var g=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=a[r].value;s!==t&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,j.jsx)(w,{...e,children:h(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);