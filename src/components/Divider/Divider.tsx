import { Divider as AntDivider } from 'antd'
import type { DividerProps as AntDividerProps } from 'antd'

export type DividerType = 'horizontal' | 'vertical'
export type DividerOrientation = 'left' | 'center' | 'right'

export type DividerProps = AntDividerProps

/**
 * Divider — horizontal or vertical separator.
 * Built on Ant Design Divider with Flock DS tokens via FlockProvider.
 */
export const Divider = (props: DividerProps) => <AntDivider {...props} />

export default Divider
