"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8022],{8669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=t(4848),o=t(8453),a=t(1470),c=t(9365);const s={title:"#[function_component]",description:"The #[function_component] attribute"},i=void 0,u={id:"concepts/function-components/attribute",title:"#[function_component]",description:"The #[function_component] attribute",source:"@site/versioned_docs/version-0.19.0/concepts/function-components/attribute.mdx",sourceDirName:"concepts/function-components",slug:"/concepts/function-components/attribute",permalink:"/demo/docs/0.19.0/concepts/function-components/attribute",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.19.0/concepts/function-components/attribute.mdx",tags:[],version:"0.19.0",frontMatter:{title:"#[function_component]",description:"The #[function_component] attribute"},sidebar:"docs",previous:{title:"Introduction",permalink:"/demo/docs/0.19.0/concepts/function-components/introduction"},next:{title:"Pre-defined Hooks",permalink:"/demo/docs/0.19.0/concepts/function-components/pre-defined-hooks"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Generic function components",id:"generic-function-components",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"#[function_component(_)]"})," turns a normal Rust function into a function component.\r\nFunctions with the attribute have to return ",(0,r.jsx)(n.code,{children:"Html"})," and may take a single parameter for the type of props the component should accept.\r\nThe parameter type needs to be a reference to a ",(0,r.jsx)(n.code,{children:"Properties"})," type (ex. ",(0,r.jsx)(n.code,{children:"props: &MyProps"}),").\r\nIf the function doesn't have any parameters the resulting component doesn't accept any props."]}),"\n",(0,r.jsxs)(n.p,{children:["The attribute doesn't replace your original function with a component. You need to provide a name as an input to the attribute which will be the identifier of the component.\r\nAssuming you have a function called ",(0,r.jsx)(n.code,{children:"chat_container"})," and you add the attribute ",(0,r.jsx)(n.code,{children:"#[function_component(ChatContainer)]"})," you can use the component like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use yew::{function_component, html, Html};\r\n\r\n#[function_component(ChatContainer)]\r\npub fn chat_container() -> Html {\r\n    html! {\r\n        // chat container impl\r\n    }\r\n}\r\n\r\nhtml! {\r\n    <ChatContainer />\r\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(c.A,{value:"With props",label:"With props",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct RenderedAtProps {\r\n    pub time: String,\r\n}\r\n\r\n#[function_component(RenderedAt)]\r\npub fn rendered_at(props: &RenderedAtProps) -> Html {\r\n    html! {\r\n        <p>\r\n            <b>{ "Rendered at: " }</b>\r\n            { &props.time }\r\n        </p>\r\n    }\r\n}\n'})})}),(0,r.jsx)(c.A,{value:"Without props",label:"Without props",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use yew::{function_component, html, use_state, Callback};\r\n\r\n#[function_component(App)]\r\nfn app() -> Html {\r\n    let counter = use_state(|| 0);\r\n\r\n    let onclick = {\r\n        let counter = counter.clone();\r\n        Callback::from(move |_| counter.set(*counter + 1))\r\n    };\r\n\r\n    html! {\r\n        <div>\r\n            <button {onclick}>{ "Increment value" }</button>\r\n            <p>\r\n                <b>{ "Current value: " }</b>\r\n                { *counter }\r\n            </p>\r\n        </div>\r\n    }\r\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"generic-function-components",children:"Generic function components"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"#[function_component(_)]"})," attribute also works with generic functions for creating generic components."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=my_generic_component.rs",children:'use std::fmt::Display;\r\nuse yew::{function_component, html, Properties};\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct Props<T>\r\nwhere\r\n    T: PartialEq,\r\n{\r\n    data: T,\r\n}\r\n\r\n#[function_component(MyGenericComponent)]\r\npub fn my_generic_component<T>(props: &Props<T>) -> Html\r\nwhere\r\n    T: PartialEq + Display,\r\n{\r\n    html! {\r\n        <p>\r\n            { &props.data }\r\n        </p>\r\n    }\r\n}\r\n\r\n// used like this\r\nhtml! {\r\n    <MyGenericComponent<i32> data=123 />\r\n};\r\n\r\n// or\r\nhtml! {\r\n    <MyGenericComponent<String> data={"foo".to_string()} />\r\n};\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var r=t(4164);const o={tabItem:"tabItem_Ymn6"};var a=t(4848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,c),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),o=t(4164),a=t(3104),c=t(6347),s=t(205),i=t(7485),u=t(1682),l=t(679);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,c.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=d(e),[c,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,p]=h({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,l.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),v=(()=>{const e=u??f;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,a]),tabValues:a}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),l=e=>{const n=e.currentTarget,t=i.indexOf(n),o=s[t].value;o!==r&&(u(n),c(o))},p=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:p,onClick:l,...a,className:(0,o.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function _(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(_,{...e,children:p(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(6540);const o={},a=r.createContext(o);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);