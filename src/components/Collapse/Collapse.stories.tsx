import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';
import { InterfaceEssentialSettingsGearIcon, ArrowsDiagramsArrowForwardIcon } from '../../icons';

const meta: Meta<typeof Collapse> = {
  title: 'Layout/Collapse',
  component: Collapse,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapse>;

const defaultItems = [
  { key: '1', label: 'Business Information', children: 'Legal name, registration number, and business address details.' },
  { key: '2', label: 'Payment Settings', children: 'Configure accepted payment methods, settlement accounts, and payout schedules.' },
  { key: '3', label: 'Compliance Documents', children: 'Upload KYB documents, tax certificates, and license information.' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const Accordion: Story = {
  args: {
    accordion: true,
    items: defaultItems,
  },
};

export const Borderless: Story = {
  args: {
    bordered: false,
    items: defaultItems,
  },
};

export const WithExtra: Story = {
  args: {
    items: defaultItems.map((item) => ({
      ...item,
      extra: <InterfaceEssentialSettingsGearIcon onClick={(e) => e.stopPropagation()} style={{ fontSize: '1em' }} />,
    })),
  },
};

export const Ghost: Story = {
  args: {
    ghost: true,
    items: defaultItems,
  },
};

export const Nested: Story = {
  render: () => (
    <Collapse
      items={[
        {
          key: '1',
          label: 'Merchant Settings',
          children: (
            <Collapse
              items={[
                { key: '1-1', label: 'General', children: 'Store name, timezone, and language settings.' },
                { key: '1-2', label: 'Notifications', children: 'Email and SMS notification preferences.' },
              ]}
            />
          ),
        },
        {
          key: '2',
          label: 'API Configuration',
          children: 'API keys, webhooks, and integration settings.',
        },
      ]}
    />
  ),
};

export const CustomExpandIcon: Story = {
  args: {
    expandIcon: ({ isActive }: { isActive?: boolean }) => (
      <ArrowsDiagramsArrowForwardIcon style={{ fontSize: '1em', transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
    ),
    items: defaultItems,
  },
};
