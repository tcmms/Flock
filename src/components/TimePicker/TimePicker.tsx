import { TimePicker as AntTimePicker } from 'antd'
import type { TimePickerProps as AntTimePickerProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type TimePickerProps = AntTimePickerProps

/**
 * TimePicker — time selection control.
 * Built on Ant Design TimePicker with Flock DS tokens via FlockProvider.
 * Uses Flock clock icon by default.
 */
export const TimePicker = ({ suffixIcon, ...props }: TimePickerProps) => (
  <AntTimePicker
    suffixIcon={suffixIcon ?? <FlockIcons.Clock />}
    {...props}
  />
)

export const TimeRangePicker = AntTimePicker.RangePicker

export default TimePicker
