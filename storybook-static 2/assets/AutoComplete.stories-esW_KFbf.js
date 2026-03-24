import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as de}from"./index-oxIuDU2I.js";import{F as he}from"./flockIcons-DaHM7iCS.js";import{C as fe,c as P}from"./index-TJOQIVf4.js";import{o as Q}from"./omit-3QAACPn7.js";import{g as ge}from"./PurePanel-Bl8FDyk0.js";import{S as y}from"./index-CzapPNZj.js";import{t as Se}from"./toArray-QdoN5Rqg.js";import"./index-BUbyd2uB.js";import{u as xe}from"./useMergeSemantic-BtH1ep6T.js";import"./_commonjsHelpers-CqkleIqs.js";import"./WeatherClimateWindIcon-B7IaNujn.js";import"./useControlledState-tu5D_1Ht.js";import"./reactNode-CHTsHNSU.js";import"./useShowArrow-BdooJlZm.js";import"./index-CxTbkWiH.js";import"./shadow-DTVO8V5H.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./pickAttrs-BoNuQqbq.js";import"./Overflow-DnrDsobS.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./extends-CF3RwP-h.js";import"./KeyCode-iX0y3px_.js";import"./List-DpcyPBqC.js";import"./index-Bk6HVE_C.js";import"./useLocale-BzNmgGjV.js";import"./genStyleUtils-lByCByip.js";import"./compact-item-DgFz4dAb.js";import"./move-Bvj_4Dg2.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./SizeContext-6SbbsRse.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./motion-CGP6LHXs.js";import"./statusUtils-obNhd3Z8.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useVariants-CpE5hFEr.js";import"./useIcons-BsCD8bfQ.js";import"./CheckOutlined-Bjlu0gCC.js";import"./AntdIcon-CmaM0TST.js";import"./CloseCircleFilled-CV3osNzx.js";import"./CloseOutlined-BsjciePg.js";import"./DownOutlined-BT1hZG-W.js";import"./LoadingOutlined-Cogr-EmL.js";import"./SearchOutlined-C-Rz-lYV.js";import"./useZIndex-4Tk46FxA.js";const{Option:W}=y;function I(e){return(e==null?void 0:e.type)&&(e.type.isSelectOption||e.type.isSelectOptGroup)}const Ce=(e,m)=>{const{prefixCls:v,className:p,style:b,popupClassName:j,dropdownClassName:A,children:D,dataSource:E,rootClassName:N,dropdownStyle:z,dropdownRender:ee,popupRender:oe,onDropdownVisibleChange:te,onOpenChange:re,styles:se,classNames:ne,popupMatchSelectWidth:ae,dropdownMatchSelectWidth:pe}=e,l=Se(D),k=oe||ee,R=re||te,M=ae||pe;let d;l.length===1&&s.isValidElement(l[0])&&!I(l[0])&&([d]=l);const le=d?()=>d:void 0;let O;l.length&&I(l[0])?O=D:O=E?E.map(o=>{if(s.isValidElement(o))return o;switch(typeof o){case"string":return s.createElement(W,{key:o,value:o},o);case"object":{const{value:a}=o;return s.createElement(W,{key:a,value:a},o.text)}default:return}}):[];const{getPrefixCls:ie}=s.useContext(fe),h=ie("select",v),me={...e,popupRender:k,onOpenChange:R,popupMatchSelectWidth:M},[t,r]=xe([ne],[se],{props:me},{popup:{_default:"root"}}),ce=s.useMemo(()=>{var o,a,c;return{root:P(`${h}-auto-complete`,p,N,t.root,{[`${h}-customize`]:d}),prefix:t.prefix,input:t.input,placeholder:t.placeholder,content:t.content,popup:{root:P(j,A,(o=t.popup)==null?void 0:o.root),list:(a=t.popup)==null?void 0:a.list,listItem:(c=t.popup)==null?void 0:c.listItem}}},[h,p,N,t,j,A]),ue=s.useMemo(()=>{var o,a,c;return{root:{...r.root,...b},input:r.input,prefix:r.prefix,placeholder:r.placeholder,content:r.content,popup:{root:{...z,...(o=r.popup)==null?void 0:o.root},list:(a=r.popup)==null?void 0:a.list,listItem:(c=r.popup)==null?void 0:c.listItem}}},[r,b,z]);return s.createElement(y,{ref:m,suffixIcon:null,...Q(e,["dataSource","dropdownClassName","popupClassName"]),prefixCls:h,classNames:ce,styles:ue,mode:y.SECRET_COMBOBOX_MODE_DO_NOT_USE,popupRender:k,onPopupVisibleChange:R,popupMatchSelectWidth:M,getInputElement:le},O)},Z=s.forwardRef(Ce),{Option:ye}=y,ve=ge(Z,"popupAlign",e=>Q(e,["visible"])),w=Z;w.Option=ye;w._InternalPanelDoNotUseOrYouWillBeFired=ve;const i=({suffixIcon:e,...m})=>n.jsx(w,{suffixIcon:e??n.jsx(he.ArrowDown,{}),...m});i.__docgenInfo={description:`AutoComplete — auto-complete input control.
Built on Ant Design AutoComplete with Flock DS tokens via FlockProvider.
Uses Flock arrow icon for suffix.`,methods:[],displayName:"AutoComplete"};const u=[{value:"React"},{value:"Angular"},{value:"Vue"},{value:"Svelte"},{value:"Next.js"},{value:"Nuxt.js"}],yo={title:"Data Entry/AutoComplete",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"]},disabled:{control:"boolean"},placeholder:{control:"text"}},decorators:[e=>n.jsx("div",{style:{width:280},children:n.jsx(e,{})})],parameters:{docs:{description:{component:"AutoComplete — auto-complete input with suggestions."}}}},f={args:{options:u,placeholder:"Type a framework…",style:{width:"100%"}}},g={name:"Custom options",args:{placeholder:"Search users…",style:{width:"100%"},options:[{value:"john",label:"John Doe — john@example.com"},{value:"jane",label:"Jane Smith — jane@example.com"},{value:"bob",label:"Bob Wilson — bob@example.com"}]}},S={name:"With search",render:()=>{const[e,m]=de.useState([]),v=p=>{m(p?[{value:`${p}@gmail.com`},{value:`${p}@outlook.com`},{value:`${p}@yahoo.com`}]:[])};return n.jsx(i,{options:e,onSearch:v,placeholder:"Enter email…",style:{width:"100%"}})}},x={args:{options:u,placeholder:"Disabled",disabled:!0,style:{width:"100%"}}},C={name:"Size variants",render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--flock-space-3)"},children:[n.jsx(i,{options:u,placeholder:"Small",size:"small",style:{width:"100%"}}),n.jsx(i,{options:u,placeholder:"Middle",size:"middle",style:{width:"100%"}}),n.jsx(i,{options:u,placeholder:"Large",size:"large",style:{width:"100%"}})]})};var _,$,V;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    placeholder: 'Type a framework…',
    style: {
      width: '100%'
    }
  }
}`,...(V=($=f.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var B,F,T;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Custom options',
  args: {
    placeholder: 'Search users…',
    style: {
      width: '100%'
    },
    options: [{
      value: 'john',
      label: 'John Doe — john@example.com'
    }, {
      value: 'jane',
      label: 'Jane Smith — jane@example.com'
    }, {
      value: 'bob',
      label: 'Bob Wilson — bob@example.com'
    }]
  }
}`,...(T=(F=g.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var J,U,G;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With search',
  render: () => {
    const [options, setOptions] = React.useState<{
      value: string;
    }[]>([]);
    const handleSearch = (text: string) => {
      setOptions(text ? [{
        value: \`\${text}@gmail.com\`
      }, {
        value: \`\${text}@outlook.com\`
      }, {
        value: \`\${text}@yahoo.com\`
      }] : []);
    };
    return <AutoComplete options={options} onSearch={handleSearch} placeholder="Enter email…" style={{
      width: '100%'
    }} />;
  }
}`,...(G=(U=S.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var L,X,Y;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    placeholder: 'Disabled',
    disabled: true,
    style: {
      width: '100%'
    }
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var q,H,K;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Size variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--flock-space-3)'
  }}>
      <AutoComplete options={defaultOptions} placeholder="Small" size="small" style={{
      width: '100%'
    }} />
      <AutoComplete options={defaultOptions} placeholder="Middle" size="middle" style={{
      width: '100%'
    }} />
      <AutoComplete options={defaultOptions} placeholder="Large" size="large" style={{
      width: '100%'
    }} />
    </div>
}`,...(K=(H=C.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const vo=["Default","CustomOptions","WithSearch","Disabled","SizeVariants"];export{g as CustomOptions,f as Default,x as Disabled,C as SizeVariants,S as WithSearch,vo as __namedExportsOrder,yo as default};
