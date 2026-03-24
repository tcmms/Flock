import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../Button'
import { Space } from 'antd'
import { InterfaceEssentialArrowDownIcon, InterfaceEssentialSettingsGearIcon, UserSingleUserIcon, InterfaceEssentialExitLogOutIcon } from '../../icons'

const meta: Meta<typeof Dropdown> = {
  title: 'General/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dropdown>

const defaultItems = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
  { key: '3', label: 'Action 3' },
]

export const Default: Story = {
  render: () => (
    <Dropdown menu={{ items: defaultItems }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <InterfaceEssentialArrowDownIcon style={{ fontSize: '1em' }} />
        </Space>
      </a>
    </Dropdown>
  ),
}

export const WithDivider: Story = {
  render: () => (
    <Dropdown
      menu={{
        items: [
          { key: '1', label: 'Edit' },
          { key: '2', label: 'Duplicate' },
          { type: 'divider' },
          { key: '3', label: 'Delete', danger: true },
        ],
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Actions
          <InterfaceEssentialArrowDownIcon style={{ fontSize: '1em' }} />
        </Space>
      </a>
    </Dropdown>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <Dropdown
      menu={{
        items: [
          { key: '1', label: 'View Details' },
          { key: '2', label: 'Edit' },
          { key: '3', label: 'Archive', disabled: true },
          { key: '4', label: 'Delete', danger: true },
        ],
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Manage
          <InterfaceEssentialArrowDownIcon style={{ fontSize: '1em' }} />
        </Space>
      </a>
    </Dropdown>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Dropdown
      menu={{
        items: [
          { key: '1', label: 'Profile', icon: <UserSingleUserIcon style={{ fontSize: '1em' }} /> },
          { key: '2', label: 'Settings', icon: <InterfaceEssentialSettingsGearIcon style={{ fontSize: '1em' }} /> },
          { type: 'divider' },
          { key: '3', label: 'Logout', icon: <InterfaceEssentialExitLogOutIcon style={{ fontSize: '1em' }} /> },
        ],
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Account
          <InterfaceEssentialArrowDownIcon style={{ fontSize: '1em' }} />
        </Space>
      </a>
    </Dropdown>
  ),
}

export const TriggerClick: Story = {
  render: () => (
    <Dropdown menu={{ items: defaultItems }} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Click me
          <InterfaceEssentialArrowDownIcon style={{ fontSize: '1em' }} />
        </Space>
      </a>
    </Dropdown>
  ),
}

export const ButtonDropdown: Story = {
  render: () => (
    <Space wrap>
      <Dropdown.Button
        menu={{
          items: [
            { key: '1', label: 'Export as CSV' },
            { key: '2', label: 'Export as PDF' },
            { key: '3', label: 'Export as Excel' },
          ],
        }}
      >
        Export
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        menu={{
          items: [
            { key: '1', label: 'Create Merchant' },
            { key: '2', label: 'Import Merchants' },
          ],
        }}
      >
        New Merchant
      </Dropdown.Button>
    </Space>
  ),
}

export const Placement: Story = {
  render: () => (
    <Space wrap>
      <Dropdown menu={{ items: defaultItems }} placement="bottomLeft">
        <Button>Bottom Left</Button>
      </Dropdown>
      <Dropdown menu={{ items: defaultItems }} placement="bottom">
        <Button>Bottom</Button>
      </Dropdown>
      <Dropdown menu={{ items: defaultItems }} placement="bottomRight">
        <Button>Bottom Right</Button>
      </Dropdown>
      <Dropdown menu={{ items: defaultItems }} placement="topLeft">
        <Button>Top Left</Button>
      </Dropdown>
      <Dropdown menu={{ items: defaultItems }} placement="top">
        <Button>Top</Button>
      </Dropdown>
      <Dropdown menu={{ items: defaultItems }} placement="topRight">
        <Button>Top Right</Button>
      </Dropdown>
    </Space>
  ),
}
