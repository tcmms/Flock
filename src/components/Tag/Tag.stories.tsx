import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

/**
 * Tag — categorization label.
 * Built on Ant Design Tag with Flock DS tokens.
 */
const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['default', 'success', 'warning', 'error', 'processing'] },
    closable: { control: 'boolean' },
    bordered: { control: 'boolean' },
    icon: { control: { disable: true } },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: { children: 'Tag' },
}

export const Success: Story = {
  args: { children: 'Active', color: 'success' },
}

export const Warning: Story = {
  args: { children: 'Pending', color: 'warning' },
}

export const Error: Story = {
  args: { children: 'Failed', color: 'error' },
}

export const Processing: Story = {
  args: { children: 'Syncing', color: 'processing' },
}

export const Closable: Story = {
  args: { children: 'Closable', closable: true },
}

export const WithIcon: Story = {
  name: 'With icon',
  render: () => <Tag icon={<CheckIcon />}>Verified</Tag>,
}

export const Bordered: Story = {
  args: { children: 'Bordered', bordered: true },
}

export const NotBordered: Story = {
  name: 'Not bordered',
  args: { children: 'Borderless', bordered: false },
}
