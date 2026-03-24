import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Popconfirm } from './Popconfirm';
import { Button } from '../Button';
import { Switch } from '../Switch';
import { message, Space } from 'antd';
import { InterfaceEssentialQuestionCircleIcon } from '../../icons';

const meta: Meta<typeof Popconfirm> = {
  title: 'Feedback/Popconfirm',
  component: Popconfirm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popconfirm>;

export const Default: Story = {
  args: {
    title: 'Delete this merchant?',
    description: 'This action cannot be undone.',
    onConfirm: () => message.success('Merchant deleted'),
    onCancel: () => message.info('Cancelled'),
    children: <Button danger>Delete Merchant</Button>,
  },
};

export const Placement: Story = {
  render: () => (
    <Space size="large">
      <Popconfirm title="Confirm action?" placement="top">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="bottom">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="left">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="right">
        <Button>Right</Button>
      </Popconfirm>
    </Space>
  ),
};

export const CustomButtonsText: Story = {
  args: {
    title: 'Deactivate this merchant account?',
    okText: 'Yes, deactivate',
    cancelText: 'No, keep active',
    okType: 'danger',
    children: <Button>Deactivate Account</Button>,
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Are you sure you want to refund this transaction?',
    icon: <InterfaceEssentialQuestionCircleIcon style={{ color: 'red', fontSize: '1em' }} />,
    children: <Button>Refund</Button>,
  },
};

export const AsyncConfirm: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setOpen(false);
        setLoading(false);
        message.success('Transaction reversed successfully');
      }, 2000);
    };

    return (
      <Popconfirm
        title="Reverse this transaction?"
        description="Processing may take a few seconds."
        open={open}
        onConfirm={handleConfirm}
        okButtonProps={{ loading }}
        onCancel={() => setOpen(false)}
      >
        <Button onClick={() => setOpen(true)}>Reverse Transaction</Button>
      </Popconfirm>
    );
  },
};

export const Conditional: Story = {
  render: () => {
    const [enabled, setEnabled] = React.useState(true);
    return (
      <Space direction="vertical">
        <Space>
          <span>Require confirmation:</span>
          <Switch checked={enabled} onChange={setEnabled} />
        </Space>
        <Popconfirm
          title="Delete this record?"
          disabled={!enabled}
          onConfirm={() => message.success('Deleted')}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      </Space>
    );
  },
};
