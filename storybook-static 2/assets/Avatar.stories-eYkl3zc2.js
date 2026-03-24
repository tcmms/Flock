import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{A as o,a as z}from"./Avatar-Dd7x5ax7.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BUbyd2uB.js";import"./index-TJOQIVf4.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./useBreakpoint-CencR8BP.js";import"./useForceUpdate-S_WFItDD.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useSize-BVGoiTzB.js";import"./genStyleUtils-lByCByip.js";import"./index-bK_eGALt.js";import"./useControlledState-tu5D_1Ht.js";import"./PurePanel-CSDCGrm3.js";import"./placements-BDsFN2kw.js";import"./roundedArrow-CTehBM3O.js";import"./zoom-pxgP0w3E.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./useMergeSemantic-BtH1ep6T.js";import"./motion-CGP6LHXs.js";import"./index-BemBm_5k.js";import"./index-CxTbkWiH.js";import"./shadow-DTVO8V5H.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./useZIndex-4Tk46FxA.js";import"./fade-BcJF4FJN.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";const G=()=>r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),fr={title:"Data Display/Avatar",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"]},shape:{control:"select",options:["circle","square"]},src:{control:"text"},alt:{control:"text"},icon:{control:{disable:!0}},children:{control:"text"}},parameters:{docs:{description:{component:`Avatar — user or entity image/icon/initials.
Built on Ant Design Avatar with Flock DS tokens.`}}}},a={args:{children:"U"}},e={args:{children:"U",shape:"square"}},t={args:{children:"S",size:"small"}},s={args:{children:"L",size:"large"}},c={name:"With image",args:{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",alt:"User avatar"}},i={name:"With icon",render:()=>r.jsx(o,{icon:r.jsx(G,{}),alt:"User icon"})},n={name:"With text",args:{children:"JD"}},l={render:()=>r.jsxs(z,{max:{count:3},children:[r.jsx(o,{style:{backgroundColor:"var(--flock-color-primary)"},alt:"User A",children:"A"}),r.jsx(o,{style:{backgroundColor:"var(--flock-color-success)"},alt:"User B",children:"B"}),r.jsx(o,{style:{backgroundColor:"var(--flock-color-info)"},alt:"User C",children:"C"}),r.jsx(o,{style:{backgroundColor:"var(--flock-color-warning)"},alt:"User D",children:"D"}),r.jsx(o,{style:{backgroundColor:"var(--flock-color-error)"},alt:"User E",children:"E"})]})};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'U'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'U',
    shape: 'square'
  }
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,x,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'S',
    size: 'small'
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var A,U,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'L',
    size: 'large'
  }
}`,...(f=(U=s.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var y,C,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With image',
  args: {
    src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    alt: 'User avatar'
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,j,W;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'With icon',
  render: () => <Avatar icon={<UserIcon />} alt="User icon" />
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var D,B,E;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With text',
  args: {
    children: 'JD'
  }
}`,...(E=(B=n.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,q,w;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={{
    count: 3
  }}>
      <Avatar style={{
      backgroundColor: 'var(--flock-color-primary)'
    }} alt="User A">A</Avatar>
      <Avatar style={{
      backgroundColor: 'var(--flock-color-success)'
    }} alt="User B">B</Avatar>
      <Avatar style={{
      backgroundColor: 'var(--flock-color-info)'
    }} alt="User C">C</Avatar>
      <Avatar style={{
      backgroundColor: 'var(--flock-color-warning)'
    }} alt="User D">D</Avatar>
      <Avatar style={{
      backgroundColor: 'var(--flock-color-error)'
    }} alt="User E">E</Avatar>
    </AvatarGroup>
}`,...(w=(q=l.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const yr=["Default","Square","Small","Large","WithImage","WithIcon","WithText","Group"];export{a as Default,l as Group,s as Large,t as Small,e as Square,i as WithIcon,c as WithImage,n as WithText,yr as __namedExportsOrder,fr as default};
