import { Checkbox as AntCheckbox } from 'antd'
import type { CheckboxProps as AntCheckboxProps } from 'antd'
import type { ReactNode } from 'react'

export interface CheckboxProps {
  /** Whether checked */
  checked?: boolean
  /** Default checked state */
  defaultChecked?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Indeterminate state */
  indeterminate?: boolean
  /** Change handler */
  onChange?: AntCheckboxProps['onChange']
  /** Label text */
  children?: ReactNode
}

export interface CheckboxGroupProps {
  /** Selected values */
  value?: string[]
  /** Default selected values */
  defaultValue?: string[]
  /** Disabled state */
  disabled?: boolean
  /** Options list */
  options?: { label: ReactNode; value: string; disabled?: boolean }[]
  /** Change handler */
  onChange?: (checkedValues: string[]) => void
}

/**
 * Checkbox — selection control for multiple choices.
 * Built on Ant Design Checkbox with Flock DS tokens via FlockProvider.
 */
export const Checkbox = (props: CheckboxProps) => <AntCheckbox {...props} />

/** Checkbox.Group for managing multiple checkboxes */
export const CheckboxGroup = AntCheckbox.Group

export default Checkbox
