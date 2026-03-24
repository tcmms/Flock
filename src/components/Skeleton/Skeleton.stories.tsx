import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonButton, SkeletonInput, SkeletonImage } from './Skeleton'
import { Space } from 'antd'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {},
}

export const ActiveAnimation: Story = {
  args: {
    active: true,
  },
}

export const AvatarWithParagraph: Story = {
  args: {
    avatar: true,
    paragraph: { rows: 3 },
    active: true,
  },
}

export const ButtonSkeleton: Story = {
  render: () => (
    <Space>
      <SkeletonButton active />
      <SkeletonButton active shape="round" />
      <SkeletonButton active shape="circle" />
    </Space>
  ),
}

export const InputSkeleton: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: 300 }}>
      <SkeletonInput active style={{ width: 300 }} />
      <SkeletonInput active size="small" style={{ width: 300 }} />
    </Space>
  ),
}

export const ImageSkeleton: Story = {
  render: () => (
    <Space>
      <SkeletonImage active />
    </Space>
  ),
}

export const CustomRows: Story = {
  args: {
    active: true,
    title: { width: '40%' },
    paragraph: { rows: 5, width: ['100%', '80%', '60%', '100%', '50%'] },
  },
}
