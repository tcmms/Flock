import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Tree, DirectoryTree } from './Tree'
import type { DataNode, EventDataNode } from 'antd/es/tree'

const treeData: DataNode[] = [
  {
    title: 'src',
    key: '0',
    children: [
      {
        title: 'components',
        key: '0-0',
        children: [
          { title: 'Button.tsx', key: '0-0-0', isLeaf: true },
          { title: 'Input.tsx', key: '0-0-1', isLeaf: true },
          { title: 'Select.tsx', key: '0-0-2', isLeaf: true },
        ],
      },
      {
        title: 'utils',
        key: '0-1',
        children: [
          { title: 'helpers.ts', key: '0-1-0', isLeaf: true },
          { title: 'constants.ts', key: '0-1-1', isLeaf: true },
        ],
      },
    ],
  },
  {
    title: 'public',
    key: '1',
    children: [
      { title: 'index.html', key: '1-0', isLeaf: true },
      { title: 'favicon.ico', key: '1-1', isLeaf: true },
    ],
  },
  { title: 'package.json', key: '2', isLeaf: true },
  { title: 'tsconfig.json', key: '3', isLeaf: true },
]

/**
 * Tree — hierarchical tree structure for displaying nested data.
 */
const meta: Meta<typeof Tree> = {
  title: 'Data Display/Tree',
  component: Tree,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tree>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    treeData,
    defaultExpandAll: true,
  },
}

// ─── With Checkbox ─────────────────────────────────────────
export const WithCheckbox: Story = {
  name: 'With checkbox',
  args: {
    treeData,
    checkable: true,
    defaultExpandAll: true,
    defaultCheckedKeys: ['0-0-0', '0-0-1'],
  },
}

// ─── Draggable ─────────────────────────────────────────────
export const Draggable: Story = {
  args: {
    treeData,
    draggable: true,
    defaultExpandAll: true,
  },
}

// ─── Directory Tree ────────────────────────────────────────
export const DirectoryTreeStory: Story = {
  name: 'Directory tree',
  render: () => (
    <DirectoryTree
      treeData={treeData}
      defaultExpandAll
      multiple
    />
  ),
}

// ─── With Search ───────────────────────────────────────────
const WithSearchTree = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const [expandedKeys, setExpandedKeys] = React.useState<React.Key[]>(['0', '0-0', '0-1', '1'])

  const getAllParentKeys = (key: string, data: DataNode[]): string[] => {
    const keys: string[] = []
    const findParent = (nodes: DataNode[], targetKey: string, parents: string[]) => {
      for (const node of nodes) {
        if (node.key === targetKey) { keys.push(...parents); return true }
        if (node.children && findParent(node.children, targetKey, [...parents, node.key as string])) return true
      }
      return false
    }
    findParent(data, key, [])
    return keys
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    if (value) {
      const flatKeys: string[] = []
      const flatten = (nodes: DataNode[]) => {
        for (const node of nodes) {
          if ((node.title as string).toLowerCase().includes(value.toLowerCase())) {
            flatKeys.push(...getAllParentKeys(node.key as string, treeData))
          }
          if (node.children) flatten(node.children)
        }
      }
      flatten(treeData)
      setExpandedKeys([...new Set(flatKeys)])
    }
  }

  return (
    <div>
      <input placeholder="Search tree…" value={searchValue} onChange={handleSearch}
        style={{ width: '100%', marginBottom: 'var(--flock-space-2)', padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)', border: 'var(--flock-line-width) solid var(--flock-color-border)', borderRadius: 'var(--flock-radius-sm)' }}
      />
      <Tree treeData={treeData} expandedKeys={expandedKeys} onExpand={setExpandedKeys}
        titleRender={(node) => {
          const title = node.title as string
          if (!searchValue) return <span>{title}</span>
          const index = title.toLowerCase().indexOf(searchValue.toLowerCase())
          if (index === -1) return <span>{title}</span>
          return <span>{title.slice(0, index)}<span style={{ color: 'var(--flock-color-error)' }}>{title.slice(index, index + searchValue.length)}</span>{title.slice(index + searchValue.length)}</span>
        }}
      />
    </div>
  )
}
export const WithSearch: Story = { name: 'With search', render: () => <WithSearchTree /> }

// ─── With Line ─────────────────────────────────────────────
export const WithLine: Story = {
  name: 'With line',
  args: {
    treeData,
    showLine: true,
    defaultExpandAll: true,
  },
}

// ─── Async Load ────────────────────────────────────────────
const AsyncLoadTree = () => {
  const [data, setData] = React.useState<DataNode[]>([
    { title: 'Expand me', key: '0' },
    { title: 'Another node', key: '1' },
    { title: 'Leaf node', key: '2', isLeaf: true },
  ])

  const onLoadData = ({ key }: EventDataNode<DataNode>) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setData((prev) => {
          const addChildren = (nodes: DataNode[]): DataNode[] =>
            nodes.map((node) => {
              if (node.key === key) {
                return { ...node, children: [
                  { title: `${node.title} — Child 1`, key: `${key}-0`, isLeaf: true },
                  { title: `${node.title} — Child 2`, key: `${key}-1`, isLeaf: true },
                ]}
              }
              if (node.children) return { ...node, children: addChildren(node.children) }
              return node
            })
          return addChildren(prev)
        })
        resolve()
      }, 800)
    })

  return <Tree treeData={data} loadData={onLoadData} />
}
export const AsyncLoad: Story = { name: 'Async load', render: () => <AsyncLoadTree /> }
