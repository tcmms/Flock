import { Input } from 'antd'
import type { InputProps as AntInputProps } from 'antd'
import type { CSSProperties, ReactNode } from 'react'

export type InputSize = 'small' | 'default' | 'large'
export type InputStatus = '' | 'error' | 'warning'

export interface InputFieldProps {
  /** Input size */
  size?: InputSize
  /** Validation status */
  status?: InputStatus
  /** Placeholder text */
  placeholder?: string
  /** Input value */
  value?: string
  /** Default value */
  defaultValue?: string
  /** Disabled state */
  disabled?: boolean
  /** Read only */
  readOnly?: boolean
  /** Show character count */
  showCount?: boolean
  /** Max length */
  maxLength?: number
  /** Prefix icon or text */
  prefix?: ReactNode
  /** Suffix icon or text */
  suffix?: ReactNode
  /** Content before the input */
  addonBefore?: ReactNode
  /** Content after the input */
  addonAfter?: ReactNode
  /** Allow clear button */
  allowClear?: boolean
  /** Input variant */
  variant?: AntInputProps['variant']
  /** Inline style */
  style?: CSSProperties
  /** Change handler */
  onChange?: AntInputProps['onChange']
  /** Blur handler */
  onBlur?: AntInputProps['onBlur']
  /** Focus handler */
  onFocus?: AntInputProps['onFocus']
  /** Press Enter handler */
  onPressEnter?: AntInputProps['onPressEnter']
}

/**
 * InputField — single-line text input.
 * Built on Ant Design Input with Flock DS tokens via FlockProvider.
 * Always uses filled style (grey background, no border by default).
 */
export const InputField = ({
  size = 'default',
  status = '',
  ...props
}: InputFieldProps) => (
  <Input
    variant="filled"
    size={size === 'default' ? undefined : size}
    status={status}
    {...props}
  />
)

export default InputField
