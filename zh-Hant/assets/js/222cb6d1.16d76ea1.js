"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5323],{7554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(4848),r=s(8453);const o={title:"Suspense",description:"Suspense for data fetching"},i=void 0,l={id:"concepts/suspense",title:"Suspense",description:"Suspense for data fetching",source:"@site/versioned_docs/version-0.21/concepts/suspense.mdx",sourceDirName:"concepts",slug:"/concepts/suspense",permalink:"/zh-Hant/docs/concepts/suspense",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/suspense.mdx",tags:[],version:"0.21",frontMatter:{title:"Suspense",description:"Suspense for data fetching"},sidebar:"docs",previous:{title:"\u8def\u7531\u5668",permalink:"/zh-Hant/docs/concepts/router"},next:{title:"Advanced topics",permalink:"/zh-Hant/docs/category/advanced-topics"}},a={},d=[{value:"Render-as-You-Fetch",id:"render-as-you-fetch",level:3},{value:"Note on implementing suspending hooks",id:"note-on-implementing-suspending-hooks",level:4},{value:"Use Suspense in Struct Components",id:"use-suspense-in-struct-components",level:3},{value:"Relevant examples",id:"relevant-examples",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Suspense is a way to suspend component rendering whilst waiting a task\r\nto complete and a fallback (placeholder) UI is shown in the meanwhile."}),"\n",(0,t.jsx)(n.p,{children:"It can be used to fetch data from server, wait for tasks to be completed\r\nby an agent, or perform other background asynchronous task."}),"\n",(0,t.jsx)(n.p,{children:"Before suspense, data fetching usually happens after (Fetch-on-render) or before\r\ncomponent rendering (Fetch-then-render)."}),"\n",(0,t.jsx)(n.h3,{id:"render-as-you-fetch",children:"Render-as-You-Fetch"}),"\n",(0,t.jsx)(n.p,{children:"Suspense enables a new approach that allows components to initiate data request\r\nduring the rendering process. When a component initiates a data request,\r\nthe rendering process will become suspended and a fallback UI will be\r\nshown until the request is completed."}),"\n",(0,t.jsx)(n.p,{children:"The recommended way to use suspense is with hooks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use yew::prelude::*;\r\n\r\n#[function_component(Content)]\r\nfn content() -> HtmlResult {\r\n    let user = use_user()?;\r\n\r\n    Ok(html! {<div>{"Hello, "}{&user.name}</div>})\r\n}\r\n\r\n#[function_component(App)]\r\nfn app() -> Html {\r\n    let fallback = html! {<div>{"Loading..."}</div>};\r\n\r\n    html! {\r\n        <Suspense {fallback}>\r\n            <Content />\r\n        </Suspense>\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"use_user"})," hook will suspend the component\r\nrendering while user information is loading and a ",(0,t.jsx)(n.code,{children:"Loading..."})," placeholder will\r\nbe shown until ",(0,t.jsx)(n.code,{children:"user"})," is loaded."]}),"\n",(0,t.jsxs)(n.p,{children:["To define a hook that suspends a component rendering, it needs to return\r\na ",(0,t.jsx)(n.code,{children:"SuspensionResult<T>"}),". When the component needs to be suspended, the\r\nhook should return a ",(0,t.jsx)(n.code,{children:"Err(Suspension)"})," and users should unwrap it with\r\n",(0,t.jsx)(n.code,{children:"?"})," in which it will be converted into ",(0,t.jsx)(n.code,{children:"Html"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"use yew::prelude::*;\r\nuse yew::suspense::{Suspension, SuspensionResult};\r\n\r\nstruct User {\r\n    name: String,\r\n}\r\n\r\n#[hook]\r\nfn use_user() -> SuspensionResult<User> {\r\n    match load_user() {\r\n        // If a user is loaded, then we return it as Ok(user).\r\n        Some(m) => Ok(m),\r\n        None => {\r\n            // When user is still loading, then we create a `Suspension`\r\n            // and call `SuspensionHandle::resume` when data loading\r\n            // completes, the component will be re-rendered\r\n            // automatically.\r\n            let (s, handle) = Suspension::new();\r\n            on_load_user_complete(move || {handle.resume();});\r\n            Err(s)\r\n        },\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"note-on-implementing-suspending-hooks",children:"Note on implementing suspending hooks"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.rs/yew/latest/yew/suspense/struct.Suspension.html#method.new",children:(0,t.jsx)(n.code,{children:"Suspension::new"})})," returns 2 values: the suspension context itself, and a suspension handle.\r\nThe latter is the one responsible for signaling when to re-render the suspended components, it provides 2 interchangable ways to do so:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Calling its ",(0,t.jsx)(n.a,{href:"https://docs.rs/yew/latest/yew/suspense/struct.SuspensionHandle.html#method.resume",children:(0,t.jsx)(n.code,{children:"resume"})})," method."]}),"\n",(0,t.jsx)(n.li,{children:"Dropping the handle."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["The suspension handle must be stored until it's time to update components, i.e. with newly received data;\r\notherwise, the suspended components will enter an infinite re-render loop, thus hampering performance.\r\nIn the example above, the suspension handle is preserved by being moved into a closure and passed into ",(0,t.jsx)(n.code,{children:"on_load_user_complete"}),".\r\nWhen the hypothetical user will be loaded, the closure will be called, thus calling ",(0,t.jsx)(n.code,{children:"handle.resume()"})," and re-rendering the components associated with the suspension context."]})}),"\n",(0,t.jsx)(n.h1,{id:"complete-example",children:"Complete Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse yew::suspense::{Suspension, SuspensionResult};\r\n\r\n#[derive(Debug)]\r\nstruct User {\r\n    name: String,\r\n}\r\n\r\nfn load_user() -> Option<User> {\r\n    todo!()  // implementation omitted.\r\n}\r\n\r\nfn on_load_user_complete<F: FnOnce()>(_fn: F) {\r\n    todo!()  // implementation omitted.\r\n}\r\n\r\n#[hook]\r\nfn use_user() -> SuspensionResult<User> {\r\n    match load_user() {\r\n        // If a user is loaded, then we return it as Ok(user).\r\n        Some(m) => Ok(m),\r\n        None => {\r\n            // When user is still loading, then we create a `Suspension`\r\n            // and call `SuspensionHandle::resume` when data loading\r\n            // completes, the component will be re-rendered\r\n            // automatically.\r\n            let (s, handle) = Suspension::new();\r\n            on_load_user_complete(move || {handle.resume();});\r\n            Err(s)\r\n        },\r\n    }\r\n}\r\n\r\n#[function_component(Content)]\r\nfn content() -> HtmlResult {\r\n    let user = use_user()?;\r\n\r\n    Ok(html! {<div>{"Hello, "}{&user.name}</div>})\r\n}\r\n\r\n#[function_component(App)]\r\nfn app() -> Html {\r\n    let fallback = html! {<div>{"Loading..."}</div>};\r\n\r\n    html! {\r\n        <Suspense {fallback}>\r\n            <Content />\r\n        </Suspense>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"use-suspense-in-struct-components",children:"Use Suspense in Struct Components"}),"\n",(0,t.jsxs)(n.p,{children:["It's not possible to suspend a struct component directly. However, you\r\ncan use a function component as a ",(0,t.jsx)(n.a,{href:"../advanced-topics/struct-components/hoc",children:"Higher Order Component"}),"\r\nto achieve suspense-based data fetching."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/suspense/src/struct_consumer.rs",children:"suspense example in the Yew repository"}),"\r\ndemonstrates how to use."]}),"\n",(0,t.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/suspense",children:"Suspense"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);