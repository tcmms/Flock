import type { Meta, StoryObj } from '@storybook/react'
import { CustomerTierBadge } from './CustomerTierBadge'

/**
 * CustomerTierBadge — compact pill indicating customer membership tier.
 * Used in order cards and customer profiles to surface membership status at a glance.
 */
const meta: Meta<typeof CustomerTierBadge> = {
  title: 'Data Display/CustomerTierBadge',
  component: CustomerTierBadge,
  tags: ['autodocs'],
  argTypes: {
    tier: {
      control: 'select',
      options: ['splus', 'platinum', 'gold'],
      description: 'Customer membership tier',
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomerTierBadge>

export const Default: Story = {
  args: { tier: 'splus' },
}

export const SPlus: Story = {
  name: 'S+ tier',
  args: { tier: 'splus' },
}

export const Platinum: Story = {
  name: 'Platinum tier',
  args: { tier: 'platinum' },
}

export const Gold: Story = {
  name: 'Gold tier',
  args: { tier: 'gold' },
}

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--flock-padding-xs)' }}>
      <CustomerTierBadge tier="splus" />
      <CustomerTierBadge tier="platinum" />
      <CustomerTierBadge tier="gold" />
    </div>
  ),
}

export const InContext: Story = {
  name: 'In context (customer name)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flock-padding-xs)' }}>
      {(['splus', 'platinum', 'gold'] as const).map((tier) => (
        <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: 'var(--flock-padding-xxs)' }}>
          <span style={{
            fontSize: 'var(--flock-font-size-base)',
            fontWeight: 'var(--flock-font-weight-medium)',
            color: 'var(--flock-color-text-secondary)',
            fontFamily: 'var(--flock-font-family)',
          }}>
            Ahmed Al-Rashidi
          </span>
          <CustomerTierBadge tier={tier} />
        </div>
      ))}
    </div>
  ),
}
