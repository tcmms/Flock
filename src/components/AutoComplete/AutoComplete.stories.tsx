import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { AutoComplete } from './AutoComplete'

const defaultOptions = [
  { value: 'React' },
  { value: 'Angular' },
  { value: 'Vue' },
  { value: 'Svelte' },
  { value: 'Next.js' },
  { value: 'Nuxt.js' },
]

/**
 * AutoComplete — auto-complete input with suggestions.
 */
const meta: Meta<typeof AutoComplete> = {
  title: 'Data Entry/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AutoComplete>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Type a framework…',
    style: { width: '100%' },
  },
}

// ─── Custom Options ────────────────────────────────────────
export const CustomOptions: Story = {
  name: 'Custom options',
  args: {
    placeholder: 'Search users…',
    style: { width: '100%' },
    options: [
      { value: 'john', label: 'John Doe — john@example.com' },
      { value: 'jane', label: 'Jane Smith — jane@example.com' },
      { value: 'bob', label: 'Bob Wilson — bob@example.com' },
    ],
  },
}

// ─── With Search ───────────────────────────────────────────
export const WithSearch: Story = {
  name: 'With search',
  render: () => {
    const [options, setOptions] = React.useState<{ value: string }[]>([])

    const handleSearch = (text: string) => {
      setOptions(
        text
          ? [
              { value: `${text}@gmail.com` },
              { value: `${text}@outlook.com` },
              { value: `${text}@yahoo.com` },
            ]
          : [],
      )
    }

    return (
      <AutoComplete
        options={options}
        onSearch={handleSearch}
        placeholder="Enter email…"
        style={{ width: '100%' }}
      />
    )
  },
}

// ─── Disabled ──────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Disabled',
    disabled: true,
    style: { width: '100%' },
  },
}

// ─── Size Variants ─────────────────────────────────────────
export const SizeVariants: Story = {
  name: 'Size variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flock-space-3)' }}>
      <AutoComplete options={defaultOptions} placeholder="Small" size="small" style={{ width: '100%' }} />
      <AutoComplete options={defaultOptions} placeholder="Middle" size="middle" style={{ width: '100%' }} />
      <AutoComplete options={defaultOptions} placeholder="Large" size="large" style={{ width: '100%' }} />
    </div>
  ),
}
