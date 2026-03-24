import { Tag as AntTag } from 'antd'
import type { ReactNode } from 'react'
import { FlockIcons } from '../../icons/flockIcons'

export type TagColor = 'success' | 'warning' | 'error' | 'default' | 'processing'

export interface TagProps {
  /** Preset color or custom color string */
  color?: TagColor | string
  /** Whether the tag can be closed */
  closable?: boolean
  /** Custom close icon */
  closeIcon?: ReactNode
  /** Close handler */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void
  /** Icon before text */
  icon?: ReactNode
  /** Whether to show border */
  bordered?: boolean
  children?: ReactNode
}

/**
 * Tag — categorization label.
 * Built on Ant Design Tag with Flock DS tokens via FlockProvider.
 * Uses Flock close icon when closable.
 */
export const Tag = ({ closeIcon, ...props }: TagProps) => (
  <AntTag
    closeIcon={closeIcon ?? <FlockIcons.Close />}
    {...props}
  />
)

export default Tag
