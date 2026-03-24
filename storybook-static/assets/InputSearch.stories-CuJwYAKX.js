import{j}from"./jsx-runtime-D_zvdyIk.js";import{I as F}from"./index-C3cpwhys.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./context-M28mY0tC.js";import"./genStyleUtils-lByCByip.js";import"./omit-3QAACPn7.js";import"./index-Cf5wY2b7.js";import"./isNonNullable-Hl1s-5mn.js";import"./statusUtils-obNhd3Z8.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./compact-item-DgFz4dAb.js";import"./useMergeSemantic-BtH1ep6T.js";import"./index-CSL4b1Pf.js";import"./Input-B6fOCpQ1.js";import"./useControlledState-tu5D_1Ht.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./CloseCircleFilled-CV3osNzx.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useVariants-CpE5hFEr.js";import"./pickAttrs-BoNuQqbq.js";import"./EyeOutlined-D4_0bFME.js";import"./SearchOutlined-C-Rz-lYV.js";import"./Button-DN9j4dNv.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";const z=({size:C="default",status:E="",enterButton:L=!1,..._})=>j.jsx(F.Search,{variant:"filled",size:C,status:E,enterButton:L,..._});z.__docgenInfo={description:`InputSearch — search input with optional search button.
Built on Ant Design Input.Search with Flock DS tokens via FlockProvider.
Uses filled style (grey background, no border by default).`,methods:[],displayName:"InputSearch",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Input size",defaultValue:{value:"'default'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'' | 'error' | 'warning'",elements:[{name:"literal",value:"''"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"Validation status",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner"},enterButton:{required:!1,tsType:{name:"SearchProps['enterButton']",raw:"SearchProps['enterButton']"},description:"Show search button",defaultValue:{value:"false",computed:!1}},onSearch:{required:!1,tsType:{name:"SearchProps['onSearch']",raw:"SearchProps['onSearch']"},description:"Search handler"},onChange:{required:!1,tsType:{name:"SearchProps['onChange']",raw:"SearchProps['onChange']"},description:"Change handler"}}};const Ve={title:"Data Entry/InputSearch",component:z,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"],description:"Input size"},status:{control:"select",options:["","error","warning"],description:"Validation status"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state"},loading:{control:"boolean",description:"Show loading spinner"},enterButton:{control:"boolean",description:"Show search button"}},parameters:{docs:{description:{component:`InputSearch — search input with optional search button.
Built on Ant Design Input.Search with Flock DS tokens.
Uses filled style (grey background, no border by default).`}}}},e={args:{placeholder:"Search…"}},r={args:{placeholder:"Search…",size:"small"}},a={args:{placeholder:"Search…",size:"large"}},t={name:"With button",args:{placeholder:"Search products…",enterButton:!0}},o={name:"With loading",args:{placeholder:"Searching…",loading:!0}},s={args:{placeholder:"Search…",disabled:!0}},n={args:{placeholder:"Search…",status:"error",defaultValue:"Invalid search"}},i={args:{placeholder:"Search…",status:"warning",defaultValue:"Check query"}};var l,c,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    size: 'small'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,g,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    size: 'large'
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With button',
  args: {
    placeholder: 'Search products…',
    enterButton: true
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,v,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With loading',
  args: {
    placeholder: 'Searching…',
    loading: true
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var q,D,T;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    disabled: true
  }
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var B,V,W;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    status: 'error',
    defaultValue: 'Invalid search'
  }
}`,...(W=(V=n.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var k,P,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    status: 'warning',
    defaultValue: 'Check query'
  }
}`,...(x=(P=i.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const We=["Default","Small","Large","WithButton","WithLoading","Disabled","Error","Warning"];export{e as Default,s as Disabled,n as Error,a as Large,r as Small,i as Warning,t as WithButton,o as WithLoading,We as __namedExportsOrder,Ve as default};
