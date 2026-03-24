import { Spin } from 'antd'
import type { ReactNode } from 'react'

export type SpinnerSize = 'small' | 'default' | 'large'

export interface SpinnerProps {
  /** Spinner size */
  size?: SpinnerSize
  /** Loading tip text */
  tip?: ReactNode
  /** Whether to show spinner */
  spinning?: boolean
  /** Delay in ms before showing */
  delay?: number
  /** Content to wrap with loading overlay */
  children?: ReactNode
}

/**
 * Spinner — loading indicator.
 * Built on Ant Design Spin with Flock DS tokens via FlockProvider.
 */
export const Spinner = ({
  size = 'default',
  spinning = true,
  ...props
}: SpinnerProps) => (
  <Spin size={size} spinning={spinning} {...props} />
)

export default Spinner
