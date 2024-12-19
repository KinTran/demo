"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3042],{7927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(4848),o=t(8453);const r={title:"Custom Hooks",description:"Defining your own Hooks "},c=void 0,i={id:"concepts/function-components/custom-hooks",title:"Custom Hooks",description:"Defining your own Hooks ",source:"@site/versioned_docs/version-0.19.0/concepts/function-components/custom-hooks.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/custom-hooks",permalink:"/demo/docs/0.19.0/concepts/function-components/custom-hooks",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/function-components/custom-hooks.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Custom Hooks",description:"Defining your own Hooks "},sidebar:"docs",previous:{title:"Pre-defined Hooks",permalink:"/demo/docs/0.19.0/concepts/function-components/pre-defined-hooks"},next:{title:"Agents",permalink:"/demo/docs/0.19.0/concepts/agents"}},a={},l=[{value:"Defining custom Hooks",id:"defining-custom-hooks",level:2},{value:"Writing primitive hooks",id:"writing-primitive-hooks",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"defining-custom-hooks",children:"Defining custom Hooks"}),"\n",(0,s.jsx)(n.p,{children:"Component's stateful logic can be extracted into usable function by creating custom Hooks."}),"\n",(0,s.jsx)(n.p,{children:"Consider that we have a component which subscribes to an agent and displays the messages sent to it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use yew::{function_component, html, use_effect, use_state, Callback};\r\nuse yew_agent::Bridged;\r\n// EventBus is an implementation yew_agent::Agent\r\nuse website_test::agents::EventBus;\r\n\r\n\r\n#[function_component(ShowMessages)]\r\npub fn show_messages() -> Html {\r\n    let state = use_state(Vec::new);\r\n\r\n    {\r\n        let state = state.clone();\r\n        use_effect(move || {\r\n            let producer = EventBus::bridge(Callback::from(move |msg| {\r\n                let mut messages = (*state).clone();\r\n                messages.push(msg);\r\n                state.set(messages)\r\n            }));\r\n\r\n            || drop(producer)\r\n        });\r\n    }\r\n\r\n    let output = state.iter().map(|it| html! { <p>{ it }</p> });\r\n    html! { <div>{ for output }</div> }\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"There's one problem with this code: the logic can't be reused by another component.\r\nIf we build another component which keeps track of the messages, instead of copying the code we can move the logic into a custom hook."}),"\n",(0,s.jsxs)(n.p,{children:["We'll start by creating a new function called ",(0,s.jsx)(n.code,{children:"use_subscribe"}),".\r\nThe ",(0,s.jsx)(n.code,{children:"use_"})," prefix conventionally denotes that a function is a hook.\r\nThis function will take no arguments and return ",(0,s.jsx)(n.code,{children:"Rc<RefCell<Vec<String>>>"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::{cell::RefCell, rc::Rc};\r\n\r\nfn use_subscribe() -> Rc<RefCell<Vec<String>>> {\r\n    todo!()\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is a simple hook which can be created by combining other hooks. For this example, we'll two pre-defined hooks.\r\nWe'll use ",(0,s.jsx)(n.code,{children:"use_state"})," hook to store the ",(0,s.jsx)(n.code,{children:"Vec"})," for messages, so they persist between component re-renders.\r\nWe'll also use ",(0,s.jsx)(n.code,{children:"use_effect"})," to subscribe to the ",(0,s.jsx)(n.code,{children:"EventBus"})," ",(0,s.jsx)(n.code,{children:"Agent"})," so the subscription can be tied to component's lifecycle."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::collections::HashSet;\r\nuse yew::{use_effect, use_state, Callback};\r\nuse yew_agent::Bridged;\r\n// EventBus is an implementation yew_agent::Agent\r\nuse website_test::agents::EventBus;\r\n\r\nfn use_subscribe() -> Vec<String> {\r\n    let state = use_state(Vec::new);\r\n\r\n    let effect_state = state.clone();\r\n\r\n    use_effect(move || {\r\n        let producer = EventBus::bridge(Callback::from(move |msg| {\r\n            let mut messages = (*effect_state).clone();\r\n            messages.push(msg);\r\n            effect_state.set(messages)\r\n        }));\r\n        || drop(producer)\r\n    });\r\n\r\n    (*state).clone()\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Although this approach works in almost all cases, it can't be used to write primitive hooks like the pre-defined hooks we've been using already"}),"\n",(0,s.jsx)(n.h3,{id:"writing-primitive-hooks",children:"Writing primitive hooks"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use_hook"})," function is used to write such hooks. View the docs on ",(0,s.jsx)(n.a,{href:"https://docs.rs/yew/0.18.0/yew-functional/use_hook.html",children:"docs.rs"})," for the documentation\r\nand ",(0,s.jsx)(n.code,{children:"hooks"})," directory to see implementations of pre-defined hooks."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);