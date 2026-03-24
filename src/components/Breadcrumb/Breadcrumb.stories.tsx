import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { BuildingConstructionHomeHouseIcon, BuildingConstructionStoreIcon } from '../../icons';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Home' },
      { title: 'Merchants' },
      { title: 'Detail' },
    ],
  },
};

export const WithSeparator: Story = {
  args: {
    separator: '>',
    items: [
      { title: 'Home' },
      { title: 'Payments' },
      { title: 'Transaction #1234' },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    items: [
      { title: <BuildingConstructionHomeHouseIcon style={{ fontSize: '1em' }} /> },
      { title: <><BuildingConstructionStoreIcon style={{ fontSize: '1em' }} /> <span>Merchants</span></> },
      { title: 'Flock Coffee' },
    ],
  },
};

export const WithDropdownMenu: Story = {
  args: {
    items: [
      { title: 'Home' },
      {
        title: 'Merchants',
        menu: {
          items: [
            { key: '1', label: 'Active Merchants' },
            { key: '2', label: 'Pending Merchants' },
            { key: '3', label: 'Archived Merchants' },
          ],
        },
      },
      { title: 'Flock Coffee' },
    ],
  },
};
