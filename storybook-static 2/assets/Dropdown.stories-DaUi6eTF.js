import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as a,U as T,a as P,e as W}from"./WeatherClimateWindIcon-B7IaNujn.js";import{D as n}from"./index-CtOYeobM.js";import{S as o}from"./index-Cf5wY2b7.js";import{B as i}from"./Button-DN9j4dNv.js";import"./dropdown-gP6BfAqY.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./LeftOutlined-BgKLBUDz.js";import"./AntdIcon-CmaM0TST.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./shadow-DTVO8V5H.js";import"./RightOutlined-BYxQZ77H.js";import"./EllipsisOutlined-CEeg_Xck.js";import"./index-CxTbkWiH.js";import"./useControlledState-tu5D_1Ht.js";import"./KeyCode-iX0y3px_.js";import"./Overflow-DnrDsobS.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./extends-CF3RwP-h.js";import"./focus-Bn7U5BjS.js";import"./omit-3QAACPn7.js";import"./placements-BDsFN2kw.js";import"./genStyleUtils-lByCByip.js";import"./roundedArrow-CTehBM3O.js";import"./PurePanel-Bl8FDyk0.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./motion-CGP6LHXs.js";import"./index-BemBm_5k.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./isNonNullable-Hl1s-5mn.js";import"./fade-BcJF4FJN.js";import"./zoom-pxgP0w3E.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./useMergeSemantic-BtH1ep6T.js";import"./collapse-pgbaNnxn.js";import"./move-Bvj_4Dg2.js";import"./statusUtils-obNhd3Z8.js";import"./compact-item-DgFz4dAb.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./ColorPresets-DEF0m0d4.js";const Oe={title:"Navigation/Dropdown",component:n,tags:["autodocs"]},r=[{key:"1",label:"Action 1"},{key:"2",label:"Action 2"},{key:"3",label:"Action 3"}],s={render:()=>e.jsx(n,{menu:{items:r},children:e.jsx("a",{onClick:t=>t.preventDefault(),children:e.jsxs(o,{children:["Hover me",e.jsx(a,{style:{fontSize:"1em"}})]})})})},m={render:()=>e.jsx(n,{menu:{items:[{key:"1",label:"Edit"},{key:"2",label:"Duplicate"},{type:"divider"},{key:"3",label:"Delete",danger:!0}]},children:e.jsx("a",{onClick:t=>t.preventDefault(),children:e.jsxs(o,{children:["Actions",e.jsx(a,{style:{fontSize:"1em"}})]})})})},l={render:()=>e.jsx(n,{menu:{items:[{key:"1",label:"View Details"},{key:"2",label:"Edit"},{key:"3",label:"Archive",disabled:!0},{key:"4",label:"Delete",danger:!0}]},children:e.jsx("a",{onClick:t=>t.preventDefault(),children:e.jsxs(o,{children:["Manage",e.jsx(a,{style:{fontSize:"1em"}})]})})})},p={render:()=>e.jsx(n,{menu:{items:[{key:"1",label:"Profile",icon:e.jsx(T,{style:{fontSize:"1em"}})},{key:"2",label:"Settings",icon:e.jsx(P,{style:{fontSize:"1em"}})},{type:"divider"},{key:"3",label:"Logout",icon:e.jsx(W,{style:{fontSize:"1em"}})}]},children:e.jsx("a",{onClick:t=>t.preventDefault(),children:e.jsxs(o,{children:["Account",e.jsx(a,{style:{fontSize:"1em"}})]})})})},c={render:()=>e.jsx(n,{menu:{items:r},trigger:["click"],children:e.jsx("a",{onClick:t=>t.preventDefault(),children:e.jsxs(o,{children:["Click me",e.jsx(a,{style:{fontSize:"1em"}})]})})})},d={render:()=>e.jsxs(o,{wrap:!0,children:[e.jsx(n.Button,{menu:{items:[{key:"1",label:"Export as CSV"},{key:"2",label:"Export as PDF"},{key:"3",label:"Export as Excel"}]},children:"Export"}),e.jsx(n.Button,{type:"primary",menu:{items:[{key:"1",label:"Create Merchant"},{key:"2",label:"Import Merchants"}]},children:"New Merchant"})]})},u={render:()=>e.jsxs(o,{wrap:!0,children:[e.jsx(n,{menu:{items:r},placement:"bottomLeft",children:e.jsx(i,{children:"Bottom Left"})}),e.jsx(n,{menu:{items:r},placement:"bottom",children:e.jsx(i,{children:"Bottom"})}),e.jsx(n,{menu:{items:r},placement:"bottomRight",children:e.jsx(i,{children:"Bottom Right"})}),e.jsx(n,{menu:{items:r},placement:"topLeft",children:e.jsx(i,{children:"Top Left"})}),e.jsx(n,{menu:{items:r},placement:"top",children:e.jsx(i,{children:"Top"})}),e.jsx(n,{menu:{items:r},placement:"topRight",children:e.jsx(i,{children:"Top Right"})})]})};var f,D,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Dropdown menu={{
    items: defaultItems
  }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Hover me
          <InterfaceEssentialArrowDownIcon style={{
          fontSize: '1em'
        }} />
        </Space>
      </a>
    </Dropdown>
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var x,h,w;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Dropdown menu={{
    items: [{
      key: '1',
      label: 'Edit'
    }, {
      key: '2',
      label: 'Duplicate'
    }, {
      type: 'divider'
    }, {
      key: '3',
      label: 'Delete',
      danger: true
    }]
  }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Actions
          <InterfaceEssentialArrowDownIcon style={{
          fontSize: '1em'
        }} />
        </Space>
      </a>
    </Dropdown>
}`,...(w=(h=m.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var k,S,b;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Dropdown menu={{
    items: [{
      key: '1',
      label: 'View Details'
    }, {
      key: '2',
      label: 'Edit'
    }, {
      key: '3',
      label: 'Archive',
      disabled: true
    }, {
      key: '4',
      label: 'Delete',
      danger: true
    }]
  }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Manage
          <InterfaceEssentialArrowDownIcon style={{
          fontSize: '1em'
        }} />
        </Space>
      </a>
    </Dropdown>
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var g,j,I;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Dropdown menu={{
    items: [{
      key: '1',
      label: 'Profile',
      icon: <UserSingleUserIcon style={{
        fontSize: '1em'
      }} />
    }, {
      key: '2',
      label: 'Settings',
      icon: <InterfaceEssentialSettingsGearIcon style={{
        fontSize: '1em'
      }} />
    }, {
      type: 'divider'
    }, {
      key: '3',
      label: 'Logout',
      icon: <InterfaceEssentialExitLogOutIcon style={{
        fontSize: '1em'
      }} />
    }]
  }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Account
          <InterfaceEssentialArrowDownIcon style={{
          fontSize: '1em'
        }} />
        </Space>
      </a>
    </Dropdown>
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var B,E,v;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Dropdown menu={{
    items: defaultItems
  }} trigger={['click']}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          Click me
          <InterfaceEssentialArrowDownIcon style={{
          fontSize: '1em'
        }} />
        </Space>
      </a>
    </Dropdown>
}`,...(v=(E=c.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var C,z,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Space wrap>
      <Dropdown.Button menu={{
      items: [{
        key: '1',
        label: 'Export as CSV'
      }, {
        key: '2',
        label: 'Export as PDF'
      }, {
        key: '3',
        label: 'Export as Excel'
      }]
    }}>
        Export
      </Dropdown.Button>
      <Dropdown.Button type="primary" menu={{
      items: [{
        key: '1',
        label: 'Create Merchant'
      }, {
        key: '2',
        label: 'Import Merchants'
      }]
    }}>
        New Merchant
      </Dropdown.Button>
    </Space>
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,R,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Space wrap>
      <Dropdown menu={{
      items: defaultItems
    }} placement="bottomLeft">
        <Button>Bottom Left</Button>
      </Dropdown>
      <Dropdown menu={{
      items: defaultItems
    }} placement="bottom">
        <Button>Bottom</Button>
      </Dropdown>
      <Dropdown menu={{
      items: defaultItems
    }} placement="bottomRight">
        <Button>Bottom Right</Button>
      </Dropdown>
      <Dropdown menu={{
      items: defaultItems
    }} placement="topLeft">
        <Button>Top Left</Button>
      </Dropdown>
      <Dropdown menu={{
      items: defaultItems
    }} placement="top">
        <Button>Top</Button>
      </Dropdown>
      <Dropdown menu={{
      items: defaultItems
    }} placement="topRight">
        <Button>Top Right</Button>
      </Dropdown>
    </Space>
}`,...(M=(R=u.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const Fe=["Default","WithDivider","WithDisabledItem","WithIcon","TriggerClick","ButtonDropdown","Placement"];export{d as ButtonDropdown,s as Default,u as Placement,c as TriggerClick,l as WithDisabledItem,m as WithDivider,p as WithIcon,Fe as __namedExportsOrder,Oe as default};
