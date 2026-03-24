import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, RangePicker } from './DatePicker';
import { Space } from 'antd';
import dayjs from 'dayjs';

const meta: Meta<typeof DatePicker> = {
  title: 'Data Entry/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    placeholder: 'Select date',
  },
};

export const WithTime: Story = {
  args: {
    showTime: true,
    placeholder: 'Select date and time',
  },
};

export const RangePickerStory: Story = {
  name: 'Range Picker',
  render: () => <RangePicker />,
};

export const MonthPicker: Story = {
  args: {
    picker: 'month',
    placeholder: 'Select month',
  },
};

export const YearPicker: Story = {
  args: {
    picker: 'year',
    placeholder: 'Select year',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: dayjs('2025-06-15'),
  },
};

export const WithPresets: Story = {
  render: () => (
    <RangePicker
      presets={[
        { label: 'Today', value: [dayjs(), dayjs()] },
        { label: 'Last 7 Days', value: [dayjs().subtract(7, 'day'), dayjs()] },
        { label: 'Last 30 Days', value: [dayjs().subtract(30, 'day'), dayjs()] },
        { label: 'This Month', value: [dayjs().startOf('month'), dayjs()] },
        { label: 'This Year', value: [dayjs().startOf('year'), dayjs()] },
      ]}
    />
  ),
};

export const Sizes: Story = {
  name: 'Small / Large Sizes',
  render: () => (
    <Space direction="vertical">
      <DatePicker size="small" placeholder="Small" />
      <DatePicker placeholder="Default" />
      <DatePicker size="large" placeholder="Large" />
    </Space>
  ),
};

export const StatusErrorWarning: Story = {
  name: 'Status Error / Warning',
  render: () => (
    <Space direction="vertical">
      <DatePicker status="error" placeholder="Error status" />
      <DatePicker status="warning" placeholder="Warning status" />
    </Space>
  ),
};
