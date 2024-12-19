"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2691],{6051:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var o=n(4848),r=n(8453);const t={title:"\u81ea\u5b9a\u4e49\u94a9\u5b50\uff08Custom Hooks\uff09",description:"\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684 Hooks"},c=void 0,i={id:"concepts/function-components/hooks/custom-hooks",title:"\u81ea\u5b9a\u4e49\u94a9\u5b50\uff08Custom Hooks\uff09",description:"\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684 Hooks",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.21/concepts/function-components/hooks/custom-hooks.mdx",sourceDirName:"concepts/function-components/hooks",slug:"/concepts/function-components/hooks/custom-hooks",permalink:"/zh-Hans/docs/concepts/function-components/hooks/custom-hooks",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/function-components/hooks/custom-hooks.mdx",tags:[],version:"0.21",frontMatter:{title:"\u81ea\u5b9a\u4e49\u94a9\u5b50\uff08Custom Hooks\uff09",description:"\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684 Hooks"},sidebar:"docs",previous:{title:"Hooks",permalink:"/zh-Hans/docs/concepts/function-components/hooks"},next:{title:"Node Refs",permalink:"/zh-Hans/docs/concepts/function-components/node-refs"}},l={},d=[{value:"\u5b9a\u4e49\u81ea\u5b9a\u4e49\u94a9\u5b50",id:"\u5b9a\u4e49\u81ea\u5b9a\u4e49\u94a9\u5b50",level:2}];function u(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"\u5b9a\u4e49\u81ea\u5b9a\u4e49\u94a9\u5b50",children:"\u5b9a\u4e49\u81ea\u5b9a\u4e49\u94a9\u5b50"}),"\n",(0,o.jsx)(s.p,{children:"\u7ec4\u4ef6\u4e2d\u4e0e\u72b6\u6001\u6709\u5173\u7684\u903b\u8f91\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u81ea\u5b9a\u4e49 Hooks \u63d0\u53d6\u5230\u51fd\u6570\u4e2d\u3002"}),"\n",(0,o.jsx)(s.p,{children:"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u8ba2\u9605\u4e86\u4e00\u4e2a\u4ee3\u7406\uff08agent\uff09\u5e76\u4e14\u4f1a\u663e\u793a\u53d1\u9001\u7ed9\u5b83\u7684\u6d88\u606f\u3002"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-rust",children:"#[function_component(ShowMessages)]\r\npub fn show_messages() -> Html {\r\n    let (state, set_state) = use_state(|| vec![]);\r\n\r\n    {\r\n        let mut state = Rc::clone(&state);\r\n        use_effect(move || {\r\n            let producer = EventBus::bridge(Callback::from(move |msg| {\r\n                let mut messages = (*state).clone();\r\n                messages.push(msg);\r\n                set_state(messages)\r\n            }));\r\n\r\n            || drop(producer)\r\n        });\r\n    }\r\n\r\n    let output = state.iter().map(|it| html! { <p>{ it }</p> });\r\n    html! { <div>{ for output }</div> }\r\n}\n"})}),"\n",(0,o.jsx)(s.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u6709\u4e00\u4e2a\u95ee\u9898\uff1a\u903b\u8f91\u4e0d\u80fd\u88ab\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u91cd\u7528\u3002\u5982\u679c\u6211\u4eec\u6784\u5efa\u53e6\u4e00\u4e2a\u8ddf\u8e2a\u6d88\u606f\u7684\u7ec4\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u903b\u8f91\u79fb\u52a8\u5230\u81ea\u5b9a\u4e49\u94a9\u5b50\u4e2d\uff0c\u800c\u4e0d\u662f\u590d\u5236\u4ee3\u7801\u3002"}),"\n",(0,o.jsxs)(s.p,{children:["\u6211\u4eec\u5c06\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,o.jsx)(s.code,{children:"use_subscribe"}),"\u7684\u65b0\u51fd\u6570\u3002 ",(0,o.jsx)(s.code,{children:"use_"}),"\u524d\u7f00\u901a\u5e38\u8868\u793a\u6b64\u51fd\u6570\u662f\u4e00\u4e2a\u94a9\u5b50\u3002\u8fd9\u4e2a\u51fd\u6570\u5c06\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c2\u6570\u5e76\u8fd4\u56de",(0,o.jsx)(s.code,{children:"Rc<RefCell<Vec<String>>>"})," \u3002"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-rust",children:"fn use_subscribe() -> Rc<RefCell<Vec<String>>> {\r\n    // ...\r\n}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["\u94a9\u5b50\u7684\u903b\u8f91\u5728",(0,o.jsx)(s.code,{children:"use_hook"}),"\u7684\u56de\u8c03\u4e2d\u3002 ",(0,o.jsx)(s.code,{children:"use_hook"}),"\u6307\u7684\u662f\u81ea\u5b9a\u4e49 Hook \u7684\u5904\u7406\u51fd\u6570\u3002\u5b83\u63a5\u53d7 2 \u4e2a\u53c2\u6570\uff1a ",(0,o.jsx)(s.code,{children:"hook_runner"}),"\u548c",(0,o.jsx)(s.code,{children:"initial_state_producer"})," \u3002"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"hook_runner"}),"\u4e2d\u5305\u542b\u4e86\u6240\u6709\u94a9\u5b50\u7684\u903b\u8f91\uff0c\u5b83\u7684\u56de\u8c03\u7684\u8fd4\u56de\u503c\u53c8\u4f1a\u88ab",(0,o.jsx)(s.code,{children:"use_hook"}),"\u8fd4\u56de\u3002 ",(0,o.jsx)(s.code,{children:"hook_runner"}),"\u9700\u8981 2 \u4e2a\u53c2\u6570\uff1a\u5206\u522b\u662f\u5bf9\u94a9\u5b50\u548c",(0,o.jsx)(s.code,{children:"hook_callback"}),"\u5b83\u4eec\u4e24\u4e2a\u7684\u5185\u90e8\u72b6\u6001\u7684\u53ef\u53d8\u5f15\u7528\u3002 \u800c",(0,o.jsx)(s.code,{children:"hook_callback"}),"\u540c\u6837\u4e5f\u8981 2 \u4e2a\u53c2\u6570\uff1a\u4e00\u4e2a\u56de\u8c03\u548c\u4e00\u4e2a bool\uff0c\u56de\u8c03\u63a5\u53d7",(0,o.jsx)(s.code,{children:"internal_state"})," \uff0c\u4e5f\u5c31\u662f\u5bf9\u5185\u90e8\u72b6\u6001\u5b9e\u4f8b\u7684\u53ef\u53d8\u5f15\u7528\uff0c\u5e76\u4e14\u4f1a\u8c03\u6267\u884c\u5b9e\u9645\u7684\u66f4\u6539\uff0c\u8fd8\u4f1a\u8fd4\u56de\u8868\u793a",(0,o.jsx)(s.code,{children:"ShouldRender"}),"\u7684\u5e03\u5c14\u503c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570 bool \u7684\u7528\u5904\u662f\u6307\u793a\u5b83\u662f\u5426\u5728\u7ec4\u4ef6\u6e32\u67d3\u540e\u8fd0\u884c\u3002",(0,o.jsx)(s.code,{children:"use_hook"}),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,o.jsx)(s.code,{children:"initial_state_producer"}),"\u63a5\u53d7\u7528\u4e8e\u521b\u5efa\u5185\u90e8\u72b6\u6001\u5b9e\u4f8b\u7684\u56de\u8c03\u3002\u8fd9\u91cc\u8bf4\u7684\u5185\u90e8\u72b6\u6001\u6307\u7684\u662f\u4e00\u4e2a\u5b9e\u73b0\u4e86",(0,o.jsx)(s.code,{children:"Hook"})," trait \u7684\u7ed3\u6784\u4f53\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u73b0\u5728\u8ba9\u6211\u4eec\u4e3a",(0,o.jsx)(s.code,{children:"use_subscribe"}),"\u94a9\u5b50\u521b\u5efa\u72b6\u6001\uff08state struct\uff09\u3002"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-rust",children:"/// `use_subscribe` internal state\r\nstruct UseSubscribeState {\r\n    /// holds all the messages received\r\n    pub messages: Rc<RefCell<Vec<String>>>,\r\n}\r\n\r\nimpl Hook for UseSubscribeState {}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["\u63a5\u4e0b\u6765\u6211\u4eec\u4e3a",(0,o.jsx)(s.code,{children:"use_subscribe"}),"\u6dfb\u52a0\u5b9e\u9645\u903b\u8f91\u3002"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-rust",children:"fn use_subscribe() -> Rc<RefCell<Vec<String>>> {\r\n    use_hook(\r\n        // hook's handler. all the logic goes in here\r\n        |state: &mut UseSubscribeState, hook_callback| {\r\n            // calling other Hooks inside a hook\r\n            use_effect(move || {\r\n                let producer = EventBus::bridge(Callback::from(move |msg| {\r\n                    hook_callback(\r\n                        // where the mutations of state are performed\r\n                        |state| {\r\n                            (*state.messages).borrow_mut().deref_mut().push(msg);\r\n                            true // should re-render\r\n                        }, false // run post-render\r\n                    )\r\n                }));\r\n\r\n                || drop(producer)\r\n            });\r\n\r\n            // return from hook\r\n            state.messages.clone()\r\n        },\r\n        // initial state producer\r\n        || UseSubscribeState { messages: Rc::new(RefCell::new(vec![])) },\r\n    )\r\n}\n"})}),"\n",(0,o.jsx)(s.p,{children:"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u94a9\u5b50\u4e86\uff1a"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-rust",children:"#[function_component(ShowMessages)]\r\npub fn show_messages() -> Html {\r\n    let state = use_subscribe();\r\n    let output = state.borrow().deref().into_iter().map(|it| html! { <p>{ it }</p> });\r\n\r\n    html! { <div>{ for output }</div> }\r\n}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\u521b\u5efa\u81ea\u5b9a\u4e49\u94a9\u5b50\u65f6",(0,o.jsx)(s.code,{children:"use_hook"}),"\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u5b83\u4eec\u53ea\u662f\u7528\u6765\u5305\u542b\u5176\u4ed6\u94a9\u5b50\u3002\u901a\u5e38\u5e94\u907f\u514d\u4f7f\u7528",(0,o.jsx)(s.code,{children:"use_hook"}),"\u3002"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-rust",children:"fn use_subscribe() -> Rc<Vec<String>> {\r\n    let (state, set_state) = use_state(Vec::new);\r\n\r\n    use_effect(move || {\r\n        let producer = EventBus::bridge(Callback::from(move |msg| {\r\n            let mut messages = (*state).clone();\r\n            messages.push(msg);\r\n            set_state(messages)\r\n        }));\r\n        || drop(producer)\r\n    });\r\n\r\n    state\r\n}\n"})})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var o=n(6540);const r={},t=o.createContext(r);function c(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);