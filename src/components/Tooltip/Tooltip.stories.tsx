import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../Button'
import { Tooltip } from './Tooltip'

const pad: React.CSSProperties = { padding: 'var(--flock-padding-3xl)', display: 'inline-block' }

/**
 * Tooltip — floating label on hover.
 * Built on Ant Design Tooltip with Flock DS tokens.
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Tooltip content' },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
    },
    color: { control: 'color' },
    arrow: { control: 'boolean' },
    children: { control: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: { title: 'Tooltip text' },
  render: (args) => (
    <div style={pad}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
}

export const Top: Story = {
  args: { title: 'Top tooltip', placement: 'top' },
  render: (args) => (
    <div style={pad}>
      <Tooltip {...args}>
        <Button>Top</Button>
      </Tooltip>
    </div>
  ),
}

export const Bottom: Story = {
  args: { title: 'Bottom tooltip', placement: 'bottom' },
  render: (args) => (
    <div style={pad}>
      <Tooltip {...args}>
        <Button>Bottom</Button>
      </Tooltip>
    </div>
  ),
}

export const Left: Story = {
  args: { title: 'Left tooltip', placement: 'left' },
  render: (args) => (
    <div style={pad}>
      <Tooltip {...args}>
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
}

export const Right: Story = {
  args: { title: 'Right tooltip', placement: 'right' },
  render: (args) => (
    <div style={pad}>
      <Tooltip {...args}>
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
}

export const WithColor: Story = {
  name: 'With color',
  args: { title: 'Custom color', color: '#D90217' },
  render: (args) => (
    <div style={pad}>
      <Tooltip {...args}>
        <Button>Colored</Button>
      </Tooltip>
    </div>
  ),
}

export const NoArrow: Story = {
  name: 'No arrow',
  args: { title: 'No arrow', arrow: false },
  render: (args) => (
    <div style={pad}>
      <Tooltip {...args}>
        <Button>No arrow</Button>
      </Tooltip>
    </div>
  ),
}
