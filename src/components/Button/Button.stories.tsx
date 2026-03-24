import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from './Button'
import { Space } from 'antd'
import {
  ArrowsDiagramsArrowForwardIcon,
  ArrowsDiagramsArrowDownloadSaveUploadIcon,
  InterfaceEssentialSearchLoupeIcon,
  InterfaceEssentialSettingsGearIcon,
} from '../../icons'

const SearchIcon = () => <InterfaceEssentialSearchLoupeIcon style={{ fontSize: 'var(--flock-font-size-lg)' }} />
const SettingsIcon = () => <InterfaceEssentialSettingsGearIcon style={{ fontSize: 'var(--flock-font-size-lg)' }} />
const ArrowIcon = () => <ArrowsDiagramsArrowForwardIcon style={{ fontSize: 'var(--flock-font-size-lg)' }} />
const DownloadIcon = () => <ArrowsDiagramsArrowDownloadSaveUploadIcon style={{ fontSize: 'var(--flock-font-size-lg)' }} />

/**
 * Button — triggers an action or event.
 * Full Ant Design Button with Flock DS tokens via FlockProvider.
 * Supports 5 types, 3 sizes, danger, ghost, disabled, loading, icon, block, shapes.
 */
const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link'],
      description: 'Button type',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Button size',
    },
    danger: { control: 'boolean', description: 'Danger modifier' },
    ghost: { control: 'boolean', description: 'Ghost modifier' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    loading: { control: 'boolean', description: 'Loading state' },
    block: { control: 'boolean', description: 'Full width' },
    shape: { control: 'select', options: ['default', 'round', 'circle'] },
    children: { control: 'text', description: 'Button label' },
    icon: { control: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: { children: 'Button' },
}

// ─── Types ─────────────────────────────────────────────────
export const Primary: Story = {
  args: { children: 'Save changes', type: 'primary' },
}

export const Dashed: Story = {
  args: { children: 'Add item', type: 'dashed' },
}

export const Text: Story = {
  args: { children: 'Cancel', type: 'text' },
}

export const Link: Story = {
  args: { children: 'View details', type: 'link' },
}

// ─── Sizes ─────────────────────────────────────────────────
export const Small: Story = {
  args: { children: 'Small', type: 'primary', size: 'small' },
}

export const Large: Story = {
  args: { children: 'Large', type: 'primary', size: 'large' },
}

// ─── Danger ────────────────────────────────────────────────
export const DangerPrimary: Story = {
  name: 'Danger primary',
  args: { children: 'Delete', type: 'primary', danger: true },
}

export const DangerDefault: Story = {
  name: 'Danger default',
  args: { children: 'Remove', danger: true },
}

export const DangerDashed: Story = {
  name: 'Danger dashed',
  args: { children: 'Remove', type: 'dashed', danger: true },
}

export const DangerText: Story = {
  name: 'Danger text',
  args: { children: 'Delete', type: 'text', danger: true },
}

export const DangerLink: Story = {
  name: 'Danger link',
  args: { children: 'Delete', type: 'link', danger: true },
}

// ─── Ghost ─────────────────────────────────────────────────
export const GhostPrimary: Story = {
  name: 'Ghost primary',
  args: { children: 'Ghost', type: 'primary', ghost: true },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [(Story) => <div style={{ padding: 'var(--flock-padding-lg)', background: 'var(--flock-color-bg-spotlight)' }}><Story /></div>],
}

export const GhostDanger: Story = {
  name: 'Ghost danger',
  args: { children: 'Ghost danger', type: 'primary', ghost: true, danger: true },
  decorators: [(Story) => <div style={{ padding: 'var(--flock-padding-lg)', background: 'var(--flock-color-bg-spotlight)' }}><Story /></div>],
}

// ─── Icons ─────────────────────────────────────────────────
export const WithIcon: Story = {
  name: 'With icon',
  render: () => <Button type="primary" icon={<SearchIcon />}>Search</Button>,
}

export const IconAfter: Story = {
  name: 'Icon after',
  render: () => (
    <Button type="primary">
      Continue <ArrowIcon />
    </Button>
  ),
}

export const IconOnly: Story = {
  name: 'Icon only',
  render: () => <Button type="primary" icon={<SearchIcon />} shape="circle" aria-label="Search" />,
}

export const IconOnlySquare: Story = {
  name: 'Icon only square',
  render: () => <Button type="primary" icon={<SettingsIcon />} aria-label="Settings" />,
}

// ─── Shapes ────────────────────────────────────────────────
export const Round: Story = {
  args: { children: 'Round button', type: 'primary', shape: 'round' },
}

export const Circle: Story = {
  render: () => <Button type="primary" icon={<SearchIcon />} shape="circle" aria-label="Search" />,
}

// ─── States ────────────────────────────────────────────────
export const Disabled: Story = {
  args: { children: 'Disabled', type: 'primary', disabled: true },
}

export const DisabledDefault: Story = {
  name: 'Disabled default',
  args: { children: 'Disabled', disabled: true },
}

export const Loading: Story = {
  args: { children: 'Saving…', type: 'primary', loading: true },
}

export const LoadingDefault: Story = {
  name: 'Loading default',
  args: { children: 'Loading…', loading: true },
}

export const LoadingIcon: Story = {
  name: 'Loading icon only',
  args: { type: 'primary', loading: true, shape: 'circle' },
}

// ─── Block ─────────────────────────────────────────────────
export const Block: Story = {
  args: { children: 'Full width', type: 'primary', block: true },
}

// ─── Href ──────────────────────────────────────────────────
export const AsLink: Story = {
  name: 'As link (href)',
  args: { children: 'Go to Google', type: 'link', href: 'https://google.com', target: '_blank' },
}

// ─── Matrix ────────────────────────────────────────────────
const types = ['primary', 'default', 'dashed', 'text', 'link'] as const
const sizes = ['small', 'middle', 'large'] as const

const sectionHeaderStyle: React.CSSProperties = {
  fontSize: 'var(--flock-font-size-sm)',
  color: 'var(--flock-color-text-tertiary)',
  marginBottom: 'var(--flock-space-3)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '80px repeat(3, 1fr)',
  gap: 'var(--flock-space-3)',
  alignItems: 'center',
  marginBottom: 'var(--flock-space-8)',
}

const rowLabelStyle: React.CSSProperties = {
  fontSize: 'var(--flock-font-size-sm)',
  color: 'var(--flock-color-text-secondary)',
}

const colHeaderStyle: React.CSSProperties = {
  fontSize: 'var(--flock-font-size-sm)',
  color: 'var(--flock-color-text-tertiary)',
  textAlign: 'center',
}

function MatrixSection({ title, stateProps }: {
  title: string
  stateProps: Record<string, unknown>
}) {
  return (
    <div>
      <div style={sectionHeaderStyle}>{title}</div>
      <div style={gridStyle}>
        <div />
        {sizes.map(s => <div key={s} style={colHeaderStyle}>{s}</div>)}

        {types.map(t => (
          <React.Fragment key={t}>
            <div style={rowLabelStyle}>{t}</div>
            {sizes.map(s => (
              <div key={s} style={{ textAlign: 'center' }}>
                <Button type={t} size={s} {...stateProps}>{t}</Button>
              </div>
            ))}
          </React.Fragment>
        ))}

        <div style={rowLabelStyle}>danger</div>
        {sizes.map(s => (
          <div key={s} style={{ textAlign: 'center' }}>
            <Button type="primary" size={s} danger {...stateProps}>danger</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Matrix: Story = {
  render: () => (
    <div>
      <MatrixSection title="Default state" stateProps={{}} />
      <MatrixSection title="Disabled state" stateProps={{ disabled: true }} />
      <MatrixSection title="Loading state" stateProps={{ loading: true }} />
    </div>
  ),
}

// ─── All icons ─────────────────────────────────────────────
export const IconShowcase: Story = {
  name: 'Icon showcase',
  render: () => (
    <Space wrap>
      <Button type="primary" icon={<SearchIcon />}>Search</Button>
      <Button icon={<SettingsIcon />}>Settings</Button>
      <Button type="dashed" icon={<DownloadIcon />}>Download</Button>
      <Button type="primary" icon={<SearchIcon />} shape="circle" aria-label="Search" />
      <Button icon={<SettingsIcon />} shape="circle" aria-label="Settings" />
      <Button type="primary" icon={<SearchIcon />} shape="round">Search</Button>
      <Button type="primary" icon={<SearchIcon />} loading>Searching</Button>
      <Button danger icon={<DownloadIcon />}>Delete file</Button>
    </Space>
  ),
}
