import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as r}from"./NavItem-Z8nM3YeA.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";const o=()=>e.jsx("div",{style:{width:20,height:20,background:"rgba(255, 255, 255, 0.3)",borderRadius:"var(--flock-radius-sm)"}}),G={title:"Navigation/NavItem",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Item label"},isSelected:{control:"boolean",description:"Selected state"},signifier:{control:"number",description:"Blue pill count"},hasDot:{control:"boolean",description:"Red notification dot"},hasDoc:{control:"boolean",description:"Document tag"},isCollapsed:{control:"boolean",description:"Collapsed state"},icon:{control:{disable:!0}}},decorators:[w=>e.jsx("div",{style:{background:"var(--flock-sidebar-bg-gradient)",padding:"var(--flock-padding-xs)"},children:e.jsx(w,{})})],parameters:{docs:{description:{component:`NavItem — sidebar navigation item.
Supports selected state, signifier pill, notification dot, and doc tag.`}}}},a={render:()=>e.jsx(r,{icon:e.jsx(o,{}),label:"Live Orders"})},s={render:()=>e.jsx(r,{icon:e.jsx(o,{}),label:"Live Orders",isSelected:!0})},t={name:"With signifier",render:()=>e.jsx(r,{icon:e.jsx(o,{}),label:"Notifications",signifier:3})},i={name:"With dot",render:()=>e.jsx(r,{icon:e.jsx(o,{}),label:"Notifications",hasDot:!0})},c={name:"With doc tag",render:()=>e.jsx(r,{icon:e.jsx(o,{}),label:"Learn & Grow",hasDoc:!0})},n={render:()=>e.jsx(r,{icon:e.jsx(o,{}),label:"Live Orders",isCollapsed:!0})},l={name:"Collapsed selected",render:()=>e.jsx(r,{icon:e.jsx(o,{}),label:"Live Orders",isCollapsed:!0,isSelected:!0})};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" />
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" isSelected />
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,v,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'With signifier',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Notifications" signifier={3} />
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,S,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With dot',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Notifications" hasDot />
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var I,N,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With doc tag',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Learn & Grow" hasDoc />
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var C,W,L;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" isCollapsed />
}`,...(L=(W=n.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var O,P,k;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Collapsed selected',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" isCollapsed isSelected />
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const _=["Default","Selected","WithSignifier","WithDot","WithDocTag","Collapsed","CollapsedSelected"];export{n as Collapsed,l as CollapsedSelected,a as Default,s as Selected,c as WithDocTag,i as WithDot,t as WithSignifier,_ as __namedExportsOrder,G as default};
