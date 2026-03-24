import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as Dr}from"./index-oxIuDU2I.js";import{I as br,A as kr,a as jr,b as vr}from"./WeatherClimateWindIcon-B7IaNujn.js";import{B as r}from"./Button-DN9j4dNv.js";import{S as Ir}from"./index-Cf5wY2b7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./reactNode-CHTsHNSU.js";import"./index-TJOQIVf4.js";import"./omit-3QAACPn7.js";import"./toArray-QdoN5Rqg.js";import"./isNonNullable-Hl1s-5mn.js";import"./index-DLyCQgDV.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./SizeContext-6SbbsRse.js";import"./genStyleUtils-lByCByip.js";import"./client-CsZ7Yvsz.js";import"./useSize-BVGoiTzB.js";import"./Compact-SEgaOlnH.js";import"./useOrientation-CvsZ8lA6.js";import"./LoadingOutlined-Cogr-EmL.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";import"./useMergeSemantic-BtH1ep6T.js";import"./statusUtils-obNhd3Z8.js";const n=()=>e.jsx(br,{style:{fontSize:"var(--flock-font-size-lg)"}}),T=()=>e.jsx(jr,{style:{fontSize:"var(--flock-font-size-lg)"}}),Br=()=>e.jsx(kr,{style:{fontSize:"var(--flock-font-size-lg)"}}),q=()=>e.jsx(vr,{style:{fontSize:"var(--flock-font-size-lg)"}}),ca={title:"General/Button",component:r,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","default","dashed","text","link"],description:"Button type"},size:{control:"select",options:["small","middle","large"],description:"Button size"},danger:{control:"boolean",description:"Danger modifier"},ghost:{control:"boolean",description:"Ghost modifier"},disabled:{control:"boolean",description:"Disabled state"},loading:{control:"boolean",description:"Loading state"},block:{control:"boolean",description:"Full width"},shape:{control:"select",options:["default","round","circle"]},children:{control:"text",description:"Button label"},icon:{control:{disable:!0}}},parameters:{docs:{description:{component:`Button — triggers an action or event.
Full Ant Design Button with Flock DS tokens via FlockProvider.
Supports 5 types, 3 sizes, danger, ghost, disabled, loading, icon, block, shapes.`}}}},t={args:{children:"Button"}},s={args:{children:"Save changes",type:"primary"}},c={args:{children:"Add item",type:"dashed"}},i={args:{children:"Cancel",type:"text"}},d={args:{children:"View details",type:"link"}},l={args:{children:"Small",type:"primary",size:"small"}},p={args:{children:"Large",type:"primary",size:"large"}},m={name:"Danger primary",args:{children:"Delete",type:"primary",danger:!0}},g={name:"Danger default",args:{children:"Remove",danger:!0}},u={name:"Danger dashed",args:{children:"Remove",type:"dashed",danger:!0}},h={name:"Danger text",args:{children:"Delete",type:"text",danger:!0}},y={name:"Danger link",args:{children:"Delete",type:"link",danger:!0}},S={name:"Ghost primary",args:{children:"Ghost",type:"primary",ghost:!0},parameters:{backgrounds:{default:"dark"}},decorators:[o=>e.jsx("div",{style:{padding:"var(--flock-padding-lg)",background:"var(--flock-color-bg-spotlight)"},children:e.jsx(o,{})})]},x={name:"Ghost danger",args:{children:"Ghost danger",type:"primary",ghost:!0,danger:!0},decorators:[o=>e.jsx("div",{style:{padding:"var(--flock-padding-lg)",background:"var(--flock-color-bg-spotlight)"},children:e.jsx(o,{})})]},f={name:"With icon",render:()=>e.jsx(r,{type:"primary",icon:e.jsx(n,{}),children:"Search"})},D={name:"Icon after",render:()=>e.jsxs(r,{type:"primary",children:["Continue ",e.jsx(Br,{})]})},b={name:"Icon only",render:()=>e.jsx(r,{type:"primary",icon:e.jsx(n,{}),shape:"circle","aria-label":"Search"})},k={name:"Icon only square",render:()=>e.jsx(r,{type:"primary",icon:e.jsx(T,{}),"aria-label":"Settings"})},j={args:{children:"Round button",type:"primary",shape:"round"}},v={render:()=>e.jsx(r,{type:"primary",icon:e.jsx(n,{}),shape:"circle","aria-label":"Search"})},I={args:{children:"Disabled",type:"primary",disabled:!0}},B={name:"Disabled default",args:{children:"Disabled",disabled:!0}},L={args:{children:"Saving…",type:"primary",loading:!0}},w={name:"Loading default",args:{children:"Loading…",loading:!0}},z={name:"Loading icon only",args:{type:"primary",loading:!0,shape:"circle"}},A={args:{children:"Full width",type:"primary",block:!0}},G={name:"As link (href)",args:{children:"Go to Google",type:"link",href:"https://google.com",target:"_blank"}},Lr=["primary","default","dashed","text","link"],F=["small","middle","large"],wr={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-tertiary)",marginBottom:"var(--flock-space-3)",textTransform:"uppercase",letterSpacing:"0.05em"},zr={display:"grid",gridTemplateColumns:"80px repeat(3, 1fr)",gap:"var(--flock-space-3)",alignItems:"center",marginBottom:"var(--flock-space-8)"},E={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-secondary)"},Ar={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-tertiary)",textAlign:"center"};function C({title:o,stateProps:M}){return e.jsxs("div",{children:[e.jsx("div",{style:wr,children:o}),e.jsxs("div",{style:zr,children:[e.jsx("div",{}),F.map(a=>e.jsx("div",{style:Ar,children:a},a)),Lr.map(a=>e.jsxs(Dr.Fragment,{children:[e.jsx("div",{style:E,children:a}),F.map(O=>e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{type:a,size:O,...M,children:a})},O))]},a)),e.jsx("div",{style:E,children:"danger"}),F.map(a=>e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{type:"primary",size:a,danger:!0,...M,children:"danger"})},a))]})]})}const P={render:()=>e.jsxs("div",{children:[e.jsx(C,{title:"Default state",stateProps:{}}),e.jsx(C,{title:"Disabled state",stateProps:{disabled:!0}}),e.jsx(C,{title:"Loading state",stateProps:{loading:!0}})]})},R={name:"Icon showcase",render:()=>e.jsxs(Ir,{wrap:!0,children:[e.jsx(r,{type:"primary",icon:e.jsx(n,{}),children:"Search"}),e.jsx(r,{icon:e.jsx(T,{}),children:"Settings"}),e.jsx(r,{type:"dashed",icon:e.jsx(q,{}),children:"Download"}),e.jsx(r,{type:"primary",icon:e.jsx(n,{}),shape:"circle","aria-label":"Search"}),e.jsx(r,{icon:e.jsx(T,{}),shape:"circle","aria-label":"Settings"}),e.jsx(r,{type:"primary",icon:e.jsx(n,{}),shape:"round",children:"Search"}),e.jsx(r,{type:"primary",icon:e.jsx(n,{}),loading:!0,children:"Searching"}),e.jsx(r,{danger:!0,icon:e.jsx(q,{}),children:"Delete file"})]})};var W,_,H;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(H=(_=t.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var V,U,J;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Save changes',
    type: 'primary'
  }
}`,...(J=(U=s.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,N,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'Add item',
    type: 'dashed'
  }
}`,...(Q=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    type: 'text'
  }
}`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'View details',
    type: 'link'
  }
}`,...(re=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,oe;l.parameters={...l.parameters,docs:{...(ae=l.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    type: 'primary',
    size: 'small'
  }
}`,...(oe=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,se,ce;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: 'Large',
    type: 'primary',
    size: 'large'
  }
}`,...(ce=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,de,le;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Danger primary',
  args: {
    children: 'Delete',
    type: 'primary',
    danger: true
  }
}`,...(le=(de=m.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var pe,me,ge;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Danger default',
  args: {
    children: 'Remove',
    danger: true
  }
}`,...(ge=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ue,he,ye;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Danger dashed',
  args: {
    children: 'Remove',
    type: 'dashed',
    danger: true
  }
}`,...(ye=(he=u.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Se,xe,fe;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Danger text',
  args: {
    children: 'Delete',
    type: 'text',
    danger: true
  }
}`,...(fe=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var De,be,ke;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Danger link',
  args: {
    children: 'Delete',
    type: 'link',
    danger: true
  }
}`,...(ke=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var je,ve,Ie;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Ghost primary',
  args: {
    children: 'Ghost',
    type: 'primary',
    ghost: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div style={{
    padding: 'var(--flock-padding-lg)',
    background: 'var(--flock-color-bg-spotlight)'
  }}><Story /></div>]
}`,...(Ie=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var Be,Le,we;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Ghost danger',
  args: {
    children: 'Ghost danger',
    type: 'primary',
    ghost: true,
    danger: true
  },
  decorators: [Story => <div style={{
    padding: 'var(--flock-padding-lg)',
    background: 'var(--flock-color-bg-spotlight)'
  }}><Story /></div>]
}`,...(we=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:we.source}}};var ze,Ae,Ge;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'With icon',
  render: () => <Button type="primary" icon={<SearchIcon />}>Search</Button>
}`,...(Ge=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var Pe,Re,Fe;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Icon after',
  render: () => <Button type="primary">
      Continue <ArrowIcon />
    </Button>
}`,...(Fe=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Fe.source}}};var Ce,Te,Me;b.parameters={...b.parameters,docs:{...(Ce=b.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Icon only',
  render: () => <Button type="primary" icon={<SearchIcon />} shape="circle" aria-label="Search" />
}`,...(Me=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var Oe,qe,Ee;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Icon only square',
  render: () => <Button type="primary" icon={<SettingsIcon />} aria-label="Settings" />
}`,...(Ee=(qe=k.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var We,_e,He;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    children: 'Round button',
    type: 'primary',
    shape: 'round'
  }
}`,...(He=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Ve,Ue,Je;v.parameters={...v.parameters,docs:{...(Ve=v.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <Button type="primary" icon={<SearchIcon />} shape="circle" aria-label="Search" />
}`,...(Je=(Ue=v.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Ke,Ne,Qe;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    type: 'primary',
    disabled: true
  }
}`,...(Qe=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;B.parameters={...B.parameters,docs:{...(Xe=B.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'Disabled default',
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(Ze=(Ye=B.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,er,rr;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    children: 'Saving…',
    type: 'primary',
    loading: true
  }
}`,...(rr=(er=L.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var ar,nr,or;w.parameters={...w.parameters,docs:{...(ar=w.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  name: 'Loading default',
  args: {
    children: 'Loading…',
    loading: true
  }
}`,...(or=(nr=w.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var tr,sr,cr;z.parameters={...z.parameters,docs:{...(tr=z.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  name: 'Loading icon only',
  args: {
    type: 'primary',
    loading: true,
    shape: 'circle'
  }
}`,...(cr=(sr=z.parameters)==null?void 0:sr.docs)==null?void 0:cr.source}}};var ir,dr,lr;A.parameters={...A.parameters,docs:{...(ir=A.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    children: 'Full width',
    type: 'primary',
    block: true
  }
}`,...(lr=(dr=A.parameters)==null?void 0:dr.docs)==null?void 0:lr.source}}};var pr,mr,gr;G.parameters={...G.parameters,docs:{...(pr=G.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  name: 'As link (href)',
  args: {
    children: 'Go to Google',
    type: 'link',
    href: 'https://google.com',
    target: '_blank'
  }
}`,...(gr=(mr=G.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var ur,hr,yr;P.parameters={...P.parameters,docs:{...(ur=P.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  render: () => <div>
      <MatrixSection title="Default state" stateProps={{}} />
      <MatrixSection title="Disabled state" stateProps={{
      disabled: true
    }} />
      <MatrixSection title="Loading state" stateProps={{
      loading: true
    }} />
    </div>
}`,...(yr=(hr=P.parameters)==null?void 0:hr.docs)==null?void 0:yr.source}}};var Sr,xr,fr;R.parameters={...R.parameters,docs:{...(Sr=R.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  name: 'Icon showcase',
  render: () => <Space wrap>
      <Button type="primary" icon={<SearchIcon />}>Search</Button>
      <Button icon={<SettingsIcon />}>Settings</Button>
      <Button type="dashed" icon={<DownloadIcon />}>Download</Button>
      <Button type="primary" icon={<SearchIcon />} shape="circle" aria-label="Search" />
      <Button icon={<SettingsIcon />} shape="circle" aria-label="Settings" />
      <Button type="primary" icon={<SearchIcon />} shape="round">Search</Button>
      <Button type="primary" icon={<SearchIcon />} loading>Searching</Button>
      <Button danger icon={<DownloadIcon />}>Delete file</Button>
    </Space>
}`,...(fr=(xr=R.parameters)==null?void 0:xr.docs)==null?void 0:fr.source}}};const ia=["Default","Primary","Dashed","Text","Link","Small","Large","DangerPrimary","DangerDefault","DangerDashed","DangerText","DangerLink","GhostPrimary","GhostDanger","WithIcon","IconAfter","IconOnly","IconOnlySquare","Round","Circle","Disabled","DisabledDefault","Loading","LoadingDefault","LoadingIcon","Block","AsLink","Matrix","IconShowcase"];export{G as AsLink,A as Block,v as Circle,u as DangerDashed,g as DangerDefault,y as DangerLink,m as DangerPrimary,h as DangerText,c as Dashed,t as Default,I as Disabled,B as DisabledDefault,x as GhostDanger,S as GhostPrimary,D as IconAfter,b as IconOnly,k as IconOnlySquare,R as IconShowcase,p as Large,d as Link,L as Loading,w as LoadingDefault,z as LoadingIcon,P as Matrix,s as Primary,j as Round,l as Small,i as Text,f as WithIcon,ia as __namedExportsOrder,ca as default};
