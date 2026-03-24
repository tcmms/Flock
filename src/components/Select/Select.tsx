import { Select as AntSelect } from 'antd'
import type { SelectProps as AntSelectProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type SelectProps = AntSelectProps

/**
 * Select — dropdown selection control.
 * Built on Ant Design Select with Flock DS tokens via FlockProvider.
 * Uses Flock icons for suffix, clear, and remove by default.
 */
export const Select = ({ suffixIcon, allowClear, ...props }: SelectProps) => (
  <AntSelect
    suffixIcon={suffixIcon ?? <FlockIcons.ArrowDown />}
    allowClear={allowClear}
    {...props}
  />
)

export default Select
