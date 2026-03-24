import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from './Tabs';
import { ShoppingEcommerceBagShoppingIcon, InterfaceEssentialSettingsGearIcon, UserSingleUserIcon, ContentEditDocumentContentIcon } from '../../icons';
import { Button } from '../Button';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultItems = [
  { key: '1', label: 'Overview', children: 'Merchant overview and key metrics.' },
  { key: '2', label: 'Transactions', children: 'List of recent transactions.' },
  { key: '3', label: 'Settings', children: 'Account settings and preferences.' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const CardType: Story = {
  args: {
    type: 'card',
    items: defaultItems,
  },
};

export const Centered: Story = {
  args: {
    centered: true,
    items: defaultItems,
  },
};

export const WithIcon: Story = {
  args: {
    items: [
      { key: '1', label: 'Profile', icon: <UserSingleUserIcon style={{ fontSize: '1em' }} />, children: 'User profile information.' },
      { key: '2', label: 'Orders', icon: <ShoppingEcommerceBagShoppingIcon style={{ fontSize: '1em' }} />, children: 'Order history and tracking.' },
      { key: '3', label: 'Documents', icon: <ContentEditDocumentContentIcon style={{ fontSize: '1em' }} />, children: 'Uploaded documents.' },
      { key: '4', label: 'Settings', icon: <InterfaceEssentialSettingsGearIcon style={{ fontSize: '1em' }} />, children: 'Account settings.' },
    ],
  },
};

export const DisabledTab: Story = {
  args: {
    items: [
      { key: '1', label: 'Active', children: 'This tab is active.' },
      { key: '2', label: 'Disabled', children: 'This tab is disabled.', disabled: true },
      { key: '3', label: 'Also Active', children: 'This tab is also active.' },
    ],
  },
};

export const ExtraContent: Story = {
  args: {
    items: defaultItems,
    tabBarExtraContent: <Button size="small">Export</Button>,
  },
};

export const EditableTabs: Story = {
  render: () => {
    const [items, setItems] = React.useState([
      { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
      { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
    ]);
    const [activeKey, setActiveKey] = React.useState('1');
    let newTabIndex = 3;

    const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
      if (action === 'add') {
        const newKey = String(newTabIndex++);
        setItems([...items, { key: newKey, label: `Tab ${newKey}`, children: `Content of Tab ${newKey}` }]);
        setActiveKey(newKey);
      } else {
        const filtered = items.filter((item) => item.key !== targetKey);
        setItems(filtered);
        if (activeKey === targetKey && filtered.length) {
          setActiveKey(filtered[0].key);
        }
      }
    };

    return (
      <Tabs
        type="editable-card"
        activeKey={activeKey}
        onChange={setActiveKey}
        onEdit={onEdit}
        items={items}
      />
    );
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    items: defaultItems,
  },
};
