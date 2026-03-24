import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioGroup, RadioButton } from './Radio'

/**
 * Radio — selection control for single choice.
 * Built on Ant Design Radio with Flock DS tokens.
 */
const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: { children: 'Option' },
}

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
}

export const Group: Story = {
  render: () => (
    <RadioGroup defaultValue="a">
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
    </RadioGroup>
  ),
}

export const ButtonGroup: Story = {
  name: 'Button group',
  render: () => (
    <RadioGroup defaultValue="a" optionType="button" buttonStyle="solid">
      <RadioButton value="a">Daily</RadioButton>
      <RadioButton value="b">Weekly</RadioButton>
      <RadioButton value="c">Monthly</RadioButton>
    </RadioGroup>
  ),
}

export const VerticalGroup: Story = {
  name: 'Vertical group',
  render: () => (
    <RadioGroup defaultValue="a" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flock-space-2)' }}>
      <Radio value="a">Standard delivery</Radio>
      <Radio value="b">Express delivery</Radio>
      <Radio value="c">Same-day delivery</Radio>
    </RadioGroup>
  ),
}
