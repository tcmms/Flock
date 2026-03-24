import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{S as j}from"./index-7O5WOC84.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./index-CUWDS_la.js";import"./useSize-BVGoiTzB.js";import"./SizeContext-6SbbsRse.js";import"./reactNode-CHTsHNSU.js";import"./Keyframes-B1gXKyPf.js";import"./genStyleUtils-lByCByip.js";import"./useMergeSemantic-BtH1ep6T.js";const D=({size:R="default",spinning:W=!0,...z})=>i.jsx(j,{size:R,spinning:W,...z});D.__docgenInfo={description:`Spinner — loading indicator.
Built on Ant Design Spin with Flock DS tokens via FlockProvider.`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Spinner size",defaultValue:{value:"'default'",computed:!1}},tip:{required:!1,tsType:{name:"ReactNode"},description:"Loading tip text"},spinning:{required:!1,tsType:{name:"boolean"},description:"Whether to show spinner",defaultValue:{value:"true",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"Delay in ms before showing"},children:{required:!1,tsType:{name:"ReactNode"},description:"Content to wrap with loading overlay"}}};const P={title:"Feedback/Spinner",component:D,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"]},spinning:{control:"boolean"},delay:{control:"number"},tip:{control:"text"}},parameters:{docs:{description:{component:`Spinner — loading indicator.
Built on Ant Design Spin with Flock DS tokens.`}}}},e={},r={args:{size:"small"}},a={args:{size:"large"}},n={name:"With tip",args:{tip:"Loading…",children:i.jsx("div",{style:{padding:"var(--flock-padding-xl)",background:"var(--flock-color-bg-container)",borderRadius:"var(--flock-radius-base)"},children:"Content area"})}},o={name:"Wrapping content",args:{children:i.jsx("div",{style:{padding:"var(--flock-padding-xl)",background:"var(--flock-color-bg-container)",borderRadius:"var(--flock-radius-base)"},children:"This content is loading…"})}},s={args:{delay:500,children:i.jsx("div",{style:{padding:"var(--flock-padding-xl)",background:"var(--flock-color-bg-container)",borderRadius:"var(--flock-radius-base)"},children:"Shows spinner after 500ms delay"})}};var t,d,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With tip',
  args: {
    tip: 'Loading…',
    children: <div style={{
      padding: 'var(--flock-padding-xl)',
      background: 'var(--flock-color-bg-container)',
      borderRadius: 'var(--flock-radius-base)'
    }}>
        Content area
      </div>
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var h,y,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Wrapping content',
  args: {
    children: <div style={{
      padding: 'var(--flock-padding-xl)',
      background: 'var(--flock-color-bg-container)',
      borderRadius: 'var(--flock-radius-base)'
    }}>
        This content is loading…
      </div>
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,T,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    delay: 500,
    children: <div style={{
      padding: 'var(--flock-padding-xl)',
      background: 'var(--flock-color-bg-container)',
      borderRadius: 'var(--flock-radius-base)'
    }}>
        Shows spinner after 500ms delay
      </div>
  }
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const G=["Default","Small","Large","WithTip","WrappingContent","Delayed"];export{e as Default,s as Delayed,a as Large,r as Small,n as WithTip,o as WrappingContent,G as __namedExportsOrder,P as default};
