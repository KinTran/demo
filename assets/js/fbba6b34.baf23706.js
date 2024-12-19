"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1917],{3062:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=o(4848),s=o(8453);const r={title:"From 0.19.0 to 0.20.0"},i=void 0,d={id:"migration-guides/yew/from-0_19_0-to-0_20_0",title:"From 0.19.0 to 0.20.0",description:"asbody variant of start_app is removed",source:"@site/docs/migration-guides/yew/from-0_19_0-to-0_20_0.mdx",sourceDirName:"migration-guides/yew",slug:"/migration-guides/yew/from-0_19_0-to-0_20_0",permalink:"/docs/next/migration-guides/yew/from-0_19_0-to-0_20_0",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/migration-guides/yew/from-0_19_0-to-0_20_0.mdx",tags:[],version:"current",frontMatter:{title:"From 0.19.0 to 0.20.0"},sidebar:"docs",previous:{title:"From 0.20.0 to 0.21.0",permalink:"/docs/next/migration-guides/yew/from-0_20_0-to-0_21_0"},next:{title:"From 0.18.0 to 0.19.0",permalink:"/docs/next/migration-guides/yew/from-0_18_0-to-0_19_0"}},a={},c=[{value:"<code>_as_body</code> variant of <code>start_app</code> is removed",id:"_as_body-variant-of-start_app-is-removed",level:2},{value:"New Hooks and Function Components API",id:"new-hooks-and-function-components-api",level:2},{value:"Automatic Message Batching",id:"automatic-message-batching",level:2},{value:"Yew Renderer",id:"yew-renderer",level:2},{value:"<code>ref</code> prop for Components",id:"ref-prop-for-components",level:2},{value:"<code>changed</code> Method on Components",id:"changed-method-on-components",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"_as_body-variant-of-start_app-is-removed",children:[(0,t.jsx)(n.code,{children:"_as_body"})," variant of ",(0,t.jsx)(n.code,{children:"start_app"})," is removed"]}),"\n",(0,t.jsxs)(n.p,{children:["This method of controlling body has caused issues in event registration and\r\nSSR hydration. They have been removed. Read more in the ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/pull/2346",children:"github issue"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"new-hooks-and-function-components-api",children:"New Hooks and Function Components API"}),"\n",(0,t.jsx)(n.p,{children:"The Function Components and Hooks API are re-implemented with a different mechanism:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["User-defined hooks are now required to have a prefix ",(0,t.jsx)(n.code,{children:"use_"})," and must be marked with the ",(0,t.jsx)(n.code,{children:"#[hook]"})," attribute."]}),"\n",(0,t.jsx)(n.li,{children:"Hooks will now report compile errors if they are not called from the top level of a function component\r\nor a user defined hook. The limitation existed in the previous version of Yew as well. In this version,\r\nIt is reported as a compile time error."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"automatic-message-batching",children:"Automatic Message Batching"}),"\n",(0,t.jsx)(n.p,{children:"The scheduler now shedules its start to the end of the browser event loop.\r\nAll messages queued during in the meantime will be run in batch.\r\nThe running order of messages between components are no longer guaranteed, but\r\nmessages sent to the same component is still acknowledged in an FIFO order.\r\nIf multiple updates will result in a render, the component will be rendered\r\nonce."}),"\n",(0,t.jsxs)(n.admonition,{title:"What this means to developers?",type:"info",children:[(0,t.jsx)(n.p,{children:"For struct components, this means that if you send 2 messages to 2 different\r\ncomponents, they will not be guaranteed to be seen in the same order they are\r\nsent. If you send 2 messages to the same component, they will still be passed\r\nto the component in the order they are sent. The messages are not sent to the\r\ncomponent immediately so you should not assume that when the component receives\r\na message it still has the same state at the time the message is created."}),(0,t.jsxs)(n.p,{children:["For function components, if you store states with ",(0,t.jsx)(n.code,{children:"use_state(_eq)"}),"\r\nand the new value of that state depends on the previous value,\r\nyou may want to switch to ",(0,t.jsx)(n.code,{children:"use_reducer(_eq)"}),". The new value of the state will\r\nnot be visible / acknowledged until the next time the component is rendered.\r\nThe reducer action works similar to messages for struct components and\r\nwill be sent to the reducer function in the same order as they are dispatched.\r\nThe reducer function can see all previous changes at the time they are run."]})]}),"\n",(0,t.jsx)(n.h2,{id:"yew-renderer",children:"Yew Renderer"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"start_app*"})," has been replaced by ",(0,t.jsx)(n.code,{children:"yew::Renderer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You need to enable feature ",(0,t.jsx)(n.code,{children:"csr"})," to use ",(0,t.jsx)(n.code,{children:"yew::Renderer"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"ref-prop-for-components",children:[(0,t.jsx)(n.code,{children:"ref"})," prop for Components"]}),"\n",(0,t.jsxs)(n.p,{children:["Components no longer have a ",(0,t.jsx)(n.code,{children:"ref"})," prop. Trying to add a node ref to a component\r\nwill result in a compile error"]}),"\n",(0,t.jsxs)(n.p,{children:["Previously node ref passed to a component was bound to the first element rendered by it.\r\nIf this behavior is still desired, it is recommended to use add a ",(0,t.jsx)(n.code,{children:"r#ref"})," field to the\r\ncomponent's properties and bind it manually"]}),"\n",(0,t.jsxs)(n.h2,{id:"changed-method-on-components",children:[(0,t.jsx)(n.code,{children:"changed"})," Method on Components"]}),"\n",(0,t.jsxs)(n.p,{children:["The method ",(0,t.jsx)(n.code,{children:"fn changed()"})," has now a new argument to provide the old properties\r\nto the function."]}),"\n",(0,t.jsx)(n.p,{children:"The old method's signature was:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"fn changed(&mut self, ctx: &Context<Self>) -> bool\n"})}),"\n",(0,t.jsx)(n.p,{children:"The new method's signature is now:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"fn changed(&mut self, ctx: &Context<Self>, old_props: &Self::Properties) -> bool\n"})}),"\n",(0,t.jsx)(n.p,{children:"This can be adjusted automatically in your code using this bash script (save\r\nyour code before running this!):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"perl -p -i -e  's/fn changed\\(&mut self, (\\w+): &Context<Self>\\)/fn changed(&mut self, $1: &Context<Self>, _old_props: &Self::Properties)/g' $(find . -name \\*.rs)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>d});var t=o(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);