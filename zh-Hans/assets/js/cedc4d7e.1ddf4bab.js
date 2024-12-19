"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8744],{1351:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=r(4848),o=r(8453);const l={title:"Children"},s=void 0,i={id:"concepts/components/children",title:"Children",description:"General usage",source:"@site/versioned_docs/version-0.19.0/concepts/components/children.mdx",sourceDirName:"concepts/components",slug:"/concepts/components/children",permalink:"/demo/zh-Hans/docs/0.19.0/concepts/components/children",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/components/children.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Children"},sidebar:"docs",previous:{title:"Properties",permalink:"/demo/zh-Hans/docs/0.19.0/concepts/components/properties"},next:{title:"Refs",permalink:"/demo/zh-Hans/docs/0.19.0/concepts/components/refs"}},c={},d=[{value:"General usage",id:"general-usage",level:2},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Typed children",id:"typed-children",level:3},{value:"Enum typed children",id:"enum-typed-children",level:3},{value:"Optional typed child",id:"optional-typed-child",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"general-usage",children:"General usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Most of the time,"})," when allowing a component to have children, you don't care\r\nwhat type of children the component has. In such cases, the below example will\r\nsuffice."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Children, Component, Context, Html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: Children,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for ctx.props().children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,t.jsx)(n.h3,{id:"typed-children",children:"Typed children"}),"\n",(0,t.jsxs)(n.p,{children:["In cases where you want one type of component to be passed as children to your component,\r\nyou can use ",(0,t.jsx)(n.code,{children:"yew::html::ChildrenWithProps<T>"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, ChildrenWithProps, Component, Context, Html, Properties};\r\n\r\npub struct Item;\r\n\r\nimpl Component for Item {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "item" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenWithProps<Item>,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for ctx.props().children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"enum-typed-children",children:"Enum typed children"}),"\n",(0,t.jsx)(n.p,{children:"Of course, sometimes you might need to restrict the children to a few different\r\ncomponents. In these cases, you have to get a little more hands-on with Yew."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/JelteF/derive_more",children:(0,t.jsx)(n.code,{children:"derive_more"})})," crate is used here\r\nfor better ergonomics. If you don't want to use it, you can manually implement\r\n",(0,t.jsx)(n.code,{children:"From"})," for each variant."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{\r\n    html, html::ChildrenRenderer, virtual_dom::VChild, Component,\r\n    Context, Html, Properties,\r\n};\r\n\r\npub struct Primary;\r\n\r\nimpl Component for Primary {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "Primary" }\r\n        }\r\n    }\r\n}\r\n\r\npub struct Secondary;\r\n\r\nimpl Component for Secondary {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "Secondary" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Clone, derive_more::From, PartialEq)]\r\npub enum Item {\r\n    Primary(VChild<Primary>),\r\n    Secondary(VChild<Secondary>),\r\n}\r\n\r\n// Now, we implement `Into<Html>` so that yew knows how to render `Item`.\r\n#[allow(clippy::from_over_into)]\r\nimpl Into<Html> for Item {\r\n    fn into(self) -> Html {\r\n        match self {\r\n            Self::Primary(child) => child.into(),\r\n            Self::Secondary(child) => child.into(),\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenRenderer<Item>,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for ctx.props().children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"optional-typed-child",children:"Optional typed child"}),"\n",(0,t.jsx)(n.p,{children:"You can also have a single optional child component of a specific type too:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{\r\n    html, html_nested, virtual_dom::VChild, Component,\r\n    Context, Html, Properties\r\n};\r\n\r\npub struct PageSideBar;\r\n\r\nimpl Component for PageSideBar {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "sidebar" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct PageProps {\r\n    #[prop_or_default]\r\n    pub sidebar: Option<VChild<PageSideBar>>,\r\n}\r\n\r\nstruct Page;\r\n\r\nimpl Component for Page {\r\n    type Message = ();\r\n    type Properties = PageProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="page">\r\n                { ctx.props().sidebar.clone().map(Html::from).unwrap_or_default() }\r\n                // ... page content\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\n// The page component can be called either with the sidebar or without:\r\n\r\npub fn render_page(with_sidebar: bool) -> Html {\r\n    if with_sidebar {\r\n        // Page with sidebar\r\n        html! {\r\n            <Page sidebar={{html_nested! {\r\n                <PageSideBar />\r\n            }}} />\r\n        }\r\n    } else {\r\n        // Page without sidebar\r\n        html! {\r\n            <Page />\r\n        }\r\n    }\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);