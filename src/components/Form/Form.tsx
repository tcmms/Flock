/**
 * Form — collects, validates, and submits user input.
 */
import { Form as AntForm } from 'antd'
import type { FormProps, FormItemProps } from 'antd'

export { AntForm as Form }
export const FormItem = AntForm.Item
export const FormList = AntForm.List
export type { FormProps, FormItemProps }
