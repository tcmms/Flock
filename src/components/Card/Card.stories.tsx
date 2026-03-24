import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { ContentEditPenEditIcon, InterfaceEssentialDotsMenuIcon, InterfaceEssentialSettingsGearIcon } from '../../icons';
import { Avatar } from '../Avatar'
import { Space } from 'antd';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Merchant Profile',
    style: { width: 350 },
    children: 'Basic merchant information and account details.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Merchant Profile',
    style: { width: 350 },
    actions: [
      <InterfaceEssentialSettingsGearIcon key="setting" style={{ fontSize: '1em' }} />,
      <ContentEditPenEditIcon key="edit" style={{ fontSize: '1em' }} />,
      <InterfaceEssentialDotsMenuIcon key="ellipsis" style={{ fontSize: '1em' }} />,
    ],
    children: 'Manage merchant settings and preferences.',
  },
};

export const WithCoverImage: Story = {
  args: {
    style: { width: 350 },
    cover: <img alt="storefront" src="https://placehold.co/350x200?text=Storefront" />,
    children: <Card.Meta title="Flock Coffee" description="Premium coffee shop — Downtown location" />,
  },
};

export const Loading: Story = {
  args: {
    title: 'Merchant Profile',
    style: { width: 350 },
    loading: true,
  },
};

export const Borderless: Story = {
  args: {
    title: 'Borderless Card',
    bordered: false,
    style: { width: 350, background: 'var(--flock-color-bg-layout)' },
    children: 'This card has no border.',
  },
};

export const InnerCard: Story = {
  render: () => (
    <Card title="Merchant Dashboard" style={{ width: 500 }}>
      <Card type="inner" title="Revenue" style={{ marginBottom: 'var(--flock-space-4)' }}>
        Total revenue this month: $12,340.00
      </Card>
      <Card type="inner" title="Orders">
        Total orders this month: 256
      </Card>
    </Card>
  ),
};

export const GridCard: Story = {
  render: () => (
    <Card title="Store Locations" style={{ width: 500 }}>
      <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Downtown</Card.Grid>
      <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Uptown</Card.Grid>
      <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Airport</Card.Grid>
      <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Mall</Card.Grid>
    </Card>
  ),
};

export const MetaCard: Story = {
  args: {
    style: { width: 350 },
    actions: [
      <InterfaceEssentialSettingsGearIcon key="setting" style={{ fontSize: '1em' }} />,
      <ContentEditPenEditIcon key="edit" style={{ fontSize: '1em' }} />,
      <InterfaceEssentialDotsMenuIcon key="ellipsis" style={{ fontSize: '1em' }} />,
    ],
    children: (
      <Card.Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
        title="Flock Coffee"
        description="Premium coffee chain with 12 locations nationwide"
      />
    ),
  },
};

export const Hoverable: Story = {
  render: () => (
    <Space>
      <Card hoverable style={{ width: 240 }} cover={<img alt="Shawarma combo meal" src="https://placehold.co/240x160?text=Product+A" />}>
        <Card.Meta title="Product A" description="$29.99" />
      </Card>
      <Card hoverable style={{ width: 240 }} cover={<img alt="Iced latte beverage" src="https://placehold.co/240x160?text=Product+B" />}>
        <Card.Meta title="Product B" description="$49.99" />
      </Card>
    </Space>
  ),
};
