"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[363],{5468:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(4848),o=r(8453);const s={title:"Children"},i=void 0,l={id:"concepts/components/children",title:"Children",description:"General usage",source:"@site/versioned_docs/version-0.18.0/concepts/components/children.mdx",sourceDirName:"concepts/components",slug:"/concepts/components/children",permalink:"/zh-Hant/docs/0.18.0/concepts/components/children",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/components/children.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Children"},sidebar:"docs",previous:{title:"Properties",permalink:"/zh-Hant/docs/0.18.0/concepts/components/properties"},next:{title:"Refs",permalink:"/zh-Hant/docs/0.18.0/concepts/components/refs"}},d={},c=[{value:"General usage",id:"general-usage",level:2},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Typed children",id:"typed-children",level:3},{value:"Enum typed children",id:"enum-typed-children",level:3},{value:"Optional typed child",id:"optional-typed-child",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"general-usage",children:"General usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Most of the time,"})," when allowing a component to have children, you don't care\r\nwhat type of children the component has. In such cases, the below example will\r\nsuffice."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Children, Component, Html, Properties};\r\n\r\n#[derive(Properties, Clone)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: Children,\r\n}\r\n\r\npub struct List {\r\n    props: ListProps,\r\n}\r\n\r\nimpl Component for List {\r\n    type Properties = ListProps;\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for self.props.children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,t.jsx)(n.h3,{id:"typed-children",children:"Typed children"}),"\n",(0,t.jsxs)(n.p,{children:["In cases where you want one type of component to be passed as children to your component,\r\nyou can use ",(0,t.jsx)(n.code,{children:"yew::html::ChildrenWithProps<T>"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, ChildrenWithProps, Component, Html, Properties};\r\n\r\n// ...\r\n\r\n#[derive(Properties, Clone)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenWithProps<Item>,\r\n}\r\n\r\npub struct List {\r\n    props: ListProps,\r\n}\r\n\r\nimpl Component for List {\r\n    type Properties = ListProps;\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for self.props.children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"enum-typed-children",children:"Enum typed children"}),"\n",(0,t.jsx)(n.p,{children:"Of course, sometimes you might need to restrict the children to a few different\r\ncomponents. In these cases, you have to get a little more hands-on with Yew."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/JelteF/derive_more",children:(0,t.jsx)(n.code,{children:"derive_more"})})," crate is used here\r\nfor better ergonomics. If you don't want to use it, you can manually implement\r\n",(0,t.jsx)(n.code,{children:"From"})," for each variant."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{\r\n    html, html::ChildrenRenderer, virtual_dom::VChild,\r\n    Component, Html, Properties\r\n};\r\n\r\n// `derive_more::From` implements `From<VChild<Primary>>` and\r\n// `From<VChild<Secondary>>` for `Item` automatically!\r\n#[derive(Clone, derive_more::From)]\r\npub enum Item {\r\n    Primary(VChild<Primary>),\r\n    Secondary(VChild<Secondary>),\r\n}\r\n\r\n// Now, we implement `Into<Html>` so that yew knows how to render `Item`.\r\nimpl Into<Html> for Item {\r\n    fn into(self) -> Html {\r\n        match self {\r\n            Self::Primary(child) => child.into(),\r\n            Self::Secondary(child) => child.into(),\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, Clone)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenRenderer<Item>,\r\n}\r\n\r\npub struct List {\r\n    props: ListProps,\r\n}\r\n\r\nimpl Component for List {\r\n    type Properties = ListProps;\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for self.props.children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"optional-typed-child",children:"Optional typed child"}),"\n",(0,t.jsx)(n.p,{children:"You can also have a single optional child component of a specific type too:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, virtual_dom::VChild, Component, Html, Properties};\r\n\r\n#[derive(Clone, Properties)]\r\npub struct PageProps {\r\n    #[prop_or_default]\r\n    pub sidebar: Option<VChild<PageSideBar>>,\r\n}\r\n\r\nstruct Page {\r\n    props: PageProps,\r\n}\r\n\r\nimpl Component for Page {\r\n    type Properties = PageProps;\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <div class="page">\r\n                { self.props.sidebar.clone().map(Html::from).unwrap_or_default() }\r\n                // ... page content\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\n// The page component can be called either with the sidebar or without:\r\n\r\n// Page without sidebar\r\nhtml! {\r\n    <Page />\r\n}\r\n\r\n// Page with sidebar\r\nhtml! {\r\n<Page sidebar=html_nested! {\r\n    <PageSideBar />\r\n    } />\r\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);