import type { Meta, StoryObj } from '@storybook/react'
import { InputPassword } from './InputPassword'

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const EyeOffIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <path d="m1 1 22 22"/>
  </svg>
)

/**
 * InputPassword — password input with visibility toggle.
 * Built on Ant Design Input.Password with Flock DS tokens.
 * Uses filled style (grey background, no border by default).
 */
const meta: Meta<typeof InputPassword> = {
  title: 'Data Entry/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Input size',
    },
    status: {
      control: 'select',
      options: ['', 'error', 'warning'],
      description: 'Validation status',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    visibilityToggle: {
      control: 'boolean',
      description: 'Show/hide password toggle',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputPassword>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    placeholder: 'Enter password…',
  },
}

// ─── Sizes ─────────────────────────────────────────────────
export const Small: Story = {
  args: {
    placeholder: 'Small password',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    placeholder: 'Large password',
    size: 'large',
  },
}

// ─── Status ────────────────────────────────────────────────
export const Error: Story = {
  args: {
    defaultValue: 'wrong',
    status: 'error',
  },
}

export const Warning: Story = {
  args: {
    defaultValue: 'weak',
    status: 'warning',
  },
}

// ─── States ────────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    defaultValue: '••••••••',
    disabled: true,
  },
}

// ─── Custom toggle ─────────────────────────────────────────
export const CustomToggle: Story = {
  name: 'Custom toggle icon',
  args: {
    placeholder: 'Enter password…',
    iconRender: (visible: boolean) => (visible ? <EyeIcon /> : <EyeOffIcon />),
  } as any,
}
