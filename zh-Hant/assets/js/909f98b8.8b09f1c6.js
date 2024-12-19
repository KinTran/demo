"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2080],{8439:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=r(4848),o=r(8453),i=r(6025),s=r(1122);const c={title:"\u8def\u7531 (Router)",description:"Yew \u7684\u5b98\u65b9\u8def\u7531\u5eab"},l=void 0,d={id:"concepts/router",title:"\u8def\u7531 (Router)",description:"Yew \u7684\u5b98\u65b9\u8def\u7531\u5eab",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/concepts/router.mdx",sourceDirName:"concepts",slug:"/concepts/router",permalink:"/demo/zh-Hant/docs/next/concepts/router",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/concepts/router.mdx",tags:[],version:"current",frontMatter:{title:"\u8def\u7531 (Router)",description:"Yew \u7684\u5b98\u65b9\u8def\u7531\u5eab"},sidebar:"docs",previous:{title:"Contexts",permalink:"/demo/zh-Hant/docs/next/concepts/contexts"},next:{title:"\u4f54\u4f4d\u6a19\u7c64 (Suspense)",permalink:"/demo/zh-Hant/docs/next/concepts/suspense"}},a={},h=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u8def\u5f91\u6bb5",id:"\u8def\u5f91\u6bb5",level:3},{value:"\u4f4d\u7f6e (Location)",id:"\u4f4d\u7f6e-location",level:3},{value:"\u5c0e\u822a",id:"\u5c0e\u822a",level:3},{value:"\u9023\u7d50",id:"\u9023\u7d50",level:4},{value:"\u5c0e\u822a\u63a5\u53e3",id:"\u5c0e\u822a\u63a5\u53e3",level:4},{value:"\u51fd\u6578\u5f0f\u5143\u4ef6",id:"\u51fd\u6578\u5f0f\u5143\u4ef6",level:5},{value:"\u7d50\u69cb\u9ad4\u7d44\u4ef6",id:"\u7d50\u69cb\u9ad4\u7d44\u4ef6",level:5},{value:"\u91cd\u5b9a\u5411",id:"\u91cd\u5b9a\u5411",level:4},{value:"\u76e3\u807d\u8b8a\u5316",id:"\u76e3\u807d\u8b8a\u5316",level:3},{value:"\u51fd\u6578\u5f0f\u5143\u4ef6",id:"\u51fd\u6578\u5f0f\u5143\u4ef6-1",level:4},{value:"\u7d50\u69cb\u9ad4\u7d44\u4ef6",id:"\u7d50\u69cb\u9ad4\u7d44\u4ef6-1",level:4},{value:"\u67e5\u8a62\u53c3\u6578",id:"\u67e5\u8a62\u53c3\u6578",level:3},{value:"\u5728\u5c0e\u822a\u6642\u6307\u5b9a\u67e5\u8a62\u53c3\u6578",id:"\u5728\u5c0e\u822a\u6642\u6307\u5b9a\u67e5\u8a62\u53c3\u6578",level:4},{value:"\u53d6\u5f97\u76ee\u524d\u8def\u7531\u7684\u67e5\u8a62\u53c3\u6578",id:"\u53d6\u5f97\u76ee\u524d\u8def\u7531\u7684\u67e5\u8a62\u53c3\u6578",level:4},{value:"\u5d4c\u5957\u8def\u7531\u5668",id:"\u5d4c\u5957\u8def\u7531\u5668",level:2},{value:"\u57fa\u5e95\u8def\u5f91 (Basename)",id:"\u57fa\u5e95\u8def\u5f91-basename",level:3},{value:"\u76f8\u95dc\u7bc4\u4f8b",id:"\u76f8\u95dc\u7bc4\u4f8b",level:2},{value:"\u4ecb\u9762\u53c3\u8003",id:"\u4ecb\u9762\u53c3\u8003",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u55ae\u9801\u61c9\u7528\u7a0b\u5f0f (SPA) \u4e2d\u7684\u8def\u7531\u5668\u8655\u7406\u6839\u64da URL \u986f\u793a\u4e0d\u540c\u7684\u9801\u9762\u3002\u8207\u9ede\u64ca\u9023\u7d50\u6642\u8acb\u6c42\u4e0d\u540c\u7684\u9060\u7aef\u8cc7\u6e90\u7684\u9810\u8a2d\u884c\u70ba\u4e0d\u540c\uff0c\u8def\u7531\u5668\u6703\u5728\u672c\u6a5f\u8a2d\u5b9a URL \u4ee5\u6307\u5411\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u6709\u6548\u8def\u7531\u3002\u7136\u5f8c\uff0c\u8def\u7531\u5668\u5075\u6e2c\u5230\u6b64\u8b8a\u66f4\u4e26\u6c7a\u5b9a\u8981\u6e32\u67d3\u7684\u5167\u5bb9\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Yew \u5728 ",(0,t.jsx)(n.code,{children:"yew-router"})," crate \u4e2d\u63d0\u4f9b\u4e86\u8def\u7531\u5668\u652f\u63f4\u3002\u8981\u958b\u59cb\u4f7f\u7528\u5b83\uff0c\u8acb\u5c07\u4f9d\u8cf4\u9805\u65b0\u589e\u81f3\u60a8\u7684 ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," \u6a94\u6848\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'yew-router = { git = "https://github.com/yewstack/yew.git" }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u9700\u7684\u5de5\u5177\u5747\u5728 ",(0,t.jsx)(n.code,{children:"yew_router::prelude"})," \u6a21\u7d44\u4e2d\u63d0\u4f9b\uff0c"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u958b\u59cb\uff0c\u4f60\u9700\u8981\u5b9a\u7fa9\u4e00\u500b ",(0,t.jsx)(n.code,{children:"Route"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8def\u7531\u7531\u4e00\u500b ",(0,t.jsx)(n.code,{children:"enum"})," \u5b9a\u7fa9\uff0c\u5b83\u884d\u751f\u81ea ",(0,t.jsx)(n.code,{children:"Routable"}),"\u3002\u9019\u500b\u679a\u8209\u5fc5\u9808\u5be6\u4f5c ",(0,t.jsx)(n.code,{children:"Clone + PartialEq"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew_router::prelude::*;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/secure")]\r\n    Secure,\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Route"})," \u8207 ",(0,t.jsx)(n.code,{children:"<Switch />"})," \u5143\u4ef6\u914d\u5c0d\uff0c\u5f8c\u8005\u6703\u627e\u5230\u8207\u700f\u89bd\u5668\u76ee\u524d URL \u76f8\u7b26\u7684\u8def\u5f91\u8b8a\u9ad4\uff0c\u4e26\u5c07\u5176\u50b3\u905e\u7d66 ",(0,t.jsx)(n.code,{children:"render"})," \u56de\u547c\u3002\u7136\u5f8c\u56de\u8abf\u6c7a\u5b9a\u8981\u6e32\u67d3\u7684\u5167\u5bb9\u3002\u5982\u679c\u6c92\u6709\u8def\u5f91\u5339\u914d\uff0c\u8def\u7531\u5668\u6703\u5c0e\u822a\u5230\u5e36\u6709 ",(0,t.jsx)(n.code,{children:"not_found"})," \u5c6c\u6027\u7684\u8def\u5f91\u3002\u5982\u679c\u6c92\u6709\u6307\u5b9a\u8def\u7531\uff0c\u5247\u4e0d\u6703\u6e32\u67d3\u4efb\u4f55\u5167\u5bb9\uff0c\u4e26\u4e14\u6703\u5728\u63a7\u5236\u53f0\u4e2d\u8a18\u9304\u4e00\u689d\u8a0a\u606f\uff0c\u8aaa\u660e\u6c92\u6709\u7b26\u5408\u7684\u8def\u7531\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["yew-router \u7684\u5927\u591a\u6578\u5143\u4ef6\uff0c\u7279\u5225\u662f ",(0,t.jsx)(n.code,{children:"<Link />"})," \u548c ",(0,t.jsx)(n.code,{children:"<Switch />"}),"\uff0c\u5fc5\u9808\u662f\u67d0\u500b Router \u5143\u4ef6\uff08\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"<BrowserRouter />"}),"\uff09\u7684\uff08\u6df1\u5c64\uff09\u5b50\u5143\u7d20\u3002\u901a\u5e38\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u53ea\u9700\u8981\u4e00\u500b Router\uff0c\u901a\u5e38\u7531\u6700\u9802\u5c64\u7684 ",(0,t.jsx)(n.code,{children:"<App />"})," \u5143\u4ef6\u7acb\u5373\u6e32\u67d3\u3002 Router \u8a3b\u518a\u4e86\u4e00\u500b\u4e0a\u4e0b\u6587\uff0c\u9019\u662f Links \u548c Switches \u529f\u80fd\u6240\u9700\u7684\u3002\u4e0b\u9762\u63d0\u4f9b\u4e86\u4e00\u500b\u7bc4\u4f8b\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["\u5728\u700f\u89bd\u5668\u74b0\u5883\u4e2d\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yew-router"})," \u6642\uff0c\u5f37\u70c8\u5efa\u8b70\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"<BrowserRouter />"}),"\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.a,{href:"https://docs.rs/yew-router/",children:"API \u53c3\u8003"})," \u4e2d\u627e\u5230\u5176\u4ed6\u8def\u7531\u5668\u985e\u578b\u3002"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew_router::prelude::*;\r\nuse yew::prelude::*;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/secure")]\r\n    Secure,\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\r\n\r\n#[function_component(Secure)]\r\nfn secure() -> Html {\r\n    let navigator = use_navigator().unwrap();\r\n\r\n    let onclick = Callback::from(move |_| navigator.push(&Route::Home));\r\n    html! {\r\n        <div>\r\n            <h1>{ "Secure" }</h1>\r\n            <button {onclick}>{ "Go Home" }</button>\r\n        </div>\r\n    }\r\n}\r\n\r\nfn switch(routes: Route) -> Html {\r\n    match routes {\r\n        Route::Home => html! { <h1>{ "Home" }</h1> },\r\n        Route::Secure => html! {\r\n            <Secure />\r\n        },\r\n        Route::NotFound => html! { <h1>{ "404" }</h1> },\r\n    }\r\n}\r\n\r\n#[function_component(Main)]\r\nfn app() -> Html {\r\n    html! {\r\n        <BrowserRouter>\r\n            <Switch<Route> render={switch} /> // <- must be child of <BrowserRouter>\r\n        </BrowserRouter>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u8def\u5f91\u6bb5",children:"\u8def\u5f91\u6bb5"}),"\n",(0,t.jsxs)(n.p,{children:["\u8def\u7531\u9084\u53ef\u4ee5\u4f7f\u7528\u52d5\u614b\u548c\u547d\u540d\u901a\u914d\u7b26\u6bb5\u5f9e\u8def\u7531\u4e2d\u63d0\u53d6\u8cc7\u8a0a\u3002\u7136\u5f8c\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"<Switch />"})," \u5167\u5b58\u53d6\u8cbc\u6587\u7684 id\uff0c\u4e26\u900f\u904e\u5c6c\u6027\u5c07\u5176\u8f49\u767c\u5230\u5c0d\u61c9\u7684\u5143\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse yew_router::prelude::*;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/post/:id")]\r\n    Post { id: String },\r\n    #[at("/*path")]\r\n    Misc { path: String },\r\n}\r\n\r\nfn switch(route: Route) -> Html {\r\n    match route {\r\n        Route::Home => html! { <h1>{ "Home" }</h1> },\r\n        Route::Post { id } => html! {<p>{format!("You are looking at Post {}", id)}</p>},\r\n        Route::Misc { path } => html! {<p>{format!("Matched some other path: {}", path)}</p>},\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7684 ",(0,t.jsx)(n.code,{children:"Post"})," \u8b8a\u9ad4\uff0c\u800c\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"Post {id: String}"}),"\u3002\u4f8b\u5982\uff0c\u7576 ",(0,t.jsx)(n.code,{children:"Post"})," \u8207\u53e6\u4e00\u500b\u8def\u7531\u5668\u4e00\u8d77\u6e32\u67d3\u6642\uff0c\u8a72\u6b04\u4f4d\u53ef\u80fd\u662f\u591a\u9918\u7684\uff0c\u56e0\u70ba\u53e6\u4e00\u500b\u8def\u7531\u5668\u53ef\u4ee5\u5339\u914d\u4e26\u8655\u7406\u8def\u5f91\u3002\u6709\u95dc\u8a73\u7d30\u4fe1\u606f\uff0c\u8acb\u53c3\u95b1\u4e0b\u9762\u7684",(0,t.jsx)(n.a,{href:"#nested-router",children:"\u5d4c\u5957\u8def\u7531\u5668"}),"\u90e8\u5206\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u8acb\u6ce8\u610f\uff0c\u6b04\u4f4d\u5fc5\u9808\u5be6\u4f5c ",(0,t.jsx)(n.code,{children:"Clone + PartialEq"})," \u4f5c\u70ba ",(0,t.jsx)(n.code,{children:"Route"})," \u679a\u8209\u7684\u4e00\u90e8\u5206\u3002\u5b83\u5011\u9084\u5fc5\u9808\u5be6\u4f5c ",(0,t.jsx)(n.code,{children:"std::fmt::Display"})," \u548c ",(0,t.jsx)(n.code,{children:"std::str::FromStr"})," \u4ee5\u9032\u884c\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u3002\u6574\u6578\u3001\u6d6e\u9ede\u6578\u548c\u5b57\u4e32\u7b49\u539f\u59cb\u985e\u578b\u5df2\u7d93\u6eff\u8db3\u9019\u4e9b\u8981\u6c42\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u8def\u5f91\u7684\u5f62\u5f0f\u5339\u914d\uff0c\u4f46\u53cd\u5e8f\u5217\u5316\u5931\u6557\uff08\u6839\u64da ",(0,t.jsx)(n.code,{children:"FromStr"}),"\uff09\u3002\u8def\u7531\u5668\u5c07\u8a8d\u70ba\u8def\u7531\u4e0d\u5339\u914d\uff0c\u4e26\u5617\u8a66\u6e32\u67d3\u672a\u627e\u5230\u7684\u8def\u7531\uff08\u6216\u8005\u5982\u679c\u672a\u6307\u5b9a\u672a\u627e\u5230\u7684\u8def\u7531\uff0c\u5247\u6e32\u67d3\u7a7a\u767d\u9801\u9762\uff09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u53c3\u8003\u4ee5\u4e0b\u7bc4\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/news/:id")]\r\n    News { id: u8 },\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\r\n// \u5207\u63db\u51fd\u6578\u6703\u6e32\u67d3 News \u548c id\u3002\u9019\u88e1\u7701\u7565\u4e86\u3002\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u6bb5\u8d85\u904e 255 \u6642\uff0c",(0,t.jsx)(n.code,{children:"u8::from_str()"})," \u5c07\u5931\u6557\u4e26\u50b3\u56de ",(0,t.jsx)(n.code,{children:"ParseIntError"}),"\uff0c\u8def\u7531\u5668\u5c07\u8a8d\u70ba\u8def\u7531\u4e0d\u7b26\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"router deserialization failure behavior",src:r(7328).A+"",width:"541",height:"139"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u95dc\u8def\u7531\u8a9e\u6cd5\u548c\u5982\u4f55\u7d81\u5b9a\u53c3\u6578\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8acb\u67e5\u770b ",(0,t.jsx)(n.a,{href:"https://docs.rs/route-recognizer/0.3.1/route_recognizer/#routing-params",children:"route-recognizer"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f4d\u7f6e-location",children:"\u4f4d\u7f6e (Location)"}),"\n",(0,t.jsxs)(n.p,{children:["\u8def\u7531\u5668\u900f\u904e\u4e0a\u4e0b\u6587\u63d0\u4f9b\u4e86\u4e00\u500b\u901a\u7528\u7684 ",(0,t.jsx)(n.code,{children:"Location"})," \u7d50\u69cb\uff0c\u53ef\u4ee5\u7528\u4f86\u5b58\u53d6\u8def\u7531\u8cc7\u8a0a\u3002\u5b83\u5011\u53ef\u4ee5\u900f\u904e\u9264\u5b50\u6216 ",(0,t.jsx)(n.code,{children:"ctx.link()"})," \u4e0a\u7684\u4fbf\u6377\u51fd\u6578\u4f86\u6aa2\u7d22\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5c0e\u822a",children:"\u5c0e\u822a"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yew_router"})," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5177\u4f86\u8655\u7406\u5c0e\u822a\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u9023\u7d50",children:"\u9023\u7d50"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<Link />"})," \u6e32\u67d3\u70ba",(0,t.jsx)(n.code,{children:"<a>"})," \u5143\u7d20\uff0c",(0,t.jsx)(n.code,{children:"onclick"})," \u4e8b\u4ef6\u8655\u7406\u7a0b\u5e8f\u5c07\u547c\u53eb ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",children:"preventDefault"}),"\uff0c\u4e26\u5c07\u76ee\u6a19\u9801\u9762\u63a8\u9001\u5230\u6b77\u53f2\u8a18\u9304\u4e2d\u4e26\u6e32\u67d3\u6240\u9700\u7684\u9801\u9762\uff0c\u9019\u6b63\u662f\u55ae\u9801\u61c9\u7528\u7a0b\u5f0f\u6240\u671f\u671b\u7684\u884c\u70ba\u3002\u666e\u901a\u9328\u5143\u7d20\u7684\u9810\u8a2d ",(0,t.jsx)(n.code,{children:"onclick"})," \u6703\u91cd\u65b0\u8f09\u5165\u9801\u9762\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<Link />"})," \u5143\u4ef6\u4e5f\u6703\u5c07\u5176\u5b50\u5143\u7d20\u50b3\u905e\u7d66 ",(0,t.jsx)(n.code,{children:"<a>"})," \u5143\u7d20\u3002\u53ef\u4ee5\u5c07\u5176\u8996\u70ba\u61c9\u7528\u7a0b\u5f0f\u5167\u8def\u7531\u7684 ",(0,t.jsx)(n.code,{children:"<a/>"})," \u66ff\u4ee3\u54c1\u3002\u4e0d\u540c\u4e4b\u8655\u5728\u65bc\u4f60\u9700\u8981\u63d0\u4f9b ",(0,t.jsx)(n.code,{children:"to"})," \u5c6c\u6027\u800c\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"href"}),"\u3002\u7bc4\u4f8b\u7528\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'<Link<Route> to={Route::Home}>{ "click here to go home" }</Link<Route>>\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7d50\u69cb\u9ad4\u8b8a\u6578\u4e5f\u53ef\u4ee5\u6b63\u5e38\u904b\u4f5c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'<Link<Route> to={Route::Post { id: "new-yew-release".to_string() }}>{ "Yew!" }</Link<Route>>\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u5c0e\u822a\u63a5\u53e3",children:"\u5c0e\u822a\u63a5\u53e3"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c0e\u822a\u5668 API \u70ba\u51fd\u6578\u5143\u4ef6\u548c\u7d50\u69cb\u5143\u4ef6\u63d0\u4f9b\u3002\u5b83\u5011\u4f7f\u56de\u8abf\u80fd\u5920\u66f4\u6539\u8def\u7531\u3002\u53ef\u4ee5\u5728\u4efb\u4e00\u60c5\u6cc1\u4e0b\u53d6\u5f97 ",(0,t.jsx)(n.code,{children:"Navigator"})," \u5be6\u4f8b\u4ee5\u64cd\u4f5c\u8def\u7531\u3002"]}),"\n",(0,t.jsx)(n.h5,{id:"\u51fd\u6578\u5f0f\u5143\u4ef6",children:"\u51fd\u6578\u5f0f\u5143\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c0d\u65bc\u51fd\u6578\u5143\u4ef6\uff0c\u7576\u5e95\u5c64\u5c0e\u89bd\u5668\u63d0\u4f9b\u8005\u8b8a\u66f4\u6642\uff0c",(0,t.jsx)(n.code,{children:"use_navigator"})," \u9264\u5b50\u6703\u91cd\u65b0\u6e32\u67d3\u5143\u4ef6\u3002\r\n\u4ee5\u4e0b\u662f\u5be6\u73fe\u4e00\u500b\u6309\u9215\u7684\u7bc4\u4f8b\uff0c\u8a72\u6309\u9215\u5728\u9ede\u64ca\u6642\u5c0e\u822a\u5230 ",(0,t.jsx)(n.code,{children:"Home"})," \u8def\u7531\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'#[function_component(MyComponent)]\r\npub fn my_component() -> Html {\r\n    let navigator = use_navigator().unwrap();\r\n    let onclick = Callback::from(move |_| navigator.push(&Route::Home));\r\n\r\n    html! {\r\n        <>\r\n            <button {onclick}>{"Click to go home"}</button>\r\n        </>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["\u9019\u88e1\u7684\u7bc4\u4f8b\u4f7f\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"Callback::from"}),"\u3002\u5982\u679c\u76ee\u6a19\u8def\u7531\u53ef\u4ee5\u8207\u5143\u4ef6\u6240\u5728\u7684\u8def\u7531\u76f8\u540c\uff0c\u6216\u53ea\u662f\u70ba\u4e86\u5b89\u5168\u8d77\u898b\uff0c\u8acb\u4f7f\u7528\u666e\u901a\u7684\u56de\u547c\u3002\u4f8b\u5982\uff0c\u8003\u616e\u5728\u6bcf\u500b\u9801\u9762\u4e0a\u90fd\u6709\u4e00\u500b\u5fbd\u6a19\u6309\u9215\uff0c\u9ede\u64ca\u8a72\u6309\u9215\u6703\u8fd4\u56de\u4e3b\u9801\u3002\u5728\u4e3b\u9801\u4e0a\u9ede\u64ca\u8a72\u6309\u9215\u5169\u6b21\u6703\u5c0e\u81f4\u7a0b\u5f0f\u78bc\u5d29\u6f70\uff0c\u56e0\u70ba\u7b2c\u4e8c\u6b21\u9ede\u64ca\u6703\u63a8\u9001\u4e00\u500b\u76f8\u540c\u7684 Home \u8def\u7531\uff0c\u4e26\u4e14 ",(0,t.jsx)(n.code,{children:"use_navigator"})," \u9264\u5b50\u4e0d\u6703\u89f8\u767c\u91cd\u65b0\u6e32\u67d3\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u60f3\u8981\u53d6\u4ee3\u76ee\u524d\u7684\u4f4d\u7f6e\u800c\u4e0d\u662f\u5c07\u65b0\u4f4d\u7f6e\u63a8\u5230\u5806\u758a\u4e0a\uff0c\u8acb\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"navigator.replace()"})," \u800c\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"navigator.push()"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u80fd\u6703\u6ce8\u610f\u5230 ",(0,t.jsx)(n.code,{children:"navigator"})," \u5fc5\u9808\u79fb\u52d5\u5230\u56de\u547c\u4e2d\uff0c\u56e0\u6b64\u4e0d\u80fd\u518d\u6b21\u7528\u65bc\u5176\u4ed6\u56de\u547c\u3002\u5e78\u904b\u7684\u662f\uff0c",(0,t.jsx)(n.code,{children:"navigator"})," \u5be6\u4f5c\u4e86 ",(0,t.jsx)(n.code,{children:"Clone"}),"\uff0c\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u5982\u4f55\u70ba\u4e0d\u540c\u7684\u8def\u7531\u8a2d\u5b9a\u591a\u500b\u6309\u9215\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use yew::prelude::*;\r\nuse yew_router::prelude::*;\r\n\r\n#[function_component(NavItems)]\r\npub fn nav_items() -> Html {\r\n    let navigator = use_navigator().unwrap();\r\n\r\n    let go_home_button = {\r\n        let navigator = navigator.clone();\r\n        let onclick = Callback::from(move |_| navigator.push(&Route::Home));\r\n        html! {\r\n            <button {onclick}>{"click to go home"}</button>\r\n        }\r\n    };\r\n\r\n    let go_to_first_post_button = {\r\n        let navigator = navigator.clone();\r\n        let onclick = Callback::from(move |_| navigator.push(&Route::Post { id: "first-post".to_string() }));\r\n        html! {\r\n            <button {onclick}>{"click to go the first post"}</button>\r\n        }\r\n    };\r\n\r\n    let go_to_secure_button = {\r\n        let onclick = Callback::from(move |_| navigator.push(&Route::Secure));\r\n        html! {\r\n            <button {onclick}>{"click to go to secure"}</button>\r\n        }\r\n    };\r\n\r\n    html! {\r\n        <>\r\n            {go_home_button}\r\n            {go_to_first_post_button}\r\n            {go_to_secure_button}\r\n        </>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h5,{id:"\u7d50\u69cb\u9ad4\u7d44\u4ef6",children:"\u7d50\u69cb\u9ad4\u7d44\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c0d\u65bc\u7d50\u69cb\u9ad4\u5143\u4ef6\uff0c\u53ef\u4ee5\u900f\u904e ",(0,t.jsx)(n.code,{children:"ctx.link().navigator()"})," API \u53d6\u5f97 ",(0,t.jsx)(n.code,{children:"Navigator"})," \u5be6\u4f8b\u3002\u5176\u9918\u90e8\u5206\u8207\u51fd\u6578\u7d44\u4ef6\u7684\u60c5\u6cc1\u76f8\u540c\u3002\u4ee5\u4e0b\u662f\u4e00\u500b\u6e32\u67d3\u55ae\u4e00\u6309\u9215\u7684\u8996\u5716\u51fd\u6578\u7bc4\u4f8b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'fn view(&self, ctx: &Context<Self>) -> Html {\r\n    let navigator = ctx.link().navigator().unwrap();\r\n    let onclick = Callback::from(move |_| navigator.push(&MainRoute::Home));\r\n    html!{\r\n        <button {onclick}>{"Go Home"}</button>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u91cd\u5b9a\u5411",children:"\u91cd\u5b9a\u5411"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yew-router"})," \u5728 prelude \u4e2d\u4e5f\u63d0\u4f9b\u4e86\u4e00\u500b ",(0,t.jsx)(n.code,{children:"<Redirect />"})," \u5143\u4ef6\u3002\u5b83\u53ef\u4ee5\u7528\u65bc\u5be6\u73fe\u8207\u5c0e\u822a\u5668 API \u985e\u4f3c\u7684\u6548\u679c\u3002\u8a72\u5143\u4ef6\u63a5\u53d7\u4e00\u500b ",(0,t.jsx)(n.code,{children:"to"})," \u5c6c\u6027\u4f5c\u70ba\u76ee\u6a19\u8def\u7531\u3002\u7576\u6e32\u67d3 ",(0,t.jsx)(n.code,{children:"<Redirect/>"})," \u6642\uff0c\u4f7f\u7528\u8005\u5c07\u88ab\u91cd\u5b9a\u5411\u5230\u5c6c\u6027\u4e2d\u6307\u5b9a\u7684\u8def\u7531\u3002\u4ee5\u4e0b\u662f\u4e00\u500b\u7bc4\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"#[function_component(SomePage)]\r\nfn some_page() -> Html {\r\n    // \u5efa\u7acb\u5c0d `use_user` \u7684\u9264\u5b50\r\n    let user = match use_user() {\r\n        Some(user) => user,\r\n        // \u7576\u4f7f\u7528\u8005\u70ba `None` \u6642\u91cd\u5b9a\u5411\u5230\u767b\u5165\u9801\u9762\r\n        None => return html! {\r\n            <Redirect<Route> to={Route::Login}/>\r\n        },\r\n    };\r\n    // ... \u5be6\u969b\u9801\u9762\u5167\u5bb9\r\n}\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["\u5982\u4f55\u9078\u64c7 ",(0,t.jsx)(n.code,{children:"Redirect"})," \u6216 ",(0,t.jsx)(n.code,{children:"Navigator"})]}),(0,t.jsxs)(n.p,{children:["Navigator API \u662f\u5728\u56de\u547c\u4e2d\u64cd\u4f5c\u8def\u7531\u7684\u552f\u4e00\u65b9\u6cd5\u3002\r\n\u800c ",(0,t.jsx)(n.code,{children:"<Redirect />"})," \u53ef\u4ee5\u4f5c\u70ba\u5143\u4ef6\u4e2d\u7684\u56de\u50b3\u503c\u4f7f\u7528\u3002\u60a8\u53ef\u80fd\u9084\u60f3\u5728\u5176\u4ed6\u975e\u5143\u4ef6\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"<Redirect />"}),"\uff0c\u4f8b\u5982\u5728",(0,t.jsx)(n.a,{href:"#nested-router",children:"\u5d4c\u5957\u8def\u7531\u5668"}),"\u7684 switch \u51fd\u6578\u4e2d\u3002"]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u76e3\u807d\u8b8a\u5316",children:"\u76e3\u807d\u8b8a\u5316"}),"\n",(0,t.jsx)(n.h4,{id:"\u51fd\u6578\u5f0f\u5143\u4ef6-1",children:"\u51fd\u6578\u5f0f\u5143\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"use_location"})," \u548c ",(0,t.jsx)(n.code,{children:"use_route"})," \u9264\u5b50\u3002\u7576\u63d0\u4f9b\u7684\u503c\u767c\u751f\u8b8a\u5316\u6642\uff0c\u60a8\u7684\u5143\u4ef6\u5c07\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u7d50\u69cb\u9ad4\u7d44\u4ef6-1",children:"\u7d50\u69cb\u9ad4\u7d44\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u70ba\u4e86\u56de\u61c9\u8def\u7531\u8b8a\u5316\uff0c\u60a8\u53ef\u4ee5\u5c07\u56de\u547c\u9589\u5305\u50b3\u905e\u7d66 ",(0,t.jsx)(n.code,{children:"ctx.link()"})," \u7684 ",(0,t.jsx)(n.code,{children:"add_location_listener()"})," \u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u4e00\u65e6\u4f4d\u7f6e\u76e3\u807d\u5668\u88ab\u522a\u9664\uff0c\u5b83\u5c07\u88ab\u53d6\u6d88\u8a3b\u518a\u3002\u8acb\u78ba\u4fdd\u5c07\u53e5\u67c4\u5132\u5b58\u5728\u5143\u4ef6\u72c0\u614b\u4e2d\u3002"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"fn create(ctx: &Context<Self>) -> Self {\r\n    let listener = ctx.link()\r\n        .add_location_listener(ctx.link().callback(\r\n            // \u8655\u7406\u4e8b\u4ef6\r\n        ))\r\n        .unwrap();\r\n    MyComponent {\r\n        _listener: listener\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ctx.link().location()"})," \u548c ",(0,t.jsx)(n.code,{children:"ctx.link().route::<R>()"})," \u4e5f\u53ef\u4ee5\u7528\u65bc\u4e00\u6b21\u6027\u64f7\u53d6\u4f4d\u7f6e\u548c\u8def\u7531\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u8a62\u53c3\u6578",children:"\u67e5\u8a62\u53c3\u6578"}),"\n",(0,t.jsx)(n.h4,{id:"\u5728\u5c0e\u822a\u6642\u6307\u5b9a\u67e5\u8a62\u53c3\u6578",children:"\u5728\u5c0e\u822a\u6642\u6307\u5b9a\u67e5\u8a62\u53c3\u6578"}),"\n",(0,t.jsxs)(n.p,{children:["\u70ba\u4e86\u5728\u5c0e\u89bd\u5230\u65b0\u8def\u7531\u6642\u6307\u5b9a\u67e5\u8a62\u53c3\u6578\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"navigator.push_with_query"})," \u6216 ",(0,t.jsx)(n.code,{children:"navigator.replace_with_query"})," \u51fd\u6578\u3002\u5b83\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"serde"})," \u5c07\u53c3\u6578\u5e8f\u5217\u5316\u70ba URL \u7684\u67e5\u8a62\u5b57\u4e32\uff0c\u56e0\u6b64\u4efb\u4f55\u5be6\u4f5c\u4e86 ",(0,t.jsx)(n.code,{children:"Serialize"})," \u7684\u985e\u578b\u90fd\u53ef\u4ee5\u50b3\u905e\u3002\u6700\u7c21\u55ae\u7684\u5f62\u5f0f\u662f\u5305\u542b\u5b57\u4e32\u5c0d\u7684 ",(0,t.jsx)(n.code,{children:"HashMap"}),"\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u53d6\u5f97\u76ee\u524d\u8def\u7531\u7684\u67e5\u8a62\u53c3\u6578",children:"\u53d6\u5f97\u76ee\u524d\u8def\u7531\u7684\u67e5\u8a62\u53c3\u6578"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"location.query"})," \u7528\u4f86\u53d6\u5f97\u67e5\u8a62\u53c3\u6578\u3002\u5b83\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"serde"})," \u5f9e URL \u7684\u67e5\u8a62\u5b57\u4e32\u4e2d\u53cd\u5e8f\u5217\u5316\u53c3\u6578\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5d4c\u5957\u8def\u7531\u5668",children:"\u5d4c\u5957\u8def\u7531\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u7576\u61c9\u7528\u7a0b\u5f0f\u8b8a\u5f97\u66f4\u5927\u6642\uff0c\u5d4c\u5957\u8def\u7531\u5668\u53ef\u80fd\u6703\u5f88\u6709\u7528\u3002\u8003\u616e\u4ee5\u4e0b\u8def\u7531\u5668\u7d50\u69cb\uff1a"}),"\n","\n",(0,t.jsx)(s.A,{alt:"nested router structure",sources:{light:(0,i.Ay)("/img/nested-router-light.svg"),dark:(0,i.Ay)("/img/nested-router-dark.svg")}}),"\n",(0,t.jsxs)(n.p,{children:["\u5d4c\u5957\u7684 ",(0,t.jsx)(n.code,{children:"SettingsRouter"})," \u8655\u7406\u6240\u6709\u4ee5 ",(0,t.jsx)(n.code,{children:"/settings"})," \u958b\u982d\u7684 URL\u3002\u6b64\u5916\uff0c\u5b83\u6703\u5c07\u672a\u7b26\u5408\u7684 URL \u91cd\u65b0\u5c0e\u5411\u5230\u4e3b ",(0,t.jsx)(n.code,{children:"NotFound"})," \u8def\u7531\u3002\u56e0\u6b64\uff0c",(0,t.jsx)(n.code,{children:"/settings/gibberish"})," \u5c07\u6703\u91cd\u65b0\u5c0e\u5411\u5230 ",(0,t.jsx)(n.code,{children:"/404"}),"\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"\u8acb\u6ce8\u610f\uff0c\u8a72\u4ecb\u9762\u4ecd\u5728\u958b\u767c\u4e2d\uff0c\u9019\u6a23\u5beb\u7684\u65b9\u5f0f\u5c1a\u672a\u6700\u7d42\u78ba\u5b9a"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u5be6\u4f5c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse yew_router::prelude::*;\r\nuse gloo::utils::window;\r\nuse wasm_bindgen::UnwrapThrowExt;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum MainRoute {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/news")]\r\n    News,\r\n    #[at("/contact")]\r\n    Contact,\r\n    #[at("/settings")]\r\n    SettingsRoot,\r\n    #[at("/settings/*")]\r\n    Settings,\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum SettingsRoute {\r\n    #[at("/settings")]\r\n    Profile,\r\n    #[at("/settings/friends")]\r\n    Friends,\r\n    #[at("/settings/theme")]\r\n    Theme,\r\n    #[not_found]\r\n    #[at("/settings/404")]\r\n    NotFound,\r\n}\r\n\r\nfn switch_main(route: MainRoute) -> Html {\r\n    match route {\r\n        MainRoute::Home => html! {<h1>{"Home"}</h1>},\r\n        MainRoute::News => html! {<h1>{"News"}</h1>},\r\n        MainRoute::Contact => html! {<h1>{"Contact"}</h1>},\r\n        MainRoute::SettingsRoot | MainRoute::Settings => html! { <Switch<SettingsRoute> render={switch_settings} /> },\r\n        MainRoute::NotFound => html! {<h1>{"Not Found"}</h1>},\r\n    }\r\n}\r\n\r\nfn switch_settings(route: SettingsRoute) -> Html {\r\n    match route {\r\n        SettingsRoute::Profile => html! {<h1>{"Profile"}</h1>},\r\n        SettingsRoute::Friends => html! {<h1>{"Friends"}</h1>},\r\n        SettingsRoute::Theme => html! {<h1>{"Theme"}</h1>},\r\n        SettingsRoute::NotFound => html! {<Redirect<MainRoute> to={MainRoute::NotFound}/>}\r\n    }\r\n}\r\n\r\n#[function_component(App)]\r\npub fn app() -> Html {\r\n    html! {\r\n        <BrowserRouter>\r\n            <Switch<MainRoute> render={switch_main} />\r\n        </BrowserRouter>\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u5e95\u8def\u5f91-basename",children:"\u57fa\u5e95\u8def\u5f91 (Basename)"}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yew-router"})," \u5b9a\u7fa9\u57fa\u5e95\u8def\u5f91 (Basename)\u3002\r\n\u57fa\u5e95\u8def\u5f91\u662f\u6240\u6709\u8def\u7531\u7684\u516c\u5171\u524d\u7db4\u3002\u5c0e\u822a\u5668 API \u548c ",(0,t.jsx)(n.code,{children:"<Switch />"})," \u5143\u4ef6\u90fd\u652f\u63f4\u57fa\u5e95\u8def\u5f91\u8a2d\u5b9a\u3002\u6240\u6709\u63a8\u9001\u7684\u8def\u7531\u90fd\u6703\u52a0\u4e0a\u57fa\u5e95\u8def\u5f91\u524d\u7db4\uff0c\u6240\u6709\u7684 switch \u90fd\u6703\u5728\u5617\u8a66\u5c07\u8def\u5f91\u89e3\u6790\u70ba ",(0,t.jsx)(n.code,{children:"Routable"})," \u4e4b\u524d\u53bb\u6389\u57fa\u5e95\u8def\u5f91\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u6c92\u6709\u70ba Router \u5143\u4ef6\u63d0\u4f9b\u57fa\u5e95\u8def\u5f91\u5c6c\u6027\uff0c\u5b83\u5c07\u4f7f\u7528 HTML \u6a94\u6848\u4e2d ",(0,t.jsx)(n.code,{children:"<base />"})," \u5143\u7d20\u7684 href \u5c6c\u6027\uff0c\u4e26\u5728 HTML \u6a94\u6848\u4e2d\u6c92\u6709 ",(0,t.jsx)(n.code,{children:"<base />"})," \u5143\u7d20\u6642\u56de\u9000\u5230 ",(0,t.jsx)(n.code,{children:"/"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u95dc\u7bc4\u4f8b",children:"\u76f8\u95dc\u7bc4\u4f8b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/router",children:"\u8def\u7531"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4ecb\u9762\u53c3\u8003",children:"\u4ecb\u9762\u53c3\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.rs/yew-router/",children:"yew-router"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},7328:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/router-deserialization-failure-behavior-d9ab796254f96206e7c6682abc4bf552.gif"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(6540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);