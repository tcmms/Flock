import type { Meta, StoryObj } from '@storybook/react'
import { Rate } from './Rate'

/**
 * Rate — star rating input control.
 */
const meta: Meta<typeof Rate> = {
  title: 'Data Entry/Rate',
  component: Rate,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    allowHalf: { control: 'boolean' },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Rate>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    defaultValue: 3,
  },
}

// ─── Half Stars ────────────────────────────────────────────
export const HalfStars: Story = {
  name: 'Half stars',
  args: {
    allowHalf: true,
    defaultValue: 3.5,
  },
}

// ─── Custom Character ──────────────────────────────────────
export const CustomCharacter: Story = {
  name: 'Custom character',
  args: {
    character: 'A',
    defaultValue: 3,
    style: { fontSize: 20 },
  },
}

// ─── Read Only ─────────────────────────────────────────────
export const ReadOnly: Story = {
  name: 'Read only',
  args: {
    disabled: true,
    defaultValue: 4,
  },
}

// ─── With Count ────────────────────────────────────────────
export const WithCount: Story = {
  name: 'With count',
  args: {
    count: 10,
    defaultValue: 7,
  },
}

// ─── Disabled ──────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 0,
  },
}
