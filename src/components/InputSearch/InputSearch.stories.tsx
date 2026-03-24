import type { Meta, StoryObj } from '@storybook/react'
import { InputSearch } from './InputSearch'

/**
 * InputSearch — search input with optional search button.
 * Built on Ant Design Input.Search with Flock DS tokens.
 * Uses filled style (grey background, no border by default).
 */
const meta: Meta<typeof InputSearch> = {
  title: 'Data Entry/InputSearch',
  component: InputSearch,
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
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    enterButton: {
      control: 'boolean',
      description: 'Show search button',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputSearch>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    placeholder: 'Search…',
  },
}

// ─── Sizes ─────────────────────────────────────────────────
export const Small: Story = {
  args: {
    placeholder: 'Search…',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    placeholder: 'Search…',
    size: 'large',
  },
}

// ─── With button ───────────────────────────────────────────
export const WithButton: Story = {
  name: 'With button',
  args: {
    placeholder: 'Search products…',
    enterButton: true,
  },
}

// ─── Loading ───────────────────────────────────────────────
export const WithLoading: Story = {
  name: 'With loading',
  args: {
    placeholder: 'Searching…',
    loading: true,
  },
}

// ─── States ────────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    placeholder: 'Search…',
    disabled: true,
  },
}

export const Error: Story = {
  args: { placeholder: 'Search…', status: 'error', defaultValue: 'Invalid search' },
}

export const Warning: Story = {
  args: { placeholder: 'Search…', status: 'warning', defaultValue: 'Check query' },
}
