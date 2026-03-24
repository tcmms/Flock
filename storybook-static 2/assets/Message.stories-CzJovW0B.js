import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as o}from"./index-BYP1w01E.js";import{B as s}from"./Button-DN9j4dNv.js";import{S as _}from"./index-Cf5wY2b7.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./context-BUY-qHdb.js";import"./CSSMotionList-_1VB0qQS.js";import"./KeyCode-iX0y3px_.js";import"./pickAttrs-BoNuQqbq.js";import"./isNonNullable-Hl1s-5mn.js";import"./useCSSVarCls-DSIlCV5N.js";import"./CheckCircleFilled-BtE0EsBD.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./CloseCircleFilled-CV3osNzx.js";import"./ExclamationCircleFilled-NCuJaJfQ.js";import"./InfoCircleFilled-BE-7kaHA.js";import"./LoadingOutlined-Cogr-EmL.js";import"./Keyframes-B1gXKyPf.js";import"./genStyleUtils-lByCByip.js";import"./useZIndex-4Tk46FxA.js";import"./useMergeSemantic-BtH1ep6T.js";import"./index-JHGMqgr2.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./motion-CGP6LHXs.js";import"./ActionButton-APU5sMhG.js";import"./CloseOutlined-BsjciePg.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./context-DtnoGG1E.js";import"./Skeleton-C9K8eMI_.js";import"./useLocale-BzNmgGjV.js";import"./index-7vutiytk.js";import"./fade-BcJF4FJN.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./useClosable-DcQuIHsJ.js";import"./extendsObject-78o_rR5W.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";import"./statusUtils-obNhd3Z8.js";const ze={title:"Feedback/Message",tags:["autodocs"],decorators:[r=>e.jsx(o,{children:e.jsx(r,{})})],parameters:{docs:{description:{component:`Message — global message notifications triggered programmatically.
Uses Ant Design's App.useApp() hook for context-aware message API.`}}}},t={render:()=>{const r=()=>{const{message:n}=o.useApp();return e.jsx(s,{onClick:()=>n.info("Default message"),children:"Default"})};return e.jsx(r,{})}},c={render:()=>{const r=()=>{const{message:n}=o.useApp();return e.jsx(s,{onClick:()=>n.success("Operation completed successfully"),children:"Success"})};return e.jsx(r,{})}},a={render:()=>{const r=()=>{const{message:n}=o.useApp();return e.jsx(s,{danger:!0,onClick:()=>n.error("Something went wrong"),children:"Error"})};return e.jsx(r,{})}},p={render:()=>{const r=()=>{const{message:n}=o.useApp();return e.jsx(s,{onClick:()=>n.warning("Please check your input"),children:"Warning"})};return e.jsx(r,{})}},i={render:()=>{const r=()=>{const{message:n}=o.useApp();return e.jsx(s,{onClick:()=>n.info("New updates available"),children:"Info"})};return e.jsx(r,{})}},m={render:()=>{const r=()=>{const{message:n}=o.useApp();return e.jsx(s,{onClick:()=>n.loading("Processing…",2),children:"Loading"})};return e.jsx(r,{})}},u={render:()=>{const r=()=>{const{message:n}=o.useApp();return e.jsxs(_,{children:[e.jsx(s,{onClick:()=>n.success({content:"1 second",duration:1}),children:"1s"}),e.jsx(s,{onClick:()=>n.success({content:"5 seconds",duration:5}),children:"5s"}),e.jsx(s,{onClick:()=>n.success({content:"10 seconds",duration:10}),children:"10s"})]})};return e.jsx(r,{})}},d={name:"With promise",render:()=>{const r=()=>{const{message:n}=o.useApp(),N=()=>{n.loading({content:"Saving…",duration:1}).then(()=>n.success({content:"Saved!",duration:1})).then(()=>n.info({content:"Done",duration:1}))};return e.jsx(s,{type:"primary",onClick:N,children:"Sequential messages"})};return e.jsx(r,{})}};var l,g,C;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      return <Button onClick={() => message.info('Default message')}>Default</Button>;
    };
    return <Comp />;
  }
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var A,h,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      return <Button onClick={() => message.success('Operation completed successfully')}>Success</Button>;
    };
    return <Comp />;
  }
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,f,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      return <Button danger onClick={() => message.error('Something went wrong')}>Error</Button>;
    };
    return <Comp />;
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,B,D;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      return <Button onClick={() => message.warning('Please check your input')}>Warning</Button>;
    };
    return <Comp />;
  }
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var w,y,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      return <Button onClick={() => message.info('New updates available')}>Info</Button>;
    };
    return <Comp />;
  }
}`,...(W=(y=i.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var P,v,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      return <Button onClick={() => message.loading('Processing…', 2)}>Loading</Button>;
    };
    return <Comp />;
  }
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var I,b,L;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      return <Space>
          <Button onClick={() => message.success({
          content: '1 second',
          duration: 1
        })}>1s</Button>
          <Button onClick={() => message.success({
          content: '5 seconds',
          duration: 5
        })}>5s</Button>
          <Button onClick={() => message.success({
          content: '10 seconds',
          duration: 10
        })}>10s</Button>
        </Space>;
    };
    return <Comp />;
  }
}`,...(L=(b=u.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var O,q,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With promise',
  render: () => {
    const Comp = () => {
      const {
        message
      } = App.useApp();
      const handleClick = () => {
        message.loading({
          content: 'Saving…',
          duration: 1
        }).then(() => message.success({
          content: 'Saved!',
          duration: 1
        })).then(() => message.info({
          content: 'Done',
          duration: 1
        }));
      };
      return <Button type="primary" onClick={handleClick}>Sequential messages</Button>;
    };
    return <Comp />;
  }
}`,...(M=(q=d.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const Ge=["Default","Success","Error","Warning","Info","Loading","Duration","WithPromise"];export{t as Default,u as Duration,a as Error,i as Info,m as Loading,c as Success,p as Warning,d as WithPromise,Ge as __namedExportsOrder,ze as default};
