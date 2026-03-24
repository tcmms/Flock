import { AutoComplete as AntAutoComplete } from 'antd'
import type { AutoCompleteProps as AntAutoCompleteProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type AutoCompleteProps = AntAutoCompleteProps

/**
 * AutoComplete — auto-complete input control.
 * Built on Ant Design AutoComplete with Flock DS tokens via FlockProvider.
 * Uses Flock arrow icon for suffix.
 */
export const AutoComplete = ({ suffixIcon, ...props }: AutoCompleteProps) => (
  <AntAutoComplete
    suffixIcon={suffixIcon ?? <FlockIcons.ArrowDown />}
    {...props}
  />
)

export default AutoComplete
