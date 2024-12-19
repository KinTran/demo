"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5339],{3301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=t(4848),o=t(8453);const c={title:"Higher Order Components"},s=void 0,i={id:"advanced-topics/struct-components/hoc",title:"Higher Order Components",description:"There are several cases where Struct components do not directly support a feature (ex. Suspense) or require a lot of boilerplate code to use the features (ex. Context).",source:"@site/versioned_docs/version-0.21/advanced-topics/struct-components/hoc.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/hoc",permalink:"/zh-Hant/docs/advanced-topics/struct-components/hoc",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/advanced-topics/struct-components/hoc.mdx",tags:[],version:"0.21",frontMatter:{title:"Higher Order Components"},sidebar:"docs",previous:{title:"Introduction",permalink:"/zh-Hant/docs/advanced-topics/struct-components/introduction"},next:{title:"\u5143\u4ef6",permalink:"/zh-Hant/docs/advanced-topics/struct-components/lifecycle"}},d={},a=[{value:"Higher Order Components Definition",id:"higher-order-components-definition",level:2},{value:"Example",id:"example",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"There are several cases where Struct components do not directly support a feature (ex. Suspense) or require a lot of boilerplate code to use the features (ex. Context)."}),"\n",(0,r.jsx)(n.p,{children:"In those cases, it is recommended to create function components that are higher-order components."}),"\n",(0,r.jsx)(n.h2,{id:"higher-order-components-definition",children:"Higher Order Components Definition"}),"\n",(0,r.jsx)(n.p,{children:"Higher Order Components are components that do not add any new HTML and only wrap some other components to provide extra functionality."}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Hook into Context and pass it down to a struct component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[derive(Clone, Debug, PartialEq)]\r\nstruct Theme {\r\n    foreground: String,\r\n    background: String,\r\n}\r\n\r\n#[function_component]\r\npub fn App() -> Html {\r\n    let ctx = use_state(|| Theme {\r\n        foreground: "#000000".to_owned(),\r\n        background: "#eeeeee".to_owned(),\r\n    });\r\n\r\n    html! {\r\n        <ContextProvider<Theme> context={(*ctx).clone()}>\r\n            <ThemedButtonHOC />\r\n        </ContextProvider<Theme>>\r\n    }\r\n}\r\n\r\n// highlight-start\r\n#[function_component]\r\npub fn ThemedButtonHOC() -> Html {\r\n    let theme = use_context::<Theme>().expect("no ctx found");\r\n\r\n    html! {<ThemedButtonStructComponent {theme} />}\r\n}\r\n// highlight-end\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    pub theme: Theme,\r\n}\r\n\r\nstruct ThemedButtonStructComponent;\r\n\r\nimpl Component for ThemedButtonStructComponent {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        let theme = &ctx.props().theme;\r\n        html! {\r\n            <button style={format!(\r\n                    "background: {}; color: {};",\r\n                    theme.background,\r\n                    theme.foreground\r\n                )}\r\n            >\r\n                { "Click me!" }\r\n            </button>\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);