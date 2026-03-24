import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as r}from"./index-BYP1w01E.js";import{B as e}from"./Button-DN9j4dNv.js";import{S as g}from"./index-Cf5wY2b7.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./context-BUY-qHdb.js";import"./CSSMotionList-_1VB0qQS.js";import"./KeyCode-iX0y3px_.js";import"./pickAttrs-BoNuQqbq.js";import"./isNonNullable-Hl1s-5mn.js";import"./useCSSVarCls-DSIlCV5N.js";import"./CheckCircleFilled-BtE0EsBD.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./CloseCircleFilled-CV3osNzx.js";import"./ExclamationCircleFilled-NCuJaJfQ.js";import"./InfoCircleFilled-BE-7kaHA.js";import"./LoadingOutlined-Cogr-EmL.js";import"./Keyframes-B1gXKyPf.js";import"./genStyleUtils-lByCByip.js";import"./useZIndex-4Tk46FxA.js";import"./useMergeSemantic-BtH1ep6T.js";import"./index-JHGMqgr2.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./motion-CGP6LHXs.js";import"./ActionButton-APU5sMhG.js";import"./CloseOutlined-BsjciePg.js";import"./focus-Bn7U5BjS.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./omit-3QAACPn7.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./context-DtnoGG1E.js";import"./Skeleton-C9K8eMI_.js";import"./useLocale-BzNmgGjV.js";import"./index-7vutiytk.js";import"./fade-BcJF4FJN.js";import"./motion-BDSEuMuf.js";import"./zoom-pxgP0w3E.js";import"./useClosable-DcQuIHsJ.js";import"./extendsObject-78o_rR5W.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";import"./statusUtils-obNhd3Z8.js";const Hn={title:"Feedback/Notification",tags:["autodocs"],decorators:[t=>n.jsx(r,{children:n.jsx(t,{})})],parameters:{docs:{description:{component:`Notification — global notification messages triggered programmatically.
Uses Ant Design's App.useApp() hook for context-aware notification API.`}}}},s={render:()=>{const t=()=>{const{notification:o}=r.useApp();return n.jsx(e,{onClick:()=>o.info({message:"Notification",description:"This is a default notification message."}),children:"Default"})};return n.jsx(t,{})}},c={render:()=>{const t=()=>{const{notification:o}=r.useApp();return n.jsx(e,{onClick:()=>o.success({message:"Order confirmed",description:"Your order #2024-1234 has been placed successfully."}),children:"Success"})};return n.jsx(t,{})}},a={render:()=>{const t=()=>{const{notification:o}=r.useApp();return n.jsx(e,{danger:!0,onClick:()=>o.error({message:"Payment failed",description:"Unable to process your payment. Please check your card details."}),children:"Error"})};return n.jsx(t,{})}},p={render:()=>{const t=()=>{const{notification:o}=r.useApp();return n.jsx(e,{onClick:()=>o.warning({message:"Low stock alert",description:'Product "Burger Combo" has only 5 items remaining.'}),children:"Warning"})};return n.jsx(t,{})}},m={render:()=>{const t=()=>{const{notification:o}=r.useApp();return n.jsx(e,{onClick:()=>o.info({message:"System update",description:"A new version of the portal is available. Refresh to update."}),children:"Info"})};return n.jsx(t,{})}},u={name:"With description",render:()=>{const t=()=>{const{notification:o}=r.useApp();return n.jsx(e,{onClick:()=>o.open({message:"New order received",description:"Order #2024-5678 from John Doe — 3 items totaling $45.90. Estimated delivery: 30 minutes."}),children:"With description"})};return n.jsx(t,{})}},d={name:"With button",render:()=>{const t=()=>{const{notification:o}=r.useApp(),C=()=>{const i=`open${Date.now()}`;o.open({message:"Confirm action",description:"Are you sure you want to archive this store?",btn:n.jsxs(g,{children:[n.jsx(e,{size:"small",onClick:()=>o.destroy(i),children:"Cancel"}),n.jsx(e,{type:"primary",size:"small",onClick:()=>o.destroy(i),children:"Confirm"})]}),key:i})};return n.jsx(e,{onClick:C,children:"With button"})};return n.jsx(t,{})}},l={render:()=>{const t=()=>{const{notification:o}=r.useApp(),C=["topLeft","topRight","bottomLeft","bottomRight"];return n.jsx(g,{wrap:!0,children:C.map(i=>n.jsx(e,{onClick:()=>o.info({message:`Notification — ${i}`,description:`This notification appears at ${i}.`,placement:i}),children:i},i))})};return n.jsx(t,{})}},f={render:()=>{const t=()=>{const{notification:o}=r.useApp();return n.jsxs(g,{children:[n.jsx(e,{onClick:()=>o.info({message:"Quick",description:"Closes in 2s",duration:2}),children:"2 seconds"}),n.jsx(e,{onClick:()=>o.info({message:"Sticky",description:"Will not auto-close",duration:0}),children:"No auto-close"})]})};return n.jsx(t,{})}};var h,k,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      return <Button onClick={() => notification.info({
        message: 'Notification',
        description: 'This is a default notification message.'
      })}>
          Default
        </Button>;
    };
    return <Comp />;
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var A,x,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      return <Button onClick={() => notification.success({
        message: 'Order confirmed',
        description: 'Your order #2024-1234 has been placed successfully.'
      })}>
          Success
        </Button>;
    };
    return <Comp />;
  }
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var j,S,b;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      return <Button danger onClick={() => notification.error({
        message: 'Payment failed',
        description: 'Unable to process your payment. Please check your card details.'
      })}>
          Error
        </Button>;
    };
    return <Comp />;
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var W,w,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      return <Button onClick={() => notification.warning({
        message: 'Low stock alert',
        description: 'Product "Burger Combo" has only 5 items remaining.'
      })}>
          Warning
        </Button>;
    };
    return <Comp />;
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,v,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      return <Button onClick={() => notification.info({
        message: 'System update',
        description: 'A new version of the portal is available. Refresh to update.'
      })}>
          Info
        </Button>;
    };
    return <Comp />;
  }
}`,...(P=(v=m.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var E,$,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With description',
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      return <Button onClick={() => notification.open({
        message: 'New order received',
        description: 'Order #2024-5678 from John Doe — 3 items totaling $45.90. Estimated delivery: 30 minutes.'
      })}>
          With description
        </Button>;
    };
    return <Comp />;
  }
}`,...(R=($=u.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var L,I,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With button',
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      const openNotification = () => {
        const key = \`open\${Date.now()}\`;
        notification.open({
          message: 'Confirm action',
          description: 'Are you sure you want to archive this store?',
          btn: <Space>
              <Button size="small" onClick={() => notification.destroy(key)}>
                Cancel
              </Button>
              <Button type="primary" size="small" onClick={() => notification.destroy(key)}>
                Confirm
              </Button>
            </Space>,
          key
        });
      };
      return <Button onClick={openNotification}>With button</Button>;
    };
    return <Comp />;
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var z,T,U;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      const placements = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const;
      return <Space wrap>
          {placements.map(placement => <Button key={placement} onClick={() => notification.info({
          message: \`Notification — \${placement}\`,
          description: \`This notification appears at \${placement}.\`,
          placement
        })}>
              {placement}
            </Button>)}
        </Space>;
    };
    return <Comp />;
  }
}`,...(U=(T=l.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var J,Q,Y;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const Comp = () => {
      const {
        notification
      } = App.useApp();
      return <Space>
          <Button onClick={() => notification.info({
          message: 'Quick',
          description: 'Closes in 2s',
          duration: 2
        })}>
            2 seconds
          </Button>
          <Button onClick={() => notification.info({
          message: 'Sticky',
          description: 'Will not auto-close',
          duration: 0
        })}>
            No auto-close
          </Button>
        </Space>;
    };
    return <Comp />;
  }
}`,...(Y=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const Kn=["Default","Success","Error","Warning","Info","WithDescription","WithButton","Placement","Duration"];export{s as Default,f as Duration,a as Error,m as Info,l as Placement,c as Success,p as Warning,d as WithButton,u as WithDescription,Kn as __namedExportsOrder,Hn as default};
