import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Steps } from './Steps';
import { UserSingleUserIcon, ContentEditDocumentContentIcon, BuildingConstructionBankBuildingIcon, InterfaceEssentialCheckmarkCircleIcon } from '../../icons';

const meta: Meta<typeof Steps> = {
  title: 'Navigation/Steps',
  component: Steps,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Steps>;

const defaultItems = [
  { title: 'Business Info' },
  { title: 'Verification' },
  { title: 'Bank Account' },
  { title: 'Complete' },
];

export const Default: Story = {
  args: {
    current: 1,
    items: defaultItems,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    current: 1,
    items: defaultItems,
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    current: 1,
    items: [
      { title: 'Submit Application', description: 'Fill in merchant details' },
      { title: 'Under Review', description: 'Compliance team is reviewing' },
      { title: 'Approved', description: 'Ready to go live' },
    ],
  },
};

export const WithDescription: Story = {
  args: {
    current: 1,
    items: [
      { title: 'Business Info', description: 'Legal name and address' },
      { title: 'Verification', description: 'Upload KYB documents' },
      { title: 'Bank Account', description: 'Add settlement account' },
      { title: 'Complete', description: 'Review and submit' },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    current: 1,
    items: [
      { title: 'Account', icon: <UserSingleUserIcon style={{ fontSize: '1em' }} /> },
      { title: 'Documents', icon: <ContentEditDocumentContentIcon style={{ fontSize: '1em' }} /> },
      { title: 'Banking', icon: <BuildingConstructionBankBuildingIcon style={{ fontSize: '1em' }} /> },
      { title: 'Done', icon: <InterfaceEssentialCheckmarkCircleIcon style={{ fontSize: '1em' }} /> },
    ],
  },
};

export const DotStyle: Story = {
  args: {
    progressDot: true,
    current: 2,
    items: [
      { title: 'Created', description: 'Application created' },
      { title: 'Submitted', description: 'Documents submitted' },
      { title: 'In Review', description: 'Under compliance review' },
      { title: 'Approved', description: 'Merchant approved' },
    ],
  },
};

export const ErrorStatus: Story = {
  args: {
    current: 1,
    status: 'error',
    items: [
      { title: 'Business Info', description: 'Completed' },
      { title: 'Verification', description: 'Document rejected' },
      { title: 'Bank Account', description: 'Pending' },
      { title: 'Complete', description: 'Pending' },
    ],
  },
};

export const Clickable: Story = {
  render: () => {
    const [current, setCurrent] = React.useState(0);
    return (
      <Steps
        current={current}
        onChange={setCurrent}
        items={[
          { title: 'Step 1', description: 'Basic info' },
          { title: 'Step 2', description: 'Details' },
          { title: 'Step 3', description: 'Confirm' },
        ]}
      />
    );
  },
};
