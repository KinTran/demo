"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7966],{8859:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(4848),o=r(8453);const s={title:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 (Contexts)",sidebar_label:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",description:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u6df1\u304f\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u6e21\u3059"},c=void 0,l={id:"concepts/contexts",title:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 (Contexts)",description:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u6df1\u304f\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u6e21\u3059",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/concepts/contexts.mdx",sourceDirName:"concepts",slug:"/concepts/contexts",permalink:"/ja/docs/next/concepts/contexts",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/contexts.mdx",tags:[],version:"current",frontMatter:{title:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 (Contexts)",sidebar_label:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",description:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u6df1\u304f\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u6e21\u3059"},sidebar:"docs",previous:{title:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8 (Agents)",permalink:"/ja/docs/next/concepts/agents"},next:{title:"\u30eb\u30fc\u30bf\u30fc (Router)",permalink:"/ja/docs/next/concepts/router"}},i={},d=[{value:"Props \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u554f\u984c\uff1a&quot;Prop Drilling&quot;",id:"props-\u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u554f\u984cprop-drilling",level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 1\uff1a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u63d0\u4f9b",id:"\u30b9\u30c6\u30c3\u30d7-1\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u63d0\u4f9b",level:3},{value:"\u30b9\u30c6\u30c3\u30d7 2\uff1a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528",id:"\u30b9\u30c6\u30c3\u30d7-2\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528",level:3},{value:"\u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:4},{value:"\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:4},{value:"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa",id:"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa",level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u524d\u306e\u8003\u616e\u4e8b\u9805",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u524d\u306e\u8003\u616e\u4e8b\u9805",level:3},{value:"\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5024\u3092\u5909\u66f4\u3059\u308b",id:"\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5024\u3092\u5909\u66f4\u3059\u308b",level:2},{value:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269",id:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u901a\u5e38\u3001\u30c7\u30fc\u30bf\u306f props \u3092\u4ecb\u3057\u3066\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3055\u308c\u307e\u3059\u3002\r\n\u3057\u304b\u3057\u3001\u591a\u304f\u306e\u4e2d\u9593\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4ecb\u3057\u3066\u30c7\u30fc\u30bf\u3092\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3084\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u591a\u304f\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u540c\u3058\u60c5\u5831\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u3001props \u3092\u4ecb\u3057\u3066\u30c7\u30fc\u30bf\u3092\u6e21\u3059\u3053\u3068\u306f\u5197\u9577\u3067\u7169\u308f\u3057\u3044\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002\r\n\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3057\u3001\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30c7\u30fc\u30bf\u3092\u305d\u306e\u4e0b\u306e\u30c4\u30ea\u30fc\u5185\u306e\u4efb\u610f\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3059\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u3001props \u3092\u4ecb\u3057\u3066\u30c7\u30fc\u30bf\u3092\u6e21\u3059\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"props-\u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u554f\u984cprop-drilling",children:'Props \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u554f\u984c\uff1a"Prop Drilling"'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/ja/docs/next/concepts/function-components/properties",children:"props"}),' \u3092\u4ecb\u3057\u3066\u30c7\u30fc\u30bf\u3092\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u76f4\u63a5\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3059\u3053\u3068\u306f\u826f\u3044\u65b9\u6cd5\u3067\u3059\u3002\r\n\u3057\u304b\u3057\u3001\u6df1\u304f\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30c4\u30ea\u30fc\u3092\u4ecb\u3057\u3066\u30c7\u30fc\u30bf\u3092\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3084\u3001\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u540c\u3058\u30c7\u30fc\u30bf\u3092\u5171\u6709\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001props \u3092\u6e21\u3059\u3053\u3068\u306f\u7169\u96d1\u306b\u306a\u308a\u307e\u3059\u3002\r\n\u4e00\u822c\u7684\u306a\u30c7\u30fc\u30bf\u5171\u6709\u306e\u89e3\u6c7a\u7b56\u306f\u3001\u30c7\u30fc\u30bf\u3092\u5171\u901a\u306e\u7956\u5148\u306b\u6301\u3061\u4e0a\u3052\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u305d\u308c\u3092 props \u3068\u3057\u3066\u53d7\u3051\u53d6\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002\r\n\u3057\u304b\u3057\u3001\u3053\u308c\u306b\u3088\u308a props \u304c\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4ecb\u3057\u3066\u6e21\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\r\n\u3053\u306e\u72b6\u6cc1\u306f "Prop Drilling" \u3068\u547c\u3070\u308c\u307e\u3059\u3002']}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u4f8b\u3092\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u3053\u308c\u306f props \u3092\u4ecb\u3057\u3066\u30c6\u30fc\u30de\u3092\u6e21\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html, Properties, function_component};\r\n\r\n#[derive(Clone, PartialEq)]\r\npub struct Theme {\r\n    foreground: String,\r\n    background: String,\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct NavbarProps {\r\n    theme: Theme,\r\n}\r\n\r\n#[function_component]\r\nfn Navbar(props: &NavbarProps) -> Html {\r\n    html! {\r\n        <div>\r\n            <Title theme={props.theme.clone()}>\r\n                { "App title" }\r\n            </Title>\r\n            <NavButton theme={props.theme.clone()}>\r\n                { "Somewhere" }\r\n            </NavButton>\r\n        </div>\r\n    }\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct ThemeProps {\r\n    theme: Theme,\r\n    children: Html,\r\n}\r\n\r\n#[function_component]\r\nfn Title(_props: &ThemeProps) -> Html {\r\n    html! {\r\n        // impl\r\n    }\r\n}\r\n\r\n#[function_component]\r\nfn NavButton(_props: &ThemeProps) -> Html {\r\n    html! {\r\n        // impl\r\n    }\r\n}\r\n\r\n/// \u30a2\u30d7\u30ea\u306e\u30eb\u30fc\u30c8\r\n#[function_component]\r\nfn App() -> Html {\r\n    let theme = Theme {\r\n        foreground: "yellow".to_owned(),\r\n        background: "pink".to_owned(),\r\n    };\r\n\r\n    html! {\r\n        <Navbar {theme} />\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u79c1\u305f\u3061\u306f\u30c6\u30fc\u30de\u8a2d\u5b9a\u3092 ",(0,t.jsx)(n.code,{children:"Navbar"})," \u306b\u6e21\u3057\u3066\u3001\u305d\u308c\u304c ",(0,t.jsx)(n.code,{children:"Title"})," \u3068 ",(0,t.jsx)(n.code,{children:"NavButton"})," \u306b\u5230\u9054\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002\r\n\u3082\u3057 ",(0,t.jsx)(n.code,{children:"Title"})," \u3068 ",(0,t.jsx)(n.code,{children:"NavButton"})," \u306e\u3088\u3046\u306a\u30c6\u30fc\u30de\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3001prop \u3092\u4ecb\u3055\u305a\u306b\u76f4\u63a5\u30c6\u30fc\u30de\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3068\u3057\u305f\u3089\u3001\u3082\u3063\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002\r\n\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3057\u3001\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30c7\u30fc\u30bf\uff08\u3053\u306e\u5834\u5408\u306f\u30c6\u30fc\u30de\uff09\u3092\u305d\u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3059\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528"}),"\n",(0,t.jsx)(n.h3,{id:"\u30b9\u30c6\u30c3\u30d7-1\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u63d0\u4f9b",children:"\u30b9\u30c6\u30c3\u30d7 1\uff1a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u63d0\u4f9b"}),"\n",(0,t.jsxs)(n.p,{children:["\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u6d88\u8cbb\u3059\u308b\u306b\u306f\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,t.jsx)(n.code,{children:"ContextProvider<T>"})," \u306f\u3001",(0,t.jsx)(n.code,{children:"T"})," \u304c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u69cb\u9020\u4f53\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3067\u3059\u3002\r\n",(0,t.jsx)(n.code,{children:"T"})," \u306f ",(0,t.jsx)(n.code,{children:"Clone"})," \u3068 ",(0,t.jsx)(n.code,{children:"PartialEq"})," \u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"ContextProvider"})," \u306f\u3001\u305d\u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u6301\u3064\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002\r\n\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304c\u5909\u66f4\u3055\u308c\u308b\u3068\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002\u30c7\u30fc\u30bf\u3092\u6e21\u3059\u305f\u3081\u306e\u69cb\u9020\u4f53\u304c\u5b9a\u7fa9\u3055\u308c\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"ContextProvider"})," \u306f\u6b21\u306e\u3088\u3046\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n/// \u30a2\u30d7\u30ea\u306e\u30c6\u30fc\u30de\r\n#[derive(Clone, Debug, PartialEq)]\r\nstruct Theme {\r\n    foreground: String,\r\n    background: String,\r\n}\r\n\r\n/// \u30e1\u30a4\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\r\n#[function_component]\r\npub fn App() -> Html {\r\n    let ctx = use_state(|| Theme {\r\n        foreground: "#000000".to_owned(),\r\n        background: "#eeeeee".to_owned(),\r\n    });\r\n\r\n    html! {\r\n        // `ctx` \u306f `Rc<UseStateHandle<Theme>>` \u578b\u3067\u3042\u308a\u3001`Theme` \u304c\u5fc5\u8981\u3067\u3059\r\n        // \u3057\u305f\u304c\u3063\u3066\u3001\u30c7\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3057\u307e\u3059\u3002\r\n        <ContextProvider<Theme> context={(*ctx).clone()}>\r\n            // \u3053\u3053\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u305d\u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002\r\n            <Toolbar />\r\n        </ContextProvider<Theme>>\r\n    }\r\n}\r\n\r\n/// \u30c4\u30fc\u30eb\u30d0\u30fc\r\n/// \u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\r\n#[function_component]\r\npub fn Toolbar() -> Html {\r\n    html! {\r\n        <div>\r\n            <ThemedButton />\r\n        </div>\r\n    }\r\n}\r\n\r\n/// `Toolbar` \u5185\u306b\u914d\u7f6e\u3055\u308c\u305f\u30dc\u30bf\u30f3\r\n/// \u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30c4\u30ea\u30fc\u5185\u306e `ThemeContextProvider` \u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3042\u308b\u305f\u3081\u3001\r\n/// \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\r\n#[function_component]\r\npub fn ThemedButton() -> Html {\r\n    let theme = use_context::<Theme>().expect("no ctx found");\r\n\r\n    html! {\r\n        <button style={format!("background: {}; color: {};", theme.background, theme.foreground)}>\r\n            { "Click me!" }\r\n        </button>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u30b9\u30c6\u30c3\u30d7-2\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528",children:"\u30b9\u30c6\u30c3\u30d7 2\uff1a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528"}),"\n",(0,t.jsx)(n.h4,{id:"\u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"\u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use_context"})," \u30d5\u30c3\u30af\u306f\u3001\u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\r\n\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_context.html",children:"use_context \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,t.jsx)(n.p,{children:"\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u30012\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/ja/docs/next/advanced-topics/struct-components/hoc",children:"\u9ad8\u968e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\uff1a\u9ad8\u968e\u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3001\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u3092\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185\u3067\u76f4\u63a5\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/contexts/src/struct_component_subscriber.rs",children:"\u69cb\u9020\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30b7\u30e5\u30fc\u30de\u30fc\u3068\u3057\u3066\u306e\u4f8b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa",children:"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u3001\u30c4\u30ea\u30fc\u306e\u7570\u306a\u308b\u90e8\u5206\u306e\u30ea\u30e2\u30fc\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304c\u5f79\u7acb\u3061\u307e\u3059\u3002\r\n\u4ee5\u4e0b\u306f\u3044\u304f\u3064\u304b\u306e\u4f8b\u3067\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30c6\u30fc\u30de"}),"\uff1a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c8\u30c3\u30d7\u306b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u914d\u7f6e\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30fc\u30de\u3092\u4fdd\u6301\u3057\u3001\u8996\u899a\u7684\u306a\u5916\u89b3\u3092\u8abf\u6574\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\uff08\u4e0a\u8a18\u306e\u4f8b\u3092\u53c2\u7167\uff09\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u73fe\u5728\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8"}),"\uff1a\u591a\u304f\u306e\u5834\u5408\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u73fe\u5728\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u3092\u77e5\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u306e\u30e6\u30fc\u30b6\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u524d\u306e\u8003\u616e\u4e8b\u9805",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u524d\u306e\u8003\u616e\u4e8b\u9805"}),"\n",(0,t.jsx)(n.p,{children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u975e\u5e38\u306b\u4f7f\u3044\u3084\u3059\u3044\u3067\u3059\u304c\u3001\u305d\u308c\u304c\u8aa4\u7528/\u904e\u5ea6\u306b\u4f7f\u7528\u3055\u308c\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002\r\n\u8907\u6570\u306e\u30ec\u30d9\u30eb\u6df1\u3044\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b props \u3092\u5171\u6709\u3059\u308b\u305f\u3081\u306b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3067\u304d\u308b\u304b\u3089\u3068\u3044\u3063\u3066\u3001\u5fc5\u305a\u3057\u3082\u305d\u3046\u3059\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u62bd\u51fa\u3057\u3066\u3001\u305d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5225\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u3057\u3066\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\r\n\u4f8b\u3048\u3070\u3001",(0,t.jsx)(n.code,{children:"Layout"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c ",(0,t.jsx)(n.code,{children:"articles"})," \u3092 prop \u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u3001\u305d\u308c\u3092 ",(0,t.jsx)(n.code,{children:"ArticleList"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3059\u5834\u5408\u3001\r\n",(0,t.jsx)(n.code,{children:"Layout"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3057\u3066\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092 props \u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u3001",(0,t.jsx)(n.code,{children:"<Layout> <ArticleList {articles} /> </Layout>"})," \u3068\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u3059\u308b\u3079\u304d\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5024\u3092\u5909\u66f4\u3059\u308b",children:"\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5024\u3092\u5909\u66f4\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["Rust \u306e\u6240\u6709\u6a29\u30eb\u30fc\u30eb\u306b\u3088\u308a\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u306f\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u547c\u3073\u51fa\u305b\u308b ",(0,t.jsx)(n.code,{children:"&mut self"})," \u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\r\n\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5024\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u30ea\u30c7\u30e5\u30fc\u30b5\u30fc\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001",(0,t.jsx)(n.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_reducer.html",children:(0,t.jsx)(n.code,{children:"use_reducer"})})," \u30d5\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/contexts",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f8b"})," \u306f\u3001\u53ef\u5909\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f7f\u7528\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269",children:"\u3055\u3089\u306a\u308b\u8aad\u307f\u7269"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/contexts",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4f8b"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(6540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);