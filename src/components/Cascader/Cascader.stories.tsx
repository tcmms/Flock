import type { Meta, StoryObj } from '@storybook/react'
import { Cascader } from './Cascader'

const options = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      {
        value: 'china',
        label: 'China',
        children: [
          { value: 'beijing', label: 'Beijing' },
          { value: 'shanghai', label: 'Shanghai' },
        ],
      },
      {
        value: 'japan',
        label: 'Japan',
        children: [
          { value: 'tokyo', label: 'Tokyo' },
          { value: 'osaka', label: 'Osaka' },
        ],
      },
    ],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [
      {
        value: 'uk',
        label: 'United Kingdom',
        children: [
          { value: 'london', label: 'London' },
          { value: 'manchester', label: 'Manchester' },
        ],
      },
      {
        value: 'france',
        label: 'France',
        children: [
          { value: 'paris', label: 'Paris' },
          { value: 'lyon', label: 'Lyon' },
        ],
      },
    ],
  },
]

/**
 * Cascader — cascade selection for picking values from a hierarchical set of options.
 */
const meta: Meta<typeof Cascader> = {
  title: 'Data Entry/Cascader',
  component: Cascader,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Cascader>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    options,
    placeholder: 'Select location…',
    style: { width: 280 },
  },
}

// ─── Multiple ──────────────────────────────────────────────
export const Multiple: Story = {
  args: {
    options,
    placeholder: 'Select locations…',
    multiple: true,
    style: { width: 280 },
  },
}

// ─── With Search ───────────────────────────────────────────
export const WithSearch: Story = {
  name: 'With search',
  args: {
    options,
    placeholder: 'Search location…',
    showSearch: true,
    style: { width: 280 },
  },
}

// ─── Disabled ──────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    options,
    placeholder: 'Disabled',
    disabled: true,
    style: { width: 280 },
  },
}

// ─── Custom Render ─────────────────────────────────────────
export const CustomRender: Story = {
  name: 'Custom render',
  args: {
    options,
    placeholder: 'Select location…',
    style: { width: 320 },
    displayRender: (labels: string[]) => labels.join(' > '),
  },
}

// ─── Size Variants ─────────────────────────────────────────
export const SizeVariants: Story = {
  name: 'Size variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flock-space-3)' }}>
      <Cascader options={options} placeholder="Small" size="small" style={{ width: 280 }} />
      <Cascader options={options} placeholder="Middle" size="middle" style={{ width: 280 }} />
      <Cascader options={options} placeholder="Large" size="large" style={{ width: 280 }} />
    </div>
  ),
}
