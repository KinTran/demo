"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[839],{5923:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var o=t(4848),r=t(8453);const c={title:"Callbacks"},l=void 0,s={id:"concepts/function-components/callbacks",title:"Callbacks",description:"Callbacks are used to asynchronously communicate upwards the components tree and with other things like agents or the DOM during event handling.",source:"@site/versioned_docs/version-0.20/concepts/function-components/callbacks.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/callbacks",permalink:"/demo/docs/0.20/concepts/function-components/callbacks",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/function-components/callbacks.mdx",tags:[],version:"0.20",frontMatter:{title:"Callbacks"},sidebar:"docs",previous:{title:"Properties",permalink:"/demo/docs/0.20/concepts/function-components/properties"},next:{title:"Children",permalink:"/demo/docs/0.20/concepts/function-components/children"}},a={},i=[{value:"Passing callbacks as props",id:"passing-callbacks-as-props",level:2},{value:"DOM Events and Callbacks",id:"dom-events-and-callbacks",level:2}];function p(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Callbacks are used to asynchronously communicate upwards the components tree and with other things like agents or the DOM during event handling.\r\nInternally their type is just an ",(0,o.jsx)(e.code,{children:"Fn"})," wrapped in ",(0,o.jsx)(e.code,{children:"Rc"})," to allow them to be cheaply cloned."]}),"\n",(0,o.jsxs)(e.p,{children:["They have an ",(0,o.jsx)(e.code,{children:"emit"})," function if you want to call them manually."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html, Callback};\r\n\r\nlet cb: Callback<String, String> = Callback::from(move |name: String| {\r\n    format!("Bye {}", name)\r\n});\r\n\r\nlet result = cb.emit(String::from("Bob")); // call the callback\r\n// web_sys::console::log_1(&result.into()); // if uncommented will print "Bye Bob"\n'})}),"\n",(0,o.jsx)(e.h2,{id:"passing-callbacks-as-props",children:"Passing callbacks as props"}),"\n",(0,o.jsx)(e.p,{children:"A common pattern in yew is to create a callback and pass it down as a prop."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties, Callback};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    pub on_name_entry: Callback<String>,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n\r\n    props.on_name_entry.emit(String::from("Bob"));\r\n\r\n    html! { "Hello" }\r\n}\r\n\r\n// Then supply the prop\r\n#[function_component]\r\nfn App() -> Html {\r\n    let on_name_entry: Callback<String> = Callback::from(move |name: String| {\r\n        let greeting = format!("Hey, {}!", name);\r\n        // web_sys::console::log_1(&greeting.into()); // if uncommented will print\r\n    });\r\n\r\n    html! { <HelloWorld {on_name_entry} /> }\r\n}\r\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"dom-events-and-callbacks",children:"DOM Events and Callbacks"}),"\n",(0,o.jsx)(e.p,{children:"Callbacks are also used to hook into DOM events."}),"\n",(0,o.jsx)(e.p,{children:"For example here we define a callback that will be called when the user clicks the button:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties, Callback};\r\n\r\n#[function_component]\r\nfn App() -> Html {\r\n    let onclick = Callback::from(move |_| {\r\n        let greeting = String::from("Hi there");\r\n        // web_sys::console::log_1(&greeting.into()); // if uncommented will print\r\n    });\r\n\r\n    html! {\r\n        <button {onclick}>{ "Click" }</button>\r\n    }\r\n}\n'})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var o=t(6540);const r={},c=o.createContext(r);function l(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);