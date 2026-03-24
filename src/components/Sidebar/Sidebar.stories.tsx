import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'

/**
 * Sidebar — main navigation organism for the Merchant Portal.
 * Contains header with Snoonu wordmark, store selector, navigation sections, and footer.
 * Supports expanded (280px) and collapsed (78px) states.
 */
const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: { control: 'boolean', description: 'Collapsed state' },
    storeName: { control: 'text', description: 'Store name' },
    merchantEmail: { control: 'text', description: 'Merchant email' },
    activeItem: {
      control: 'select',
      options: [
        'live-orders', 'order-history', 'notifications',
        'menu', 'working-hours', 'business-profile',
        'advertisements', 'discounts', 'analytics',
        'payouts', 'dbs', 'account-contacts', 'learn-grow',
      ],
      description: 'Active nav item ID',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Expanded: Story = {
  args: {
    isCollapsed: false,
    activeItem: 'live-orders',
  },
}

export const Collapsed: Story = {
  args: {
    isCollapsed: true,
    activeItem: 'live-orders',
  },
}

export const Interactive: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    const [active, setActive] = useState('live-orders')
    return (
      <Sidebar
        isCollapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        activeItem={active}
        onItemClick={setActive}
      />
    )
  },
}
