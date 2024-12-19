"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2871],{8390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=t(4848),o=t(8453),i=t(6025),s=t(1122);const c={title:"Router",description:"Yew's official router"},a=void 0,l={id:"concepts/router",title:"Router",description:"Yew's official router",source:"@site/versioned_docs/version-0.19.0/concepts/router.mdx",sourceDirName:"concepts",slug:"/concepts/router",permalink:"/demo/ja/docs/0.19.0/concepts/router",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/router.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Router",description:"Yew's official router"},sidebar:"docs",previous:{title:"Contexts",permalink:"/demo/ja/docs/0.19.0/concepts/contexts"},next:{title:"How it works",permalink:"/demo/ja/docs/0.19.0/advanced-topics/how-it-works"}},d={},h=[{value:"Usage",id:"usage",level:2},{value:"Path Segments",id:"path-segments",level:3},{value:"History and Location",id:"history-and-location",level:3},{value:"<code>AnyHistory</code> and <code>AnyLocation</code>",id:"anyhistory-and-anylocation",level:4},{value:"<code>BrowserHistory</code> and <code>BrowserLocation</code>",id:"browserhistory-and-browserlocation",level:4},{value:"Navigation",id:"navigation",level:3},{value:"Link",id:"link",level:4},{value:"History API",id:"history-api",level:4},{value:"Function Components",id:"function-components",level:5},{value:"Struct Components",id:"struct-components",level:5},{value:"Redirect",id:"redirect",level:4},{value:"Listening to Changes",id:"listening-to-changes",level:3},{value:"Function Components",id:"function-components-1",level:4},{value:"Struct Components",id:"struct-components-1",level:4},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Specifying query parameters when navigating",id:"specifying-query-parameters-when-navigating",level:4},{value:"Obtaining query parameters for current route",id:"obtaining-query-parameters-for-current-route",level:4},{value:"Nested Router",id:"nested-router",level:2},{value:"Relevant examples",id:"relevant-examples",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Routers in Single Page Applications (SPA) handle displaying different pages depending on what the URL is. Instead of the\r\ndefault behavior of requesting a different remote resource when a link is clicked, the router instead sets the URL\r\nlocally to point to a valid route in your application. The router then detects this change and then decides what to\r\nrender."}),"\n",(0,r.jsxs)(n.p,{children:["Yew provides router support in the ",(0,r.jsx)(n.code,{children:"yew-router"})," crate. To start using it, add the dependency to your ",(0,r.jsx)(n.code,{children:"Cargo.toml"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'yew-router = "0.16"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The utilities needed are provided under ",(0,r.jsx)(n.code,{children:"yew_router::prelude"}),","]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["You start by defining a ",(0,r.jsx)(n.code,{children:"Route"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Routes are defined as an ",(0,r.jsx)(n.code,{children:"enum"})," which derives ",(0,r.jsx)(n.code,{children:"Routable"}),". This enum must be ",(0,r.jsx)(n.code,{children:"Clone + PartialEq"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew_router::prelude::*;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/secure")]\r\n    Secure,\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"Route"})," is paired with a ",(0,r.jsx)(n.code,{children:"<Switch />"})," component, which finds the variant whose path matches the browser's\r\ncurrent URL and passes it to the ",(0,r.jsx)(n.code,{children:"render"})," callback. The callback then decides what to render. In case no path is\r\nmatched, the router navigates to the path with ",(0,r.jsx)(n.code,{children:"not_found"})," attribute. If no route is specified, nothing is rendered, and\r\na message is logged to console stating that no route was matched."]}),"\n",(0,r.jsxs)(n.p,{children:["Most of yew-router's components, in particular ",(0,r.jsx)(n.code,{children:"<Link />"})," and ",(0,r.jsx)(n.code,{children:"<Switch />"}),", must be (grand-)children of one of the Router components\r\n(e.g. ",(0,r.jsx)(n.code,{children:"<BrowserRouter />"}),"). You usually only need a single Router in your app, most often rendered immediately by your most top-level ",(0,r.jsx)(n.code,{children:"<App />"}),"\r\ncomponent. The Router registers a context, which is needed for Links and Switches to function. An example is shown below."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.code,{children:"yew-router"})," in browser environment, ",(0,r.jsx)(n.code,{children:"<BrowserRouter />"})," is highly recommended.\r\nYou can find other router flavours in the ",(0,r.jsx)(n.a,{href:"https://docs.rs/yew-router/",children:"API Reference"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew_router::prelude::*;\r\nuse yew::prelude::*;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/secure")]\r\n    Secure,\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\r\n\r\n#[function_component(Secure)]\r\nfn secure() -> Html {\r\n    let history = use_history().unwrap();\r\n\r\n    let onclick = Callback::once(move |_| history.push(Route::Home));\r\n    html! {\r\n        <div>\r\n            <h1>{ "Secure" }</h1>\r\n            <button {onclick}>{ "Go Home" }</button>\r\n        </div>\r\n    }\r\n}\r\n\r\nfn switch(routes: &Route) -> Html {\r\n    match routes {\r\n        Route::Home => html! { <h1>{ "Home" }</h1> },\r\n        Route::Secure => html! {\r\n            <Secure />\r\n        },\r\n        Route::NotFound => html! { <h1>{ "404" }</h1> },\r\n    }\r\n}\r\n\r\n#[function_component(Main)]\r\nfn app() -> Html {\r\n    html! {\r\n        <BrowserRouter>\r\n            <Switch<Route> render={Switch::render(switch)} /> // <- must be child of <BrowserRouter>\r\n        </BrowserRouter>\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"path-segments",children:"Path Segments"}),"\n",(0,r.jsxs)(n.p,{children:["It is also possible to extract information from a route.\r\nYou can then access the post's id inside ",(0,r.jsx)(n.code,{children:"<Switch />"})," and forward it to the appropriate component via properties."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse yew_router::prelude::*;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/post/:id")]\r\n    Post { id: String },\r\n}\r\n\r\nfn switch(route: &Route) -> Html {\r\n    match route {\r\n        Route::Home => html! { <h1>{ "Home" }</h1> },\r\n        Route::Post { id } => html! {<p>{format!("You are looking at Post {}", id)}</p>},\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can have a normal ",(0,r.jsx)(n.code,{children:"Post"})," variant instead of ",(0,r.jsx)(n.code,{children:"Post {id: String}"})," too. For example when ",(0,r.jsx)(n.code,{children:"Post"})," is rendered\r\nwith another router, the field can then be redundant as the other router is able to match and handle the path. See the\r\n",(0,r.jsx)(n.a,{href:"#nested-router",children:"Nested Router"})," section below for details"]})}),"\n",(0,r.jsxs)(n.p,{children:["Note the fields must implement ",(0,r.jsx)(n.code,{children:"Clone + PartialEq"})," as part of the ",(0,r.jsx)(n.code,{children:"Route"})," enum. They must also implement\r\n",(0,r.jsx)(n.code,{children:"std::fmt::Display"})," and ",(0,r.jsx)(n.code,{children:"std::str::FromStr"})," for serialization and deserialization. Primitive types like integer, float,\r\nand String already satisfy the requirements."]}),"\n",(0,r.jsxs)(n.p,{children:["In case when the form of the path matches, but the deserialization fails (as per ",(0,r.jsx)(n.code,{children:"FromStr"}),"). The router will consider\r\nthe route as unmatched and try to render the not found route (or a blank page if the not found route is unspecified)."]}),"\n",(0,r.jsx)(n.p,{children:"Consider this example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'#[derive(Clone, Routable, PartialEq)]\r\nenum Route {\r\n    #[at("/news/:id")]\r\n    News { id: u8 },\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\r\n// switch function renders News and id as is. Omitted here.\n'})}),"\n",(0,r.jsxs)(n.p,{children:["When the segment goes over 255, ",(0,r.jsx)(n.code,{children:"u8::from_str()"})," fails with ",(0,r.jsx)(n.code,{children:"ParseIntError"}),", the router will then consider the route\r\nunmatched."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"router deserialization failure behavior",src:t(7328).A+"",width:"541",height:"139"})}),"\n",(0,r.jsxs)(n.p,{children:["For more information about the route syntax and how to bind parameters, check\r\nout ",(0,r.jsx)(n.a,{href:"https://docs.rs/route-recognizer/0.3.1/route_recognizer/#routing-params",children:"route-recognizer"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"history-and-location",children:"History and Location"}),"\n",(0,r.jsxs)(n.p,{children:["The router provides a universal ",(0,r.jsx)(n.code,{children:"History"})," and ",(0,r.jsx)(n.code,{children:"Location"})," struct which can be used to access routing information. They\r\ncan be retrieved by hooks or convenient functions on ",(0,r.jsx)(n.code,{children:"ctx.link()"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"They have a couple flavours:"}),"\n",(0,r.jsxs)(n.h4,{id:"anyhistory-and-anylocation",children:[(0,r.jsx)(n.code,{children:"AnyHistory"})," and ",(0,r.jsx)(n.code,{children:"AnyLocation"})]}),"\n",(0,r.jsxs)(n.p,{children:["These types are available with all routers and should be used whenever possible. They implement a subset\r\nof ",(0,r.jsx)(n.code,{children:"window.history"})," and ",(0,r.jsx)(n.code,{children:"window.location"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can access them using the following hooks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"use_history"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"use_location"})}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"browserhistory-and-browserlocation",children:[(0,r.jsx)(n.code,{children:"BrowserHistory"})," and ",(0,r.jsx)(n.code,{children:"BrowserLocation"})]}),"\n",(0,r.jsxs)(n.p,{children:["These are only available when ",(0,r.jsx)(n.code,{children:"<BrowserRouter />"})," is used. They provide additional functionality that is not available\r\nin ",(0,r.jsx)(n.code,{children:"AnyHistory"})," and\r\n",(0,r.jsx)(n.code,{children:"AnyLocation"})," (such as: ",(0,r.jsx)(n.code,{children:"location.host"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"navigation",children:"Navigation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"yew_router"})," provides a handful of tools to work with navigation."]}),"\n",(0,r.jsx)(n.h4,{id:"link",children:"Link"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"<Link/>"})," renders as an ",(0,r.jsx)(n.code,{children:"<a>"})," element, the ",(0,r.jsx)(n.code,{children:"onclick"})," event handler will call\r\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",children:"preventDefault"}),", and push the targeted page to the\r\nhistory and render the desired page, which is what should be expected from a Single Page App. The default onclick of a\r\nnormal anchor element would reload the page."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<Link/>"})," element also passes its children to the ",(0,r.jsx)(n.code,{children:"<a>"})," element. Consider it a replacement of ",(0,r.jsx)(n.code,{children:"<a/>"})," for in-app\r\nroutes. Except you supply a ",(0,r.jsx)(n.code,{children:"to"})," attribute instead of a ",(0,r.jsx)(n.code,{children:"href"}),". An example usage:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'<Link<Route> to={Route::Home}>{ "click here to go home" }</Link<Route>>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Struct variants work as expected too:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'<Link<Route> to={Route::Post { id: "new-yew-release".to_string() }}>{ "Yew v0.19 out now!" }</Link<Route>>\n'})}),"\n",(0,r.jsx)(n.h4,{id:"history-api",children:"History API"}),"\n",(0,r.jsxs)(n.p,{children:["History API is provided for both function components and struct components. They can enable callbacks to change the\r\nroute. An ",(0,r.jsx)(n.code,{children:"AnyHistory"})," instance can be obtained in either cases to manipulate the route."]}),"\n",(0,r.jsx)(n.h5,{id:"function-components",children:"Function Components"}),"\n",(0,r.jsxs)(n.p,{children:["For function components, the ",(0,r.jsx)(n.code,{children:"use_history"})," hook re-renders the component and returns the current route whenever the\r\nhistory changes. Here's how to implement a button that navigates to the ",(0,r.jsx)(n.code,{children:"Home"})," route when clicked."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'#[function_component(MyComponent)]\r\npub fn my_component() -> Html {\r\n    let history = use_history().unwrap();\r\n    let onclick = Callback::once(move |_| history.push(Route::Home));\r\n\r\n    html! {\r\n        <>\r\n            <button {onclick}>{"Click to go home"}</button>\r\n        </>\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The example here uses ",(0,r.jsx)(n.code,{children:"Callback::once"}),". Use a normal callback if the target route can be the same with the route\r\nthe component is in. For example when you have a logo button on every page the that goes back to home when clicked,\r\nclicking that button twice on home page causes the code to panic because the second click pushes an identical Home route\r\nand won't trigger a re-render of the element."]}),(0,r.jsxs)(n.p,{children:["In other words, only use ",(0,r.jsx)(n.code,{children:"Callback::once"})," when you are sure the target route is different. Or use normal callbacks only\r\nto be safe."]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to replace the current history instead of pushing a new history onto the stack, use ",(0,r.jsx)(n.code,{children:"history.replace()"}),"\r\ninstead of ",(0,r.jsx)(n.code,{children:"history.push()"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You may notice ",(0,r.jsx)(n.code,{children:"history"})," has to move into the callback, so it can't be used again for other callbacks. Luckily ",(0,r.jsx)(n.code,{children:"history"}),"\r\nimplements ",(0,r.jsx)(n.code,{children:"Clone"}),", here's for example how to have multiple buttons to different routes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'use yew::prelude::*;\r\nuse yew_router::prelude::*;\r\n\r\n#[function_component(NavItems)]\r\npub fn nav_items() -> Html {\r\n    let history = use_history().unwrap();\r\n\r\n    let go_home_button = {\r\n        let history = history.clone();\r\n        let onclick = Callback::once(move |_| history.push(Route::Home));\r\n        html! {\r\n            <button {onclick}>{"click to go home"}</button>\r\n        }\r\n    };\r\n\r\n    let go_to_first_post_button = {\r\n        let history = history.clone();\r\n        let onclick = Callback::once(move |_| history.push(Route::Post { id: "first-post".to_string() }));\r\n        html! {\r\n            <button {onclick}>{"click to go the first post"}</button>\r\n        }\r\n    };\r\n\r\n    let go_to_secure_button = {\r\n        let onclick = Callback::once(move |_| history.push(Route::Secure));\r\n        html! {\r\n            <button {onclick}>{"click to go to secure"}</button>\r\n        }\r\n    };\r\n\r\n    html! {\r\n        <>\r\n            {go_home_button}\r\n            {go_to_first_post_button}\r\n            {go_to_secure_button}\r\n        </>\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h5,{id:"struct-components",children:"Struct Components"}),"\n",(0,r.jsxs)(n.p,{children:["For struct components, the ",(0,r.jsx)(n.code,{children:"AnyHistory"})," instance can be obtained through the ",(0,r.jsx)(n.code,{children:"ctx.link().history()"})," API. The rest is\r\nidentical with the function component case. Here's an example of a view function that renders a single button."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'fn view(&self, ctx: &Context<Self>) -> Html {\r\n    let history = ctx.link().history().unwrap();\r\n    let onclick = Callback::once(move |_| history.push(MainRoute::Home));\r\n    html!{\r\n        <button {onclick}>{"Go Home"}</button>\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"redirect",children:"Redirect"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"yew-router"})," also provides a ",(0,r.jsx)(n.code,{children:"<Redirect/>"})," element in the prelude. It can be used to achieve similar effects as the\r\nhistory API. The element accepts a\r\n",(0,r.jsx)(n.code,{children:"to"})," attribute as the target route. When a ",(0,r.jsx)(n.code,{children:"<Redirect/>"})," element is rendered, it internally calls ",(0,r.jsx)(n.code,{children:"history.push()"})," and\r\nchanges the route. Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:'#[function_component(SomePage)]\r\nfn some_page() -> Html {\r\n    // made-up hook `use_user`\r\n    let user = match use_user() {\r\n        Some(user) => user,\r\n        // an early return that redirects to the login page\r\n        // technicality: `Redirect` actually renders an empty html. But since it also pushes history, the target page\r\n        // shows up immediately. Consider it a "side-effect" component.\r\n        None => return html! {\r\n            <Redirect<Route> to={Route::Login}/>\r\n        },\r\n    };\r\n    // ... actual page content.\r\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.code,{children:"Redirect"})," vs ",(0,r.jsx)(n.code,{children:"history"}),", which to use"]}),(0,r.jsxs)(n.p,{children:["The history API is the only way to manipulate route in callbacks.\r\nWhile ",(0,r.jsx)(n.code,{children:"<Redirect/>"})," can be used as return values in a component. You might also want to use ",(0,r.jsx)(n.code,{children:"<Redirect/>"})," in other\r\nnon-component context, for example in the switch function of a ",(0,r.jsx)(n.a,{href:"#nested-router",children:"Nested Router"}),"."]})]}),"\n",(0,r.jsx)(n.h3,{id:"listening-to-changes",children:"Listening to Changes"}),"\n",(0,r.jsx)(n.h4,{id:"function-components-1",children:"Function Components"}),"\n",(0,r.jsxs)(n.p,{children:["Alongside the ",(0,r.jsx)(n.code,{children:"use_history"})," hook, there are also ",(0,r.jsx)(n.code,{children:"use_location"})," and ",(0,r.jsx)(n.code,{children:"use_route"}),". Your components will re-render when\r\nprovided values change."]}),"\n",(0,r.jsx)(n.h4,{id:"struct-components-1",children:"Struct Components"}),"\n",(0,r.jsxs)(n.p,{children:["In order to react on route changes, you can pass a callback closure to the ",(0,r.jsx)(n.code,{children:"add_history_listener()"})," method of ",(0,r.jsx)(n.code,{children:"ctx.link()"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The history listener will get unregistered once it is dropped. Make sure to store the handle inside your\r\ncomponent state."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:",ignore",children:"fn create(ctx: &Context<Self>) -> Self {\r\n    let listener = ctx.link()\r\n        .add_history_listener(ctx.link().callback(\r\n            // handle event\r\n        ))\r\n        .unwrap();\r\n    MyComponent {\r\n        _listener: listener\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ctx.link().location()"})," and ",(0,r.jsx)(n.code,{children:"ctx.link().route::<R>()"})," can also be used to retrieve the location and the route once."]}),"\n",(0,r.jsx)(n.h3,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,r.jsx)(n.h4,{id:"specifying-query-parameters-when-navigating",children:"Specifying query parameters when navigating"}),"\n",(0,r.jsxs)(n.p,{children:["In order to specify query parameters when navigating to a new route, use either ",(0,r.jsx)(n.code,{children:"history.push_with_query"})," or\r\nthe ",(0,r.jsx)(n.code,{children:"history.replace_with_query"})," functions. It uses ",(0,r.jsx)(n.code,{children:"serde"})," to serialize the parameters into query string for the URL so\r\nany type that implements ",(0,r.jsx)(n.code,{children:"Serialize"})," can be passed. In its simplest form this is just a ",(0,r.jsx)(n.code,{children:"HashMap"})," containing string\r\npairs."]}),"\n",(0,r.jsx)(n.h4,{id:"obtaining-query-parameters-for-current-route",children:"Obtaining query parameters for current route"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"location.query"})," is used to obtain the query parameters. It uses ",(0,r.jsx)(n.code,{children:"serde"})," to deserialize the parameters from query string\r\nin the URL."]}),"\n",(0,r.jsx)(n.h2,{id:"nested-router",children:"Nested Router"}),"\n",(0,r.jsx)(n.p,{children:"Nested router can be useful when the app grows larger. Consider the following router structure:"}),"\n","\n",(0,r.jsx)(s.A,{alt:"nested router structure",sources:{light:(0,i.Ay)("/img/nested-router-light.svg"),dark:(0,i.Ay)("/img/nested-router-dark.svg")}}),"\n",(0,r.jsx)(n.p,{children:";"}),"\n",(0,r.jsxs)(n.p,{children:["The nested ",(0,r.jsx)(n.code,{children:"SettingsRouter"})," handles all urls that start with ",(0,r.jsx)(n.code,{children:"/settings"}),". Additionally, it redirects urls that are not\r\nmatched to the main ",(0,r.jsx)(n.code,{children:"NotFound"})," route. So ",(0,r.jsx)(n.code,{children:"/settings/gibberish"})," will redirect to ",(0,r.jsx)(n.code,{children:"/404"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"It can be implemented with the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\nuse yew_router::prelude::*;\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum MainRoute {\r\n    #[at("/")]\r\n    Home,\r\n    #[at("/news")]\r\n    News,\r\n    #[at("/contact")]\r\n    Contact,\r\n    #[at("/settings/:s")]\r\n    Settings,\r\n    #[not_found]\r\n    #[at("/404")]\r\n    NotFound,\r\n}\r\n\r\n#[derive(Clone, Routable, PartialEq)]\r\nenum SettingsRoute {\r\n    #[at("/settings/profile")]\r\n    Profile,\r\n    #[at("/settings/friends")]\r\n    Friends,\r\n    #[at("/settings/theme")]\r\n    Theme,\r\n    #[not_found]\r\n    #[at("/settings/404")]\r\n    NotFound,\r\n}\r\n\r\nfn switch_main(route: &MainRoute) -> Html {\r\n    match route {\r\n        MainRoute::Home => html! {<h1>{"Home"}</h1>},\r\n        MainRoute::News => html! {<h1>{"News"}</h1>},\r\n        MainRoute::Contact => html! {<h1>{"Contact"}</h1>},\r\n        MainRoute::Settings => html! {\r\n            <Switch<SettingsRoute> render={Switch::render(switch_settings)} />\r\n        },\r\n        MainRoute::NotFound => html! {<h1>{"Not Found"}</h1>},\r\n    }\r\n}\r\n\r\nfn switch_settings(route: &SettingsRoute) -> Html {\r\n    match route {\r\n        SettingsRoute::Profile => html! {<h1>{"Profile"}</h1>},\r\n        SettingsRoute::Friends => html! {<h1>{"Friends"}</h1>},\r\n        SettingsRoute::Theme => html! {<h1>{"Theme"}</h1>},\r\n        SettingsRoute::NotFound => html! {\r\n            <Redirect<MainRoute> to={MainRoute::NotFound}/>\r\n        }\r\n    }\r\n}\r\n\r\n#[function_component(App)]\r\npub fn app() -> Html {\r\n    html! {\r\n        <BrowserRouter>\r\n            <Switch<MainRoute> render={Switch::render(switch_main)} />\r\n        </BrowserRouter>\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"relevant-examples",children:"Relevant examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/yew-v0.19.3/examples/router",children:"Router"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7328:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/router-deserialization-failure-behavior-d9ab796254f96206e7c6682abc4bf552.gif"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);