import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Space, App } from 'antd'

/**
 * Notification — global notification messages triggered programmatically.
 * Uses Ant Design's App.useApp() hook for context-aware notification API.
 */
const meta: Meta = {
  title: 'Feedback/Notification',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <App>
        <Story />
      </App>
    ),
  ],
}

export default meta
type Story = StoryObj

// ─── Default ──────────────────────────────────────────────
export const Default: Story = {
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      return (
        <Button
          onClick={() =>
            notification.info({
              message: 'Notification',
              description: 'This is a default notification message.',
            })
          }
        >
          Default
        </Button>
      )
    }
    return <Comp />
  },
}

// ─── Success ───────────────────────────────────────────────
export const Success: Story = {
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      return (
        <Button
          onClick={() =>
            notification.success({
              message: 'Order confirmed',
              description: 'Your order #2024-1234 has been placed successfully.',
            })
          }
        >
          Success
        </Button>
      )
    }
    return <Comp />
  },
}

// ─── Error ─────────────────────────────────────────────────
export const Error: Story = {
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      return (
        <Button
          danger
          onClick={() =>
            notification.error({
              message: 'Payment failed',
              description: 'Unable to process your payment. Please check your card details.',
            })
          }
        >
          Error
        </Button>
      )
    }
    return <Comp />
  },
}

// ─── Warning ───────────────────────────────────────────────
export const Warning: Story = {
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      return (
        <Button
          onClick={() =>
            notification.warning({
              message: 'Low stock alert',
              description: 'Product "Burger Combo" has only 5 items remaining.',
            })
          }
        >
          Warning
        </Button>
      )
    }
    return <Comp />
  },
}

// ─── Info ──────────────────────────────────────────────────
export const Info: Story = {
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      return (
        <Button
          onClick={() =>
            notification.info({
              message: 'System update',
              description: 'A new version of the portal is available. Refresh to update.',
            })
          }
        >
          Info
        </Button>
      )
    }
    return <Comp />
  },
}

// ─── With Description ──────────────────────────────────────
export const WithDescription: Story = {
  name: 'With description',
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      return (
        <Button
          onClick={() =>
            notification.open({
              message: 'New order received',
              description:
                'Order #2024-5678 from John Doe — 3 items totaling $45.90. Estimated delivery: 30 minutes.',
            })
          }
        >
          With description
        </Button>
      )
    }
    return <Comp />
  },
}

// ─── With Button ───────────────────────────────────────────
export const WithButton: Story = {
  name: 'With button',
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      const openNotification = () => {
        const key = `open${Date.now()}`
        notification.open({
          message: 'Confirm action',
          description: 'Are you sure you want to archive this store?',
          btn: (
            <Space>
              <Button size="small" onClick={() => notification.destroy(key)}>
                Cancel
              </Button>
              <Button type="primary" size="small" onClick={() => notification.destroy(key)}>
                Confirm
              </Button>
            </Space>
          ),
          key,
        })
      }
      return <Button onClick={openNotification}>With button</Button>
    }
    return <Comp />
  },
}

// ─── Placement ─────────────────────────────────────────────
export const Placement: Story = {
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      const placements = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const
      return (
        <Space wrap>
          {placements.map((placement) => (
            <Button
              key={placement}
              onClick={() =>
                notification.info({
                  message: `Notification — ${placement}`,
                  description: `This notification appears at ${placement}.`,
                  placement,
                })
              }
            >
              {placement}
            </Button>
          ))}
        </Space>
      )
    }
    return <Comp />
  },
}

// ─── Duration ──────────────────────────────────────────────
export const Duration: Story = {
  render: () => {
    const Comp = () => {
      const { notification } = App.useApp()
      return (
        <Space>
          <Button onClick={() => notification.info({ message: 'Quick', description: 'Closes in 2s', duration: 2 })}>
            2 seconds
          </Button>
          <Button onClick={() => notification.info({ message: 'Sticky', description: 'Will not auto-close', duration: 0 })}>
            No auto-close
          </Button>
        </Space>
      )
    }
    return <Comp />
  },
}
