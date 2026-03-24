import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxGroup } from './Checkbox'

/**
 * Checkbox — selection control for multiple choices.
 * Built on Ant Design Checkbox with Flock DS tokens.
 */
const meta: Meta<typeof Checkbox> = {
  title: 'General/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { children: 'Option' },
}

export const Checked: Story = {
  args: { children: 'Checked', defaultChecked: true },
}

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
}

export const Indeterminate: Story = {
  args: { children: 'Indeterminate', indeterminate: true },
}

export const Group: Story = {
  render: () => (
    <CheckboxGroup
      options={[
        { label: 'Manage Orders', value: 'orders' },
        { label: 'Edit Products', value: 'products' },
        { label: 'View Analytics', value: 'analytics' },
      ]}
      defaultValue={['orders']}
    />
  ),
}
