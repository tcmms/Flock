import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Popover } from './Popover'
import { Button } from '../Button'

const sampleContent = (
  <div>
    <p style={{ margin: 0 }}>This is the popover content.</p>
    <p style={{ margin: 'var(--flock-space-2) 0 0', color: 'var(--flock-color-text-secondary)' }}>Additional details go here.</p>
  </div>
)

/**
 * Popover — floating card popped by clicking, hovering, or focusing on an element.
 */
const meta: Meta<typeof Popover> = {
  title: 'Data Display/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    trigger: { control: 'select', options: ['hover', 'click', 'focus'] },
    placement: {
      control: 'select',
      options: ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    content: sampleContent,
    children: <Button>Hover me</Button>,
  },
}

// ─── With Title ────────────────────────────────────────────
export const WithTitle: Story = {
  name: 'With title',
  args: {
    title: 'Popover Title',
    content: sampleContent,
    children: <Button>Hover me</Button>,
  },
}

// ─── Trigger Click ─────────────────────────────────────────
export const TriggerClick: Story = {
  name: 'Trigger click',
  args: {
    title: 'Click Popover',
    content: sampleContent,
    trigger: 'click',
    children: <Button>Click me</Button>,
  },
}

// ─── Trigger Focus ─────────────────────────────────────────
export const TriggerFocus: Story = {
  name: 'Trigger focus',
  args: {
    title: 'Focus Popover',
    content: sampleContent,
    trigger: 'focus',
    children: <Button>Focus me</Button>,
  },
}

// ─── Placement ─────────────────────────────────────────────
export const Placement: Story = {
  render: () => {
    const placements = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'right'] as const
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--flock-space-2)', padding: 60, justifyContent: 'center' }}>
        {placements.map((p) => (
          <Popover key={p} title={p} content={`Placement: ${p}`} placement={p}>
            <Button>{p}</Button>
          </Popover>
        ))}
      </div>
    )
  },
}

// ─── Controlled ────────────────────────────────────────────
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Popover
        title="Controlled Popover"
        content={
          <div>
            <p style={{ margin: 0 }}>Controlled via state.</p>
            <Button size="small" type="primary" onClick={() => setOpen(false)} style={{ marginTop: 'var(--flock-space-2)' }}>
              Close
            </Button>
          </div>
        }
        open={open}
        onOpenChange={setOpen}
        trigger="click"
      >
        <Button type="primary">Toggle Popover</Button>
      </Popover>
    )
  },
}
