import { TreeSelect as AntTreeSelect } from 'antd'
import type { TreeSelectProps as AntTreeSelectProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type TreeSelectProps = AntTreeSelectProps

/**
 * TreeSelect — tree selection control.
 * Built on Ant Design TreeSelect with Flock DS tokens via FlockProvider.
 * Uses Flock icons for suffix and switcher indicators.
 */
export const TreeSelect = ({ suffixIcon, switcherIcon, ...props }: TreeSelectProps) => (
  <AntTreeSelect
    suffixIcon={suffixIcon ?? <FlockIcons.ArrowDown />}
    switcherIcon={switcherIcon ?? <FlockIcons.ArrowDown />}
    {...props}
  />
)

export default TreeSelect
