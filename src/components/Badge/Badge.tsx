import { Badge as AntBadge } from 'antd'
import type { BadgeProps as AntBadgeProps } from 'antd'
import type { ReactNode } from 'react'

export type BadgeStatus = 'default' | 'success' | 'processing' | 'error' | 'warning'
export type BadgeSize = 'default' | 'small'

export interface BadgeProps {
  /** Number to show in badge */
  count?: ReactNode
  /** Whether to show as dot */
  dot?: boolean
  /** Status type */
  status?: BadgeStatus
  /** Status text */
  text?: string
  /** Custom color */
  color?: string
  /** Badge size */
  size?: BadgeSize
  /** Whether to show badge when count is zero */
  showZero?: boolean
  /** Max count to show */
  overflowCount?: number
  /** Offset of badge [left, top] */
  offset?: AntBadgeProps['offset']
  children?: ReactNode
}

/**
 * Badge — displays a status dot or count indicator.
 * Built on Ant Design Badge with Flock DS tokens via FlockProvider.
 */
export const Badge = (props: BadgeProps) => <AntBadge {...props} />

export default Badge
