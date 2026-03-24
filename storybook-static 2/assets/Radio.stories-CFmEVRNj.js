import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as o,a as d,b as s}from"./Radio-pwJU95gy.js";import"./index-4hv6Avwq.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useControlledState-tu5D_1Ht.js";import"./reactNode-CHTsHNSU.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./SizeContext-6SbbsRse.js";import"./pickAttrs-BoNuQqbq.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useSize-BVGoiTzB.js";import"./context-M28mY0tC.js";import"./genStyleUtils-lByCByip.js";import"./omit-3QAACPn7.js";import"./useForm-BOgl4tTj.js";import"./useBubbleLock-D85X6Qcs.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./useMergeSemantic-BtH1ep6T.js";import"./useOrientation-CvsZ8lA6.js";const U={title:"Data Entry/Radio",component:o,tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"}},parameters:{docs:{description:{component:`Radio — selection control for single choice.
Built on Ant Design Radio with Flock DS tokens.`}}}},a={args:{children:"Option"}},r={args:{children:"Disabled",disabled:!0}},t={render:()=>e.jsxs(d,{defaultValue:"a",children:[e.jsx(o,{value:"a",children:"Option A"}),e.jsx(o,{value:"b",children:"Option B"}),e.jsx(o,{value:"c",children:"Option C"})]})},i={name:"Button group",render:()=>e.jsxs(d,{defaultValue:"a",optionType:"button",buttonStyle:"solid",children:[e.jsx(s,{value:"a",children:"Daily"}),e.jsx(s,{value:"b",children:"Weekly"}),e.jsx(s,{value:"c",children:"Monthly"})]})},n={name:"Vertical group",render:()=>e.jsxs(d,{defaultValue:"a",style:{display:"flex",flexDirection:"column",gap:"var(--flock-space-2)"},children:[e.jsx(o,{value:"a",children:"Standard delivery"}),e.jsx(o,{value:"b",children:"Express delivery"}),e.jsx(o,{value:"c",children:"Same-day delivery"})]})};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Option'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,R;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(R=(m=r.parameters)==null?void 0:m.docs)==null?void 0:R.source}}};var v,y,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="a">
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
    </RadioGroup>
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,b,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Button group',
  render: () => <RadioGroup defaultValue="a" optionType="button" buttonStyle="solid">
      <RadioButton value="a">Daily</RadioButton>
      <RadioButton value="b">Weekly</RadioButton>
      <RadioButton value="c">Monthly</RadioButton>
    </RadioGroup>
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,j,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Vertical group',
  render: () => <RadioGroup defaultValue="a" style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--flock-space-2)'
  }}>
      <Radio value="a">Standard delivery</Radio>
      <Radio value="b">Express delivery</Radio>
      <Radio value="c">Same-day delivery</Radio>
    </RadioGroup>
}`,...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const X=["Default","Disabled","Group","ButtonGroup","VerticalGroup"];export{i as ButtonGroup,a as Default,r as Disabled,t as Group,n as VerticalGroup,X as __namedExportsOrder,U as default};
