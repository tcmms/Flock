import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as P}from"./WeatherClimateWindIcon-B7IaNujn.js";import{T as r}from"./index-wXUEkycZ.js";import{S as F}from"./index-Cf5wY2b7.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./AntdIcon-CmaM0TST.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./shadow-DTVO8V5H.js";import"./PlusOutlined-0uCaHWsy.js";import"./DownOutlined-BT1hZG-W.js";import"./genStyleUtils-lByCByip.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./statusUtils-obNhd3Z8.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useVariants-CpE5hFEr.js";import"./index-CSL4b1Pf.js";import"./compact-item-DgFz4dAb.js";import"./useMergeSemantic-BtH1ep6T.js";const ge={title:"Data Entry/InputNumber",component:r,tags:["autodocs"]},a={args:{placeholder:"Enter amount",style:{width:200}}},s={args:{min:1,max:100,defaultValue:10,style:{width:200}}},o={args:{min:0,max:1,step:.1,defaultValue:.5,style:{width:200}}},n={args:{disabled:!0,defaultValue:42,style:{width:200}}},i={args:{prefix:e.jsx(P,{style:{fontSize:"1em"}}),defaultValue:99.99,style:{width:200}}},l={args:{defaultValue:1e3,formatter:t=>`$ ${t}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:t=>t==null?void 0:t.replace(/\$\s?|(,*)/g,""),style:{width:200}}},m={name:"Small / Large Sizes",render:()=>e.jsxs(F,{direction:"vertical",children:[e.jsx(r,{size:"small",placeholder:"Small",style:{width:200}}),e.jsx(r,{placeholder:"Default",style:{width:200}}),e.jsx(r,{size:"large",placeholder:"Large",style:{width:200}})]})},p={name:"Status Error / Warning",render:()=>e.jsxs(F,{direction:"vertical",children:[e.jsx(r,{status:"error",placeholder:"Error status",style:{width:200}}),e.jsx(r,{status:"warning",placeholder:"Warning status",style:{width:200}})]})};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter amount',
    style: {
      width: 200
    }
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 100,
    defaultValue: 10,
    style: {
      width: 200
    }
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,f,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0.5,
    style: {
      width: 200
    }
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,W,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 42,
    style: {
      width: 200
    }
  }
}`,...(b=(W=n.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var E,j,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    prefix: <MoneyMoneyDollarIcon style={{
      fontSize: '1em'
    }} />,
    defaultValue: 99.99,
    style: {
      width: 200
    }
  }
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var V,D,I;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: 1000,
    formatter: (value: number | undefined) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ','),
    parser: (value: string | undefined) => value?.replace(/\\$\\s?|(,*)/g, '') as unknown as number,
    style: {
      width: 200
    }
  }
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var M,N,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Small / Large Sizes',
  render: () => <Space direction="vertical">
      <InputNumber size="small" placeholder="Small" style={{
      width: 200
    }} />
      <InputNumber placeholder="Default" style={{
      width: 200
    }} />
      <InputNumber size="large" placeholder="Large" style={{
      width: 200
    }} />
    </Space>
}`,...($=(N=m.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var v,L,B;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Status Error / Warning',
  render: () => <Space direction="vertical">
      <InputNumber status="error" placeholder="Error status" style={{
      width: 200
    }} />
      <InputNumber status="warning" placeholder="Warning status" style={{
      width: 200
    }} />
    </Space>
}`,...(B=(L=p.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const ye=["Default","WithMinMax","WithStep","Disabled","WithPrefix","WithFormatter","Sizes","StatusErrorWarning"];export{a as Default,n as Disabled,m as Sizes,p as StatusErrorWarning,l as WithFormatter,s as WithMinMax,i as WithPrefix,o as WithStep,ye as __namedExportsOrder,ge as default};
