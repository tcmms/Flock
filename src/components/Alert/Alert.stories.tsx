import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { Button } from '../Button'
import { Space } from 'antd'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    message: 'Default alert message',
  },
}

export const Success: Story = {
  args: {
    message: 'Payment processed successfully',
    type: 'success',
    showIcon: true,
  },
}

export const Info: Story = {
  args: {
    message: 'Your account verification is pending',
    type: 'info',
    showIcon: true,
  },
}

export const Warning: Story = {
  args: {
    message: 'Your subscription expires in 3 days',
    type: 'warning',
    showIcon: true,
  },
}

export const Error: Story = {
  args: {
    message: 'Transaction failed',
    type: 'error',
    showIcon: true,
  },
}

export const WithDescription: Story = {
  args: {
    message: 'Account Verification Required',
    description:
      'Please verify your identity to continue processing transactions. Upload your business documents in the settings page.',
    type: 'warning',
    showIcon: true,
  },
}

export const Closable: Story = {
  args: {
    message: 'This alert can be dismissed',
    description: 'Click the close button to remove this notification.',
    type: 'info',
    showIcon: true,
    closable: true,
  },
}

export const WithAction: Story = {
  render: () => (
    <Alert
      message="New features available"
      description="We have released new reporting tools. Check them out now."
      type="info"
      showIcon
      action={
        <Space direction="vertical">
          <Button size="small" type="primary">
            Learn More
          </Button>
          <Button size="small" type="link">
            Dismiss
          </Button>
        </Space>
      }
    />
  ),
}

export const Banner: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="Scheduled maintenance on March 25th from 2:00 AM to 4:00 AM UTC." type="info" banner />
      <Alert message="System is operating normally." type="success" banner />
      <Alert message="High transaction volume detected." type="warning" banner />
    </Space>
  ),
}
