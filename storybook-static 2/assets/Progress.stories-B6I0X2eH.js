import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as e}from"./progress-CxVzt0eR.js";import{S as n}from"./index-Cf5wY2b7.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./CheckCircleFilled-BtE0EsBD.js";import"./AntdIcon-CmaM0TST.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./shadow-DTVO8V5H.js";import"./CheckOutlined-Bjlu0gCC.js";import"./CloseCircleFilled-CV3osNzx.js";import"./CloseOutlined-BsjciePg.js";import"./omit-3QAACPn7.js";import"./index-BemBm_5k.js";import"./index-CxTbkWiH.js";import"./useControlledState-tu5D_1Ht.js";import"./placements-BDsFN2kw.js";import"./genStyleUtils-lByCByip.js";import"./roundedArrow-CTehBM3O.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./motion-CGP6LHXs.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./fade-BcJF4FJN.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./useMergeSemantic-BtH1ep6T.js";import"./statusUtils-obNhd3Z8.js";import"./compact-item-DgFz4dAb.js";const yr={title:"Feedback/Progress",component:e,tags:["autodocs"],argTypes:{percent:{control:{type:"range",min:0,max:100,step:1}},status:{control:"select",options:["normal","active","success","exception"]},type:{control:"select",options:["line","circle","dashboard"]}},parameters:{docs:{description:{component:"Progress — display progress of an operation (line, circle, dashboard)."}}}},o={args:{percent:60}},t={args:{type:"circle",percent:75}},s={args:{type:"dashboard",percent:80}},a={render:()=>r.jsxs(n,{direction:"vertical",style:{width:200},children:[r.jsx(e,{percent:30,size:"small"}),r.jsx(e,{percent:60,size:"small",status:"active"}),r.jsx(e,{percent:100,size:"small"})]})},p={name:"Custom color",render:()=>r.jsxs(n,{direction:"vertical",style:{width:300},children:[r.jsx(e,{percent:50,strokeColor:"#52c41a"}),r.jsx(e,{percent:70,strokeColor:"#faad14"}),r.jsx(e,{percent:90,strokeColor:"#ff4d4f"})]})},c={name:"Steps progress",args:{percent:60,steps:5}},i={name:"With gradient",render:()=>r.jsxs(n,{direction:"vertical",style:{width:300},children:[r.jsx(e,{percent:90,strokeColor:{from:"#108ee9",to:"#87d068"}}),r.jsx(e,{type:"circle",percent:85,strokeColor:{"0%":"#108ee9","100%":"#87d068"}})]})};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    percent: 60
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'circle',
    percent: 75
  }
}`,...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var h,C,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'dashboard',
    percent: 80
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,y,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Space direction="vertical" style={{
    width: 200
  }}>
      <Progress percent={30} size="small" />
      <Progress percent={60} size="small" status="active" />
      <Progress percent={100} size="small" />
    </Space>
}`,...(P=(y=a.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var j,k,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Custom color',
  render: () => <Space direction="vertical" style={{
    width: 300
  }}>
      <Progress percent={50} strokeColor="#52c41a" />
      <Progress percent={70} strokeColor="#faad14" />
      <Progress percent={90} strokeColor="#ff4d4f" />
    </Space>
}`,...(v=(k=p.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var b,w,z;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Steps progress',
  args: {
    percent: 60,
    steps: 5
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var D,W,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With gradient',
  render: () => <Space direction="vertical" style={{
    width: 300
  }}>
      <Progress percent={90} strokeColor={{
      from: '#108ee9',
      to: '#87d068'
    }} />
      <Progress type="circle" percent={85} strokeColor={{
      '0%': '#108ee9',
      '100%': '#87d068'
    }} />
    </Space>
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const Pr=["Default","Circle","Dashboard","Small","CustomColor","StepsProgress","WithGradient"];export{t as Circle,p as CustomColor,s as Dashboard,o as Default,a as Small,c as StepsProgress,i as WithGradient,Pr as __namedExportsOrder,yr as default};
