import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Space, App } from 'antd'

/**
 * Message — global message notifications triggered programmatically.
 * Uses Ant Design's App.useApp() hook for context-aware message API.
 */
const meta: Meta = {
  title: 'Feedback/Message',
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
      const { message } = App.useApp()
      return <Button onClick={() => message.info('Default message')}>Default</Button>
    }
    return <Comp />
  },
}

// ─── Success ───────────────────────────────────────────────
export const Success: Story = {
  render: () => {
    const Comp = () => {
      const { message } = App.useApp()
      return <Button onClick={() => message.success('Operation completed successfully')}>Success</Button>
    }
    return <Comp />
  },
}

// ─── Error ─────────────────────────────────────────────────
export const Error: Story = {
  render: () => {
    const Comp = () => {
      const { message } = App.useApp()
      return <Button danger onClick={() => message.error('Something went wrong')}>Error</Button>
    }
    return <Comp />
  },
}

// ─── Warning ───────────────────────────────────────────────
export const Warning: Story = {
  render: () => {
    const Comp = () => {
      const { message } = App.useApp()
      return <Button onClick={() => message.warning('Please check your input')}>Warning</Button>
    }
    return <Comp />
  },
}

// ─── Info ──────────────────────────────────────────────────
export const Info: Story = {
  render: () => {
    const Comp = () => {
      const { message } = App.useApp()
      return <Button onClick={() => message.info('New updates available')}>Info</Button>
    }
    return <Comp />
  },
}

// ─── Loading ───────────────────────────────────────────────
export const Loading: Story = {
  render: () => {
    const Comp = () => {
      const { message } = App.useApp()
      return <Button onClick={() => message.loading('Processing…', 2)}>Loading</Button>
    }
    return <Comp />
  },
}

// ─── Duration ──────────────────────────────────────────────
export const Duration: Story = {
  render: () => {
    const Comp = () => {
      const { message } = App.useApp()
      return (
        <Space>
          <Button onClick={() => message.success({ content: '1 second', duration: 1 })}>1s</Button>
          <Button onClick={() => message.success({ content: '5 seconds', duration: 5 })}>5s</Button>
          <Button onClick={() => message.success({ content: '10 seconds', duration: 10 })}>10s</Button>
        </Space>
      )
    }
    return <Comp />
  },
}

// ─── With Promise ──────────────────────────────────────────
export const WithPromise: Story = {
  name: 'With promise',
  render: () => {
    const Comp = () => {
      const { message } = App.useApp()
      const handleClick = () => {
        message
          .loading({ content: 'Saving…', duration: 1 })
          .then(() => message.success({ content: 'Saved!', duration: 1 }))
          .then(() => message.info({ content: 'Done', duration: 1 }))
      }
      return <Button type="primary" onClick={handleClick}>Sequential messages</Button>
    }
    return <Comp />
  },
}
