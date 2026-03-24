import { Tooltip as AntTooltip } from 'antd'
import type { TooltipProps as AntTooltipProps } from 'antd'
import type { ReactNode } from 'react'

export interface TooltipProps {
  /** Tooltip content */
  title?: ReactNode
  /** Placement position */
  placement?: AntTooltipProps['placement']
  /** Custom color */
  color?: string
  /** Whether to show arrow */
  arrow?: boolean
  /** Trigger element */
  children?: ReactNode
}

/**
 * Tooltip — floating label on hover.
 * Built on Ant Design Tooltip with Flock DS tokens via FlockProvider.
 */
export const Tooltip = ({
  arrow = true,
  ...props
}: TooltipProps) => (
  <AntTooltip arrow={arrow} {...props} />
)

export default Tooltip
