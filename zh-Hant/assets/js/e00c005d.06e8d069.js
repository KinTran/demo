"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1096],{3422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(4848),r=t(8453);const i={title:"Announcing Yew 0.22",authors:["langyo"]},s=void 0,a={permalink:"/zh-Hant/blog/2024/10/14/release-0-22",editUrl:"https://google.com/blog/2024-10-14-release-0-22.md",source:"@site/blog/2024-10-14-release-0-22.md",title:"Announcing Yew 0.22",description:"What's new",date:"2024-10-14T00:00:00.000Z",tags:[],readingTime:1.86,hasTruncateMarker:!0,authors:[{name:"langyo",title:"Contributor of Yew",url:"https://github.com/langyo",imageURL:"https://github.com/langyo.png",key:"langyo",page:null}],frontMatter:{title:"Announcing Yew 0.22",authors:["langyo"]},unlisted:!1,nextItem:{title:"Announcing Yew 0.21",permalink:"/zh-Hant/blog/2023/09/23/release-0-21"}},l={authorsImageUrls:[void 0]},c=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"SSR on WASI",id:"ssr-on-wasi",level:3},{value:"Call for Contributors",id:"call-for-contributors",level:2},{value:"Thanks!",id:"thanks",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"whats-new",children:"What's new"}),"\n",(0,o.jsx)(n.h3,{id:"ssr-on-wasi",children:"SSR on WASI"}),"\n",(0,o.jsx)(n.p,{children:"Before Yew 0.22, server-side rendering (SSR) was only possible on the native target. With Yew 0.22, you can now render your Yew application on the WebAssembly System Interface (WASI) target."}),"\n",(0,o.jsxs)(n.p,{children:["Since the old SSR implementation will create new tasks directly in the asynchronous context directly (based on ",(0,o.jsx)(n.code,{children:"prokio"}),"). It only allowed in a multi-threaded environment that it is not compatible with WASI. So the new version added a dedicated one for a single-threaded environment that rendering function to support single-threaded scenes."]}),"\n",(0,o.jsxs)(n.p,{children:["Learn more at ",(0,o.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/wasi_ssr_module/src/main.rs",children:"Server-side rendering example on WASI environment"})]}),"\n",(0,o.jsx)(n.h2,{id:"call-for-contributors",children:"Call for Contributors"}),"\n",(0,o.jsx)(n.p,{children:"The Yew project thrives on community involvement, and we welcome contributors with open arms. Whether you're an experienced Rust developer or just starting your journey, there are plenty of ways to get involved and make a meaningful impact on Yew's growth."}),"\n",(0,o.jsx)(n.p,{children:"Here are some areas where you can contribute:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Code Contributions:"})," If you're passionate about web development with Rust, consider contributing code to Yew. Whether it's fixing bugs, adding new features, or improving documentation, your code can help make Yew even better."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Documentation:"})," Clear and comprehensive documentation is vital for any project's success. You can contribute by improving documentation, writing tutorials, or creating examples that help others understand and use Yew effectively."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Testing and Bug Reporting:"})," Testing Yew and reporting bugs you encounter is a valuable contribution. Your feedback helps us identify and fix issues, ensuring a more stable framework for everyone."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Community Support:"})," Join discussions, chat rooms (we have our own Discord and Matrix!), or social media to assist other developers using Yew. Sharing your knowledge and helping others solve problems is a fantastic way to contribute."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Contributing to open-source projects like Yew is not only a way to give back to the community but also an excellent opportunity to learn, collaborate, and enhance your skills."}),"\n",(0,o.jsx)(n.p,{children:"To get started, check out the Yew GitHub repository and the contribution guidelines. Your contributions are highly appreciated and play a crucial role in shaping the future of Yew. Join us in this exciting journey!"}),"\n",(0,o.jsx)(n.h2,{id:"thanks",children:"Thanks!"}),"\n",(0,o.jsx)(n.p,{children:"Many people came together to create Yew 0.22. We couldn't have done it without all of you. Thanks!"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://github.com/yewstack/yew/blob/master/CHANGELOG.md",children:"the full changelog"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);