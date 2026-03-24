import type { Meta, StoryObj } from '@storybook/react'
import { Segmented } from './Segmented'
import { Space } from 'antd'

/**
 * Segmented — segmented control for switching between views or options.
 */
const meta: Meta<typeof Segmented> = {
  title: 'Data Display/Segmented',
  component: Segmented,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Segmented>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    options: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
  },
}

// ─── Block ─────────────────────────────────────────────────
export const Block: Story = {
  args: {
    options: ['Map', 'Transit', 'Satellite'],
    block: true,
  },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
}

// ─── With Icon ─────────────────────────────────────────────
export const WithIcon: Story = {
  name: 'With icon',
  args: {
    options: [
      { label: 'List', value: 'list' },
      { label: 'Grid', value: 'grid' },
      { label: 'Board', value: 'board' },
    ],
  },
}

// ─── Disabled ──────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    disabled: true,
  },
}

// ─── Size Variants ─────────────────────────────────────────
export const SizeVariants: Story = {
  name: 'Size variants',
  render: () => (
    <Space direction="vertical" size="middle">
      <Segmented options={['Small 1', 'Small 2', 'Small 3']} size="small" />
      <Segmented options={['Middle 1', 'Middle 2', 'Middle 3']} size="middle" />
      <Segmented options={['Large 1', 'Large 2', 'Large 3']} size="large" />
    </Space>
  ),
}

// ─── Custom Render ─────────────────────────────────────────
export const CustomRender: Story = {
  name: 'Custom render',
  args: {
    options: [
      {
        label: (
          <div style={{ padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)', textAlign: 'center' }}>
            <div style={{ fontWeight: 600 }}>Spring</div>
            <div style={{ fontSize: 'var(--flock-font-size-sm)', opacity: 0.65 }}>Mar–May</div>
          </div>
        ),
        value: 'spring',
      },
      {
        label: (
          <div style={{ padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)', textAlign: 'center' }}>
            <div style={{ fontWeight: 600 }}>Summer</div>
            <div style={{ fontSize: 'var(--flock-font-size-sm)', opacity: 0.65 }}>Jun–Aug</div>
          </div>
        ),
        value: 'summer',
      },
      {
        label: (
          <div style={{ padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)', textAlign: 'center' }}>
            <div style={{ fontWeight: 600 }}>Autumn</div>
            <div style={{ fontSize: 'var(--flock-font-size-sm)', opacity: 0.65 }}>Sep–Nov</div>
          </div>
        ),
        value: 'autumn',
      },
      {
        label: (
          <div style={{ padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)', textAlign: 'center' }}>
            <div style={{ fontWeight: 600 }}>Winter</div>
            <div style={{ fontSize: 'var(--flock-font-size-sm)', opacity: 0.65 }}>Dec–Feb</div>
          </div>
        ),
        value: 'winter',
      },
    ],
  },
}
