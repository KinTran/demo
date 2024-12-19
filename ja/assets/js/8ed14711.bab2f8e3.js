"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2438],{9735:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=t(4848),s=t(8453);const i={title:"Function Components",slug:"/concepts/function-components"},c=void 0,r={id:"concepts/function-components/introduction",title:"Function Components",description:"Lets revisit this previous statement:",source:"@site/versioned_docs/version-0.20/concepts/function-components/introduction.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components",permalink:"/ja/docs/0.20/concepts/function-components",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/function-components/introduction.mdx",tags:[],version:"0.20",frontMatter:{title:"Function Components",slug:"/concepts/function-components"},sidebar:"docs",previous:{title:"web-sys",permalink:"/ja/docs/0.20/concepts/basic-web-technologies/web-sys"},next:{title:"Properties",permalink:"/ja/docs/0.20/concepts/function-components/properties"}},l={},a=[{value:"What are Components?",id:"what-are-components",level:2},{value:"Two flavours of Yew Components",id:"two-flavours-of-yew-components",level:2},{value:"Creating function components",id:"creating-function-components",level:2},{value:"What happens to components",id:"what-happens-to-components",level:2}];function p(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Lets revisit this previous statement:"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"Yew centrally operates on the idea of keeping everything that a reusable piece of\r\nUI may need in one place - rust files."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:'We will refine this statement, by introducing the concept that will define the logic and\r\npresentation behaviour of an application: "components".'}),"\n",(0,o.jsx)(e.h2,{id:"what-are-components",children:"What are Components?"}),"\n",(0,o.jsx)(e.p,{children:"Components are the building blocks of Yew."}),"\n",(0,o.jsx)(e.p,{children:"They:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Take arguments in form of ",(0,o.jsx)(e.a,{href:"/ja/docs/0.20/concepts/function-components/properties",children:"Props"})]}),"\n",(0,o.jsx)(e.li,{children:"Can have their own state"}),"\n",(0,o.jsx)(e.li,{children:"Compute pieces of HTML visible to the user (DOM)"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"two-flavours-of-yew-components",children:"Two flavours of Yew Components"}),"\n",(0,o.jsx)(e.p,{children:"You are currently reading about function components - the recommended way to write components\r\nwhen starting with Yew and when writing simple presentation logic."}),"\n",(0,o.jsxs)(e.p,{children:["There is a more advanced, but less accessible, way to write components - ",(0,o.jsx)(e.a,{href:"/ja/docs/0.20/advanced-topics/struct-components/introduction",children:"Struct components"}),".\r\nThey allow very detailed control, though you will not need that level of detail most of the time."]}),"\n",(0,o.jsx)(e.h2,{id:"creating-function-components",children:"Creating function components"}),"\n",(0,o.jsxs)(e.p,{children:["To create a function component add the ",(0,o.jsx)(e.code,{children:"#[function_component]"})," attribute to a function.\r\nBy convention, the function is named in PascalCase, like all components, to contrast its\r\nuse to normal html elements inside the ",(0,o.jsx)(e.code,{children:"html!"})," macro."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use yew::{function_component, html, Html};\r\n\r\n#[function_component]\r\nfn HelloWorld() -> Html {\r\n    html! { "Hello world" }\r\n}\r\n\r\n// Then somewhere else you can use the component inside `html!`\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! { <HelloWorld /> }\r\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"what-happens-to-components",children:"What happens to components"}),"\n",(0,o.jsxs)(e.p,{children:["When rendering, Yew will build a virtual tree of these components.\r\nIt will call the view function of each (function) component to compute a virtual version (VDOM) of the DOM\r\nthat you as the library user see as the ",(0,o.jsx)(e.code,{children:"Html"})," type.\r\nFor the previous example this would look like this:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xhtml",children:'<App>\r\n  <HelloWorld>\r\n    <p>"Hello world"</p>\r\n  </HelloWord>\r\n</App>\n'})}),"\n",(0,o.jsxs)(e.p,{children:["When an update is necessary, Yew will again call the view function and reconcile the new virtual DOM with its\r\nprevious version and only propagate the new/changed/necessary parts to the actual DOM.\r\nThis is what we call ",(0,o.jsx)(e.strong,{children:"rendering"}),"."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["Behind the scenes ",(0,o.jsx)(e.code,{children:"Html"})," is just an alias for ",(0,o.jsx)(e.code,{children:"VNode"})," - virtual node."]})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function c(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);