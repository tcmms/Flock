import { List as AntList } from 'antd'
import type { ListProps } from 'antd'

/**
 * List — simple list display.
 * Built on Ant Design List with Flock DS tokens via FlockProvider.
 * Supports all Ant Design List props including List.Item and List.Item.Meta.
 */
export { AntList as List }
export type { ListProps }

const ListItem = AntList.Item
const ListItemMeta = AntList.Item.Meta
export { ListItem, ListItemMeta }
