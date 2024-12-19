"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5941],{400:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(4848),r=t(8453);const i={title:"How it works",description:"Low level details about the framework"},a="Low-level library internals",s={id:"advanced-topics/how-it-works",title:"How it works",description:"Low level details about the framework",source:"@site/versioned_docs/version-0.19.0/advanced-topics/how-it-works.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/how-it-works",permalink:"/zh-Hant/docs/0.19.0/advanced-topics/how-it-works",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/advanced-topics/how-it-works.mdx",tags:[],version:"0.19.0",frontMatter:{title:"How it works",description:"Low level details about the framework"},sidebar:"docs",previous:{title:"Router",permalink:"/zh-Hant/docs/0.19.0/concepts/router"},next:{title:"Optimizations",permalink:"/zh-Hant/docs/0.19.0/advanced-topics/optimizations"}},c={},d=[{value:"Under the hood of the <code>html!</code> macro",id:"under-the-hood-of-the-html-macro",level:2},{value:"What is a virtual DOM?",id:"what-is-a-virtual-dom",level:2},{value:"Yew scheduler and component-scoped event loop",id:"yew-scheduler-and-component-scoped-event-loop",level:2},{value:"Further reading",id:"further-reading",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"low-level-library-internals",children:"Low-level library internals"})}),"\n",(0,n.jsxs)(o.h2,{id:"under-the-hood-of-the-html-macro",children:["Under the hood of the ",(0,n.jsx)(o.code,{children:"html!"})," macro"]}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"html!"})," macro turns code written in a custom HTML-like syntax into valid Rust code. Using this\r\nmacro is not necessary for developing Yew applications, but it is recommended. The code generated\r\nby this macro makes use of the public Yew library API which can be used directly if you wish. Note\r\nthat some methods used are undocumented intentionally to avoid accidental misuse. With each\r\nupdate of ",(0,n.jsx)(o.code,{children:"yew-macro"}),", the generated code will be more efficient and handle any breaking changes\r\nwithout many (if any) modifications to the ",(0,n.jsx)(o.code,{children:"html!"})," syntax."]}),"\n",(0,n.jsxs)(o.p,{children:["Because the ",(0,n.jsx)(o.code,{children:"html!"})," macro allows you to write code in a declarative style, your UI layout code will\r\nclosely match the HTML that is generated to the page. This becomes increasingly useful as your\r\napplication gets more interactive and your codebase gets larger. Rather than manually writing the\r\nall of the code to manipulate the DOM yourself, the macro will handle it for you."]}),"\n",(0,n.jsxs)(o.p,{children:["Using the ",(0,n.jsx)(o.code,{children:"html!"})," macro can feel pretty magic, but it has nothing to hide. If you're curious about\r\nhow it works, try expanding the ",(0,n.jsx)(o.code,{children:"html!"})," macro calls in your program. There's a useful command called\r\n",(0,n.jsx)(o.code,{children:"cargo expand"})," which allows you to see the expansion of Rust macros. ",(0,n.jsx)(o.code,{children:"cargo expand"})," isn't shipped with\r\n",(0,n.jsx)(o.code,{children:"cargo"})," by default so you'll need to install it with ",(0,n.jsx)(o.code,{children:"cargo install cargo-expand"})," if you haven't\r\nalready."]}),"\n",(0,n.jsxs)(o.p,{children:["Note that when viewing expanded macro code, you're likely to encounter unusually verbose code. The\r\nreason is because generated code can sometimes clash with other code in an application. In order\r\nto prevent issues, ",(0,n.jsx)(o.code,{children:"proc_macro"}),' "hygiene" is adhered to. Some examples include:']}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Instead of using ",(0,n.jsx)(o.code,{children:"yew::<module>"})," the macro generates ",(0,n.jsx)(o.code,{children:"::yew::<module>"})," to make sure that the\r\nYew package is referenced correctly. This is also why ",(0,n.jsx)(o.code,{children:"::alloc::vec::Vec::new()"})," is called instead\r\nof just ",(0,n.jsx)(o.code,{children:"Vec::new()"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Due to potential trait method name collisions, ",(0,n.jsx)(o.code,{children:"<Type as Trait>"})," is used to make sure that we're using items from the right trait."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"what-is-a-virtual-dom",children:"What is a virtual DOM?"}),"\n",(0,n.jsx)(o.p,{children:'The DOM ("document object model") is a representation of the HTML content that is managed by the browser\r\nfor your web page. A "virtual" DOM is simply a copy of the DOM that is held in application memory. Managing\r\na virtual DOM results in a higher memory overhead, but allows for batching and faster reads by avoiding\r\nor delaying the use of browser APIs.'}),"\n",(0,n.jsx)(o.p,{children:'Having a copy of the DOM in memory can be really helpful for libraries which promote the use of\r\ndeclarative UIs. Rather than needing specific code for describing how the DOM should be modified\r\nin response to a user event, the library can use a generalized approach with DOM "diffing". When a Yew\r\ncomponent is updated and wants to change how it is rendered, the Yew library will build a second copy\r\nof the virtual DOM and directly compare to a virtual DOM which mirrors what is currently on screen.\r\nThe "diff" (or difference) between the two can be broken down into incremental updates and applied in\r\na batch with browser APIs. Once the updates are applied, the old virtual DOM copy is discarded and the\r\nnew copy is saved for future diff checks.'}),"\n",(0,n.jsx)(o.p,{children:'This "diff" algorithm can be optimized over time to improve the performance of complex applications.\r\nSince Yew applications are run with WebAssembly, we believe that Yew has a competitive edge to adopt\r\nmore sophisticated algorithms in the future.'}),"\n",(0,n.jsx)(o.p,{children:'The Yew virtual DOM is not exactly one-to-one with the browser DOM. It also includes "lists" and\r\n"components" for organizing DOM elements. A list can simply be an ordered list of elements but can\r\nalso be much more powerful. By annotating each list element with a "key", application developers\r\ncan help Yew make additional optimizations to ensure that when a list changes, the least amount\r\nof work is done to calculate the diff update. Similarly, components provide custom logic to\r\nindicate whether a re-render is required to help with performance.'}),"\n",(0,n.jsx)(o.h2,{id:"yew-scheduler-and-component-scoped-event-loop",children:"Yew scheduler and component-scoped event loop"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.em,{children:["Contribute to the docs \u2013 explain how ",(0,n.jsx)(o.code,{children:"yew::scheduler"})," and ",(0,n.jsx)(o.code,{children:"yew::html::scope"})," work in depth"]})}),"\n",(0,n.jsx)(o.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.rust-lang.org/stable/book/ch19-06-macros.html",children:"More information about macros from the Rust Book"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsxs)(o.a,{href:"https://github.com/dtolnay/cargo-expand",children:["More information about ",(0,n.jsx)(o.code,{children:"cargo-expand"})]})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsxs)(o.a,{href:"https://docs.rs/yew/*/yew/virtual_dom/index.html",children:["The API documentation for ",(0,n.jsx)(o.code,{children:"yew::virtual_dom"})]})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>s});var n=t(6540);const r={},i=n.createContext(r);function a(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);