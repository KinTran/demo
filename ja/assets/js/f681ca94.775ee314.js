"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8825],{7103:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(4848),i=n(8453);const r={title:"wasm-bindgen",sidebar_label:"wasm-bindgen"},a=void 0,o={id:"concepts/basic-web-technologies/wasm-bindgen",title:"wasm-bindgen",description:"wasm-bindgen is a library and tool to facilitate",source:"@site/versioned_docs/version-0.21/concepts/basic-web-technologies/wasm-bindgen.mdx",sourceDirName:"concepts/basic-web-technologies",slug:"/concepts/basic-web-technologies/wasm-bindgen",permalink:"/demo/ja/docs/concepts/basic-web-technologies/wasm-bindgen",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/concepts/basic-web-technologies/wasm-bindgen.mdx",tags:[],version:"0.21",frontMatter:{title:"wasm-bindgen",sidebar_label:"wasm-bindgen"},sidebar:"docs",previous:{title:"JS with RS",permalink:"/demo/ja/docs/concepts/basic-web-technologies/js"},next:{title:"web-sys",permalink:"/demo/ja/docs/concepts/basic-web-technologies/web-sys"}},c={},d=[{value:"<code>wasm-bindgen</code>",id:"wasm-bindgen",level:2},{value:"<code>#[wasm_bindgen]</code> macro",id:"wasm_bindgen-macro",level:3},{value:"Simulating inheritance",id:"simulating-inheritance",level:3},{value:"<code>JsValue</code>",id:"jsvalue",level:3},{value:"<code>JsCast</code>",id:"JsCast",level:3},{value:"<code>Closure</code>",id:"closure",level:3},{value:"<code>js-sys</code>",id:"js-sys",level:2},{value:"<code>wasm-bindgen-futures</code>",id:"wasm-bindgen-futures",level:2},{value:"<code>spawn_local</code>",id:"spawn_local",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/rustwasm/wasm-bindgen",children:(0,t.jsx)(s.code,{children:"wasm-bindgen"})})," is a library and tool to facilitate\r\nhigh-level interactions between Wasm modules and JavaScript; it is built with Rust by\r\n",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/",children:"The Rust and WebAssembly Working Group"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Yew uses ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," to interact with the browser through a number of crates:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://crates.io/crates/js-sys",children:(0,t.jsx)(s.code,{children:"js-sys"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,t.jsx)(s.code,{children:"wasm-bindgen"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,t.jsx)(s.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://crates.io/crates/web-sys",children:(0,t.jsx)(s.code,{children:"web-sys"})})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["This section will explore some of these crates at a high level, to make it easier to understand\r\nand use ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," APIs with Yew. For a more in-depth guide to ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," and its associated\r\ncrates then check out ",(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:["The ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," Guide"]}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For documentation on the above crates check out ",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/index.html",children:(0,t.jsx)(s.code,{children:"wasm-bindgen docs.rs"})}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," doc.rs search to find browser APIs and JavaScript types that have been imported\r\nover using ",(0,t.jsx)(s.code,{children:"wasm-bindgen"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"wasm-bindgen",children:(0,t.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen",children:(0,t.jsx)(s.code,{children:"wasm-bindgen"})})}),"\n",(0,t.jsxs)(s.p,{children:["This crate provides many of the building blocks for the rest of the crates above. In this section we\r\nare only going to cover two main areas of the ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," crate and that is the macro and some\r\ntypes/traits you will see pop up again and again."]}),"\n",(0,t.jsxs)(s.h3,{id:"wasm_bindgen-macro",children:[(0,t.jsx)(s.code,{children:"#[wasm_bindgen]"})," macro"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"#[wasm_bindgen]"})," macro provides an interface between Rust and JavaScript, providing a system\r\nfor translating between the two. Using this macro is more advanced, and you should not need to reach\r\nfor it unless you are trying to use an external JavaScript library. The ",(0,t.jsx)(s.code,{children:"js-sys"})," and ",(0,t.jsx)(s.code,{children:"web-sys"}),"\r\ncrates expose ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," definitions for built-in JavaScript types and browser APIs."]}),"\n",(0,t.jsxs)(s.p,{children:["Let's go over a simple example of using the ",(0,t.jsx)(s.code,{children:"#[wasm-bindgen]"})," macro to import some specific flavours\r\nof the ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log",children:(0,t.jsx)(s.code,{children:"console.log"})})," function."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",metastring:",no_run",children:'use wasm_bindgen::prelude::*;\r\n\r\n// First up let\'s take a look of binding `console.log` manually, without the\r\n// help of `web_sys`. Here we\'re writing the `#[wasm_bindgen]` annotations\r\n// manually ourselves, and the correctness of our program relies on the\r\n// correctness of these annotations!\r\n#[wasm_bindgen]\r\nextern "C" {\r\n\r\n    // Use `js_namespace` here to bind `console.log(..)` instead of just\r\n    // `log(..)`\r\n    #[wasm_bindgen(js_namespace = console)]\r\n    fn log(s: &str);\r\n\r\n    // The `console.log` is quite polymorphic, so we can bind it with multiple\r\n    // signatures. Note that we need to use `js_name` to ensure we always call\r\n    // `log` in JS.\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_u32(a: u32);\r\n\r\n    // Multiple arguments too!\r\n    #[wasm_bindgen(js_namespace = console, js_name = log)]\r\n    fn log_many(a: &str, b: &str);\r\n}\r\n\r\n// using the imported functions!\r\nlog("Hello from Rust!");\r\nlog_u32(42);\r\nlog_many("Logging", "many values!");\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsxs)(s.em,{children:["This example was adapted from ",(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/examples/console-log.html",children:["1.2 Using console.log of The ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," Guide"]})]}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"simulating-inheritance",children:"Simulating inheritance"}),"\n",(0,t.jsxs)(s.p,{children:["Inheritance between JavaScript classes is a core feature of the Javascript language and the DOM\r\n(Document Object Model) is designed around it. When types are imported using ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," you can\r\nalso add attributes that describe their inheritance."]}),"\n",(0,t.jsxs)(s.p,{children:["In Rust, this inheritance is represented using the ",(0,t.jsx)(s.a,{href:"https://doc.rust-lang.org/std/ops/trait.Deref.html",children:(0,t.jsx)(s.code,{children:"Deref"})}),"\r\nand ",(0,t.jsx)(s.a,{href:"https://doc.rust-lang.org/std/convert/trait.AsRef.html",children:(0,t.jsx)(s.code,{children:"AsRef"})})," traits. An example of this\r\nmight help; so say you have three types ",(0,t.jsx)(s.code,{children:"A"}),", ",(0,t.jsx)(s.code,{children:"B"}),", and ",(0,t.jsx)(s.code,{children:"C"})," where ",(0,t.jsx)(s.code,{children:"C"})," extends ",(0,t.jsx)(s.code,{children:"B"})," which in turn\r\nextends ",(0,t.jsx)(s.code,{children:"A"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["When importing these types the ",(0,t.jsx)(s.code,{children:"#[wasm-bindgen]"})," macro will implement the ",(0,t.jsx)(s.code,{children:"Deref"})," and ",(0,t.jsx)(s.code,{children:"AsRef"}),"\r\ntraits in the following way:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"C"})," can ",(0,t.jsx)(s.code,{children:"Deref"})," to ",(0,t.jsx)(s.code,{children:"B"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"B"})," can ",(0,t.jsx)(s.code,{children:"Deref"})," to ",(0,t.jsx)(s.code,{children:"A"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"C"})," can be ",(0,t.jsx)(s.code,{children:"AsRef"})," to ",(0,t.jsx)(s.code,{children:"B"})]}),"\n",(0,t.jsxs)(s.li,{children:["Both ",(0,t.jsx)(s.code,{children:"C"})," & ",(0,t.jsx)(s.code,{children:"B"})," can be ",(0,t.jsx)(s.code,{children:"AsRef"})," to ",(0,t.jsx)(s.code,{children:"A"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["These implementations allow you to call a method from ",(0,t.jsx)(s.code,{children:"A"})," on an instance of ",(0,t.jsx)(s.code,{children:"C"})," and to use ",(0,t.jsx)(s.code,{children:"C"})," as if\r\nit was ",(0,t.jsx)(s.code,{children:"&B"})," or ",(0,t.jsx)(s.code,{children:"&A"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["It is important to note that every single type imported using ",(0,t.jsx)(s.code,{children:"#[wasm-bindgen]"})," has the same root type,\r\nyou can think of it as the ",(0,t.jsx)(s.code,{children:"A"})," in the example above, this type is ",(0,t.jsx)(s.a,{href:"#jsvalue",children:(0,t.jsx)(s.code,{children:"JsValue"})})," which has\r\nits section below."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/reference/attributes/on-js-imports/extends.html",children:["extends section in The ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," Guide"]})})}),"\n",(0,t.jsx)(s.h3,{id:"jsvalue",children:(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:(0,t.jsx)(s.code,{children:"JsValue"})})}),"\n",(0,t.jsxs)(s.p,{children:["This is a representation of an object owned by JavaScript, this is a root catch-all type for ",(0,t.jsx)(s.code,{children:"wasm-bindgen"}),".\r\nAny type that comes from ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," is a ",(0,t.jsx)(s.code,{children:"JsValue"})," and this is because JavaScript does not have\r\na strong type system so any function that accepts a variable ",(0,t.jsx)(s.code,{children:"x"})," does not define its type so ",(0,t.jsx)(s.code,{children:"x"})," can be\r\na valid JavaScript value; hence ",(0,t.jsx)(s.code,{children:"JsValue"}),". If you are working with imported functions or types that\r\naccept a ",(0,t.jsx)(s.code,{children:"JsValue"}),", then any imported value is ",(0,t.jsx)(s.em,{children:"technically"})," valid."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"JsValue"})," can be accepted by a function but that function may still only accept certain types and this\r\ncan lead to panics - so when using raw ",(0,t.jsx)(s.code,{children:"wasm-bindgen"})," APIs check the documentation of the JavaScript\r\nbeing imported as to whether an exception (panic) will be raised if that value is not a certain type."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:[(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html",children:[(0,t.jsx)(s.code,{children:"JsValue"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(s.h3,{id:"JsCast",children:(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:(0,t.jsx)(s.code,{children:"JsCast"})})}),"\n",(0,t.jsxs)(s.p,{children:["Rust has a strong type system and JavaScript...doesn't \ud83d\ude1e. For Rust to maintain these\r\nstrong types but still be convenient, the WebAssembly group came up with a pretty neat trait ",(0,t.jsx)(s.code,{children:"JsCast"}),'.\r\nIts job is to help you move from one JavaScript "type" to another, which sounds vague, but it means\r\nthat if you have one type which you know is another, then you can use the functions of ',(0,t.jsx)(s.code,{children:"JsCast"}),"\r\nto jump from one type to the other. It is a nice trait to get to know when working with ",(0,t.jsx)(s.code,{children:"web-sys"}),",\r\n",(0,t.jsx)(s.code,{children:"wasm_bindgen"}),", ",(0,t.jsx)(s.code,{children:"js-sys"})," - you will notice lots of types will implement ",(0,t.jsx)(s.code,{children:"JsCast"})," from those crates."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"JsCast"})," provides both checked and unchecked methods of casting - so that at runtime if you are\r\nunsure what type a certain object is you can try to cast it which returns possible failure types like\r\n",(0,t.jsx)(s.a,{href:"https://doc.rust-lang.org/std/option/enum.Option.html",children:(0,t.jsx)(s.code,{children:"Option"})})," and\r\n",(0,t.jsx)(s.a,{href:"https://doc.rust-lang.org/std/result/enum.Result.html",children:(0,t.jsx)(s.code,{children:"Result"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["A common example of this in ",(0,t.jsx)(s.a,{href:"/demo/ja/docs/concepts/basic-web-technologies/web-sys",children:(0,t.jsx)(s.code,{children:"web-sys"})})," is when you are trying to get the\r\ntarget of an event. You might know what the target element is but the\r\n",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html",children:(0,t.jsx)(s.code,{children:"web_sys::Event"})})," API will always return an ",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.Event.html#method.target",children:(0,t.jsx)(s.code,{children:"Option<web_sys::EventTarget>"})}),".\r\nYou will need to cast it to the element type so you can call its methods."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:"// need to import the trait.\r\nuse wasm_bindgen::JsCast;\r\nuse web_sys::{Event, EventTarget, HtmlInputElement, HtmlSelectElement};\r\n\r\nfn handle_event(event: Event) {\r\n    let target: EventTarget = event\r\n        .target()\r\n        .expect(\"I'm sure this event has a target!\");\r\n\r\n    // maybe the target is a select element?\r\n    if let Some(select_element) = target.dyn_ref::<HtmlSelectElement>() {\r\n        // do something amazing here\r\n        return;\r\n    }\r\n\r\n    // if it wasn't a select element then I KNOW it's a input element!\r\n    let input_element: HtmlInputElement = target.unchecked_into();\r\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_ref",children:(0,t.jsx)(s.code,{children:"dyn_ref"})}),"\r\nmethod is a checked cast that returns an ",(0,t.jsx)(s.code,{children:"Option<&T>"})," which means the original type\r\ncan be used again if the cast failed and thus returned ",(0,t.jsx)(s.code,{children:"None"}),". The\r\n",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_into",children:(0,t.jsx)(s.code,{children:"dyn_into"})}),"\r\nmethod will consume ",(0,t.jsx)(s.code,{children:"self"}),", as per convention for ",(0,t.jsx)(s.code,{children:"into"})," methods in Rust, and the type returned is\r\n",(0,t.jsx)(s.code,{children:"Result<T, Self>"}),". If the casting fails, the original ",(0,t.jsx)(s.code,{children:"Self"})," value is returned in ",(0,t.jsx)(s.code,{children:"Err"}),". You can try again\r\nor do something else with the original type."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:[(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html",children:[(0,t.jsx)(s.code,{children:"JsCast"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(s.h3,{id:"closure",children:(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:(0,t.jsx)(s.code,{children:"Closure"})})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Closure"})," type provides a way to transfer Rust closures to JavaScript, the closures passed to\r\nJavaScript must have a ",(0,t.jsx)(s.code,{children:"'static"})," lifetime for soundness reasons."]}),"\n",(0,t.jsx)(s.p,{children:'This type is a "handle" in the sense that whenever it is dropped it will invalidate the JS\r\nclosure that it refers to. Any usage of the closure in JS after the Closure has been dropped will\r\nraise an exception.'}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Closure"})," is often used when you are working with a ",(0,t.jsx)(s.code,{children:"js-sys"})," or ",(0,t.jsx)(s.code,{children:"web-sys"})," API that accepts a type\r\n",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Function.html",children:(0,t.jsx)(s.code,{children:"&js_sys::Function"})}),".\r\nAn example of using a ",(0,t.jsx)(s.code,{children:"Closure"})," in Yew can be found in the ",(0,t.jsxs)(s.a,{href:"/demo/ja/docs/concepts/html/events#using-closure-verbose",children:["Using ",(0,t.jsx)(s.code,{children:"Closure"})," section"]}),"\r\non the ",(0,t.jsx)(s.a,{href:"/demo/ja/docs/concepts/html/events",children:"Events"})," page."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:[(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/closure/struct.Closure.html",children:[(0,t.jsx)(s.code,{children:"Closure"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"js-sys",children:(0,t.jsx)(s.a,{href:"https://crates.io/crates/js-sys",children:(0,t.jsx)(s.code,{children:"js-sys"})})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"js-sys"})," crate provides bindings/imports of JavaScript's standard, built-in objects, including\r\ntheir methods and properties."]}),"\n",(0,t.jsxs)(s.p,{children:["This does not include any web APIs as this is what ",(0,t.jsx)(s.a,{href:"/demo/ja/docs/concepts/basic-web-technologies/web-sys",children:(0,t.jsx)(s.code,{children:"web-sys"})})," is for!"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:[(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/index.html",children:[(0,t.jsx)(s.code,{children:"js-sys"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"wasm-bindgen-futures",children:(0,t.jsx)(s.a,{href:"https://crates.io/crates/wasm-bindgen-futures",children:(0,t.jsx)(s.code,{children:"wasm-bindgen-futures"})})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"wasm-bindgen-futures"})," crate provides a bridge for working with JavaScript Promise types as a\r\nRust ",(0,t.jsx)(s.a,{href:"https://doc.rust-lang.org/stable/std/future/trait.Future.html",children:(0,t.jsx)(s.code,{children:"Future"})}),", and contains\r\nutilities to turn a rust Future into a JavaScript Promise. This can be useful when working with\r\nasynchronous or otherwise blocking work in Rust (wasm), and provides the ability to interoperate\r\nwith JavaScript events and JavaScript I/O primitives."]}),"\n",(0,t.jsx)(s.p,{children:"There are three main interfaces in this crate currently:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/struct.JsFuture.html",children:(0,t.jsx)(s.code,{children:"JsFuture"})})," -\r\nA type that is constructed with a ",(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Promise.html",children:(0,t.jsx)(s.code,{children:"Promise"})}),"\r\nand can then be used as a ",(0,t.jsx)(s.code,{children:"Future<Output=Result<JsValue, JsValue>>"}),". This ",(0,t.jsx)(s.code,{children:"Future"})," will resolve to ",(0,t.jsx)(s.code,{children:"Ok"})," if\r\nthe ",(0,t.jsx)(s.code,{children:"Promise"})," is resolved and ",(0,t.jsx)(s.code,{children:"Err"})," if the ",(0,t.jsx)(s.code,{children:"Promise"})," is rejected, containing the resolved or rejected\r\nvalue from the ",(0,t.jsx)(s.code,{children:"Promise"})," respectively."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.future_to_promise.html",children:(0,t.jsx)(s.code,{children:"future_to_promise"})})," -\r\nConverts a Rust ",(0,t.jsx)(s.code,{children:"Future<Output=Result<JsValue, JsValue>>"})," into a\r\nJavaScript ",(0,t.jsx)(s.code,{children:"Promise"}),". The future\u2019s result will translate to either a resolved or rejected\r\n",(0,t.jsx)(s.code,{children:"Promise"})," in JavaScript."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,t.jsx)(s.code,{children:"spawn_local"})})," -\r\nSpawns a ",(0,t.jsx)(s.code,{children:"Future<Output = ()>"})," on the current thread. This is the best way\r\nto run a Future in Rust without sending it to JavaScript."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:[(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/index.html",children:[(0,t.jsx)(s.code,{children:"wasm-bindgen-futures"})," documentation"]}),"."]})}),"\n",(0,t.jsx)(s.h3,{id:"spawn_local",children:(0,t.jsx)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:(0,t.jsx)(s.code,{children:"spawn_local"})})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"spawn_local"})," is going to be the most commonly used part of the ",(0,t.jsx)(s.code,{children:"wasm-bindgen-futures"})," crate in Yew\r\nas this helps when using libraries that have async APIs."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",metastring:",no_run",children:'use web_sys::console;\r\nuse wasm_bindgen_futures::spawn_local;\r\n\r\nasync fn my_async_fn() -> String { String::from("Hello") }\r\n\r\nspawn_local(async {\r\n    let mut string = my_async_fn().await;\r\n    string.push_str(", world!");\r\n    // console log "Hello, world!"\r\n    console::log_1(&string.into());\r\n});\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Yew has also added support for futures in certain APIs, most notably you can create a\r\n",(0,t.jsx)(s.code,{children:"callback_future"})," which accepts an ",(0,t.jsx)(s.code,{children:"async"})," block - this uses ",(0,t.jsx)(s.code,{children:"spawn_local"})," internally."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:[(0,t.jsxs)(s.a,{href:"https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/fn.spawn_local.html",children:[(0,t.jsx)(s.code,{children:"spawn_local"})," documentation"]}),"."]})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(6540);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);