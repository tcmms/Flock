import type { Meta, StoryObj } from '@storybook/react';
import { InputNumber } from './InputNumber';
import { MoneyMoneyDollarIcon } from '../../icons';
import { Space } from 'antd';

const meta: Meta<typeof InputNumber> = {
  title: 'Data Entry/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
    placeholder: 'Enter amount',
    style: { width: 200 },
  },
};

export const WithMinMax: Story = {
  args: {
    min: 1,
    max: 100,
    defaultValue: 10,
    style: { width: 200 },
  },
};

export const WithStep: Story = {
  args: {
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0.5,
    style: { width: 200 },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 42,
    style: { width: 200 },
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: <MoneyMoneyDollarIcon style={{ fontSize: '1em' }} />,
    defaultValue: 99.99,
    style: { width: 200 },
  },
};

export const WithFormatter: Story = {
  args: {
    defaultValue: 1000,
    formatter: (value: number | string | undefined) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: (value: string | undefined) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number,
    style: { width: 200 },
  },
};

export const Sizes: Story = {
  name: 'Small / Large Sizes',
  render: () => (
    <Space direction="vertical">
      <InputNumber size="small" placeholder="Small" style={{ width: 200 }} />
      <InputNumber placeholder="Default" style={{ width: 200 }} />
      <InputNumber size="large" placeholder="Large" style={{ width: 200 }} />
    </Space>
  ),
};

export const StatusErrorWarning: Story = {
  name: 'Status Error / Warning',
  render: () => (
    <Space direction="vertical">
      <InputNumber status="error" placeholder="Error status" style={{ width: 200 }} />
      <InputNumber status="warning" placeholder="Warning status" style={{ width: 200 }} />
    </Space>
  ),
};
