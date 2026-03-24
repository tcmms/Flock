import { DatePicker as AntDatePicker } from 'antd'
import type { DatePickerProps as AntDatePickerProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type DatePickerProps = AntDatePickerProps

/**
 * DatePicker — date selection control.
 * Built on Ant Design DatePicker with Flock DS tokens via FlockProvider.
 * Uses Flock calendar icon by default.
 */
export const DatePicker = ({ suffixIcon, ...props }: DatePickerProps) => (
  <AntDatePicker
    suffixIcon={suffixIcon ?? <FlockIcons.Calendar />}
    {...props}
  />
)

export const RangePicker = AntDatePicker.RangePicker

export default DatePicker
