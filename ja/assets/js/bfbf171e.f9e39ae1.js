"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9853],{8580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(4848),i=t(8453);const o={title:"Tutorial",slug:"/tutorial"},s=void 0,l={id:"tutorial/index",title:"Tutorial",description:"Introduction",source:"@site/versioned_docs/version-0.19.0/tutorial/index.mdx",sourceDirName:"tutorial",slug:"/tutorial",permalink:"/ja/docs/0.19.0/tutorial",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/tutorial/index.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Tutorial",slug:"/tutorial"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What we are going to build",id:"what-we-are-going-to-build",level:3},{value:"Setting up",id:"setting-up",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up the project",id:"setting-up-the-project",level:3},{value:"Our first static page",id:"our-first-static-page",level:2},{value:"Start the development server",id:"start-the-development-server",level:3},{value:"Congratulations",id:"congratulations",level:3},{value:"Building HTML",id:"building-html",level:2},{value:"Converting classic HTML",id:"converting-classic-html",level:3},{value:"Using Rust language constructs in the markup",id:"using-rust-language-constructs-in-the-markup",level:3},{value:"Components",id:"components",level:2},{value:"Making it interactive",id:"making-it-interactive",level:3},{value:"Handling state",id:"handling-state",level:3},{value:"Fetching data (using external REST API)",id:"fetching-data-using-external-rest-api",level:2},{value:"Wrapping up",id:"wrapping-up",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Styles",id:"styles",level:3},{value:"More libraries",id:"more-libraries",level:3},{value:"Learning more about Yew",id:"learning-more-about-yew",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["In this hands-on tutorial, we will take a look at how we can use Yew to build web applications.\r\n",(0,r.jsx)(n.strong,{children:"Yew"})," is a modern ",(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/",children:"Rust"})," framework for building front-end web apps using ",(0,r.jsx)(n.a,{href:"https://webassembly.org/",children:"WebAssembly"}),".\r\nYew encourages a reusable, maintainable, and well-structured architecture by leveraging Rust's powerful type system.\r\nA large ecosystem of community-created libraries, known in Rust as ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch07-01-packages-and-crates.html",children:"crates"}),",\r\nprovide components for commonly-used patterns such as state management.\r\n",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/",children:"Cargo"}),", the package manager for Rust, allows us to take advantage of the\r\nnumerous crates available on ",(0,r.jsx)(n.a,{href:"https://crates.io",children:"crates.io"}),", such as Yew."]}),"\n",(0,r.jsx)(n.h3,{id:"what-we-are-going-to-build",children:"What we are going to build"}),"\n",(0,r.jsx)(n.p,{children:"Rustconf is an intergalactic gathering of the Rust community that happens annually.\r\nRustconf 2020 had a plethora of talks that provided a good amount of information.\r\nIn this hands-on tutorial, we will be building a web application to help fellow Rustaceans\r\nget an overview of the talks and watch them all from one page."}),"\n",(0,r.jsx)(n.h2,{id:"setting-up",children:"Setting up"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To get started, let's make sure we have an up-to-date development environment.\r\nWe will need the following tools:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/",children:"Rust"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://trunkrs.dev/",children:(0,r.jsx)(n.code,{children:"trunk"})})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"wasm32-unknown-unknown"})," target, the WASM compiler and build target for Rust."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial also assumes you're already familiar with Rust. If you're new to Rust,\r\nthe free ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch00-00-introduction.html",children:"Rust Book"})," offers a great starting point for\r\nbeginners and continues to be an excellent resource even for experienced Rust developers."]}),"\n",(0,r.jsxs)(n.p,{children:["Ensure the latest version of Rust is installed by running ",(0,r.jsx)(n.code,{children:"rustup update"})," or by\r\n",(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"installing rust"})," if you haven't already done so already."]}),"\n",(0,r.jsxs)(n.p,{children:["After installing Rust, you can use Cargo to install ",(0,r.jsx)(n.code,{children:"trunk"})," by running:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo install trunk\n"})}),"\n",(0,r.jsx)(n.p,{children:"We will also need to add the WASM build target by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-the-project",children:"Setting up the project"}),"\n",(0,r.jsx)(n.p,{children:"First, create a new cargo project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo new yew-app\r\ncd yew-app\n"})}),"\n",(0,r.jsx)(n.p,{children:'To verify the Rust environment is set up properly, run the initial project using the cargo build tool.\r\nAfter output about the build process, you should see the expected "Hello, world!" message.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo run\n"})}),"\n",(0,r.jsx)(n.h2,{id:"our-first-static-page",children:"Our first static page"}),"\n",(0,r.jsx)(n.p,{children:"To convert this simple command line application to a basic Yew web application, a few changes are needed.\r\nUpdate the files as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:'title="Cargo.toml" {7}',children:'[package]\r\nname = "yew-app"\r\nversion = "0.1.0"\r\nedition = "2021"\r\n\r\n[dependencies]\r\n+ yew = "0.19"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:',no_run title="src/main.rs"',children:'use yew::prelude::*;\r\n\r\n#[function_component(App)]\r\nfn app() -> Html {\r\n    html! {\r\n        <h1>{ "Hello World" }</h1>\r\n    }\r\n}\r\n\r\nfn main() {\r\n    yew::start_app::<App>();\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now, let's create an ",(0,r.jsx)(n.code,{children:"index.html"})," at the root of the project."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!doctype html>\r\n<html lang="en">\r\n    <head> </head>\r\n    <body></body>\r\n</html>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"start-the-development-server",children:"Start the development server"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to build and serve the application locally."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"trunk serve --open\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Trunk will open your application in your default browser, watch the project directory and helpfully rebuild your\r\napplication if you modify any source files. If you are curious, you can run ",(0,r.jsx)(n.code,{children:"trunk help"})," and ",(0,r.jsx)(n.code,{children:"trunk help <subcommand>"}),"\r\nfor more details on what's happening."]}),"\n",(0,r.jsx)(n.h3,{id:"congratulations",children:"Congratulations"}),"\n",(0,r.jsx)(n.p,{children:"You have now successfully set up your Yew development environment and built your first Yew web application."}),"\n",(0,r.jsx)(n.h2,{id:"building-html",children:"Building HTML"}),"\n",(0,r.jsx)(n.p,{children:"Yew makes use of Rust's procedural macros and provides us with a syntax similar to JSX (an extension to JavaScript\r\nwhich allows you to write HTML-like code inside of JavaScript) to create the markup."}),"\n",(0,r.jsx)(n.h3,{id:"converting-classic-html",children:"Converting classic HTML"}),"\n",(0,r.jsxs)(n.p,{children:["Since we already have a pretty good idea of what our website will look like, we can simply translate our mental draft\r\ninto a representation compatible with ",(0,r.jsx)(n.code,{children:"html!"}),". If you're comfortable writing simple HTML, you should have no problem\r\nwriting marking inside ",(0,r.jsx)(n.code,{children:"html!"}),". It is important to note that the macro does differ from HTML in a few ways:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Expressions must be wrapped in curly braces (",(0,r.jsx)(n.code,{children:"{ }"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["There must only be one root node. If you want to have multiple elements without wrapping them in a container,\r\nan empty tag/fragment (",(0,r.jsx)(n.code,{children:"<> ... </>"}),") is used"]}),"\n",(0,r.jsx)(n.li,{children:"Elements must be closed properly."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We want to build a layout that looks something like this in raw HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<h1>RustConf Explorer</h1>\r\n<div>\r\n    <h3>Videos to watch</h3>\r\n    <p>John Doe: Building and breaking things</p>\r\n    <p>Jane Smith: The development process</p>\r\n    <p>Matt Miller: The Web 7.0</p>\r\n    <p>Tom Jerry: Mouseless development</p>\r\n</div>\r\n<div>\r\n    <h3>John Doe: Building and breaking things</h3>\r\n    <img\r\n        src="https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder"\r\n        alt="video thumbnail"\r\n    />\r\n</div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now, let's convert this HTML into ",(0,r.jsx)(n.code,{children:"html!"}),". Type (or copy/paste) the following snippet into the body of ",(0,r.jsx)(n.code,{children:"app"})," function\r\nsuch that the value of ",(0,r.jsx)(n.code,{children:"html!"})," is returned by the function"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'html! {\r\n    <>\r\n        <h1>{ "RustConf Explorer" }</h1>\r\n        <div>\r\n            <h3>{"Videos to watch"}</h3>\r\n            <p>{ "John Doe: Building and breaking things" }</p>\r\n            <p>{ "Jane Smith: The development process" }</p>\r\n            <p>{ "Matt Miller: The Web 7.0" }</p>\r\n            <p>{ "Tom Jerry: Mouseless development" }</p>\r\n        </div>\r\n        <div>\r\n            <h3>{ "John Doe: Building and breaking things" }</h3>\r\n            <img src="https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder" alt="video thumbnail" />\r\n        </div>\r\n    </>\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Refresh the browser page, and you should see the following output displayed:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Running WASM application screenshot",src:t(3970).A+"",width:"944",height:"960"})}),"\n",(0,r.jsx)(n.h3,{id:"using-rust-language-constructs-in-the-markup",children:"Using Rust language constructs in the markup"}),"\n",(0,r.jsxs)(n.p,{children:["A big advantage of writing markup in Rust is that we get all the coolness of Rust in our markup.\r\nNow, instead of hardcoding the list of videos in the html, let's actually define them as a ",(0,r.jsx)(n.code,{children:"Vec"})," of Rust objects.\r\nWe'll create a simple ",(0,r.jsx)(n.code,{children:"struct"})," (in ",(0,r.jsx)(n.code,{children:"main.rs"})," or any file of our choice) which will hold our data."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"struct Video {\r\n    id: usize,\r\n    title: String,\r\n    speaker: String,\r\n    url: String,\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, we will create instances of this struct in our ",(0,r.jsx)(n.code,{children:"app"})," function and use those instead of hardcoding the data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use website_test::tutorial::Video; // replace with your own path\r\n\r\nlet videos = vec![\r\n    Video {\r\n        id: 1,\r\n        title: "Building and breaking things".to_string(),\r\n        speaker: "John Doe".to_string(),\r\n        url: "https://youtu.be/PsaFVLr8t4E".to_string(),\r\n    },\r\n    Video {\r\n        id: 2,\r\n        title: "The development process".to_string(),\r\n        speaker: "Jane Smith".to_string(),\r\n        url: "https://youtu.be/PsaFVLr8t4E".to_string(),\r\n    },\r\n    Video {\r\n        id: 3,\r\n        title: "The Web 7.0".to_string(),\r\n        speaker: "Matt Miller".to_string(),\r\n        url: "https://youtu.be/PsaFVLr8t4E".to_string(),\r\n    },\r\n    Video {\r\n        id: 4,\r\n        title: "Mouseless development".to_string(),\r\n        speaker: "Tom Jerry".to_string(),\r\n        url: "https://youtu.be/PsaFVLr8t4E".to_string(),\r\n    },\r\n];\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In order to display them, we need to convert these ",(0,r.jsx)(n.code,{children:"Vec"}),"s into ",(0,r.jsx)(n.code,{children:"Html"}),". We can do that by creating an iterator,\r\nmapping it to ",(0,r.jsx)(n.code,{children:"html!"})," and collecting it as ",(0,r.jsx)(n.code,{children:"Html"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'let videos = videos.iter().map(|video| html! {\r\n    <p>{format!("{}: {}", video.speaker, video.title)}</p>\r\n}).collect::<Html>();\n'})}),"\n",(0,r.jsxs)(n.p,{children:["And finally we need to replace the hardcoded list of videos with the ",(0,r.jsx)(n.code,{children:"Html"})," we created from data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {6-10}",children:'html! {\r\n    <>\r\n        <h1>{ "RustConf Explorer" }</h1>\r\n        <div>\r\n            <h3>{ "Videos to watch" }</h3>\r\n-           <p>{ "John Doe: Building and breaking things" }</p>\r\n-           <p>{ "Jane Smith: The development process" }</p>\r\n-           <p>{ "Matt Miller: The Web 7.0" }</p>\r\n-           <p>{ "Tom Jerry: Mouseless development" }</p>\r\n+           { videos }\r\n        </div>\r\n        // ...\r\n    </>\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,r.jsx)(n.p,{children:"Components are the building blocks of Yew applications. By combining components, which can be made of other components,\r\nwe build our application. By structuring our components for re-usability and keeping them generic, we will be able to use\r\nthem in multiple parts of our application without having to duplicate code or logic."}),"\n",(0,r.jsxs)(n.p,{children:["In fact, the ",(0,r.jsx)(n.code,{children:"app"})," function we have been using so far is a component, called ",(0,r.jsx)(n.code,{children:"App"}),'. It is a "function component".\r\nThere are two different types of components in Yew.']}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Struct Components"}),"\n",(0,r.jsx)(n.li,{children:"Function Components"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, we will be using function components."}),"\n",(0,r.jsxs)(n.p,{children:["Now, let's split up our ",(0,r.jsx)(n.code,{children:"App"})," component into smaller components. We'll begin by extracting the videos list into\r\nits own component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",compile_fail",children:'use yew::prelude::*;\r\n\r\nstruct Video {\r\n    id: usize,\r\n    title: String,\r\n    speaker: String,\r\n    url: String,\r\n}\r\n\r\n#[derive(Clone, Properties, PartialEq)]\r\nstruct VideosListProps {\r\n    videos: Vec<Video>,\r\n}\r\n\r\n#[function_component(VideosList)]\r\nfn videos_list(VideosListProps { videos }: &VideosListProps) -> Html {\r\n    videos.iter().map(|video| html! {\r\n        <p>{format!("{}: {}", video.speaker, video.title)}</p>\r\n    }).collect()\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Notice the parameters of our ",(0,r.jsx)(n.code,{children:"VideosList"}),' function component. A function component takes only one argument which\r\ndefines its "props" (short for "properties"). Props are used to pass data down from a parent component to a child component.\r\nIn this case, ',(0,r.jsx)(n.code,{children:"VideosListProps"})," is a struct which defines the props."]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["The struct used for props must implement ",(0,r.jsx)(n.code,{children:"Properties"})," by deriving it."]})}),"\n",(0,r.jsxs)(n.p,{children:["In order for the above code to compile, we need to modify the ",(0,r.jsx)(n.code,{children:"Video"})," struct like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"{1}",children:"#[derive(Clone, PartialEq)]\r\nstruct Video {\r\n    id: usize,\r\n    title: String,\r\n    speaker: String,\r\n    url: String,\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now, we can update our ",(0,r.jsx)(n.code,{children:"App"})," component to make use of ",(0,r.jsx)(n.code,{children:"VideosList"})," component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {4-7,13-14}",children:'#[function_component(App)]\r\nfn app() -> Html {\r\n    // ...\r\n-    let videos = videos.iter().map(|video| html! {\r\n-        <p>{format!("{}: {}", video.speaker, video.title)}</p>\r\n-    }).collect::<Html>();\r\n-\r\n    html! {\r\n        <>\r\n            <h1>{ "RustConf Explorer" }</h1>\r\n            <div>\r\n                <h3>{"Videos to watch"}</h3>\r\n-               { videos }\r\n+               <VideosList videos={videos} />\r\n            </div>\r\n            // ...\r\n        </>\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["By looking at the browser window, we can verify that the lists are rendered as they should be.\r\nWe have moved the rendering logic of lists to its own component. This shortens the ",(0,r.jsx)(n.code,{children:"App"})," component\u2019s source code,\r\nmaking it easier for us to read and understand."]}),"\n",(0,r.jsx)(n.h3,{id:"making-it-interactive",children:"Making it interactive"}),"\n",(0,r.jsxs)(n.p,{children:["The final goal here is to display the selected video. In order to do that, ",(0,r.jsx)(n.code,{children:"VideosList"}),' component needs to "notify" its\r\nparent when a video is selected, which is done via a ',(0,r.jsx)(n.code,{children:"Callback"}),'. This concept is called "passing handlers".\r\nWe modify its props to take an ',(0,r.jsx)(n.code,{children:"on_click"})," callback:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {4}",children:"#[derive(Clone, Properties, PartialEq)]\r\nstruct VideosListProps {\r\n    videos: Vec<Video>,\r\n+    on_click: Callback<Video>\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then we modify the ",(0,r.jsx)(n.code,{children:"VideosList"}),' component to pass the "emit" the selected video to the callback.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {2-4,6-12,15-16}",children:'#[function_component(VideosList)]\r\n-fn videos_list(VideosListProps { videos }: &VideosListProps) -> Html {\r\n+fn videos_list(VideosListProps { videos, on_click }: &VideosListProps) -> Html {\r\n+    let on_click = on_click.clone();\r\n    videos.iter().map(|video| {\r\n+        let on_video_select = {\r\n+            let on_click = on_click.clone();\r\n+            let video = video.clone();\r\n+            Callback::from(move |_| {\r\n+                on_click.emit(video.clone())\r\n+            })\r\n+        };\r\n\r\n        html! {\r\n-            <p>{format!("{}: {}", video.speaker, video.title)}</p>\r\n+            <p onclick={on_video_select}>{format!("{}: {}", video.speaker, video.title)}</p>\r\n        }\r\n    }).collect()\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Next, we need to modify the usage of ",(0,r.jsx)(n.code,{children:"VideosList"})," to pass that callback. But before doing that, we should create\r\na new component, ",(0,r.jsx)(n.code,{children:"VideoDetails"}),", component that is displayed when a video is clicked."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use website_test::tutorial::Video;\r\nuse yew::prelude::*;\r\n\r\n#[derive(Clone, Properties, PartialEq)]\r\nstruct VideosDetailsProps {\r\n    video: Video,\r\n}\r\n\r\n#[function_component(VideoDetails)]\r\nfn video_details(VideosDetailsProps { video }: &VideosDetailsProps) -> Html {\r\n    html! {\r\n        <div>\r\n            <h3>{ video.title.clone() }</h3>\r\n            <img src="https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder" alt="video thumbnail" />\r\n        </div>\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now, modify the ",(0,r.jsx)(n.code,{children:"App"})," component to display ",(0,r.jsx)(n.code,{children:"VideoDetails"})," component whenever a video is selected."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {4,6-11,13-15,24-29}",children:'#[function_component(App)]\r\nfn app() -> Html {\r\n    // ...\r\n+    let selected_video = use_state(|| None);\r\n\r\n+    let on_video_select = {\r\n+        let selected_video = selected_video.clone();\r\n+        Callback::from(move |video: Video| {\r\n+            selected_video.set(Some(video))\r\n+        })\r\n+    };\r\n\r\n+    let details = selected_video.as_ref().map(|video| html! {\r\n+        <VideoDetails video={video.clone()} />\r\n+    });\r\n\r\n    html! {\r\n        <>\r\n            <h1>{ "RustConf Explorer" }</h1>\r\n            <div>\r\n                <h3>{"Videos to watch"}</h3>\r\n-               <VideosList videos={videos} />\r\n+               <VideosList videos={videos} on_click={on_video_select.clone()} />\r\n            </div>\r\n+            { for details }\r\n-            <div>\r\n-                <h3>{ "John Doe: Building and breaking things" }</h3>\r\n-                <img src="https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder" alt="video thumbnail" />\r\n-            </div>\r\n-        </>\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Don't worry about the ",(0,r.jsx)(n.code,{children:"use_state"})," right now, we will come back to that later.\r\nNote the trick we pulled with ",(0,r.jsx)(n.code,{children:"{ for details }"}),". ",(0,r.jsx)(n.code,{children:"Option<_>"})," implements ",(0,r.jsx)(n.code,{children:"Iterator"})," so we can use it to display the only\r\nelement returned by the ",(0,r.jsx)(n.code,{children:"Iterator"})," with the ",(0,r.jsx)(n.code,{children:"{ for ... }"})," syntax."]}),"\n",(0,r.jsx)(n.h3,{id:"handling-state",children:"Handling state"}),"\n",(0,r.jsxs)(n.p,{children:["Remember the ",(0,r.jsx)(n.code,{children:"use_state"}),' used earlier? That is a special function, called a "hook". Hooks are used to "hook" into\r\nthe lifecycle of a function component and perform actions. You can learn more about this hook, and others\r\n',(0,r.jsx)(n.a,{href:"concepts/function-components/pre-defined-hooks#use_state",children:"here"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Struct components act differently. See ",(0,r.jsx)(n.a,{href:"concepts/components/introduction",children:"the documentation"})," to learn about those."]})}),"\n",(0,r.jsx)(n.h2,{id:"fetching-data-using-external-rest-api",children:"Fetching data (using external REST API)"}),"\n",(0,r.jsx)(n.p,{children:"In a real world application, data will usually come from an API instead of being hardcoded. Let's fetch our\r\nvideos list from external source. For this we will need to add the following crates:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://crates.io/crates/gloo-net",children:(0,r.jsx)(n.code,{children:"gloo-net"})}),"\r\nFor making the fetch call."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://serde.rs",children:(0,r.jsx)(n.code,{children:"serde"})})," with derive features\r\nFor de-serializing the JSON response"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,r.jsx)(n.code,{children:"wasm-bindgen-futures"})}),"\r\nFor executing Rust Future as a Promise"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Let's update the dependencies in ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:'title="Cargo.toml"',children:'[dependencies]\r\ngloo-net = "0.2"\r\nserde = { version = "1.0", features = ["derive"] }\r\nwasm-bindgen-futures = "0.4"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Update the ",(0,r.jsx)(n.code,{children:"Video"})," struct to derive the ",(0,r.jsx)(n.code,{children:"Deserialize"})," trait:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {1,3-4}",children:"+ use serde::Deserialize;\r\n\r\n- #[derive(Clone, PartialEq)]\r\n+ #[derive(Clone, PartialEq, Deserialize)]\r\nstruct Video {\r\n    id: usize,\r\n    title: String,\r\n    speaker: String,\r\n    url: String,\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now as the last step, we need to update our ",(0,r.jsx)(n.code,{children:"App"})," component to make the fetch request instead of using hardcoded data"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {1,5-25,34-35}",children:'+ use gloo_net::http::Request;\r\n\r\n#[function_component(App)]\r\nfn app() -> Html {\r\n-    let videos = vec![\r\n-        // ...\r\n-    ]\r\n+    let videos = use_state(|| vec![]);\r\n+    {\r\n+        let videos = videos.clone();\r\n+        use_effect_with_deps(move |_| {\r\n+            let videos = videos.clone();\r\n+            wasm_bindgen_futures::spawn_local(async move {\r\n+                let fetched_videos: Vec<Video> = Request::get("https://yew.rs/tutorial/data.json")\r\n+                    .send()\r\n+                    .await\r\n+                    .unwrap()\r\n+                    .json()\r\n+                    .await\r\n+                    .unwrap();\r\n+                videos.set(fetched_videos);\r\n+            });\r\n+            || ()\r\n+        }, ());\r\n+    }\r\n\r\n    // ...\r\n\r\n    html! {\r\n        <>\r\n            <h1>{ "RustConf Explorer" }</h1>\r\n            <div>\r\n                <h3>{"Videos to watch"}</h3>\r\n-                <VideosList videos={videos} on_click={on_video_select.clone()} />\r\n+                <VideosList videos={(*videos).clone()} on_click={on_video_select.clone()} />\r\n            </div>\r\n            { for details }\r\n        </>\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["We're using ",(0,r.jsx)(n.code,{children:"unwrap"}),"s here because this is a demo application. In a real world app, you would likely want to have\r\n",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html",children:"proper error handling"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Now look at the browser to see everything working as expected... which would've been the case if it weren't for CORS.\r\nIn order to fix that, we need a proxy server. Luckily trunk provides that."}),"\n",(0,r.jsx)(n.p,{children:"Update the following line:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore {2-3}",children:'// ...\r\n-                let fetched_videos: Vec<Video> = Request::get("https://yew.rs/tutorial/data.json")\r\n+                let fetched_videos: Vec<Video> = Request::get("/tutorial/data.json")\r\n// ...\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now, rerun the server with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"trunk serve --proxy-backend=https://yew.rs/tutorial\n"})}),"\n",(0,r.jsx)(n.p,{children:"Refresh the tab and everything should work as expected."}),"\n",(0,r.jsx)(n.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,r.jsx)(n.p,{children:"Congratulations! You\u2019ve created a web application that fetches data from an external API and displays a list of videos."}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsx)(n.p,{children:"Obviously, this application is very far from perfect or useful. After going through this tutorial,\r\nyou can use it as a jumping-off point to explore more advanced topics."}),"\n",(0,r.jsx)(n.h3,{id:"styles",children:"Styles"}),"\n",(0,r.jsxs)(n.p,{children:["Our apps look very ugly. There's no CSS, or any kind of styles.\r\nUnfortunately, Yew doesn't offer a built-in way to style components. See ",(0,r.jsx)(n.a,{href:"https://trunkrs.dev/assets/",children:"Trunk's assets"}),"\r\nto learn how to add style sheets."]}),"\n",(0,r.jsx)(n.h3,{id:"more-libraries",children:"More libraries"}),"\n",(0,r.jsxs)(n.p,{children:["Our app made use of only a few external dependencies. There are lots of crates out there that can be used.\r\nSee ",(0,r.jsx)(n.a,{href:"more/external-libs",children:"external libraries"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"learning-more-about-yew",children:"Learning more about Yew"}),"\n",(0,r.jsxs)(n.p,{children:["Read our ",(0,r.jsx)(n.a,{href:"/docs/getting-started/introduction",children:"official documentation"}),". It explains a lot of concepts in much more details.\r\nTo learn more about our the Yew API, see our ",(0,r.jsx)(n.a,{href:"https://docs.rs/yew",children:"API docs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3970:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/tutorial_application_screenshot-650f7b40315190dbcb357a0eb8d7d16b.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);