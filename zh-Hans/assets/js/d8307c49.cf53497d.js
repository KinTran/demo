"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8625],{7183:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=s(4848),c=s(8453);const o={title:"Scope",description:"Component's Scope"},r=void 0,d={id:"advanced-topics/struct-components/scope",title:"Scope",description:"Component's Scope",source:"@site/versioned_docs/version-0.21/advanced-topics/struct-components/scope.mdx",sourceDirName:"advanced-topics/struct-components",slug:"/advanced-topics/struct-components/scope",permalink:"/zh-Hans/docs/advanced-topics/struct-components/scope",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/advanced-topics/struct-components/scope.mdx",tags:[],version:"0.21",frontMatter:{title:"Scope",description:"Component's Scope"},sidebar:"docs",previous:{title:"\u7ec4\u4ef6\uff08Components\uff09",permalink:"/zh-Hans/docs/advanced-topics/struct-components/lifecycle"},next:{title:"\u56de\u8c03\uff08Callbacks\uff09",permalink:"/zh-Hans/docs/advanced-topics/struct-components/callbacks"}},a={},i=[{value:"Component&#39;s <code>Scope&lt;_&gt;</code> API",id:"components-scope_-api",level:2},{value:"<code>send_message</code>",id:"send_message",level:3},{value:"<code>send_message_batch</code>",id:"send_message_batch",level:3},{value:"<code>callback</code>",id:"callback",level:3},{value:"<code>batch_callback</code>",id:"batch_callback",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"components-scope_-api",children:["Component's ",(0,t.jsx)(n.code,{children:"Scope<_>"})," API"]}),"\n",(0,t.jsxs)(n.p,{children:['The component "',(0,t.jsx)(n.code,{children:"Scope"}),'" is the mechanism through which components can create callbacks and update themselves\r\nusing messages. We obtain a reference to this by calling ',(0,t.jsx)(n.code,{children:"link()"})," on the context object passed to the component."]}),"\n",(0,t.jsx)(n.h3,{id:"send_message",children:(0,t.jsx)(n.code,{children:"send_message"})}),"\n",(0,t.jsxs)(n.p,{children:["Sends a message to the component.\r\nMessages are handled by the ",(0,t.jsx)(n.code,{children:"update"})," method which determines whether the component should re-render."]}),"\n",(0,t.jsx)(n.h3,{id:"send_message_batch",children:(0,t.jsx)(n.code,{children:"send_message_batch"})}),"\n",(0,t.jsxs)(n.p,{children:["Sends multiple messages to the component at the same time.\r\nThis is similar to ",(0,t.jsx)(n.code,{children:"send_message"})," but if any of the messages cause the ",(0,t.jsx)(n.code,{children:"update"})," method to return ",(0,t.jsx)(n.code,{children:"true"}),",\r\nthe component will re-render after all messages in the batch have been processed."]}),"\n",(0,t.jsx)(n.p,{children:"If the given vector is empty, this function does nothing."}),"\n",(0,t.jsx)(n.h3,{id:"callback",children:(0,t.jsx)(n.code,{children:"callback"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a callback that will send a message to the component when it is executed.\r\nUnder the hood, it will call ",(0,t.jsx)(n.code,{children:"send_message"})," with the message returned by the provided closure."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{html, Component, Context, Html};\r\n\r\nenum Msg {\r\n    Text(String),\r\n}\r\n\r\nstruct Comp;\r\n\r\nimpl Component for Comp {\r\n\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        // Create a callback that accepts some text and sends it\r\n        // to the component as the `Msg::Text` message variant.\r\n        // highlight-next-line\r\n        let cb = ctx.link().callback(|text: String| Msg::Text(text));\r\n\r\n        // The previous line is needlessly verbose to make it clearer.\r\n        // It can be simplified it to this:\r\n        // highlight-next-line\r\n        let cb = ctx.link().callback(Msg::Text);\r\n\r\n        // Will send `Msg::Text("Hello World!")` to the component.\r\n        // highlight-next-line\r\n        cb.emit("Hello World!".to_owned());\r\n\r\n        html! {\r\n            // html here\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"batch_callback",children:(0,t.jsx)(n.code,{children:"batch_callback"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a callback that will send a batch of messages to the component when it is executed.\r\nThe difference to ",(0,t.jsx)(n.code,{children:"callback"})," is that the closure passed to this method doesn't have to return a message.\r\nInstead, the closure can return either ",(0,t.jsx)(n.code,{children:"Vec<Msg>"})," or ",(0,t.jsx)(n.code,{children:"Option<Msg>"})," where ",(0,t.jsx)(n.code,{children:"Msg"})," is the component's message type."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Vec<Msg>"})," is treated as a batch of messages and uses ",(0,t.jsx)(n.code,{children:"send_message_batch"})," under the hood."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Option<Msg>"})," calls ",(0,t.jsx)(n.code,{children:"send_message"})," if it is ",(0,t.jsx)(n.code,{children:"Some"}),". If the value is ",(0,t.jsx)(n.code,{children:"None"}),", nothing happens.\r\nThis can be used in cases where, depending on the situation, an update isn't required."]}),"\n",(0,t.jsxs)(n.p,{children:["This is achieved using the ",(0,t.jsx)(n.code,{children:"SendAsMessage"})," trait which is only implemented for these types.\r\nYou can implement ",(0,t.jsx)(n.code,{children:"SendAsMessage"})," for your own types which allows you to use them in ",(0,t.jsx)(n.code,{children:"batch_callback"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(6540);const c={},o=t.createContext(c);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);