import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as je}from"./index-oxIuDU2I.js";import{I as ze}from"./index-C3cpwhys.js";import{S as V}from"./Select-Y0ygofAr.js";import{F as Ce}from"./flockIcons-DaHM7iCS.js";import{S as Fe}from"./index-Cf5wY2b7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./context-M28mY0tC.js";import"./genStyleUtils-lByCByip.js";import"./omit-3QAACPn7.js";import"./index-CSL4b1Pf.js";import"./compact-item-DgFz4dAb.js";import"./Input-B6fOCpQ1.js";import"./useControlledState-tu5D_1Ht.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./CloseCircleFilled-CV3osNzx.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./statusUtils-obNhd3Z8.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useVariants-CpE5hFEr.js";import"./useMergeSemantic-BtH1ep6T.js";import"./pickAttrs-BoNuQqbq.js";import"./EyeOutlined-D4_0bFME.js";import"./SearchOutlined-C-Rz-lYV.js";import"./Button-DN9j4dNv.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";import"./index-CzapPNZj.js";import"./useShowArrow-BdooJlZm.js";import"./index-CxTbkWiH.js";import"./Overflow-DnrDsobS.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./extends-CF3RwP-h.js";import"./KeyCode-iX0y3px_.js";import"./List-DpcyPBqC.js";import"./index-Bk6HVE_C.js";import"./useLocale-BzNmgGjV.js";import"./move-Bvj_4Dg2.js";import"./motion-CGP6LHXs.js";import"./PurePanel-Bl8FDyk0.js";import"./useIcons-BsCD8bfQ.js";import"./CheckOutlined-Bjlu0gCC.js";import"./CloseOutlined-BsjciePg.js";import"./DownOutlined-BT1hZG-W.js";import"./useZIndex-4Tk46FxA.js";import"./WeatherClimateWindIcon-B7IaNujn.js";const a=({size:r="default",status:I="",...t})=>e.jsx(ze,{variant:"filled",size:r,status:I,...t});a.__docgenInfo={description:`InputField — single-line text input.
Built on Ant Design Input with Flock DS tokens via FlockProvider.
Always uses filled style (grey background, no border by default).`,methods:[],displayName:"InputField",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Input size",defaultValue:{value:"'default'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'' | 'error' | 'warning'",elements:[{name:"literal",value:"''"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"Validation status",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read only"},showCount:{required:!1,tsType:{name:"boolean"},description:"Show character count"},maxLength:{required:!1,tsType:{name:"number"},description:"Max length"},prefix:{required:!1,tsType:{name:"ReactNode"},description:"Prefix icon or text"},suffix:{required:!1,tsType:{name:"ReactNode"},description:"Suffix icon or text"},addonBefore:{required:!1,tsType:{name:"ReactNode"},description:"Content before the input"},addonAfter:{required:!1,tsType:{name:"ReactNode"},description:"Content after the input"},allowClear:{required:!1,tsType:{name:"boolean"},description:"Allow clear button"},variant:{required:!1,tsType:{name:"AntInputProps['variant']",raw:"AntInputProps['variant']"},description:"Input variant"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline style"},onChange:{required:!1,tsType:{name:"AntInputProps['onChange']",raw:"AntInputProps['onChange']"},description:"Change handler"},onBlur:{required:!1,tsType:{name:"AntInputProps['onBlur']",raw:"AntInputProps['onBlur']"},description:"Blur handler"},onFocus:{required:!1,tsType:{name:"AntInputProps['onFocus']",raw:"AntInputProps['onFocus']"},description:"Focus handler"},onPressEnter:{required:!1,tsType:{name:"AntInputProps['onPressEnter']",raw:"AntInputProps['onPressEnter']"},description:"Press Enter handler"}}};const _r={title:"Data Entry/Input",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"],description:"Input size"},status:{control:"select",options:["","error","warning"],description:"Validation status"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},disabled:{control:"boolean",description:"Disabled state"},readOnly:{control:"boolean",description:"Read only state"},allowClear:{control:"boolean",description:"Show clear button"},showCount:{control:"boolean",description:"Show character count"},maxLength:{control:"number",description:"Maximum character length"},prefix:{control:{disable:!0},description:"Prefix icon or text (React node)"},suffix:{control:{disable:!0},description:"Suffix icon or text (React node)"}},parameters:{docs:{description:{component:`InputField — single-line text input built on Ant Design Input.
Uses filled variant (grey background, no border by default).
Supports 3 sizes, error/warning status, prefix/suffix, clear button, character count,
addon before/after, borderless, and read-only states.`}}}},o={args:{placeholder:"Enter text…"}},s={args:{placeholder:"Small input",size:"small"}},l={args:{placeholder:"Large input",size:"large"}},n={name:"With value",args:{defaultValue:"Merchant Store Name"}},i={args:{defaultValue:"Invalid email",status:"error"}},d={args:{defaultValue:"Check this value",status:"warning"}},c={args:{defaultValue:"Cannot edit",disabled:!0}},p={name:"Read only",args:{defaultValue:"Read only value",readOnly:!0}},u={name:"Allow clear",args:{defaultValue:"Clear me",allowClear:!0}},m={name:"Show count",args:{placeholder:"Type up to 100 characters…",showCount:!0,maxLength:100}},f={name:"With prefix icon",render:()=>e.jsx(a,{placeholder:"Search…",prefix:e.jsx(Ce.Search,{})})},h={name:"With suffix icon",render:()=>e.jsx(a,{placeholder:"Enter value…",suffix:e.jsx(Ce.Info,{})})},g={name:"Addon before",render:()=>e.jsx(a,{addonBefore:"https://",placeholder:"mysite.com",defaultValue:""})},y={name:"Addon after",render:()=>e.jsx(a,{addonAfter:".com",placeholder:"mysite",defaultValue:""})},v={name:"Addon with select",render:()=>e.jsx(a,{addonBefore:e.jsx(V,{defaultValue:"https",options:[{label:"https",value:"https"},{label:"http",value:"http"}],style:{width:80}}),addonAfter:e.jsx(V,{defaultValue:".com",options:[{label:".com",value:".com"},{label:".org",value:".org"},{label:".net",value:".net"}],style:{width:80}}),placeholder:"mysite",defaultValue:""})},x={render:()=>e.jsx(a,{variant:"borderless",placeholder:"Borderless input"})},S={name:"Compact group",render:()=>e.jsxs(Fe.Compact,{children:[e.jsx(V,{defaultValue:"product",options:[{label:"Product",value:"product"},{label:"Order",value:"order"},{label:"Store",value:"store"}],style:{width:120}}),e.jsx(a,{placeholder:"Search…",style:{width:200}})]})},Te=[{label:"default",value:""},{label:"error",value:"error"},{label:"warning",value:"warning"}],b=["small","default","large"],Pe={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-tertiary)",marginBottom:"var(--flock-space-3)",textTransform:"uppercase",letterSpacing:"0.05em"},ke={display:"grid",gridTemplateColumns:"80px repeat(3, 1fr)",gap:"var(--flock-space-3)",alignItems:"center",marginBottom:"var(--flock-space-8)"},A={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-secondary)"},Re={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-tertiary)",textAlign:"center"},w={render:()=>e.jsxs("div",{children:[e.jsx("div",{style:Pe,children:"Status × Size"}),e.jsxs("div",{style:ke,children:[e.jsx("div",{}),b.map(r=>e.jsx("div",{style:Re,children:r},r)),Te.map(({label:r,value:I})=>e.jsxs(je.Fragment,{children:[e.jsx("div",{style:A,children:r}),b.map(t=>e.jsx("div",{children:e.jsx(a,{size:t,status:I,defaultValue:r==="default"?"Text":`${r} text`})},t))]},r)),e.jsx("div",{style:A,children:"disabled"}),b.map(r=>e.jsx("div",{children:e.jsx(a,{size:r,defaultValue:"Disabled",disabled:!0})},r)),e.jsx("div",{style:A,children:"readOnly"}),b.map(r=>e.jsx("div",{children:e.jsx(a,{size:r,defaultValue:"Read only",readOnly:!0})},r))]})]})};var C,j,z;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text…'
  }
}`,...(z=(j=o.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var F,T,P;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    size: 'small'
  }
}`,...(P=(T=s.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var k,R,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    size: 'large'
  }
}`,...(q=(R=l.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var B,W,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With value',
  args: {
    defaultValue: 'Merchant Store Name'
  }
}`,...(D=(W=n.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,O,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Invalid email',
    status: 'error'
  }
}`,...(L=(O=i.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var N,M,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Check this value',
    status: 'warning'
  }
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var _,G,$;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Cannot edit',
    disabled: true
  }
}`,...($=(G=c.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var U,J,K;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Read only',
  args: {
    defaultValue: 'Read only value',
    readOnly: true
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Allow clear',
  args: {
    defaultValue: 'Clear me',
    allowClear: true
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Show count',
  args: {
    placeholder: 'Type up to 100 characters…',
    showCount: true,
    maxLength: 100
  }
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With prefix icon',
  render: () => <InputField placeholder="Search…" prefix={<FlockIcons.Search />} />
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,le,ne;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'With suffix icon',
  render: () => <InputField placeholder="Enter value…" suffix={<FlockIcons.Info />} />
}`,...(ne=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,de,ce;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Addon before',
  render: () => <InputField addonBefore="https://" placeholder="mysite.com" defaultValue="" />
}`,...(ce=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,me;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Addon after',
  render: () => <InputField addonAfter=".com" placeholder="mysite" defaultValue="" />
}`,...(me=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var fe,he,ge;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Addon with select',
  render: () => <InputField addonBefore={<Select defaultValue="https" options={[{
    label: 'https',
    value: 'https'
  }, {
    label: 'http',
    value: 'http'
  }]} style={{
    width: 80
  }} />} addonAfter={<Select defaultValue=".com" options={[{
    label: '.com',
    value: '.com'
  }, {
    label: '.org',
    value: '.org'
  }, {
    label: '.net',
    value: '.net'
  }]} style={{
    width: 80
  }} />} placeholder="mysite" defaultValue="" />
}`,...(ge=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ye,ve,xe;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <InputField variant="borderless" placeholder="Borderless input" />
}`,...(xe=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Se,be,we;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Compact group',
  render: () => <Space.Compact>
      <Select defaultValue="product" options={[{
      label: 'Product',
      value: 'product'
    }, {
      label: 'Order',
      value: 'order'
    }, {
      label: 'Store',
      value: 'store'
    }]} style={{
      width: 120
    }} />
      <InputField placeholder="Search…" style={{
      width: 200
    }} />
    </Space.Compact>
}`,...(we=(be=S.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var Ie,Ae,Ve;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div>
      <div style={sectionHeaderStyle}>Status × Size</div>
      <div style={gridStyle}>
        <div />
        {sizes.map(s => <div key={s} style={colHeaderStyle}>{s}</div>)}

        {statuses.map(({
        label,
        value
      }) => <React.Fragment key={label}>
            <div style={rowLabelStyle}>{label}</div>
            {sizes.map(s => <div key={s}>
                <InputField size={s} status={value} defaultValue={label === 'default' ? 'Text' : \`\${label} text\`} />
              </div>)}
          </React.Fragment>)}

        <div style={rowLabelStyle}>disabled</div>
        {sizes.map(s => <div key={s}>
            <InputField size={s} defaultValue="Disabled" disabled />
          </div>)}

        <div style={rowLabelStyle}>readOnly</div>
        {sizes.map(s => <div key={s}>
            <InputField size={s} defaultValue="Read only" readOnly />
          </div>)}
      </div>
    </div>
}`,...(Ve=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};const Gr=["Default","Small","Large","WithValue","Error","Warning","Disabled","ReadOnly","AllowClear","ShowCount","WithPrefix","WithSuffix","AddonBefore","AddonAfter","AddonSelect","Borderless","CompactGroup","Matrix"];export{y as AddonAfter,g as AddonBefore,v as AddonSelect,u as AllowClear,x as Borderless,S as CompactGroup,o as Default,c as Disabled,i as Error,l as Large,w as Matrix,p as ReadOnly,m as ShowCount,s as Small,d as Warning,f as WithPrefix,h as WithSuffix,n as WithValue,Gr as __namedExportsOrder,_r as default};
