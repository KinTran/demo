"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[681],{7720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(4848),i=t(8453);const o={title:"Announcing Yew 0.21",authors:["hamza"]},s=void 0,a={permalink:"/ja/blog/2023/09/23/release-0-21",editUrl:"https://google.com/blog/2023-09-23-release-0-21.md",source:"@site/blog/2023-09-23-release-0-21.md",title:"Announcing Yew 0.21",description:"The Yew development team is thrilled to unveil Yew 0.21.0, a significant milestone in the journey of empowering developers to create dependable and high-performance web applications with Rust.",date:"2023-09-23T00:00:00.000Z",tags:[],readingTime:3.45,hasTruncateMarker:!0,authors:[{name:"Muhammad Hamza",title:"Maintainer of Yew",url:"https://github.com/ranile",imageURL:"https://github.com/ranile.png",key:"hamza",page:null}],frontMatter:{title:"Announcing Yew 0.21",authors:["hamza"]},unlisted:!1,prevItem:{title:"Announcing Yew 0.22",permalink:"/ja/blog/2024/10/14/release-0-22"},nextItem:{title:"Releasing Yew 0.20",permalink:"/ja/blog/2022/11/24/release-0-20"}},l={authorsImageUrls:[void 0]},c=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"1. Changing Signatures: A Shift in Hook Dependencies",id:"1-changing-signatures-a-shift-in-hook-dependencies",level:3},{value:"2. Versatile Child Types",id:"2-versatile-child-types",level:3},{value:"3. Agents: A Complete Rewrite",id:"3-agents-a-complete-rewrite",level:3},{value:"4. Performance Improvements: A Faster and Smoother Experience",id:"4-performance-improvements-a-faster-and-smoother-experience",level:3},{value:"Call for Contributors",id:"call-for-contributors",level:2},{value:"Thanks!",id:"thanks",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Yew development team is thrilled to unveil Yew 0.21.0, a significant milestone in the journey of empowering developers to create dependable and high-performance web applications with Rust.\r\nLet's dive into the major highlights of this release."}),"\n",(0,r.jsx)(n.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsx)(n.h3,{id:"1-changing-signatures-a-shift-in-hook-dependencies",children:"1. Changing Signatures: A Shift in Hook Dependencies"}),"\n",(0,r.jsx)(n.p,{children:"One of the significant changes in Yew 0.21 is the adjustment to the signature of hooks that accept dependencies.\r\nDependencies used to be passed as the second argument after the closure. However, now they're passed as the first argument before the closure."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use_effect_with_deps(deps, move |deps: Vec<i32>| {\r\n    // Do something with dependencies\r\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"The reason behind swapping the order of dependencies in the code snippet is to address a specific use case.\r\nIn situations where the same value is needed both to compute a dependency and to be moved by value into the closure, the new order simplifies the code and improves readability and ergonomics."}),"\n",(0,r.jsxs)(n.p,{children:["This is a big breaking change so we've provided ",(0,r.jsx)(n.a,{href:"https://yew.rs/docs/migration-guides/yew/from-0_20_0-to-0_21_0#automated-refactor",children:"a way to automate the refactor"})]}),"\n",(0,r.jsx)(n.h3,{id:"2-versatile-child-types",children:"2. Versatile Child Types"}),"\n",(0,r.jsxs)(n.p,{children:["Yew now allows you to use any type as children within your components. This means you're no longer limited to just the ",(0,r.jsx)(n.code,{children:"Children"})," type.\r\nInstead, you can use any type, even ",(0,r.jsx)(n.code,{children:"Html"})," or closures, unlocking patterns such as:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'html! {\r\n    <Comp>\r\n        {|p: RenderProps| html!{<>{"Hello, "}{p.name}</>}}\r\n    </Comp>\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-agents-a-complete-rewrite",children:"3. Agents: A Complete Rewrite"}),"\n",(0,r.jsxs)(n.p,{children:["Yew 0.21 brings a complete rewrite of ",(0,r.jsx)(n.code,{children:"yew-agent"}),". This streamlines and simplifies the way workers operate. Here's what you need to know:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Introducing Providers:"})," Say goodbye to the old ",(0,r.jsx)(n.code,{children:"Worker::bridge()"})," method. Now, you can use the use ",(0,r.jsx)(n.code,{children:"WorkerProvider"})," / ",(0,r.jsx)(n.code,{children:"ReactorProvider"})," / ",(0,r.jsx)(n.code,{children:"OneshotProvider"})," as per your need, by creating them using the hooks."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WorkerLink to WorkerScope:"})," We've removed WorkerLink in favor of WorkerScope. This change simplifies the worker architecture, making it more straightforward to manage and maintain."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"There are now 3 types of agents to be used, depending upon the situation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Worker Agent:"})," The original agent that uses an actor model, designed to handle complex states."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Oneshot Agent:"})," Designed for scenarios where you expect a single input and a single output for each agent."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Reactor Agent:"})," Ideal for situations where multiple inputs and multiple outputs are needed for each agent."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Learn more in ",(0,r.jsx)(n.a,{href:"https://docs.rs/yew-agent/latest/yew_agent/",children:"documentation of yew-agent"})]}),"\n",(0,r.jsx)(n.h3,{id:"4-performance-improvements-a-faster-and-smoother-experience",children:"4. Performance Improvements: A Faster and Smoother Experience"}),"\n",(0,r.jsx)(n.p,{children:"Yew 0.21 brings substantial performance improvements. Your web applications will run faster and more efficiently, thanks to optimizations that reduce memory usage and enhance rendering."}),"\n",(0,r.jsx)(n.h2,{id:"call-for-contributors",children:"Call for Contributors"}),"\n",(0,r.jsx)(n.p,{children:"The Yew project thrives on community involvement, and we welcome contributors with open arms. Whether you're an experienced Rust developer or just starting your journey, there are plenty of ways to get involved and make a meaningful impact on Yew's growth."}),"\n",(0,r.jsx)(n.p,{children:"Here are some areas where you can contribute:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code Contributions:"})," If you're passionate about web development with Rust, consider contributing code to Yew. Whether it's fixing bugs, adding new features, or improving documentation, your code can help make Yew even better."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Documentation:"})," Clear and comprehensive documentation is vital for any project's success. You can contribute by improving documentation, writing tutorials, or creating examples that help others understand and use Yew effectively."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Testing and Bug Reporting:"})," Testing Yew and reporting bugs you encounter is a valuable contribution. Your feedback helps us identify and fix issues, ensuring a more stable framework for everyone."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Community Support:"})," Join discussions, chat rooms (we have our own Discord and Matrix!), or social media to assist other developers using Yew. Sharing your knowledge and helping others solve problems is a fantastic way to contribute."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Contributing to open-source projects like Yew is not only a way to give back to the community but also an excellent opportunity to learn, collaborate, and enhance your skills."}),"\n",(0,r.jsx)(n.p,{children:"To get started, check out the Yew GitHub repository and the contribution guidelines. Your contributions are highly appreciated and play a crucial role in shaping the future of Yew. Join us in this exciting journey!"}),"\n",(0,r.jsx)(n.h2,{id:"thanks",children:"Thanks!"}),"\n",(0,r.jsx)(n.p,{children:"Many people came together to create Yew 0.21. We couldn't have done it without all of you. Thanks!"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/blob/master/CHANGELOG.md",children:"the full changelog"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);