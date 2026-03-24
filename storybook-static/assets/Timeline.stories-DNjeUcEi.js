import{a as x,g as ge,m as ue,_ as he}from"./genStyleUtils-lByCByip.js";import{r as g}from"./index-oxIuDU2I.js";import{b as fe,r as $e,c as L,u as ye}from"./index-TJOQIVf4.js";import{I as Ce,U as Se,S as xe}from"./index-BmfNWCw1.js";import{i as ve}from"./isNonNullable-Hl1s-5mn.js";import{R as X}from"./LoadingOutlined-Cogr-EmL.js";import{t as be}from"./toArray-QdoN5Rqg.js";import{u as ze}from"./useMergeSemantic-BtH1ep6T.js";import"./_commonjsHelpers-CqkleIqs.js";import"./CheckOutlined-Bjlu0gCC.js";import"./AntdIcon-CmaM0TST.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./shadow-DTVO8V5H.js";import"./CloseOutlined-BsjciePg.js";import"./KeyCode-iX0y3px_.js";import"./pickAttrs-BoNuQqbq.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./useSize-BVGoiTzB.js";import"./useBreakpoint-CencR8BP.js";import"./useForceUpdate-S_WFItDD.js";import"./index-BemBm_5k.js";import"./index-CxTbkWiH.js";import"./useControlledState-tu5D_1Ht.js";import"./placements-BDsFN2kw.js";import"./roundedArrow-CTehBM3O.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useOrientation-CvsZ8lA6.js";import"./motion-CGP6LHXs.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./fade-BcJF4FJN.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";const Ne=o=>{const{componentCls:r,fontHeight:a,antCls:d,paddingXS:u}=o,[p,t]=x(d,"cmp-steps"),[l,i]=x(d,"timeline"),e=`${r}-item`;return{[`${r}-horizontal`]:{[p("title-vertical-row-gap")]:u,[l("content-height")]:fe(a),alignItems:"stretch",[`&${r}-layout-alternate`]:{[e]:{[`${e}-wrapper`]:{[l("alternate-content-offset")]:`calc(${i("content-height")} + ${t("title-vertical-row-gap")} * 2 + ${t("icon-size-max")})`,height:`calc(${i("content-height")} * 2 + ${t("title-vertical-row-gap")} * 2 + ${t("icon-size-max")})`},[`${e}-icon`]:{position:"absolute"},[`${e}-icon, ${e}-rail`]:{position:"absolute",top:"50%",transform:"translateY(-50%)",margin:0},[`${e}-title, ${e}-subtitle, ${e}-content`]:{whiteSpace:"nowrap",maxWidth:"unset"},[`${e}-title`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},[`${e}-content`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-placement-start":{[`${e}-title`]:{bottom:i("alternate-content-offset")},[`${e}-content`]:{top:i("alternate-content-offset")}},"&-placement-end":{[`${e}-title`]:{top:i("alternate-content-offset")},[`${e}-content`]:{bottom:i("alternate-content-offset")}}}},[`&:not(${r}-layout-alternate)`]:{[`${e}-placement-end`]:{display:"flex",alignItems:"flex-end",[`${e}-wrapper`]:{flex:"auto",flexDirection:"column-reverse"},[`${e}-rail`]:{top:"auto",bottom:t("horizontal-rail-margin"),transform:"translateY(50%)"}}}}}},Pe=o=>{const{componentCls:r,tailColor:a,fontHeight:d,dotSize:u,dotBg:p,dotBorderWidth:t,fontSize:l,lineHeight:i,colorText:e,tailWidth:y,colorPrimary:z,colorError:v,colorSuccess:f,colorTextDisabled:h,antCls:$}=o,m=`${r}-item`,[n,c]=x($,"cmp-steps");return{[r]:[{...$e(o),[m]:{[n("title-horizontal-title-height")]:d,[n("vertical-rail-margin")]:"0px",[n("title-horizontal-rail-gap")]:"0px",[n("icon-dot-size-origin")]:c("icon-size-active"),[n("icon-dot-size-custom")]:u,[n("item-icon-dot-bg-color-origin")]:c("item-icon-dot-bg-color"),[n("item-icon-dot-bg-color-custom")]:p,[n("icon-size")]:c("icon-dot-size-custom",c("icon-dot-size-origin")),[`${m}-icon`]:{[n("dot-icon-border-width")]:t,[n("dot-icon-size")]:c("icon-size"),[n("item-icon-dot-bg-color")]:c("item-icon-dot-bg-color-custom",c("item-icon-dot-bg-color-origin"))},[`${m}-title`]:{fontSize:l,lineHeight:i},[`${m}-content`]:{color:e},[`${m}-rail`]:{[n("item-solid-line-color")]:a,[n("rail-size")]:y}}},{[m]:{[n("item-process-rail-line-style")]:"dotted"},[`${m}${m}${m}-color`]:{"&-blue":{[n("item-icon-dot-color")]:z},"&-red":{[n("item-icon-dot-color")]:v},"&-green":{[n("item-icon-dot-color")]:f},"&-gray":{[n("item-icon-dot-color")]:h}}}]}},Ie=o=>{const{calc:r,componentCls:a,itemPaddingBottom:d,margin:u,antCls:p}=o,t=`${a}-item`,[,l]=x(p,"cmp-steps"),[i,e]=x(p,"timeline");return{[`${a}:not(${a}-horizontal)`]:{[i("head-span")]:"12",[i("head-span-ptg")]:`calc(${e("head-span")} / 24 * 100%)`,[`&${a}-layout-alternate`]:{[t]:{[i("alternate-gap")]:r(u).mul(2).add(l("dot-icon-size")).equal(),minHeight:"auto",paddingBottom:d,[`${t}-icon, ${t}-rail`]:{position:"absolute",insetInlineStart:e("head-span-ptg")},[`${t}-icon`]:{marginInlineStart:`calc(${l("icon-size")} / -2)`},[`${t}-section`]:{display:"flex",flexWrap:"nowrap",gap:e("alternate-gap")},[`${t}-header`]:{textAlign:"end",flexDirection:"column",alignItems:"stretch",flex:`1 1 calc(${e("head-span-ptg")} - ${e("alternate-gap")} / 2)`},[`${t}-content`]:{textAlign:"start",flex:`1 1 calc(100% - ${e("head-span-ptg")} - ${e("alternate-gap")} / 2)`},"&-placement-end":{[`${t}-header`]:{textAlign:"start",order:1},[`${t}-content`]:{textAlign:"end"},[`${t}-icon, ${t}-rail`]:{insetInlineStart:`calc(100% - ${e("head-span-ptg")})`}}}},[`&:not(${a}-layout-alternate)`]:{[`${t}-placement-end`]:{textAlign:"end",[`${t}-icon`]:{order:1},[`${t}-rail`]:{insetInlineStart:"auto",insetInlineEnd:`calc(${l("icon-size")} / 2)`,marginInlineEnd:`calc(${l("rail-size")} / -2)`}}}}}},Re=o=>({tailColor:o.colorSplit,tailWidth:o.lineWidthBold,dotBorderWidth:o.lineWidthBold,dotBg:void 0,dotSize:void 0,itemPaddingBottom:o.padding*1.25}),we=ge("Timeline",o=>{const r=ue(o,{itemHeadSize:10,customHeadPaddingVertical:o.paddingXXS,paddingInlineEnd:2});return[Pe(r),Ie(r),Ne(r)]},Re),Ae=(o,r,a,d,u,p,t)=>{const l=`${r}-item`,[i]=x(o,"cmp-steps"),e=g.useMemo(()=>Array.isArray(d)?d:be(u).map(y=>({...y.props})),[d,u]);return g.useMemo(()=>{const y=e.map((z,v)=>{const{label:f,children:h,title:$,content:m,color:n,className:c,style:I,icon:E,dot:M,placement:R,position:s,loading:w,..._}=z;let N=I,b=c;n&&(["blue","red","green","gray"].includes(n)?b=L(c,`${l}-color-${n}`):N={[i("item-icon-dot-color")]:n,...I});const C=R??s??(a==="alternate"?v%2===0?"start":"end":a);b=L(b,`${l}-placement-${C}`);let S=E??M;return!S&&w&&(S=g.createElement(X,null)),{..._,title:$??f,content:m??h,style:N,className:b,icon:S,status:w?"process":"finish"}});return p&&y.push({icon:t??g.createElement(X,null),content:p,status:"process"}),y},[e,p,a,l,i,t])},De={rootComponent:"ol",itemComponent:"li"},ae=o=>{const{getPrefixCls:r,direction:a,className:d,style:u,classNames:p,styles:t}=ye("timeline"),{prefixCls:l,className:i,style:e,classNames:y,styles:z,variant:v="outlined",mode:f,orientation:h="vertical",titleSpan:$,items:m,children:n,reverse:c,pending:I,pendingDot:E,...M}=o,R=r(),s=r("timeline",l),[w,_]=we(s),[N]=x(R,"timeline"),b=g.useMemo(()=>({item:`${s}-item`,itemTitle:`${s}-item-title`,itemIcon:`${s}-item-icon`,itemContent:`${s}-item-content`,itemRail:`${s}-item-rail`,itemWrapper:`${s}-item-wrapper`,itemSection:`${s}-item-section`,itemHeader:`${s}-item-header`}),[s]),C=g.useMemo(()=>f==="left"?"start":f==="right"?"end":["alternate","start","end"].includes(f)?f:"start",[f]),S=Ae(R,s,C,m,n,I,E),P=g.useMemo(()=>c?he(S).reverse():S,[c,S]),le={...o,variant:v,mode:C,orientation:h,items:P},[ce,me]=ze([b,p,y],[t,z],{props:le}),de=g.useMemo(()=>({railFollowPrevStatus:c}),[c]),pe=g.useMemo(()=>C==="alternate"||h==="vertical"&&P.some(O=>O.title),[P,C,h]),H={...u,...e};return ve($)&&C!=="alternate"&&(typeof $=="number"&&!Number.isNaN($)?H[N("head-span")]=$:H[N("head-span-ptg")]=$),g.createElement(Ce.Provider,{value:De},g.createElement(Se.Provider,{value:de},g.createElement(xe,{...M,className:L(s,d,i,w,_,{[`${s}-${h}`]:h==="horizontal",[`${s}-layout-alternate`]:pe,[`${s}-rtl`]:a==="rtl"}),style:H,classNames:ce,styles:me,variant:v,orientation:h,type:"dot",items:P,current:P.length-1})))};ae.Item=()=>{};const vt={title:"Data Display/Timeline",component:ae,tags:["autodocs"],parameters:{docs:{description:{component:"Timeline — vertical timeline for displaying a series of events."}}}},A={args:{items:[{children:"Order placed — 2024-01-15 09:00"},{children:"Payment confirmed — 2024-01-15 09:05"},{children:"Order shipped — 2024-01-16 14:30"},{children:"Delivered — 2024-01-18 10:00"}]}},D={name:"With colors",args:{items:[{color:"green",children:"Deployment successful"},{color:"green",children:"Tests passed"},{color:"blue",children:"Code review in progress"},{color:"red",children:"Build failed"},{color:"gray",children:"Commit pushed"}]}},T={args:{pending:"Processing…",items:[{children:"Step 1 — Validate input"},{children:"Step 2 — Process data"},{children:"Step 3 — Generate report"}]}},B={args:{mode:"alternate",items:[{children:"Founded the company — 2020"},{children:"Reached 1000 users — 2021"},{children:"Series A funding — 2022"},{children:"Launched v2.0 — 2023"},{children:"Global expansion — 2024"}]}},V={name:"Right mode",args:{mode:"right",items:[{children:"Task completed"},{children:"Review approved"},{children:"Deployed to staging"},{children:"Released to production"}]}},W={name:"Custom dot",args:{items:[{dot:"🚀",children:"Product launch"},{dot:"✅",children:"QA sign-off"},{dot:"🔧",children:"Bug fixes applied"},{dot:"📝",children:"Spec finalized"}]}};var k,G,F;A.parameters={...A.parameters,docs:{...(k=A.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [{
      children: 'Order placed — 2024-01-15 09:00'
    }, {
      children: 'Payment confirmed — 2024-01-15 09:05'
    }, {
      children: 'Order shipped — 2024-01-16 14:30'
    }, {
      children: 'Delivered — 2024-01-18 10:00'
    }]
  }
}`,...(F=(G=A.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var Q,U,Y;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With colors',
  args: {
    items: [{
      color: 'green',
      children: 'Deployment successful'
    }, {
      color: 'green',
      children: 'Tests passed'
    }, {
      color: 'blue',
      children: 'Code review in progress'
    }, {
      color: 'red',
      children: 'Build failed'
    }, {
      color: 'gray',
      children: 'Commit pushed'
    }]
  }
}`,...(Y=(U=D.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var q,j,J;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    pending: 'Processing…',
    items: [{
      children: 'Step 1 — Validate input'
    }, {
      children: 'Step 2 — Process data'
    }, {
      children: 'Step 3 — Generate report'
    }]
  }
}`,...(J=(j=T.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var K,Z,ee;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    mode: 'alternate',
    items: [{
      children: 'Founded the company — 2020'
    }, {
      children: 'Reached 1000 users — 2021'
    }, {
      children: 'Series A funding — 2022'
    }, {
      children: 'Launched v2.0 — 2023'
    }, {
      children: 'Global expansion — 2024'
    }]
  }
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Right mode',
  args: {
    mode: 'right',
    items: [{
      children: 'Task completed'
    }, {
      children: 'Review approved'
    }, {
      children: 'Deployed to staging'
    }, {
      children: 'Released to production'
    }]
  }
}`,...(oe=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ie,se;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Custom dot',
  args: {
    items: [{
      dot: '🚀',
      children: 'Product launch'
    }, {
      dot: '✅',
      children: 'QA sign-off'
    }, {
      dot: '🔧',
      children: 'Bug fixes applied'
    }, {
      dot: '📝',
      children: 'Spec finalized'
    }]
  }
}`,...(se=(ie=W.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const bt=["Default","WithColors","Pending","Alternate","RightMode","CustomDot"];export{B as Alternate,W as CustomDot,A as Default,T as Pending,V as RightMode,D as WithColors,bt as __namedExportsOrder,vt as default};
