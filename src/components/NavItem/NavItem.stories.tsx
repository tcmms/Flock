import type { Meta, StoryObj } from '@storybook/react'
import { NavItem } from './NavItem'

const PlaceholderIcon = () => (
  <div style={{ width: 20, height: 20, background: 'rgba(255, 255, 255, 0.3)', borderRadius: 'var(--flock-radius-sm)' }} />
)

/**
 * NavItem — sidebar navigation item.
 * Supports selected state, signifier pill, notification dot, and doc tag.
 */
const meta: Meta<typeof NavItem> = {
  title: 'Navigation/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Item label' },
    isSelected: { control: 'boolean', description: 'Selected state' },
    signifier: { control: 'number', description: 'Blue pill count' },
    hasDot: { control: 'boolean', description: 'Red notification dot' },
    hasDoc: { control: 'boolean', description: 'Document tag' },
    isCollapsed: { control: 'boolean', description: 'Collapsed state' },
    icon: { control: { disable: true } },
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
type Story = StoryObj<typeof NavItem>

export const Default: Story = {
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" />,
}

export const Selected: Story = {
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" isSelected />,
}

export const WithSignifier: Story = {
  name: 'With signifier',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Notifications" signifier={3} />,
}

export const WithDot: Story = {
  name: 'With dot',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Notifications" hasDot />,
}

export const WithDocTag: Story = {
  name: 'With doc tag',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Learn & Grow" hasDoc />,
}

export const Collapsed: Story = {
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" isCollapsed />,
}

export const CollapsedSelected: Story = {
  name: 'Collapsed selected',
  render: () => <NavItem icon={<PlaceholderIcon />} label="Live Orders" isCollapsed isSelected />,
}
