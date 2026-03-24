import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ge}from"./index-oxIuDU2I.js";import{S}from"./Select-Y0ygofAr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./flockIcons-DaHM7iCS.js";import"./WeatherClimateWindIcon-B7IaNujn.js";import"./index-CzapPNZj.js";import"./useShowArrow-BdooJlZm.js";import"./useControlledState-tu5D_1Ht.js";import"./reactNode-CHTsHNSU.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./SizeContext-6SbbsRse.js";import"./index-CxTbkWiH.js";import"./shadow-DTVO8V5H.js";import"./pickAttrs-BoNuQqbq.js";import"./Overflow-DnrDsobS.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./extends-CF3RwP-h.js";import"./omit-3QAACPn7.js";import"./KeyCode-iX0y3px_.js";import"./List-DpcyPBqC.js";import"./index-Bk6HVE_C.js";import"./useLocale-BzNmgGjV.js";import"./genStyleUtils-lByCByip.js";import"./useMergeSemantic-BtH1ep6T.js";import"./compact-item-DgFz4dAb.js";import"./move-Bvj_4Dg2.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./motion-CGP6LHXs.js";import"./PurePanel-Bl8FDyk0.js";import"./statusUtils-obNhd3Z8.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useVariants-CpE5hFEr.js";import"./useIcons-BsCD8bfQ.js";import"./CheckOutlined-Bjlu0gCC.js";import"./AntdIcon-CmaM0TST.js";import"./CloseCircleFilled-CV3osNzx.js";import"./CloseOutlined-BsjciePg.js";import"./DownOutlined-BT1hZG-W.js";import"./LoadingOutlined-Cogr-EmL.js";import"./SearchOutlined-C-Rz-lYV.js";import"./useZIndex-4Tk46FxA.js";const o=[{label:"Fast Food",value:"fast-food"},{label:"Beverages",value:"beverages"},{label:"Desserts",value:"desserts"},{label:"Groceries",value:"groceries"},{label:"Pharmacy",value:"pharmacy"}],he=[{label:"Food & Beverage",options:[{label:"Fast Food",value:"fast-food"},{label:"Beverages",value:"beverages"},{label:"Desserts",value:"desserts"}]},{label:"Retail",options:[{label:"Groceries",value:"groceries"},{label:"Pharmacy",value:"pharmacy"},{label:"Electronics",value:"electronics"}]}],St={title:"Data Entry/Select",component:S,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"]},status:{control:"select",options:["","error","warning"]},disabled:{control:"boolean"},loading:{control:"boolean"},allowClear:{control:"boolean"},showSearch:{control:"boolean"},mode:{control:"select",options:[void 0,"multiple","tags"]},placeholder:{control:"text"}},decorators:[t=>e.jsx("div",{style:{width:"var(--flock-padding-3xl)",minWidth:"240px"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`Select — dropdown selection control.
Full Ant Design Select re-export with Flock DS tokens.
Supports single, multiple, tags, search, grouping, and custom rendering.`}}}},r={args:{placeholder:"Select an option…",options:o,style:{width:"100%"}}},a={args:{placeholder:"Small",options:o,size:"small",style:{width:"100%"}}},s={args:{placeholder:"Large",options:o,size:"large",style:{width:"100%"}}},l={args:{placeholder:"Error state",options:o,status:"error",style:{width:"100%"}}},n={args:{placeholder:"Warning state",options:o,status:"warning",style:{width:"100%"}}},i={args:{placeholder:"Disabled",options:o,disabled:!0,style:{width:"100%"}}},p={args:{placeholder:"Loading…",options:o,loading:!0,style:{width:"100%"}}},c={args:{placeholder:"Select multiple…",options:o,mode:"multiple",defaultValue:["fast-food","desserts"],style:{width:"100%"}}},d={args:{placeholder:"Enter tags…",options:o,mode:"tags",style:{width:"100%"}}},m={args:{placeholder:"Search options…",options:o,showSearch:!0,style:{width:"100%"}}},u={name:"Allow clear",args:{placeholder:"Select…",options:o,allowClear:!0,defaultValue:"fast-food",style:{width:"100%"}}},g={name:"Max tag count",args:{placeholder:"Select multiple…",options:o,mode:"multiple",maxTagCount:2,defaultValue:["fast-food","desserts","groceries","pharmacy"],style:{width:"100%"}}},h={name:"Group options",args:{placeholder:"Select from groups…",options:he,style:{width:"100%"}}},y={name:"Custom render",render:()=>e.jsx(S,{placeholder:"Select a product…",style:{width:"100%"},optionRender:t=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:t.label}),e.jsxs("span",{style:{color:"var(--flock-color-text-tertiary)",fontSize:"var(--flock-font-size-sm)"},children:["#",t.value]})]}),options:[{label:"Shawarma Combo",value:"QAR 25.00"},{label:"Iced Latte",value:"QAR 18.00"},{label:"Cheesecake Slice",value:"QAR 32.00"}]})},v=["small","middle","large"],ye=[{label:"default",value:""},{label:"error",value:"error"},{label:"warning",value:"warning"}],fe={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-tertiary)",marginBottom:"var(--flock-space-3)",textTransform:"uppercase",letterSpacing:"0.05em"},Se={display:"grid",gridTemplateColumns:"80px repeat(3, 1fr)",gap:"var(--flock-space-3)",alignItems:"center",marginBottom:"var(--flock-space-8)"},b={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-secondary)"},ve={fontSize:"var(--flock-font-size-sm)",color:"var(--flock-color-text-tertiary)",textAlign:"center"},f={render:()=>e.jsxs("div",{children:[e.jsx("div",{style:fe,children:"Status × Size"}),e.jsxs("div",{style:Se,children:[e.jsx("div",{}),v.map(t=>e.jsx("div",{style:ve,children:t},t)),ye.map(({label:t,value:ue})=>e.jsxs(ge.Fragment,{children:[e.jsx("div",{style:b,children:t}),v.map(w=>e.jsx(S,{size:w,status:ue||void 0,placeholder:t,options:o,style:{width:"100%"}},w))]},t)),e.jsx("div",{style:b,children:"disabled"}),v.map(t=>e.jsx(S,{size:t,disabled:!0,placeholder:"Disabled",options:o,style:{width:"100%"}},t))]})]})};var x,z,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option…',
    options: defaultOptions,
    style: {
      width: '100%'
    }
  }
}`,...(k=(z=r.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var j,C,O;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small',
    options: defaultOptions,
    size: 'small',
    style: {
      width: '100%'
    }
  }
}`,...(O=(C=a.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var R,D,L;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large',
    options: defaultOptions,
    size: 'large',
    style: {
      width: '100%'
    }
  }
}`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var A,E,F;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error state',
    options: defaultOptions,
    status: 'error',
    style: {
      width: '100%'
    }
  }
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,M,G;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Warning state',
    options: defaultOptions,
    status: 'warning',
    style: {
      width: '100%'
    }
  }
}`,...(G=(M=n.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var Q,V,B;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    options: defaultOptions,
    disabled: true,
    style: {
      width: '100%'
    }
  }
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var W,H,I;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Loading…',
    options: defaultOptions,
    loading: true,
    style: {
      width: '100%'
    }
  }
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var P,_,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select multiple…',
    options: defaultOptions,
    mode: 'multiple',
    defaultValue: ['fast-food', 'desserts'],
    style: {
      width: '100%'
    }
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,K,N;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter tags…',
    options: defaultOptions,
    mode: 'tags',
    style: {
      width: '100%'
    }
  }
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search options…',
    options: defaultOptions,
    showSearch: true,
    style: {
      width: '100%'
    }
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Allow clear',
  args: {
    placeholder: 'Select…',
    options: defaultOptions,
    allowClear: true,
    defaultValue: 'fast-food',
    style: {
      width: '100%'
    }
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,oe,re;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Max tag count',
  args: {
    placeholder: 'Select multiple…',
    options: defaultOptions,
    mode: 'multiple',
    maxTagCount: 2,
    defaultValue: ['fast-food', 'desserts', 'groceries', 'pharmacy'],
    style: {
      width: '100%'
    }
  }
}`,...(re=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ae,se,le;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Group options',
  args: {
    placeholder: 'Select from groups…',
    options: groupOptions,
    style: {
      width: '100%'
    }
  }
}`,...(le=(se=h.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ne,ie,pe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Custom render',
  render: () => <Select placeholder="Select a product…" style={{
    width: '100%'
  }} optionRender={option => <div style={{
    display: 'flex',
    justifyContent: 'space-between'
  }}>
          <span>{option.label}</span>
          <span style={{
      color: 'var(--flock-color-text-tertiary)',
      fontSize: 'var(--flock-font-size-sm)'
    }}>
            #{option.value}
          </span>
        </div>} options={[{
    label: 'Shawarma Combo',
    value: 'QAR 25.00'
  }, {
    label: 'Iced Latte',
    value: 'QAR 18.00'
  }, {
    label: 'Cheesecake Slice',
    value: 'QAR 32.00'
  }]} />
}`,...(pe=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var ce,de,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
            {sizes.map(s => <Select key={s} size={s} status={value || undefined} placeholder={label} options={defaultOptions} style={{
          width: '100%'
        }} />)}
          </React.Fragment>)}

        <div style={rowLabelStyle}>disabled</div>
        {sizes.map(s => <Select key={s} size={s} disabled placeholder="Disabled" options={defaultOptions} style={{
        width: '100%'
      }} />)}
      </div>
    </div>
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const vt=["Default","Small","Large","Error","Warning","Disabled","Loading","Multiple","Tags","Search","AllowClear","MaxTagCount","GroupOptions","CustomRender","Matrix"];export{u as AllowClear,y as CustomRender,r as Default,i as Disabled,l as Error,h as GroupOptions,s as Large,p as Loading,f as Matrix,g as MaxTagCount,c as Multiple,m as Search,a as Small,d as Tags,n as Warning,vt as __namedExportsOrder,St as default};
