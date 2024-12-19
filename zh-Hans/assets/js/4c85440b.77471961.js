"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7743],{7570:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(4848),i=r(8453);const s={title:"Server-side Rendering",description:"Render Yew on the server-side."},o="Server-side Rendering",d={id:"advanced-topics/server-side-rendering",title:"Server-side Rendering",description:"Render Yew on the server-side.",source:"@site/versioned_docs/version-0.21/advanced-topics/server-side-rendering.md",sourceDirName:"advanced-topics",slug:"/advanced-topics/server-side-rendering",permalink:"/zh-Hans/docs/advanced-topics/server-side-rendering",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/advanced-topics/server-side-rendering.md",tags:[],version:"0.21",frontMatter:{title:"Server-side Rendering",description:"Render Yew on the server-side."},sidebar:"docs",previous:{title:"Portals",permalink:"/zh-Hans/docs/advanced-topics/portals"},next:{title:"Immutable Types",permalink:"/zh-Hans/docs/advanced-topics/immutable"}},a={},c=[{value:"How it Works",id:"how-it-works",level:2},{value:"Component Lifecycle",id:"component-lifecycle",level:2},{value:"Data Fetching during Server-side Rendering",id:"data-fetching-during-server-side-rendering",level:2},{value:"SSR Hydration",id:"ssr-hydration",level:2},{value:"Component Lifecycle during hydration",id:"component-lifecycle-during-hydration",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"server-side-rendering",children:"Server-side Rendering"})}),"\n",(0,t.jsx)(n.p,{children:"By default, Yew components render on the client side. When a viewer\r\nvisits a website, the server sends a skeleton HTML file without any actual\r\ncontent and a WebAssembly bundle to the browser.\r\nEverything is rendered on the client side by the WebAssembly\r\nbundle. This is known as client-side rendering."}),"\n",(0,t.jsx)(n.p,{children:"This approach works fine for most websites, with some caveats:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Users will not be able to see anything until the entire WebAssembly\r\nbundle is downloaded and the initial render has been completed.\r\nThis can result in a poor experience for users on a slow network."}),"\n",(0,t.jsx)(n.li,{children:"Some search engines do not support dynamically rendered web content and\r\nthose who do usually rank dynamic websites lower in the search results."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To solve these problems, we can render our website on the server side."}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,t.jsxs)(n.p,{children:["Yew provides a ",(0,t.jsx)(n.code,{children:"ServerRenderer"})," to render pages on the\r\nserver side."]}),"\n",(0,t.jsxs)(n.p,{children:["To render Yew components on the server side, you can create a renderer\r\nwith ",(0,t.jsx)(n.code,{children:"ServerRenderer::<App>::new()"})," and call ",(0,t.jsx)(n.code,{children:"renderer.render().await"}),"\r\nto render ",(0,t.jsx)(n.code,{children:"<App />"})," into a ",(0,t.jsx)(n.code,{children:"String"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse yew::ServerRenderer;\r\n\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! {<div>{"Hello, World!"}</div>}\r\n}\r\n\r\n// we use `flavor = "current_thread"` so this snippet can be tested in CI,\r\n// where tests are run in a WASM environment. You likely want to use\r\n// the (default) `multi_thread` favor as:\r\n// #[tokio::main]\r\n#[tokio::main(flavor = "current_thread")]\r\nasync fn no_main() {\r\n    let renderer = ServerRenderer::<App>::new();\r\n\r\n    let rendered = renderer.render().await;\r\n\r\n    // Prints: <div>Hello, World!</div>\r\n    println!("{}", rendered);\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"component-lifecycle",children:"Component Lifecycle"}),"\n",(0,t.jsx)(n.p,{children:"The recommended way of working with server-side rendering is\r\nfunction components."}),"\n",(0,t.jsxs)(n.p,{children:["All hooks other than ",(0,t.jsx)(n.code,{children:"use_effect"})," (and ",(0,t.jsx)(n.code,{children:"use_effect_with"}),")\r\nwill function normally until a component successfully renders into ",(0,t.jsx)(n.code,{children:"Html"}),"\r\nfor the first time."]}),"\n",(0,t.jsx)(n.admonition,{title:"Web APIs are not available!",type:"caution",children:(0,t.jsxs)(n.p,{children:["Web APIs such as ",(0,t.jsx)(n.code,{children:"web_sys"})," are not available when your component is\r\nrendering on the server side.\r\nYour application will panic if you try to use them.\r\nYou should isolate logics that need Web APIs in ",(0,t.jsx)(n.code,{children:"use_effect"})," or\r\n",(0,t.jsx)(n.code,{children:"use_effect_with"})," as effects are not executed during server-side rendering."]})}),"\n",(0,t.jsxs)(n.admonition,{title:"Struct Components",type:"danger",children:[(0,t.jsxs)(n.p,{children:["While it is possible to use Struct Components with server-side rendering,\r\nthere are no clear boundaries between client-side safe logic like the\r\n",(0,t.jsx)(n.code,{children:"use_effect"})," hook for function components and lifecycle events are invoked\r\nin a different order than the client side."]}),(0,t.jsxs)(n.p,{children:["In addition, Struct Components will continue to accept messages until all of its\r\nchildren are rendered and ",(0,t.jsx)(n.code,{children:"destroy"})," method is called. Developers need to\r\nmake sure no messages possibly passed to components would link to logic\r\nthat makes use of Web APIs."]}),(0,t.jsx)(n.p,{children:"When designing an application with server-side rendering support,\r\nprefer function components unless you have a good reason not to."})]}),"\n",(0,t.jsx)(n.h2,{id:"data-fetching-during-server-side-rendering",children:"Data Fetching during Server-side Rendering"}),"\n",(0,t.jsx)(n.p,{children:"Data fetching is one of the difficult points with server-side rendering and hydration."}),"\n",(0,t.jsx)(n.p,{children:"Traditionally, when a component renders, it is instantly available\r\n(outputs a virtual DOM to be rendered). This works fine when the\r\ncomponent does not want to fetch any data. But what happens if the component\r\nwants to fetch some data during rendering?"}),"\n",(0,t.jsx)(n.p,{children:"In the past, there was no mechanism for Yew to detect whether a component is still\r\nfetching data. The data-fetching client is responsible to implement\r\na solution to detect what is being requested during the initial render and triggers\r\na second render after requests are fulfilled. The server repeats this process until\r\nno more pending requests are added during a render before returning a response."}),"\n",(0,t.jsx)(n.p,{children:"This not only wastes CPU resources by repeatedly rendering components,\r\nbut the data client also needs to provide a way to make the data fetched on the\r\nserver side available during the hydration process to make sure that the\r\nvirtual DOM returned by the initial render is consistent with the\r\nserver-side rendered DOM tree which can be hard to implement."}),"\n",(0,t.jsxs)(n.p,{children:["Yew takes a different approach by trying to solve this issue with ",(0,t.jsx)(n.code,{children:"<Suspense />"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Suspense is a special component that when used on the client side, provides a\r\nway to show a fallback UI while the component is fetching\r\ndata (suspended) and resumes to normal UI when the data fetching completes."}),"\n",(0,t.jsx)(n.p,{children:"When the application is rendered on the server side, Yew waits until a\r\ncomponent is no longer suspended before serializing it into the string\r\nbuffer."}),"\n",(0,t.jsxs)(n.p,{children:["During the hydration process, elements within a ",(0,t.jsx)(n.code,{children:"<Suspense />"})," component\r\nremains dehydrated until all of its child components are no longer\r\nsuspended."]}),"\n",(0,t.jsx)(n.p,{children:"With this approach, developers can build a client-agnostic, SSR-ready\r\napplication with data fetching with very little effort."}),"\n",(0,t.jsx)(n.h2,{id:"ssr-hydration",children:"SSR Hydration"}),"\n",(0,t.jsxs)(n.p,{children:["Hydration is the process that connects a Yew application to the\r\nserver-side generated HTML file. By default, ",(0,t.jsx)(n.code,{children:"ServerRender"})," prints\r\nhydratable HTML string which includes additional information to facilitate hydration.\r\nWhen the ",(0,t.jsx)(n.code,{children:"Renderer::hydrate"})," method is called, instead of starting rendering from\r\nscratch, Yew will reconcile the Virtual DOM generated by the application\r\nwith the HTML string generated by the server renderer."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["To successfully hydrate an HTML representation created by the\r\n",(0,t.jsx)(n.code,{children:"ServerRenderer"}),", the client must produce a Virtual DOM layout that\r\nexactly matches the one used for SSR including components that do not\r\ncontain any elements. If you have any component that is only useful in\r\none implementation, you may want to use a ",(0,t.jsx)(n.code,{children:"PhantomComponent"})," to fill the\r\nposition of the extra component."]})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The hydration can only succeed if the real DOM matches the expected DOM\r\nafter initial render of the SSR output (static HTML) by browser. If your HTML is\r\nnot spec-compliant, the hydration ",(0,t.jsx)(n.em,{children:"may"})," fail. Browsers may change the DOM structure\r\nof the incorrect HTML, causing the actual DOM to be different from the expected DOM.\r\nFor example, ",(0,t.jsxs)(n.a,{href:"https://github.com/yewstack/yew/issues/2684",children:["if you have a ",(0,t.jsx)(n.code,{children:"<table>"})," without a ",(0,t.jsx)(n.code,{children:"<tbody>"}),", the browser may add a ",(0,t.jsx)(n.code,{children:"<tbody>"})," to the DOM"]})]})}),"\n",(0,t.jsx)(n.h2,{id:"component-lifecycle-during-hydration",children:"Component Lifecycle during hydration"}),"\n",(0,t.jsxs)(n.p,{children:["During Hydration, components schedule 2 consecutive renders after it is\r\ncreated. Any effects are called after the second render completes.\r\nIt is important to make sure that the render function of your\r\ncomponent is free of side effects. It should not mutate any states or trigger\r\nadditional renders. If your component currently mutates states or triggers\r\nadditional renders, move them into a ",(0,t.jsx)(n.code,{children:"use_effect"})," hook."]}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to use Struct Components with server-side rendering in\r\nhydration, the view function will be called\r\nmultiple times before the rendered function will be called.\r\nThe DOM is considered as not connected until the rendered function is called,\r\nyou should prevent any access to rendered nodes\r\nuntil ",(0,t.jsx)(n.code,{children:"rendered()"})," method is called."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use yew::prelude::*;\r\nuse yew::Renderer;\r\n\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! {<div>{"Hello, World!"}</div>}\r\n}\r\n\r\nfn main() {\r\n    let renderer = Renderer::<App>::new();\r\n\r\n    // hydrates everything under body element, removes trailing\r\n    // elements (if any).\r\n    renderer.hydrate();\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example: ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/simple_ssr",children:"simple_ssr"}),"\r\nExample: ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/ssr_router",children:"ssr_router"})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Server-side rendering is currently experimental. If you find a bug, please file\r\nan issue on ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/issues/new?assignees=&labels=bug&template=bug_report.md&title=",children:"GitHub"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);