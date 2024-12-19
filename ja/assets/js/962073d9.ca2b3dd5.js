"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7375],{1952:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(4848),o=r(8453),s=r(1470),i=r(9365);const l={title:"Properties",description:"Parent to child communication"},a=void 0,c={id:"concepts/function-components/properties",title:"Properties",description:"Parent to child communication",source:"@site/versioned_docs/version-0.20/concepts/function-components/properties.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/properties",permalink:"/ja/docs/0.20/concepts/function-components/properties",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.20/concepts/function-components/properties.mdx",tags:[],version:"0.20",frontMatter:{title:"Properties",description:"Parent to child communication"},sidebar:"docs",previous:{title:"Function Components",permalink:"/ja/docs/0.20/concepts/function-components"},next:{title:"Callbacks",permalink:"/ja/docs/0.20/concepts/function-components/callbacks"}},u={},d=[{value:"Reactivity",id:"reactivity",level:2},{value:"Derive macro",id:"derive-macro",level:2},{value:"Use in function components",id:"use-in-function-components",level:2},{value:"Derive macro field attributes",id:"derive-macro-field-attributes",level:2},{value:"Memory/speed overhead of using Properties",id:"memoryspeed-overhead-of-using-properties",level:2},{value:"Props macro",id:"props-macro",level:2},{value:"Evaluation Order",id:"evaluation-order",level:2},{value:"Anti Patterns",id:"anti-patterns",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'Properties are often shortened as "Props".'})}),"\n",(0,t.jsx)(n.p,{children:"Properties are essentially component arguments that Yew can keep watch on."}),"\n",(0,t.jsxs)(n.p,{children:["A type has to implement the ",(0,t.jsx)(n.code,{children:"Properties"})," trait before it can be used as the properties of a component."]}),"\n",(0,t.jsx)(n.h2,{id:"reactivity",children:"Reactivity"}),"\n",(0,t.jsx)(n.p,{children:"Yew checks if props have changed when reconciling the vdom during rerendering, to know if nested components needs to be rerendered.\r\nThis way Yew can be considered a very reactive framework as changes from the parent will always be propagated downwards\r\nand the view will never be out of sync from the data coming from props/state."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you have not yet completed the ",(0,t.jsx)(n.a,{href:"../../tutorial",children:"tutorial"}),", try it out and test this reactivity yourself!"]})}),"\n",(0,t.jsx)(n.h2,{id:"derive-macro",children:"Derive macro"}),"\n",(0,t.jsxs)(n.p,{children:["Yew provides a derive macro to easily implement the ",(0,t.jsx)(n.code,{children:"Properties"})," trait on structs."]}),"\n",(0,t.jsxs)(n.p,{children:["Types for which you derive ",(0,t.jsx)(n.code,{children:"Properties"})," must also implement ",(0,t.jsx)(n.code,{children:"PartialEq"})," so Yew can do data comparison."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use yew::Properties;\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    pub is_loading: bool,\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"use-in-function-components",children:"Use in function components"}),"\n",(0,t.jsxs)(n.p,{children:["The attribute ",(0,t.jsx)(n.code,{children:"#[function_component]"})," allows to optionally receive Props in the function arguments. To supply them,\r\nthey are assigned via attributes in the ",(0,t.jsx)(n.code,{children:"html!"})," macro."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"with-props",label:"With Props",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    pub is_loading: bool,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    html! { <>{"Am I loading? - "}{props.is_loading.clone()}</> }\r\n}\r\n\r\n// Then supply the prop\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! {<HelloWorld is_loading={true} />}\r\n}\r\n\n'})})}),(0,t.jsx)(i.A,{value:"no-props",label:"No Props",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Html};\r\n\r\n\r\n\r\n\r\n\r\n\r\n#[function_component]\r\nfn HelloWorld() -> Html {\r\n    html! { "Hello world" }\r\n}\r\n\r\n// No props to supply\r\n#[function_component]\r\nfn App() -> Html {\r\n    html! {<HelloWorld />}\r\n}\r\n\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"derive-macro-field-attributes",children:"Derive macro field attributes"}),"\n",(0,t.jsxs)(n.p,{children:["When deriving ",(0,t.jsx)(n.code,{children:"Properties"})," all fields are required by default.\r\nThe following attributes allow you to give your props default values which will be used when parent has not set them."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Attributes aren't visible in Rustdoc generated documentation.\r\nThe doc strings of your properties should mention whether a prop is optional and if it has a special default value."})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(i.A,{value:"prop_or_default",label:"#[prop_or_default]",children:[(0,t.jsxs)(n.p,{children:["Initialize the prop value with the default value of the field's type using the ",(0,t.jsx)(n.code,{children:"Default"})," trait."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    // highlight-start\r\n    #[prop_or_default]\r\n    // highlight-end\r\n    pub is_loading: bool,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    if props.is_loading.clone() {\r\n        html! { "Loading" }\r\n    } else {\r\n        html! { "Hello world" }\r\n    }\r\n}\r\n\r\n// Then use like this with default\r\n#[function_component]\r\nfn Case1() -> Html {\r\n    html! {<HelloWorld />}\r\n}\r\n// Or no override the default\r\n#[function_component]\r\nfn Case2() -> Html {\r\n    html! {<HelloWorld is_loading={true} />}\r\n}\n'})})]}),(0,t.jsxs)(i.A,{value:"prop_or_value",label:"#[prop_or(value)]",children:[(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"value"})," to initialize the prop value. ",(0,t.jsx)(n.code,{children:"value"})," can be any expression that returns the field's type.\r\nFor example, to default a boolean prop to ",(0,t.jsx)(n.code,{children:"true"}),", use the attribute ",(0,t.jsx)(n.code,{children:"#[prop_or(true)]"}),". The expression\r\nis evaluated when the properties are constructed and no explicit value has been given."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    // highlight-start\r\n    #[prop_or("Bob".to_string())]\r\n    // highlight-end\r\n    pub name: String,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    html! {<>{"Hello world"}{props.name.clone()}</>}\r\n}\r\n\r\n// Then use like this with default\r\n#[function_component]\r\nfn Case1() -> Html {\r\n    html! {<HelloWorld />}\r\n}\r\n// Or no override the default\r\n#[function_component]\r\nfn Case2() -> Html {\r\n    html! {<HelloWorld name={"Sam".to_string()} />}\r\n}\n'})})]}),(0,t.jsxs)(i.A,{value:"prop_or_else_function",label:"#[prop_or_else(function)]",children:[(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"function"})," to initialize the prop value. ",(0,t.jsx)(n.code,{children:"function"})," should have the signature ",(0,t.jsx)(n.code,{children:"FnMut() -> T"})," where ",(0,t.jsx)(n.code,{children:"T"})," is the field type.\r\nThe function is called when no explicit value has been given for that attribute."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties};\r\n\r\nfn create_default_name() -> String {\r\n    "Bob".to_string()\r\n}\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    // highlight-start\r\n    #[prop_or_else(create_default_name)]\r\n    // highlight-end\r\n    pub name: String,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    html! {<>{"Hello world"}{props.name.clone()}</>}\r\n}\r\n\r\n// Then use like this with default\r\n#[function_component]\r\nfn Case1() -> Html {\r\n    html! {<HelloWorld />}\r\n}\r\n// Or no override the default\r\n#[function_component]\r\nfn Case2() -> Html {\r\n    html! {<HelloWorld name={"Sam".to_string()} />}\r\n}\n'})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"memoryspeed-overhead-of-using-properties",children:"Memory/speed overhead of using Properties"}),"\n",(0,t.jsx)(n.p,{children:"Internally properties are reference counted. This means that only a shared pointer is passed down the component tree for props.\r\nIt saves us from the cost of having to clone the entire props, which might be expensive."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Make use of ",(0,t.jsx)(n.code,{children:"AttrValue"})," which is our custom type for attribute values instead of defining them as String or another similar type."]})}),"\n",(0,t.jsx)(n.h2,{id:"props-macro",children:"Props macro"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"yew::props!"})," macro allows you to build properties the same way the ",(0,t.jsx)(n.code,{children:"html!"})," macro does it."]}),"\n",(0,t.jsxs)(n.p,{children:["The macro uses the same syntax as a struct expression except that you can't use attributes or a base expression (",(0,t.jsx)(n.code,{children:"Foo { ..base }"}),").\r\nThe type path can either point to the props directly (",(0,t.jsx)(n.code,{children:"path::to::Props"}),") or the associated properties of a component (",(0,t.jsx)(n.code,{children:"MyComp::Properties"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Html, Properties, props, virtual_dom::AttrValue};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props {\r\n    #[prop_or(AttrValue::from("Bob"))]\r\n    pub name: AttrValue,\r\n}\r\n\r\n#[function_component]\r\nfn HelloWorld(props: &Props) -> Html {\r\n    html! {<>{"Hello world"}{props.name.clone()}</>}\r\n}\r\n\r\n#[function_component]\r\nfn App() -> Html {\r\n    // highlight-start\r\n    let pre_made_props = props! {\r\n        Props {} // Notice we did not need to specify name prop\r\n    };\r\n    // highlight-end\r\n    html! {<HelloWorld ..pre_made_props />}\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"evaluation-order",children:"Evaluation Order"}),"\n",(0,t.jsx)(n.p,{children:"Props are evaluated in the order they're specified, as shown by the following example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[derive(yew::Properties, PartialEq)]\r\nstruct Props { first: usize, second: usize, last: usize }\r\n\r\nfn main() {\r\n    let mut g = 1..=3;\r\n    let props = yew::props!(Props { first: g.next().unwrap(), second: g.next().unwrap(), last: g.next().unwrap() });\r\n\r\n    assert_eq!(props.first, 1);\r\n    assert_eq!(props.second, 2);\r\n    assert_eq!(props.last, 3);\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"anti-patterns",children:"Anti Patterns"}),"\n",(0,t.jsx)(n.p,{children:"While almost any Rust type can be passed as properties, there are some anti-patterns that should be avoided.\r\nThese include, but are not limited to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.code,{children:"String"})," type instead of ",(0,t.jsx)(n.code,{children:"AttrValue"}),". ",(0,t.jsx)("br",{}),"\r\n",(0,t.jsx)(n.strong,{children:"Why is this bad?"})," ",(0,t.jsx)(n.code,{children:"String"})," can be expensive to clone.\r\nCloning is often needed when the prop value is used with hooks and callbacks. ",(0,t.jsx)(n.code,{children:"AttrValue"})," is either\r\na reference-counted string (",(0,t.jsx)(n.code,{children:"Rc<str>"}),") or a ",(0,t.jsx)(n.code,{children:"&'static str"}),", thus very cheap to clone.",(0,t.jsx)("br",{}),"\r\n",(0,t.jsx)(n.strong,{children:"Note"}),": ",(0,t.jsx)(n.code,{children:"AttrValue"})," internally is ",(0,t.jsx)(n.code,{children:"IString"})," from ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/implicit-clone",children:"implicit-clone"}),"\r\nSee that crate to learn more."]}),"\n",(0,t.jsxs)(n.li,{children:["Using interior mutability. ",(0,t.jsx)("br",{}),"\r\n",(0,t.jsx)(n.strong,{children:"Why is this bad?"})," Interior mutability (such as with ",(0,t.jsx)(n.code,{children:"RefCell"}),", ",(0,t.jsx)(n.code,{children:"Mutex"}),", etc.) should\r\n",(0,t.jsx)(n.em,{children:"generally"})," be avoided. It can cause problems with re-renders (Yew doesn't know when state has changed)\r\nso you may have to manually force a render. Like all things, it has its place. Use it with caution."]}),"\n",(0,t.jsx)(n.li,{children:"You tell us. Did you run into an edge-case you wish you knew about earlier? Feel free to create an issue\r\nor PR a fix to this documentation."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const o={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),o=r(4164),s=r(3104),i=r(6347),l=r(205),a=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const o=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=p(e),[i,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:r,groupId:o}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),x=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&a(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=a.indexOf(n),o=l[r].value;o!==t&&(c(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);