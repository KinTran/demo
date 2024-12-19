"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3217],{935:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var t=r(4848),o=r(8453);const s={title:"Components",description:"Create complex layouts with component hierarchies"},i=void 0,p={id:"concepts/html/components",title:"Components",description:"Create complex layouts with component hierarchies",source:"@site/versioned_docs/version-0.19.0/concepts/html/components.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/components",permalink:"/demo/zh-Hant/docs/0.19.0/concepts/html/components",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/html/components.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Components",description:"Create complex layouts with component hierarchies"},sidebar:"docs",previous:{title:"Introduction",permalink:"/demo/zh-Hant/docs/0.19.0/concepts/html/introduction"},next:{title:"Elements",permalink:"/demo/zh-Hant/docs/0.19.0/concepts/html/elements"}},l={},c=[{value:"Basic",id:"basic",level:2},{value:"Nested",id:"nested",level:2},{value:"Nested Children with Props",id:"nested-children-with-props",level:2},{value:"Relevant examples",id:"relevant-examples",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,t.jsxs)(n.p,{children:["Any type that implements ",(0,t.jsx)(n.code,{children:"Component"})," can be used in the ",(0,t.jsx)(n.code,{children:"html!"})," macro:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{Component, Html, html, Context, Properties};\r\n\r\nstruct MyComponent;\r\n\r\nimpl Component for MyComponent {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "This component has no properties!" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Clone, PartialEq, Properties)]\r\nstruct Props {\r\n    prop1: String,\r\n    prop2: String,\r\n}\r\n\r\nstruct MyComponentWithProps;\r\n\r\nimpl Component for MyComponentWithProps {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            {\r\n                format!(\r\n                    "prop1: {} and prop2: {}",\r\n                    ctx.props().prop1,\r\n                    ctx.props().prop2\r\n                )\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nlet props = Props {\r\n    prop1: "Hello".to_owned(),\r\n    prop2: "World".to_owned(),\r\n};\r\n\r\n\r\nhtml!{\r\n    <>\r\n        // No properties\r\n        <MyComponent />\r\n\r\n        // With Properties\r\n        <MyComponentWithProps prop1="lorem" prop2="ipsum" />\r\n\r\n        // With the whole set of props provided at once\r\n        <MyComponentWithProps ..props.clone() />\r\n\r\n        // With Properties from a variable and specific values overridden\r\n        <MyComponentWithProps prop2="lorem" ..props />\r\n    </>\r\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"nested",children:"Nested"}),"\n",(0,t.jsxs)(n.p,{children:["Components can be passed children if they have a ",(0,t.jsx)(n.code,{children:"children"})," field in their ",(0,t.jsx)(n.code,{children:"Properties"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:'title="parent.rs"',children:'use yew::{Children, Component, Context, html, Html, Properties};\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    id: String,\r\n    children: Children,\r\n}\r\n\r\nstruct Container;\r\n\r\nimpl Component for Container {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div id={ctx.props().id.clone()}>\r\n                { ctx.props().children.clone() }\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\nhtml! {\r\n    <Container id="container">\r\n        <h4>{ "Hi" }</h4>\r\n        <div>{ "Hello" }</div>\r\n    </Container>\r\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"html!"})," macro allows you to pass a base expression with the ",(0,t.jsx)(n.code,{children:"..props"})," syntax instead of specifying each property individually,\r\nsimilar to Rust's ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/stable/reference/expressions/struct-expr.html#functional-update-syntax",children:"Functional Update Syntax"}),".\r\nThis base expression must occur after any individual props are passed.\r\nWhen passing a base props expression with a ",(0,t.jsx)(n.code,{children:"children"})," field, the children passed in the ",(0,t.jsx)(n.code,{children:"html!"})," macro overwrite the ones already present in the props."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{Children, Component, Context, html, Html, props, Properties};\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    id: String,\r\n    children: Children,\r\n}\r\n\r\nstruct Container;\r\n\r\nimpl Component for Container {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div id={ctx.props().id.clone()}>\r\n                { ctx.props().children.clone() }\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\nlet props = yew::props!(Container::Properties {\r\n    id: "container-2",\r\n    children: Children::default(),\r\n});\r\n\r\nhtml! {\r\n    <Container ..props>\r\n        // props.children will be overwritten with this\r\n        <span>{ "I am a child, as you can see" }</span>\r\n    </Container>\r\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"nested-children-with-props",children:"Nested Children with Props"}),"\n",(0,t.jsxs)(n.p,{children:["Nested component properties can be accessed and mutated if the containing component types its children. In the following example, the ",(0,t.jsx)(n.code,{children:"List"})," component can wrap ",(0,t.jsx)(n.code,{children:"ListItem"})," components. For a real world example of this pattern, check out the ",(0,t.jsx)(n.code,{children:"yew-router"})," source code. For a more advanced example, check out the ",(0,t.jsx)(n.code,{children:"nested-list"})," example in the main yew repository."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use std::rc::Rc;\r\nuse yew::{html, ChildrenWithProps, Component, Context, Html, Properties};\r\n\r\n#[derive(Clone, PartialEq, Properties)]\r\npub struct ListItemProps {\r\n    value: String,\r\n}\r\n\r\npub struct ListItem;\r\n\r\nimpl Component for ListItem {\r\n    type Message = ();\r\n    type Properties = ListItemProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <span>\r\n                { ctx.props().value.clone() }\r\n            </span>\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct Props {\r\n    pub children: ChildrenWithProps<ListItem>,\r\n}\r\n\r\npub struct List;\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {{\r\n            for ctx.props().children.iter().map(|mut item| {\r\n                let mut props = Rc::make_mut(&mut item.props);\r\n                props.value = format!("item-{}", props.value);\r\n                item\r\n            })\r\n        }}\r\n    }\r\n}\r\nhtml! {\r\n    <List>\r\n        <ListItem value="a" />\r\n        <ListItem value="b" />\r\n        <ListItem value="c" />\r\n    </List>\r\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.19.3/examples/boids",children:"Boids"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.19.3/examples/router",children:"Router"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.19.3/examples/store",children:"Store"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>p});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);