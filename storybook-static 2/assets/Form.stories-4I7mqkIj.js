import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as r}from"./Form-COKUsALp.js";import{S as be}from"./Select-Y0ygofAr.js";import{D as je}from"./DatePicker-CzayZc6-.js";import{S as ve}from"./Switch-Dc9xO8Ea.js";import{C as ge}from"./Checkbox-B4fX46wP.js";import{R as l}from"./Radio-pwJU95gy.js";import{U as Se}from"./Upload-CAzcSEvG.js";import{C as Pe}from"./Card-B9SCfX4j.js";import{F as ye}from"./flockIcons-DaHM7iCS.js";import{I as o}from"./index-C3cpwhys.js";import{T as fe}from"./index-wXUEkycZ.js";import{S}from"./index-Cf5wY2b7.js";import{B as a}from"./Button-DN9j4dNv.js";import"./context-M28mY0tC.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./toArray-QdoN5Rqg.js";import"./index-TJOQIVf4.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./genStyleUtils-lByCByip.js";import"./omit-3QAACPn7.js";import"./CSSMotionList-_1VB0qQS.js";import"./isNonNullable-Hl1s-5mn.js";import"./motion-CGP6LHXs.js";import"./useCSSVarCls-DSIlCV5N.js";import"./collapse-pgbaNnxn.js";import"./zoom-pxgP0w3E.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./useSize-BVGoiTzB.js";import"./useForm-BOgl4tTj.js";import"./useMergeSemantic-BtH1ep6T.js";import"./row-1XEXFAhx.js";import"./useBreakpoint-CencR8BP.js";import"./useForceUpdate-S_WFItDD.js";import"./index-7vutiytk.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./index-BemBm_5k.js";import"./index-CxTbkWiH.js";import"./useControlledState-tu5D_1Ht.js";import"./placements-BDsFN2kw.js";import"./roundedArrow-CTehBM3O.js";import"./ContextIsolator-CerttSOP.js";import"./Compact-SEgaOlnH.js";import"./useOrientation-CvsZ8lA6.js";import"./useZIndex-4Tk46FxA.js";import"./fade-BcJF4FJN.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./useLocale-BzNmgGjV.js";import"./CheckCircleFilled-BtE0EsBD.js";import"./CloseCircleFilled-CV3osNzx.js";import"./ExclamationCircleFilled-NCuJaJfQ.js";import"./LoadingOutlined-Cogr-EmL.js";import"./index-CzapPNZj.js";import"./useShowArrow-BdooJlZm.js";import"./pickAttrs-BoNuQqbq.js";import"./Overflow-DnrDsobS.js";import"./extends-CF3RwP-h.js";import"./KeyCode-iX0y3px_.js";import"./List-DpcyPBqC.js";import"./index-Bk6HVE_C.js";import"./compact-item-DgFz4dAb.js";import"./move-Bvj_4Dg2.js";import"./PurePanel-Bl8FDyk0.js";import"./statusUtils-obNhd3Z8.js";import"./useVariants-CpE5hFEr.js";import"./useIcons-BsCD8bfQ.js";import"./CheckOutlined-Bjlu0gCC.js";import"./CloseOutlined-BsjciePg.js";import"./DownOutlined-BT1hZG-W.js";import"./SearchOutlined-C-Rz-lYV.js";import"./index-C1SjtAxB.js";import"./index-CSL4b1Pf.js";import"./index-DLyCQgDV.js";import"./client-CsZ7Yvsz.js";import"./util-Co9wUNrq.js";import"./index-Cs4CKeMK.js";import"./useBubbleLock-D85X6Qcs.js";import"./index-CPWzGJ2l.js";import"./index-4hv6Avwq.js";import"./EyeOutlined-D4_0bFME.js";import"./progress-CxVzt0eR.js";import"./Skeleton-C9K8eMI_.js";import"./index-HfGhqcrN.js";import"./EllipsisOutlined-CEeg_Xck.js";import"./focus-Bn7U5BjS.js";import"./PlusOutlined-0uCaHWsy.js";import"./WeatherClimateWindIcon-B7IaNujn.js";import"./Input-B6fOCpQ1.js";import"./ColorPresets-DEF0m0d4.js";const It={title:"Data Entry/Form",component:r,tags:["autodocs"],argTypes:{layout:{control:"select",options:["horizontal","vertical","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["small","middle","large"]}},parameters:{docs:{description:{component:`Form — collects, validates, and submits user input.
Built on Ant Design Form with Flock DS tokens via FlockProvider.
Supports horizontal/vertical/inline layouts, validation, dynamic fields, and programmatic control.`}}}},i={render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log("Submit:",t),children:[e.jsx(r.Item,{label:"Username",name:"username",rules:[{required:!0}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Password",name:"password",rules:[{required:!0}],children:e.jsx(o.Password,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},n={name:"Horizontal layout",render:()=>e.jsxs(r,{layout:"horizontal",labelCol:{span:4},wrapperCol:{span:16},onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Email",name:"email",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Phone",name:"phone",children:e.jsx(o,{})}),e.jsx(r.Item,{wrapperCol:{offset:4},children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},c={name:"Vertical layout",render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"First Name",name:"firstName",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Last Name",name:"lastName",children:e.jsx(o,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},u={name:"Inline layout",render:()=>e.jsxs(r,{layout:"inline",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Name",name:"name",children:e.jsx(o,{placeholder:"Enter name"})}),e.jsx(r.Item,{label:"Email",name:"email",children:e.jsx(o,{placeholder:"Enter email"})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Search"})})]})},p={name:"With validation",render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log("Success:",t),onFinishFailed:t=>console.log("Failed:",t),children:[e.jsx(r.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please enter your email"},{type:"email",message:"Please enter a valid email"}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please enter your password"},{min:8,message:"Password must be at least 8 characters"}],children:e.jsx(o.Password,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Register"})})]})},d={name:"Custom validator",render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Password",name:"password",rules:[{required:!0}],children:e.jsx(o.Password,{})}),e.jsx(r.Item,{label:"Confirm Password",name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"Please confirm your password"},({getFieldValue:t})=>({validator(m,s){return!s||t("password")===s?Promise.resolve():Promise.reject(new Error("Passwords do not match"))}})],children:e.jsx(o.Password,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},h={name:"Required fields",render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Store Name",name:"storeName",rules:[{required:!0,message:"Store name is required"}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Contact Email",name:"contactEmail",rules:[{required:!0,message:"Contact email is required"}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Notes",name:"notes",children:e.jsx(o.TextArea,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Save"})})]})},I={name:"Optional mark",render:()=>e.jsxs(r,{layout:"vertical",requiredMark:"optional",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Store Name",name:"storeName",rules:[{required:!0}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Description",name:"description",children:e.jsx(o.TextArea,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Save"})})]})},F={name:"With help text",render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"API Key",name:"apiKey",help:"You can find your API key in the developer settings.",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Webhook URL",name:"webhook",help:"We will send event notifications to this URL.",extra:"Must use HTTPS protocol.",children:e.jsx(o,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Save Configuration"})})]})},y={name:"Disabled form",render:()=>e.jsxs(r,{layout:"vertical",disabled:!0,onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Merchant ID",name:"merchantId",initialValue:"MCH-12345",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Business Name",name:"businessName",initialValue:"Acme Corp",children:e.jsx(o,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Save"})})]})},x={name:"All controls",render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log(t),initialValues:{status:"active",notifications:!0},children:[e.jsx(r.Item,{label:"Store Name",name:"storeName",rules:[{required:!0}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Category",name:"category",rules:[{required:!0}],children:e.jsx(be,{options:[{label:"Restaurant",value:"restaurant"},{label:"Grocery",value:"grocery"},{label:"Pharmacy",value:"pharmacy"}],placeholder:"Select category"})}),e.jsx(r.Item,{label:"Opening Date",name:"openingDate",children:e.jsx(je,{style:{width:"100%"}})}),e.jsx(r.Item,{label:"Delivery Radius (km)",name:"deliveryRadius",children:e.jsx(fe,{min:1,max:50,style:{width:"100%"}})}),e.jsx(r.Item,{label:"Status",name:"status",children:e.jsxs(l.Group,{children:[e.jsx(l,{value:"active",children:"Active"}),e.jsx(l,{value:"paused",children:"Paused"}),e.jsx(l,{value:"closed",children:"Closed"})]})}),e.jsx(r.Item,{label:"Enable Notifications",name:"notifications",valuePropName:"checked",children:e.jsx(ve,{})}),e.jsx(r.Item,{name:"terms",valuePropName:"checked",rules:[{validator:(t,m)=>m?Promise.resolve():Promise.reject(new Error("Please accept terms"))}],children:e.jsx(ge,{children:"I agree to the terms and conditions"})}),e.jsx(r.Item,{children:e.jsxs(S,{children:[e.jsx(a,{type:"primary",htmlType:"submit",children:"Submit"}),e.jsx(a,{htmlType:"reset",children:"Reset"})]})})]})},b={name:"Dynamic fields",render:()=>e.jsxs(r,{layout:"vertical",onFinish:t=>console.log(t),children:[e.jsx(r.List,{name:"contacts",children:(t,{add:m,remove:s})=>e.jsxs(e.Fragment,{children:[t.map(({key:xe,name:P,...f})=>e.jsxs(S,{style:{display:"flex",marginBottom:"var(--flock-space-2)"},align:"baseline",children:[e.jsx(r.Item,{...f,name:[P,"name"],rules:[{required:!0,message:"Name required"}],children:e.jsx(o,{placeholder:"Contact name"})}),e.jsx(r.Item,{...f,name:[P,"phone"],rules:[{required:!0,message:"Phone required"}],children:e.jsx(o,{placeholder:"Phone number"})}),e.jsx(a,{type:"text",danger:!0,onClick:()=>s(P),children:"Remove"})]},xe)),e.jsx(r.Item,{children:e.jsx(a,{type:"dashed",onClick:()=>m(),block:!0,icon:e.jsx(ye.Plus,{}),children:"Add Contact"})})]})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},j={name:"Programmatic control",render:()=>{const[t]=r.useForm();return e.jsxs(r,{form:t,layout:"vertical",onFinish:m=>console.log(m),children:[e.jsx(r.Item,{label:"Name",name:"name",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Email",name:"email",children:e.jsx(o,{})}),e.jsx(r.Item,{children:e.jsxs(S,{children:[e.jsx(a,{type:"primary",htmlType:"submit",children:"Submit"}),e.jsx(a,{onClick:()=>t.resetFields(),children:"Reset"}),e.jsx(a,{onClick:()=>t.setFieldsValue({name:"John Doe",email:"john@example.com"}),children:"Fill Example"})]})})]})}},v={name:"Compact layout",render:()=>e.jsxs(r,{layout:"vertical",size:"small",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Name",name:"name",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Email",name:"email",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Phone",name:"phone",children:e.jsx(o,{})}),e.jsx(r.Item,{children:e.jsx(a,{type:"primary",htmlType:"submit",size:"small",children:"Save"})})]})},g={name:"Card form",render:()=>e.jsx(Pe,{title:"Store Settings",style:{maxWidth:480},children:e.jsxs(r,{layout:"vertical",onFinish:t=>console.log(t),children:[e.jsx(r.Item,{label:"Store Name",name:"storeName",rules:[{required:!0}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Description",name:"description",children:e.jsx(o.TextArea,{rows:3})}),e.jsx(r.Item,{label:"Logo",name:"logo",children:e.jsx(Se,{action:"#",listType:"picture",maxCount:1,children:e.jsx(a,{icon:e.jsx(ye.Upload,{}),children:"Upload Logo"})})}),e.jsx(r.Item,{children:e.jsxs(S,{children:[e.jsx(a,{type:"primary",htmlType:"submit",children:"Save"}),e.jsx(a,{children:"Cancel"})]})})]})})};var C,w,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Form layout="vertical" onFinish={values => console.log('Submit:', values)}>
      <Form.Item label="Username" name="username" rules={[{
      required: true
    }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{
      required: true
    }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var T,N,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Horizontal layout',
  render: () => <Form layout="horizontal" labelCol={{
    span: 4
  }} wrapperCol={{
    span: 16
  }} onFinish={v => console.log(v)}>
      <Form.Item label="Email" name="email"><Input /></Form.Item>
      <Form.Item label="Phone" name="phone"><Input /></Form.Item>
      <Form.Item wrapperCol={{
      offset: 4
    }}>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
}`,...(k=(N=n.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var q,R,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Vertical layout',
  render: () => <Form layout="vertical" onFinish={v => console.log(v)}>
      <Form.Item label="First Name" name="firstName"><Input /></Form.Item>
      <Form.Item label="Last Name" name="lastName"><Input /></Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
}`,...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,A,L;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Inline layout',
  render: () => <Form layout="inline" onFinish={v => console.log(v)}>
      <Form.Item label="Name" name="name"><Input placeholder="Enter name" /></Form.Item>
      <Form.Item label="Email" name="email"><Input placeholder="Enter email" /></Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Search</Button>
      </Form.Item>
    </Form>
}`,...(L=(A=u.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var V,U,W;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With validation',
  render: () => <Form layout="vertical" onFinish={v => console.log('Success:', v)} onFinishFailed={e => console.log('Failed:', e)}>
      <Form.Item label="Email" name="email" rules={[{
      required: true,
      message: 'Please enter your email'
    }, {
      type: 'email',
      message: 'Please enter a valid email'
    }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{
      required: true,
      message: 'Please enter your password'
    }, {
      min: 8,
      message: 'Password must be at least 8 characters'
    }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var z,H,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Custom validator',
  render: () => <Form layout="vertical" onFinish={v => console.log(v)}>
      <Form.Item label="Password" name="password" rules={[{
      required: true
    }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm Password" name="confirmPassword" dependencies={['password']} rules={[{
      required: true,
      message: 'Please confirm your password'
    }, ({
      getFieldValue
    }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) return Promise.resolve();
        return Promise.reject(new Error('Passwords do not match'));
      }
    })]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,_,G;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Required fields',
  render: () => <Form layout="vertical" onFinish={v => console.log(v)}>
      <Form.Item label="Store Name" name="storeName" rules={[{
      required: true,
      message: 'Store name is required'
    }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Contact Email" name="contactEmail" rules={[{
      required: true,
      message: 'Contact email is required'
    }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Notes" name="notes">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
}`,...(G=(_=h.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,J,Y;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Optional mark',
  render: () => <Form layout="vertical" requiredMark="optional" onFinish={v => console.log(v)}>
      <Form.Item label="Store Name" name="storeName" rules={[{
      required: true
    }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
}`,...(Y=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Q,X,Z;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With help text',
  render: () => <Form layout="vertical" onFinish={v => console.log(v)}>
      <Form.Item label="API Key" name="apiKey" help="You can find your API key in the developer settings.">
        <Input />
      </Form.Item>
      <Form.Item label="Webhook URL" name="webhook" help="We will send event notifications to this URL." extra="Must use HTTPS protocol.">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Save Configuration</Button>
      </Form.Item>
    </Form>
}`,...(Z=(X=F.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Disabled form',
  render: () => <Form layout="vertical" disabled onFinish={v => console.log(v)}>
      <Form.Item label="Merchant ID" name="merchantId" initialValue="MCH-12345">
        <Input />
      </Form.Item>
      <Form.Item label="Business Name" name="businessName" initialValue="Acme Corp">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,oe,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'All controls',
  render: () => <Form layout="vertical" onFinish={v => console.log(v)} initialValues={{
    status: 'active',
    notifications: true
  }}>
      <Form.Item label="Store Name" name="storeName" rules={[{
      required: true
    }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Category" name="category" rules={[{
      required: true
    }]}>
        <Select options={[{
        label: 'Restaurant',
        value: 'restaurant'
      }, {
        label: 'Grocery',
        value: 'grocery'
      }, {
        label: 'Pharmacy',
        value: 'pharmacy'
      }]} placeholder="Select category" />
      </Form.Item>
      <Form.Item label="Opening Date" name="openingDate">
        <DatePicker style={{
        width: '100%'
      }} />
      </Form.Item>
      <Form.Item label="Delivery Radius (km)" name="deliveryRadius">
        <InputNumber min={1} max={50} style={{
        width: '100%'
      }} />
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Radio.Group>
          <Radio value="active">Active</Radio>
          <Radio value="paused">Paused</Radio>
          <Radio value="closed">Closed</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Enable Notifications" name="notifications" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name="terms" valuePropName="checked" rules={[{
      validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Please accept terms'))
    }]}>
        <Checkbox>I agree to the terms and conditions</Checkbox>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">Submit</Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
}`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var me,se,le;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Dynamic fields',
  render: () => <Form layout="vertical" onFinish={v => console.log(v)}>
      <Form.List name="contacts">
        {(fields, {
        add,
        remove
      }) => <>
            {fields.map(({
          key,
          name,
          ...restField
        }) => <Space key={key} style={{
          display: 'flex',
          marginBottom: 'var(--flock-space-2)'
        }} align="baseline">
                <Form.Item {...restField} name={[name, 'name']} rules={[{
            required: true,
            message: 'Name required'
          }]}>
                  <Input placeholder="Contact name" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'phone']} rules={[{
            required: true,
            message: 'Phone required'
          }]}>
                  <Input placeholder="Phone number" />
                </Form.Item>
                <Button type="text" danger onClick={() => remove(name)}>Remove</Button>
              </Space>)}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<FlockIcons.Plus />}>
                Add Contact
              </Button>
            </Form.Item>
          </>}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
}`,...(le=(se=b.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,ne,ce;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Programmatic control',
  render: () => {
    const [form] = Form.useForm();
    return <Form form={form} layout="vertical" onFinish={v => console.log(v)}>
        <Form.Item label="Name" name="name"><Input /></Form.Item>
        <Form.Item label="Email" name="email"><Input /></Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
            <Button onClick={() => form.setFieldsValue({
            name: 'John Doe',
            email: 'john@example.com'
          })}>
              Fill Example
            </Button>
          </Space>
        </Form.Item>
      </Form>;
  }
}`,...(ce=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ue,pe,de;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Compact layout',
  render: () => <Form layout="vertical" size="small" onFinish={v => console.log(v)}>
      <Form.Item label="Name" name="name"><Input /></Form.Item>
      <Form.Item label="Email" name="email"><Input /></Form.Item>
      <Form.Item label="Phone" name="phone"><Input /></Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="small">Save</Button>
      </Form.Item>
    </Form>
}`,...(de=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var he,Ie,Fe;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Card form',
  render: () => <Card title="Store Settings" style={{
    maxWidth: 480
  }}>
      <Form layout="vertical" onFinish={v => console.log(v)}>
        <Form.Item label="Store Name" name="storeName" rules={[{
        required: true
      }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item label="Logo" name="logo">
          <Upload action="#" listType="picture" maxCount={1}>
            <Button icon={<FlockIcons.Upload />}>Upload Logo</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Save</Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
}`,...(Fe=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};const Ft=["Default","HorizontalLayout","VerticalLayout","InlineLayout","WithValidation","CustomValidator","RequiredFields","OptionalMark","WithHelpText","DisabledForm","AllControls","DynamicFields","ProgrammaticControl","CompactLayout","CardForm"];export{x as AllControls,g as CardForm,v as CompactLayout,d as CustomValidator,i as Default,y as DisabledForm,b as DynamicFields,n as HorizontalLayout,u as InlineLayout,I as OptionalMark,j as ProgrammaticControl,h as RequiredFields,c as VerticalLayout,F as WithHelpText,p as WithValidation,Ft as __namedExportsOrder,It as default};
