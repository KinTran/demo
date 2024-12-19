"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6480],{3067:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(4848),t=r(8453);const o={title:"Suspense",description:"Suspense for data fetching"},l=void 0,a={id:"concepts/suspense",title:"Suspense",description:"Suspense for data fetching",source:"@site/versioned_docs/version-0.20/concepts/suspense.mdx",sourceDirName:"concepts",slug:"/concepts/suspense",permalink:"/zh-Hans/docs/0.20/concepts/suspense",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/suspense.mdx",tags:[],version:"0.20",frontMatter:{title:"Suspense",description:"Suspense for data fetching"},sidebar:"docs",previous:{title:"Router",permalink:"/zh-Hans/docs/0.20/concepts/router"},next:{title:"Advanced topics",permalink:"/zh-Hans/docs/0.20/category/advanced-topics"}},i={},c=[{value:"Render-as-You-Fetch",id:"render-as-you-fetch",level:3},{value:"Use Suspense in Struct Components",id:"use-suspense-in-struct-components",level:3},{value:"Relevant examples",id:"relevant-examples",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Suspense is a way to suspend component rendering whilst waiting a task\r\nto complete and a fallback (placeholder) UI is shown in the meanwhile."}),"\n",(0,s.jsx)(n.p,{children:"It can be used to fetch data from server, wait for tasks to be completed\r\nby an agent, or perform other background asynchronous task."}),"\n",(0,s.jsx)(n.p,{children:"Before suspense, data fetching usually happens after (Fetch-on-render) or before\r\ncomponent rendering (Fetch-then-render)."}),"\n",(0,s.jsx)(n.h3,{id:"render-as-you-fetch",children:"Render-as-You-Fetch"}),"\n",(0,s.jsx)(n.p,{children:"Suspense enables a new approach that allows components to initiate data request\r\nduring the rendering process. When a component initiates a data request,\r\nthe rendering process will become suspended and a fallback UI will be\r\nshown until the request is completed."}),"\n",(0,s.jsx)(n.p,{children:"The recommended way to use suspense is with hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use yew::prelude::*;\r\n\r\n#[function_component(Content)]\r\nfn content() -> HtmlResult {\r\n    let user = use_user()?;\r\n\r\n    Ok(html! {<div>{"Hello, "}{&user.name}</div>})\r\n}\r\n\r\n#[function_component(App)]\r\nfn app() -> Html {\r\n    let fallback = html! {<div>{"Loading..."}</div>};\r\n\r\n    html! {\r\n        <Suspense {fallback}>\r\n            <Content />\r\n        </Suspense>\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, the ",(0,s.jsx)(n.code,{children:"use_user"})," hook will suspend the component\r\nrendering while user information is loading and a ",(0,s.jsx)(n.code,{children:"Loading..."})," placeholder will\r\nbe shown until ",(0,s.jsx)(n.code,{children:"user"})," is loaded."]}),"\n",(0,s.jsxs)(n.p,{children:["To define a hook that suspends a component rendering, it needs to return\r\na ",(0,s.jsx)(n.code,{children:"SuspensionResult<T>"}),". When the component needs to be suspended, the\r\nhook should return a ",(0,s.jsx)(n.code,{children:"Err(Suspension)"})," and users should unwrap it with\r\n",(0,s.jsx)(n.code,{children:"?"})," in which it will be converted into ",(0,s.jsx)(n.code,{children:"Html"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"use yew::prelude::*;\r\nuse yew::suspense::{Suspension, SuspensionResult};\r\n\r\nstruct User {\r\n    name: String,\r\n}\r\n\r\n#[hook]\r\nfn use_user() -> SuspensionResult<User> {\r\n    match load_user() {\r\n        // If a user is loaded, then we return it as Ok(user).\r\n        Some(m) => Ok(m),\r\n        None => {\r\n            // When user is still loading, then we create a `Suspension`\r\n            // and call `SuspensionHandle::resume` when data loading\r\n            // completes, the component will be re-rendered\r\n            // automatically.\r\n            let (s, handle) = Suspension::new();\r\n            on_load_user_complete(move || {handle.resume();});\r\n            Err(s)\r\n        },\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.h1,{id:"complete-example",children:"Complete Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse yew::suspense::{Suspension, SuspensionResult};\r\n\r\n#[derive(Debug)]\r\nstruct User {\r\n    name: String,\r\n}\r\n\r\nfn load_user() -> Option<User> {\r\n    todo!()  // implementation omitted.\r\n}\r\n\r\nfn on_load_user_complete<F: FnOnce()>(_fn: F) {\r\n    todo!()  // implementation omitted.\r\n}\r\n\r\n#[hook]\r\nfn use_user() -> SuspensionResult<User> {\r\n    match load_user() {\r\n        // If a user is loaded, then we return it as Ok(user).\r\n        Some(m) => Ok(m),\r\n        None => {\r\n            // When user is still loading, then we create a `Suspension`\r\n            // and call `SuspensionHandle::resume` when data loading\r\n            // completes, the component will be re-rendered\r\n            // automatically.\r\n            let (s, handle) = Suspension::new();\r\n            on_load_user_complete(move || {handle.resume();});\r\n            Err(s)\r\n        },\r\n    }\r\n}\r\n\r\n#[function_component(Content)]\r\nfn content() -> HtmlResult {\r\n    let user = use_user()?;\r\n\r\n    Ok(html! {<div>{"Hello, "}{&user.name}</div>})\r\n}\r\n\r\n#[function_component(App)]\r\nfn app() -> Html {\r\n    let fallback = html! {<div>{"Loading..."}</div>};\r\n\r\n    html! {\r\n        <Suspense {fallback}>\r\n            <Content />\r\n        </Suspense>\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"use-suspense-in-struct-components",children:"Use Suspense in Struct Components"}),"\n",(0,s.jsxs)(n.p,{children:["It's not possible to suspend a struct component directly. However, you\r\ncan use a function component as a ",(0,s.jsx)(n.a,{href:"../advanced-topics/struct-components/hoc",children:"HOC"})," to\r\nachieve suspense-based data fetching."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use yew::prelude::*;\r\n\r\n#[function_component(WithUser)]\r\nfn with_user<T>() -> HtmlResult\r\nwhere T: BaseComponent\r\n{\r\n    let user = use_user()?;\r\n\r\n    Ok(html! {<T {user} />})\r\n}\r\n\r\n#[derive(Debug, PartialEq, Properties)]\r\npub struct UserContentProps {\r\n    pub user: User,\r\n}\r\n\r\npub struct BaseUserContent;\r\n\r\nimpl Component for BaseUserContent {\r\n    type Properties = UserContentProps;\r\n    type Message = ();\r\n\r\n    fn create(ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        let name = ctx.props().user.name;\r\n\r\n        html! {<div>{"Hello, "}{name}{"!"}</div>}\r\n    }\r\n}\r\n\r\npub type UserContent = WithUser<BaseUserContent>;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.20.0/examples/suspense",children:"Suspense"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(6540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);