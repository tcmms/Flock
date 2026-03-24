import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './Avatar'

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

/**
 * Avatar — user or entity image/icon/initials.
 * Built on Ant Design Avatar with Flock DS tokens.
 */
const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'default', 'large'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    src: { control: 'text' },
    alt: { control: 'text' },
    icon: { control: { disable: true } },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: { children: 'U' },
}

export const Square: Story = {
  args: { children: 'U', shape: 'square' },
}

export const Small: Story = {
  args: { children: 'S', size: 'small' },
}

export const Large: Story = {
  args: { children: 'L', size: 'large' },
}

export const WithImage: Story = {
  name: 'With image',
  args: { src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1', alt: 'User avatar' },
}

export const WithIcon: Story = {
  name: 'With icon',
  render: () => <Avatar icon={<UserIcon />} alt="User icon" />,
}

export const WithText: Story = {
  name: 'With text',
  args: { children: 'JD' },
}

export const Group: Story = {
  render: () => (
    <AvatarGroup max={{ count: 3 }}>
      <Avatar style={{ backgroundColor: 'var(--flock-color-primary)' }} alt="User A">A</Avatar>
      <Avatar style={{ backgroundColor: 'var(--flock-color-success)' }} alt="User B">B</Avatar>
      <Avatar style={{ backgroundColor: 'var(--flock-color-info)' }} alt="User C">C</Avatar>
      <Avatar style={{ backgroundColor: 'var(--flock-color-warning)' }} alt="User D">D</Avatar>
      <Avatar style={{ backgroundColor: 'var(--flock-color-error)' }} alt="User E">E</Avatar>
    </AvatarGroup>
  ),
}
