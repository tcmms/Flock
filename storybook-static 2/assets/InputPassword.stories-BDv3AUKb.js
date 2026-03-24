import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as p}from"./flockIcons-DaHM7iCS.js";import{I as B}from"./index-C3cpwhys.js";import"./WeatherClimateWindIcon-B7IaNujn.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./context-M28mY0tC.js";import"./genStyleUtils-lByCByip.js";import"./omit-3QAACPn7.js";import"./index-Cf5wY2b7.js";import"./isNonNullable-Hl1s-5mn.js";import"./statusUtils-obNhd3Z8.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./compact-item-DgFz4dAb.js";import"./useMergeSemantic-BtH1ep6T.js";import"./index-CSL4b1Pf.js";import"./Input-B6fOCpQ1.js";import"./useControlledState-tu5D_1Ht.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./CloseCircleFilled-CV3osNzx.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useVariants-CpE5hFEr.js";import"./pickAttrs-BoNuQqbq.js";import"./EyeOutlined-D4_0bFME.js";import"./SearchOutlined-C-Rz-lYV.js";import"./Button-DN9j4dNv.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";const q=({size:l="default",status:C="",visibilityToggle:R=!0,iconRender:A,...F})=>e.jsx(B.Password,{variant:"filled",size:l,status:C,visibilityToggle:R,iconRender:A??(z=>z?e.jsx(p.EyeShow,{}):e.jsx(p.EyeHide,{})),...F});q.__docgenInfo={description:`InputPassword — password input with visibility toggle.
Built on Ant Design Input.Password with Flock DS tokens via FlockProvider.
Uses Flock eye icons for show/hide toggle.`,methods:[],displayName:"InputPassword",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Input size",defaultValue:{value:"'default'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'' | 'error' | 'warning'",elements:[{name:"literal",value:"''"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"Validation status",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},visibilityToggle:{required:!1,tsType:{name:"boolean"},description:"Whether to show visibility toggle",defaultValue:{value:"true",computed:!1}},iconRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(visible: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"boolean"},name:"visible"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom icon render"},onChange:{required:!1,tsType:{name:"AntInputProps['onChange']",raw:"AntInputProps['onChange']"},description:"Change handler"},onBlur:{required:!1,tsType:{name:"AntInputProps['onBlur']",raw:"AntInputProps['onBlur']"},description:"Blur handler"},onFocus:{required:!1,tsType:{name:"AntInputProps['onFocus']",raw:"AntInputProps['onFocus']"},description:"Focus handler"}}};const W=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),L=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),e.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),e.jsx("path",{d:"m1 1 22 22"})]}),Ve={title:"Data Entry/InputPassword",component:q,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"],description:"Input size"},status:{control:"select",options:["","error","warning"],description:"Validation status"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state"},visibilityToggle:{control:"boolean",description:"Show/hide password toggle"}},parameters:{docs:{description:{component:`InputPassword — password input with visibility toggle.
Built on Ant Design Input.Password with Flock DS tokens.
Uses filled style (grey background, no border by default).`}}}},r={args:{placeholder:"Enter password…"}},a={args:{placeholder:"Small password",size:"small"}},o={args:{placeholder:"Large password",size:"large"}},s={args:{defaultValue:"wrong",status:"error"}},t={args:{defaultValue:"weak",status:"warning"}},n={args:{defaultValue:"••••••••",disabled:!0}},i={name:"Custom toggle icon",args:{placeholder:"Enter password…",iconRender:l=>l?e.jsx(W,{}):e.jsx(L,{})}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password…'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,g,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small password',
    size: 'small'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,h,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large password',
    size: 'large'
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,b,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: 'wrong',
    status: 'error'
  }
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var x,P,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    defaultValue: 'weak',
    status: 'warning'
  }
}`,...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var E,S,j;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: '••••••••',
    disabled: true
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,D,V;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Custom toggle icon',
  args: {
    placeholder: 'Enter password…',
    iconRender: (visible: boolean) => visible ? <EyeIcon /> : <EyeOffIcon />
  } as any
}`,...(V=(D=i.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const qe=["Default","Small","Large","Error","Warning","Disabled","CustomToggle"];export{i as CustomToggle,r as Default,n as Disabled,s as Error,o as Large,a as Small,t as Warning,qe as __namedExportsOrder,Ve as default};
