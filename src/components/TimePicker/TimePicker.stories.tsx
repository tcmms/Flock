import type { Meta, StoryObj } from '@storybook/react'
import { TimePicker, TimeRangePicker } from './TimePicker'

/**
 * TimePicker — time selection input control.
 */
const meta: Meta<typeof TimePicker> = {
  title: 'Data Entry/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TimePicker>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    placeholder: 'Select time…',
    style: { width: 200 },
  },
}

// ─── With Seconds ──────────────────────────────────────────
export const WithSeconds: Story = {
  name: 'With seconds',
  args: {
    placeholder: 'HH:mm:ss',
    showSecond: true,
    style: { width: 200 },
  },
}

// ─── 12-Hour Format ────────────────────────────────────────
export const TwelveHourFormat: Story = {
  name: '12-hour format',
  args: {
    placeholder: 'Select time…',
    use12Hours: true,
    format: 'h:mm A',
    style: { width: 200 },
  },
}

// ─── Range ─────────────────────────────────────────────────
export const Range: Story = {
  render: () => (
    <TimeRangePicker style={{ width: 280 }} />
  ),
}

// ─── Disabled ──────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
    style: { width: 200 },
  },
}

// ─── Size Variants ─────────────────────────────────────────
export const SizeVariants: Story = {
  name: 'Size variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flock-space-3)' }}>
      <TimePicker placeholder="Small" size="small" style={{ width: 200 }} />
      <TimePicker placeholder="Middle" size="middle" style={{ width: 200 }} />
      <TimePicker placeholder="Large" size="large" style={{ width: 200 }} />
    </div>
  ),
}
