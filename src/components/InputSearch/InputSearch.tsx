import { Input } from 'antd'
import type { SearchProps } from 'antd/es/input/Search'

export type InputSearchSize = 'small' | 'default' | 'large'
export type InputSearchStatus = '' | 'error' | 'warning'

export interface InputSearchProps {
  /** Input size */
  size?: InputSearchSize
  /** Validation status */
  status?: InputSearchStatus
  /** Placeholder text */
  placeholder?: string
  /** Input value */
  value?: string
  /** Default value */
  defaultValue?: string
  /** Disabled state */
  disabled?: boolean
  /** Show loading spinner */
  loading?: boolean
  /** Show search button */
  enterButton?: SearchProps['enterButton']
  /** Search handler */
  onSearch?: SearchProps['onSearch']
  /** Change handler */
  onChange?: SearchProps['onChange']
}

/**
 * InputSearch — search input with optional search button.
 * Built on Ant Design Input.Search with Flock DS tokens via FlockProvider.
 * Uses filled style (grey background, no border by default).
 */
export const InputSearch = ({
  size = 'default',
  status = '',
  enterButton = false,
  ...props
}: InputSearchProps) => (
  <Input.Search
    variant="filled"
    size={size === 'default' ? undefined : size}
    status={status}
    enterButton={enterButton}
    {...props}
  />
)

export default InputSearch
