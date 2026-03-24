import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'
import { Button } from '../Button'
import { Select } from '../Select'
import { DatePicker } from '../DatePicker'
import { Switch } from '../Switch'
import { Checkbox } from '../Checkbox'
import { Radio, RadioGroup } from '../Radio'
import { InputNumber } from '../InputNumber'
import { Upload } from '../Upload'
import { Card } from '../Card'
import { Input, Space } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

/**
 * Form — collects, validates, and submits user input.
 * Built on Ant Design Form with Flock DS tokens via FlockProvider.
 * Supports horizontal/vertical/inline layouts, validation, dynamic fields, and programmatic control.
 */
const meta: Meta<typeof Form> = {
  title: 'Data Entry/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'vertical', 'inline'] },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'middle', 'large'] },
  },
}

export default meta
type Story = StoryObj<typeof Form>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <Form layout="vertical" onFinish={(values) => console.log('Submit:', values)}>
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  ),
}

// ─── Layouts ───────────────────────────────────────────────
export const HorizontalLayout: Story = {
  name: 'Horizontal layout',
  render: () => (
    <Form layout="horizontal" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={(v) => console.log(v)}>
      <Form.Item label="Email" name="email"><Input /></Form.Item>
      <Form.Item label="Phone" name="phone"><Input /></Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  ),
}

export const VerticalLayout: Story = {
  name: 'Vertical layout',
  render: () => (
    <Form layout="vertical" onFinish={(v) => console.log(v)}>
      <Form.Item label="First Name" name="firstName"><Input /></Form.Item>
      <Form.Item label="Last Name" name="lastName"><Input /></Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  ),
}

export const InlineLayout: Story = {
  name: 'Inline layout',
  render: () => (
    <Form layout="inline" onFinish={(v) => console.log(v)}>
      <Form.Item label="Name" name="name"><Input placeholder="Enter name" /></Form.Item>
      <Form.Item label="Email" name="email"><Input placeholder="Enter email" /></Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Search</Button>
      </Form.Item>
    </Form>
  ),
}

// ─── Validation ────────────────────────────────────────────
export const WithValidation: Story = {
  name: 'With validation',
  render: () => (
    <Form layout="vertical" onFinish={(v) => console.log('Success:', v)} onFinishFailed={(e) => console.log('Failed:', e)}>
      <Form.Item label="Email" name="email" rules={[
        { required: true, message: 'Please enter your email' },
        { type: 'email', message: 'Please enter a valid email' },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[
        { required: true, message: 'Please enter your password' },
        { min: 8, message: 'Password must be at least 8 characters' },
      ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  ),
}

export const CustomValidator: Story = {
  name: 'Custom validator',
  render: () => (
    <Form layout="vertical" onFinish={(v) => console.log(v)}>
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) return Promise.resolve()
              return Promise.reject(new Error('Passwords do not match'))
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  ),
}

export const RequiredFields: Story = {
  name: 'Required fields',
  render: () => (
    <Form layout="vertical" onFinish={(v) => console.log(v)}>
      <Form.Item label="Store Name" name="storeName" rules={[{ required: true, message: 'Store name is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Contact Email" name="contactEmail" rules={[{ required: true, message: 'Contact email is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Notes" name="notes">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  ),
}

export const OptionalMark: Story = {
  name: 'Optional mark',
  render: () => (
    <Form layout="vertical" requiredMark="optional" onFinish={(v) => console.log(v)}>
      <Form.Item label="Store Name" name="storeName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  ),
}

// ─── Help text ─────────────────────────────────────────────
export const WithHelpText: Story = {
  name: 'With help text',
  render: () => (
    <Form layout="vertical" onFinish={(v) => console.log(v)}>
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
  ),
}

// ─── Disabled ──────────────────────────────────────────────
export const DisabledForm: Story = {
  name: 'Disabled form',
  render: () => (
    <Form layout="vertical" disabled onFinish={(v) => console.log(v)}>
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
  ),
}

// ─── All controls ──────────────────────────────────────────
export const AllControls: Story = {
  name: 'All controls',
  render: () => (
    <Form layout="vertical" onFinish={(v) => console.log(v)} initialValues={{ status: 'active', notifications: true }}>
      <Form.Item label="Store Name" name="storeName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Category" name="category" rules={[{ required: true }]}>
        <Select options={[
          { label: 'Restaurant', value: 'restaurant' },
          { label: 'Grocery', value: 'grocery' },
          { label: 'Pharmacy', value: 'pharmacy' },
        ]} placeholder="Select category" />
      </Form.Item>
      <Form.Item label="Opening Date" name="openingDate">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Delivery Radius (km)" name="deliveryRadius">
        <InputNumber min={1} max={50} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Status" name="status">
        <RadioGroup>
          <Radio value="active">Active</Radio>
          <Radio value="paused">Paused</Radio>
          <Radio value="closed">Closed</Radio>
        </RadioGroup>
      </Form.Item>
      <Form.Item label="Enable Notifications" name="notifications" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name="terms" valuePropName="checked" rules={[{
        validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Please accept terms')),
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
  ),
}

// ─── Dynamic fields (Form.List) ────────────────────────────
export const DynamicFields: Story = {
  name: 'Dynamic fields',
  render: () => (
    <Form layout="vertical" onFinish={(v) => console.log(v)}>
      <Form.List name="contacts">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 'var(--flock-space-2)' }} align="baseline">
                <Form.Item {...restField} name={[name, 'name']} rules={[{ required: true, message: 'Name required' }]}>
                  <Input placeholder="Contact name" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'phone']} rules={[{ required: true, message: 'Phone required' }]}>
                  <Input placeholder="Phone number" />
                </Form.Item>
                <Button type="text" danger onClick={() => remove(name)}>Remove</Button>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<FlockIcons.Plus />}>
                Add Contact
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  ),
}

// ─── Programmatic control ──────────────────────────────────
export const ProgrammaticControl: Story = {
  name: 'Programmatic control',
  render: () => {
    const [form] = Form.useForm()
    return (
      <Form form={form} layout="vertical" onFinish={(v) => console.log(v)}>
        <Form.Item label="Name" name="name"><Input /></Form.Item>
        <Form.Item label="Email" name="email"><Input /></Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
            <Button onClick={() => form.setFieldsValue({ name: 'John Doe', email: 'john@example.com' })}>
              Fill Example
            </Button>
          </Space>
        </Form.Item>
      </Form>
    )
  },
}

// ─── Compact layout ────────────────────────────────────────
export const CompactLayout: Story = {
  name: 'Compact layout',
  render: () => (
    <Form layout="vertical" size="small" onFinish={(v) => console.log(v)}>
      <Form.Item label="Name" name="name"><Input /></Form.Item>
      <Form.Item label="Email" name="email"><Input /></Form.Item>
      <Form.Item label="Phone" name="phone"><Input /></Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="small">Save</Button>
      </Form.Item>
    </Form>
  ),
}

// ─── Card form ─────────────────────────────────────────────
export const CardForm: Story = {
  name: 'Card form',
  render: () => (
    <Card title="Store Settings" style={{ maxWidth: 480 }}>
      <Form layout="vertical" onFinish={(v) => console.log(v)}>
        <Form.Item label="Store Name" name="storeName" rules={[{ required: true }]}>
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
  ),
}
