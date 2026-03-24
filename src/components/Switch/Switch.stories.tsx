import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

/**
 * Switch — toggle between on/off.
 * Built on Ant Design Switch with Flock DS tokens.
 */
const meta: Meta<typeof Switch> = {
  title: 'General/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'small'] },
    checkedChildren: { control: 'text' },
    unCheckedChildren: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'small' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Loading: Story = {
  args: { loading: true },
}

export const WithLabels: Story = {
  name: 'With labels',
  args: { checkedChildren: 'ON', unCheckedChildren: 'OFF' },
}

export const Checked: Story = {
  args: { defaultChecked: true },
}
