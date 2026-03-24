import { Alert as AntAlert } from 'antd'
import type { AlertProps as AntAlertProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type AlertProps = AntAlertProps

const statusIcons: Record<string, React.ReactNode> = {
  info: <FlockIcons.Info />,
  warning: <FlockIcons.Warning />,
  success: <FlockIcons.Check />,
  error: <FlockIcons.Error />,
}

/**
 * Alert — displays a brief, important message.
 * Built on Ant Design Alert with Flock DS tokens via FlockProvider.
 * Uses Flock icons for close button and status indicators.
 */
export const Alert = ({ closeIcon, icon, showIcon, type, ...props }: AlertProps) => (
  <AntAlert
    closeIcon={closeIcon ?? <FlockIcons.Close />}
    icon={icon ?? (type ? statusIcons[type] : undefined)}
    showIcon={showIcon}
    type={type}
    {...props}
  />
)

export default Alert
