import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const NotificationIcon = () => (
  <div style={{
    width: 'var(--flock-height-base)',
    height: 'var(--flock-height-base)',
    borderRadius: 'var(--flock-radius-base)',
    background: 'var(--flock-color-fill-tertiary)',
  }} />
)

/**
 * Badge — status dot or count indicator.
 * Built on Ant Design Badge with Flock DS tokens.
 */
const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number', description: 'Number to show' },
    dot: { control: 'boolean', description: 'Show as dot' },
    status: { control: 'select', options: ['default', 'success', 'processing', 'error', 'warning'] },
    size: { control: 'select', options: ['default', 'small'] },
    showZero: { control: 'boolean' },
    overflowCount: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: () => <Badge count={5}><NotificationIcon /></Badge>,
}

export const Dot: Story = {
  render: () => <Badge dot><NotificationIcon /></Badge>,
}

export const StatusDefault: Story = {
  name: 'Status default',
  args: { status: 'default', text: 'Default' },
}

export const StatusSuccess: Story = {
  name: 'Status success',
  args: { status: 'success', text: 'Success' },
}

export const StatusError: Story = {
  name: 'Status error',
  args: { status: 'error', text: 'Error' },
}

export const StatusWarning: Story = {
  name: 'Status warning',
  args: { status: 'warning', text: 'Warning' },
}

export const StatusProcessing: Story = {
  name: 'Status processing',
  args: { status: 'processing', text: 'Processing' },
}

export const Small: Story = {
  render: () => <Badge count={5} size="small"><NotificationIcon /></Badge>,
}

export const ShowZero: Story = {
  name: 'Show zero',
  render: () => <Badge count={0} showZero><NotificationIcon /></Badge>,
}

export const OverflowCount: Story = {
  name: 'Overflow count',
  render: () => <Badge count={999} overflowCount={99}><NotificationIcon /></Badge>,
}
