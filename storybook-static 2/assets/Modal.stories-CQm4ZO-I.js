import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as p,R as l}from"./index-oxIuDU2I.js";import{F as ce}from"./flockIcons-DaHM7iCS.js";import{u as pe,C as de,F as me,P as ue,r as fe,M as he,a as Ce,c as i,w as xe,b as ye,d as ke,e as Oe,f as B,m as ge,g as Me}from"./index-JHGMqgr2.js";import{C as je,u as Se,c as Fe}from"./index-TJOQIVf4.js";import"./index-Dn0hWNo5.js";import"./index-BUbyd2uB.js";import{w as Pe}from"./PurePanel-Bl8FDyk0.js";import{u as we}from"./useCSSVarCls-DSIlCV5N.js";import{u as Be}from"./useMergeSemantic-BtH1ep6T.js";import{B as s}from"./Button-DN9j4dNv.js";import{S as be}from"./index-Cf5wY2b7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./WeatherClimateWindIcon-B7IaNujn.js";import"./genStyleUtils-lByCByip.js";import"./index-DLyCQgDV.js";import"./reactNode-CHTsHNSU.js";import"./client-CsZ7Yvsz.js";import"./index-ChhEEol8.js";import"./CheckCircleFilled-BtE0EsBD.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./CloseCircleFilled-CV3osNzx.js";import"./ExclamationCircleFilled-NCuJaJfQ.js";import"./InfoCircleFilled-BE-7kaHA.js";import"./isNonNullable-Hl1s-5mn.js";import"./motion-CGP6LHXs.js";import"./ActionButton-APU5sMhG.js";import"./CloseOutlined-BsjciePg.js";import"./pickAttrs-BoNuQqbq.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./toArray-QdoN5Rqg.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./SizeContext-6SbbsRse.js";import"./useOrientation-CvsZ8lA6.js";import"./useZIndex-4Tk46FxA.js";import"./context-DtnoGG1E.js";import"./Skeleton-C9K8eMI_.js";import"./Keyframes-B1gXKyPf.js";import"./useLocale-BzNmgGjV.js";import"./index-7vutiytk.js";import"./fade-BcJF4FJN.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./useClosable-DcQuIHsJ.js";import"./extendsObject-78o_rR5W.js";import"./useControlledState-tu5D_1Ht.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";import"./statusUtils-obNhd3Z8.js";const Te=t=>{const{prefixCls:e,className:y,closeIcon:Q,closable:k,type:c,title:X,children:M,footer:Z,classNames:ee,styles:oe,...te}=t,{getPrefixCls:j}=p.useContext(je),{className:ne,style:re,classNames:se,styles:ae}=Se("modal"),S=j(),a=e||j("modal"),F=we(S),[le,ie]=pe(a,F),[P,w]=Be([se,ee],[ae,oe],{props:t}),O=`${a}-confirm`;let g={};return c?g={closable:k??!1,title:"",footer:"",children:p.createElement(de,{...t,prefixCls:a,confirmPrefixCls:O,rootPrefixCls:S,content:M})}:g={closable:k??!0,title:X,footer:Z!==null&&p.createElement(me,{...t}),children:M},p.createElement(ue,{prefixCls:a,className:Fe(le,`${a}-pure-panel`,c&&O,c&&`${O}-${c}`,y,ne,ie,F,P.root),style:{...re,...w.root},...te,closeIcon:fe(a,Q),closable:k,classNames:P,styles:w,...g})},De=Pe(Te);function K(t){return i(Me(t))}const n=he;n.useModal=Ce;n.info=function(e){return i(xe(e))};n.success=function(e){return i(ye(e))};n.error=function(e){return i(ke(e))};n.warning=K;n.warn=K;n.confirm=function(e){return i(Oe(e))};n.destroyAll=function(){for(;B.length;){const e=B.pop();e&&e()}};n.config=ge;n._InternalPanelDoNotUseOrYouWillBeFired=De;const r=({closeIcon:t,...e})=>o.jsx(n,{closeIcon:t??o.jsx(ce.Close,{}),...e});r.useModal=n.useModal;r.confirm=n.confirm;r.info=n.info;r.success=n.success;r.warning=n.warning;r.error=n.error;r.destroyAll=n.destroyAll;r.__docgenInfo={description:`Modal — displays content in a layer above the page.
Built on Ant Design Modal with Flock DS tokens via FlockProvider.
Uses Flock close icon by default.`,methods:[],displayName:"Modal"};const Io={title:"Feedback/Modal",component:r,tags:["autodocs"]},d={render:()=>{const[t,e]=l.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(s,{type:"primary",onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(r,{title:"Basic Modal",open:t,onOk:()=>e(!1),onCancel:()=>e(!1),children:[o.jsx("p",{children:"This is the content of the modal."}),o.jsx("p",{children:"You can place any content here."})]})]})}},m={render:()=>{const[t,e]=l.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(s,{type:"primary",onClick:()=>e(!0),children:"Open Modal"}),o.jsx(r,{title:"Custom Footer",open:t,onCancel:()=>e(!1),footer:[o.jsx(s,{onClick:()=>e(!1),children:"Cancel"},"back"),o.jsx(s,{onClick:()=>e(!1),children:"Save Draft"},"draft"),o.jsx(s,{type:"primary",onClick:()=>e(!1),children:"Submit"},"submit")],children:o.jsx("p",{children:"Modal with custom footer buttons."})})]})}},u={render:()=>{const[t,e]=l.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(s,{type:"primary",onClick:()=>e(!0),children:"Open Modal"}),o.jsx(r,{title:"No Footer",open:t,onCancel:()=>e(!1),footer:null,children:o.jsx("p",{children:"This modal has no footer buttons."})})]})}},f={render:()=>{const[t,e]=l.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(s,{type:"primary",onClick:()=>e(!0),children:"Open Centered Modal"}),o.jsx(r,{title:"Centered Modal",open:t,centered:!0,onOk:()=>e(!1),onCancel:()=>e(!1),children:o.jsx("p",{children:"This modal is vertically centered."})})]})}},h={render:()=>{const[t,e]=l.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(s,{type:"primary",onClick:()=>e(!0),children:"Open Wide Modal"}),o.jsx(r,{title:"Wide Modal",open:t,width:800,onOk:()=>e(!1),onCancel:()=>e(!1),children:o.jsx("p",{children:"This modal has a custom width of 800px, useful for displaying detailed merchant data."})})]})}},C={render:()=>{const[t,e]=r.useModal();return o.jsxs(o.Fragment,{children:[e,o.jsxs(be,{children:[o.jsx(s,{onClick:()=>t.confirm({title:"Are you sure?",content:"This action cannot be undone.",onOk:()=>console.log("Confirmed")}),children:"Confirm"}),o.jsx(s,{danger:!0,onClick:()=>t.confirm({title:"Delete merchant?",content:"All associated data will be permanently removed.",okText:"Delete",okType:"danger",onOk:()=>console.log("Deleted")}),children:"Delete"})]})]})}},x={render:()=>{const[t,e]=r.useModal();return o.jsxs(o.Fragment,{children:[e,o.jsx(s,{type:"primary",onClick:()=>t.confirm({title:"Processing payment",content:"Please wait while the transaction is being processed...",okText:"Process",onOk:()=>new Promise(y=>{setTimeout(y,2e3)})}),children:"Process Payment"})]})}};var b,T,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
          <p>This is the content of the modal.</p>
          <p>You can place any content here.</p>
        </Modal>
      </>;
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,W,v;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal title="Custom Footer" open={open} onCancel={() => setOpen(false)} footer={[<Button key="back" onClick={() => setOpen(false)}>
              Cancel
            </Button>, <Button key="draft" onClick={() => setOpen(false)}>
              Save Draft
            </Button>, <Button key="submit" type="primary" onClick={() => setOpen(false)}>
              Submit
            </Button>]}>
          <p>Modal with custom footer buttons.</p>
        </Modal>
      </>;
  }
}`,...(v=(W=m.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var A,I,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal title="No Footer" open={open} onCancel={() => setOpen(false)} footer={null}>
          <p>This modal has no footer buttons.</p>
        </Modal>
      </>;
  }
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var E,$,H;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Centered Modal
        </Button>
        <Modal title="Centered Modal" open={open} centered onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
          <p>This modal is vertically centered.</p>
        </Modal>
      </>;
  }
}`,...(H=($=f.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var _,Y,L;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Wide Modal
        </Button>
        <Modal title="Wide Modal" open={open} width={800} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
          <p>This modal has a custom width of 800px, useful for displaying detailed merchant data.</p>
        </Modal>
      </>;
  }
}`,...(L=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var U,V,z;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [modal, contextHolder] = Modal.useModal();
    return <>
        {contextHolder}
        <Space>
          <Button onClick={() => modal.confirm({
          title: 'Are you sure?',
          content: 'This action cannot be undone.',
          onOk: () => console.log('Confirmed')
        })}>
            Confirm
          </Button>
          <Button danger onClick={() => modal.confirm({
          title: 'Delete merchant?',
          content: 'All associated data will be permanently removed.',
          okText: 'Delete',
          okType: 'danger',
          onOk: () => console.log('Deleted')
        })}>
            Delete
          </Button>
        </Space>
      </>;
  }
}`,...(z=(V=C.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var G,q,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [modal, contextHolder] = Modal.useModal();
    return <>
        {contextHolder}
        <Button type="primary" onClick={() => modal.confirm({
        title: 'Processing payment',
        content: 'Please wait while the transaction is being processed...',
        okText: 'Process',
        onOk: () => new Promise(resolve => {
          setTimeout(resolve, 2000);
        })
      })}>
          Process Payment
        </Button>
      </>;
  }
}`,...(J=(q=x.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const Ro=["Default","WithFooter","WithoutFooter","Centered","CustomWidth","ConfirmDialog","LoadingConfirm"];export{f as Centered,C as ConfirmDialog,h as CustomWidth,d as Default,x as LoadingConfirm,m as WithFooter,u as WithoutFooter,Ro as __namedExportsOrder,Io as default};
