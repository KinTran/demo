"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3695],{6112:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=n(4848),c=n(8453);const t={title:"Hooks",slug:"/concepts/function-components/hooks"},i=void 0,r={id:"concepts/function-components/hooks/introduction",title:"Hooks",description:"Hooks",source:"@site/versioned_docs/version-0.20/concepts/function-components/hooks/introduction.mdx",sourceDirName:"concepts/function-components/hooks",slug:"/concepts/function-components/hooks",permalink:"/docs/0.20/concepts/function-components/hooks",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/function-components/hooks/introduction.mdx",tags:[],version:"0.20",frontMatter:{title:"Hooks",slug:"/concepts/function-components/hooks"},sidebar:"docs",previous:{title:"Pure Components",permalink:"/docs/0.20/concepts/function-components/pure-components"},next:{title:"Custom Hooks",permalink:"/docs/0.20/concepts/function-components/hooks/custom-hooks"}},l={},d=[{value:"Hooks",id:"hooks",level:2},{value:"Rules of hooks",id:"rules-of-hooks",level:2},{value:"Pre-defined Hooks",id:"pre-defined-hooks",level:3},{value:"Custom Hooks",id:"custom-hooks",level:3},{value:"Further reading",id:"further-reading",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"hooks",children:"Hooks"}),"\n",(0,s.jsx)(o.p,{children:"Hooks are functions that let you store state and perform side-effects."}),"\n",(0,s.jsxs)(o.p,{children:["Yew comes with a few pre-defined Hooks. You can also create your own or discover many ",(0,s.jsx)(o.a,{href:"/community/awesome#hooks",children:"community made hooks"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"rules-of-hooks",children:"Rules of hooks"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["A hook function name always has to start with ",(0,s.jsx)(o.code,{children:"use_"})]}),"\n",(0,s.jsxs)(o.li,{children:["Hooks can only be used in the following locations:","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Top level of a function / hook."}),"\n",(0,s.jsx)(o.li,{children:"Blocks inside a function / hook, given it's not already branched."}),"\n",(0,s.jsxs)(o.li,{children:["In the condition of a top level ",(0,s.jsx)(o.code,{children:"if"})," expression inside a function / hook."]}),"\n",(0,s.jsxs)(o.li,{children:["In the scrutinee of a top level ",(0,s.jsx)(o.code,{children:"match"})," expression inside a function / hook."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["Hooks must be called in the same order for every render. Returning early is only allowed when using ",(0,s.jsx)(o.a,{href:"/docs/0.20/concepts/suspense",children:"Suspense"})]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"These rules are enforced by either compile time or run-time errors."}),"\n",(0,s.jsx)(o.h3,{id:"pre-defined-hooks",children:"Pre-defined Hooks"}),"\n",(0,s.jsx)(o.p,{children:"Yew comes with the following predefined Hooks:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_state"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_state_eq"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_memo"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_callback"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_mut_ref"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_node_ref"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_reducer"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_reducer_eq"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_effect"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_effect_with_deps"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_context"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"use_force_update"})}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["The documentation for these hooks can be found in the ",(0,s.jsx)(o.a,{href:"https://docs.rs/yew/0.20.0/yew/functional/index.html",children:"Yew API docs"})]}),"\n",(0,s.jsx)(o.h3,{id:"custom-hooks",children:"Custom Hooks"}),"\n",(0,s.jsxs)(o.p,{children:["There are cases where you want to define your own Hooks to encapsulate potentially stateful logic from a component into reusable functions.\r\nSee the ",(0,s.jsx)(o.a,{href:"/docs/0.20/concepts/function-components/hooks/custom-hooks#defining-custom-hooks",children:"Defining custom hooks"})," section for more information."]}),"\n",(0,s.jsx)(o.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["The React documentation has a section on ",(0,s.jsx)(o.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:"React hooks"}),".\r\nThese are not exactly the same as Yew's hooks, but the underlying concept is similar."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>r});var s=n(6540);const c={},t=s.createContext(c);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);