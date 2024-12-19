"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4637],{189:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),i=s(8453);const r={title:"Introduction"},a=void 0,o={id:"concepts/wasm-bindgen/wasm-bindgen",title:"Introduction",description:"wasm-bindgen is a library and tool to facilitate",source:"@site/versioned_docs/version-0.18.0/concepts/wasm-bindgen/wasm-bindgen.mdx",sourceDirName:"concepts/wasm-bindgen",slug:"/concepts/wasm-bindgen/",permalink:"/zh-Hant/docs/0.18.0/concepts/wasm-bindgen/",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.18.0/concepts/wasm-bindgen/wasm-bindgen.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Refs",permalink:"/zh-Hant/docs/0.18.0/concepts/components/refs"},next:{title:"web-sys",permalink:"/zh-Hant/docs/0.18.0/concepts/wasm-bindgen/web-sys"}},c={},d=[{value:"<code>wasm-bindgen</code>",id:"wasm-bindgen",level:2},{value:"<code>#[wasm_bindgen]</code> macro",id:"wasm_bindgen-macro",level:3},{value:"Simulating inheritance",id:"simulating-inheritance",level:3},{value:"<code>JsValue</code>",id:"jsvalue",level:3},{value:"<code>JsCast</code>",id:"jscast",level:3},{value:"<code>Closure</code>",id:"closure",level:3},{value:"<code>js-sys</code>",id:"js-sys",level:2},{value:"<code>wasm-bindgen-futures</code>",id:"wasm-bindgen-futures",level:2},{value:"<code>spawn_local</code>",id:"spawn_local",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/rustwasm/wasm-bindgen",children:(0,t.jsx)(n.code,{children:"wasm-bindgen"})})," is a library and tool to facilitate\r\nhigh-level interactions between Wasm modules and JavaScript; it is built with Rust by\r\n",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/",children:"The Rust and WebAssembly Working Group"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Yew builds off wasm-bindgen and specifically uses the following of its crates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://crates.io/crates/js-sys",children:(0,t.jsx)(n.code,{children:"js-sys"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,t.jsx)(n.code,{children:"wasm-bindgen"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,t.jsx)(n.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://crates.io/crates/web-sys",children:(0,t.jsx)(n.code,{children:"web-sys"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This section will explore some of these crates in a high level in order to make it easier to understand\r\nand use ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," APIs with Yew. For a more in-depth guide into ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," and it's associated\r\ncrates then check out ",(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:["The ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," Guide"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For documentation on the above crates check out ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/index.html",children:(0,t.jsx)(n.code,{children:"wasm-bindgen docs.rs"})}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," doc.rs search to find browser APIs and JavaScript types that have been imported\r\nover using ",(0,t.jsx)(n.code,{children:"wasm-bindgen"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"wasm-bindgen",children:(0,t.jsx)(n.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,t.jsx)(n.code,{children:"wasm-bindgen"})})}),"\n",(0,t.jsxs)(n.p,{children:["This crate provides many of the building blocks for the rest of the crates above. In this section we\r\nare only going to cover two main areas of the ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," crate and that is the macro and some of\r\nthe types / traits you will see pop up again and again."]}),"\n",(0,t.jsxs)(n.h3,{id:"wasm_bindgen-macro",children:[(0,t.jsx)(n.code,{children:"#[wasm_bindgen]"})," macro"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"#[wasm_bindgen]"})," macro, in a high level view, is your translator between Rust and JavaScript, it\r\nallows you to describe imported JavaScript types in terms of Rust and vice versa. Using this macro\r\nis more advanced and you shouldn't need to reach for it unless you are trying to interop with an\r\nexternal JavaScript library. The ",(0,t.jsx)(n.code,{children:"js-sys"})," and ",(0,t.jsx)(n.code,{children:"web-sys"})," crates are essentially imported types using\r\nthis macro for JavaScript types and the browser API respectively."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's go over a simple example of using the ",(0,t.jsx)(n.code,{children:"#[wasm-bindgen]"})," macro to import some specific flavours\r\nof the ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log",children:(0,t.jsx)(n.code,{children:"console.log"})}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",no_run",children:'use wasm_bindgen::prelude::*;\r\n\r\n// First up let\'s take a look of binding `console.log` manually, without the\r\n// help of `web_sys`. Here we\'re writing the `#[wasm_bindgen]` annotations\r\n// manually ourselves, and the correctness of our program relies on the\r\n// correctness of these annotations!\r\n#[wasm_bindgen]\r\nextern "C" {\r\n\r\n    // Use `js_namespace` here to bind `console.log(..)` instead of just\r\n    // `log(..)`\r\n    #[wasm_bindgen(js_namespace = console)]\r\n    fn log(s: &str);\r\n\r\n    // The `console.log` is quite polymorphic, so we can bind it with multiple\r\n    // signatures. Note that we need to use `js_name` to ensure we always call\r\n    // `log` in JS.\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_u32(a: u32);\r\n\r\n    // Multiple arguments too!\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_many(a: &str, b: &str);\r\n}\r\n\r\n// using the imported functions!\r\nlog("Hello from Rust!");\r\nlog_u32(42);\r\nlog_many("Logging", "many values!");\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.em,{children:["This example was adapted from ",(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/examples/console-log.html",children:["1.2 Using console.log of The ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," Guide"]})]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"simulating-inheritance",children:"Simulating inheritance"}),"\n",(0,t.jsxs)(n.p,{children:["Inheritance between JavaScript classes is a big part of the language and is a major part of how the\r\nDocument Object Model (DOM). When types are imported using ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," you can\r\nalso add attributes that describe it's inheritance."]}),"\n",(0,t.jsxs)(n.p,{children:["In Rust this inheritance is simulated using the ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/ops/trait.Deref.html",children:(0,t.jsx)(n.code,{children:"Deref"})}),"\r\nand ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/convert/trait.AsRef.html",children:(0,t.jsx)(n.code,{children:"AsRef"})})," traits. An example of this\r\nmight help; so say you have three types ",(0,t.jsx)(n.code,{children:"A"}),", ",(0,t.jsx)(n.code,{children:"B"}),", and ",(0,t.jsx)(n.code,{children:"C"})," where ",(0,t.jsx)(n.code,{children:"C"})," extends ",(0,t.jsx)(n.code,{children:"B"})," which in turn\r\nextends ",(0,t.jsx)(n.code,{children:"A"}),".\r\nWhen importing these types the ",(0,t.jsx)(n.code,{children:"#[wasm-bindgen]"})," macro will implement the ",(0,t.jsx)(n.code,{children:"Deref"})," and ",(0,t.jsx)(n.code,{children:"AsRef"}),"\r\ntraits in the following way:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"C"})," can ",(0,t.jsx)(n.code,{children:"Deref"})," to ",(0,t.jsx)(n.code,{children:"B"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"B"})," can ",(0,t.jsx)(n.code,{children:"Deref"})," to ",(0,t.jsx)(n.code,{children:"A"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"C"})," can be ",(0,t.jsx)(n.code,{children:"AsRef"})," to ",(0,t.jsx)(n.code,{children:"B"})]}),"\n",(0,t.jsxs)(n.li,{children:["Both ",(0,t.jsx)(n.code,{children:"C"})," & ",(0,t.jsx)(n.code,{children:"B"})," can be ",(0,t.jsx)(n.code,{children:"AsRef"})," to ",(0,t.jsx)(n.code,{children:"A"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These implementations allow you to call a method from ",(0,t.jsx)(n.code,{children:"A"})," on an instance of ",(0,t.jsx)(n.code,{children:"C"})," and to use ",(0,t.jsx)(n.code,{children:"C"})," as if\r\nit was ",(0,t.jsx)(n.code,{children:"&B"})," or ",(0,t.jsx)(n.code,{children:"&A"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Its important to note that every single type imported using ",(0,t.jsx)(n.code,{children:"#[wasm-bindgen]"})," has the same root type,\r\nyou can think of it as the ",(0,t.jsx)(n.code,{children:"A"})," in the example above, this type is ",(0,t.jsx)(n.a,{href:"#jsvalue",children:(0,t.jsx)(n.code,{children:"JsValue"})})," which has\r\nits own section\r\nbelow."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/reference/attributes/on-js-imports/extends.html",children:["extends section in The ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," Guide"]})})}),"\n",(0,t.jsx)(n.h3,{id:"jsvalue",children:(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:(0,t.jsx)(n.code,{children:"JsValue"})})}),"\n",(0,t.jsxs)(n.p,{children:["This is a representation of an object owned by JavaScript, this is a root catch-all type for ",(0,t.jsx)(n.code,{children:"wasm-bindgen"}),".\r\nAny type that comes from ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," is a ",(0,t.jsx)(n.code,{children:"JsValue"})," and this is because JavaScript doesn't have\r\na strong type system so any function that accepts a variable ",(0,t.jsx)(n.code,{children:"x"})," doesn't define its type so ",(0,t.jsx)(n.code,{children:"x"})," can be\r\na valid JavaScript value; hence ",(0,t.jsx)(n.code,{children:"JsValue"}),". So when you are working with imported functions or types that\r\naccept a ",(0,t.jsx)(n.code,{children:"JsValue"}),", then any imported value is ",(0,t.jsx)(n.em,{children:"technically"})," valid."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"JsValue"})," can be accepted by a function but that function may still only expect certain types and this\r\ncan lead to panics - so when using raw ",(0,t.jsx)(n.code,{children:"wasm-bindgen"})," APIs check the documentation of the JavaScript\r\nbeing imported whether an exception will be caused if that value is not a certain type."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:[(0,t.jsx)(n.code,{children:"JsValue"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"jscast",children:(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:(0,t.jsx)(n.code,{children:"JsCast"})})}),"\n",(0,t.jsxs)(n.p,{children:["Rust has a strong type system and JavaScript...doesn't \ud83d\ude1e So in order for Rust to maintain these\r\nstrong types but still be convenient the web assembly group came up with a pretty neat trait ",(0,t.jsx)(n.code,{children:"JsCast"}),'.\r\nIts job is to help you move from one JavaScript "type" to another, which sounds vague but it means\r\nthat if you have one type which you know is really another then you can use the functions of ',(0,t.jsx)(n.code,{children:"JsCast"}),"\r\nto jump from one type to the other. It's a nice trait to get to know when working with ",(0,t.jsx)(n.code,{children:"web-sys"}),",\r\n",(0,t.jsx)(n.code,{children:"wasm_bindgen"}),", ",(0,t.jsx)(n.code,{children:"js-sys"})," - you'll notice lots of types will implement ",(0,t.jsx)(n.code,{children:"JsCast"})," from those crates."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"JsCast"})," provides both checked and unchecked methods of casting - so that at runtime if you are\r\nunsure what type a certain object is you can try to cast it which returns possible failure types like\r\n",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/option/enum.Option.html",children:(0,t.jsx)(n.code,{children:"Option"})})," and\r\n",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/result/enum.Result.html",children:(0,t.jsx)(n.code,{children:"Result"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A common example of this in ",(0,t.jsx)(n.a,{href:"web-sys",children:(0,t.jsx)(n.code,{children:"web-sys"})})," is when you are trying to get the\r\ntarget of an event, you might know what the target element is but the\r\n",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html",children:(0,t.jsx)(n.code,{children:"web_sys::Event"})})," API will always return an ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html#method.target",children:(0,t.jsx)(n.code,{children:"Option<web_sys::EventTarget>"})}),"\r\nso you will need to cast it to the element type so you can call it's methods."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"// need to import the trait.\r\nuse wasm_bindgen::JsCast;\r\nuse web_sys::{Event, EventTarget, HtmlInputElement, HtmlSelectElement};\r\n\r\nfn handle_event(event: Event) {\r\n    let target: EventTarget = event\r\n        .target()\r\n        .expect(\"I'm sure this event has a target!\");\r\n\r\n    // maybe the target is a select element?\r\n    if let Some(select_element) = target.dyn_ref::<HtmlSelectElement>() {\r\n        // do something amazing here\r\n        return;\r\n    }\r\n\r\n    // if it wasn't a select element then I KNOW it's a input element!\r\n    let input_element: HtmlInputElement = target.unchecked_into();\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_ref",children:(0,t.jsx)(n.code,{children:"dyn_ref"})}),"\r\nmethod is a checked cast that returns an ",(0,t.jsx)(n.code,{children:"Option<&T>"})," which means the original type\r\ncan be used again if the cast failed and thus returned ",(0,t.jsx)(n.code,{children:"None"}),". The\r\n",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_into",children:(0,t.jsx)(n.code,{children:"dyn_into"})}),"\r\nmethod will consume ",(0,t.jsx)(n.code,{children:"self"}),", as per convention for into methods in Rust, and the type returned is\r\n",(0,t.jsx)(n.code,{children:"Result<T, Self>"})," this means if the casting fails then the value in ",(0,t.jsx)(n.code,{children:"Err"})," is so you can try again\r\nor do something else with the original type."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:[(0,t.jsx)(n.code,{children:"JsCast"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"closure",children:(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:(0,t.jsx)(n.code,{children:"Closure"})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Closure"})," type provides a way to transfer Rust closures to JavaScript, the closures passed to\r\nJavaScript must have a ",(0,t.jsx)(n.code,{children:"'static"})," lifetime for soundness reasons."]}),"\n",(0,t.jsx)(n.p,{children:'This type is a "handle" in the sense that whenever it is dropped it will invalidate the JS\r\nclosure that it refers to. Any usage of the closure in JS after the Closure has been dropped will\r\nraise an exception.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Closure"})," is often used when you are working with a ",(0,t.jsx)(n.code,{children:"js-sys"})," or ",(0,t.jsx)(n.code,{children:"web-sys"})," API that accepts a type\r\n",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Function.html",children:(0,t.jsx)(n.code,{children:"&js_sys::Function"})}),".\r\nAn example of using a ",(0,t.jsx)(n.code,{children:"Closure"})," in Yew can be found in the ",(0,t.jsxs)(n.a,{href:"../html/events#using-closure-verbose",children:["Using ",(0,t.jsx)(n.code,{children:"Closure"})," section"]})," on the ",(0,t.jsx)(n.a,{href:"../html/events",children:"Events"})," page."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:[(0,t.jsx)(n.code,{children:"Closure"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"js-sys",children:(0,t.jsx)(n.a,{href:"https://crates.io/crates/js-sys",children:(0,t.jsx)(n.code,{children:"js-sys"})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"js-sys"})," crate provides bindings / imports of JavaScript's standard, built-in objects, including\r\ntheir methods and properties."]}),"\n",(0,t.jsxs)(n.p,{children:["This does not include any web APIs as this is what ",(0,t.jsx)(n.a,{href:"web-sys",children:(0,t.jsx)(n.code,{children:"web-sys"})})," is for!"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/index.html",children:[(0,t.jsx)(n.code,{children:"js-sys"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"wasm-bindgen-futures",children:(0,t.jsx)(n.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,t.jsx)(n.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"wasm-bindgen-futures"})," crate provides a bridge for working with JavaScript Promise types as a\r\nRust Future, and similarly contains utilities to turn a rust Future into a JavaScript Promise.\r\nThis can be useful when working with asynchronous or otherwise blocking work in Rust (wasm),\r\nand provides the ability to interoperate with JavaScript events and JavaScript I/O primitives."]}),"\n",(0,t.jsx)(n.p,{children:"There are three main interfaces in this crate currently:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/struct.JsFuture.html",children:(0,t.jsx)(n.code,{children:"JsFuture"})})," -\r\nA type that is constructed with a ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Promise.html",children:(0,t.jsx)(n.code,{children:"Promise"})}),"\r\nand can then be used as a ",(0,t.jsx)(n.code,{children:"Future<Output=Result<JsValue, JsValue>>"}),". This Rust future will resolve\r\nor reject with the value coming out of the ",(0,t.jsx)(n.code,{children:"Promise"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.future_to_promise.html",children:(0,t.jsx)(n.code,{children:"future_to_promise"})})," -\r\nConverts a Rust ",(0,t.jsx)(n.code,{children:"Future<Output=Result<JsValue, JsValue>>"})," into a\r\nJavaScript ",(0,t.jsx)(n.code,{children:"Promise"}),". The future\u2019s result will translate to either a resolved or rejected\r\n",(0,t.jsx)(n.code,{children:"Promise"})," in JavaScript."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,t.jsx)(n.code,{children:"spawn_local"})})," -\r\nSpawns a ",(0,t.jsx)(n.code,{children:"Future<Output = ()>"})," on the current thread. This is the best way\r\nto run a Future in Rust without sending it to JavaScript."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/index.html",children:[(0,t.jsx)(n.code,{children:"wasm-bindgen-futures"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"spawn_local",children:(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,t.jsx)(n.code,{children:"spawn_local"})})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"spawn_local"})," is going to be the most commonly used part of the ",(0,t.jsx)(n.code,{children:"wasm-bindgen-futures"})," crate in Yew\r\nas this helps when using libraries that have async APIs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:",no_run",children:'use web_sys::console;\r\nuse wasm_bindgen_futures::spawn_local;\r\n\r\nasync fn my_async_fn() -> String { String::from("Hello") }\r\n\r\nspawn_local(async {\r\n    let mut string = my_async_fn().await;\r\n    string.push_str(", world!");\r\n    // console log "Hello, world!"\r\n    console::log_1(&string.into());\r\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Yew has also added support for futures in certain APIs, most notably you can create a\r\n",(0,t.jsx)(n.code,{children:"callback_future"})," which accepts an ",(0,t.jsx)(n.code,{children:"async"})," block - this uses ",(0,t.jsx)(n.code,{children:"spawn_local"})," internally."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsxs)(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:[(0,t.jsx)(n.code,{children:"spawn_local"})," documentation"]}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);