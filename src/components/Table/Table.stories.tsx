import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Table } from './Table'


const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
]

const dataSource = [
  { key: '1', name: 'John Brown', age: 32, email: 'john@example.com' },
  { key: '2', name: 'Jim Green', age: 42, email: 'jim@example.com' },
  { key: '3', name: 'Joe Black', age: 28, email: 'joe@example.com' },
  { key: '4', name: 'Jane White', age: 35, email: 'jane@example.com' },
]

export const Default: Story = {
  args: {
    columns,
    dataSource,
  },
}

export const Bordered: Story = {
  args: {
    columns,
    dataSource,
    bordered: true,
  },
}

export const Striped: Story = {
  args: {
    columns,
    dataSource,
    rowClassName: (_record: any, index: number) =>
      index % 2 === 0 ? 'table-row-light' : 'table-row-dark',
  },
}

export const SmallSize: Story = {
  args: {
    columns,
    dataSource,
    size: 'small',
  },
}

const paginationData = Array.from({ length: 50 }, (_, i) => ({
  key: String(i + 1),
  name: `User ${i + 1}`,
  age: 20 + (i % 40),
  email: `user${i + 1}@example.com`,
}))

export const WithPagination: Story = {
  args: {
    columns,
    dataSource: paginationData,
    pagination: { pageSize: 5 },
  },
}

export const WithSorting: Story = {
  args: {
    columns: [
      { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a: any, b: any) => a.name.localeCompare(b.name) },
      { title: 'Age', dataIndex: 'age', key: 'age', sorter: (a: any, b: any) => a.age - b.age },
      { title: 'Email', dataIndex: 'email', key: 'email' },
    ],
    dataSource,
  },
}

export const WithFiltering: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'John', value: 'John' },
          { text: 'Jim', value: 'Jim' },
        ],
        onFilter: (value: any, record: any) => record.name.includes(value),
      },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
    ],
    dataSource,
  },
}

export const WithSelection: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      type: 'checkbox',
      onChange: (selectedRowKeys: React.Key[]) => {
        console.log('Selected:', selectedRowKeys)
      },
    },
  },
}

export const Loading: Story = {
  args: {
    columns,
    dataSource,
    loading: true,
  },
}

export const EmptyState: Story = {
  args: {
    columns,
    dataSource: [],
  },
}

export const ExpandableRows: Story = {
  args: {
    columns,
    dataSource,
    expandable: {
      expandedRowRender: (record: any) => (
        <p style={{ margin: 0 }}>Additional details for {record.name}</p>
      ),
    },
  },
}

export const FixedHeader: Story = {
  args: {
    columns,
    dataSource: paginationData.slice(0, 20),
    scroll: { y: 300 },
    pagination: false,
  },
}
