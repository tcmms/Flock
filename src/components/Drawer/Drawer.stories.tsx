import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Drawer } from './Drawer'
import { Button } from '../Button'
import { Form } from '../Form'
import { Input, Space } from 'antd'

const meta: Meta<typeof Drawer> = {
  title: 'Feedback/Drawer',
  component: Drawer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          title="Merchant Details"
          onClose={() => setOpen(false)}
          open={open}
        >
          <p>Name: Acme Corp</p>
          <p>Status: Active</p>
          <p>Created: 2024-01-15</p>
        </Drawer>
      </>
    )
  },
}

export const LeftPlacement: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Left Drawer
        </Button>
        <Drawer
          title="Navigation"
          placement="left"
          onClose={() => setOpen(false)}
          open={open}
        >
          <p>Dashboard</p>
          <p>Merchants</p>
          <p>Transactions</p>
          <p>Settings</p>
        </Drawer>
      </>
    )
  },
}

export const TopPlacement: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Top Drawer
        </Button>
        <Drawer
          title="Notifications"
          placement="top"
          onClose={() => setOpen(false)}
          open={open}
        >
          <p>You have 3 pending approvals.</p>
          <p>New merchant registered: Store XYZ.</p>
        </Drawer>
      </>
    )
  },
}

export const BottomPlacement: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Bottom Drawer
        </Button>
        <Drawer
          title="Quick Actions"
          placement="bottom"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Space>
            <Button type="primary">Create Merchant</Button>
            <Button>Export Report</Button>
            <Button>View Logs</Button>
          </Space>
        </Drawer>
      </>
    )
  },
}

export const ExtraActions: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          title="Order Details"
          onClose={() => setOpen(false)}
          open={open}
          extra={
            <Space>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="primary" onClick={() => setOpen(false)}>
                Approve
              </Button>
            </Space>
          }
        >
          <p>Order #12345</p>
          <p>Amount: $250.00</p>
          <p>Status: Pending Review</p>
        </Drawer>
      </>
    )
  },
}

export const LargeSize: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Large Drawer
        </Button>
        <Drawer
          title="Transaction History"
          size="large"
          onClose={() => setOpen(false)}
          open={open}
        >
          <p>Detailed transaction history and analytics would be displayed here.</p>
        </Drawer>
      </>
    )
  },
}

export const WithFormInside: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Add Merchant
        </Button>
        <Drawer
          title="New Merchant"
          onClose={() => setOpen(false)}
          open={open}
          extra={
            <Space>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="primary" onClick={() => setOpen(false)}>
                Save
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" onFinish={(values) => console.log('Submit:', values)}>
            <Form.Item label="Business Name" name="name" rules={[{ required: true }]}>
              <Input placeholder="Enter business name" />
            </Form.Item>
            <Form.Item label="Contact Email" name="email" rules={[{ required: true }]}>
              <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="Enter phone number" />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input.TextArea rows={3} placeholder="Enter address" />
            </Form.Item>
          </Form>
        </Drawer>
      </>
    )
  },
}
