import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Tour } from './Tour'
import { Button } from '../Button'
import { Space } from 'antd'

/**
 * Tour — guided product tour to walk users through features.
 */
const meta: Meta<typeof Tour> = {
  title: 'Data Display/Tour',
  component: Tour,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tour>

// ─── Default ───────────────────────────────────────────────
const DefaultTour = () => {
  const ref1 = React.useRef<HTMLButtonElement>(null)
  const ref2 = React.useRef<HTMLButtonElement>(null)
  const ref3 = React.useRef<HTMLButtonElement>(null)
  const [open, setOpen] = React.useState(false)
  const steps = [
    { title: 'Create a store', description: 'Start by setting up your merchant store with basic information.', target: () => ref1.current! },
    { title: 'Add products', description: 'Add your products with photos, descriptions, and pricing.', target: () => ref2.current! },
    { title: 'Go live', description: 'Publish your store to start receiving orders from customers.', target: () => ref3.current! },
  ]
  return (
    <div>
      <Space>
        <Button ref={ref1}>Create Store</Button>
        <Button ref={ref2}>Add Products</Button>
        <Button ref={ref3} type="primary">Publish</Button>
      </Space>
      <br /><br />
      <Button type="primary" onClick={() => setOpen(true)}>Start Tour</Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </div>
  )
}
export const Default: Story = { render: () => <DefaultTour /> }

// ─── Placement ─────────────────────────────────────────────
const PlacementTour = () => {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [open, setOpen] = React.useState(false)
  const steps = [
    { title: 'Bottom placement', description: 'This step appears below the target element.', target: () => ref.current!, placement: 'bottom' as const },
    { title: 'Right placement', description: 'This step appears to the right of the target element.', target: () => ref.current!, placement: 'right' as const },
    { title: 'Top placement', description: 'This step appears above the target element.', target: () => ref.current!, placement: 'top' as const },
  ]
  return (
    <div style={{ padding: '80px 0', display: 'flex', justifyContent: 'center' }}>
      <div>
        <Button ref={ref} type="primary" onClick={() => setOpen(true)}>Start Tour (Placement)</Button>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>
    </div>
  )
}
export const Placement: Story = { render: () => <PlacementTour /> }

// ─── With Mask ─────────────────────────────────────────────
const WithMaskTour = () => {
  const ref1 = React.useRef<HTMLButtonElement>(null)
  const ref2 = React.useRef<HTMLButtonElement>(null)
  const [open, setOpen] = React.useState(false)
  const steps = [
    { title: 'Step 1', description: 'The background is masked to focus attention on this element.', target: () => ref1.current! },
    { title: 'Step 2', description: 'Navigate through the tour with previous and next buttons.', target: () => ref2.current! },
  ]
  return (
    <div>
      <Space>
        <Button ref={ref1}>Feature A</Button>
        <Button ref={ref2}>Feature B</Button>
      </Space>
      <br /><br />
      <Button type="primary" onClick={() => setOpen(true)}>Start Tour (with mask)</Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} mask />
    </div>
  )
}
export const WithMask: Story = { name: 'With mask', render: () => <WithMaskTour /> }
