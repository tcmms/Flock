import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-oxIuDU2I.js";import{_ as te}from"./extends-CF3RwP-h.js";import{u as Re}from"./useControlledState-tu5D_1Ht.js";import{o as Ce}from"./omit-3QAACPn7.js";import{c as W,p as we,t as je,b as P,g as Ae,o as He,r as Ne,u as Ie}from"./index-TJOQIVf4.js";import{b as Pe,u as We}from"./index-BUbyd2uB.js";import{u as De}from"./reactNode-CHTsHNSU.js";import{u as Be}from"./useSize-BVGoiTzB.js";import{T as Te}from"./index-BemBm_5k.js";import{g as Ee,m as Le}from"./genStyleUtils-lByCByip.js";import{u as Oe}from"./useMergeSemantic-BtH1ep6T.js";import{u as ke}from"./useOrientation-CvsZ8lA6.js";import{S as Ve}from"./index-Cf5wY2b7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./SizeContext-6SbbsRse.js";import"./index-CxTbkWiH.js";import"./shadow-DTVO8V5H.js";import"./placements-BDsFN2kw.js";import"./roundedArrow-CTehBM3O.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./Compact-SEgaOlnH.js";import"./isNonNullable-Hl1s-5mn.js";import"./motion-CGP6LHXs.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./fade-BcJF4FJN.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./statusUtils-obNhd3Z8.js";import"./compact-item-DgFz4dAb.js";const ie=(e,t)=>{if(!e)return null;const i={left:e.offsetLeft,right:e.parentElement.clientWidth-e.clientWidth-e.offsetLeft,width:e.clientWidth,top:e.offsetTop,bottom:e.parentElement.clientHeight-e.clientHeight-e.offsetTop,height:e.clientHeight};return t?{left:0,right:0,width:0,top:i.top,bottom:i.bottom,height:i.height}:{left:i.left,right:i.right,width:i.width,top:0,bottom:0,height:0}},R=e=>e!==void 0?`${e}px`:void 0;function Fe(e){const{prefixCls:t,containerRef:i,value:a,getValueIndex:c,motionName:h,onMotionStart:d,onMotionEnd:m,direction:u,vertical:g=!1}=e,v=o.useRef(null),[A,C]=o.useState(a),x=M=>{var s;const f=c(M),p=(s=i.current)==null?void 0:s.querySelectorAll(`.${t}-item`)[f];return(p==null?void 0:p.offsetParent)&&p},[r,H]=o.useState(null),[n,N]=o.useState(null);De(()=>{if(A!==a){const M=x(A),f=x(a),p=ie(M,g),s=ie(f,g);C(a),H(p),N(s),M&&f?d():m()}},[a]);const w=o.useMemo(()=>R(g?(r==null?void 0:r.top)??0:u==="rtl"?-(r==null?void 0:r.right):r==null?void 0:r.left),[g,u,r]),z=o.useMemo(()=>R(g?(n==null?void 0:n.top)??0:u==="rtl"?-(n==null?void 0:n.right):n==null?void 0:n.left),[g,u,n]),S=()=>g?{transform:"translateY(var(--thumb-start-top))",height:"var(--thumb-start-height)"}:{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"},y=()=>g?{transform:"translateY(var(--thumb-active-top))",height:"var(--thumb-active-height)"}:{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"},D=()=>{H(null),N(null),m()};return!r||!n?null:o.createElement(Pe,{visible:!0,motionName:h,motionAppear:!0,onAppearStart:S,onAppearActive:y,onVisibleChanged:D},({className:M,style:f},p)=>{const s={...f,"--thumb-start-left":w,"--thumb-start-width":R(r==null?void 0:r.width),"--thumb-active-left":z,"--thumb-active-width":R(n==null?void 0:n.width),"--thumb-start-top":w,"--thumb-start-height":R(r==null?void 0:r.height),"--thumb-active-top":z,"--thumb-active-height":R(n==null?void 0:n.height)},T={ref:we(v,p),style:s,className:W(`${t}-thumb`,M)};return o.createElement("div",T)})}function Xe(e){var t;if(typeof e.title<"u")return e.title;if(typeof e.label!="object")return(t=e.label)==null?void 0:t.toString()}function qe(e){return e.map(t=>{if(typeof t=="object"&&t!==null){const i=Xe(t);return{...t,title:i}}return{label:t==null?void 0:t.toString(),title:t==null?void 0:t.toString(),value:t}})}const Ge=({prefixCls:e,className:t,style:i,styles:a,classNames:c,data:h,disabled:d,checked:m,label:u,title:g,value:v,name:A,onChange:C,onFocus:x,onBlur:r,onKeyDown:H,onKeyUp:n,onMouseDown:N,itemRender:w=z=>z})=>{const z=y=>{d||C(y,v)},S=o.createElement("label",{className:W(t,{[`${e}-item-disabled`]:d}),style:i,onMouseDown:N},o.createElement("input",{name:A,className:`${e}-item-input`,type:"radio",disabled:d,checked:m,onChange:z,onFocus:x,onBlur:r,onKeyDown:H,onKeyUp:n}),o.createElement("div",{className:W(`${e}-item-label`,c==null?void 0:c.label),title:g,style:a==null?void 0:a.label},u));return w(S,{item:h})},Ke=o.forwardRef((e,t)=>{var V;const{prefixCls:i="rc-segmented",direction:a,vertical:c,options:h=[],disabled:d,defaultValue:m,value:u,name:g,onChange:v,className:A="",style:C,styles:x,classNames:r,motionName:H="thumb-motion",itemRender:n,...N}=e,w=o.useRef(null),z=o.useMemo(()=>we(w,t),[w,t]),S=o.useMemo(()=>qe(h),[h]),[y,D]=Re(m??((V=S[0])==null?void 0:V.value),u),[M,f]=o.useState(!1),p=(b,$)=>{D($),v==null||v($)},s=Ce(N,["children"]),[T,E]=o.useState(!1),[L,O]=o.useState(!1),k=()=>{O(!0)},J=()=>{O(!1)},Z=()=>{E(!1)},Q=b=>{b.key==="Tab"&&E(!0)},j=b=>{const $=S.findIndex(Me=>Me.value===y),F=S.length,ze=($+b+F)%F,ee=S[ze];ee&&(D(ee.value),v==null||v(ee.value))},I=b=>{switch(b.key){case"ArrowLeft":case"ArrowUp":j(-1);break;case"ArrowRight":case"ArrowDown":j(1);break}},B=b=>{const{value:$,disabled:F}=b;return o.createElement(Ge,te({},b,{name:g,data:b,itemRender:n,key:$,prefixCls:i,className:W(b.className,`${i}-item`,r==null?void 0:r.item,{[`${i}-item-selected`]:$===y&&!M,[`${i}-item-focused`]:L&&T&&$===y}),style:x==null?void 0:x.item,classNames:r,styles:x,checked:$===y,onChange:p,onFocus:k,onBlur:J,onKeyDown:I,onKeyUp:Q,onMouseDown:Z,disabled:!!d||!!F}))};return o.createElement("div",te({role:"radiogroup","aria-label":"segmented control",tabIndex:d?void 0:0,"aria-orientation":c?"vertical":"horizontal",style:C},s,{className:W(i,{[`${i}-rtl`]:a==="rtl",[`${i}-disabled`]:d,[`${i}-vertical`]:c},A),ref:z}),o.createElement("div",{className:`${i}-group`},o.createElement(Fe,{vertical:c,prefixCls:i,value:y,containerRef:w,motionName:`${i}-${H}`,direction:a,getValueIndex:b=>S.findIndex($=>$.value===b),onMotionStart:()=>{f(!0)},onMotionEnd:()=>{f(!1)}}),S.map(B)))}),Ye=Ke;function oe(e,t){return{[`${e}, ${e}:hover, ${e}:focus`]:{color:t.colorTextDisabled,cursor:"not-allowed"}}}const re=e=>({background:e.itemSelectedBg,boxShadow:e.boxShadowTertiary}),_e={overflow:"hidden",...je},Ue=e=>{const{componentCls:t,motionDurationSlow:i,motionEaseInOut:a,motionDurationMid:c}=e,h=e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(),d=e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(),m=e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();return{[t]:{...Ne(e),display:"inline-block",padding:e.trackPadding,color:e.itemColor,background:e.trackBg,borderRadius:e.borderRadius,transition:`all ${c}`,...He(e),[`${t}-group`]:{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",flexDirection:"row",width:"100%"},[`&${t}-rtl`]:{direction:"rtl"},[`&${t}-vertical`]:{[`${t}-group`]:{flexDirection:"column"},[`${t}-thumb`]:{width:"100%",height:0,padding:`0 ${P(e.paddingXXS)}`}},[`&${t}-block`]:{display:"flex"},[`&${t}-block ${t}-item`]:{flex:1,minWidth:0},[`${t}-item`]:{position:"relative",textAlign:"center",cursor:"pointer",transition:`color ${c}`,borderRadius:e.borderRadiusSM,transform:"translateZ(0)","&-selected":{...re(e),color:e.itemSelectedColor},"&-focused":Ae(e),"&::after":{content:'""',position:"absolute",zIndex:-1,width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",opacity:0,pointerEvents:"none",transition:["opacity","background-color"].map(u=>`${u} ${c}`).join(", ")},[`&:not(${t}-item-selected):not(${t}-item-disabled)`]:{"&:hover, &:active":{color:e.itemHoverColor},"&:hover::after":{opacity:1,backgroundColor:e.itemHoverBg},"&:active::after":{opacity:1,backgroundColor:e.itemActiveBg}},"&-label":{minHeight:h,lineHeight:P(h),padding:`0 ${P(e.segmentedPaddingHorizontal)}`,..._e},"&-icon + *":{marginInlineStart:e.calc(e.marginSM).div(2).equal()},"&-input":{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}},[`${t}-thumb`]:{...re(e),position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:`${P(e.paddingXXS)} 0`,borderRadius:e.borderRadiusSM,[`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]:{backgroundColor:"transparent"}},[`&${t}-lg`]:{borderRadius:e.borderRadiusLG,[`${t}-item-label`]:{minHeight:d,lineHeight:P(d),padding:`0 ${P(e.segmentedPaddingHorizontal)}`,fontSize:e.fontSizeLG},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadius}},[`&${t}-sm`]:{borderRadius:e.borderRadiusSM,[`${t}-item-label`]:{minHeight:m,lineHeight:P(m),padding:`0 ${P(e.segmentedPaddingHorizontalSM)}`},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadiusXS}},...oe(`&-disabled ${t}-item`,e),...oe(`${t}-item-disabled`,e),[`${t}-thumb-motion-appear-active`]:{willChange:"transform, width",transition:["transform","width"].map(u=>`${u} ${i} ${a}`).join(", ")},[`&${t}-shape-round`]:{borderRadius:9999,[`${t}-item, ${t}-thumb`]:{borderRadius:9999}}}}},Je=e=>{const{colorTextLabel:t,colorText:i,colorFillSecondary:a,colorBgElevated:c,colorFill:h,lineWidthBold:d,colorBgLayout:m}=e;return{trackPadding:d,trackBg:m,itemColor:t,itemHoverColor:i,itemHoverBg:a,itemSelectedBg:c,itemActiveBg:h,itemSelectedColor:i}},Ze=Ee("Segmented",e=>{const{lineWidth:t,calc:i}=e,a=Le(e,{segmentedPaddingHorizontal:i(e.controlPaddingHorizontal).sub(t).equal(),segmentedPaddingHorizontalSM:i(e.controlPaddingHorizontalSM).sub(t).equal()});return Ue(a)},Je);function Qe(e){return typeof e=="object"&&!!(e!=null&&e.icon)}const et=o.forwardRef((e,t)=>{const i=We(),{prefixCls:a,className:c,rootClassName:h,block:d,options:m=[],size:u,style:g,vertical:v,orientation:A,shape:C="default",name:x=i,styles:r,classNames:H,...n}=e,{getPrefixCls:N,direction:w,className:z,style:S,classNames:y,styles:D}=Ie("segmented"),M={...e,options:m,size:u,shape:C},[f,p]=Oe([y,H],[D,r],{props:M}),s=N("segmented",a),[T,E]=Ze(s),L=Be(u),O=o.useMemo(()=>m.map(j=>{if(Qe(j)){const{icon:I,label:B,...V}=j;return{...V,label:o.createElement(o.Fragment,null,o.createElement("span",{className:W(`${s}-item-icon`,f.icon),style:p.icon},I),B&&o.createElement("span",null,B))}}return j}),[m,s,f.icon,p.icon]),[,k]=ke(A,v),J=W(c,h,z,f.root,{[`${s}-block`]:d,[`${s}-sm`]:L==="small",[`${s}-lg`]:L==="large",[`${s}-vertical`]:k,[`${s}-shape-${C}`]:C==="round"},T,E),Z={...p.root,...S,...g},Q=(j,{item:I})=>{if(!I.tooltip)return j;const B=typeof I.tooltip=="object"?I.tooltip:{title:I.tooltip};return o.createElement(Te,{...B},j)};return o.createElement(Ye,{...n,name:x,className:J,style:Z,classNames:f,styles:p,itemRender:Q,options:O,ref:t,prefixCls:s,direction:w,vertical:k})}),U=et,Lt={title:"Data Display/Segmented",component:U,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"]},disabled:{control:"boolean"},block:{control:"boolean"}},parameters:{docs:{description:{component:"Segmented — segmented control for switching between views or options."}}}},X={args:{options:["Daily","Weekly","Monthly","Yearly"]}},q={args:{options:["Map","Transit","Satellite"],block:!0},decorators:[e=>l.jsx("div",{style:{width:400},children:l.jsx(e,{})})]},G={name:"With icon",args:{options:[{label:"List",value:"list"},{label:"Grid",value:"grid"},{label:"Board",value:"board"}]}},K={args:{options:["Option A","Option B","Option C"],disabled:!0}},Y={name:"Size variants",render:()=>l.jsxs(Ve,{direction:"vertical",size:"middle",children:[l.jsx(U,{options:["Small 1","Small 2","Small 3"],size:"small"}),l.jsx(U,{options:["Middle 1","Middle 2","Middle 3"],size:"middle"}),l.jsx(U,{options:["Large 1","Large 2","Large 3"],size:"large"})]})},_={name:"Custom render",args:{options:[{label:l.jsxs("div",{style:{padding:"var(--flock-padding-xxs) var(--flock-padding-xs)",textAlign:"center"},children:[l.jsx("div",{style:{fontWeight:600},children:"Spring"}),l.jsx("div",{style:{fontSize:"var(--flock-font-size-sm)",opacity:.65},children:"Mar–May"})]}),value:"spring"},{label:l.jsxs("div",{style:{padding:"var(--flock-padding-xxs) var(--flock-padding-xs)",textAlign:"center"},children:[l.jsx("div",{style:{fontWeight:600},children:"Summer"}),l.jsx("div",{style:{fontSize:"var(--flock-font-size-sm)",opacity:.65},children:"Jun–Aug"})]}),value:"summer"},{label:l.jsxs("div",{style:{padding:"var(--flock-padding-xxs) var(--flock-padding-xs)",textAlign:"center"},children:[l.jsx("div",{style:{fontWeight:600},children:"Autumn"}),l.jsx("div",{style:{fontSize:"var(--flock-font-size-sm)",opacity:.65},children:"Sep–Nov"})]}),value:"autumn"},{label:l.jsxs("div",{style:{padding:"var(--flock-padding-xxs) var(--flock-padding-xs)",textAlign:"center"},children:[l.jsx("div",{style:{fontWeight:600},children:"Winter"}),l.jsx("div",{style:{fontSize:"var(--flock-font-size-sm)",opacity:.65},children:"Dec–Feb"})]}),value:"winter"}]}};var ne,ae,se;X.parameters={...X.parameters,docs:{...(ne=X.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    options: ['Daily', 'Weekly', 'Monthly', 'Yearly']
  }
}`,...(se=(ae=X.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,ce,de;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    options: ['Map', 'Transit', 'Satellite'],
    block: true
  },
  decorators: [Story => <div style={{
    width: 400
  }}><Story /></div>]
}`,...(de=(ce=q.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    options: [{
      label: 'List',
      value: 'list'
    }, {
      label: 'Grid',
      value: 'grid'
    }, {
      label: 'Board',
      value: 'board'
    }]
  }
}`,...(pe=(ue=G.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,fe,he;K.parameters={...K.parameters,docs:{...(ge=K.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    disabled: true
  }
}`,...(he=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,ve,Se;Y.parameters={...Y.parameters,docs:{...(be=Y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Size variants',
  render: () => <Space direction="vertical" size="middle">
      <Segmented options={['Small 1', 'Small 2', 'Small 3']} size="small" />
      <Segmented options={['Middle 1', 'Middle 2', 'Middle 3']} size="middle" />
      <Segmented options={['Large 1', 'Large 2', 'Large 3']} size="large" />
    </Space>
}`,...(Se=(ve=Y.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var xe,ye,$e;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Custom render',
  args: {
    options: [{
      label: <div style={{
        padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)',
        textAlign: 'center'
      }}>
            <div style={{
          fontWeight: 600
        }}>Spring</div>
            <div style={{
          fontSize: 'var(--flock-font-size-sm)',
          opacity: 0.65
        }}>Mar–May</div>
          </div>,
      value: 'spring'
    }, {
      label: <div style={{
        padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)',
        textAlign: 'center'
      }}>
            <div style={{
          fontWeight: 600
        }}>Summer</div>
            <div style={{
          fontSize: 'var(--flock-font-size-sm)',
          opacity: 0.65
        }}>Jun–Aug</div>
          </div>,
      value: 'summer'
    }, {
      label: <div style={{
        padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)',
        textAlign: 'center'
      }}>
            <div style={{
          fontWeight: 600
        }}>Autumn</div>
            <div style={{
          fontSize: 'var(--flock-font-size-sm)',
          opacity: 0.65
        }}>Sep–Nov</div>
          </div>,
      value: 'autumn'
    }, {
      label: <div style={{
        padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)',
        textAlign: 'center'
      }}>
            <div style={{
          fontWeight: 600
        }}>Winter</div>
            <div style={{
          fontSize: 'var(--flock-font-size-sm)',
          opacity: 0.65
        }}>Dec–Feb</div>
          </div>,
      value: 'winter'
    }]
  }
}`,...($e=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:$e.source}}};const Ot=["Default","Block","WithIcon","Disabled","SizeVariants","CustomRender"];export{q as Block,_ as CustomRender,X as Default,K as Disabled,Y as SizeVariants,G as WithIcon,Ot as __namedExportsOrder,Lt as default};
