import type { Meta, StoryObj } from '@storybook/react';
import { Upload, Dragger } from './Upload';
import { InterfaceEssentialInboxMaleIncomingIcon, InterfaceEssentialCloudUploadIcon, ContentEditPlusAddIcon } from '../../icons';
import { Button } from '../Button';

const meta: Meta<typeof Upload> = {
  title: 'Data Entry/Upload',
  component: Upload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  args: {
    action: 'https://httpbin.org/post',
    children: <Button icon={<InterfaceEssentialCloudUploadIcon style={{ fontSize: '1em' }} />}>Click to Upload</Button>,
  },
};

export const DragAndDrop: Story = {
  render: () => (
    <Dragger action="https://httpbin.org/post" multiple>
      <p className="ant-upload-drag-icon">
        <InterfaceEssentialInboxMaleIncomingIcon style={{ fontSize: '1em' }} />
      </p>
      <p className="ant-upload-text">Click or drag files to this area to upload</p>
      <p className="ant-upload-hint">
        Upload merchant documents such as business licenses, tax certificates, or identity documents.
      </p>
    </Dragger>
  ),
};

export const PictureUpload: Story = {
  args: {
    action: 'https://httpbin.org/post',
    listType: 'picture',
    defaultFileList: [
      {
        uid: '-1',
        name: 'storefront.png',
        status: 'done',
        url: 'https://placehold.co/100x100?text=Store',
      },
    ],
    children: <Button icon={<InterfaceEssentialCloudUploadIcon style={{ fontSize: '1em' }} />}>Upload Photo</Button>,
  },
};

export const AvatarUpload: Story = {
  render: () => (
    <Upload
      action="https://httpbin.org/post"
      listType="picture-card"
      showUploadList={false}
    >
      <div>
        <ContentEditPlusAddIcon style={{ fontSize: '1em' }} />
        <div style={{ marginTop: 'var(--flock-space-2)' }}>Upload Logo</div>
      </div>
    </Upload>
  ),
};

export const FileList: Story = {
  args: {
    action: 'https://httpbin.org/post',
    defaultFileList: [
      { uid: '1', name: 'business-license.pdf', status: 'done' as const, url: '#' },
      { uid: '2', name: 'tax-certificate.pdf', status: 'done' as const, url: '#' },
      { uid: '3', name: 'identity-doc.pdf', status: 'uploading' as const, percent: 60 },
      { uid: '4', name: 'bank-statement.pdf', status: 'error' as const },
    ],
    children: <Button icon={<InterfaceEssentialCloudUploadIcon style={{ fontSize: '1em' }} />}>Upload Document</Button>,
  },
};

export const WithPreview: Story = {
  args: {
    action: 'https://httpbin.org/post',
    listType: 'picture-card',
    defaultFileList: [
      {
        uid: '-1',
        name: 'product-1.png',
        status: 'done' as const,
        url: 'https://placehold.co/100x100?text=1',
      },
      {
        uid: '-2',
        name: 'product-2.png',
        status: 'done' as const,
        url: 'https://placehold.co/100x100?text=2',
      },
    ],
  },
};
