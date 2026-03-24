import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Modal } from './Modal'
import { Button } from '../Button'
import { Space } from 'antd'

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          <p>This is the content of the modal.</p>
          <p>You can place any content here.</p>
        </Modal>
      </>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          title="Custom Footer"
          open={open}
          onCancel={() => setOpen(false)}
          footer={[
            <Button key="back" onClick={() => setOpen(false)}>
              Cancel
            </Button>,
            <Button key="draft" onClick={() => setOpen(false)}>
              Save Draft
            </Button>,
            <Button key="submit" type="primary" onClick={() => setOpen(false)}>
              Submit
            </Button>,
          ]}
        >
          <p>Modal with custom footer buttons.</p>
        </Modal>
      </>
    )
  },
}

export const WithoutFooter: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          title="No Footer"
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
        >
          <p>This modal has no footer buttons.</p>
        </Modal>
      </>
    )
  },
}

export const Centered: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Centered Modal
        </Button>
        <Modal
          title="Centered Modal"
          open={open}
          centered
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          <p>This modal is vertically centered.</p>
        </Modal>
      </>
    )
  },
}

export const CustomWidth: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Wide Modal
        </Button>
        <Modal
          title="Wide Modal"
          open={open}
          width={800}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          <p>This modal has a custom width of 800px, useful for displaying detailed merchant data.</p>
        </Modal>
      </>
    )
  },
}

export const ConfirmDialog: Story = {
  render: () => {
    const [modal, contextHolder] = Modal.useModal()
    return (
      <>
        {contextHolder}
        <Space>
          <Button
            onClick={() =>
              modal.confirm({
                title: 'Are you sure?',
                content: 'This action cannot be undone.',
                onOk: () => console.log('Confirmed'),
              })
            }
          >
            Confirm
          </Button>
          <Button
            danger
            onClick={() =>
              modal.confirm({
                title: 'Delete merchant?',
                content: 'All associated data will be permanently removed.',
                okText: 'Delete',
                okType: 'danger',
                onOk: () => console.log('Deleted'),
              })
            }
          >
            Delete
          </Button>
        </Space>
      </>
    )
  },
}

export const LoadingConfirm: Story = {
  render: () => {
    const [modal, contextHolder] = Modal.useModal()
    return (
      <>
        {contextHolder}
        <Button
          type="primary"
          onClick={() =>
            modal.confirm({
              title: 'Processing payment',
              content: 'Please wait while the transaction is being processed...',
              okText: 'Process',
              onOk: () =>
                new Promise((resolve) => {
                  setTimeout(resolve, 2000)
                }),
            })
          }
        >
          Process Payment
        </Button>
      </>
    )
  },
}
