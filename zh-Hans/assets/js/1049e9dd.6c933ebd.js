"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[171],{8350:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=r(4848),i=r(8453);const o={title:"Children"},s=void 0,l={id:"advanced-topics/children",title:"Children",description:"Inspecting and manipulating Children can often result in surprising and hard-to-explain behaviours in your application.",source:"@site/versioned_docs/version-0.21/advanced-topics/children.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/children",permalink:"/zh-Hans/docs/advanced-topics/children",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/advanced-topics/children.mdx",tags:[],version:"0.21",frontMatter:{title:"Children"},sidebar:"docs",previous:{title:"Refs",permalink:"/zh-Hans/docs/advanced-topics/struct-components/refs"},next:{title:"\u6027\u80fd\u4f18\u5316\u4e0e\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-Hans/docs/advanced-topics/optimizations"}},d={},a=[{value:"General usage",id:"general-usage",level:2},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Typed children",id:"typed-children",level:3},{value:"Nested Children with Props",id:"nested-children-with-props",level:2},{value:"Enum typed children",id:"enum-typed-children",level:3},{value:"Optional typed child",id:"optional-typed-child",level:3},{value:"Further Reading",id:"further-reading",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["Inspecting and manipulating ",(0,t.jsx)(n.code,{children:"Children"})," can often result in surprising and hard-to-explain behaviours in your application.\r\nThis can lead to edge cases and often does not yield expected result.\r\nYou should consider other approaches if you are trying to manipulate ",(0,t.jsx)(n.code,{children:"Children"}),"."]}),(0,t.jsxs)(n.p,{children:["Yew supports using ",(0,t.jsx)(n.code,{children:"Html"})," as the type of the children prop.\r\nYou should use ",(0,t.jsx)(n.code,{children:"Html"})," as children if you do not need ",(0,t.jsx)(n.code,{children:"Children"})," or ",(0,t.jsx)(n.code,{children:"ChildrenRenderer"}),".\r\nIt doesn't have the drawbacks of ",(0,t.jsx)(n.code,{children:"Children"})," and has a lower performance overhead."]})]}),"\n",(0,t.jsx)(n.h2,{id:"general-usage",children:"General usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Most of the time,"})," when allowing a component to have children, you don't care\r\nwhat type of children the component has. In such cases, the below example will\r\nsuffice."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: Html,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                {ctx.props().children.clone()}\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,t.jsx)(n.h3,{id:"typed-children",children:"Typed children"}),"\n",(0,t.jsxs)(n.p,{children:["In cases where you want one type of component to be passed as children to your component,\r\nyou can use ",(0,t.jsx)(n.code,{children:"yew::html::ChildrenWithProps<T>"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, ChildrenWithProps, Component, Context, Html, Properties};\r\n\r\npub struct Item;\r\n\r\nimpl Component for Item {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "item" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenWithProps<Item>,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for ctx.props().children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"nested-children-with-props",children:"Nested Children with Props"}),"\n",(0,t.jsx)(n.p,{children:"Nested component properties can be accessed and mutated if the containing component types its children."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use std::rc::Rc;\r\nuse yew::prelude::*;\r\n\r\n#[derive(Clone, PartialEq, Properties)]\r\npub struct ListItemProps {\r\n    value: String,\r\n}\r\n\r\n#[function_component]\r\nfn ListItem(props: &ListItemProps) -> Html {\r\n    let ListItemProps { value } = props.clone();\r\n    html! {\r\n        <span>\r\n            {value}\r\n        </span>\r\n    }\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct Props {\r\n    pub children: ChildrenWithProps<ListItem>,\r\n}\r\n\r\n#[function_component]\r\nfn List(props: &Props) -> Html {\r\n    let modified_children = props.children.iter().map(|mut item| {\r\n            let mut props = Rc::make_mut(&mut item.props);\r\n            props.value = format!("item-{}", props.value);\r\n            item\r\n    });\r\n    html! { for modified_children }\r\n}\r\n\r\nhtml! {\r\n    <List>\r\n        <ListItem value="a" />\r\n        <ListItem value="b" />\r\n        <ListItem value="c" />\r\n    </List>\r\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"enum-typed-children",children:"Enum typed children"}),"\n",(0,t.jsx)(n.p,{children:"Of course, sometimes you might need to restrict the children to a few different\r\ncomponents. In these cases, you have to get a little more hands-on with Yew."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/JelteF/derive_more",children:(0,t.jsx)(n.code,{children:"derive_more"})})," crate is used here\r\nfor better ergonomics. If you don't want to use it, you can manually implement\r\n",(0,t.jsx)(n.code,{children:"From"})," for each variant."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{\r\n    html, html::ChildrenRenderer, virtual_dom::VChild, Component,\r\n    Context, Html, Properties,\r\n};\r\n\r\npub struct Primary;\r\n\r\nimpl Component for Primary {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "Primary" }\r\n        }\r\n    }\r\n}\r\n\r\npub struct Secondary;\r\n\r\nimpl Component for Secondary {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "Secondary" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Clone, derive_more::From, PartialEq)]\r\npub enum Item {\r\n    Primary(VChild<Primary>),\r\n    Secondary(VChild<Secondary>),\r\n}\r\n\r\n// Now, we implement `Into<Html>` so that yew knows how to render `Item`.\r\n#[allow(clippy::from_over_into)]\r\nimpl Into<Html> for Item {\r\n    fn into(self) -> Html {\r\n        match self {\r\n            Self::Primary(child) => child.into(),\r\n            Self::Secondary(child) => child.into(),\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenRenderer<Item>,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for ctx.props().children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"optional-typed-child",children:"Optional typed child"}),"\n",(0,t.jsx)(n.p,{children:"You can also have a single optional child component of a specific type too:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{\r\n    html, html_nested, virtual_dom::VChild, Component,\r\n    Context, Html, Properties\r\n};\r\n\r\npub struct PageSideBar;\r\n\r\nimpl Component for PageSideBar {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "sidebar" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct PageProps {\r\n    #[prop_or_default]\r\n    pub sidebar: Option<VChild<PageSideBar>>,\r\n}\r\n\r\nstruct Page;\r\n\r\nimpl Component for Page {\r\n    type Message = ();\r\n    type Properties = PageProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="page">\r\n                { ctx.props().sidebar.clone().map(Html::from).unwrap_or_default() }\r\n                // ... page content\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\n// The page component can be called either with the sidebar or without:\r\n\r\npub fn render_page(with_sidebar: bool) -> Html {\r\n    if with_sidebar {\r\n        // Page with sidebar\r\n        html! {\r\n            <Page sidebar={html_nested! {\r\n                <PageSideBar />\r\n            }} />\r\n        }\r\n    } else {\r\n        // Page without sidebar\r\n        html! {\r\n            <Page />\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For a real-world example of this pattern, check out the yew-router source code. For a more advanced example, check out the ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/nested_list",children:"nested-list example"})," in the main yew repository."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);