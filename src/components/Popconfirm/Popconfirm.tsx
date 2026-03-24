import { Popconfirm as AntPopconfirm } from 'antd'
import type { PopconfirmProps as AntPopconfirmProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type PopconfirmProps = AntPopconfirmProps

/**
 * Popconfirm — popover confirmation dialog.
 * Built on Ant Design Popconfirm with Flock DS tokens via FlockProvider.
 * Uses Flock warning icon by default.
 */
export const Popconfirm = ({ icon, ...props }: PopconfirmProps) => (
  <AntPopconfirm
    icon={icon ?? <FlockIcons.Warning />}
    {...props}
  />
)

export default Popconfirm
