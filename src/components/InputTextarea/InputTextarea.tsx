import { Input } from 'antd'
import type { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea'

export type InputTextareaSize = 'small' | 'default' | 'large'
export type InputTextareaStatus = '' | 'error' | 'warning'

export interface InputTextareaProps {
  /** Input size */
  size?: InputTextareaSize
  /** Validation status */
  status?: InputTextareaStatus
  /** Placeholder text */
  placeholder?: string
  /** Input value */
  value?: string
  /** Default value */
  defaultValue?: string
  /** Disabled state */
  disabled?: boolean
  /** Number of rows */
  rows?: number
  /** Auto resize config */
  autoSize?: AntTextAreaProps['autoSize']
  /** Show character count */
  showCount?: boolean
  /** Max length */
  maxLength?: number
  /** Change handler */
  onChange?: AntTextAreaProps['onChange']
  /** Blur handler */
  onBlur?: AntTextAreaProps['onBlur']
  /** Focus handler */
  onFocus?: AntTextAreaProps['onFocus']
}

/**
 * InputTextarea — multi-line text input.
 * Built on Ant Design Input.TextArea with Flock DS tokens via FlockProvider.
 * Uses filled style (grey background, no border by default).
 */
export const InputTextarea = ({
  size = 'default',
  status = '',
  ...props
}: InputTextareaProps) => (
  <Input.TextArea
    variant="filled"
    size={size === 'default' ? undefined : size}
    status={status}
    {...props}
  />
)

export default InputTextarea
