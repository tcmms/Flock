import { Switch as AntSwitch } from 'antd'
import type { ReactNode } from 'react'

export type SwitchSize = 'default' | 'small'

export interface SwitchProps {
  /** Whether checked */
  checked?: boolean
  /** Default checked state */
  defaultChecked?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Loading state */
  loading?: boolean
  /** Switch size */
  size?: SwitchSize
  /** Content when checked */
  checkedChildren?: ReactNode
  /** Content when unchecked */
  unCheckedChildren?: ReactNode
  /** Change handler */
  onChange?: (checked: boolean) => void
}

/**
 * Switch — toggle between on/off.
 * Built on Ant Design Switch with Flock DS tokens via FlockProvider.
 */
export const Switch = (props: SwitchProps) => <AntSwitch {...props} />

export default Switch
