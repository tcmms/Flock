import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

/**
 * Slider — slider input for selecting a value or range from a continuum.
 */
const meta: Meta<typeof Slider> = {
  title: 'Data Entry/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    vertical: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--flock-padding-lg)', width: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Slider>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    defaultValue: 30,
  },
}

// ─── Range ─────────────────────────────────────────────────
export const Range: Story = {
  args: {
    range: true,
    defaultValue: [20, 60],
  },
}

// ─── With Marks ────────────────────────────────────────────
export const WithMarks: Story = {
  name: 'With marks',
  args: {
    marks: {
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: '100°C',
    },
    defaultValue: 37,
  },
}

// ─── Vertical ──────────────────────────────────────────────
export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: 200, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    vertical: true,
    defaultValue: 40,
  },
}

// ─── Disabled ──────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
}

// ─── Custom Tooltip ────────────────────────────────────────
export const CustomTooltip: Story = {
  name: 'Custom tooltip',
  args: {
    defaultValue: 30,
    tooltip: { formatter: (value: number | undefined) => `${value}%` },
  },
}

// ─── Step ──────────────────────────────────────────────────
export const Step: Story = {
  args: {
    defaultValue: 20,
    step: 10,
    marks: {
      0: '0',
      20: '20',
      40: '40',
      60: '60',
      80: '80',
      100: '100',
    },
  },
}
