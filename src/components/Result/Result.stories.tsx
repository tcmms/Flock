import type { Meta, StoryObj } from '@storybook/react'
import { Result } from './Result'
import { Button } from '../Button'

/**
 * Result — display operation result feedback pages.
 */
const meta: Meta<typeof Result> = {
  title: 'Feedback/Result',
  component: Result,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['success', 'error', 'info', 'warning', '403', '404', '500'] },
    title: { control: 'text' },
    subTitle: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Result>

// ─── Default ──────────────────────────────────────────────
export const Default: Story = {
  args: {
    status: 'info',
    title: 'Your request has been processed',
    subTitle: 'Check your details below.',
  },
}

// ─── Success ───────────────────────────────────────────────
export const Success: Story = {
  args: {
    status: 'success',
    title: 'Order placed successfully',
    subTitle: 'Order #2024-01-1234 — your order has been confirmed.',
  },
}

// ─── Info ──────────────────────────────────────────────────
export const Info: Story = {
  args: {
    status: 'info',
    title: 'Account verification pending',
    subTitle: 'Please check your email for the verification link.',
  },
}

// ─── Warning ───────────────────────────────────────────────
export const Warning: Story = {
  args: {
    status: 'warning',
    title: 'Subscription expiring soon',
    subTitle: 'Your subscription will expire in 3 days. Please renew to avoid interruption.',
  },
}

// ─── Error ─────────────────────────────────────────────────
export const Error: Story = {
  args: {
    status: 'error',
    title: 'Payment failed',
    subTitle: 'There was an issue processing your payment. Please try again.',
  },
}

// ─── 403 ───────────────────────────────────────────────────
export const Forbidden: Story = {
  name: '403',
  args: {
    status: '403',
    title: '403 — Forbidden',
    subTitle: 'You do not have permission to access this resource.',
  },
}

// ─── 404 ───────────────────────────────────────────────────
export const NotFound: Story = {
  name: '404',
  args: {
    status: '404',
    title: '404 — Not Found',
    subTitle: 'The page you are looking for does not exist.',
  },
}

// ─── 500 ───────────────────────────────────────────────────
export const ServerError: Story = {
  name: '500',
  args: {
    status: '500',
    title: '500 — Server Error',
    subTitle: 'Something went wrong on our end. Please try again later.',
  },
}

// ─── Custom Icon ───────────────────────────────────────────
export const CustomIcon: Story = {
  name: 'Custom icon',
  args: {
    icon: '🎉',
    title: 'Welcome aboard!',
    subTitle: 'Your account has been created successfully.',
  },
}

// ─── With Actions ──────────────────────────────────────────
export const WithActions: Story = {
  name: 'With actions',
  render: () => (
    <Result
      status="success"
      title="Store published successfully"
      subTitle="Your store is now live and visible to customers."
      extra={[
        <Button type="primary" key="dashboard">Go to Dashboard</Button>,
        <Button key="orders">View Orders</Button>,
      ]}
    />
  ),
}
