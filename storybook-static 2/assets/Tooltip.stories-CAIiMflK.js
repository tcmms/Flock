import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-oxIuDU2I.js";import{T as W}from"./index-BemBm_5k.js";import{B as e}from"./Button-DN9j4dNv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-CxTbkWiH.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./shadow-DTVO8V5H.js";import"./useControlledState-tu5D_1Ht.js";import"./placements-BDsFN2kw.js";import"./genStyleUtils-lByCByip.js";import"./roundedArrow-CTehBM3O.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./motion-CGP6LHXs.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./fade-BcJF4FJN.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./useMergeSemantic-BtH1ep6T.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./LoadingOutlined-Cogr-EmL.js";import"./AntdIcon-CmaM0TST.js";import"./util-Co9wUNrq.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";const r=({arrow:t=!0,...q})=>o.jsx(W,{arrow:t,...q});r.__docgenInfo={description:`Tooltip — floating label on hover.
Built on Ant Design Tooltip with Flock DS tokens via FlockProvider.`,methods:[],displayName:"Tooltip",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"Tooltip content"},placement:{required:!1,tsType:{name:"AntTooltipProps['placement']",raw:"AntTooltipProps['placement']"},description:"Placement position"},color:{required:!1,tsType:{name:"string"},description:"Custom color"},arrow:{required:!1,tsType:{name:"boolean"},description:"Whether to show arrow",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Trigger element"}}};const n={padding:"var(--flock-padding-3xl)",display:"inline-block"},bo={title:"Data Display/Tooltip",component:r,tags:["autodocs"],argTypes:{title:{control:"text",description:"Tooltip content"},placement:{control:"select",options:["top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight"]},color:{control:"color"},arrow:{control:"boolean"},children:{control:{disable:!0}}},parameters:{docs:{description:{component:`Tooltip — floating label on hover.
Built on Ant Design Tooltip with Flock DS tokens.`}}}},i={args:{title:"Tooltip text"},render:t=>o.jsx("div",{style:n,children:o.jsx(r,{...t,children:o.jsx(e,{children:"Hover me"})})})},s={args:{title:"Top tooltip",placement:"top"},render:t=>o.jsx("div",{style:n,children:o.jsx(r,{...t,children:o.jsx(e,{children:"Top"})})})},a={args:{title:"Bottom tooltip",placement:"bottom"},render:t=>o.jsx("div",{style:n,children:o.jsx(r,{...t,children:o.jsx(e,{children:"Bottom"})})})},l={args:{title:"Left tooltip",placement:"left"},render:t=>o.jsx("div",{style:n,children:o.jsx(r,{...t,children:o.jsx(e,{children:"Left"})})})},p={args:{title:"Right tooltip",placement:"right"},render:t=>o.jsx("div",{style:n,children:o.jsx(r,{...t,children:o.jsx(e,{children:"Right"})})})},c={name:"With color",args:{title:"Custom color",color:"#D90217"},render:t=>o.jsx("div",{style:n,children:o.jsx(r,{...t,children:o.jsx(e,{children:"Colored"})})})},d={name:"No arrow",args:{title:"No arrow",arrow:!1},render:t=>o.jsx("div",{style:n,children:o.jsx(r,{...t,children:o.jsx(e,{children:"No arrow"})})})};var m,g,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip text'
  },
  render: args => <div style={pad}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,T,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Top tooltip',
    placement: 'top'
  },
  render: args => <div style={pad}>
      <Tooltip {...args}>
        <Button>Top</Button>
      </Tooltip>
    </div>
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var x,v,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Bottom tooltip',
    placement: 'bottom'
  },
  render: args => <div style={pad}>
      <Tooltip {...args}>
        <Button>Bottom</Button>
      </Tooltip>
    </div>
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var B,y,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Left tooltip',
    placement: 'left'
  },
  render: args => <div style={pad}>
      <Tooltip {...args}>
        <Button>Left</Button>
      </Tooltip>
    </div>
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,N,R;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Right tooltip',
    placement: 'right'
  },
  render: args => <div style={pad}>
      <Tooltip {...args}>
        <Button>Right</Button>
      </Tooltip>
    </div>
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var D,S,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With color',
  args: {
    title: 'Custom color',
    color: '#D90217'
  },
  render: args => <div style={pad}>
      <Tooltip {...args}>
        <Button>Colored</Button>
      </Tooltip>
    </div>
}`,...(L=(S=c.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var k,C,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'No arrow',
  args: {
    title: 'No arrow',
    arrow: false
  },
  render: args => <div style={pad}>
      <Tooltip {...args}>
        <Button>No arrow</Button>
      </Tooltip>
    </div>
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const No=["Default","Top","Bottom","Left","Right","WithColor","NoArrow"];export{a as Bottom,i as Default,l as Left,d as NoArrow,p as Right,s as Top,c as WithColor,No as __namedExportsOrder,bo as default};
