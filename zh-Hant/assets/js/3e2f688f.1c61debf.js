"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8187],{8815:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var r=t(4848),o=t(8453);const c={title:"\u9ad8\u968e\u7d44\u4ef6"},s=void 0,d={id:"advanced-topics/struct-components/hoc",title:"\u9ad8\u968e\u7d44\u4ef6",description:"\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u7d50\u69cb\u7d44\u4ef6\u4e0d\u76f4\u63a5\u652f\u63f4\u67d0\u4e9b\u529f\u80fd\uff08\u4f8b\u5982 Suspense\uff09\uff0c\u6216\u4f7f\u7528\u67d0\u4e9b\u529f\u80fd\u9700\u8981\u5927\u91cf\u7684\u6a23\u677f\u7a0b\u5f0f\u78bc\uff08\u4f8b\u5982 Context\uff09\u3002",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/advanced-topics/struct-components/hoc.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/hoc",permalink:"/demo/zh-Hant/docs/next/advanced-topics/struct-components/hoc",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/hoc.mdx",tags:[],version:"current",frontMatter:{title:"\u9ad8\u968e\u7d44\u4ef6"},sidebar:"docs",previous:{title:"\u7c21\u4ecb",permalink:"/demo/zh-Hant/docs/next/advanced-topics/struct-components/introduction"},next:{title:"\u751f\u547d\u9031\u671f",permalink:"/demo/zh-Hant/docs/next/advanced-topics/struct-components/lifecycle"}},u={},i=[{value:"\u9ad8\u968e\u7d44\u4ef6\u5b9a\u7fa9",id:"\u9ad8\u968e\u7d44\u4ef6\u5b9a\u7fa9",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:3}];function p(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u7d50\u69cb\u7d44\u4ef6\u4e0d\u76f4\u63a5\u652f\u63f4\u67d0\u4e9b\u529f\u80fd\uff08\u4f8b\u5982 Suspense\uff09\uff0c\u6216\u4f7f\u7528\u67d0\u4e9b\u529f\u80fd\u9700\u8981\u5927\u91cf\u7684\u6a23\u677f\u7a0b\u5f0f\u78bc\uff08\u4f8b\u5982 Context\uff09\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u9019\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u5efa\u8b70\u5efa\u7acb\u9ad8\u968e\u7d44\u4ef6\u7684\u51fd\u6578\u7d44\u4ef6\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u9ad8\u968e\u7d44\u4ef6\u5b9a\u7fa9",children:"\u9ad8\u968e\u7d44\u4ef6\u5b9a\u7fa9"}),"\n",(0,r.jsx)(e.p,{children:"\u9ad8\u968e\u5143\u4ef6\u662f\u4e0d\u6dfb\u52a0\u4efb\u4f55\u65b0 HTML \u7684\u5143\u4ef6\uff0c\u53ea\u662f\u5305\u88dd\u5176\u4ed6\u5143\u4ef6\u4ee5\u63d0\u4f9b\u984d\u5916\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u7bc4\u4f8b",children:"\u7bc4\u4f8b"}),"\n",(0,r.jsx)(e.p,{children:"\u5c0d Context (\u4e0a\u4e0b\u6587) \u639b\u9264\u4e26\u5c07\u5176\u50b3\u905e\u7d66\u7d50\u69cb\u7d44\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[derive(Clone, Debug, PartialEq)]\r\nstruct Theme {\r\n    foreground: String,\r\n    background: String,\r\n}\r\n\r\n#[function_component]\r\npub fn App() -> Html {\r\n    let ctx = use_state(|| Theme {\r\n        foreground: "#000000".to_owned(),\r\n        background: "#eeeeee".to_owned(),\r\n    });\r\n\r\n    html! {\r\n        <ContextProvider<Theme> context={(*ctx).clone()}>\r\n            <ThemedButtonHOC />\r\n        </ContextProvider<Theme>>\r\n    }\r\n}\r\n\r\n// highlight-start\r\n#[function_component]\r\npub fn ThemedButtonHOC() -> Html {\r\n    let theme = use_context::<Theme>().expect("no ctx found");\r\n\r\n    html! {<ThemedButtonStructComponent {theme} />}\r\n}\r\n// highlight-end\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    pub theme: Theme,\r\n}\r\n\r\nstruct ThemedButtonStructComponent;\r\n\r\nimpl Component for ThemedButtonStructComponent {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        let theme = &ctx.props().theme;\r\n        html! {\r\n            <button style={format!(\r\n                    "background: {}; color: {};",\r\n                    theme.background,\r\n                    theme.foreground\r\n                )}\r\n            >\r\n                { "Click me!" }\r\n            </button>\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\n'})})]})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>d});var r=t(6540);const o={},c=r.createContext(o);function s(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);