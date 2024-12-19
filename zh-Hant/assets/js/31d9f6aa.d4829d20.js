"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7012],{6912:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(4848),o=r(8453);const s={title:"\u4e0a\u4e0b\u6587 (Contexts)",sidebar_label:"Contexts",description:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u50b3\u905e\u6df1\u5ea6\u5d4c\u5957\u8cc7\u6599"},c=void 0,l={id:"concepts/contexts",title:"\u4e0a\u4e0b\u6587 (Contexts)",description:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u50b3\u905e\u6df1\u5ea6\u5d4c\u5957\u8cc7\u6599",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/concepts/contexts.mdx",sourceDirName:"concepts",slug:"/concepts/contexts",permalink:"/demo/zh-Hant/docs/next/concepts/contexts",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/contexts.mdx",tags:[],version:"current",frontMatter:{title:"\u4e0a\u4e0b\u6587 (Contexts)",sidebar_label:"Contexts",description:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u50b3\u905e\u6df1\u5ea6\u5d4c\u5957\u8cc7\u6599"},sidebar:"docs",previous:{title:"\u4ee3\u7406 (Agents)",permalink:"/demo/zh-Hant/docs/next/concepts/agents"},next:{title:"\u8def\u7531 (Router)",permalink:"/demo/zh-Hant/docs/next/concepts/router"}},i={},d=[{value:"\u4f7f\u7528 props \u7684\u554f\u984c\uff1a&quot;Prop Drilling&quot;",id:"\u4f7f\u7528-props-\u7684\u554f\u984cprop-drilling",level:2},{value:"\u4f7f\u7528\u4e0a\u4e0b\u6587",id:"\u4f7f\u7528\u4e0a\u4e0b\u6587",level:2},{value:"\u6b65\u9a5f 1\uff1a\u63d0\u4f9b\u4e0a\u4e0b\u6587",id:"\u6b65\u9a5f-1\u63d0\u4f9b\u4e0a\u4e0b\u6587",level:3},{value:"\u6b65\u9a5f 2\uff1a\u4f7f\u7528\u4e0a\u4e0b\u6587",id:"\u6b65\u9a5f-2\u4f7f\u7528\u4e0a\u4e0b\u6587",level:3},{value:"\u51fd\u6578\u5143\u4ef6",id:"\u51fd\u6578\u5143\u4ef6",level:4},{value:"\u7d50\u69cb\u9ad4\u7d44\u4ef6",id:"\u7d50\u69cb\u9ad4\u7d44\u4ef6",level:4},{value:"\u4f7f\u7528\u5834\u666f",id:"\u4f7f\u7528\u5834\u666f",level:2},{value:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u524d\u7684\u8003\u616e",id:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u524d\u7684\u8003\u616e",level:3},{value:"\u4fee\u6539\u5b50\u5143\u4ef6\u7684\u4e0a\u4e0b\u6587\u503c",id:"\u4fee\u6539\u5b50\u5143\u4ef6\u7684\u4e0a\u4e0b\u6587\u503c",level:2},{value:"\u9032\u4e00\u6b65\u95b1\u8b80",id:"\u9032\u4e00\u6b65\u95b1\u8b80",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u8cc7\u6599\u662f\u900f\u904e props \u5f9e\u7236\u5143\u4ef6\u50b3\u905e\u5230\u5b50\u5143\u4ef6\u3002\r\n\u4f46\u662f\uff0c\u5982\u679c\u5fc5\u9808\u900f\u904e\u4e2d\u9593\u7684\u8a31\u591a\u5143\u4ef6\u50b3\u905e\u5b83\u5011\uff0c\u6216\u8005\u5982\u679c\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u8a31\u591a\u5143\u4ef6\u9700\u8981\u76f8\u540c\u7684\u8a0a\u606f\uff0c\u50b3\u905e props \u53ef\u80fd\u6703\u8b8a\u5f97\u5197\u9577\u548c\u7169\u4eba\u3002\r\n\u4e0a\u4e0b\u6587\u89e3\u6c7a\u4e86\u9019\u500b\u554f\u984c\uff0c\u5141\u8a31\u7236\u5143\u4ef6\u4f7f\u8cc7\u6599\u53ef\u7528\u65bc\u5176\u4e0b\u65b9\u6a39\u4e2d\u7684\u4efb\u4f55\u5143\u4ef6\uff0c\u7121\u8ad6\u591a\u6df1\uff0c\u800c\u7121\u9700\u900f\u904e props \u50b3\u905e\u5b83\u5011\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528-props-\u7684\u554f\u984cprop-drilling",children:'\u4f7f\u7528 props \u7684\u554f\u984c\uff1a"Prop Drilling"'}),"\n",(0,t.jsxs)(n.p,{children:["\u50b3\u905e ",(0,t.jsx)(n.a,{href:"/demo/zh-Hant/docs/next/concepts/function-components/properties",children:"props"}),' \u662f\u5f9e\u7236\u5143\u4ef6\u76f4\u63a5\u50b3\u905e\u8cc7\u6599\u5230\u5b50\u5143\u4ef6\u7684\u597d\u65b9\u6cd5\u3002\r\n\u4f46\u662f\uff0c\u7576\u9700\u8981\u900f\u904e\u6df1\u5c64\u5d4c\u5957\u7684\u7d44\u4ef6\u6a39\u50b3\u905e\u8cc7\u6599\u6216\u591a\u500b\u7d44\u4ef6\u5171\u4eab\u76f8\u540c\u7684\u8cc7\u6599\u6642\uff0c\u50b3\u905e props \u8b8a\u5f97\u7e41\u7463\u3002\r\n\u4e00\u7a2e\u5e38\u898b\u7684\u8cc7\u6599\u5171\u4eab\u89e3\u6c7a\u65b9\u6848\u662f\u5c07\u8cc7\u6599\u63d0\u5347\u5230\u4e00\u500b\u5171\u540c\u7684\u7956\u5148\uff0c\u4e26\u4f7f\u5b50\u5143\u4ef6\u5c07\u5176\u4f5c\u70ba props \u63a5\u6536\u3002\r\n\u7136\u800c\uff0c\u9019\u53ef\u80fd\u5c0e\u81f4 props \u5fc5\u9808\u901a\u904e\u591a\u500b\u5143\u4ef6\u624d\u80fd\u5230\u9054\u9700\u8981\u5b83\u7684\u5143\u4ef6\u3002\r\n\u9019\u7a2e\u60c5\u6cc1\u7a31\u70ba "Prop Drilling"\u3002']}),"\n",(0,t.jsx)(n.p,{children:"\u8003\u616e\u4ee5\u4e0b\u7bc4\u4f8b\uff0c\u5b83\u900f\u904e props \u50b3\u905e\u4e3b\u984c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html, Properties, function_component};\r\n\r\n#[derive(Clone, PartialEq)]\r\npub struct Theme {\r\n    foreground: String,\r\n    background: String,\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct NavbarProps {\r\n    theme: Theme,\r\n}\r\n\r\n#[function_component]\r\nfn Navbar(props: &NavbarProps) -> Html {\r\n    html! {\r\n        <div>\r\n            <Title theme={props.theme.clone()}>\r\n                { "App title" }\r\n            </Title>\r\n            <NavButton theme={props.theme.clone()}>\r\n                { "Somewhere" }\r\n            </NavButton>\r\n        </div>\r\n    }\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct ThemeProps {\r\n    theme: Theme,\r\n    children: Html,\r\n}\r\n\r\n#[function_component]\r\nfn Title(_props: &ThemeProps) -> Html {\r\n    html! {\r\n        // impl\r\n    }\r\n}\r\n\r\n#[function_component]\r\nfn NavButton(_props: &ThemeProps) -> Html {\r\n    html! {\r\n        // impl\r\n    }\r\n}\r\n\r\n/// App \u6839\u7bc0\u9ede\r\n#[function_component]\r\nfn App() -> Html {\r\n    let theme = Theme {\r\n        foreground: "yellow".to_owned(),\r\n        background: "pink".to_owned(),\r\n    };\r\n\r\n    html! {\r\n        <Navbar {theme} />\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u5011\u900f\u904e ",(0,t.jsx)(n.code,{children:"Navbar"})," \u50b3\u905e\u4e3b\u984c\u8a2d\u5b9a\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u5230\u9054 ",(0,t.jsx)(n.code,{children:"Title"})," \u548c ",(0,t.jsx)(n.code,{children:"NavButton"}),"\u3002\r\n\u5982\u679c ",(0,t.jsx)(n.code,{children:"Title"})," \u548c ",(0,t.jsx)(n.code,{children:"NavButton"})," \u9019\u4e9b\u9700\u8981\u5b58\u53d6\u4e3b\u984c\u7684\u5143\u4ef6\u53ef\u4ee5\u76f4\u63a5\u5b58\u53d6\u4e3b\u984c\u800c\u4e0d\u5fc5\u900f\u904e prop \u50b3\u905e\uff0c\u90a3\u5c31\u66f4\u597d\u4e86\u3002\r\n\u4e0a\u4e0b\u6587\u89e3\u6c7a\u4e86\u9019\u500b\u554f\u984c\uff0c\u5141\u8a31\u7236\u5143\u4ef6\u5c07\u8cc7\u6599\uff08\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\u662f\u4e3b\u984c\uff09\u50b3\u905e\u7d66\u5176\u5b50\u5143\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u4e0a\u4e0b\u6587",children:"\u4f7f\u7528\u4e0a\u4e0b\u6587"}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9a5f-1\u63d0\u4f9b\u4e0a\u4e0b\u6587",children:"\u6b65\u9a5f 1\uff1a\u63d0\u4f9b\u4e0a\u4e0b\u6587"}),"\n",(0,t.jsxs)(n.p,{children:["\u9700\u8981\u4e00\u500b\u4e0a\u4e0b\u6587\u63d0\u4f9b\u8005\u4f86\u6d88\u8cbb\u4e0a\u4e0b\u6587\u3002 ",(0,t.jsx)(n.code,{children:"ContextProvider<T>"}),"\uff0c\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"T"})," \u662f\u7528\u4f5c\u63d0\u4f9b\u8005\u7684\u4e0a\u4e0b\u6587\u7d50\u69cb\u9ad4\u3002\r\n",(0,t.jsx)(n.code,{children:"T"})," \u5fc5\u9808\u5be6\u4f5c ",(0,t.jsx)(n.code,{children:"Clone"})," \u548c ",(0,t.jsx)(n.code,{children:"PartialEq"}),"\u3002 ",(0,t.jsx)(n.code,{children:"ContextProvider"})," \u662f\u5176\u5b50\u5143\u4ef6\u5c07\u64c1\u6709\u4e0a\u4e0b\u6587\u7684\u5143\u4ef6\u3002\r\n\u7576\u4e0a\u4e0b\u6587\u8b8a\u66f4\u6642\uff0c\u5b50\u5143\u4ef6\u6703\u91cd\u65b0\u6e32\u67d3\u3002\u4e00\u500b\u7d50\u69cb\u9ad4\u7528\u4f86\u5b9a\u7fa9\u8981\u50b3\u905e\u7684\u8cc7\u6599\u3002 ",(0,t.jsx)(n.code,{children:"ContextProvider"})," \u53ef\u4ee5\u9019\u6a23\u4f7f\u7528\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n/// App \u4e3b\u984c\r\n#[derive(Clone, Debug, PartialEq)]\r\nstruct Theme {\r\n    foreground: String,\r\n    background: String,\r\n}\r\n\r\n/// \u4e3b\u7d44\u4ef6\r\n#[function_component]\r\npub fn App() -> Html {\r\n    let ctx = use_state(|| Theme {\r\n        foreground: "#000000".to_owned(),\r\n        background: "#eeeeee".to_owned(),\r\n    });\r\n\r\n    html! {\r\n        // `ctx` \u662f `Rc<UseStateHandle<Theme>>` \u985e\u578b\uff0c\u800c\u6211\u5011\u9700\u8981 `Theme`\r\n        // \u6240\u4ee5\u6211\u5011\u5c0d\u5b83\u9032\u884c\u89e3\u5f15\u7528\u3002\r\n        <ContextProvider<Theme> context={(*ctx).clone()}>\r\n            // \u9019\u88e1\u7684\u6bcf\u500b\u5b50\u5143\u4ef6\u53ca\u5176\u5b50\u5143\u4ef6\u90fd\u5c07\u5b58\u53d6\u6b64\u4e0a\u4e0b\u6587\u3002\r\n            <Toolbar />\r\n        </ContextProvider<Theme>>\r\n    }\r\n}\r\n\r\n/// \u5de5\u5177\u680f\r\n/// \u6b64\u7ec4\u4ef6\u53ef\u4ee5\u8bbf\u95ee\u4e0a\u4e0b\u6587\u3002\r\n#[function_component]\r\npub fn Toolbar() -> Html {\r\n    html! {\r\n        <div>\r\n            <ThemedButton />\r\n        </div>\r\n    }\r\n}\r\n\r\n/// \u653e\u7f6e\u5728 `Toolbar` \u4e2d\u7684\u6309\u9215\r\n/// \u7531\u65bc\u6b64\u5143\u4ef6\u662f\u5143\u4ef6\u6a39\u4e2d `ThemeContextProvider` \u7684\u5b50\u5143\u4ef6\uff0c\u5b83\u4e5f\u53ef\u4ee5\u5b58\u53d6\u4e0a\u4e0b\u6587\u3002\r\n#[function_component]\r\npub fn ThemedButton() -> Html {\r\n    let theme = use_context::<Theme>().expect("no ctx found");\r\n\r\n    html! {\r\n        <button style={format!("background: {}; color: {};", theme.background, theme.foreground)}>\r\n            { "Click me!" }\r\n        </button>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9a5f-2\u4f7f\u7528\u4e0a\u4e0b\u6587",children:"\u6b65\u9a5f 2\uff1a\u4f7f\u7528\u4e0a\u4e0b\u6587"}),"\n",(0,t.jsx)(n.h4,{id:"\u51fd\u6578\u5143\u4ef6",children:"\u51fd\u6578\u5143\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use_context"})," \u9264\u5b50\u7528\u65bc\u5728\u51fd\u6578\u5143\u4ef6\u4e2d\u4f7f\u7528\u4e0a\u4e0b\u6587\u3002\r\n\u8acb\u53c3\u95b1 ",(0,t.jsx)(n.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_context.html",children:"use_context \u6587\u4ef6"})," \u4ee5\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u7d50\u69cb\u9ad4\u7d44\u4ef6",children:"\u7d50\u69cb\u9ad4\u7d44\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u5011\u6709\u5169\u7a2e\u9078\u64c7\u5728\u7d50\u69cb\u9ad4\u7d44\u4ef6\u4e2d\u4f7f\u7528\u4e0a\u4e0b\u6587\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/demo/zh-Hant/docs/next/advanced-topics/struct-components/hoc",children:"\u9ad8\u968e\u5143\u4ef6"}),"\uff1a\u9ad8\u968e\u51fd\u6578\u5143\u4ef6\u5c07\u4f7f\u7528\u4e0a\u4e0b\u6587\u4e26\u5c07\u8cc7\u6599\u50b3\u905e\u7d66\u9700\u8981\u5b83\u7684\u7d50\u69cb\u9ad4\u5143\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u76f4\u63a5\u5728\u7d50\u69cb\u9ad4\u7d44\u4ef6\u4e2d\u4f7f\u7528\u4e0a\u4e0b\u6587\u3002\u8acb\u53c3\u95b1 ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/contexts/src/struct_component_subscriber.rs",children:"\u7d50\u69cb\u9ad4\u7d44\u4ef6\u4f5c\u200b\u200b\u70ba\u6d88\u8cbb\u8005\u7684\u7bc4\u4f8b"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u5834\u666f",children:"\u4f7f\u7528\u5834\u666f"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u5982\u679c\u67d0\u4e9b\u8cc7\u6599\u9700\u8981\u5728\u6a39\u7684\u4e0d\u540c\u90e8\u5206\u7684\u9060\u7aef\u5143\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4e0a\u4e0b\u6587\u53ef\u80fd\u6703\u5c0d\u4f60\u6709\u6240\u5e6b\u52a9\u3002\r\n\u4ee5\u4e0b\u662f\u4e00\u4e9b\u9019\u6a23\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u4e3b\u984c"}),"\uff1a\u4f60\u53ef\u4ee5\u5728\u61c9\u7528\u7a0b\u5f0f\u7684\u9802\u90e8\u653e\u7f6e\u4e00\u500b\u4e0a\u4e0b\u6587\u4f86\u4fdd\u5b58\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u4e3b\u984c\uff0c\u4e26\u4f7f\u7528\u5b83\u4f86\u8abf\u6574\u8996\u89ba\u5916\u89c0\uff0c\u5982\u4e0a\u4f8b\u6240\u793a\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u76ee\u524d\u4f7f\u7528\u8005\u5e33\u6236"}),"\uff1a\u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c\u5143\u4ef6\u9700\u8981\u77e5\u9053\u76ee\u524d\u767b\u5165\u7684\u4f7f\u7528\u8005\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e0b\u6587\u5c07\u76ee\u524d\u4f7f\u7528\u8005\u7269\u4ef6\u63d0\u4f9b\u7d66\u5143\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u524d\u7684\u8003\u616e",children:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u524d\u7684\u8003\u616e"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u4e0b\u6587\u975e\u5e38\u5bb9\u6613\u4f7f\u7528\uff0c\u9019\u4e5f\u4f7f\u5f97\u5b83\u5011\u975e\u5e38\u5bb9\u6613\u88ab\u8aa4\u7528/\u904e\u5ea6\u4f7f\u7528\u3002\r\n\u50c5\u50c5\u56e0\u70ba\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e0b\u6587\u5c07 props \u5171\u4eab\u7d66\u591a\u500b\u5c64\u7d1a\u6df1\u7684\u5143\u4ef6\uff0c\u4e26\u4e0d\u610f\u5473\u8457\u4f60\u61c9\u8a72\u9019\u6a23\u505a\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u63d0\u53d6\u4e00\u500b\u5143\u4ef6\u4e26\u5c07\u8a72\u5143\u4ef6\u4f5c\u70ba\u5b50\u5143\u4ef6\u50b3\u905e\u7d66\u53e6\u4e00\u500b\u5143\u4ef6\u3002\u4f8b\u5982\uff0c\r\n\u4f60\u53ef\u80fd\u6709\u4e00\u500b ",(0,t.jsx)(n.code,{children:"Layout"})," \u5143\u4ef6\uff0c\u5b83\u5c07 ",(0,t.jsx)(n.code,{children:"articles"})," \u4f5c\u70ba prop \u4e26\u50b3\u905e\u7d66 ",(0,t.jsx)(n.code,{children:"ArticleList"})," \u5143\u4ef6\u3002\r\n\u4f60\u61c9\u8a72\u91cd\u69cb ",(0,t.jsx)(n.code,{children:"Layout"})," \u5143\u4ef6\uff0c\u4f7f\u5176\u63a5\u53d7\u5b50\u5143\u4ef6\u4f5c\u70ba props \u4e26\u986f\u793a ",(0,t.jsx)(n.code,{children:"<Layout> <ArticleList {articles} /> </Layout>"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4fee\u6539\u5b50\u5143\u4ef6\u7684\u4e0a\u4e0b\u6587\u503c",children:"\u4fee\u6539\u5b50\u5143\u4ef6\u7684\u4e0a\u4e0b\u6587\u503c"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u65bc Rust \u7684\u6240\u6709\u6b0a\u898f\u5247\uff0c\u4e0a\u4e0b\u6587\u4e0d\u80fd\u6709\u4e00\u500b\u53ef\u4ee5\u88ab\u5b50\u5143\u4ef6\u547c\u53eb\u7684 ",(0,t.jsx)(n.code,{children:"&mut self"})," \u65b9\u6cd5\u3002\r\n\u8981\u4fee\u6539\u4e0a\u4e0b\u6587\u7684\u503c\uff0c\u6211\u5011\u5fc5\u9808\u5c07\u5176\u8207 reducer \u7d50\u5408\u4f7f\u7528\u3002\u9019\u53ef\u4ee5\u900f\u904e\u4f7f\u7528\r\n",(0,t.jsx)(n.a,{href:"https://yew-rs-api.web.app/next/yew/functional/fn.use_reducer.html",children:(0,t.jsx)(n.code,{children:"use_reducer"})})," \u9264\u5b50\u5b8c\u6210\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/contexts",children:"\u4e0a\u4e0b\u6587\u7bc4\u4f8b"})," \u793a\u7bc4\u4e86\u4f7f\u7528\u4e0a\u4e0b\u6587\u7684\u53ef\u8b8a\u4e0a\u4e0b\u6587"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9032\u4e00\u6b65\u95b1\u8b80",children:"\u9032\u4e00\u6b65\u95b1\u8b80"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/contexts",children:"\u4e0a\u4e0b\u6587\u7bc4\u4f8b"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(6540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);