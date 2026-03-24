import { Tree as AntTree } from 'antd'
import type { TreeProps } from 'antd'

/**
 * Tree — hierarchical tree structure display.
 * Built on Ant Design Tree with Flock DS tokens via FlockProvider.
 * Supports all Ant Design Tree props including Tree.DirectoryTree.
 */
export { AntTree as Tree }
export type { TreeProps }

const DirectoryTree = AntTree.DirectoryTree
export { DirectoryTree }
