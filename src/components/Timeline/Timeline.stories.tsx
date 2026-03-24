import type { Meta, StoryObj } from '@storybook/react'
import { Timeline } from './Timeline'

/**
 * Timeline — vertical timeline for displaying a series of events.
 */
const meta: Meta<typeof Timeline> = {
  title: 'Data Display/Timeline',
  component: Timeline,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Timeline>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    items: [
      { children: 'Order placed — 2024-01-15 09:00' },
      { children: 'Payment confirmed — 2024-01-15 09:05' },
      { children: 'Order shipped — 2024-01-16 14:30' },
      { children: 'Delivered — 2024-01-18 10:00' },
    ],
  },
}

// ─── With Colors ───────────────────────────────────────────
export const WithColors: Story = {
  name: 'With colors',
  args: {
    items: [
      { color: 'green', children: 'Deployment successful' },
      { color: 'green', children: 'Tests passed' },
      { color: 'blue', children: 'Code review in progress' },
      { color: 'red', children: 'Build failed' },
      { color: 'gray', children: 'Commit pushed' },
    ],
  },
}

// ─── Pending ───────────────────────────────────────────────
export const Pending: Story = {
  args: {
    pending: 'Processing…',
    items: [
      { children: 'Step 1 — Validate input' },
      { children: 'Step 2 — Process data' },
      { children: 'Step 3 — Generate report' },
    ],
  },
}

// ─── Alternate ─────────────────────────────────────────────
export const Alternate: Story = {
  args: {
    mode: 'alternate',
    items: [
      { children: 'Founded the company — 2020' },
      { children: 'Reached 1000 users — 2021' },
      { children: 'Series A funding — 2022' },
      { children: 'Launched v2.0 — 2023' },
      { children: 'Global expansion — 2024' },
    ],
  },
}

// ─── Right Mode ────────────────────────────────────────────
export const RightMode: Story = {
  name: 'Right mode',
  args: {
    mode: 'right',
    items: [
      { children: 'Task completed' },
      { children: 'Review approved' },
      { children: 'Deployed to staging' },
      { children: 'Released to production' },
    ],
  },
}

// ─── Custom Dot ────────────────────────────────────────────
export const CustomDot: Story = {
  name: 'Custom dot',
  args: {
    items: [
      { dot: '🚀', children: 'Product launch' },
      { dot: '✅', children: 'QA sign-off' },
      { dot: '🔧', children: 'Bug fixes applied' },
      { dot: '📝', children: 'Spec finalized' },
    ],
  },
}
