"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3982],{4916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),l=t(8453),a=t(1470),s=t(9365);const o={title:"Elements",description:"Both HTML and SVG elements are supported"},i=void 0,c={id:"concepts/html/elements",title:"Elements",description:"Both HTML and SVG elements are supported",source:"@site/versioned_docs/version-0.19.0/concepts/html/elements.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/elements",permalink:"/demo/zh-Hant/docs/0.19.0/concepts/html/elements",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/html/elements.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Elements",description:"Both HTML and SVG elements are supported"},sidebar:"docs",previous:{title:"Components",permalink:"/demo/zh-Hant/docs/0.19.0/concepts/html/components"},next:{title:"Events",permalink:"/demo/zh-Hant/docs/0.19.0/concepts/html/events"}},u={},d=[{value:"DOM nodes",id:"dom-nodes",level:2},{value:"Dynamic tag names",id:"dynamic-tag-names",level:2},{value:"Boolean Attributes",id:"boolean-attributes",level:2},{value:"String-like attributes",id:"string-like-attributes",level:2},{value:"Optional attributes for HTML elements",id:"optional-attributes-for-html-elements",level:2},{value:"Listeners",id:"listeners",level:2},{value:"Relevant examples",id:"relevant-examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"dom-nodes",children:"DOM nodes"}),"\n",(0,r.jsx)(n.p,{children:"There are many reasons why you might want to create or manage DOM nodes manually in Yew, such as\r\nwhen integrating with JS libraries that can cause conflicts with managed components."}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"web-sys"}),", you can create DOM elements and convert them into a ",(0,r.jsx)(n.code,{children:"Node"})," - which can then be\r\nused as a ",(0,r.jsx)(n.code,{children:"Html"})," value using ",(0,r.jsx)(n.code,{children:"VRef"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use web_sys::{Element, Node};\r\nuse yew::{Component, Context, html, Html};\r\nuse gloo_utils::document;\r\n\r\nstruct Comp;\r\n\r\nimpl Component for Comp {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        // Create a div element from the document\r\n        let div: Element = document().create_element("div").unwrap();\r\n        // Add content, classes etc.\r\n        div.set_inner_html("Hello, World!");\r\n        // Convert Element into a Node\r\n        let node: Node = div.into();\r\n        // Return that Node as a Html value\r\n        Html::VRef(node)\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"dynamic-tag-names",children:"Dynamic tag names"}),"\n",(0,r.jsxs)(n.p,{children:["When building a higher-order component you might find yourself in a situation where the element's tag name isn't static.\r\nFor example, you might have a ",(0,r.jsx)(n.code,{children:"Title"})," component which can render anything from ",(0,r.jsx)(n.code,{children:"h1"})," to ",(0,r.jsx)(n.code,{children:"h6"})," depending on a level prop.\r\nInstead of having to use a big match expression, Yew allows you to set the tag name dynamically\r\nusing ",(0,r.jsx)(n.code,{children:"@{name}"})," where ",(0,r.jsx)(n.code,{children:"name"})," can be any expression that returns a string."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nlet level = 5;\r\nlet text = "Hello World!".to_owned();\r\n\r\nhtml! {\r\n    <@{format!("h{}", level)} class="title">{ text }</@>\r\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"boolean-attributes",children:"Boolean Attributes"}),"\n",(0,r.jsx)(n.p,{children:"Some content attributes (e.g checked, hidden, required) are called boolean attributes. In Yew,\r\nboolean attributes need to be set to a bool value:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nhtml! {\r\n    <div hidden=true>\r\n        { "This div is hidden." }\r\n    </div>\r\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This will result in ",(0,r.jsx)(n.strong,{children:"HTML"})," that's functionally equivalent to this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<div hidden>This div is hidden.</div>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Setting a boolean attribute to false is equivalent to not using the attribute at all; values from\r\nboolean expressions can be used:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nlet no = 1 + 1 != 2;\r\n\r\nhtml! {\r\n    <div hidden={no}>\r\n        { "This div is NOT hidden." }\r\n    </div>\r\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This will result in the following ",(0,r.jsx)(n.strong,{children:"HTML"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<div>This div is NOT hidden.</div>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"string-like-attributes",children:"String-like attributes"}),"\n",(0,r.jsx)(n.p,{children:"But apart from a select few boolean attributes, you will probably be dealing with a lot of string-like HTML attributes and Yew has a few option for those"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::{html, virtual_dom::AttrValue};\r\n\r\nlet str_placeholder = "I\'m a str!";\r\nlet string_placeholder = String::from("I\'m a String!");\r\nlet attrvalue_placeholder = AttrValue::from("I\'m an AttrValue!");\r\n\r\nhtml! {\r\n    <div>\r\n        <input placeholder={str_placeholder} />\r\n        <input placeholder={string_placeholder} />\r\n        <input placeholder={attrvalue_placeholder} />\r\n    </div>\r\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["They are all valid ",(0,r.jsx)(n.strong,{children:"but"})," we encourage you to favor Yew's custom ",(0,r.jsx)(n.code,{children:"AttrValue"}),", especially if you need to clone or pass them as properties to another component."]}),"\n",(0,r.jsx)(n.h2,{id:"optional-attributes-for-html-elements",children:"Optional attributes for HTML elements"}),"\n",(0,r.jsx)(n.p,{children:"Most HTML attributes can use optional values (Some(x) or None). This allows us to omit the attribute if the attribute is marked as optional."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::html;\r\n\r\nlet maybe_id = Some("foobar");\r\n\r\nhtml! {\r\n    <div id={maybe_id}></div>\r\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the attribute is set to ",(0,r.jsx)(n.code,{children:"None"}),", the attribute won't be set in the DOM."]}),"\n",(0,r.jsx)(n.h2,{id:"listeners",children:"Listeners"}),"\n",(0,r.jsxs)(n.p,{children:["Listener attributes need to be passed a ",(0,r.jsx)(n.code,{children:"Callback"})," which is a wrapper around a closure. How you create your callback depends on how you wish your app to react to a listener event:"]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"Component handler",label:"Component handler",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::{Component, Context, html, Html};\r\n\r\nstruct MyComponent;\r\n\r\nenum Msg {\r\n    Click,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {\r\n        match msg {\r\n            Msg::Click => {\r\n                // Handle Click\r\n            }\r\n        };\r\n        true\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        // Create a callback from a component link to handle it in a component\r\n        let click_callback = ctx.link().callback(|_| Msg::Click);\r\n        html! {\r\n            <button onclick={click_callback}>\r\n                { "Click me!" }\r\n            </button>\r\n        }\r\n    }\r\n}\n'})})}),(0,r.jsx)(s.A,{value:"Agent Handler",label:"Agent Handler",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html};\r\nuse yew_agent::{Dispatcher, Dispatched};\r\nuse website_test::agents::{MyWorker, WorkerMsg};\r\n\r\nstruct MyComponent {\r\n    worker: Dispatcher<MyWorker>,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Message = WorkerMsg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        MyComponent {\r\n            worker: MyWorker::dispatcher(),\r\n        }\r\n    }\r\n\r\n    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {\r\n        self.worker.send(msg);\r\n        false\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        // Create a callback from a worker to handle it in another context\r\n        let click_callback = ctx.link().callback(|_| WorkerMsg::Process);\r\n        html! {\r\n            <button onclick={click_callback}>\r\n                { "Click me!" }\r\n            </button>\r\n        }\r\n    }\r\n}\n'})})}),(0,r.jsx)(s.A,{value:"Other Cases",label:"Other Cases",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::{Callback, Context, Component, html, Html};\r\nuse weblog::console_log;\r\n\r\nstruct MyComponent;\r\n\r\nimpl Component for MyComponent {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        MyComponent\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        // Create an ephemeral callback\r\n        let click_callback = Callback::from(|_| {\r\n            console_log!("clicked!");\r\n        });\r\n\r\n        html! {\r\n            <button onclick={click_callback}>\r\n                { "Click me!" }\r\n            </button>\r\n        }\r\n    }\r\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.19.3/examples/inner_html",children:"Inner HTML"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const l={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),l=t(4164),a=t(3104),s=t(6347),o=t(205),i=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:t,groupId:l}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,u.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),x=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),l=o[t].value;l!==r&&(c(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);