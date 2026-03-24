import type { Meta, StoryObj } from '@storybook/react'
import { Empty } from './Empty'
import { Button } from '../Button'

const meta: Meta<typeof Empty> = {
  title: 'Feedback/Empty',
  component: Empty,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  args: {},
}

export const SimpleImage: Story = {
  args: {
    image: Empty.PRESENTED_IMAGE_SIMPLE,
  },
}

export const CustomDescription: Story = {
  args: {
    description: 'No merchants found. Try adjusting your search filters.',
  },
}

export const CustomImage: Story = {
  render: () => (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ height: 60 }}
      description="No transactions yet"
    >
      <Button type="primary">Create Transaction</Button>
    </Empty>
  ),
}

export const NoDescription: Story = {
  args: {
    description: false,
  },
}
