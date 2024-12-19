"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3218],{9436:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=e(4848),i=e(8453);const l={title:"\u5b50\u7ec4\u4ef6"},s=void 0,o={id:"advanced-topics/children",title:"\u5b50\u7ec4\u4ef6",description:"\u68c0\u67e5\u548c\u64cd\u4f5c Children \u5f80\u5f80\u4f1a\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4ee4\u4eba\u60ca\u8bb6\u4e14\u96be\u4ee5\u89e3\u91ca\u7684\u884c\u4e3a\u3002\u8fd9\u53ef\u80fd\u5bfc\u81f4\u8fb9\u7f18\u60c5\u51b5\uff0c\u5e76\u4e14\u901a\u5e38\u4e0d\u4f1a\u4ea7\u751f\u9884\u671f\u7684\u7ed3\u679c\u3002\u5982\u679c\u60a8\u5c1d\u8bd5\u64cd\u4f5c Children\uff0c\u5219\u5e94\u8003\u8651\u5176\u4ed6\u65b9\u6cd5\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-topics/children.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/children",permalink:"/zh-Hans/docs/next/advanced-topics/children",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/children.mdx",tags:[],version:"current",frontMatter:{title:"\u5b50\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u5f15\u7528 (Refs)",permalink:"/zh-Hans/docs/next/advanced-topics/struct-components/refs"},next:{title:"Optimizations",permalink:"/zh-Hans/docs/next/advanced-topics/optimizations"}},c={},d=[{value:"\u901a\u7528\u7528\u6cd5",id:"\u901a\u7528\u7528\u6cd5",level:2},{value:"\u9ad8\u7ea7\u7528\u6cd5",id:"\u9ad8\u7ea7\u7528\u6cd5",level:2},{value:"\u7c7b\u578b\u5316\u5b50\u7ec4\u4ef6",id:"\u7c7b\u578b\u5316\u5b50\u7ec4\u4ef6",level:3},{value:"\u5e26\u6709\u5c5e\u6027\u7684\u5d4c\u5957\u5b50\u7ec4\u4ef6",id:"\u5e26\u6709\u5c5e\u6027\u7684\u5d4c\u5957\u5b50\u7ec4\u4ef6",level:2},{value:"\u679a\u4e3e\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6",id:"\u679a\u4e3e\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6",level:3},{value:"\u53ef\u9009\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6",id:"\u53ef\u9009\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6",level:3},{value:"\u8fdb\u4e00\u6b65\u9605\u8bfb",id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",level:2}];function p(r){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["\u68c0\u67e5\u548c\u64cd\u4f5c ",(0,t.jsx)(n.code,{children:"Children"})," \u5f80\u5f80\u4f1a\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4ee4\u4eba\u60ca\u8bb6\u4e14\u96be\u4ee5\u89e3\u91ca\u7684\u884c\u4e3a\u3002\u8fd9\u53ef\u80fd\u5bfc\u81f4\u8fb9\u7f18\u60c5\u51b5\uff0c\u5e76\u4e14\u901a\u5e38\u4e0d\u4f1a\u4ea7\u751f\u9884\u671f\u7684\u7ed3\u679c\u3002\u5982\u679c\u60a8\u5c1d\u8bd5\u64cd\u4f5c ",(0,t.jsx)(n.code,{children:"Children"}),"\uff0c\u5219\u5e94\u8003\u8651\u5176\u4ed6\u65b9\u6cd5\u3002"]}),(0,t.jsxs)(n.p,{children:["Yew \u652f\u6301\u5c06 ",(0,t.jsx)(n.code,{children:"Html"})," \u7528\u4f5c\u5b50\u7ec4\u4ef6\u5c5e\u6027\u7684\u7c7b\u578b\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981 ",(0,t.jsx)(n.code,{children:"Children"})," \u6216 ",(0,t.jsx)(n.code,{children:"ChildrenRenderer"}),"\uff0c\u5219\u5e94\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Html"})," \u4f5c\u4e3a\u5b50\u7ec4\u4ef6\u3002\u5b83\u6ca1\u6709 ",(0,t.jsx)(n.code,{children:"Children"})," \u7684\u7f3a\u70b9\uff0c\u5e76\u4e14\u6027\u80fd\u5f00\u9500\u8f83\u4f4e\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u901a\u7528\u7528\u6cd5",children:"\u901a\u7528\u7528\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"*\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c*\u5f53\u5141\u8bb8\u7ec4\u4ef6\u5177\u6709\u5b50\u7ec4\u4ef6\u65f6\uff0c\u60a8\u4e0d\u5173\u5fc3\u7ec4\u4ef6\u5177\u6709\u7684\u5b50\u7ec4\u4ef6\u7684\u7c7b\u578b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u5c31\u8db3\u591f\u4e86\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: Html,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                {ctx.props().children.clone()}\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u9ad8\u7ea7\u7528\u6cd5",children:"\u9ad8\u7ea7\u7528\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u7c7b\u578b\u5316\u5b50\u7ec4\u4ef6",children:"\u7c7b\u578b\u5316\u5b50\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u60a8\u5e0c\u671b\u5c06\u4e00\u79cd\u7c7b\u578b\u7684\u7ec4\u4ef6\u4f5c\u4e3a\u5b50\u7ec4\u4ef6\u4f20\u9012\u7ed9\u60a8\u7684\u7ec4\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yew::html::ChildrenWithProps<T>"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, ChildrenWithProps, Component, Context, Html, Properties};\r\n\r\npub struct Item;\r\n\r\nimpl Component for Item {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "item" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenWithProps<Item>,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for ctx.props().children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5e26\u6709\u5c5e\u6027\u7684\u5d4c\u5957\u5b50\u7ec4\u4ef6",children:"\u5e26\u6709\u5c5e\u6027\u7684\u5d4c\u5957\u5b50\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5305\u542b\u7ec4\u4ef6\u5bf9\u5176\u5b50\u7ec4\u4ef6\u8fdb\u884c\u4e86\u7c7b\u578b\u5316\uff0c\u5219\u53ef\u4ee5\u8bbf\u95ee\u548c\u66f4\u6539\u5d4c\u5957\u7ec4\u4ef6\u7684\u5c5e\u6027\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use std::rc::Rc;\r\nuse yew::prelude::*;\r\n\r\n#[derive(Clone, PartialEq, Properties)]\r\npub struct ListItemProps {\r\n    value: String,\r\n}\r\n\r\n#[function_component]\r\nfn ListItem(props: &ListItemProps) -> Html {\r\n    let ListItemProps { value } = props.clone();\r\n    html! {\r\n        <span>\r\n            {value}\r\n        </span>\r\n    }\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct Props {\r\n    pub children: ChildrenWithProps<ListItem>,\r\n}\r\n\r\n#[function_component]\r\nfn List(props: &Props) -> Html {\r\n    let modified_children = props.children.iter().map(|mut item| {\r\n            let mut props = Rc::make_mut(&mut item.props);\r\n            props.value = format!("item-{}", props.value);\r\n            item\r\n    });\r\n    html! { for modified_children }\r\n}\r\n\r\nhtml! {\r\n    <List>\r\n        <ListItem value="a" />\r\n        <ListItem value="b" />\r\n        <ListItem value="c" />\r\n    </List>\r\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u679a\u4e3e\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6",children:"\u679a\u4e3e\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u6709\u65f6\u60a8\u53ef\u80fd\u9700\u8981\u5c06\u5b50\u7ec4\u4ef6\u9650\u5236\u4e3a\u51e0\u79cd\u4e0d\u540c\u7684\u7ec4\u4ef6\u3002\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u5fc5\u987b\u66f4\u6df1\u5165\u5730\u4e86\u89e3 Yew\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://github.com/JelteF/derive_more",children:(0,t.jsx)(n.code,{children:"derive_more"})})," \u6765\u63d0\u4f9b\u66f4\u597d\u7684\u4eba\u673a\u5de5\u7a0b\u5b66\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u4f7f\u7528\u5b83\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u53d8\u4f53\u624b\u52a8\u5b9e\u73b0 ",(0,t.jsx)(n.code,{children:"From"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{\r\n    html, html::ChildrenRenderer, virtual_dom::VChild, Component,\r\n    Context, Html, Properties,\r\n};\r\n\r\npub struct Primary;\r\n\r\nimpl Component for Primary {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "Primary" }\r\n        }\r\n    }\r\n}\r\n\r\npub struct Secondary;\r\n\r\nimpl Component for Secondary {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "Secondary" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Clone, derive_more::From, PartialEq)]\r\npub enum Item {\r\n    Primary(VChild<Primary>),\r\n    Secondary(VChild<Secondary>),\r\n}\r\n\r\n// \u73b0\u5728\uff0c\u6211\u4eec\u5b9e\u73b0 `Into<Html>`\uff0c\u4ee5\u4fbf yew \u77e5\u9053\u5982\u4f55\u6e32\u67d3 `Item`\u3002\r\n#[allow(clippy::from_over_into)]\r\nimpl Into<Html> for Item {\r\n    fn into(self) -> Html {\r\n        match self {\r\n            Self::Primary(child) => child.into(),\r\n            Self::Secondary(child) => child.into(),\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ListProps {\r\n    #[prop_or_default]\r\n    pub children: ChildrenRenderer<Item>,\r\n}\r\n\r\npub struct List;\r\n\r\nimpl Component for List {\r\n    type Message = ();\r\n    type Properties = ListProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="list">\r\n                { for ctx.props().children.iter() }\r\n            </div>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u53ef\u9009\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6",children:"\u53ef\u9009\u7c7b\u578b\u7684\u5b50\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u8fd8\u53ef\u4ee5\u5177\u6709\u7279\u5b9a\u7c7b\u578b\u7684\u5355\u4e2a\u53ef\u9009\u5b50\u7ec4\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{\r\n    html, html_nested, virtual_dom::VChild, Component,\r\n    Context, Html, Properties\r\n};\r\n\r\npub struct PageSideBar;\r\n\r\nimpl Component for PageSideBar {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            { "sidebar" }\r\n        }\r\n    }\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct PageProps {\r\n    #[prop_or_default]\r\n    pub sidebar: Option<VChild<PageSideBar>>,\r\n}\r\n\r\nstruct Page;\r\n\r\nimpl Component for Page {\r\n    type Message = ();\r\n    type Properties = PageProps;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <div class="page">\r\n                { ctx.props().sidebar.clone().map(Html::from).unwrap_or_default() }\r\n                // ... \u9875\u9762\u5185\u5bb9\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\n// \u9875\u9762\u7ec4\u4ef6\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u9644\u5e26\u4fa7\u8fb9\u680f\uff1a\r\n\r\npub fn render_page(with_sidebar: bool) -> Html {\r\n    if with_sidebar {\r\n        // \u9644\u5e26\u4fa7\u8fb9\u680f\u7684\u9875\u9762\r\n        html! {\r\n            <Page sidebar={html_nested! {\r\n                <PageSideBar />\r\n            }} />\r\n        }\r\n    } else {\r\n        // \u4e0d\u9644\u5e26\u4fa7\u8fb9\u680f\u7684\u9875\u9762\r\n        html! {\r\n            <Page />\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",children:"\u8fdb\u4e00\u6b65\u9605\u8bfb"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6709\u5173\u6b64\u6a21\u5f0f\u7684\u771f\u5b9e\u793a\u4f8b\uff0c\u8bf7\u67e5\u9605 yew-router \u7684\u6e90\u4ee3\u7801\u3002\u6709\u5173\u66f4\u9ad8\u7ea7\u7684\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b yew \u5b58\u50a8\u5e93\u4e2d\u7684",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/nested_list",children:"\u76f8\u5173\u793a\u4f8b\u6e05\u5355"})]}),"\n"]})]})}function a(r={}){const{wrapper:n}={...(0,i.R)(),...r.components};return n?(0,t.jsx)(n,{...r,children:(0,t.jsx)(p,{...r})}):p(r)}},8453:(r,n,e)=>{e.d(n,{R:()=>s,x:()=>o});var t=e(6540);const i={},l=t.createContext(i);function s(r){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function o(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:s(r.components),t.createElement(l.Provider,{value:n},r.children)}}}]);