import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { InputField } from './InputField'
import type { InputSize, InputStatus } from './InputField'
import { Select } from '../Select'
import { Space } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

/**
 * InputField — single-line text input built on Ant Design Input.
 * Uses filled variant (grey background, no border by default).
 * Supports 3 sizes, error/warning status, prefix/suffix, clear button, character count,
 * addon before/after, borderless, and read-only states.
 */
const meta: Meta<typeof InputField> = {
  title: 'General/Input',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Input size',
    },
    status: {
      control: 'select',
      options: ['', 'error', 'warning'],
      description: 'Validation status',
    },
    placeholder: { control: 'text', description: 'Placeholder text' },
    value: { control: 'text', description: 'Input value' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    readOnly: { control: 'boolean', description: 'Read only state' },
    allowClear: { control: 'boolean', description: 'Show clear button' },
    showCount: { control: 'boolean', description: 'Show character count' },
    maxLength: { control: 'number', description: 'Maximum character length' },
    prefix: { control: { disable: true }, description: 'Prefix icon or text (React node)' },
    suffix: { control: { disable: true }, description: 'Suffix icon or text (React node)' },
  },
}

export default meta
type Story = StoryObj<typeof InputField>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: { placeholder: 'Enter text…' },
}

// ─── Sizes ─────────────────────────────────────────────────
export const Small: Story = {
  args: { placeholder: 'Small input', size: 'small' },
}

export const Large: Story = {
  args: { placeholder: 'Large input', size: 'large' },
}

// ─── Filled state ──────────────────────────────────────────
export const WithValue: Story = {
  name: 'With value',
  args: { defaultValue: 'Merchant Store Name' },
}

// ─── Status ────────────────────────────────────────────────
export const Error: Story = {
  args: { defaultValue: 'Invalid email', status: 'error' },
}

export const Warning: Story = {
  args: { defaultValue: 'Check this value', status: 'warning' },
}

// ─── States ────────────────────────────────────────────────
export const Disabled: Story = {
  args: { defaultValue: 'Cannot edit', disabled: true },
}

export const ReadOnly: Story = {
  name: 'Read only',
  args: { defaultValue: 'Read only value', readOnly: true },
}

// ─── Features ──────────────────────────────────────────────
export const AllowClear: Story = {
  name: 'Allow clear',
  args: { defaultValue: 'Clear me', allowClear: true },
}

export const ShowCount: Story = {
  name: 'Show count',
  args: { placeholder: 'Type up to 100 characters…', showCount: true, maxLength: 100 },
}

// ─── Icons ─────────────────────────────────────────────────
export const WithPrefix: Story = {
  name: 'With prefix icon',
  render: () => <InputField placeholder="Search…" prefix={<FlockIcons.Search />} />,
}

export const WithSuffix: Story = {
  name: 'With suffix icon',
  render: () => <InputField placeholder="Enter value…" suffix={<FlockIcons.Info />} />,
}

// ─── Addon ─────────────────────────────────────────────────
export const AddonBefore: Story = {
  name: 'Addon before',
  render: () => (
    <InputField
      addonBefore="https://"
      placeholder="mysite.com"
      defaultValue=""
    />
  ),
}

export const AddonAfter: Story = {
  name: 'Addon after',
  render: () => (
    <InputField
      addonAfter=".com"
      placeholder="mysite"
      defaultValue=""
    />
  ),
}

export const AddonSelect: Story = {
  name: 'Addon with select',
  render: () => (
    <InputField
      addonBefore={
        <Select defaultValue="https" options={[
          { label: 'https', value: 'https' },
          { label: 'http', value: 'http' },
        ]} style={{ width: 80 }} />
      }
      addonAfter={
        <Select defaultValue=".com" options={[
          { label: '.com', value: '.com' },
          { label: '.org', value: '.org' },
          { label: '.net', value: '.net' },
        ]} style={{ width: 80 }} />
      }
      placeholder="mysite"
      defaultValue=""
    />
  ),
}

// ─── Borderless ────────────────────────────────────────────
export const Borderless: Story = {
  render: () => (
    <InputField
      variant="borderless"
      placeholder="Borderless input"
    />
  ),
}

// ─── Compact group ─────────────────────────────────────────
export const CompactGroup: Story = {
  name: 'Compact group',
  render: () => (
    <Space.Compact>
      <Select defaultValue="product" options={[
        { label: 'Product', value: 'product' },
        { label: 'Order', value: 'order' },
        { label: 'Store', value: 'store' },
      ]} style={{ width: 120 }} />
      <InputField placeholder="Search…" style={{ width: 200 }} />
    </Space.Compact>
  ),
}

// ─── Matrix ────────────────────────────────────────────────
const statuses: { label: string; value: InputStatus }[] = [
  { label: 'default', value: '' },
  { label: 'error', value: 'error' },
  { label: 'warning', value: 'warning' },
]
const sizes: InputSize[] = ['small', 'default', 'large']

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
        {sizes.map((s) => <div key={s} style={colHeaderStyle}>{s}</div>)}

        {statuses.map(({ label, value }) => (
          <React.Fragment key={label}>
            <div style={rowLabelStyle}>{label}</div>
            {sizes.map((s) => (
              <div key={s}>
                <InputField size={s} status={value} defaultValue={label === 'default' ? 'Text' : `${label} text`} />
              </div>
            ))}
          </React.Fragment>
        ))}

        <div style={rowLabelStyle}>disabled</div>
        {sizes.map((s) => (
          <div key={s}>
            <InputField size={s} defaultValue="Disabled" disabled />
          </div>
        ))}

        <div style={rowLabelStyle}>readOnly</div>
        {sizes.map((s) => (
          <div key={s}>
            <InputField size={s} defaultValue="Read only" readOnly />
          </div>
        ))}
      </div>
    </div>
  ),
}
