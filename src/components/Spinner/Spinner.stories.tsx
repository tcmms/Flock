import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

/**
 * Spinner — loading indicator.
 * Built on Ant Design Spin with Flock DS tokens.
 */
const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'default', 'large'] },
    spinning: { control: 'boolean' },
    delay: { control: 'number' },
    tip: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'small' },
}

export const Large: Story = {
  args: { size: 'large' },
}

export const WithTip: Story = {
  name: 'With tip',
  args: {
    tip: 'Loading…',
    children: (
      <div style={{
        padding: 'var(--flock-padding-xl)',
        background: 'var(--flock-color-bg-container)',
        borderRadius: 'var(--flock-radius-base)',
      }}>
        Content area
      </div>
    ),
  },
}

export const WrappingContent: Story = {
  name: 'Wrapping content',
  args: {
    children: (
      <div style={{
        padding: 'var(--flock-padding-xl)',
        background: 'var(--flock-color-bg-container)',
        borderRadius: 'var(--flock-radius-base)',
      }}>
        This content is loading…
      </div>
    ),
  },
}

export const Delayed: Story = {
  args: {
    delay: 500,
    children: (
      <div style={{
        padding: 'var(--flock-padding-xl)',
        background: 'var(--flock-color-bg-container)',
        borderRadius: 'var(--flock-radius-base)',
      }}>
        Shows spinner after 500ms delay
      </div>
    ),
  },
}
