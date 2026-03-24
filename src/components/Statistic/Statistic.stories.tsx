import type { Meta, StoryObj } from '@storybook/react'
import { Statistic, StatisticCountdown } from './Statistic'
import { Card } from '../Card'
import { Space } from 'antd'

/**
 * Statistic — display statistic number, countdown, or value with label.
 */
const meta: Meta<typeof Statistic> = {
  title: 'Data Display/Statistic',
  component: Statistic,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    precision: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Statistic>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    title: 'Active Users',
    value: 112893,
  },
}

// ─── With Prefix/Suffix ───────────────────────────────────
export const WithPrefixSuffix: Story = {
  name: 'With prefix/suffix',
  render: () => (
    <Space size="large">
      <Statistic title="Revenue" value={1128.93} prefix="$" precision={2} />
      <Statistic title="Growth" value={11.28} suffix="%" precision={2} />
    </Space>
  ),
}

// ─── Countdown ─────────────────────────────────────────────
export const Countdown: Story = {
  render: () => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 30
    return (
      <Space size="large">
        <StatisticCountdown title="Sale ends in" value={deadline} />
        <StatisticCountdown title="Day level" value={deadline} format="D [days] H [hrs] m [min] s [sec]" />
      </Space>
    )
  },
}

// ─── In Card ───────────────────────────────────────────────
export const InCard: Story = {
  name: 'In card',
  render: () => (
    <Space size="middle">
      <Card>
        <Statistic title="Total Orders" value={3456} />
      </Card>
      <Card>
        <Statistic title="Revenue" value={89012.5} prefix="$" precision={2} />
      </Card>
      <Card>
        <Statistic title="Conversion" value={4.82} suffix="%" precision={2} />
      </Card>
    </Space>
  ),
}

// ─── With Precision ────────────────────────────────────────
export const WithPrecision: Story = {
  name: 'With precision',
  render: () => (
    <Space size="large">
      <Statistic title="No decimals" value={1128} precision={0} />
      <Statistic title="Two decimals" value={1128.936} precision={2} />
      <Statistic title="Four decimals" value={3.14159265} precision={4} />
    </Space>
  ),
}
