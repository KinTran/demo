"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5990],{1119:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(4848),t=n(8453);const i={title:"\u30d7\u30ed\u30d1\u30c6\u30a3 (Props)",description:"\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u306e\u901a\u4fe1"},l=void 0,s={id:"advanced-topics/struct-components/properties",title:"\u30d7\u30ed\u30d1\u30c6\u30a3 (Props)",description:"\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u306e\u901a\u4fe1",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/advanced-topics/struct-components/properties.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/properties",permalink:"/demo/ja/docs/next/advanced-topics/struct-components/properties",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/properties.mdx",tags:[],version:"current",frontMatter:{title:"\u30d7\u30ed\u30d1\u30c6\u30a3 (Props)",description:"\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u306e\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570 (Callbacks)",permalink:"/demo/ja/docs/next/advanced-topics/struct-components/callbacks"},next:{title:"\u53c2\u7167 (Refs)",permalink:"/demo/ja/docs/next/advanced-topics/struct-components/refs"}},c={},d=[{value:"\u6d3e\u751f\u30de\u30af\u30ed",id:"\u6d3e\u751f\u30de\u30af\u30ed",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\u5c5e\u6027",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u5c5e\u6027",level:3},{value:"<code>#[prop_or_default]</code>",id:"prop_or_default",level:4},{value:"<code>#[prop_or(value)]</code>",id:"prop_orvalue",level:4},{value:"<code>#[prop_or_else(function)]</code>",id:"prop_or_elsefunction",level:4},{value:"<code>PartialEq</code>",id:"partialeq",level:2},{value:"Properties \u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9",id:"properties-\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"Props \u30de\u30af\u30ed",id:"props-\u30de\u30af\u30ed",level:2}];function p(e){const r={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["\u30d7\u30ed\u30d1\u30c6\u30a3 (Properties) \u306f\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u9593\u3067\u901a\u4fe1\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u6e21\u3055\u308c\u308b\u5185\u5bb9\u3092\u8a18\u8ff0\u3059\u308b\u305f\u3081\u306e\u95a2\u9023\u30d7\u30ed\u30d1\u30c6\u30a3\u578b\u304c\u3042\u308a\u307e\u3059\u3002\u7406\u8ad6\u7684\u306b\u306f\u3001\u3053\u308c\u306f ",(0,o.jsx)(r.code,{children:"Properties"})," \u30c8\u30ec\u30a4\u30c8\u3092\u5b9f\u88c5\u3057\u305f\u4efb\u610f\u306e\u578b\u3067\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u5b9f\u969b\u306b\u306f\u3001\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8868\u3059\u69cb\u9020\u4f53\u3067\u3042\u308b\u3079\u304d\u3067\u3059\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"\u6d3e\u751f\u30de\u30af\u30ed",children:"\u6d3e\u751f\u30de\u30af\u30ed"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Properties"})," \u30c8\u30ec\u30a4\u30c8\u3092\u81ea\u5206\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,o.jsx)(r.code,{children:"#[derive(Properties)]"})," \u3092\u4f7f\u7528\u3057\u3066\u5b9f\u88c5\u3092\u81ea\u52d5\u751f\u6210\u3067\u304d\u307e\u3059\u3002",(0,o.jsx)(r.code,{children:"Properties"})," \u3092\u6d3e\u751f\u3059\u308b\u578b\u306f ",(0,o.jsx)(r.code,{children:"PartialEq"})," \u3082\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.h3,{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u5c5e\u6027",children:"\u30d5\u30a3\u30fc\u30eb\u30c9\u5c5e\u6027"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Properties"})," \u3092\u6d3e\u751f\u3059\u308b\u969b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3059\u3079\u3066\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u5fc5\u9808\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u4ed6\u306e\u5024\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u521d\u671f\u5024\u3092\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsx)(r.p,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u306f Rustdoc \u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306f\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u6587\u5b57\u5217\u306b\u306f\u3001\u305d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u3001\u307e\u305f\u306f\u7279\u5225\u306a\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u304c\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u8a18\u8f09\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,o.jsx)(r.h4,{id:"prop_or_default",children:(0,o.jsx)(r.code,{children:"#[prop_or_default]"})}),"\n",(0,o.jsxs)(r.p,{children:["\u30d5\u30a3\u30fc\u30eb\u30c9\u578b\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002\u3053\u308c\u306f ",(0,o.jsx)(r.code,{children:"Default"})," \u30c8\u30ec\u30a4\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.h4,{id:"prop_orvalue",children:(0,o.jsx)(r.code,{children:"#[prop_or(value)]"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"value"})," \u3092\u4f7f\u7528\u3057\u3066\u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002",(0,o.jsx)(r.code,{children:"value"})," \u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u578b\u3092\u8fd4\u3059\u4efb\u610f\u306e\u5f0f\u3067\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30d6\u30fc\u30eb\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,o.jsx)(r.code,{children:"true"})," \u306b\u3059\u308b\u306b\u306f\u3001\u5c5e\u6027 ",(0,o.jsx)(r.code,{children:"#[prop_or(true)]"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.h4,{id:"prop_or_elsefunction",children:(0,o.jsx)(r.code,{children:"#[prop_or_else(function)]"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"function"})," \u3092\u547c\u3073\u51fa\u3057\u3066\u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002",(0,o.jsx)(r.code,{children:"function"})," \u306f ",(0,o.jsx)(r.code,{children:"FnMut() -> T"})," \u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u3001",(0,o.jsx)(r.code,{children:"T"})," \u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u578b\u3067\u3059\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"partialeq",children:(0,o.jsx)(r.code,{children:"PartialEq"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Properties"})," \u306f ",(0,o.jsx)(r.code,{children:"PartialEq"})," \u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Yew \u306f\u305d\u308c\u3089\u3092\u6bd4\u8f03\u3057\u3001\u5909\u66f4\u304c\u3042\u3063\u305f\u5834\u5408\u306b ",(0,o.jsx)(r.code,{children:"changed"})," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"properties-\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9",children:"Properties \u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9"}),"\n",(0,o.jsx)(r.p,{children:"\u5185\u90e8\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u305f\u30dd\u30a4\u30f3\u30bf\u306b\u57fa\u3065\u3044\u3066\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30c4\u30ea\u30fc\u306b\u6e21\u3055\u308c\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u306f\u30dd\u30a4\u30f3\u30bf\u306e\u307f\u304c\u6e21\u3055\u308c\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u5168\u4f53\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u3053\u3068\u306b\u3088\u308b\u9ad8\u4fa1\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3092\u56de\u907f\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"AttrValue"})," \u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u3001\u30af\u30ed\u30fc\u30f3\u304c\u5fc5\u8981\u306a String \u3084\u305d\u306e\u4ed6\u306e\u985e\u4f3c\u306e\u578b\u3092\u4f7f\u7528\u305b\u305a\u306b\u6e08\u3080\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u578b\u3067\u3059\u3002"]})}),"\n",(0,o.jsx)(r.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-rust",children:"use yew::Properties;\r\n/// virtual_dom \u304b\u3089 AttrValue \u3092\u30a4\u30f3\u30dd\u30fc\u30c8\r\nuse yew::virtual_dom::AttrValue;\r\n\r\n#[derive(Clone, PartialEq)]\r\npub enum LinkColor {\r\n    Blue,\r\n    Red,\r\n    Green,\r\n    Black,\r\n    Purple,\r\n}\r\n\r\nfn create_default_link_color() -> LinkColor {\r\n    LinkColor::Blue\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct LinkProps {\r\n    /// \u30ea\u30f3\u30af\u306b\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\u304c\u5fc5\u8981\u3067\u3059\r\n    href: AttrValue,\r\n    /// \u307e\u305f\u3001String \u3067\u306f\u306a\u304f AttrValue \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\r\n    text: AttrValue,\r\n    /// \u30ea\u30f3\u30af\u306e\u8272\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f `Blue`\r\n    #[prop_or_else(create_default_link_color)]\r\n    color: LinkColor,\r\n    /// \u5024\u304c None \u306e\u5834\u5408\u3001\u30d3\u30e5\u30fc\u95a2\u6570\u306f\u30b5\u30a4\u30ba\u3092\u6307\u5b9a\u3057\u307e\u305b\u3093\r\n    #[prop_or_default]\r\n    size: Option<u32>,\r\n    /// \u30d3\u30e5\u30fc\u95a2\u6570\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f true\r\n    #[prop_or(true)]\r\n    active: bool,\r\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"props-\u30de\u30af\u30ed",children:"Props \u30de\u30af\u30ed"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"yew::props!"})," \u30de\u30af\u30ed\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001",(0,o.jsx)(r.code,{children:"html!"})," \u30de\u30af\u30ed\u3068\u540c\u3058\u65b9\u6cd5\u3067\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u3053\u306e\u30de\u30af\u30ed\u306f\u69cb\u9020\u4f53\u306e\u5f0f\u3068\u540c\u3058\u69cb\u6587\u3092\u4f7f\u7528\u3057\u307e\u3059\u304c\u3001\u5c5e\u6027\u3084\u57fa\u672c\u5f0f (",(0,o.jsx)(r.code,{children:"Foo { ..base }"}),") \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u578b\u30d1\u30b9\u306f\u30d7\u30ed\u30d1\u30c6\u30a3 (",(0,o.jsx)(r.code,{children:"path::to::Props"}),") \u306b\u76f4\u63a5\u6307\u3059\u3053\u3068\u3082\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u95a2\u9023\u30d7\u30ed\u30d1\u30c6\u30a3 (",(0,o.jsx)(r.code,{children:"MyComp::Properties"}),") \u306b\u6307\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-rust",children:"use yew::{props, Properties, virtual_dom::AttrValue};\r\n\r\n#[derive(Clone, PartialEq)]\r\npub enum LinkColor {\r\n    Blue,\r\n    Red,\r\n    Green,\r\n    Black,\r\n    Purple,\r\n}\r\n\r\nfn create_default_link_color() -> LinkColor {\r\n    LinkColor::Blue\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct LinkProps {\r\n    /// \u30ea\u30f3\u30af\u306b\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\u304c\u5fc5\u8981\u3067\u3059\r\n    href: AttrValue,\r\n    /// \u307e\u305f\u3001String \u3067\u306f\u306a\u304f AttrValue \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\r\n    text: AttrValue,\r\n    /// \u30ea\u30f3\u30af\u306e\u8272\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f `Blue`\r\n    #[prop_or_else(create_default_link_color)]\r\n    color: LinkColor,\r\n    /// \u5024\u304c None \u306e\u5834\u5408\u3001\u30d3\u30e5\u30fc\u95a2\u6570\u306f\u30b5\u30a4\u30ba\u3092\u6307\u5b9a\u3057\u307e\u305b\u3093\r\n    #[prop_or_default]\r\n    size: Option<u32>,\r\n    /// \u30d3\u30e5\u30fc\u95a2\u6570\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f true\r\n    #[prop_or(true)]\r\n    active: bool,\r\n}\r\n\r\nimpl LinkProps {\r\n    /// \u3053\u306e\u95a2\u6570\u306f href \u3068 text \u3092 String \u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u307e\u3059\r\n    /// `AttrValue::from` \u3092\u4f7f\u7528\u3057\u3066\u305d\u308c\u3089\u3092 `AttrValue` \u306b\u5909\u63db\u3067\u304d\u307e\u3059\r\n    pub fn new_link_with_size(href: String, text: String, size: u32) -> Self {\r\n        // highlight-start\r\n        props! {LinkProps {\r\n            href: AttrValue::from(href),\r\n            text: AttrValue::from(text),\r\n            size,\r\n        }}\r\n        // highlight-end\r\n    }\r\n}\n"})})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>s});var o=n(6540);const t={},i=o.createContext(t);function l(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);