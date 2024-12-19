"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25],{8303:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var s=r(4848),o=r(8453);const t={description:"\u7ec4\u4ef6\u53ca\u5176\u751f\u547d\u5468\u671f\u94a9\u5b50"},c="\u7ec4\u4ef6\uff08Components\uff09",d={id:"advanced-topics/struct-components/lifecycle",title:"\u7ec4\u4ef6\uff08Components\uff09",description:"\u7ec4\u4ef6\u53ca\u5176\u751f\u547d\u5468\u671f\u94a9\u5b50",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.21/advanced-topics/struct-components/lifecycle.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/lifecycle",permalink:"/demo/zh-Hans/docs/advanced-topics/struct-components/lifecycle",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/advanced-topics/struct-components/lifecycle.mdx",tags:[],version:"0.21",frontMatter:{description:"\u7ec4\u4ef6\u53ca\u5176\u751f\u547d\u5468\u671f\u94a9\u5b50"},sidebar:"docs",previous:{title:"Higher Order Components",permalink:"/demo/zh-Hans/docs/advanced-topics/struct-components/hoc"},next:{title:"Scope",permalink:"/demo/zh-Hans/docs/advanced-topics/struct-components/scope"}},l={},i=[{value:"\u7ec4\u4ef6\u662f\u4ec0\u4e48\uff1f",id:"\u7ec4\u4ef6\u662f\u4ec0\u4e48",level:2},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2},{value:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",level:2},{value:"Create",id:"create",level:3},{value:"View",id:"view",level:3},{value:"Mounted",id:"mounted",level:3},{value:"Update",id:"update",level:3},{value:"Change",id:"change",level:3},{value:"Destroy",id:"destroy",level:3},{value:"\u5173\u8054\u7c7b\u578b",id:"\u5173\u8054\u7c7b\u578b",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u7ec4\u4ef6components",children:"\u7ec4\u4ef6\uff08Components\uff09"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ec4\u4ef6\u662f\u4ec0\u4e48",children:"\u7ec4\u4ef6\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ec4\u4ef6\u662f Yew \u7684\u57fa\u77f3\u3002\u5b83\u4eec\u7ba1\u7406\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u5e76\u53ef\u4ee5\u6e32\u67d3\u4e3a DOM\u3002\u7ec4\u4ef6\u662f\u901a\u8fc7\u5b9e\u73b0\u63cf\u8ff0\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7684 ",(0,s.jsx)(n.code,{children:"Component"})," trait \u6765\u521b\u5efa\u7684\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"\u4e3a\u6211\u4eec\u7684\u6587\u6863\u505a\u51fa\u8d21\u732e\uff1a"}),(0,s.jsx)(n.a,{href:"https://github.com/yewstack/docs/issues/22",children:"\u6dfb\u52a0\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u56fe\u793a"})]})}),"\n",(0,s.jsx)(n.h2,{id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",children:"\u751f\u547d\u5468\u671f\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u4e00\u4e2a\u7ec4\u4ef6\u88ab\u521b\u5efa\u65f6\uff0c\u5b83\u4f1a\u4ece\u5176\u7236\u7ec4\u4ef6\u4ee5\u53ca\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"ComponentLink"})," \u63a5\u6536\u5c5e\u6027\uff08properties\uff09\u3002\u5c5e\u6027\uff08properties\uff09\u53ef\u7528\u4e8e\u521d\u59cb\u5316\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u201clink\u201d\u53ef\u7528\u4e8e\u6ce8\u518c\u56de\u8c03\u6216\u5411\u7ec4\u4ef6\u53d1\u9001\u6d88\u606f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u5e38\u5c06 props \u548c link \u5b58\u50a8\u5728\u7ec4\u4ef6\u7684\u7ed3\u6784\u4f53\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub struct MyComponent {\r\n    props: Props,\r\n    link: ComponentLink<Self>,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Properties = Props;\r\n    // ...\r\n\r\n    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {\r\n        MyComponent { props, link }\r\n    }\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"view",children:"View"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ec4\u4ef6\u5728 ",(0,s.jsx)(n.code,{children:"view()"})," \u65b9\u6cd5\u4e2d\u58f0\u660e\u5b83\u7684\u5e03\u5c40\u3002Yew \u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.code,{children:"html!"})," \u5b8f\u6765\u58f0\u660e HTML \u548c SVG \u8282\u70b9\u548c\u5b83\u4eec\u7684\u76d1\u542c\u5668\u53ca\u5176\u5b50\u7ec4\u4ef6\u3002\u8fd9\u4e2a\u5b8f\u7684\u884c\u4e3a\u5f88\u50cf React \u4e2d\u7684 JSX\uff0c\u4f46\u662f\u4f7f\u7528\u7684\u662f Rust \u8868\u8fbe\u5f0f\u800c\u4e0d\u662f JavaScript\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Component for MyComponent {\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        let onclick = self.link.callback(|_| Msg::Click);\r\n        html! {\r\n            <button {onclick}>{ self.props.button_text }</button>\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173\u7528\u6cd5\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,s.jsxs)(n.a,{href:"/demo/zh-Hans/docs/concepts/html",children:[(0,s.jsx)(n.code,{children:"html!"})," \u5b8f\u6307\u5357"]}),"]"]}),"\n",(0,s.jsx)(n.h3,{id:"mounted",children:"Mounted"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mounted()"})," \u7ec4\u4ef6\u751f\u547d\u5468\u671f\u65b9\u6cd5\u8c03\u7528\u662f\u5728 ",(0,s.jsx)(n.code,{children:"view()"})," \u88ab\u5904\u7406\u5e76\u4e14 Yew \u5df2\u7ecf\u628a\u7ec4\u4ef6\u6302\u8f7d\u5230 DOM \u4e0a\u4e4b\u540e\uff0c\u6d4f\u89c8\u5668\u5237\u65b0\u9875\u9762\u4e4b\u524d\u3002\u7ec4\u4ef6\u901a\u5e38\u5e0c\u671b\u5b9e\u73b0\u6b64\u65b9\u6cd5\u4ee5\u6267\u884c\u53ea\u80fd\u5728\u7ec4\u4ef6\u6e32\u67d3\u5143\u7d20\u4e4b\u540e\u624d\u80fd\u6267\u884c\u7684\u64cd\u4f5c\u3002\u5982\u679c\u4f60\u60f3\u5728\u505a\u51fa\u4e00\u4e9b\u66f4\u6539\u540e\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff0c\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"true"})," \u5c31\u53ef\u4ee5\u4e86\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use stdweb::web::html_element::InputElement;\r\nuse stdweb::web::IHtmlElement;\r\nuse yew::prelude::*;\r\n\r\npub struct MyComponent {\r\n    node_ref: NodeRef,\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    // ...\r\n\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <input ref={self.node_ref.clone()} type="text" />\r\n        }\r\n    }\r\n\r\n    fn mounted(&mut self) -> ShouldRender {\r\n        if let Some(input) = self.node_ref.cast::<InputElement>() {\r\n            input.focus();\r\n        }\r\n        false\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u6b64\u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e0d\u8981\u6c42\u5fc5\u987b\u5b9e\u73b0\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ec4\u4ef6\u662f\u52a8\u6001\u7684\uff0c\u53ef\u4ee5\u6ce8\u518c\u4ee5\u63a5\u6536\u5f02\u6b65\u4fe1\u606f\u3002",(0,s.jsx)(n.code,{children:"update()"})," \u751f\u547d\u5468\u671f\u65b9\u6cd5\u5bf9\u4e8e\u6bcf\u4e2a\u6d88\u606f\u90fd\u4f1a\u88ab\u8c03\u7528\u3002\u8fd9\u4f7f\u5f97\u7ec4\u4ef6\u53ef\u4ee5\u6839\u636e\u6d88\u606f\u7684\u5185\u5bb9\u6765\u66f4\u65b0\u81ea\u8eab\uff0c\u5e76\u51b3\u5b9a\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u81ea\u5df1\u3002\u6d88\u606f\u53ef\u4ee5\u7531 HTML \u5143\u7d20\u76d1\u542c\u5668\u89e6\u53d1\uff0c\u6216\u8005\u7531\u5b50\u7ec4\u4ef6\uff0cAgents\uff0cServices \u6216 Futures \u53d1\u9001\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"update()"})," \u53ef\u80fd\u770b\u8d77\u6765\u50cf\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub enum Msg {\r\n    SetInputEnabled(bool)\r\n}\r\n\r\nimpl Component for MyComponent {\r\n    type Message = Msg;\r\n\r\n    // ...\r\n\r\n    fn update(&mut self, msg: Self::Message) -> ShouldRender {\r\n       match msg {\r\n           Msg::SetInputEnabled(enabled) => {\r\n               if self.input_enabled != enabled {\r\n                   self.input_enabled = enabled;\r\n                   true // \u91cd\u65b0\u6e32\u67d3\r\n               } else {\r\n                   false\r\n               }\r\n           }\r\n       }\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"change",children:"Change"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ec4\u4ef6\u53ef\u80fd\u88ab\u5176\u7236\u8282\u70b9\u91cd\u65b0\u6e32\u67d3\u3002\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u65f6\uff0c\u5b83\u4eec\u53ef\u4ee5\u63a5\u6536\u65b0\u7684\u5c5e\u6027\uff08properties\uff09\u5e76\u9009\u62e9\u91cd\u65b0\u6e32\u67d3\u3002\u8fd9\u79cd\u8bbe\u8ba1\u901a\u8fc7\u66f4\u6539\u5c5e\u6027\uff08properties\uff09\u6765\u4fc3\u8fdb\u7236\u5b50\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u4f60\u4e0d\u662f\u5fc5\u987b\u5b9e\u73b0 ",(0,s.jsx)(n.code,{children:"change()"}),"\uff0c\u4f46\u662f\u5982\u679c\u60f3\u5728\u7ec4\u4ef6\u88ab\u521b\u5efa\u540e\u901a\u8fc7 props \u6765\u66f4\u65b0\u7ec4\u4ef6\uff0c\u5219\u53ef\u80fd\u8981\u8fd9\u4e48\u505a\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u539f\u59cb\u7684\u5b9e\u73b0\u53ef\u80fd\u770b\u8d77\u6765\u50cf\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Component for MyComponent {\r\n    // ...\r\n\r\n    fn change(&mut self, props: Self::Properties) -> ShouldRender {\r\n       self.props = props;\r\n       true // \u5f53\u63d0\u4f9b\u4e86\u65b0\u7684 props \u5c06\u59cb\u7ec8\u91cd\u65b0\u6e32\u67d3\u3002\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"destroy",children:"Destroy"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ec4\u4ef6\u4ece DOM \u4e0a\u88ab\u5378\u8f7d\u540e\uff0cYew \u8c03\u7528 ",(0,s.jsx)(n.code,{children:"destroy()"})," \u751f\u547d\u5468\u671f\u65b9\u6cd5\u6765\u652f\u6301\u4efb\u4f55\u5fc5\u8981\u7684\u6e05\u7406\u64cd\u4f5c\u3002\u8fd9\u4e2a\u65b9\u6cd5\u662f\u53ef\u9009\u7684\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u8054\u7c7b\u578b",children:"\u5173\u8054\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Component"})," trait \u6709\u4e24\u4e2a\u5173\u8054\u7c7b\u578b\uff1a",(0,s.jsx)(n.code,{children:"Message"})," \u548c ",(0,s.jsx)(n.code,{children:"Properties"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Component for MyComponent {\r\n    type Message = Msg;\r\n    type Properties = Props;\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Message"})," \u8868\u793a\u7ec4\u4ef6\u53ef\u4ee5\u5904\u7406\u4ee5\u89e6\u53d1\u67d0\u4e9b\u526f\u4f5c\u7528\u7684\u5404\u79cd\u6d88\u606f\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u6709\u4e00\u6761 ",(0,s.jsx)(n.code,{children:"Click"})," \u6d88\u606f\uff0c\u8be5\u6d88\u606f\u89e6\u53d1 API \u8bf7\u6c42\u6216\u8005\u5207\u6362 UI \u7ec4\u4ef6\u7684\u5916\u89c2\u3002\u901a\u5e38\u7684\u505a\u6cd5\u662f\u5728\u7ec4\u4ef6\u6a21\u5757\u4e2d\u521b\u5efa\u4e00\u4e2a\u53eb\u505a ",(0,s.jsx)(n.code,{children:"Msg"})," \u7684\u679a\u4e3e\u5e76\u5c06\u5176\u7528\u4f5c\u7ec4\u4ef6\u4e2d\u7684\u6d88\u606f\u7c7b\u578b\u3002\u901a\u5e38\u5c06\u201cmessage\u201d\u7f29\u5199\u4e3a\u201cmsg\u201d\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"enum Msg {\r\n    Click,\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Properties"})," \u8868\u793a\u4ece\u7236\u7ea7\u4f20\u9012\u5230\u7ec4\u4ef6\u7684\u4fe1\u606f\u3002\u6b64\u7c7b\u578b\u5fc5\u987b\u5b9e\u73b0 ",(0,s.jsx)(n.code,{children:"Properties"})," trait\uff08\u901a\u5e38\u901a\u8fc7\u6d3e\u751f\uff09\uff0c\u5e76\u4e14\u53ef\u4ee5\u6307\u5b9a\u67d0\u4e9b\u5c5e\u6027\uff08properties\uff09\u662f\u5fc5\u9700\u7684\u8fd8\u662f\u53ef\u9009\u7684\u3002\u521b\u5efa\u548c\u66f4\u65b0\u7ec4\u4ef6\u65f6\u4f7f\u7528\u6b64\u7c7b\u578b\u3002\u901a\u5e38\u7684\u505a\u6cd5\u662f\u5728\u7ec4\u4ef6\u6a21\u5757\u4e2d\u521b\u5efa\u4e00\u4e2a\u53eb\u505a ",(0,s.jsx)(n.code,{children:"Props"})," \u7684\u7ed3\u6784\u4f53\u5e76\u5c06\u5176\u7528\u4f5c\u7ec4\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"Properties"})," \u7c7b\u578b\u3002\u901a\u5e38\u5c06\u201cproperties\u201d\u7f29\u5199\u4e3a\u201cprops\u201d\u3002\u7531\u4e8e props \u662f\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u4e0b\u6765\u7684\uff0c\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u7684\u6839\u7ec4\u4ef6\u901a\u5e38\u6709\u4e00\u4e2a\u7c7b\u578b\u4e3a ",(0,s.jsx)(n.code,{children:"()"})," \u7684 ",(0,s.jsx)(n.code,{children:"Properties"}),"\u3002\u5982\u679c\u4f60\u5e0c\u671b\u4e3a\u6839\u7ec4\u4ef6\u6307\u5b9a\u5c5e\u6027\uff08properties\uff09\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"App::mount_with_props"})," \u65b9\u6cd5\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var s=r(6540);const o={},t=s.createContext(o);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);