import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as g}from"./index-oxIuDU2I.js";import{U as F,S as H,s as J,a as Q}from"./WeatherClimateWindIcon-B7IaNujn.js";import{T as W}from"./index-HfGhqcrN.js";import{B as V}from"./Button-DN9j4dNv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./CloseOutlined-BsjciePg.js";import"./AntdIcon-CmaM0TST.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./shadow-DTVO8V5H.js";import"./EllipsisOutlined-CEeg_Xck.js";import"./index-CxTbkWiH.js";import"./useControlledState-tu5D_1Ht.js";import"./KeyCode-iX0y3px_.js";import"./Overflow-DnrDsobS.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./extends-CF3RwP-h.js";import"./focus-Bn7U5BjS.js";import"./omit-3QAACPn7.js";import"./PlusOutlined-0uCaHWsy.js";import"./useCSSVarCls-DSIlCV5N.js";import"./useSize-BVGoiTzB.js";import"./motion-CGP6LHXs.js";import"./genStyleUtils-lByCByip.js";import"./useMergeSemantic-BtH1ep6T.js";import"./isNonNullable-Hl1s-5mn.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./Compact-SEgaOlnH.js";import"./useOrientation-CvsZ8lA6.js";import"./LoadingOutlined-Cogr-EmL.js";import"./util-Co9wUNrq.js";import"./color-Cdu72wSx.js";import"./ColorPresets-DEF0m0d4.js";import"./compact-item-DgFz4dAb.js";const Me={title:"Navigation/Tabs",component:W,tags:["autodocs"]},n=[{key:"1",label:"Overview",children:"Merchant overview and key metrics."},{key:"2",label:"Transactions",children:"List of recent transactions."},{key:"3",label:"Settings",children:"Account settings and preferences."}],r={args:{items:n}},s={args:{type:"card",items:n}},a={args:{centered:!0,items:n}},i={args:{items:[{key:"1",label:"Profile",icon:t.jsx(F,{style:{fontSize:"1em"}}),children:"User profile information."},{key:"2",label:"Orders",icon:t.jsx(H,{style:{fontSize:"1em"}}),children:"Order history and tracking."},{key:"3",label:"Documents",icon:t.jsx(J,{style:{fontSize:"1em"}}),children:"Uploaded documents."},{key:"4",label:"Settings",icon:t.jsx(Q,{style:{fontSize:"1em"}}),children:"Account settings."}]}},o={args:{items:[{key:"1",label:"Active",children:"This tab is active."},{key:"2",label:"Disabled",children:"This tab is disabled.",disabled:!0},{key:"3",label:"Also Active",children:"This tab is also active."}]}},c={args:{items:n,tabBarExtraContent:t.jsx(V,{size:"small",children:"Export"})}},l={render:()=>{const[d,b]=g.useState([{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"}]),[y,p]=g.useState("1");let _=3;const L=(u,N)=>{if(N==="add"){const e=String(_++);b([...d,{key:e,label:`Tab ${e}`,children:`Content of Tab ${e}`}]),p(e)}else{const e=d.filter(q=>q.key!==u);b(e),y===u&&e.length&&p(e[0].key)}};return t.jsx(W,{type:"editable-card",activeKey:y,onChange:p,onEdit:L,items:d})}},m={args:{size:"small",items:n}};var f,h,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var T,k,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'card',
    items: defaultItems
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var I,E,C;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    centered: true,
    items: defaultItems
  }
}`,...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var x,K,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: 'Profile',
      icon: <UserSingleUserIcon style={{
        fontSize: '1em'
      }} />,
      children: 'User profile information.'
    }, {
      key: '2',
      label: 'Orders',
      icon: <ShoppingEcommerceBagShoppingIcon style={{
        fontSize: '1em'
      }} />,
      children: 'Order history and tracking.'
    }, {
      key: '3',
      label: 'Documents',
      icon: <ContentEditDocumentContentIcon style={{
        fontSize: '1em'
      }} />,
      children: 'Uploaded documents.'
    }, {
      key: '4',
      label: 'Settings',
      icon: <InterfaceEssentialSettingsGearIcon style={{
        fontSize: '1em'
      }} />,
      children: 'Account settings.'
    }]
  }
}`,...(z=(K=i.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var A,w,D;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: 'Active',
      children: 'This tab is active.'
    }, {
      key: '2',
      label: 'Disabled',
      children: 'This tab is disabled.',
      disabled: true
    }, {
      key: '3',
      label: 'Also Active',
      children: 'This tab is also active.'
    }]
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var U,j,B;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    tabBarExtraContent: <Button size="small">Export</Button>
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var R,O,$;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = React.useState([{
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab 1'
    }, {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab 2'
    }]);
    const [activeKey, setActiveKey] = React.useState('1');
    let newTabIndex = 3;
    const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
      if (action === 'add') {
        const newKey = String(newTabIndex++);
        setItems([...items, {
          key: newKey,
          label: \`Tab \${newKey}\`,
          children: \`Content of Tab \${newKey}\`
        }]);
        setActiveKey(newKey);
      } else {
        const filtered = items.filter(item => item.key !== targetKey);
        setItems(filtered);
        if (activeKey === targetKey && filtered.length) {
          setActiveKey(filtered[0].key);
        }
      }
    };
    return <Tabs type="editable-card" activeKey={activeKey} onChange={setActiveKey} onEdit={onEdit} items={items} />;
  }
}`,...($=(O=l.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var G,M,P;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'small',
    items: defaultItems
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Pe=["Default","CardType","Centered","WithIcon","DisabledTab","ExtraContent","EditableTabs","SmallSize"];export{s as CardType,a as Centered,r as Default,o as DisabledTab,l as EditableTabs,c as ExtraContent,m as SmallSize,i as WithIcon,Pe as __namedExportsOrder,Me as default};
