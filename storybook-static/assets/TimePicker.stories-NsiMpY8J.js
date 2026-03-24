import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as Y}from"./flockIcons-DaHM7iCS.js";import{r as i}from"./index-oxIuDU2I.js";import{g as $}from"./PurePanel-Bl8FDyk0.js";import{u as q,D as G}from"./index-C1SjtAxB.js";import{u as J}from"./useVariants-CpE5hFEr.js";import"./WeatherClimateWindIcon-B7IaNujn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useControlledState-tu5D_1Ht.js";import"./reactNode-CHTsHNSU.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./SizeContext-6SbbsRse.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./omit-3QAACPn7.js";import"./pickAttrs-BoNuQqbq.js";import"./index-CxTbkWiH.js";import"./Overflow-DnrDsobS.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./extends-CF3RwP-h.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./genStyleUtils-lByCByip.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./statusUtils-obNhd3Z8.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useMergeSemantic-BtH1ep6T.js";import"./index-CSL4b1Pf.js";import"./compact-item-DgFz4dAb.js";import"./move-Bvj_4Dg2.js";import"./roundedArrow-CTehBM3O.js";import"./useIcons-BsCD8bfQ.js";import"./CheckOutlined-Bjlu0gCC.js";import"./CloseCircleFilled-CV3osNzx.js";import"./CloseOutlined-BsjciePg.js";import"./DownOutlined-BT1hZG-W.js";import"./LoadingOutlined-Cogr-EmL.js";import"./SearchOutlined-C-Rz-lYV.js";import"./Button-DN9j4dNv.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";import"./useLocale-BzNmgGjV.js";import"./useZIndex-4Tk46FxA.js";const{TimePicker:K,RangePicker:Q}=G,X=i.forwardRef((r,o)=>i.createElement(Q,{...r,picker:"time",mode:void 0,ref:o})),t=i.forwardRef((r,o)=>{const{addon:d,renderExtraFooter:u,variant:N,bordered:W,classNames:_,styles:A,popupClassName:M,popupStyle:V,...B}=r,[h]=J("timePicker",N,W),C=i.useMemo(()=>{if(u)return u;if(d)return d},[d,u]),O={...r,variant:h},[U,L]=q("timePicker",_,A,M,V,O);return i.createElement(K,{...B,mode:void 0,ref:o,renderExtraFooter:C,variant:h,classNames:U,styles:L})}),I=$(t,"popupAlign",void 0,"picker");t._InternalPanelDoNotUseOrYouWillBeFired=I;t.RangePicker=X;t._InternalPanelDoNotUseOrYouWillBeFired=I;const s=({suffixIcon:r,...o})=>e.jsx(t,{suffixIcon:r??e.jsx(Y.Clock,{}),...o}),Z=t.RangePicker;s.__docgenInfo={description:`TimePicker — time selection control.
Built on Ant Design TimePicker with Flock DS tokens via FlockProvider.
Uses Flock clock icon by default.`,methods:[],displayName:"TimePicker"};const er={title:"Data Entry/TimePicker",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"]},disabled:{control:"boolean"}},parameters:{docs:{description:{component:"TimePicker — time selection input control."}}}},a={args:{placeholder:"Select time…",style:{width:200}}},m={name:"With seconds",args:{placeholder:"HH:mm:ss",showSecond:!0,style:{width:200}}},n={name:"12-hour format",args:{placeholder:"Select time…",use12Hours:!0,format:"h:mm A",style:{width:200}}},c={render:()=>e.jsx(Z,{style:{width:280}})},l={args:{placeholder:"Disabled",disabled:!0,style:{width:200}}},p={name:"Size variants",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--flock-space-3)"},children:[e.jsx(s,{placeholder:"Small",size:"small",style:{width:200}}),e.jsx(s,{placeholder:"Middle",size:"middle",style:{width:200}}),e.jsx(s,{placeholder:"Large",size:"large",style:{width:200}})]})};var g,k,P;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select time…',
    style: {
      width: 200
    }
  }
}`,...(P=(k=a.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var f,y,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With seconds',
  args: {
    placeholder: 'HH:mm:ss',
    showSecond: true,
    style: {
      width: 200
    }
  }
}`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,x,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '12-hour format',
  args: {
    placeholder: 'Select time…',
    use12Hours: true,
    format: 'h:mm A',
    style: {
      width: 200
    }
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,D,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TimeRangePicker style={{
    width: 280
  }} />
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var F,z,b;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    disabled: true,
    style: {
      width: 200
    }
  }
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var j,E,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Size variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--flock-space-3)'
  }}>
      <TimePicker placeholder="Small" size="small" style={{
      width: 200
    }} />
      <TimePicker placeholder="Middle" size="middle" style={{
      width: 200
    }} />
      <TimePicker placeholder="Large" size="large" style={{
      width: 200
    }} />
    </div>
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const rr=["Default","WithSeconds","TwelveHourFormat","Range","Disabled","SizeVariants"];export{a as Default,l as Disabled,c as Range,p as SizeVariants,n as TwelveHourFormat,m as WithSeconds,rr as __namedExportsOrder,er as default};
