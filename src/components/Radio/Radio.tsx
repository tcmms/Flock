import { Radio as AntRadio } from 'antd'
import type { RadioProps as AntRadioProps, RadioGroupProps as AntRadioGroupProps } from 'antd'
import type { ReactNode } from 'react'

export interface RadioProps {
  /** Radio value */
  value?: AntRadioProps['value']
  /** Whether checked */
  checked?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Change handler */
  onChange?: AntRadioProps['onChange']
  /** Label text */
  children?: ReactNode
}

export interface RadioGroupProps {
  /** Selected value */
  value?: AntRadioGroupProps['value']
  /** Default value */
  defaultValue?: AntRadioGroupProps['defaultValue']
  /** Disabled state */
  disabled?: boolean
  /** Change handler */
  onChange?: AntRadioGroupProps['onChange']
  /** Options list */
  options?: AntRadioGroupProps['options']
  /** Option render type */
  optionType?: 'default' | 'button'
  /** Button style when optionType is button */
  buttonStyle?: 'outline' | 'solid'
  children?: ReactNode
}

/**
 * Radio — selection control for single choice.
 * Built on Ant Design Radio with Flock DS tokens via FlockProvider.
 */
export const Radio = (props: RadioProps) => <AntRadio {...props} />

/** Radio.Group for managing multiple radio options */
export const RadioGroup = AntRadio.Group

/** Radio.Button for button-style radio */
export const RadioButton = AntRadio.Button

export default Radio
