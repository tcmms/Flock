import { Drawer as AntDrawer } from 'antd'
import type { DrawerProps as AntDrawerProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type DrawerProps = AntDrawerProps

/**
 * Drawer — a panel that slides in from the edge of the screen.
 * Built on Ant Design Drawer with Flock DS tokens via FlockProvider.
 * Uses Flock close icon by default.
 */
export const Drawer = ({ closeIcon, ...props }: DrawerProps) => (
  <AntDrawer
    closeIcon={closeIcon ?? <FlockIcons.Close />}
    {...props}
  />
)

export default Drawer
