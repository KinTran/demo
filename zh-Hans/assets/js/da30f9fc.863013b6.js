"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6769],{1648:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=r(4848),s=r(8453);const l={title:"\u751f\u547d\u5468\u671f",description:"\u7ec4\u4ef6\u53ca\u5176\u751f\u547d\u5468\u671f\u94a9\u5b50"},c=void 0,i={id:"advanced-topics/struct-components/lifecycle",title:"\u751f\u547d\u5468\u671f",description:"\u7ec4\u4ef6\u53ca\u5176\u751f\u547d\u5468\u671f\u94a9\u5b50",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-topics/struct-components/lifecycle.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/lifecycle",permalink:"/zh-Hans/docs/next/advanced-topics/struct-components/lifecycle",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/struct-components/lifecycle.mdx",tags:[],version:"current",frontMatter:{title:"\u751f\u547d\u5468\u671f",description:"\u7ec4\u4ef6\u53ca\u5176\u751f\u547d\u5468\u671f\u94a9\u5b50"},sidebar:"docs",previous:{title:"\u9ad8\u9636\u7ec4\u4ef6",permalink:"/zh-Hans/docs/next/advanced-topics/struct-components/hoc"},next:{title:"\u4f5c\u7528\u57df",permalink:"/zh-Hans/docs/next/advanced-topics/struct-components/scope"}},o={},d=[{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2},{value:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",level:2},{value:"Create",id:"create",level:3},{value:"View",id:"view",level:3},{value:"Rendered",id:"rendered",level:3},{value:"Update",id:"update",level:3},{value:"Changed",id:"changed",level:3},{value:"Destroy",id:"destroy",level:3},{value:"\u65e0\u9650\u5faa\u73af",id:"\u65e0\u9650\u5faa\u73af",level:3},{value:"\u5173\u8054\u7c7b\u578b",id:"\u5173\u8054\u7c7b\u578b",level:2},{value:"\u751f\u547d\u5468\u671f\u4e0a\u4e0b\u6587",id:"\u751f\u547d\u5468\u671f\u4e0a\u4e0b\u6587",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Component"})," trait \u6709\u8bb8\u591a\u65b9\u6cd5\u9700\u8981\u5b9e\u73b0\uff1bYew \u4f1a\u5728\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u7684\u4e0d\u540c\u9636\u6bb5\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,t.jsx)(n.admonition,{title:"\u6539\u8fdb\u6587\u6863",type:"important",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\u4e3a\u6587\u6863\u505a\u8d21\u732e\uff1a"})," ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/issues/1915",children:"\u6dfb\u52a0\u5b9a\u5236\u751f\u547d\u5468\u671f\u7684\u7ec4\u4ef6\u793a\u4f8b"})]})}),"\n",(0,t.jsx)(n.h2,{id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",children:"\u751f\u547d\u5468\u671f\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u7ec4\u4ef6\u88ab\u521b\u5efa\u65f6\uff0c\u5b83\u4f1a\u4ece\u5176\u7236\u7ec4\u4ef6\u63a5\u6536\u5c5e\u6027\uff0c\u5e76\u5b58\u50a8\u5728\u4f20\u9012\u7ed9 ",(0,t.jsx)(n.code,{children:"create"})," \u65b9\u6cd5\u7684 ",(0,t.jsx)(n.code,{children:"Context<Self>"}),' \u4e2d\u3002\u8fd9\u4e9b\u5c5e\u6027\u53ef\u4ee5\u7528\u6765\u521d\u59cb\u5316\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u800c "link" \u53ef\u4ee5\u7528\u6765\u6ce8\u518c\u56de\u8c03\u6216\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\u3002']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, Context, html, Html, Properties};\r\n\r\n#[derive(PartialEq, Properties)]\r\npub struct Props;\r\n\r\npub struct MyComponent;\r\n\r\nimpl Component for MyComponent {\r\n    type Message = ();\r\n    type Properties = Props;\r\n\r\n    // highlight-start\r\n    fn create(ctx: &Context<Self>) -> Self {\r\n        MyComponent\r\n    }\r\n    // highlight-end\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            // \u5177\u4f53\u5b9e\u73b0\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"view",children:"View"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"view"})," \u65b9\u6cd5\u5141\u8bb8\u60a8\u63cf\u8ff0\u7ec4\u4ef6\u5e94\u8be5\u5982\u4f55\u5448\u73b0\u5230 DOM \u4e2d\u3002\u4f7f\u7528 Rust \u51fd\u6570\u7f16\u5199\u7c7b\u4f3c HTML \u7684\u4ee3\u7801\u53ef\u80fd\u4f1a\u53d8\u5f97\u975e\u5e38\u6df7\u4e71\uff0c\u56e0\u6b64 Yew \u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"html!"})," \u7684\u5b8f\uff0c\u7528\u4e8e\u58f0\u660e HTML \u548c SVG \u8282\u70b9\uff08\u4ee5\u53ca\u5c06\u5c5e\u6027\u548c\u4e8b\u4ef6\u76d1\u542c\u5668\u9644\u52a0\u5230\u5b83\u4eec\uff09\u4ee5\u53ca\u4e00\u79cd\u65b9\u4fbf\u7684\u65b9\u6cd5\u6765\u6e32\u67d3\u5b50\u7ec4\u4ef6\u3002\u8fd9\u4e2a\u5b8f\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u7c7b\u4f3c\u4e8e React \u7684 JSX\uff08\u9664\u4e86\u7f16\u7a0b\u8bed\u8a00\u7684\u5dee\u5f02\uff09\u3002\u4e00\u4e2a\u4e0d\u540c\u4e4b\u5904\u662f Yew \u63d0\u4f9b\u4e86\u4e00\u79cd\u7c7b\u4f3c Svelte \u7684\u5c5e\u6027\u7684\u7b80\u5199\u8bed\u6cd5\uff0c\u5176\u4e2d\u60a8\u53ef\u4ee5\u53ea\u5199 ",(0,t.jsx)(n.code,{children:"{onclick}"}),"\uff0c\u800c\u4e0d\u7528\u5199 ",(0,t.jsx)(n.code,{children:"onclick={onclick}"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, Context, html, Html, Properties};\r\n\r\nenum Msg {\r\n    Click,\r\n}\r\n\r\n#[derive(PartialEq, Properties)]\r\nstruct Props {\r\n    button_text: String,\r\n}\r\n\r\nstruct MyComponent;\r\n\r\nimpl Component for MyComponent {\r\n    type Message = Msg;\r\n    type Properties = Props;\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    // highlight-start\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        let onclick = ctx.link().callback(|_| Msg::Click);\r\n        html! {\r\n            <button {onclick}>{ &ctx.props().button_text }</button>\r\n        }\r\n    }\r\n    // highlight-end\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c31\u4f7f\u7528\u4e0a\u7684\u8bf4\u660e\uff0c\u8bf7\u67e5\u770b ",(0,t.jsx)(n.a,{href:"/zh-Hans/docs/next/concepts/html",children:"html! \u6307\u5357"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"rendered",children:"Rendered"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"rendered"})," \u7ec4\u4ef6\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5728 ",(0,t.jsx)(n.code,{children:"view"})," \u88ab\u8c03\u7528\u5e76\u4e14 Yew \u5df2\u7ecf\u5c06\u7ed3\u679c\u6e32\u67d3\u5230 DOM \u4e2d\u540e\u8c03\u7528\uff0c\u4f46\u5728\u6d4f\u89c8\u5668\u5237\u65b0\u9875\u9762\u4e4b\u524d\u3002\u5f53\u60a8\u60f3\u8981\u6267\u884c\u53ea\u80fd\u5728\u7ec4\u4ef6\u6e32\u67d3\u5143\u7d20\u540e\u5b8c\u6210\u7684\u64cd\u4f5c\u65f6\uff0c\u6b64\u65b9\u6cd5\u975e\u5e38\u6709\u7528\u3002\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"first_render"})," \u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u786e\u5b9a\u6b64\u51fd\u6570\u662f\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u65f6\u8c03\u7528\uff0c\u8fd8\u662f\u5728\u540e\u7eed\u6e32\u67d3\u65f6\u8c03\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use web_sys::HtmlInputElement;\r\nuse yew::{\r\n    Component, Context, html, Html, NodeRef,\r\n};\r\n\r\npub struct MyComponent {\r\n    node_ref: NodeRef,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            node_ref: NodeRef::default(),\r\n        }\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            <input ref={self.node_ref.clone()} type="text" />\r\n        }\r\n    }\r\n\r\n    // highlight-start\r\n    fn rendered(&mut self, _ctx: &Context<Self>, first_render: bool) {\r\n        if first_render {\r\n            if let Some(input) = self.node_ref.cast::<HtmlInputElement>() {\r\n                input.focus();\r\n            }\r\n        }\r\n    }\r\n    // highlight-end\r\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"note",type:"tip",children:(0,t.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u6b64\u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e0d\u9700\u8981\u5b9e\u73b0\uff0c\u5e76\u4e14\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"})}),"\n",(0,t.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0e\u7ec4\u4ef6\u7684\u901a\u4fe1\u4e3b\u8981\u901a\u8fc7\u6d88\u606f\u8fdb\u884c\uff0c\u8fd9\u4e9b\u6d88\u606f\u7531 ",(0,t.jsx)(n.code,{children:"update"})," \u751f\u547d\u5468\u671f\u65b9\u6cd5\u5904\u7406\u3002\u8fd9\u5141\u8bb8\u7ec4\u4ef6\u6839\u636e\u6d88\u606f\u66f4\u65b0\u81ea\u8eab\uff0c\u5e76\u786e\u5b9a\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u81ea\u8eab\u3002\u6d88\u606f\u53ef\u4ee5\u7531\u4e8b\u4ef6\u76d1\u542c\u5668\u3001\u5b50\u7ec4\u4ef6\u3001Agents\u3001Services \u6216 Futures \u53d1\u9001\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u662f ",(0,t.jsx)(n.code,{children:"update"})," \u7684\u4e00\u4e2a\u5b9e\u73b0\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use yew::{Component, Context, html, Html};\r\n\r\n// highlight-start\r\npub enum Msg {\r\n    SetInputEnabled(bool)\r\n}\r\n// highlight-end\r\n\r\nstruct MyComponent {\r\n    input_enabled: bool,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    // highlight-next-line\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            input_enabled: false,\r\n        }\r\n    }\r\n\r\n    // highlight-start\r\n    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {\r\n        match msg {\r\n            Msg::SetInputEnabled(enabled) => {\r\n                if self.input_enabled != enabled {\r\n                    self.input_enabled = enabled;\r\n                    true // \u91cd\u65b0\u6e32\u67d3\r\n                } else {\r\n                    false\r\n                }\r\n            }\r\n        }\r\n    }\r\n    // highlight-end\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        html! {\r\n            // \u5177\u4f53\u5b9e\u73b0\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"changed",children:"Changed"}),"\n",(0,t.jsx)(n.p,{children:"\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u88ab\u5176\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002\u5f53\u8fd9\u79cd\u60c5\u51b5\u53d1\u751f\u65f6\uff0c\u5b83\u4eec\u53ef\u80fd\u4f1a\u63a5\u6536\u65b0\u7684\u5c5e\u6027\u5e76\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u3002\u8fd9\u79cd\u8bbe\u8ba1\u901a\u8fc7\u4ec5\u66f4\u6539\u5c5e\u6027\u7684\u503c\u6765\u4fc3\u8fdb\u7236\u5b50\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u5f53\u5c5e\u6027\u66f4\u6539\u65f6\uff0c\u6709\u4e00\u4e2a\u9ed8\u8ba4\u5b9e\u73b0\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"destroy",children:"Destroy"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ec4\u4ef6\u4ece DOM \u4e2d\u5378\u8f7d\u540e\uff0cYew \u4f1a\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"destroy"})," \u751f\u547d\u5468\u671f\u65b9\u6cd5\uff1b\u5982\u679c\u60a8\u9700\u8981\u5728\u7ec4\u4ef6\u88ab\u9500\u6bc1\u4e4b\u524d\u6267\u884c\u6e05\u7406\u64cd\u4f5c\uff0c\u8fd9\u662f\u5fc5\u8981\u7684\u3002\u6b64\u65b9\u6cd5\u662f\u53ef\u9009\u7684\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u65e0\u9650\u5faa\u73af",children:"\u65e0\u9650\u5faa\u73af"}),"\n",(0,t.jsx)(n.p,{children:"\u65e0\u9650\u5faa\u73af\u5728 Yew \u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e2d\u662f\u53ef\u80fd\u7684\uff0c\u4f46\u53ea\u6709\u5728\u5c1d\u8bd5\u5728\u6bcf\u6b21\u6e32\u67d3\u540e\u66f4\u65b0\u76f8\u540c\u7684\u7ec4\u4ef6\u65f6\uff0c\u5f53\u8be5\u66f4\u65b0\u8fd8\u8981\u6c42\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u65f6\u624d\u4f1a\u53d1\u751f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use yew::{Context, Component, Html};\r\n\r\nstruct Comp;\r\n\r\nimpl Component for Comp {\r\n    type Message = ();\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn update(&mut self, _ctx: &Context<Self>, _msg: Self::Message) -> bool {\r\n        // \u6211\u4eec\u603b\u662f\u8bf7\u6c42\u5728\u4efb\u4f55\u6d88\u606f\u4e0a\u91cd\u65b0\u6e32\u67d3\r\n        true\r\n    }\r\n\r\n    fn view(&self, _ctx: &Context<Self>) -> Html {\r\n        // \u65e0\u8bba\u6e32\u67d3\u4ec0\u4e48\u90fd\u4e0d\u91cd\u8981\r\n        Html::default()\r\n    }\r\n\r\n    fn rendered(&mut self, ctx: &Context<Self>, _first_render: bool) {\r\n        // \u8bf7\u6c42\u4f7f\u7528\u6b64\u65b0\u6d88\u606f\u66f4\u65b0\u7ec4\u4ef6\r\n        ctx.link().send_message(());\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u770b\u770b\u8fd9\u91cc\u53d1\u751f\u4e86\u4ec0\u4e48\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"create"})," \u51fd\u6570\u521b\u5efa\u7ec4\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"view"})," \u65b9\u6cd5\uff0c\u4ee5\u4fbf Yew \u77e5\u9053\u8981\u6e32\u67d3\u5230\u6d4f\u89c8\u5668 DOM \u4e2d\u7684\u5185\u5bb9\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"rendered"})," \u65b9\u6cd5\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Context"})," \u94fe\u63a5\u5b89\u6392\u66f4\u65b0\u6d88\u606f\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"Yew \u5b8c\u6210\u540e\u6e32\u67d3\u9636\u6bb5\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Yew \u68c0\u67e5\u5df2\u5b89\u6392\u7684\u4e8b\u4ef6\uff0c\u5e76\u770b\u5230\u66f4\u65b0\u6d88\u606f\u961f\u5217\u4e0d\u4e3a\u7a7a\uff0c\u56e0\u6b64\u5904\u7406\u6d88\u606f\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"update"})," \u65b9\u6cd5\uff0c\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"true"})," \u8868\u793a\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u7ec4\u4ef6\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u8df3\u56de\u5230\u7b2c 2 \u6b65\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u4ecd\u7136\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"rendered"})," \u65b9\u6cd5\u4e2d\u5b89\u6392\u66f4\u65b0\uff0c\u8fd9\u901a\u5e38\u662f\u6709\u7528\u7684\uff0c\u4f46\u662f\u5728\u8fd9\u6837\u505a\u65f6\uff0c\u8bf7\u8003\u8651\u60a8\u7684\u7ec4\u4ef6\u5c06\u5982\u4f55\u7ec8\u6b62\u6b64\u5faa\u73af\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u8054\u7c7b\u578b",children:"\u5173\u8054\u7c7b\u578b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Component"})," trait \u6709\u4e24\u4e2a\u5173\u8054\u7c7b\u578b\uff1a",(0,t.jsx)(n.code,{children:"Message"})," \u548c ",(0,t.jsx)(n.code,{children:"Properties"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"impl Component for MyComponent {\r\n    type Message = Msg;\r\n    type Properties = Props;\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Message"})," \u7c7b\u578b\u7528\u4e8e\u5728\u4e8b\u4ef6\u53d1\u751f\u540e\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\uff1b\u4f8b\u5982\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5728\u7528\u6237\u5355\u51fb\u6309\u94ae\u6216\u5411\u4e0b\u6eda\u52a8\u9875\u9762\u65f6\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u3002\u56e0\u4e3a\u7ec4\u4ef6\u901a\u5e38\u9700\u8981\u54cd\u5e94\u591a\u4e2a\u4e8b\u4ef6\uff0c\u6240\u4ee5 ",(0,t.jsx)(n.code,{children:"Message"})," \u7c7b\u578b\u901a\u5e38\u662f\u4e00\u4e2a\u679a\u4e3e\uff0c\u5176\u4e2d\u6bcf\u4e2a\u53d8\u4f53\u90fd\u662f\u8981\u5904\u7406\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u7ec4\u7ec7\u4ee3\u7801\u5e93\u65f6\uff0c\u5c06 ",(0,t.jsx)(n.code,{children:"Message"})," \u7c7b\u578b\u7684\u5b9a\u4e49\u5305\u542b\u5728\u5b9a\u4e49\u7ec4\u4ef6\u7684\u540c\u4e00\u6a21\u5757\u4e2d\u662f\u660e\u667a\u7684\u3002\u60a8\u53ef\u80fd\u4f1a\u53d1\u73b0\u91c7\u7528\u4e00\u81f4\u7684\u547d\u540d\u7ea6\u5b9a\u6765\u547d\u540d\u6d88\u606f\u7c7b\u578b\u5f88\u6709\u5e2e\u52a9\u3002\u4e00\u4e2a\u9009\u9879\uff08\u5c3d\u7ba1\u4e0d\u662f\u552f\u4e00\u7684\u9009\u9879\uff09\u662f\u5c06\u7c7b\u578b\u547d\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"ComponentNameMsg"}),"\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u7ec4\u4ef6\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"Homepage"}),"\uff0c\u5219\u53ef\u4ee5\u5c06\u7c7b\u578b\u547d\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"HomepageMsg"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"enum Msg {\r\n    Click,\r\n    FormInput(String)\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Properties"})," \u8868\u793a\u4ece\u5176\u7236\u7ec4\u4ef6\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684\u4fe1\u606f\u3002\u6b64\u7c7b\u578b\u5fc5\u987b\u5b9e\u73b0 ",(0,t.jsx)(n.code,{children:"Properties"})," trait\uff08\u901a\u5e38\u901a\u8fc7\u6d3e\u751f\u5b83\uff09\u5e76\u53ef\u4ee5\u6307\u5b9a\u67d0\u4e9b\u5c5e\u6027\u662f\u5fc5\u9700\u7684\u8fd8\u662f\u53ef\u9009\u7684\u3002\u5728\u521b\u5efa\u548c\u66f4\u65b0\u7ec4\u4ef6\u65f6\u4f7f\u7528\u6b64\u7c7b\u578b\u3002\u5728\u7ec4\u4ef6\u7684\u6a21\u5757\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"Props"})," \u7684\u7ed3\u6784\u4f53\uff0c\u5e76\u5c06\u5176\u7528\u4f5c\u7ec4\u4ef6\u7684 ",(0,t.jsx)(n.code,{children:"Properties"}),' \u7c7b\u578b\u662f\u4e00\u79cd\u5e38\u89c1\u505a\u6cd5\u3002\u901a\u5e38\u5c06 "properties" \u7f29\u5199\u4e3a "props"\u3002\u7531\u4e8e props \u662f\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u4e0b\u6765\u7684\uff0c\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u7684\u6839\u7ec4\u4ef6\u901a\u5e38\u5177\u6709 ',(0,t.jsx)(n.code,{children:"Properties"})," \u7c7b\u578b\u4e3a ",(0,t.jsx)(n.code,{children:"()"}),"\u3002\u5982\u679c\u8981\u4e3a\u6839\u7ec4\u4ef6\u6307\u5b9a\u5c5e\u6027\uff0c\u8bf7\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"App::mount_with_props"})," \u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"./properties",children:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5c5e\u6027\u7684\u4fe1\u606f"})})}),"\n",(0,t.jsx)(n.h2,{id:"\u751f\u547d\u5468\u671f\u4e0a\u4e0b\u6587",children:"\u751f\u547d\u5468\u671f\u4e0a\u4e0b\u6587"}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u6709\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u65b9\u6cd5\u90fd\u63a5\u53d7\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002\u6b64\u5bf9\u8c61\u63d0\u4f9b\u4e86\u5bf9\u7ec4\u4ef6\u4f5c\u7528\u57df\u7684\u5f15\u7528\uff0c\u5141\u8bb8\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\u5e76\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684 props\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(6540);const s={},l=t.createContext(s);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);