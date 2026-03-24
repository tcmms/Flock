import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TreeSelect } from './TreeSelect'

const treeData = [
  {
    title: 'Engineering',
    value: 'engineering',
    children: [
      {
        title: 'Frontend',
        value: 'frontend',
        children: [
          { title: 'React Team', value: 'react' },
          { title: 'Vue Team', value: 'vue' },
        ],
      },
      {
        title: 'Backend',
        value: 'backend',
        children: [
          { title: 'Node Team', value: 'node' },
          { title: 'Go Team', value: 'go' },
        ],
      },
    ],
  },
  {
    title: 'Design',
    value: 'design',
    children: [
      { title: 'Product Design', value: 'product-design' },
      { title: 'Brand Design', value: 'brand-design' },
    ],
  },
  {
    title: 'Marketing',
    value: 'marketing',
    children: [
      { title: 'Growth', value: 'growth' },
      { title: 'Content', value: 'content' },
    ],
  },
]

/**
 * TreeSelect — tree-structured selection control for hierarchical data.
 */
const meta: Meta<typeof TreeSelect> = {
  title: 'Data Entry/TreeSelect',
  component: TreeSelect,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof TreeSelect>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  args: {
    treeData,
    placeholder: 'Select team…',
    style: { width: 280 },
    treeDefaultExpandAll: true,
  },
}

// ─── Multiple ──────────────────────────────────────────────
export const Multiple: Story = {
  args: {
    treeData,
    placeholder: 'Select teams…',
    multiple: true,
    style: { width: 280 },
    treeDefaultExpandAll: true,
  },
}

// ─── Checkable ─────────────────────────────────────────────
export const Checkable: Story = {
  args: {
    treeData,
    placeholder: 'Check teams…',
    treeCheckable: true,
    style: { width: 280 },
    treeDefaultExpandAll: true,
  },
}

// ─── With Search ───────────────────────────────────────────
export const WithSearch: Story = {
  name: 'With search',
  args: {
    treeData,
    placeholder: 'Search teams…',
    showSearch: true,
    style: { width: 280 },
    treeDefaultExpandAll: true,
    filterTreeNode: (input: string, node: any) =>
      (node?.title as string)?.toLowerCase().includes(input.toLowerCase()),
  },
}

// ─── Async Load ────────────────────────────────────────────
type AsyncNode = { id: number; title: string; value: string; isLeaf: boolean; children?: AsyncNode[] }

const AsyncLoadTreeSelect = () => {
  const [data, setData] = React.useState<AsyncNode[]>([
    { id: 1, title: 'Expand to load', value: '1', isLeaf: false },
    { id: 2, title: 'Static node', value: '2', isLeaf: true },
  ])

  const onLoadData = ({ id }: { id: number }) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setData((prev) =>
          prev.map((node) =>
            node.id === id
              ? { ...node, children: [
                  { id: id * 10 + 1, title: `Child ${id}-1`, value: `${id}-1`, isLeaf: true },
                  { id: id * 10 + 2, title: `Child ${id}-2`, value: `${id}-2`, isLeaf: true },
                ]}
              : node,
          ),
        )
        resolve()
      }, 800)
    })

  return (
    <TreeSelect
      treeData={data as Parameters<typeof TreeSelect>[0]['treeData']}
      placeholder="Select…"
      style={{ width: 280 }}
      loadData={onLoadData as unknown as Parameters<typeof TreeSelect>[0]['loadData']}
      treeDataSimpleMode={false}
    />
  )
}
export const AsyncLoad: Story = { name: 'Async load', render: () => <AsyncLoadTreeSelect /> }
