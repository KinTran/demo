"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[716],{2774:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=r(4848),s=r(8453);const o={title:"Components",description:"Create complex layouts with component hierarchies"},i=void 0,c={id:"concepts/html/components",title:"Components",description:"Create complex layouts with component hierarchies",source:"@site/versioned_docs/version-0.21/concepts/html/components.mdx",sourceDirName:"concepts/html",slug:"/concepts/html/components",permalink:"/demo/docs/concepts/html/components",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/html/components.mdx",tags:[],version:"0.21",frontMatter:{title:"Components",description:"Create complex layouts with component hierarchies"},sidebar:"docs",previous:{title:"Introduction",permalink:"/demo/docs/concepts/html"},next:{title:"Elements",permalink:"/demo/docs/concepts/html/elements"}},l={},p=[{value:"Basic",id:"basic",level:2},{value:"Nested",id:"nested",level:2},{value:"Relevant examples",id:"relevant-examples",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,t.jsxs)(n.p,{children:["Components can be used in the ",(0,t.jsx)(n.code,{children:"html!"})," macro:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[function_component]\r\nfn MyComponent() -> Html {\r\n    html! {\r\n        { "This component has no properties!" }\r\n    }\r\n}\r\n\r\n#[derive(Clone, PartialEq, Properties)]\r\nstruct Props {\r\n    user_first_name: String,\r\n    user_last_name: String,\r\n}\r\n\r\n#[function_component]\r\nfn MyComponentWithProps(props: &Props) -> Html {\r\n    let Props { user_first_name, user_last_name } = props;\r\n    html! {\r\n        <>{"user_first_name: "}{user_first_name}{" and user_last_name: "}{user_last_name}</>\r\n    }\r\n}\r\n\r\nlet props = Props {\r\n    user_first_name: "Bob".to_owned(),\r\n    user_last_name: "Smith".to_owned(),\r\n};\r\n\r\nhtml!{\r\n    <>\r\n        // No properties\r\n        <MyComponent />\r\n\r\n        // With Properties\r\n        <MyComponentWithProps user_first_name="Sam" user_last_name="Idle" />\r\n\r\n        // With the whole set of props provided at once\r\n        <MyComponentWithProps ..props.clone() />\r\n\r\n        // With Properties from a variable and specific values overridden\r\n        <MyComponentWithProps user_last_name="Elm" ..props />\r\n    </>\r\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"nested",children:"Nested"}),"\n",(0,t.jsxs)(n.p,{children:["Components can accept child components/elements if they have a ",(0,t.jsx)(n.code,{children:"children"})," field in their ",(0,t.jsx)(n.code,{children:"Properties"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:'title="parent.rs"',children:'use yew::prelude::*;\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    id: String,\r\n    children: Html,\r\n}\r\n\r\n#[function_component]\r\nfn Container(props: &Props) -> Html {\r\n    html! {\r\n        <div id={props.id.clone()}>\r\n            { props.children.clone() }\r\n        </div>\r\n    }\r\n}\r\n\r\nhtml! {\r\n    <Container id="container">\r\n        <h4>{ "Hi" }</h4>\r\n        <div>{ "Hello" }</div>\r\n    </Container>\r\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"html!"})," macro allows you to pass a base expression with the ",(0,t.jsx)(n.code,{children:"..props"})," syntax instead of specifying each property individually,\r\nsimilar to Rust's ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/stable/reference/expressions/struct-expr.html#functional-update-syntax",children:"Functional Update Syntax"}),".\r\nThis base expression must occur after any individual props are passed.\r\nWhen passing a base props expression with a ",(0,t.jsx)(n.code,{children:"children"})," field, the children passed in the ",(0,t.jsx)(n.code,{children:"html!"})," macro overwrite the ones already present in the props."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    id: String,\r\n    children: Html,\r\n}\r\n\r\n#[function_component]\r\nfn Container(props: &Props) -> Html {\r\n    html! {\r\n        <div id={props.id.clone()}>\r\n            { props.children.clone() }\r\n        </div>\r\n    }\r\n}\r\n\r\nlet props = yew::props!(Props {\r\n    id: "container-2",\r\n    children: Html::default(),\r\n});\r\n\r\nhtml! {\r\n    <Container ..props>\r\n        // props.children will be overwritten with this\r\n        <span>{ "I am a child, as you can see" }</span>\r\n    </Container>\r\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/function_todomvc",children:"Function Todo MVC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/function_router",children:"Function Router"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(6540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);