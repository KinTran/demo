"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2438],{9735:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=o(4848),s=o(8453);const i={title:"Function Components",slug:"/concepts/function-components"},c=void 0,r={id:"concepts/function-components/introduction",title:"Function Components",description:"Lets revisit this previous statement:",source:"@site/versioned_docs/version-0.20/concepts/function-components/introduction.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components",permalink:"/demo/ja/docs/0.20/concepts/function-components",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/function-components/introduction.mdx",tags:[],version:"0.20",frontMatter:{title:"Function Components",slug:"/concepts/function-components"},sidebar:"docs",previous:{title:"web-sys",permalink:"/demo/ja/docs/0.20/concepts/basic-web-technologies/web-sys"},next:{title:"Properties",permalink:"/demo/ja/docs/0.20/concepts/function-components/properties"}},l={},a=[{value:"What are Components?",id:"what-are-components",level:2},{value:"Two flavours of Yew Components",id:"two-flavours-of-yew-components",level:2},{value:"Creating function components",id:"creating-function-components",level:2},{value:"What happens to components",id:"what-happens-to-components",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Lets revisit this previous statement:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Yew centrally operates on the idea of keeping everything that a reusable piece of\r\nUI may need in one place - rust files."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'We will refine this statement, by introducing the concept that will define the logic and\r\npresentation behaviour of an application: "components".'}),"\n",(0,t.jsx)(n.h2,{id:"what-are-components",children:"What are Components?"}),"\n",(0,t.jsx)(n.p,{children:"Components are the building blocks of Yew."}),"\n",(0,t.jsx)(n.p,{children:"They:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Take arguments in form of ",(0,t.jsx)(n.a,{href:"/demo/ja/docs/0.20/concepts/function-components/properties",children:"Props"})]}),"\n",(0,t.jsx)(n.li,{children:"Can have their own state"}),"\n",(0,t.jsx)(n.li,{children:"Compute pieces of HTML visible to the user (DOM)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"two-flavours-of-yew-components",children:"Two flavours of Yew Components"}),"\n",(0,t.jsx)(n.p,{children:"You are currently reading about function components - the recommended way to write components\r\nwhen starting with Yew and when writing simple presentation logic."}),"\n",(0,t.jsxs)(n.p,{children:["There is a more advanced, but less accessible, way to write components - ",(0,t.jsx)(n.a,{href:"/demo/ja/docs/0.20/advanced-topics/struct-components/introduction",children:"Struct components"}),".\r\nThey allow very detailed control, though you will not need that level of detail most of the time."]}),"\n",(0,t.jsx)(n.h2,{id:"creating-function-components",children:"Creating function components"}),"\n",(0,t.jsxs)(n.p,{children:["To create a function component add the ",(0,t.jsx)(n.code,{children:"#[function_component]"})," attribute to a function.\r\nBy convention, the function is named in PascalCase, like all components, to contrast its\r\nuse to normal html elements inside the ",(0,t.jsx)(n.code,{children:"html!"})," macro."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Html};\r\n\r\n#[function_component]\r\nfn HelloWorld() -> Html {\r\n    html! { "Hello world" }\r\n}\r\n\r\n// Then somewhere else you can use the component inside `html!`\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! { <HelloWorld /> }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"what-happens-to-components",children:"What happens to components"}),"\n",(0,t.jsxs)(n.p,{children:["When rendering, Yew will build a virtual tree of these components.\r\nIt will call the view function of each (function) component to compute a virtual version (VDOM) of the DOM\r\nthat you as the library user see as the ",(0,t.jsx)(n.code,{children:"Html"})," type.\r\nFor the previous example this would look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xhtml",children:'<App>\r\n  <HelloWorld>\r\n    <p>"Hello world"</p>\r\n  </HelloWord>\r\n</App>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When an update is necessary, Yew will again call the view function and reconcile the new virtual DOM with its\r\nprevious version and only propagate the new/changed/necessary parts to the actual DOM.\r\nThis is what we call ",(0,t.jsx)(n.strong,{children:"rendering"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Behind the scenes ",(0,t.jsx)(n.code,{children:"Html"})," is just an alias for ",(0,t.jsx)(n.code,{children:"VNode"})," - virtual node."]})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var t=o(6540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);