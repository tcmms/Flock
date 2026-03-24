import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Select } from './Select'

const defaultOptions = [
  { label: 'Fast Food', value: 'fast-food' },
  { label: 'Beverages', value: 'beverages' },
  { label: 'Desserts', value: 'desserts' },
  { label: 'Groceries', value: 'groceries' },
  { label: 'Pharmacy', value: 'pharmacy' },
]

const groupOptions = [
  {
    label: 'Food & Beverage',
    options: [
      { label: 'Fast Food', value: 'fast-food' },
      { label: 'Beverages', value: 'beverages' },
      { label: 'Desserts', value: 'desserts' },
    ],
  },
  {
    label: 'Retail',
    options: [
      { label: 'Groceries', value: 'groceries' },
      { label: 'Pharmacy', value: 'pharmacy' },
      { label: 'Electronics', value: 'electronics' },
    ],
  },
]

/**
 * Select — dropdown selection control.
 * Full Ant Design Select re-export with Flock DS tokens.
 * Supports single, multiple, tags, search, grouping, and custom rendering.
 */
const meta: Meta<typeof Select> = {
  title: 'General/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    status: { control: 'select', options: ['', 'error', 'warning'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    showSearch: { control: 'boolean' },
    mode: { control: 'select', options: [undefined, 'multiple', 'tags'] },
    placeholder: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'var(--flock-padding-3xl)', minWidth: '240px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Select>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    placeholder: 'Select an option…',
    options: defaultOptions,
    style: { width: '100%' },
  },
}

// ─── Sizes ─────────────────────────────────────────────────
export const Small: Story = {
  args: {
    placeholder: 'Small',
    options: defaultOptions,
    size: 'small',
    style: { width: '100%' },
  },
}

export const Large: Story = {
  args: {
    placeholder: 'Large',
    options: defaultOptions,
    size: 'large',
    style: { width: '100%' },
  },
}

// ─── Status ────────────────────────────────────────────────
export const Error: Story = {
  args: {
    placeholder: 'Error state',
    options: defaultOptions,
    status: 'error',
    style: { width: '100%' },
  },
}

export const Warning: Story = {
  args: {
    placeholder: 'Warning state',
    options: defaultOptions,
    status: 'warning',
    style: { width: '100%' },
  },
}

// ─── States ────────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    options: defaultOptions,
    disabled: true,
    style: { width: '100%' },
  },
}

export const Loading: Story = {
  args: {
    placeholder: 'Loading…',
    options: defaultOptions,
    loading: true,
    style: { width: '100%' },
  },
}

// ─── Modes ─────────────────────────────────────────────────
export const Multiple: Story = {
  args: {
    placeholder: 'Select multiple…',
    options: defaultOptions,
    mode: 'multiple',
    defaultValue: ['fast-food', 'desserts'],
    style: { width: '100%' },
  },
}

export const Tags: Story = {
  args: {
    placeholder: 'Enter tags…',
    options: defaultOptions,
    mode: 'tags',
    style: { width: '100%' },
  },
}

// ─── Features ──────────────────────────────────────────────
export const Search: Story = {
  args: {
    placeholder: 'Search options…',
    options: defaultOptions,
    showSearch: true,
    style: { width: '100%' },
  },
}

export const AllowClear: Story = {
  name: 'Allow clear',
  args: {
    placeholder: 'Select…',
    options: defaultOptions,
    allowClear: true,
    defaultValue: 'fast-food',
    style: { width: '100%' },
  },
}

export const MaxTagCount: Story = {
  name: 'Max tag count',
  args: {
    placeholder: 'Select multiple…',
    options: defaultOptions,
    mode: 'multiple',
    maxTagCount: 2,
    defaultValue: ['fast-food', 'desserts', 'groceries', 'pharmacy'],
    style: { width: '100%' },
  },
}

// ─── Group ─────────────────────────────────────────────────
export const GroupOptions: Story = {
  name: 'Group options',
  args: {
    placeholder: 'Select from groups…',
    options: groupOptions,
    style: { width: '100%' },
  },
}

// ─── Custom render ─────────────────────────────────────────
export const CustomRender: Story = {
  name: 'Custom render',
  render: () => (
    <Select
      placeholder="Select a product…"
      style={{ width: '100%' }}
      optionRender={(option) => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{option.label}</span>
          <span style={{ color: 'var(--flock-color-text-tertiary)', fontSize: 'var(--flock-font-size-sm)' }}>
            #{option.value}
          </span>
        </div>
      )}
      options={[
        { label: 'Shawarma Combo', value: 'QAR 25.00' },
        { label: 'Iced Latte', value: 'QAR 18.00' },
        { label: 'Cheesecake Slice', value: 'QAR 32.00' },
      ]}
    />
  ),
}

// ─── Matrix ────────────────────────────────────────────────
const sizes = ['small', 'middle', 'large'] as const
const statuses = [
  { label: 'default', value: '' as const },
  { label: 'error', value: 'error' as const },
  { label: 'warning', value: 'warning' as const },
]

const sectionHeaderStyle: React.CSSProperties = {
  fontSize: 'var(--flock-font-size-sm)',
  color: 'var(--flock-color-text-tertiary)',
  marginBottom: 'var(--flock-space-3)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '80px repeat(3, 1fr)',
  gap: 'var(--flock-space-3)',
  alignItems: 'center',
  marginBottom: 'var(--flock-space-8)',
}

const rowLabelStyle: React.CSSProperties = {
  fontSize: 'var(--flock-font-size-sm)',
  color: 'var(--flock-color-text-secondary)',
}

const colHeaderStyle: React.CSSProperties = {
  fontSize: 'var(--flock-font-size-sm)',
  color: 'var(--flock-color-text-tertiary)',
  textAlign: 'center',
}

export const Matrix: Story = {
  render: () => (
    <div>
      <div style={sectionHeaderStyle}>Status × Size</div>
      <div style={gridStyle}>
        <div />
        {sizes.map((s) => (
          <div key={s} style={colHeaderStyle}>{s}</div>
        ))}

        {statuses.map(({ label, value }) => (
          <React.Fragment key={label}>
            <div style={rowLabelStyle}>{label}</div>
            {sizes.map((s) => (
              <Select
                key={s}
                size={s}
                status={value || undefined}
                placeholder={label}
                options={defaultOptions}
                style={{ width: '100%' }}
              />
            ))}
          </React.Fragment>
        ))}

        <div style={rowLabelStyle}>disabled</div>
        {sizes.map((s) => (
          <Select
            key={s}
            size={s}
            disabled
            placeholder="Disabled"
            options={defaultOptions}
            style={{ width: '100%' }}
          />
        ))}
      </div>
    </div>
  ),
}
