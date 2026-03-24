import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as d,r as c}from"./index-oxIuDU2I.js";import{F as je}from"./flockIcons-DaHM7iCS.js";import{R as fe}from"./ExclamationCircleFilled-NCuJaJfQ.js";import{u as Re}from"./useControlledState-tu5D_1Ht.js";import{C as Y,c as M,u as Ie}from"./index-TJOQIVf4.js";import{o as Ne}from"./omit-3QAACPn7.js";import{P as De}from"./index-bK_eGALt.js";import{u as $e}from"./index-BemBm_5k.js";import{A as Ae}from"./ActionButton-APU5sMhG.js";import{g as U,P as Fe}from"./PurePanel-CSDCGrm3.js";import{B as f,c as Oe}from"./Button-DN9j4dNv.js";import{C as Me,o as ze,l as We}from"./index-BUbyd2uB.js";import{_ as _e,g as He}from"./genStyleUtils-lByCByip.js";import{u as Ge}from"./useLocale-BzNmgGjV.js";import{u as Le}from"./useMergeSemantic-BtH1ep6T.js";import{S as Qe}from"./Switch-Dc9xO8Ea.js";import{Fh as Ye}from"./WeatherClimateWindIcon-B7IaNujn.js";import{S as Q}from"./index-Cf5wY2b7.js";import{r as qe}from"./index-DLyCQgDV.js";import{P as Ue,u as Ve,w as ge,A as Xe,a as Je}from"./context-BUY-qHdb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./reactNode-CHTsHNSU.js";import"./motion-CGP6LHXs.js";import"./index-CxTbkWiH.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./placements-BDsFN2kw.js";import"./roundedArrow-CTehBM3O.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./toArray-QdoN5Rqg.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./SizeContext-6SbbsRse.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./fade-BcJF4FJN.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";import"./KeyCode-iX0y3px_.js";import"./statusUtils-obNhd3Z8.js";import"./client-CsZ7Yvsz.js";import"./CSSMotionList-_1VB0qQS.js";import"./pickAttrs-BoNuQqbq.js";import"./CheckCircleFilled-BtE0EsBD.js";import"./CloseCircleFilled-CV3osNzx.js";import"./InfoCircleFilled-BE-7kaHA.js";let p=null,B=e=>e(),b=[],k={};function V(){const{getContainer:e,duration:t,rtl:r,maxCount:n,top:o}=k,s=(e==null?void 0:e())||document.body;return{getContainer:()=>s,duration:t,rtl:r,maxCount:n,top:o}}const Ke=d.forwardRef((e,t)=>{const{messageConfig:r,sync:n}=e,{getPrefixCls:o}=c.useContext(Y),s=k.prefixCls||o("message"),m=c.useContext(Xe),[l,u]=Je({...r,prefixCls:s,...m.message});return d.useImperativeHandle(t,()=>{const i={...l};return Object.keys(i).forEach(g=>{i[g]=(...C)=>(n(),l[g].apply(l,C))}),{instance:i,sync:n}}),u}),Ze=d.forwardRef((e,t)=>{const[r,n]=d.useState(V),o=()=>{n(V)};d.useEffect(o,[]);const s=ze(),m=s.getRootPrefixCls(),l=s.getIconPrefixCls(),u=s.getTheme(),i=d.createElement(Ke,{ref:t,sync:o,messageConfig:r});return d.createElement(Me,{prefixCls:m,iconPrefixCls:l,theme:u},s.holderRender?s.holderRender(i):i)}),z=()=>{if(!p){const e=document.createDocumentFragment(),t={fragment:e};p=t,B(()=>{qe(d.createElement(Ze,{ref:r=>{const{instance:n,sync:o}=r||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=o,z())})}}),e)});return}p.instance&&(b.forEach(e=>{const{type:t,skipped:r}=e;if(!r)switch(t){case"open":{B(()=>{const n=p.instance.open({...k,...e.config});n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":B(()=>{p==null||p.instance.destroy(e.key)});break;default:B(()=>{var n;const o=(n=p.instance)[t].apply(n,_e(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),b=[])};function et(e){k={...k,...e},B(()=>{var t;(t=p==null?void 0:p.sync)==null||t.call(p)})}function tt(e){const t=ge(r=>{let n;const o={type:"open",config:e,resolve:r,setCloseFn:s=>{n=s}};return b.push(o),()=>{n?B(()=>{n()}):o.skipped=!0}});return z(),t}function nt(e,t){const r=ge(n=>{let o;const s={type:e,args:t,resolve:n,setCloseFn:m=>{o=m}};return b.push(s),()=>{o?B(()=>{o()}):s.skipped=!0}});return z(),r}const ot=e=>{b.push({type:"destroy",key:e}),z()},rt=["success","info","warning","error","loading"],st={open:tt,destroy:ot,config:et,useMessage:Ve,_InternalPanelDoNotUseOrYouWillBeFired:Ue},E=st;rt.forEach(e=>{E[e]=(...t)=>nt(e,t)});const at=e=>{const{componentCls:t,iconCls:r,antCls:n,zIndexPopup:o,colorText:s,colorWarning:m,marginXXS:l,marginXS:u,fontSize:i,fontWeightStrong:g,colorTextHeading:C}=e;return{[t]:{zIndex:o,[`&${n}-popover`]:{fontSize:i},[`${t}-message`]:{marginBottom:u,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${r}`]:{color:m,fontSize:i,lineHeight:1,marginInlineEnd:u},[`${t}-title`]:{fontWeight:g,color:C,"&:only-child":{fontWeight:"normal"}},[`${t}-description`]:{marginTop:l,color:s}},[`${t}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:u}}}}},ct=e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}},Ce=He("Popconfirm",at,ct,{resetStyle:!1}),he=e=>{const{prefixCls:t,okButtonProps:r,cancelButtonProps:n,title:o,description:s,cancelText:m,okText:l,okType:u="primary",icon:i=c.createElement(fe,null),showCancel:g=!0,close:C,onConfirm:W,onCancel:w,onPopupClick:_,classNames:h,styles:x}=e,{getPrefixCls:H}=c.useContext(Y),[P]=Ge("Popconfirm",We.Popconfirm),T=U(o),j=U(s);return c.createElement("div",{className:`${t}-inner-content`,onClick:_},c.createElement("div",{className:`${t}-message`},i&&c.createElement("span",{className:`${t}-message-icon`},i),c.createElement("div",{className:`${t}-message-text`},T&&c.createElement("div",{className:M(`${t}-title`,h==null?void 0:h.title),style:x==null?void 0:x.title},T),j&&c.createElement("div",{className:M(`${t}-description`,h==null?void 0:h.content),style:x==null?void 0:x.content},j))),c.createElement("div",{className:`${t}-buttons`},g&&c.createElement(f,{onClick:w,size:"small",...n},m||(P==null?void 0:P.cancelText)),c.createElement(Ae,{buttonProps:{size:"small",...Oe(u),...r},actionFn:W,close:C,prefixCls:H("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},l||(P==null?void 0:P.okText))))},it=e=>{const{prefixCls:t,placement:r,className:n,style:o,...s}=e,{getPrefixCls:m}=c.useContext(Y),l=m("popconfirm",t);return Ce(l),c.createElement(Fe,{placement:r,className:M(l,n),style:o,content:c.createElement(he,{prefixCls:l,...s})})},lt=c.forwardRef((e,t)=>{const{prefixCls:r,placement:n="top",trigger:o,okType:s="primary",icon:m=c.createElement(fe,null),children:l,overlayClassName:u,onOpenChange:i,overlayStyle:g,styles:C,arrow:W,classNames:w,..._}=e,{getPrefixCls:h,className:x,style:H,classNames:P,styles:T,arrow:j,trigger:Pe}=Ie("popconfirm"),[ye,Se]=Re(e.defaultOpen??!1,e.open),ve=$e(W,j),q=o||Pe||"click",G=y=>{Se(y),i==null||i(y)},Be=()=>{G(!1)},be=y=>{var v;return(v=e.onConfirm)==null?void 0:v.call(void 0,y)},ke=y=>{var v;G(!1),(v=e.onCancel)==null||v.call(void 0,y)},Ee=y=>{const{disabled:v=!1}=e;v||G(y)},L=h("popconfirm",r),we={...e,placement:n,trigger:q,okType:s,overlayStyle:g,styles:C,classNames:w},[R,I]=Le([P,w],[T,C],{props:we}),Te=M(L,x,u,R.root);return Ce(L),c.createElement(De,{arrow:ve,...Ne(_,["title"]),trigger:q,placement:n,onOpenChange:Ee,open:ye,ref:t,classNames:{root:Te,container:R.container,arrow:R.arrow},styles:{root:{...H,...I.root,...g},container:I.container,arrow:I.arrow},content:c.createElement(he,{okType:s,icon:m,...e,prefixCls:L,close:Be,onConfirm:be,onCancel:ke,classNames:R,styles:I}),"data-popover-inject":!0},l)}),xe=lt;xe._InternalPanelDoNotUseOrYouWillBeFired=it;const S=({icon:e,...t})=>a.jsx(xe,{icon:e??a.jsx(je.Warning,{}),...t});S.__docgenInfo={description:`Popconfirm — popover confirmation dialog.
Built on Ant Design Popconfirm with Flock DS tokens via FlockProvider.
Uses Flock warning icon by default.`,methods:[],displayName:"Popconfirm"};const Cn={title:"Feedback/Popconfirm",component:S,tags:["autodocs"]},N={args:{title:"Delete this merchant?",description:"This action cannot be undone.",onConfirm:()=>E.success("Merchant deleted"),onCancel:()=>E.info("Cancelled"),children:a.jsx(f,{danger:!0,children:"Delete Merchant"})}},D={render:()=>a.jsxs(Q,{size:"large",children:[a.jsx(S,{title:"Confirm action?",placement:"top",children:a.jsx(f,{children:"Top"})}),a.jsx(S,{title:"Confirm action?",placement:"bottom",children:a.jsx(f,{children:"Bottom"})}),a.jsx(S,{title:"Confirm action?",placement:"left",children:a.jsx(f,{children:"Left"})}),a.jsx(S,{title:"Confirm action?",placement:"right",children:a.jsx(f,{children:"Right"})})]})},$={args:{title:"Deactivate this merchant account?",okText:"Yes, deactivate",cancelText:"No, keep active",okType:"danger",children:a.jsx(f,{children:"Deactivate Account"})}},A={args:{title:"Are you sure you want to refund this transaction?",icon:a.jsx(Ye,{style:{color:"red",fontSize:"1em"}}),children:a.jsx(f,{children:"Refund"})}},F={render:()=>{const[e,t]=d.useState(!1),[r,n]=d.useState(!1),o=()=>{n(!0),setTimeout(()=>{t(!1),n(!1),E.success("Transaction reversed successfully")},2e3)};return a.jsx(S,{title:"Reverse this transaction?",description:"Processing may take a few seconds.",open:e,onConfirm:o,okButtonProps:{loading:r},onCancel:()=>t(!1),children:a.jsx(f,{onClick:()=>t(!0),children:"Reverse Transaction"})})}},O={render:()=>{const[e,t]=d.useState(!0);return a.jsxs(Q,{direction:"vertical",children:[a.jsxs(Q,{children:[a.jsx("span",{children:"Require confirmation:"}),a.jsx(Qe,{checked:e,onChange:t})]}),a.jsx(S,{title:"Delete this record?",disabled:!e,onConfirm:()=>E.success("Deleted"),children:a.jsx(f,{danger:!0,children:"Delete"})})]})}};var X,J,K;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'Delete this merchant?',
    description: 'This action cannot be undone.',
    onConfirm: () => message.success('Merchant deleted'),
    onCancel: () => message.info('Cancelled'),
    children: <Button danger>Delete Merchant</Button>
  }
}`,...(K=(J=N.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,ee,te;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Space size="large">
      <Popconfirm title="Confirm action?" placement="top">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="bottom">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="left">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="right">
        <Button>Right</Button>
      </Popconfirm>
    </Space>
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,re;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    title: 'Deactivate this merchant account?',
    okText: 'Yes, deactivate',
    cancelText: 'No, keep active',
    okType: 'danger',
    children: <Button>Deactivate Account</Button>
  }
}`,...(re=(oe=$.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ae,ce;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure you want to refund this transaction?',
    icon: <InterfaceEssentialQuestionCircleIcon style={{
      color: 'red',
      fontSize: '1em'
    }} />,
    children: <Button>Refund</Button>
  }
}`,...(ce=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,le,me;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setOpen(false);
        setLoading(false);
        message.success('Transaction reversed successfully');
      }, 2000);
    };
    return <Popconfirm title="Reverse this transaction?" description="Processing may take a few seconds." open={open} onConfirm={handleConfirm} okButtonProps={{
      loading
    }} onCancel={() => setOpen(false)}>
        <Button onClick={() => setOpen(true)}>Reverse Transaction</Button>
      </Popconfirm>;
  }
}`,...(me=(le=F.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,ue,de;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = React.useState(true);
    return <Space direction="vertical">
        <Space>
          <span>Require confirmation:</span>
          <Switch checked={enabled} onChange={setEnabled} />
        </Space>
        <Popconfirm title="Delete this record?" disabled={!enabled} onConfirm={() => message.success('Deleted')}>
          <Button danger>Delete</Button>
        </Popconfirm>
      </Space>;
  }
}`,...(de=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const hn=["Default","Placement","CustomButtonsText","WithIcon","AsyncConfirm","Conditional"];export{F as AsyncConfirm,O as Conditional,$ as CustomButtonsText,N as Default,D as Placement,A as WithIcon,hn as __namedExportsOrder,Cn as default};
