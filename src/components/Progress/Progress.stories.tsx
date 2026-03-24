import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'
import { Space } from 'antd'

/**
 * Progress — display progress of an operation (line, circle, dashboard).
 */
const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    status: { control: 'select', options: ['normal', 'active', 'success', 'exception'] },
    type: { control: 'select', options: ['line', 'circle', 'dashboard'] },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

// ─── Default Line ──────────────────────────────────────────
export const Default: Story = {
  args: {
    percent: 60,
  },
}

// ─── Circle ────────────────────────────────────────────────
export const Circle: Story = {
  args: {
    type: 'circle',
    percent: 75,
  },
}

// ─── Dashboard ─────────────────────────────────────────────
export const Dashboard: Story = {
  args: {
    type: 'dashboard',
    percent: 80,
  },
}

// ─── Small ─────────────────────────────────────────────────
export const Small: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: 200 }}>
      <Progress percent={30} size="small" />
      <Progress percent={60} size="small" status="active" />
      <Progress percent={100} size="small" />
    </Space>
  ),
}

// ─── Custom Color ──────────────────────────────────────────
export const CustomColor: Story = {
  name: 'Custom color',
  render: () => (
    <Space direction="vertical" style={{ width: 300 }}>
      <Progress percent={50} strokeColor="#52c41a" />
      <Progress percent={70} strokeColor="#faad14" />
      <Progress percent={90} strokeColor="#ff4d4f" />
    </Space>
  ),
}

// ─── Steps Progress ────────────────────────────────────────
export const StepsProgress: Story = {
  name: 'Steps progress',
  args: {
    percent: 60,
    steps: 5,
  },
}

// ─── With Gradient ─────────────────────────────────────────
export const WithGradient: Story = {
  name: 'With gradient',
  render: () => (
    <Space direction="vertical" style={{ width: 300 }}>
      <Progress
        percent={90}
        strokeColor={{ from: '#108ee9', to: '#87d068' }}
      />
      <Progress
        type="circle"
        percent={85}
        strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
      />
    </Space>
  ),
}
