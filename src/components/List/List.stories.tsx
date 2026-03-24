import type { Meta, StoryObj } from '@storybook/react'
import { List, ListItem, ListItemMeta } from './List'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

const articles = [
  { title: 'Introduction to React Hooks', description: 'Learn how to use useState, useEffect, and custom hooks.' },
  { title: 'TypeScript Best Practices', description: 'Tips for writing maintainable TypeScript code.' },
  { title: 'Design System Architecture', description: 'How to build a scalable component library.' },
  { title: 'Performance Optimization', description: 'Techniques for improving React rendering performance.' },
  { title: 'Testing Strategies', description: 'Unit, integration, and end-to-end testing approaches.' },
]

/**
 * List — simple list display for content items.
 */
const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof List>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    bordered: true,
    dataSource: articles.map((a) => a.title),
    renderItem: (item) => <ListItem>{item as string}</ListItem>,
    header: <div>Articles</div>,
  },
}

// ─── With Actions ──────────────────────────────────────────
export const WithActions: Story = {
  name: 'With actions',
  render: () => (
    <List
      bordered
      dataSource={articles}
      renderItem={(item) => (
        <ListItem
          actions={[
            <Button type="link" key="edit">Edit</Button>,
            <Button type="link" danger key="delete">Delete</Button>,
          ]}
        >
          {item.title}
        </ListItem>
      )}
    />
  ),
}

// ─── With Avatar ───────────────────────────────────────────
export const WithAvatar: Story = {
  name: 'With avatar',
  render: () => (
    <List
      dataSource={articles}
      renderItem={(item) => (
        <ListItem>
          <ListItemMeta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.title}`} />}
            title={item.title}
            description={item.description}
          />
        </ListItem>
      )}
    />
  ),
}

// ─── Loading ───────────────────────────────────────────────
export const Loading: Story = {
  args: {
    loading: true,
    dataSource: articles.map((a) => a.title),
    renderItem: (item) => <ListItem>{item as string}</ListItem>,
  },
}

// ─── Grid ──────────────────────────────────────────────────
export const Grid: Story = {
  render: () => (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={articles}
      renderItem={(item) => (
        <ListItem>
          <div style={{ padding: 'var(--flock-padding-md)', border: 'var(--flock-line-width) solid var(--flock-color-border-secondary)', borderRadius: 'var(--flock-radius-base)' }}>
            <h4 style={{ margin: 0 }}>{item.title}</h4>
            <p style={{ margin: 'var(--flock-space-2) 0 0', color: 'var(--flock-color-text-secondary)' }}>{item.description}</p>
          </div>
        </ListItem>
      )}
    />
  ),
}

// ─── Pagination ────────────────────────────────────────────
export const Pagination: Story = {
  render: () => {
    const allItems = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`)
    return (
      <List
        bordered
        dataSource={allItems}
        pagination={{ pageSize: 5, size: 'small' }}
        renderItem={(item: string) => <ListItem>{item}</ListItem>}
      />
    )
  },
}

// ─── Vertical ──────────────────────────────────────────────
export const Vertical: Story = {
  render: () => (
    <List
      itemLayout="vertical"
      dataSource={articles}
      renderItem={(item) => (
        <ListItem
          actions={[<span key="likes">128 likes</span>, <span key="comments">12 comments</span>]}
          extra={
            <div style={{ width: 120, height: 80, background: 'var(--flock-color-bg-layout)', borderRadius: 'var(--flock-radius-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--flock-color-text-tertiary)' }}>
              Image
            </div>
          }
        >
          <ListItemMeta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.title}`} />}
            title={item.title}
            description="Published 2 days ago"
          />
          {item.description}
        </ListItem>
      )}
    />
  ),
}
