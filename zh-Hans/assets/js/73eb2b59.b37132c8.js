"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7414],{2496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=t(4848),r=t(8453);const s={title:"\u4f20\u9001\u95e8 (Portals)",description:"\u5c06\u5185\u5bb9\u6e32\u67d3\u5230 DOM \u6811\u5916\u7684\u8282\u70b9"},d=void 0,c={id:"advanced-topics/portals",title:"\u4f20\u9001\u95e8 (Portals)",description:"\u5c06\u5185\u5bb9\u6e32\u67d3\u5230 DOM \u6811\u5916\u7684\u8282\u70b9",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/advanced-topics/portals.mdx",sourceDirName:"advanced-topics",slug:"/advanced-topics/portals",permalink:"/demo/zh-Hans/docs/next/advanced-topics/portals",draft:!1,unlisted:!1,editUrl:"https://google.com/docs/advanced-topics/portals.mdx",tags:[],version:"current",frontMatter:{title:"\u4f20\u9001\u95e8 (Portals)",description:"\u5c06\u5185\u5bb9\u6e32\u67d3\u5230 DOM \u6811\u5916\u7684\u8282\u70b9"},sidebar:"docs",previous:{title:"Optimizations",permalink:"/demo/zh-Hans/docs/next/advanced-topics/optimizations"},next:{title:"\u670d\u52a1\u7aef\u6e32\u67d3",permalink:"/demo/zh-Hans/docs/next/advanced-topics/server-side-rendering"}},l={},i=[{value:"\u4ec0\u4e48\u662f Portal\uff1f",id:"\u4ec0\u4e48\u662f-portal",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u4e8b\u4ef6\u5904\u7406",id:"\u4e8b\u4ef6\u5904\u7406",level:2},{value:"\u8fdb\u4e00\u6b65\u9605\u8bfb",id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-portal",children:"\u4ec0\u4e48\u662f Portal\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:["\u4f20\u9001\u95e8 (Portal) \u63d0\u4f9b\u4e86\u4e00\u79cd\u5c06\u5b50\u5143\u7d20\u6e32\u67d3\u5230\u7236\u7ec4\u4ef6\u7684 DOM \u5c42\u6b21\u7ed3\u6784\u4e4b\u5916\u7684 DOM \u8282\u70b9\u7684\u65b9\u6cd5\u3002",(0,o.jsx)(n.code,{children:"yew::create_portal(child, host)"})," \u8fd4\u56de\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"Html"})," \u503c\uff0c\u5b83\u5c06 ",(0,o.jsx)(n.code,{children:"child"})," \u6e32\u67d3\u4e3a ",(0,o.jsx)(n.code,{children:"host"})," \u5143\u7d20\u7684\u5b50\u5143\u7d20\uff0c\u800c\u4e0d\u662f\u5728\u5176\u7236\u7ec4\u4ef6\u7684\u5c42\u6b21\u7ed3\u6784\u4e0b\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,o.jsxs)(n.p,{children:["\u4f20\u9001\u95e8\u7684\u5178\u578b\u7528\u9014\u5305\u62ec\u6a21\u6001\u5bf9\u8bdd\u6846\u548c\u60ac\u505c\u5361\u7247\uff0c\u4ee5\u53ca\u66f4\u591a\u6280\u672f\u5e94\u7528\uff0c\u4f8b\u5982\u63a7\u5236\u5143\u7d20\u7684 ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot",children:(0,o.jsx)(n.code,{children:"shadowRoot"})})," \u7684\u5185\u5bb9\uff0c\u5c06\u6837\u5f0f\u8868\u9644\u52a0\u5230\u5468\u56f4\u6587\u6863\u7684 ",(0,o.jsx)(n.code,{children:"<head>"})," \u4e2d\uff0c\u4ee5\u53ca\u5728 ",(0,o.jsx)(n.code,{children:"<svg>"})," \u7684\u4e2d\u592e ",(0,o.jsx)(n.code,{children:"<defs>"})," \u5143\u7d20\u4e2d\u6536\u96c6\u5f15\u7528\u7684\u5143\u7d20\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c",(0,o.jsx)(n.code,{children:"yew::create_portal"})," \u662f\u4e00\u4e2a\u4f4e\u7ea7\u6784\u5efa\u5757\u3002\u5e93\u5e94\u8be5\u4f7f\u7528\u5b83\u6765\u5b9e\u73b0\u66f4\u9ad8\u7ea7\u7684 API\uff0c\u7136\u540e\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b API\u3002\u4f8b\u5982\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u6001\u5bf9\u8bdd\u6846\uff0c\u5b83\u5c06\u5176 ",(0,o.jsx)(n.code,{children:"children"})," \u6e32\u67d3\u5230 ",(0,o.jsx)(n.code,{children:"yew"})," \u4e4b\u5916\u7684\u4e00\u4e2a\u5143\u7d20\u4e2d\uff0c\u8be5\u5143\u7d20\u7531 ",(0,o.jsx)(n.code,{children:'id="modal_host"'})," \u6807\u8bc6\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'use yew::prelude::*;\r\n\r\n#[derive(Properties, PartialEq)]\r\npub struct ModalProps {\r\n    #[prop_or_default]\r\n    pub children: Html,\r\n}\r\n\r\n#[function_component]\r\nfn Modal(props: &ModalProps) -> Html {\r\n    let modal_host = gloo::utils::document()\r\n        .get_element_by_id("modal_host")\r\n        .expect("Expected to find a #modal_host element");\r\n\r\n    create_portal(\r\n        props.children.clone(),\r\n        modal_host.into(),\r\n    )\r\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e8b\u4ef6\u5904\u7406",children:"\u4e8b\u4ef6\u5904\u7406"}),"\n",(0,o.jsx)(n.p,{children:"\u4f20\u9001\u95e8\u5185\u90e8\u5143\u7d20\u4e0a\u53d1\u51fa\u7684\u4e8b\u4ef6\u9075\u5faa\u865a\u62df DOM \u5192\u6ce1\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4f20\u9001\u95e8\u88ab\u6e32\u67d3\u4e3a\u5143\u7d20\u7684\u5b50\u5143\u7d20\uff0c\u90a3\u4e48\u8be5\u5143\u7d20\u4e0a\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u5c06\u6355\u83b7\u4ece\u4f20\u9001\u95e8\u5185\u90e8\u5206\u53d1\u51fa\u7684\u4e8b\u4ef6\uff0c\u5373\u4f7f\u4f20\u9001\u95e8\u5c06\u5176\u5185\u5bb9\u6e32\u67d3\u5728\u5b9e\u9645 DOM \u4e2d\u7684\u4e0d\u76f8\u5173\u4f4d\u7f6e\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u4f7f\u5f00\u53d1\u4eba\u5458\u65e0\u9700\u5173\u5fc3\u4ed6\u4eec\u4f7f\u7528\u7684\u7ec4\u4ef6\u662f\u4f7f\u7528\u4f20\u9001\u95e8\u5b9e\u73b0\u7684\u8fd8\u662f\u6ca1\u6709\u4f7f\u7528\u4f20\u9001\u95e8\u5b9e\u73b0\u7684\u3002\u65e0\u8bba\u5982\u4f55\uff0c\u5176\u5b50\u5143\u7d20\u4e0a\u89e6\u53d1\u7684\u4e8b\u4ef6\u90fd\u4f1a\u5192\u6ce1\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5df2\u77e5\u95ee\u9898\u662f\uff0c\u4ece\u4f20\u9001\u95e8\u5230 ",(0,o.jsx)(n.strong,{children:"\u5173\u95ed"})," \u7684 shadow root \u7684\u4e8b\u4ef6\u5c06\u88ab\u5206\u53d1\u4e24\u6b21\uff0c\u4e00\u6b21\u9488\u5bf9 shadow root \u5185\u90e8\u7684\u5143\u7d20\uff0c\u4e00\u6b21\u9488\u5bf9\u5bbf\u4e3b\u5143\u7d20\u672c\u8eab\u3002\u8bf7\u8bb0\u4f4f\uff0c",(0,o.jsx)(n.strong,{children:"\u6253\u5f00"})," \u7684 shadow root \u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002\u5982\u679c\u8fd9\u5f71\u54cd\u5230\u60a8\uff0c\u8bf7\u968f\u65f6\u63d0\u4ea4\u4e00\u4e2a\u9519\u8bef\u62a5\u544a\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",children:"\u8fdb\u4e00\u6b65\u9605\u8bfb"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/yewstack/yew/tree/master/examples/portals",children:"\u4f20\u9001\u95e8\u793a\u4f8b"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);