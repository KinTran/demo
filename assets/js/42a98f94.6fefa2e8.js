"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7026],{2911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const o={title:"Optimizations & Best Practices",sidebar_label:"Optimizations",description:"Make your app faster"},r=void 0,a={id:"advanced-topics/optimizations",title:"Optimizations & Best Practices",description:"Make your app faster",source:"@site/docs/advanced-topics/optimizations.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/optimizations",permalink:"/demo/docs/next/advanced-topics/optimizations",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/optimizations.mdx",tags:[],version:"current",frontMatter:{title:"Optimizations & Best Practices",sidebar_label:"Optimizations",description:"Make your app faster"},sidebar:"docs",previous:{title:"Children",permalink:"/demo/docs/next/advanced-topics/children"},next:{title:"Portals",permalink:"/demo/docs/next/advanced-topics/portals"}},c={},l=[{value:"Using smart pointers effectively",id:"using-smart-pointers-effectively",level:2},{value:"View functions",id:"view-functions",level:2},{value:"Pure Components",id:"pure-components",level:2},{value:"Reducing compile time using workspaces",id:"reducing-compile-time-using-workspaces",level:2},{value:"Reducing binary sizes",id:"reducing-binary-sizes",level:2},{value:"Cargo.toml",id:"cargotoml",level:3},{value:"Nightly Cargo configuration",id:"nightly-cargo-configuration",level:3},{value:"wasm-opt",id:"wasm-opt",level:3},{value:"Build size of &#39;minimal&#39; example in yew/examples/",id:"build-size-of-minimal-example-in-yewexamples",level:4},{value:"Further reading",id:"further-reading",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"using-smart-pointers-effectively",children:"Using smart pointers effectively"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Note: if you're unsure about some of the terms used in this section, the Rust Book has a useful\r\n",(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch15-00-smart-pointers.html",children:"chapter about smart pointers"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["To avoid cloning large amounts of data to create props when re-rendering, we can use\r\nsmart pointers to only clone a reference to the data instead of the data itself. If you pass\r\nreferences to the relevant data in your props and child components instead of the actual data you\r\ncan avoid cloning any data until you need to modify it in the child component, where you can\r\nuse ",(0,i.jsx)(t.code,{children:"Rc::make_mut"})," to clone and obtain a mutable reference to the data you want to alter."]}),"\n",(0,i.jsxs)(t.p,{children:["This brings further benefits in ",(0,i.jsx)(t.code,{children:"Component::changed"})," when working out whether prop changes require\r\nthe component to re-render. This is because instead of comparing the value of the data the\r\nunderlying pointer addresses (i.e. the position in a machine's memory where the data is stored) can\r\ninstead be compared; if two pointers point to the same data then the value of the data they point to\r\nmust be the same. Note that the inverse might not be true! Even if two pointer addresses differ the\r\nunderlying data might still be the same - in this case you should compare the underlying data."]}),"\n",(0,i.jsxs)(t.p,{children:["To do this comparison you'll need to use ",(0,i.jsx)(t.code,{children:"Rc::ptr_eq"})," instead of just using ",(0,i.jsx)(t.code,{children:"PartialEq"})," (which is\r\nautomatically used when comparing data using the equality operator ",(0,i.jsx)(t.code,{children:"=="}),"). The Rust documentation\r\nhas ",(0,i.jsxs)(t.a,{href:"https://doc.rust-lang.org/stable/std/rc/struct.Rc.html#method.ptr_eq",children:["more details about ",(0,i.jsx)(t.code,{children:"Rc::ptr_eq"})]}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This optimization is most useful for data types that don't implement ",(0,i.jsx)(t.code,{children:"Copy"}),". If you can copy your\r\ndata cheaply, then it isn't worth putting it behind a smart pointer. For structures that\r\ncan be data-heavy like ",(0,i.jsx)(t.code,{children:"Vec"}),"s, ",(0,i.jsx)(t.code,{children:"HashMap"}),"s, and ",(0,i.jsx)(t.code,{children:"String"}),"s using smart pointers is likely to bring\r\nperformance improvements."]}),"\n",(0,i.jsxs)(t.p,{children:["This optimization works best if the values are never updated by the children, and even better if\r\nthey are rarely updated by parents. This makes ",(0,i.jsx)(t.code,{children:"Rc<_>s"})," a good choice for wrapping property values\r\nin pure components."]}),"\n",(0,i.jsx)(t.p,{children:"However, it must be noted that unless you need to clone the data yourself in the child component,\r\nthis optimization is not only useless, but it also adds the unnecessary cost of reference counting. Props\r\nin Yew are already reference counted and no data clones occur internally."}),"\n",(0,i.jsx)(t.h2,{id:"view-functions",children:"View functions"}),"\n",(0,i.jsxs)(t.p,{children:["For code readability reasons, it often makes sense to migrate sections of ",(0,i.jsx)(t.code,{children:"html!"})," to their own\r\nfunctions. Not only does this make your code more readable because it reduces the amount of\r\nindentation present, it also encourages good design patterns \u2013 particularly around building\r\ncomposable applications because these functions can be called in multiple places which reduces the\r\namount of code that has to be written."]}),"\n",(0,i.jsx)(t.h2,{id:"pure-components",children:"Pure Components"}),"\n",(0,i.jsxs)(t.p,{children:["Pure components are components that don't mutate their state, only displaying content and\r\npropagating messages up to normal, mutable components. They differ from view functions in that they\r\ncan be used from within the ",(0,i.jsx)(t.code,{children:"html!"})," macro using the component syntax (",(0,i.jsx)(t.code,{children:"<SomePureComponent />"}),")\r\ninstead of expression syntax (",(0,i.jsx)(t.code,{children:"{some_view_function()}"}),"), and that depending on their\r\nimplementation, they can be memoized (this means that once a function is called its value is \"saved\"\r\nso that if it's called with the same arguments more than once it doesn't have to recompute its value\r\nand can just return the saved value from the first function call) - preventing re-renders for\r\nidentical props. Yew compares the props internally and so the UI is only re-rendered if the props change."]}),"\n",(0,i.jsx)(t.h2,{id:"reducing-compile-time-using-workspaces",children:"Reducing compile time using workspaces"}),"\n",(0,i.jsxs)(t.p,{children:["Arguably, the largest drawback to using Yew is the long time it takes to compile Yew apps. The time\r\ntaken to compile a project seems to be related to the quantity of code passed to the ",(0,i.jsx)(t.code,{children:"html!"})," macro.\r\nThis tends to not be much of an issue for smaller projects, but for larger applications, it makes\r\nsense to split code across multiple crates to minimize the amount of work the compiler has to do for\r\neach change made to the application."]}),"\n",(0,i.jsxs)(t.p,{children:["One possible approach is to make your main crate handle routing/page selection, and then make a\r\ndifferent crate for each page, where each page could be a different component or just a big\r\nfunction that produces ",(0,i.jsx)(t.code,{children:"Html"}),'. Code that is shared between the crates containing different parts of\r\nthe application could be stored in a separate crate which the project depends on.\r\nIn the best-case scenario, you go from rebuilding all of your code on each compile to rebuilding\r\nonly the main crate, and one of your page crates. In the worst case, where you edit something in the\r\n"common" crate, you will be right back to where you started: compiling all code that depends on that\r\ncommonly shared crate, which is probably everything else.']}),"\n",(0,i.jsx)(t.p,{children:"If your main crate is too heavyweight, or you want to rapidly iterate on a deeply nested page (eg.\r\na page that renders on top of another page), you can use an example crate to create a simplified\r\nimplementation of the main page and additionally render the component you are working on."}),"\n",(0,i.jsx)(t.h2,{id:"reducing-binary-sizes",children:"Reducing binary sizes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"optimize Rust code"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cargo.toml"})," ( defining release profile )"]}),"\n",(0,i.jsxs)(t.li,{children:["optimize wasm code using ",(0,i.jsx)(t.code,{children:"wasm-opt"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Note: more information about reducing binary sizes can be found in the\r\n",(0,i.jsx)(t.a,{href:"https://rustwasm.github.io/book/reference/code-size.html#optimizing-builds-for-code-size",children:"Rust Wasm Book"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"cargotoml",children:"Cargo.toml"}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to configure release builds to be smaller using the available settings in the\r\n",(0,i.jsx)(t.code,{children:"[profile.release]"})," section of your ",(0,i.jsx)(t.code,{children:"Cargo.toml"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml,",metastring:"title=Cargo.toml",children:"[profile.release]\r\n# less code to include into binary\r\npanic = 'abort'\r\n# optimization over all codebase ( better optimization, slower build )\r\ncodegen-units = 1\r\n# optimization for size ( more aggressive )\r\nopt-level = 'z'\r\n# optimization for size\r\n# opt-level = 's'\r\n# link time optimization using using whole-program analysis\r\nlto = true\n"})}),"\n",(0,i.jsx)(t.h3,{id:"nightly-cargo-configuration",children:"Nightly Cargo configuration"}),"\n",(0,i.jsxs)(t.p,{children:["You can also gain additional benefits from experimental nightly features of rust and\r\ncargo. To use the nightly toolchain with ",(0,i.jsx)(t.code,{children:"trunk"}),", set the ",(0,i.jsx)(t.code,{children:'RUSTUP_TOOLCHAIN="nightly"'})," environment\r\nvariable. Then, you can configure unstable rustc features in your ",(0,i.jsx)(t.code,{children:".cargo/config.toml"}),".\r\nRefer to the doc of ",(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/unstable.html",children:"unstable features"}),", specifically the section about ",(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/unstable.html#build-std",children:(0,i.jsx)(t.code,{children:"build-std"})})," and\r\n",(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/unstable.html#build-std-features",children:(0,i.jsx)(t.code,{children:"build-std-features"})}),", to understand the configuration."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml,",metastring:'title=".cargo/config.toml"',children:'[unstable]\r\n# Requires the rust-src component. `rustup +nightly component add rust-src`\r\nbuild-std = ["std", "panic_abort"]\r\nbuild-std-features = ["panic_immediate_abort"]\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["The nightly rust compiler can contain bugs, such as ",(0,i.jsx)(t.a,{href:"https://github.com/yewstack/yew/issues/2696",children:"this one"}),",\r\nthat require occasional attention and tweaking. Use these experimental options with care."]})}),"\n",(0,i.jsx)(t.h3,{id:"wasm-opt",children:"wasm-opt"}),"\n",(0,i.jsxs)(t.p,{children:["Further, it is possible to optimize the size of ",(0,i.jsx)(t.code,{children:"wasm"})," code."]}),"\n",(0,i.jsxs)(t.p,{children:["The Rust Wasm Book has a section about reducing the size of Wasm binaries:\r\n",(0,i.jsx)(t.a,{href:"https://rustwasm.github.io/book/game-of-life/code-size.html",children:"Shrinking .wasm size"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["using ",(0,i.jsx)(t.code,{children:"wasm-pack"})," which by default optimizes ",(0,i.jsx)(t.code,{children:"wasm"})," code in release builds"]}),"\n",(0,i.jsxs)(t.li,{children:["using ",(0,i.jsx)(t.code,{children:"wasm-opt"})," directly on ",(0,i.jsx)(t.code,{children:"wasm"})," files."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"wasm-opt wasm_bg.wasm -Os -o wasm_bg_opt.wasm\n"})}),"\n",(0,i.jsx)(t.h4,{id:"build-size-of-minimal-example-in-yewexamples",children:"Build size of 'minimal' example in yew/examples/"}),"\n",(0,i.jsxs)(t.p,{children:["Note: ",(0,i.jsx)(t.code,{children:"wasm-pack"})," combines optimization for Rust and Wasm code. ",(0,i.jsx)(t.code,{children:"wasm-bindgen"})," is used in this example without any Rust size optimization."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"used tool"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"size"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"wasm-bindgen"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"158KB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"wasm-bindgen + wasm-opt -Os"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"116KB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"wasm-pack"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"99 KB"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch15-00-smart-pointers.html",children:"The Rust Book's chapter on smart pointers"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://rustwasm.github.io/book/reference/code-size.html#optimizing-builds-for-code-size",children:"Information from the Rust Wasm Book about reducing binary sizes"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/profiles.html",children:"Documentation about Rust profiles"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WebAssembly/binaryen",children:"binaryen project"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);