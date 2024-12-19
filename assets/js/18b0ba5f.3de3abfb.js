"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9464],{3276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(4848),o=t(8453);const s={title:"Lifecycle",description:"Components and their lifecycle hooks"},i=void 0,c={id:"advanced-topics/struct-components/lifecycle",title:"Lifecycle",description:"Components and their lifecycle hooks",source:"@site/docs/advanced-topics/struct-components/lifecycle.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/lifecycle",permalink:"/docs/next/advanced-topics/struct-components/lifecycle",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/lifecycle.mdx",tags:[],version:"current",frontMatter:{title:"Lifecycle",description:"Components and their lifecycle hooks"},sidebar:"docs",previous:{title:"Higher Order Components",permalink:"/docs/next/advanced-topics/struct-components/hoc"},next:{title:"Scope",permalink:"/docs/next/advanced-topics/struct-components/scope"}},l={},d=[{value:"Lifecycle",id:"lifecycle",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2},{value:"Create",id:"create",level:3},{value:"View",id:"view",level:3},{value:"Rendered",id:"rendered",level:3},{value:"Update",id:"update",level:3},{value:"Changed",id:"changed",level:3},{value:"Destroy",id:"destroy",level:3},{value:"Infinite loops",id:"infinite-loops",level:3},{value:"Associated Types",id:"associated-types",level:2},{value:"Lifecycle Context",id:"lifecycle-context",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Component"})," trait has a number of methods which need to be implemented; Yew will call these at different\r\nstages in the lifecycle of a component."]}),"\n",(0,r.jsx)(n.h2,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,r.jsx)(n.admonition,{title:"contribute",type:"important",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Contribute to our docs:"})," ",(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/issues/1915",children:"Add a diagram of the component lifecycle"})]})}),"\n",(0,r.jsx)(n.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,r.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,r.jsxs)(n.p,{children:["When a component is created, it receives properties from its parent component and is stored within\r\nthe ",(0,r.jsx)(n.code,{children:"Context<Self>"})," that is passed down to the ",(0,r.jsx)(n.code,{children:"create"}),' method. The properties can be used to\r\ninitialize the component\'s state and the "link" can be used to register callbacks or send messages to the component.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, Context, html, Html, Properties};\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct Props;\r\n\r\npub struct MyComponent;\r\n\r\nimpl Component for MyComponent {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    // highlight-start\r\n    fn create(ctx: &Context<Self>) -> Self {\r\n        MyComponent\r\n    }\r\n    // highlight-end\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            // impl\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"view",children:"View"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"view"})," method allows you to describe how a component should be rendered to the DOM. Writing\r\nHTML-like code using Rust functions can become quite messy, so Yew provides a macro called ",(0,r.jsx)(n.code,{children:"html!"}),"\r\nfor declaring HTML and SVG nodes (as well as attaching attributes and event listeners to them) and a\r\nconvenient way to render child components. The macro is somewhat similar to React's JSX (the\r\ndifferences in programming language aside).\r\nOne difference is that Yew provides a shorthand syntax for properties, similar to Svelte, where instead of writing ",(0,r.jsx)(n.code,{children:"onclick={onclick}"}),", you can just write ",(0,r.jsx)(n.code,{children:"{onclick}"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, Context, html, Html, Properties};\r\n\r\nenum Msg {\r\n    Click,\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    button_text: String,\r\n}\r\n\r\nstruct MyComponent;\r\n\r\nimpl Component for MyComponent {\r\n    type Message = Msg;\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    // highlight-start\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        let onclick = ctx.link().callback(|_| Msg::Click);\r\n        html! {\r\n            <button {onclick}>{ &ctx.props().button_text }</button>\r\n        }\r\n    }\r\n    // highlight-end\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For usage details, check out ",(0,r.jsxs)(n.a,{href:"/docs/next/concepts/html",children:["the ",(0,r.jsx)(n.code,{children:"html!"})," guide"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"rendered",children:"Rendered"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"rendered"})," component lifecycle method is called once ",(0,r.jsx)(n.code,{children:"view"})," has been called and Yew has rendered\r\nthe results to the DOM, but before the browser refreshes the page. This method is useful when you\r\nwant to perform actions that can only be completed after the component has rendered elements. There\r\nis also a parameter called ",(0,r.jsx)(n.code,{children:"first_render"})," which can be used to determine whether this function is\r\nbeing called on the first render, or instead a subsequent one."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use web_sys::HtmlInputElement;\r\nuse yew::{\r\n    Component, Context, html, Html, NodeRef,\r\n};\r\n\r\npub struct MyComponent {\r\n    node_ref: NodeRef,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            node_ref: NodeRef::default(),\r\n        }\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <input ref={self.node_ref.clone()} type="text" />\r\n        }\r\n    }\r\n\r\n    // highlight-start\r\n    fn rendered(&mut self, _ctx: &Context<Self>, first_render: bool) {\r\n        if first_render {\r\n            if let Some(input) = self.node_ref.cast::<HtmlInputElement>() {\r\n                input.focus();\r\n            }\r\n        }\r\n    }\r\n    // highlight-end\r\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"note",type:"tip",children:(0,r.jsx)(n.p,{children:"Note that this lifecycle method does not require implementation and will do nothing by default."})}),"\n",(0,r.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,r.jsxs)(n.p,{children:["Communication with components happens primarily through messages which are handled by the\r\n",(0,r.jsx)(n.code,{children:"update"})," lifecycle method. This allows the component to update itself\r\nbased on what the message was, and determine if it needs to re-render itself. Messages can be sent\r\nby event listeners, child components, Agents, Services, or Futures."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of what an implementation of ",(0,r.jsx)(n.code,{children:"update"})," could look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, Context, html, Html};\r\n\r\n// highlight-start\r\npub enum Msg {\r\n    SetInputEnabled(bool)\r\n}\r\n// highlight-end\r\n\r\nstruct MyComponent {\r\n    input_enabled: bool,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    // highlight-next-line\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            input_enabled: false,\r\n        }\r\n    }\r\n\r\n    // highlight-start\r\n    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {\r\n        match msg {\r\n            Msg::SetInputEnabled(enabled) => {\r\n                if self.input_enabled != enabled {\r\n                    self.input_enabled = enabled;\r\n                    true // Re-render\r\n                } else {\r\n                    false\r\n                }\r\n            }\r\n        }\r\n    }\r\n    // highlight-end\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            // impl\r\n        }\r\n    }\r\n\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"changed",children:"Changed"}),"\n",(0,r.jsx)(n.p,{children:"Components may be re-rendered by their parents. When this happens, they could receive new properties\r\nand need to re-render. This design facilitates parent-to-child component communication by just\r\nchanging the values of a property. There is a default implementation that re-renders the component\r\nwhen props are changed."}),"\n",(0,r.jsx)(n.h3,{id:"destroy",children:"Destroy"}),"\n",(0,r.jsxs)(n.p,{children:["After Components are unmounted from the DOM, Yew calls the ",(0,r.jsx)(n.code,{children:"destroy"})," lifecycle method; this is\r\nnecessary if you need to undertake operations to clean up after earlier actions of a component\r\nbefore it is destroyed. This method is optional and does nothing by default."]}),"\n",(0,r.jsx)(n.h3,{id:"infinite-loops",children:"Infinite loops"}),"\n",(0,r.jsx)(n.p,{children:"Infinite loops are possible with Yew's lifecycle methods but are only caused when trying to update\r\nthe same component after every render, when that update also requests the component to be rendered."}),"\n",(0,r.jsx)(n.p,{children:"A simple example can be seen below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use yew::{Context, Component, Html};\r\n\r\nstruct Comp;\r\n\r\nimpl Component for Comp {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn update(&mut self, _ctx: &Context<Self>, _msg: Self::Message) -> bool {\r\n        // We are going to always request to re-render on any msg\r\n        true\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        // For this example it doesn't matter what is rendered\r\n        Html::default()\r\n    }\r\n\r\n    fn rendered(&mut self, ctx: &Context<Self>, _first_render: bool) {\r\n        // Request that the component is updated with this new msg\r\n        ctx.link().send_message(());\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's run through what happens here:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Component is created using the ",(0,r.jsx)(n.code,{children:"create"})," function."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"view"})," method is called so Yew knows what to render to the browser DOM."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"rendered"})," method is called, which schedules an update message using the ",(0,r.jsx)(n.code,{children:"Context"})," link."]}),"\n",(0,r.jsx)(n.li,{children:"Yew finishes the post-render phase."}),"\n",(0,r.jsx)(n.li,{children:"Yew checks for scheduled events and sees the update message queue is not empty so works through\r\nthe messages."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"update"})," method is called which returns ",(0,r.jsx)(n.code,{children:"true"})," to indicate something has changed and the\r\ncomponent needs to re-render."]}),"\n",(0,r.jsx)(n.li,{children:"Jump back to 2."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can still schedule updates in the ",(0,r.jsx)(n.code,{children:"rendered"})," method and it is often useful to do so, but\r\nconsider how your component will terminate this loop when you do."]}),"\n",(0,r.jsx)(n.h2,{id:"associated-types",children:"Associated Types"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Component"})," trait has two associated types: ",(0,r.jsx)(n.code,{children:"Message"})," and ",(0,r.jsx)(n.code,{children:"Properties"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"impl Component for MyComponent {\r\n    type Message = Msg;\r\n    type Properties = Props;\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Message"})," type is used to send messages to a component after an event has taken place; for\r\nexample, you might want to undertake some action when a user clicks a button or scrolls down the\r\npage. Because components tend to have to respond to more than one event, the ",(0,r.jsx)(n.code,{children:"Message"})," type will\r\nnormally be an enum, where each variant is an event to be handled."]}),"\n",(0,r.jsxs)(n.p,{children:["When organizing your codebase, it is sensible to include the definition of the ",(0,r.jsx)(n.code,{children:"Message"})," type in the\r\nsame module in which your component is defined. You may find it helpful to adopt a consistent naming\r\nconvention for message types. One option (though not the only one) is to name the types\r\n",(0,r.jsx)(n.code,{children:"ComponentNameMsg"}),", e.g. if your component was called ",(0,r.jsx)(n.code,{children:"Homepage"})," then you might call the type\r\n",(0,r.jsx)(n.code,{children:"HomepageMsg"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"enum Msg {\r\n    Click,\r\n    FormInput(String)\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Properties"})," represents the information passed to a component from its parent. This type must implement the ",(0,r.jsx)(n.code,{children:"Properties"})," trait (usually by deriving it) and can specify whether certain properties are required or optional. This type is used when creating and updating a component. It is common practice to create a struct called ",(0,r.jsx)(n.code,{children:"Props"})," in your component's module and use that as the component's ",(0,r.jsx)(n.code,{children:"Properties"}),' type. It is common to shorten "properties" to "props". Since props are handed down from parent components, the root component of your application typically has a ',(0,r.jsx)(n.code,{children:"Properties"})," type of ",(0,r.jsx)(n.code,{children:"()"}),". If you wish to specify properties for your root component, use the ",(0,r.jsx)(n.code,{children:"App::mount_with_props"})," method."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"./properties",children:"Learn more about properties"})})}),"\n",(0,r.jsx)(n.h2,{id:"lifecycle-context",children:"Lifecycle Context"}),"\n",(0,r.jsx)(n.p,{children:"All component lifecycle methods take a context object. This object provides a reference to the component's scope, which\r\nallows sending messages to a component and the props passed to the component."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);