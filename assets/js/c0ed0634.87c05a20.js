"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3066],{5651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=t(4848),c=t(8453);const r={title:"Callbacks"},o=void 0,a={id:"advanced-topics/struct-components/callbacks",title:"Callbacks",description:"Callbacks",source:"@site/versioned_docs/version-0.21/advanced-topics/struct-components/callbacks.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/callbacks",permalink:"/demo/docs/advanced-topics/struct-components/callbacks",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/advanced-topics/struct-components/callbacks.mdx",tags:[],version:"0.21",frontMatter:{title:"Callbacks"},sidebar:"docs",previous:{title:"Scope",permalink:"/demo/docs/advanced-topics/struct-components/scope"},next:{title:"Properties",permalink:"/demo/docs/advanced-topics/struct-components/properties"}},l={},i=[{value:"Callbacks",id:"callbacks",level:2},{value:"Relevant examples",id:"relevant-examples",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,s.jsxs)(n.p,{children:["Callbacks are used to communicate with services, agents, and parent components within Yew.\r\nInternally their type is just ",(0,s.jsx)(n.code,{children:"Fn"})," wrapped in ",(0,s.jsx)(n.code,{children:"Rc"})," to allow them to be cloned."]}),"\n",(0,s.jsxs)(n.p,{children:["They have an ",(0,s.jsx)(n.code,{children:"emit"})," function that takes their ",(0,s.jsx)(n.code,{children:"<IN>"})," type as an argument and converts that to a message expected by its destination. If a callback from a parent is provided in props to a child component, the child can call ",(0,s.jsx)(n.code,{children:"emit"})," on the callback in its ",(0,s.jsx)(n.code,{children:"update"})," lifecycle hook to send a message back to its parent. Closures or Functions provided as props inside the ",(0,s.jsx)(n.code,{children:"html!"})," macro are automatically converted to Callbacks."]}),"\n",(0,s.jsx)(n.p,{children:"A simple use of a callback might look something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html};\r\n\r\nenum Msg {\r\n    Clicked,\r\n}\r\n\r\nstruct Comp;\r\n\r\nimpl Component for Comp {\r\n\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        // highlight-next-line\r\n        let onclick = ctx.link().callback(|_| Msg::Clicked);\r\n        html! {\r\n            // highlight-next-line\r\n            <button {onclick}>{ "Click" }</button>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The function passed to ",(0,s.jsx)(n.code,{children:"callback"})," must always take a parameter. For example, the ",(0,s.jsx)(n.code,{children:"onclick"})," handler requires a function that takes a parameter of type ",(0,s.jsx)(n.code,{children:"MouseEvent"}),". The handler can then decide what kind of message should be sent to the component. This message is scheduled for the next update loop unconditionally."]}),"\n",(0,s.jsxs)(n.p,{children:["If you need a callback that might not need to cause an update, use ",(0,s.jsx)(n.code,{children:"batch_callback"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use yew::{events::KeyboardEvent, html, Component, Context, Html};\r\n\r\nenum Msg {\r\n    Submit,\r\n}\r\n\r\nstruct Comp;\r\n\r\nimpl Component for Comp {\r\n\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        // highlight-start\r\n        let onkeypress = ctx.link().batch_callback(|event: KeyboardEvent| {\r\n            if event.key() == "Enter" {\r\n                Some(Msg::Submit)\r\n            } else {\r\n                None\r\n            }\r\n        });\r\n\r\n        html! {\r\n            <input type="text" {onkeypress} />\r\n        }\r\n        // highlight-end\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/counter",children:"Counter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/timer",children:"Timer"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);