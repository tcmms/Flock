import type { Meta, StoryObj } from '@storybook/react'
import { NavGroup } from './NavGroup'

/**
 * NavGroup — sidebar navigation section label.
 * Displays a category heading for a group of NavItems.
 */
const meta: Meta<typeof NavGroup> = {
  title: 'Navigation/NavGroup',
  component: NavGroup,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Section label text' },
    collapsed: { control: 'boolean', description: 'Collapsed state' },
  },
  decorators: [
    (Story) => (
      <div style={{ background: 'var(--flock-sidebar-bg-gradient)', padding: 'var(--flock-padding-xs)' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof NavGroup>

export const Expanded: Story = {
  args: { label: 'ORDERS', collapsed: false },
}

export const Collapsed: Story = {
  args: { label: 'ORDERS', collapsed: true },
}
