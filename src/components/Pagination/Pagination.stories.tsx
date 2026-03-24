import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    defaultCurrent: 1,
    total: 500,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    defaultCurrent: 1,
    total: 500,
  },
};

export const WithQuickJumper: Story = {
  args: {
    defaultCurrent: 1,
    total: 500,
    showQuickJumper: true,
  },
};

export const WithSizeChanger: Story = {
  args: {
    defaultCurrent: 1,
    total: 500,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
  },
};

export const Simple: Story = {
  args: {
    simple: true,
    defaultCurrent: 1,
    total: 500,
  },
};

export const TotalShown: Story = {
  args: {
    defaultCurrent: 1,
    total: 256,
    showTotal: (total: number, range: [number, number]) =>
      `${range[0]}-${range[1]} of ${total} transactions`,
  },
};

export const Mini: Story = {
  args: {
    defaultCurrent: 1,
    total: 500,
    size: 'small',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `Total ${total} items`,
  },
};
