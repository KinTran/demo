"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2857],{6281:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(4848),s=r(8453);const o={id:"fetch",title:"Fetch"},i=void 0,c={id:"concepts/services/fetch",title:"Fetch",description:"Introduction",source:"@site/versioned_docs/version-0.18.0/concepts/services/fetch.mdx",sourceDirName:"concepts/services",slug:"/concepts/services/fetch",permalink:"/demo/zh-Hant/docs/0.18.0/concepts/services/fetch",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/services/fetch.mdx",tags:[],version:"0.18.0",frontMatter:{id:"fetch",title:"Fetch"},sidebar:"docs",previous:{title:"Overview",permalink:"/demo/zh-Hant/docs/0.18.0/concepts/services/introduction"},next:{title:"Format",permalink:"/demo/zh-Hant/docs/0.18.0/concepts/services/format"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Making requests",id:"making-requests",level:2},{value:"Building requests",id:"building-requests",level:3},{value:"Dispatching requests",id:"dispatching-requests",level:3},{value:"Debugging the <code>FetchService</code>",id:"debugging-the-fetchservice",level:2},{value:"Further reading",id:"further-reading",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The fetch service can be used to make HTTP requests to a server. This enables applications to\r\ncommunicate with external services."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You might find it helpful to read the ",(0,t.jsx)(n.a,{href:"/demo/zh-Hant/docs/0.18.0/concepts/services/format",children:"documentation for the format module"})," before\r\nreading this page."]})}),"\n",(0,t.jsx)(n.h2,{id:"making-requests",children:"Making requests"}),"\n",(0,t.jsx)(n.h3,{id:"building-requests",children:"Building requests"}),"\n",(0,t.jsxs)(n.p,{children:["Yew re-exports the ",(0,t.jsx)(n.code,{children:"Request"})," struct from the ",(0,t.jsx)(n.code,{children:"http"})," crate that is used to 'build' requests\r\nbefore they can be dispatched to a server. The value of the request body must implement\r\n",(0,t.jsx)(n.code,{children:"Into<Text>"})," or ",(0,t.jsx)(n.code,{children:"Into<Binary>"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Text"})," and ",(0,t.jsx)(n.code,{children:"Binary"})," are type aliases for the following ",(0,t.jsx)(n.code,{children:"Result"})," types:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub type Text = Result<String, Error>;\r\npub type Binary = Result<Vec<u8>, Error>;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here is what a typical GET request will look like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::format::Nothing;\r\nuse yew::services::fetch::Request;\r\nlet get_request = Request::get("https://example.com/api/v1/get/something")\r\n    .body(Nothing)\r\n    .expect("Could not build that request");\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here is what a typical POST request will look like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use serde_json::json;\r\nuse yew::format::Json;\r\nuse yew::services::fetch::Request;\r\nlet post_request = Request::post("https://example.com/api/v1/post/something")\r\n    .header("Content-Type", "application/json")\r\n    .body(Json(&json!({"key": "value"})))\r\n    .expect("Could not build that request.");\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Note that the structs in the format module take references to values instead of values\r\n(i.e. ",(0,t.jsx)(n.code,{children:"&T"})," not ",(0,t.jsx)(n.code,{children:"T"}),")."]})}),"\n",(0,t.jsx)(n.h3,{id:"dispatching-requests",children:"Dispatching requests"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"FetchService"})," provides a binding to the browser's ",(0,t.jsx)(n.code,{children:"fetch"})," API. Requests can be sent using\r\neither ",(0,t.jsx)(n.code,{children:"FetchService::fetch"})," or ",(0,t.jsx)(n.code,{children:"FetchService::fetch_with_options"})," (",(0,t.jsx)(n.code,{children:"fetch_with_options"})," should be\r\nused when cookies need to be sent with a request)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FetchService::fetch"})," accepts two parameters: a ",(0,t.jsx)(n.code,{children:"Request"})," object and a ",(0,t.jsx)(n.code,{children:"Callback"}),". The ",(0,t.jsx)(n.code,{children:"Callback"})," is\r\ncalled once the request has completed allowing you to handle the data returned from the request.\r\nThe callback you pass needs to take a single parameter of type ",(0,t.jsx)(n.code,{children:"Response<T>"})," where ",(0,t.jsx)(n.code,{children:"T"})," is the body\r\nof the response. Yew needs to be able to parse the response body to create an instance of the data\r\ntype ",(0,t.jsx)(n.code,{children:"T"})," so it needs to implement ",(0,t.jsx)(n.code,{children:"From<Text>"})," or ",(0,t.jsx)(n.code,{children:"From<Binary>"}),". To fetch data in a binary format\r\nyou should use ",(0,t.jsx)(n.code,{children:"FetchService::fetch_binary"})," rather than ",(0,t.jsx)(n.code,{children:"FetchService::fetch"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Because something could go wrong trying to deserialize data ",(0,t.jsx)(n.code,{children:"From<Text>"})," and ",(0,t.jsx)(n.code,{children:"From<Binary>"})," are only\r\nimplemented for ",(0,t.jsx)(n.code,{children:"FormatDataType<Result<T, ::anyhow::Error>>"})," (not ",(0,t.jsx)(n.code,{children:"FormatDataType<T>"}),") where\r\n",(0,t.jsx)(n.code,{children:"FormatDataType"})," is used as a placeholder for any type in the format module (e.g. ",(0,t.jsx)(n.code,{children:"Json"}),")."]}),(0,t.jsx)(n.p,{children:"This means that your callbacks should look like"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use yew::format::Json;\r\n\r\nself.link.callback(|response: Json<anyhow::Result<ResponseType>>|)\n"})}),(0,t.jsx)(n.p,{children:"rather than"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use yew::format::Json;\r\n\r\nself.link.callback(|response: Json<ResponseType>|)\n"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"FetchTask"})," is dropped before the request has finished, it will be cancelled.\r\nMake sure to keep it around!"]})}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:['If you keep getting an error saying that "the operation was aborted" or "Error 408" this might be\r\nbecause the ',(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS headers"})," of the website\r\nyou are trying to access are not set correctly. Please see the linked article from Mozilla about\r\nhow to resolve these errors."]})}),"\n",(0,t.jsx)(n.p,{children:"An illustrated example of how to fetch data from an API giving information about the ISS's\r\n(International Space Station) location is given below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'// requires the serde and anyhow crates\r\n\r\nuse serde::Deserialize;\r\nuse yew::{\r\n    format::{Json, Nothing},\r\n    prelude::*,\r\n    services::fetch::{FetchService, FetchTask, Request, Response},\r\n};\r\n\r\n#[derive(Deserialize, Debug, Clone)]\r\npub struct ISSPosition {\r\n    latitude: String,\r\n    longitude: String,\r\n}\r\n\r\n#[derive(Deserialize, Debug, Clone)]\r\npub struct ISS {\r\n    message: String,\r\n    timestamp: i32,\r\n    iss_position: ISSPosition,\r\n}\r\n\r\n#[derive(Debug)]\r\npub enum Msg {\r\n    GetLocation,\r\n    ReceiveResponse(Result<ISS, anyhow::Error>),\r\n}\r\n\r\n#[derive(Debug)]\r\npub struct FetchServiceExample {\r\n    fetch_task: Option<FetchTask>,\r\n    iss: Option<ISS>,\r\n    link: ComponentLink<Self>,\r\n    error: Option<String>,\r\n}\r\n/// Some of the code to render the UI is split out into smaller functions here to make the code\r\n/// cleaner and show some useful design patterns.\r\nimpl FetchServiceExample {\r\n    fn view_iss_location(&self) -> Html {\r\n        match self.iss {\r\n            Some(ref space_station) => {\r\n                html! {\r\n                    <>\r\n                        <p>{ "The ISS is at:" }</p>\r\n                        <p>{ format!("Latitude: {}", space_station.iss_position.latitude) }</p>\r\n                        <p>{ format!("Longitude: {}", space_station.iss_position.longitude) }</p>\r\n                    </>\r\n                }\r\n            }\r\n            None => {\r\n                html! {\r\n                     <button onclick=self.link.callback(|_| Msg::GetLocation)>\r\n                         { "Where is the ISS?" }\r\n                     </button>\r\n                }\r\n            }\r\n        }\r\n    }\r\n    fn view_fetching(&self) -> Html {\r\n        if self.fetch_task.is_some() {\r\n            html! { <p>{ "Fetching data..." }</p> }\r\n        } else {\r\n            html! { <p></p> }\r\n        }\r\n    }\r\n    fn view_error(&self) -> Html {\r\n        if let Some(ref error) = self.error {\r\n            html! { <p>{ error.clone() }</p> }\r\n        } else {\r\n            html! {}\r\n        }\r\n    }\r\n}\r\nimpl Component for FetchServiceExample {\r\n    type Message = Msg;\r\n    type Properties = ();\r\n\r\n    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {\r\n        Self {\r\n            fetch_task: None,\r\n            iss: None,\r\n            link,\r\n            error: None,\r\n        }\r\n    }\r\n    fn change(&mut self, _props: Self::Properties) -> bool {\r\n        false\r\n    }\r\n    fn update(&mut self, msg: Self::Message) -> bool {\r\n        use Msg::*;\r\n\r\n        match msg {\r\n            GetLocation => {\r\n                // 1. build the request\r\n                let request = Request::get("http://api.open-notify.org/iss-now.json")\r\n                    .body(Nothing)\r\n                    .expect("Could not build request.");\r\n                // 2. construct a callback\r\n                let callback =\r\n                    self.link\r\n                        .callback(|response: Response<Json<Result<ISS, anyhow::Error>>>| {\r\n                            let Json(data) = response.into_body();\r\n                            Msg::ReceiveResponse(data)\r\n                        });\r\n                // 3. pass the request and callback to the fetch service\r\n                let task = FetchService::fetch(request, callback).expect("failed to start request");\r\n                // 4. store the task so it isn\'t canceled immediately\r\n                self.fetch_task = Some(task);\r\n                // we want to redraw so that the page displays a \'fetching...\' message to the user\r\n                // so return \'true\'\r\n                true\r\n            }\r\n            ReceiveResponse(response) => {\r\n                match response {\r\n                    Ok(location) => {\r\n                        self.iss = Some(location);\r\n                    }\r\n                    Err(error) => {\r\n                        self.error = Some(error.to_string())\r\n                    }\r\n                }\r\n                self.fetch_task = None;\r\n                // we want to redraw so that the page displays the location of the ISS instead of\r\n                // \'fetching...\'\r\n                true\r\n            }\r\n        }\r\n    }\r\n    fn view(&self) -> Html {\r\n        html! {\r\n            <>\r\n                { self.view_fetching() }\r\n                { self.view_iss_location() }\r\n                { self.view_error() }\r\n            </>\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"debugging-the-fetchservice",children:["Debugging the ",(0,t.jsx)(n.code,{children:"FetchService"})]}),"\n",(0,t.jsx)(n.p,{children:'Most browsers\' developer tools have a "network" panel which can be used to inspect HTTP requests.\r\nThis can be used to gain insight into what requests are being made, the data being sent to the\r\nserver, as well as the response.'}),"\n",(0,t.jsxs)(n.p,{children:["The Rust Wasm Book also contains ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/book/reference/debugging.html",children:"useful debugging tips"}),"\r\nfor Wasm applications."]}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.rs/yew/0.18.0/yew/services/fetch/index.html",children:"The API documentation"})}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/v0.18/examples/dashboard",children:"dashboard"})," example"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/book/reference/debugging.html",children:"The Rust Wasm Book on debugging Wasm applications"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(6540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);