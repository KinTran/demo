"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5823],{4100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(4848),s=t(8453),a=t(1470),o=t(9365);const i={},l=void 0,c={id:"concepts/wasm-bindgen/web-sys",title:"web-sys",description:"The web-sys crate provides bindings for Web APIs. This is",source:"@site/versioned_docs/version-0.19.0/concepts/wasm-bindgen/web-sys.mdx",sourceDirName:"concepts/wasm-bindgen",slug:"/concepts/wasm-bindgen/web-sys",permalink:"/zh-Hans/docs/0.19.0/concepts/wasm-bindgen/web-sys",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/wasm-bindgen/web-sys.mdx",tags:[],version:"0.19.0",frontMatter:{},sidebar:"docs",previous:{title:"wasm-bindgen",permalink:"/zh-Hans/docs/0.19.0/concepts/wasm-bindgen"},next:{title:"Introduction",permalink:"/zh-Hans/docs/0.19.0/concepts/components/introduction"}},d={},u=[{value:"Features in <code>web-sys</code>",id:"features-in-web-sys",level:2},{value:"Inheritance in <code>web-sys</code>",id:"inheritance-in-web-sys",level:2},{value:"The <code>Node</code> in <code>NodeRef</code>",id:"the-node-in-noderef",level:2},{value:"JavaScript example to Rust",id:"javascript-example-to-rust",level:2},{value:"JavaScript example",id:"javascript-example",level:3},{value:"<code>web-sys</code> example",id:"web-sys-example",level:3},{value:"Yew example",id:"yew-example",level:3},{value:"External libraries",id:"external-libraries",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsxs)(n.a,{href:"https://crates.io/crates/web-sys",children:[(0,r.jsx)(n.code,{children:"web-sys"})," crate"]})," provides bindings for Web APIs. This is\r\nprocedurally generated from browser WebIDL which is why some of the names are so long and why\r\nsome of the types are vague."]}),"\n",(0,r.jsxs)(n.h2,{id:"features-in-web-sys",children:["Features in ",(0,r.jsx)(n.code,{children:"web-sys"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"web-sys"})," crate with all of it's features enabled can add lots of bloat to a Wasm application,\r\nin order to get around this issue most types are feature gated so that you only include the types\r\nyou require for your application. Yew includes a number of features from ",(0,r.jsx)(n.code,{children:"web-sys"})," and\r\nexposes some types in it's public API, you will often need to add ",(0,r.jsx)(n.code,{children:"web-sys"})," as a dependency yourself."]}),"\n",(0,r.jsxs)(n.h2,{id:"inheritance-in-web-sys",children:["Inheritance in ",(0,r.jsx)(n.code,{children:"web-sys"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"../wasm-bindgen#simulating-inheritance",children:"Simulating inheritance section"})," you can read how in\r\ngeneral Rust provides an approach to simulate inheritance in JavaScript. This is very important in\r\n",(0,r.jsx)(n.code,{children:"web-sys"})," as understanding what methods are available on a type means understanding it's inheritance."]}),"\n",(0,r.jsxs)(n.p,{children:["This section is going to look at a specific element and list out it's inheritance using Rust by\r\ncalling ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/ops/trait.Deref.html#tymethod.deref",children:(0,r.jsx)(n.code,{children:"Deref::deref"})})," until\r\nthe value is ",(0,r.jsx)(n.a,{href:"../wasm-bindgen#jsvalue",children:(0,r.jsx)(n.code,{children:"JsValue"})}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use std::ops::Deref;\r\nuse web_sys::{\r\n    Element,\r\n    EventTarget,\r\n    HtmlElement,\r\n    HtmlTextAreaElement,\r\n    Node,\r\n};\r\n\r\nfn inheritance_of_text_area(text_area: HtmlTextAreaElement) {\r\n    // HtmlTextAreaElement is <textarea> in html.\r\n    let html_element: &HtmlElement = text_area.deref();\r\n\r\n    let element: &Element = html_element.deref();\r\n\r\n    let node: &Node = element.deref();\r\n\r\n    let event_target: &EventTarget = node.deref();\r\n\r\n    // Notice we've moved from web-sys types now into built-in\r\n    // JavaScript types which are in the js-sys crate.\r\n    let object: &js_sys::Object = event_target.deref();\r\n\r\n    // Notice we've moved from js-sys type to the root JsValue from\r\n    // the wasm-bindgen crate.\r\n    let js_value: &wasm_bindgen::JsValue = object.deref();\r\n\r\n    // Using deref like this means we have to manually traverse\r\n    // the inheritance tree, however, you can call JsValue methods\r\n    // on the HtmlTextAreaElement type.\r\n    // The `is_string` method comes from JsValue.\r\n    assert!(!text_area.is_string());\r\n\r\n    // empty function just to prove we can pass HtmlTextAreaElement as a\r\n    // &EventTarget.\r\n    fn this_function_only_takes_event_targets(targets: &EventTarget) {};\r\n\r\n    // The compiler will walk down the deref chain in order to match the types here.\r\n    this_function_only_takes_event_targets(&text_area);\r\n\r\n    // The AsRef implementations allow you to treat the HtmlTextAreaElement\r\n    // as an &EventTarget.\r\n\r\n    let event_target: &EventTarget = text_area.as_ref();\r\n\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsxs)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/web-sys/inheritance.html",children:["Inheritance in ",(0,r.jsx)(n.code,{children:"web-sys"})," in The ",(0,r.jsx)(n.code,{children:"wasm-bindgen"})," Guide"]}),"."]})}),"\n",(0,r.jsxs)(n.h2,{id:"the-node-in-noderef",children:["The ",(0,r.jsx)(n.code,{children:"Node"})," in ",(0,r.jsx)(n.code,{children:"NodeRef"})]}),"\n",(0,r.jsxs)(n.p,{children:["Yew uses a ",(0,r.jsx)(n.a,{href:"../components/refs",children:(0,r.jsx)(n.code,{children:"NodeRef"})})," in order to provide a way for keeping a reference to\r\na ",(0,r.jsx)(n.code,{children:"Node"})," made by the ",(0,r.jsx)(n.a,{href:"../html/introduction",children:(0,r.jsx)(n.code,{children:"html!"})})," macro. The ",(0,r.jsx)(n.code,{children:"Node"})," part of ",(0,r.jsx)(n.code,{children:"NodeRef"})," is referring to\r\n",(0,r.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Node.html",children:(0,r.jsx)(n.code,{children:"web_sys::Node"})}),". The\r\n",(0,r.jsx)(n.code,{children:"NodeRef::get"})," method will return a ",(0,r.jsx)(n.code,{children:"Option<Node>"})," value, however, most of the time in Yew you want\r\nto cast this value to a specific element so you can use it's specific methods. This casting\r\ncan be done using ",(0,r.jsx)(n.a,{href:"../wasm-bindgen#JsCast",children:(0,r.jsx)(n.code,{children:"JsCast"})})," on the ",(0,r.jsx)(n.code,{children:"Node"})," value, if present, but Yew\r\nprovides the ",(0,r.jsx)(n.code,{children:"NodeRef::cast"})," method to perform this casting for convenience and so that you don't\r\nnecessarily have to include the ",(0,r.jsx)(n.code,{children:"wasm-bindgen"})," dependency for the ",(0,r.jsx)(n.code,{children:"JsCast"})," trait."]}),"\n",(0,r.jsxs)(n.p,{children:["The two code blocks below do essentially the same thing, the first is using ",(0,r.jsx)(n.code,{children:"NodeRef::cast"})," and\r\nthe second is using ",(0,r.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_into",children:(0,r.jsx)(n.code,{children:"JsCast::dyn_into"})}),"\r\non the ",(0,r.jsx)(n.code,{children:"web_sys::Node"})," returned from ",(0,r.jsx)(n.code,{children:"NodeRef::get"}),"."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"Using NodeRef::cast",label:"Using NodeRef::cast",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use web_sys::HtmlInputElement;\r\nuse yew::NodeRef;\r\n\r\nfn with_node_ref_cast(node_ref: NodeRef) {\r\n    if let Some(input) = node_ref.cast::<HtmlInputElement>() {\r\n        // do something with HtmlInputElement\r\n    }\r\n}\n"})})}),(0,r.jsx)(o.A,{value:"Using NodeRef::get",label:"Using NodeRef::get",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use wasm_bindgen::JsCast;\r\nuse web_sys::HtmlInputElement;\r\nuse yew::NodeRef;\r\n\r\nfn with_jscast(node_ref: NodeRef) {\r\n    if let Some(input) = node_ref\r\n        .get()\r\n        .and_then(|node| node.dyn_into::<HtmlInputElement>().ok()) {\r\n        // do something with HtmlInputElement\r\n    }\r\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"javascript-example-to-rust",children:"JavaScript example to Rust"}),"\n",(0,r.jsxs)(n.p,{children:["This section is to help show that any examples that use JavaScript to interact with the Web APIs\r\ncan be adapted and written using Rust with ",(0,r.jsx)(n.code,{children:"web-sys"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"javascript-example",children:"JavaScript example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"document.getElementById('mousemoveme').onmousemove = (e) => {\r\n    // e = Mouse event.\r\n    var rect = e.target.getBoundingClientRect()\r\n    var x = e.clientX - rect.left //x position within the element.\r\n    var y = e.clientY - rect.top //y position within the element.\r\n    console.log('Left? : ' + x + ' ; Top? : ' + y + '.')\r\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"web-sys-example",children:[(0,r.jsx)(n.code,{children:"web-sys"})," example"]}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"web-sys"})," alone the above JavaScript example could be implemented like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:"title=Cargo.toml",children:'[dependencies]\r\nwasm-bindgen = "0.2"\r\n\r\n[dependencies.web-sys]\r\nversion = "0.3"\r\n# We need to enable all the web-sys features we want to use!\r\nfeatures = [\r\n    "console",\r\n    "Document",\r\n    "HtmlElement",\r\n    "MouseEvent",\r\n    "DomRect",\r\n]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",no_run",children:'use wasm_bindgen::{prelude::Closure, JsCast};\r\nuse web_sys::{console, Document, HtmlElement, MouseEvent};\r\n\r\nlet mousemove = Closure::<dyn Fn(MouseEvent)>::wrap(Box::new(|e| {\r\n    let rect = e\r\n        .target()\r\n        .expect("mouse event doesn\'t have a target")\r\n        .dyn_into::<HtmlElement>()\r\n        .expect("event target should be of type HtmlElement")\r\n        .get_bounding_client_rect();\r\n    let x = (e.client_x() as f64) - rect.left();\r\n    let y = (e.client_y() as f64) - rect.top();\r\n    console::log_1(&format!("Left? : {} ; Top? : {}", x, y).into());\r\n}));\r\n\r\nDocument::new()\r\n    .expect("global document not set")\r\n    .get_element_by_id("mousemoveme")\r\n    .expect("element with id `mousemoveme` not present")\r\n    .unchecked_into::<HtmlElement>()\r\n    .set_onmousemove(mousemove.as_ref().dyn_ref());\r\n\r\n// we now need to save the `mousemove` Closure so that when\r\n// this event fires the closure is still in memory.\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This version is much more verbose, but you will probably notice part of that is because of failure\r\ntypes reminding us that some of these function calls have invariants that must be held otherwise will\r\ncause a panic in Rust. Another part of the verbosity is the calls to ",(0,r.jsx)(n.code,{children:"JsCast"})," in order to cast into\r\ndifferent types so that you can call it's specific methods."]}),"\n",(0,r.jsx)(n.h3,{id:"yew-example",children:"Yew example"}),"\n",(0,r.jsxs)(n.p,{children:["In Yew you will mostly be creating ",(0,r.jsx)(n.a,{href:"../components/callbacks",children:(0,r.jsx)(n.code,{children:"Callback"})}),"s to use in the\r\n",(0,r.jsx)(n.a,{href:"../html/introduction",children:(0,r.jsx)(n.code,{children:"html!"})})," macro so the example is going to use this approach instead of completely copying\r\nthe approach above:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:"title=Cargo.toml",children:'[dependencies.web-sys]\r\nversion = "0.3"\r\n# We need to enable the `DomRect` feature in order to use the\r\n# `get_bounding_client_rect` method.\r\nfeatures = [\r\n    "console",\r\n    "HtmlElement",\r\n    "MouseEvent",\r\n    "DomRect",\r\n]\r\n\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use web_sys::{console, HtmlElement, MouseEvent};\r\nuse yew::{\r\n    html,\r\n    Callback, TargetCast,\r\n};\r\n\r\nlet onmousemove = Callback::from(|e: MouseEvent| {\r\n    if let Some(target) = e.target_dyn_into::<HtmlElement>() {\r\n        let rect = target.get_bounding_client_rect();\r\n        let x = (e.client_x() as f64) - rect.left();\r\n        let y = (e.client_y() as f64) - rect.top();\r\n        console::log_1(&format!("Left? : {} ; Top? : {}", x, y).into());\r\n    }\r\n});\r\n\r\nhtml! {\r\n    <div id="mousemoveme" {onmousemove}></div>\r\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"external-libraries",children:"External libraries"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"web-sys"})," is a raw binding to the Web API so it comes with some pain in Rust because it was not\r\ndesigned with Rust or even a strong type system in mind, this is where community crates come in to\r\nprovide abstractions over ",(0,r.jsx)(n.code,{children:"web-sys"})," to provide more idiomatic Rust APIs."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"../../more/external-libs",children:"External libraries page"})})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),s=t(4164),a=t(3104),o=t(6347),i=t(205),l=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(w,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);