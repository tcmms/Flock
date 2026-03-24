import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

/**
 * Divider — horizontal or vertical separator.
 * Built on Ant Design Divider with Flock DS tokens.
 */
const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    titlePlacement: { control: 'select', options: ['left', 'center', 'right', 'start', 'end'] },
    dashed: { control: 'boolean' },
    plain: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => (
    <div>
      <p>Above</p>
      <Divider />
      <p>Below</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div>
      Link A <Divider orientation="vertical" /> Link B <Divider orientation="vertical" /> Link C
    </div>
  ),
}

export const WithText: Story = {
  name: 'With text',
  args: { children: 'Section' },
}

export const Dashed: Story = {
  args: { dashed: true },
}

export const LeftAligned: Story = {
  name: 'Left aligned',
  args: { children: 'Left', titlePlacement: 'left' as const },
}

export const RightAligned: Story = {
  name: 'Right aligned',
  args: { children: 'Right', titlePlacement: 'right' as const },
}
