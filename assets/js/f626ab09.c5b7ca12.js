"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9955],{5383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(4848),a=r(8453),s=r(1470),o=r(9365);const i={title:"From 0.19.0 to Next"},u=void 0,l={id:"migration-guides/yew/from-0_20_0-to-next",title:"From 0.19.0 to Next",description:"Dependencies as first hook argument and useeffectwith",source:"@site/versioned_docs/version-0.21/migration-guides/yew/from-0_20_0-to-next.mdx",sourceDirName:"migration-guides/yew",slug:"/migration-guides/yew/from-0_20_0-to-next",permalink:"/demo/docs/migration-guides/yew/from-0_20_0-to-next",draft:!1,unlisted:!1,editUrl:"https://google.com/versioned_docs/version-0.21/migration-guides/yew/from-0_20_0-to-next.mdx",tags:[],version:"0.21",frontMatter:{title:"From 0.19.0 to Next"}},c={},d=[{value:"Dependencies as first hook argument and <code>use_effect_with</code>",id:"dependencies-as-first-hook-argument-and-use_effect_with",level:2},{value:"Automated refactor",id:"automated-refactor",level:3},{value:"Reasoning",id:"reasoning",level:3}];function f(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h2,{id:"dependencies-as-first-hook-argument-and-use_effect_with",children:["Dependencies as first hook argument and ",(0,n.jsx)(t.code,{children:"use_effect_with"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Replace ",(0,n.jsx)(t.code,{children:"use_effect_with_deps"})," with new ",(0,n.jsx)(t.code,{children:"use_effect_with"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"use_effect_with"}),", ",(0,n.jsx)(t.code,{children:"use_callback"}),", ",(0,n.jsx)(t.code,{children:"use_memo"})," now take dependencies as their first argument"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"automated-refactor",children:"Automated refactor"}),"\n",(0,n.jsxs)(t.p,{children:["With the help of ",(0,n.jsx)(t.a,{href:"https://ast-grep.github.io/guide/quick-start.html",children:"https://ast-grep.github.io"}),"\r\nHere are commands that can do the refactoring for you."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sg --pattern 'use_effect_with_deps($CALLBACK,$$$DEPENDENCIES)' --rewrite 'use_effect_with($$$DEPENDENCIES, $CALLBACK)' -l rs -i\r\nsg --pattern 'use_effect_with($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_effect_with($DEPENDENCIES,$$$CALLBACK)' -l rs -i\r\n\r\nsg --pattern 'use_callback($CALLBACK,$$$DEPENDENCIES)' --rewrite 'use_callback($$$DEPENDENCIES, $CALLBACK)' -l rs -i\r\nsg --pattern 'use_callback($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_callback($DEPENDENCIES,$$$CALLBACK)' -l rs -i\r\n\r\nsg --pattern 'use_memo($CALLBACK,$$$DEPENDENCIES)' --rewrite 'use_memo($$$DEPENDENCIES, $CALLBACK)' -l rs -i\r\nsg --pattern 'use_memo($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_memo($DEPENDENCIES,$$$CALLBACK)' -l rs -i\r\n\r\nsg --pattern 'use_future_with_deps($CALLBACK,$$$DEPENDENCIES)' --rewrite 'use_effect_with($$$DEPENDENCIES, $CALLBACK)' -l rs -i\r\nsg --pattern 'use_future_with($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_effect_with($DEPENDENCIES,$$$CALLBACK)' -l rs -i\r\n\r\nsg --pattern 'use_transitive_state!($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_transitive_state!($DEPENDENCIES,$$$CALLBACK)' -l rs -i\r\nsg --pattern 'use_transitive_state!($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_transitive_state!($DEPENDENCIES,$$$CALLBACK)' -l rs -i\r\n\r\nsg --pattern 'use_prepared_state!($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_prepared_state!($DEPENDENCIES,$$$CALLBACK)' -l rs -i\r\nsg --pattern 'use_prepared_state!($DEPENDENCIES,,$$$CALLBACK)' --rewrite 'use_prepared_state!($DEPENDENCIES,$$$CALLBACK)' -l rs -i\n"})}),"\n",(0,n.jsx)(t.h3,{id:"reasoning",children:"Reasoning"}),"\n",(0,n.jsx)(t.p,{children:"This will enable more ergonomic use of hooks, consider:"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(o.A,{value:"before",label:"Before",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:",ignore",children:"impl SomeLargeStruct {\r\n    fn id(&self) -> u32; // Only need to use the id as cache key\r\n}\r\nlet some_dep: SomeLargeStruct = todo!();\r\n\r\n{\r\n    let id = some_dep.id(); // Have to extract it in advance, some_dep is moved already in the second argument\r\n    use_effect_with_dep(move |_| { todo!(); drop(some_dep); }, id);\r\n}\n"})})}),(0,n.jsx)(o.A,{value:"after",label:"After",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:",ignore",children:"impl SomeLargeStruct {\r\n    fn id(&self) -> u32; // Only need to use the id as cache key\r\n}\r\nlet some_dep: SomeLargeStruct = todo!();\r\n\r\nuse_effect_with(some_dep.id(), move |_| { todo!(); drop(some_dep); });\r\n\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(6540),a=r(4164),s=r(3104),o=r(6347),i=r(205),u=r(7485),l=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=f(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=m({queryString:r,groupId:a}),[p,E]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),$=(()=>{const e=l??p;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{$&&u($)}),[$]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),E(e)}),[d,E,s]),tabValues:s}}var E=r(2303);const $={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",$.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function C(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=p(e);return(0,_.jsxs)("div",{className:(0,a.A)("tabs-container",$.tabList),children:[(0,_.jsx)(g,{...t,...e}),(0,_.jsx)(C,{...t,...e})]})}function v(e){const t=(0,E.A)();return(0,_.jsx)(b,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);