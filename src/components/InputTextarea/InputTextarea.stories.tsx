import type { Meta, StoryObj } from '@storybook/react'
import { InputTextarea } from './InputTextarea'

/**
 * InputTextarea — multi-line text input.
 * Built on Ant Design Input.TextArea with Flock DS tokens.
 * Uses filled style (grey background, no border by default).
 */
const meta: Meta<typeof InputTextarea> = {
  title: 'Data Entry/InputTextarea',
  component: InputTextarea,
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
    rows: {
      control: 'number',
      description: 'Number of visible rows',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputTextarea>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    placeholder: 'Enter description…',
  },
}

// ─── With rows ─────────────────────────────────────────────
export const WithRows: Story = {
  name: 'With rows',
  args: {
    placeholder: 'Enter notes…',
    rows: 6,
  },
}

// ─── Auto resize ───────────────────────────────────────────
export const AutoResize: Story = {
  name: 'Auto resize',
  args: {
    placeholder: 'This textarea grows as you type…',
    autoSize: { minRows: 2, maxRows: 8 },
  },
}

// ─── Show count ────────────────────────────────────────────
export const ShowCount: Story = {
  name: 'Show count',
  args: {
    placeholder: 'Type up to 500 characters…',
    showCount: true,
    maxLength: 500,
  },
}

// ─── Status ────────────────────────────────────────────────
export const Error: Story = {
  args: {
    defaultValue: 'This field has an error',
    status: 'error',
  },
}

export const Warning: Story = {
  args: {
    defaultValue: 'Check this content',
    status: 'warning',
  },
}

// ─── States ────────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    defaultValue: 'Cannot edit this text',
    disabled: true,
  },
}
