"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6492],{9763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(4848),a=t(8453);const i={title:"Build a sample app"},l=void 0,o={id:"getting-started/build-a-sample-app",title:"Build a sample app",description:"Create Project",source:"@site/versioned_docs/version-0.19.0/getting-started/build-a-sample-app.mdx",sourceDirName:"getting-started",slug:"/getting-started/build-a-sample-app",permalink:"/demo/zh-Hans/docs/0.19.0/getting-started/build-a-sample-app",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/getting-started/build-a-sample-app.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Build a sample app"},sidebar:"docs",previous:{title:"Using wasm-pack",permalink:"/demo/zh-Hans/docs/0.19.0/getting-started/project-setup/using-wasm-pack"},next:{title:"Examples",permalink:"/demo/zh-Hans/docs/0.19.0/getting-started/examples"}},s={},d=[{value:"Create Project",id:"create-project",level:2},{value:"Run a hello world example",id:"run-a-hello-world-example",level:2},{value:"Converting the project into a Yew web application",id:"converting-the-project-into-a-yew-web-application",level:2},{value:"Update Cargo.toml",id:"update-cargotoml",level:3},{value:"Update main.rs",id:"update-mainrs",level:3},{value:"Create index.html",id:"create-indexhtml",level:3},{value:"View your web application",id:"view-your-web-application",level:2},{value:"Congratulations",id:"congratulations",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-project",children:"Create Project"}),"\n",(0,r.jsx)(n.p,{children:"To get started, create a new cargo project."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo new yew-app\n"})}),"\n",(0,r.jsx)(n.p,{children:"Open the newly created directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd yew-app\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-a-hello-world-example",children:"Run a hello world example"}),"\n",(0,r.jsx)(n.p,{children:'To verify the Rust environment is setup, run the initial project using the cargo build tool. After output about the build process, you should see the expected "Hello World" message.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo run\n"})}),"\n",(0,r.jsx)(n.h2,{id:"converting-the-project-into-a-yew-web-application",children:"Converting the project into a Yew web application"}),"\n",(0,r.jsx)(n.p,{children:"To convert this simple command line application to a basic Yew web application, a few changes are needed."}),"\n",(0,r.jsx)(n.h3,{id:"update-cargotoml",children:"Update Cargo.toml"}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"yew"})," to the list of dependencies."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:"title=Cargo.toml",children:'[package]\r\nname = "yew-app"\r\nversion = "0.1.0"\r\nedition = "2018"\r\n\r\n[dependencies]\r\n# you can check the latest version here: https://crates.io/crates/yew\r\nyew = "0.19"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"update-mainrs",children:"Update main.rs"}),"\n",(0,r.jsxs)(n.p,{children:["We need to generate a template which sets up a root Component called ",(0,r.jsx)(n.code,{children:"Model"})," which renders a button that updates its value when clicked.\r\nReplace the contents of ",(0,r.jsx)(n.code,{children:"src/main.rs"})," with the following code."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The line ",(0,r.jsx)(n.code,{children:"yew::start_app::<Model>()"})," inside ",(0,r.jsx)(n.code,{children:"main()"})," starts your application and mounts it to the page's ",(0,r.jsx)(n.code,{children:"<body>"})," tag.",(0,r.jsx)(n.br,{}),"\n","If you would like to start your application with any dynamic properties, you can instead use ",(0,r.jsx)(n.code,{children:"yew::start_app_with_props::<Model>(..)"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",no_run, title=main.rs",children:'use yew::prelude::*;\r\n\r\nenum Msg {\r\n    AddOne,\r\n}\r\n\r\nstruct Model {\r\n    value: i64,\r\n}\r\n\r\nimpl Component for Model {\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_ctx: &Context<Self>) -> Self {\r\n        Self {\r\n            value: 0,\r\n        }\r\n    }\r\n\r\n    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {\r\n        match msg {\r\n            Msg::AddOne => {\r\n                self.value += 1;\r\n                // the value has changed so we need to\r\n                // re-render for it to appear on the page\r\n                true\r\n            }\r\n        }\r\n    }\r\n\r\n    fn view(&self, ctx: &Context<Self>) -> Html {\r\n        // This gives us a component\'s "`Scope`" which allows us to send messages, etc to the component.\r\n        let link = ctx.link();\r\n        html! {\r\n            <div>\r\n                <button onclick={link.callback(|_| Msg::AddOne)}>{ "+1" }</button>\r\n                <p>{ self.value }</p>\r\n            </div>\r\n        }\r\n    }\r\n}\r\n\r\nfn main() {\r\n    yew::start_app::<Model>();\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-indexhtml",children:"Create index.html"}),"\n",(0,r.jsxs)(n.p,{children:["Finally, add an ",(0,r.jsx)(n.code,{children:"index.html"})," file in the root directory of your app."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html,",metastring:"title=index.html",children:'<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset="utf-8" />\r\n    <title>Yew App</title>\r\n  </head>\r\n</html>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"view-your-web-application",children:"View your web application"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to build and serve the application locally."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"trunk serve\n"})}),"\n",(0,r.jsx)(n.p,{children:"Trunk will helpfully rebuild your application if you modify any of its files."}),"\n",(0,r.jsx)(n.h2,{id:"congratulations",children:"Congratulations"}),"\n",(0,r.jsx)(n.p,{children:"You have now successfully setup your Yew development environment, and built your first web application."}),"\n",(0,r.jsxs)(n.p,{children:["Experiment with this application and review the ",(0,r.jsx)(n.a,{href:"/demo/zh-Hans/docs/0.19.0/getting-started/examples",children:"examples"})," to further your learning."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);