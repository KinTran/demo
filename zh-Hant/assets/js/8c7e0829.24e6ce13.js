"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2755],{3577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(4848),r=t(8453);const s={title:"\u81ea\u8a02 Hooks"},c=void 0,a={id:"concepts/function-components/hooks/custom-hooks",title:"\u81ea\u8a02 Hooks",description:"\u5b9a\u7fa9\u81ea\u8a02 Hooks",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/concepts/function-components/hooks/custom-hooks.mdx",sourceDirName:"concepts/function-components/hooks",slug:"/concepts/function-components/hooks/custom-hooks",permalink:"/demo/zh-Hant/docs/next/concepts/function-components/hooks/custom-hooks",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/function-components/hooks/custom-hooks.mdx",tags:[],version:"current",frontMatter:{title:"\u81ea\u8a02 Hooks"},sidebar:"docs",previous:{title:"Hooks",permalink:"/demo/zh-Hant/docs/next/concepts/function-components/hooks"},next:{title:"\u7bc0\u9ede\u5f15\u7528",permalink:"/demo/zh-Hant/docs/next/concepts/function-components/node-refs"}},d={},l=[{value:"\u5b9a\u7fa9\u81ea\u8a02 Hooks",id:"\u5b9a\u7fa9\u81ea\u8a02-hooks",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u5b9a\u7fa9\u81ea\u8a02-hooks",children:"\u5b9a\u7fa9\u81ea\u8a02 Hooks"}),"\n",(0,o.jsx)(n.p,{children:"\u5143\u4ef6\u7684\u6709\u72c0\u614b\u908f\u8f2f\u53ef\u4ee5\u900f\u904e\u5efa\u7acb\u81ea\u8a02 Hooks \u4f86\u63d0\u53d6\u70ba\u53ef\u91cd\u8907\u4f7f\u7528\u7684\u51fd\u6578\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5047\u8a2d\u6211\u5011\u5e0c\u671b\u5efa\u7acb\u4e00\u500b\u4e8b\u4ef6\u76e3\u807d\u5668\uff0c\u76e3\u807d ",(0,o.jsx)(n.code,{children:"window"})," \u7269\u4ef6\u4e0a\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse gloo::events::EventListener;\r\nuse gloo::utils::window;\r\nuse std::mem::drop;\r\n\r\n\r\n#[function_component(ShowStorageChanged)]\r\npub fn show_storage_changed() -> Html {\r\n    let state_storage_changed = use_state(|| false);\r\n\r\n    {\r\n        let state_storage_changed = state_storage_changed.clone();\r\n        use_effect(|| {\r\n            let listener = EventListener::new(&window(), "storage", move |_| state_storage_changed.set(true));\r\n\r\n            move || { drop(listener); }\r\n        });\r\n    }\r\n\r\n    html! { <div>{"Storage Event Fired: "}{*state_storage_changed}</div> }\r\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u9019\u6bb5\u7a0b\u5f0f\u78bc\u6709\u4e00\u500b\u554f\u984c\uff1a\u908f\u8f2f\u7121\u6cd5\u88ab\u53e6\u4e00\u500b\u5143\u4ef6\u91cd\u8907\u4f7f\u7528\u3002\u5982\u679c\u6211\u5011\u5efa\u7acb\u53e6\u4e00\u500b\u76e3\u807d\u4e0d\u540c\u4e8b\u4ef6\u7684\u5143\u4ef6\uff0c\u800c\u4e0d\u662f\u8907\u88fd\u7a0b\u5f0f\u78bc\uff0c\u6211\u5011\u53ef\u4ee5\u5c07\u908f\u8f2f\u79fb\u5165\u81ea\u8a02 hook\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u5011\u5c07\u9996\u5148\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,o.jsx)(n.code,{children:"use_event"})," \u7684\u65b0\u51fd\u6578\u3002 ",(0,o.jsx)(n.code,{children:"use_"})," \u524d\u7db4\u8868\u793a\u51fd\u6578\u662f\u4e00\u500b hook\u3002\u6b64\u51fd\u6578\u5c07\u63a5\u53d7\u4e00\u500b\u4e8b\u4ef6\u76ee\u6a19\u3001\u4e00\u500b\u4e8b\u4ef6\u985e\u578b\u548c\u4e00\u500b\u56de\u547c\u3002\u6240\u6709 hook \u5fc5\u9808\u5728\u5176\u51fd\u6578\u5b9a\u7fa9\u4e0a\u6a19\u8a18\u70ba ",(0,o.jsx)(n.code,{children:"#[hook]"}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use web_sys::{Event, EventTarget};\r\nuse std::borrow::Cow;\r\nuse gloo::events::EventListener;\r\nuse yew::prelude::*;\r\n\r\n#[hook]\r\npub fn use_event<E, F>(target: &EventTarget, event_type: E, callback: F)\r\nwhere\r\n    E: Into<Cow<'static, str>>,\r\n    F: Fn(&Event) + 'static,\r\n{\r\n    todo!()\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u9019\u500b\u7c21\u55ae\u7684 hook \u53ef\u4ee5\u900f\u904e\u7d44\u5408\u5167\u5efa hook \u4f86\u5275\u5efa\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"use_effect_with"})," hook\uff0c\u56e0\u6b64\u7576 hook \u53c3\u6578\u8b8a\u66f4\u6642\uff0c\u53ef\u4ee5\u91cd\u65b0\u5efa\u7acb\u4e8b\u4ef6\u76e3\u807d\u5668\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use yew::prelude::*;\r\nuse web_sys::{Event, EventTarget};\r\nuse std::borrow::Cow;\r\nuse std::rc::Rc;\r\nuse gloo::events::EventListener;\r\n\r\n#[hook]\r\npub fn use_event<E, F>(target: &EventTarget, event_type: E, callback: F)\r\nwhere\r\n    E: Into<Cow<'static, str>>,\r\n    F: Fn(Event) + 'static,\r\n{\r\n    #[derive(PartialEq, Clone)]\r\n    struct EventDependents {\r\n        target: EventTarget,\r\n        event_type: Cow<'static, str>,\r\n        callback: Callback<Event>,\r\n    }\r\n\r\n    let deps = EventDependents {\r\n        target: target.clone(),\r\n        event_type: event_type.into(),\r\n        callback: Callback::from(callback),\r\n    };\r\n\r\n    use_effect_with(\r\n        deps,\r\n        |deps| {\r\n            let EventDependents {\r\n                target,\r\n                event_type,\r\n                callback,\r\n            } = deps.clone();\r\n\r\n            let listener = EventListener::new(&target, event_type, move |e| {\r\n                callback.emit(e.clone());\r\n            });\r\n\r\n            move || {\r\n                drop(listener);\r\n            }\r\n        },\r\n    );\r\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5118\u7ba1\u9019\u7a2e\u65b9\u6cd5\u5728\u5e7e\u4e4e\u6240\u6709\u60c5\u6cc1\u4e0b\u90fd\u6709\u6548\uff0c\u4f46\u5b83\u7121\u6cd5\u7528\u65bc\u7de8\u5beb\u50cf\u6211\u5011\u5df2\u7d93\u4f7f\u7528\u7684\u9810\u5b9a\u7fa9 hook \u90a3\u6a23\u7684\u57fa\u672c hook\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u67e5\u770b ",(0,o.jsx)(n.a,{href:"https://docs.rs/yew",children:"docs.rs"})," \u4e0a\u7684\u6587\u4ef6\u4ee5\u53ca ",(0,o.jsx)(n.code,{children:"hooks"})," \u76ee\u9304\uff0c\u67e5\u770b\u9810\u5148\u5b9a\u7fa9 hook \u7684\u5be6\u4f5c\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);