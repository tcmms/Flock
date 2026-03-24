import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{I as E}from"./index-C3cpwhys.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./context-M28mY0tC.js";import"./genStyleUtils-lByCByip.js";import"./omit-3QAACPn7.js";import"./index-Cf5wY2b7.js";import"./isNonNullable-Hl1s-5mn.js";import"./statusUtils-obNhd3Z8.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./compact-item-DgFz4dAb.js";import"./useMergeSemantic-BtH1ep6T.js";import"./index-CSL4b1Pf.js";import"./Input-B6fOCpQ1.js";import"./useControlledState-tu5D_1Ht.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./CloseCircleFilled-CV3osNzx.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useVariants-CpE5hFEr.js";import"./pickAttrs-BoNuQqbq.js";import"./EyeOutlined-D4_0bFME.js";import"./SearchOutlined-C-Rz-lYV.js";import"./Button-DN9j4dNv.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";const I=({size:D="default",status:P="",...V})=>k.jsx(E.TextArea,{variant:"filled",size:D,status:P,...V});I.__docgenInfo={description:`InputTextarea — multi-line text input.
Built on Ant Design Input.TextArea with Flock DS tokens via FlockProvider.
Uses filled style (grey background, no border by default).`,methods:[],displayName:"InputTextarea",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Input size",defaultValue:{value:"'default'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'' | 'error' | 'warning'",elements:[{name:"literal",value:"''"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"Validation status",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},rows:{required:!1,tsType:{name:"number"},description:"Number of rows"},autoSize:{required:!1,tsType:{name:"AntTextAreaProps['autoSize']",raw:"AntTextAreaProps['autoSize']"},description:"Auto resize config"},showCount:{required:!1,tsType:{name:"boolean"},description:"Show character count"},maxLength:{required:!1,tsType:{name:"number"},description:"Max length"},onChange:{required:!1,tsType:{name:"AntTextAreaProps['onChange']",raw:"AntTextAreaProps['onChange']"},description:"Change handler"},onBlur:{required:!1,tsType:{name:"AntTextAreaProps['onBlur']",raw:"AntTextAreaProps['onBlur']"},description:"Blur handler"},onFocus:{required:!1,tsType:{name:"AntTextAreaProps['onFocus']",raw:"AntTextAreaProps['onFocus']"},description:"Focus handler"}}};const be={title:"Data Entry/InputTextarea",component:I,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"],description:"Input size"},status:{control:"select",options:["","error","warning"],description:"Validation status"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state"},rows:{control:"number",description:"Number of visible rows"},showCount:{control:"boolean",description:"Show character count"},maxLength:{control:"number",description:"Maximum character length"}},parameters:{docs:{description:{component:`InputTextarea — multi-line text input.
Built on Ant Design Input.TextArea with Flock DS tokens.
Uses filled style (grey background, no border by default).`}}}},e={args:{placeholder:"Enter description…"}},r={name:"With rows",args:{placeholder:"Enter notes…",rows:6}},t={name:"Auto resize",args:{placeholder:"This textarea grows as you type…",autoSize:{minRows:2,maxRows:8}}},a={name:"Show count",args:{placeholder:"Type up to 500 characters…",showCount:!0,maxLength:500}},o={args:{defaultValue:"This field has an error",status:"error"}},s={args:{defaultValue:"Check this content",status:"warning"}},n={args:{defaultValue:"Cannot edit this text",disabled:!0}};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter description…'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With rows',
  args: {
    placeholder: 'Enter notes…',
    rows: 6
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,h,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Auto resize',
  args: {
    placeholder: 'This textarea grows as you type…',
    autoSize: {
      minRows: 2,
      maxRows: 8
    }
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,w,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Show count',
  args: {
    placeholder: 'Type up to 500 characters…',
    showCount: true,
    maxLength: 500
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,y,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This field has an error',
    status: 'error'
  }
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var b,S,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Check this content',
    status: 'warning'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var z,C,q;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Cannot edit this text',
    disabled: true
  }
}`,...(q=(C=n.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const Se=["Default","WithRows","AutoResize","ShowCount","Error","Warning","Disabled"];export{t as AutoResize,e as Default,n as Disabled,o as Error,a as ShowCount,s as Warning,r as WithRows,Se as __namedExportsOrder,be as default};
