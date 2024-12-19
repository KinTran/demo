"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7084],{6757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(4848),r=t(8453);const s={title:"Introduction",description:"Components and their lifecycle hooks"},i=void 0,l={id:"concepts/components/introduction",title:"Introduction",description:"Components and their lifecycle hooks",source:"@site/versioned_docs/version-0.18.0/concepts/components/introduction.mdx",sourceDirName:"concepts/components",slug:"/concepts/components/introduction",permalink:"/zh-Hans/docs/0.18.0/concepts/components/introduction",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/components/introduction.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Introduction",description:"Components and their lifecycle hooks"},sidebar:"docs",previous:{title:"\u65b0\u624b\u6a21\u677f",permalink:"/zh-Hans/docs/0.18.0/getting-started/starter-templates"},next:{title:"\u56de\u8c03\uff08Callbacks\uff09",permalink:"/zh-Hans/docs/0.18.0/concepts/components/callbacks"}},d={},c=[{value:"What are Components?",id:"what-are-components",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2},{value:"Create",id:"create",level:3},{value:"View",id:"view",level:3},{value:"Rendered",id:"rendered",level:3},{value:"Update",id:"update",level:3},{value:"Change",id:"change",level:3},{value:"Destroy",id:"destroy",level:3},{value:"Infinite loops",id:"infinite-loops",level:3},{value:"Associated Types",id:"associated-types",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"what-are-components",children:"What are Components?"}),"\n",(0,o.jsxs)(n.p,{children:["Components are the building blocks of Yew. They manage their own state and can render themselves to the DOM. Components are created by implementing the ",(0,o.jsx)(n.code,{children:"Component"})," trait for a type. The ",(0,o.jsx)(n.code,{children:"Component"}),"\r\ntrait has a number of methods which need to be implemented; Yew will call these at different stages\r\nin the lifecycle of a component."]}),"\n",(0,o.jsx)(n.h2,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,o.jsx)(n.admonition,{title:"contribute",type:"important",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Contribute to our docs:"})," ",(0,o.jsx)(n.a,{href:"https://github.com/yewstack/yew/issues/1915",children:"Add a diagram of the component lifecycle"})]})}),"\n",(0,o.jsx)(n.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,o.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,o.jsxs)(n.p,{children:["When a component is created, it receives properties from its parent component as well as a ",(0,o.jsx)(n.code,{children:"ComponentLink"}),'. The properties can be used to initialize the component\'s state and the "link" can be used to register callbacks or send messages to the component.']}),"\n",(0,o.jsxs)(n.p,{children:["It is common to store the props (data which can be passed from parent to child components) and the\r\n",(0,o.jsx)(n.code,{children:"ComponentLink"})," in your component struct, like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, ComponentLink};\r\n\r\npub struct MyComponent {\r\n    props: Props,\r\n    link: ComponentLink<Self>,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Properties = Props;\r\n    // ...\r\n\r\n    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {\r\n        MyComponent { props, link }\r\n    }\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"view",children:"View"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"view"})," method allows you to describe how a component should be rendered to the DOM. Writing\r\nHTML-like code using Rust functions can become quite messy, so Yew provides a macro called ",(0,o.jsx)(n.code,{children:"html!"}),"\r\nfor declaring HTML and SVG nodes (as well as attaching attributes and event listeners to them) and a\r\nconvenient way to render child components. The macro is somewhat similar to React's JSX (the\r\ndifferences in programming language aside)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use yew::{html, Component, Html};\r\n\r\nimpl Component for MyComponent {\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        let onclick = self.link.callback(|_| Msg::Click);\r\n        html! {\r\n            <button onclick=onclick>{ self.props.button_text }</button>\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For usage details, check out ",(0,o.jsxs)(n.a,{href:"/zh-Hans/docs/0.18.0/concepts/html/introduction",children:["the ",(0,o.jsx)(n.code,{children:"html!"})," guide"]}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"rendered",children:"Rendered"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"rendered"})," component lifecycle method is called once ",(0,o.jsx)(n.code,{children:"view"})," has been called and Yew has rendered\r\nthe results to the DOM, but before the browser refreshes the page. This method is useful when you\r\nwant to perform actions that can only be completed after the component has rendered elements. There\r\nis also a parameter called ",(0,o.jsx)(n.code,{children:"first_render"})," which can be used to determine whether this function is\r\nbeing called on the first render, or instead a subsequent one."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'use yew::{html, web_sys::HtmlInputElement, Component, Html, NodeRef};\r\n\r\npub struct MyComponent {\r\n    node_ref: NodeRef,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <input ref=self.node_ref.clone() type="text" />\r\n        }\r\n    }\r\n\r\n    fn rendered(&mut self, first_render: bool) {\r\n        if first_render {\r\n            if let Some(input) = self.node_ref.cast::<HtmlInputElement>() {\r\n                input.focus();\r\n            }\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{title:"note",type:"tip",children:(0,o.jsx)(n.p,{children:"Note that this lifecycle method does not require an implementation and will do nothing by default."})}),"\n",(0,o.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,o.jsxs)(n.p,{children:["Communication with components happens primarily through messages which are handled by the\r\n",(0,o.jsx)(n.code,{children:"update"})," lifecycle method. This allows the component to update itself\r\nbased on what the message was, and determine if it needs to re-render itself. Messages can be sent\r\nby event listeners, child components, Agents, Services, or Futures."]}),"\n",(0,o.jsxs)(n.p,{children:["Here's an example of what an implementation of ",(0,o.jsx)(n.code,{children:"update"})," could look like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, ShouldRender};\r\n\r\npub enum Msg {\r\n    SetInputEnabled(bool)\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Message = Msg;\r\n\r\n    // ...\r\n\r\n    fn update(&mut self, msg: Self::Message) -> ShouldRender {\r\n       match msg {\r\n           Msg::SetInputEnabled(enabled) => {\r\n               if self.input_enabled != enabled {\r\n                   self.input_enabled = enabled;\r\n                   true // Re-render\r\n               } else {\r\n                   false\r\n               }\r\n           }\r\n       }\r\n    }\r\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"change",children:"Change"}),"\n",(0,o.jsx)(n.p,{children:"Components may be re-rendered by their parents. When this happens, they could receive new properties\r\nand need to re-render. This design facilitates parent to child component communication by just\r\nchanging the values of a property."}),"\n",(0,o.jsx)(n.p,{children:"A typical implementation would look something like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, ShouldRender};\r\n\r\nimpl Component for MyComponent {\r\n    // ...\r\n\r\n    fn change(&mut self, props: Self::Properties) -> ShouldRender {\r\n        if self.props != props {\r\n            self.props = props;\r\n            true\r\n        } else {\r\n            false\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"destroy",children:"Destroy"}),"\n",(0,o.jsxs)(n.p,{children:["After Components are unmounted from the DOM, Yew calls the ",(0,o.jsx)(n.code,{children:"destroy"})," lifecycle method; this is\r\nnecessary if you need to undertake operations to clean up after earlier actions of a component\r\nbefore it is destroyed. This method is optional and does nothing by default."]}),"\n",(0,o.jsx)(n.h3,{id:"infinite-loops",children:"Infinite loops"}),"\n",(0,o.jsx)(n.p,{children:"Infinite loops are possible with Yew's lifecycle methods, but are only caused when trying to update\r\nthe same component after every render when that update also requests the component to be rendered."}),"\n",(0,o.jsx)(n.p,{children:"A simple example can be seen below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, ComponentLink, Html};\r\n\r\nstruct Comp {\r\n    link: ComponentLink<Self>,\r\n}\r\n\r\nimpl Component for Comp {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {\r\n        Self { link }\r\n    }\r\n\r\n    fn update(&mut self, _msg: Self::Message) -> bool {\r\n        // We are going to always request to re-render on any msg\r\n        true\r\n    }\r\n\r\n    fn view(&self) -> Html {\r\n        // For this example it doesn't matter what is rendered\r\n        Html::default()\r\n    }\r\n\r\n    fn rendered(&mut self, _first_render: bool) {\r\n        // Request that the component is updated with this new msg\r\n        self.link.send_message(());\r\n    }\r\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let's run through what happens here:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Component is created using the ",(0,o.jsx)(n.code,{children:"create"})," function."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"view"})," method is called so Yew knows what to render to the browser DOM."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"rendered"})," method is called, which schedules an update message using the ",(0,o.jsx)(n.code,{children:"ComponentLink"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Yew finishes the post-render phase."}),"\n",(0,o.jsx)(n.li,{children:"Yew checks for scheduled events and sees the update message queue is not empty so works through\r\nthe messages."}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"update"})," method is called which returns ",(0,o.jsx)(n.code,{children:"true"})," to indicate something has changed and the\r\ncomponent needs to re-render."]}),"\n",(0,o.jsx)(n.li,{children:"Jump back to 2."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can still schedule updates in the ",(0,o.jsx)(n.code,{children:"rendered"})," method and it's often useful to do so, but\r\nconsider how your component will terminate this loop when you do."]}),"\n",(0,o.jsx)(n.h2,{id:"associated-types",children:"Associated Types"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Component"})," trait has two associated types: ",(0,o.jsx)(n.code,{children:"Message"})," and ",(0,o.jsx)(n.code,{children:"Properties"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use yew::Component;\r\n\r\nimpl Component for MyComponent {\r\n    type Message = Msg;\r\n    type Properties = Props;\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Message"})," type is used to send messages to a component after an event has taken place; for\r\nexample you might want to undertake some action when a user clicks a button or scrolls down the\r\npage. Because components tend to have to respond to more than one event, the ",(0,o.jsx)(n.code,{children:"Message"})," type will\r\nnormally be an enum, where each variant is an event to be handled."]}),"\n",(0,o.jsxs)(n.p,{children:["When organizing your codebase, it is sensible to include the definition of the ",(0,o.jsx)(n.code,{children:"Message"})," type in the\r\nsame module in which your component is defined. You may find it helpful to adopt a consistent naming\r\nconvention for message types. One option (though not the only one) is to name the types\r\n",(0,o.jsx)(n.code,{children:"ComponentNameMsg"}),", e.g. if your component was called ",(0,o.jsx)(n.code,{children:"Homepage"})," then you might call the type\r\n",(0,o.jsx)(n.code,{children:"HomepageMsg"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"enum Msg {\r\n    Click,\r\n    FormInput(String)\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Properties"})," represents the information passed to a component from its parent. This type must implements the ",(0,o.jsx)(n.code,{children:"Properties"})," trait (usually by deriving it) and can specify whether certain properties are required or optional. This type is used when creating and updating a component. It is common practice to create a struct called ",(0,o.jsx)(n.code,{children:"Props"})," in your component's module and use that as the component's ",(0,o.jsx)(n.code,{children:"Properties"}),' type. It is common to shorten "properties" to "props". Since props are handed down from parent components, the root component of your application typically has a ',(0,o.jsx)(n.code,{children:"Properties"})," type of ",(0,o.jsx)(n.code,{children:"()"}),". If you wish to specify properties for your root component, use the ",(0,o.jsx)(n.code,{children:"App::mount_with_props"})," method."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);