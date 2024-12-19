"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5365],{3349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var o=n(4848),s=n(8453);const d={title:"From 0.1.0 to 0.2.0"},r=void 0,i={id:"migration-guides/yew-agent/from-0_1_0-to-0_2_0",title:"From 0.1.0 to 0.2.0",description:"Removal of Context and Job Agents",source:"@site/docs/migration-guides/yew-agent/from-0_1_0-to-0_2_0.mdx",sourceDirName:"migration-guides/yew-agent",slug:"/migration-guides/yew-agent/from-0_1_0-to-0_2_0",permalink:"/zh-Hans/docs/next/migration-guides/yew-agent/from-0_1_0-to-0_2_0",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/migration-guides/yew-agent/from-0_1_0-to-0_2_0.mdx",tags:[],version:"current",frontMatter:{title:"From 0.1.0 to 0.2.0"},sidebar:"docs",previous:{title:"From 0.18.0 to 0.19.0",permalink:"/zh-Hans/docs/next/migration-guides/yew/from-0_18_0-to-0_19_0"},next:{title:"From 0.0.0 to 0.1.0",permalink:"/zh-Hans/docs/next/migration-guides/yew-agent/from-0_0_0-to-0_1_0"}},a={},c=[{value:"Removal of <code>Context</code> and <code>Job</code> Agents",id:"removal-of-context-and-job-agents",level:2},{value:"<code>Threaded</code> has been separated into <code>PublicAgent</code> and <code>PrivateAgent</code>",id:"threaded-has-been-separated-into-publicagent-and-privateagent",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"removal-of-context-and-job-agents",children:["Removal of ",(0,o.jsx)(t.code,{children:"Context"})," and ",(0,o.jsx)(t.code,{children:"Job"})," Agents"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Context"})," and ",(0,o.jsx)(t.code,{children:"Job"})," Agents have been removed in favour of Yew's Context API."]}),"\n",(0,o.jsxs)(t.p,{children:["You can see the updated ",(0,o.jsx)(t.a,{href:"https://github.com/yewstack/yew/tree/master/examples/pub_sub",children:(0,o.jsx)(t.code,{children:"pub_sub"})}),"\r\nwhich demonstrate how to use the context API."]}),"\n",(0,o.jsxs)(t.p,{children:["For users of ",(0,o.jsx)(t.code,{children:"yew_agent::utils::store"}),", you may switch to third party solutions like: ",(0,o.jsx)(t.a,{href:"https://github.com/intendednull/yewdux",children:"Yewdux"})," or ",(0,o.jsx)(t.a,{href:"https://github.com/futursolo/bounce",children:"Bounce"}),"."]}),"\n",(0,o.jsxs)(t.h2,{id:"threaded-has-been-separated-into-publicagent-and-privateagent",children:[(0,o.jsx)(t.code,{children:"Threaded"})," has been separated into ",(0,o.jsx)(t.code,{children:"PublicAgent"})," and ",(0,o.jsx)(t.code,{children:"PrivateAgent"})]}),"\n",(0,o.jsxs)(t.p,{children:["Replace ",(0,o.jsx)(t.code,{children:"use yew_agent::Threaded;"})," with ",(0,o.jsx)(t.code,{children:"use yew_agent::PublicAgent;"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Threaded"})," was never implemented for Private Agents.\r\nAll existing web worker-based agents are Public Agents."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(6540);const s={},d=o.createContext(s);function r(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);