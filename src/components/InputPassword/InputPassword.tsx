import { Input } from 'antd'
import type { InputProps as AntInputProps } from 'antd'
import type { ReactNode } from 'react'
import { FlockIcons } from '../../icons/flockIcons'

export type InputPasswordSize = 'small' | 'default' | 'large'
export type InputPasswordStatus = '' | 'error' | 'warning'

export interface InputPasswordProps {
  /** Input size */
  size?: InputPasswordSize
  /** Validation status */
  status?: InputPasswordStatus
  /** Placeholder text */
  placeholder?: string
  /** Input value */
  value?: string
  /** Default value */
  defaultValue?: string
  /** Disabled state */
  disabled?: boolean
  /** Whether to show visibility toggle */
  visibilityToggle?: boolean
  /** Custom icon render */
  iconRender?: (visible: boolean) => ReactNode
  /** Change handler */
  onChange?: AntInputProps['onChange']
  /** Blur handler */
  onBlur?: AntInputProps['onBlur']
  /** Focus handler */
  onFocus?: AntInputProps['onFocus']
}

/**
 * InputPassword — password input with visibility toggle.
 * Built on Ant Design Input.Password with Flock DS tokens via FlockProvider.
 * Uses Flock eye icons for show/hide toggle.
 */
export const InputPassword = ({
  size = 'default',
  status = '',
  visibilityToggle = true,
  iconRender,
  ...props
}: InputPasswordProps) => (
  <Input.Password
    variant="filled"
    size={size === 'default' ? undefined : size}
    status={status}
    visibilityToggle={visibilityToggle}
    iconRender={iconRender ?? ((visible) => visible ? <FlockIcons.EyeShow /> : <FlockIcons.EyeHide />)}
    {...props}
  />
)

export default InputPassword
