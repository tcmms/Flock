import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as F}from"./index-oxIuDU2I.js";import{P as m}from"./index-bK_eGALt.js";import{B as o}from"./Button-DN9j4dNv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useControlledState-tu5D_1Ht.js";import"./reactNode-CHTsHNSU.js";import"./index-TJOQIVf4.js";import"./PurePanel-CSDCGrm3.js";import"./placements-BDsFN2kw.js";import"./genStyleUtils-lByCByip.js";import"./roundedArrow-CTehBM3O.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./index-BUbyd2uB.js";import"./toArray-QdoN5Rqg.js";import"./SizeContext-6SbbsRse.js";import"./zoom-pxgP0w3E.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./useMergeSemantic-BtH1ep6T.js";import"./motion-CGP6LHXs.js";import"./index-BemBm_5k.js";import"./index-CxTbkWiH.js";import"./shadow-DTVO8V5H.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./fade-BcJF4FJN.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./LoadingOutlined-Cogr-EmL.js";import"./AntdIcon-CmaM0TST.js";import"./util-Co9wUNrq.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";const a=e.jsxs("div",{children:[e.jsx("p",{style:{margin:0},children:"This is the popover content."}),e.jsx("p",{style:{margin:"var(--flock-space-2) 0 0",color:"var(--flock-color-text-secondary)"},children:"Additional details go here."})]}),ke={title:"Data Display/Popover",component:m,tags:["autodocs"],argTypes:{title:{control:"text"},trigger:{control:"select",options:["hover","click","focus"]},placement:{control:"select",options:["top","topLeft","topRight","bottom","bottomLeft","bottomRight","left","right"]}},parameters:{docs:{description:{component:"Popover — floating card popped by clicking, hovering, or focusing on an element."}}}},r={args:{content:a,children:e.jsx(o,{children:"Hover me"})}},n={name:"With title",args:{title:"Popover Title",content:a,children:e.jsx(o,{children:"Hover me"})}},i={name:"Trigger click",args:{title:"Click Popover",content:a,trigger:"click",children:e.jsx(o,{children:"Click me"})}},s={name:"Trigger focus",args:{title:"Focus Popover",content:a,trigger:"focus",children:e.jsx(o,{children:"Focus me"})}},p={render:()=>{const l=["top","topLeft","topRight","bottom","bottomLeft","bottomRight","left","right"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--flock-space-2)",padding:60,justifyContent:"center"},children:l.map(t=>e.jsx(m,{title:t,content:`Placement: ${t}`,placement:t,children:e.jsx(o,{children:t})},t))})}},c={render:()=>{const[l,t]=F.useState(!1);return e.jsx(m,{title:"Controlled Popover",content:e.jsxs("div",{children:[e.jsx("p",{style:{margin:0},children:"Controlled via state."}),e.jsx(o,{size:"small",type:"primary",onClick:()=>t(!1),style:{marginTop:"var(--flock-space-2)"},children:"Close"})]}),open:l,onOpenChange:t,trigger:"click",children:e.jsx(o,{type:"primary",children:"Toggle Popover"})})}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: sampleContent,
    children: <Button>Hover me</Button>
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With title',
  args: {
    title: 'Popover Title',
    content: sampleContent,
    children: <Button>Hover me</Button>
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,y,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Trigger click',
  args: {
    title: 'Click Popover',
    content: sampleContent,
    trigger: 'click',
    children: <Button>Click me</Button>
  }
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,P,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Trigger focus',
  args: {
    title: 'Focus Popover',
    content: sampleContent,
    trigger: 'focus',
    children: <Button>Focus me</Button>
  }
}`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var T,B,b;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const placements = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'right'] as const;
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--flock-space-2)',
      padding: 60,
      justifyContent: 'center'
    }}>
        {placements.map(p => <Popover key={p} title={p} content={\`Placement: \${p}\`} placement={p}>
            <Button>{p}</Button>
          </Popover>)}
      </div>;
  }
}`,...(b=(B=p.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var R,S,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Popover title="Controlled Popover" content={<div>
            <p style={{
        margin: 0
      }}>Controlled via state.</p>
            <Button size="small" type="primary" onClick={() => setOpen(false)} style={{
        marginTop: 'var(--flock-space-2)'
      }}>
              Close
            </Button>
          </div>} open={open} onOpenChange={setOpen} trigger="click">
        <Button type="primary">Toggle Popover</Button>
      </Popover>;
  }
}`,...(O=(S=c.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const Pe=["Default","WithTitle","TriggerClick","TriggerFocus","Placement","Controlled"];export{c as Controlled,r as Default,p as Placement,i as TriggerClick,s as TriggerFocus,n as WithTitle,Pe as __namedExportsOrder,ke as default};
