import { Collapse as AntCollapse } from 'antd'
import type { CollapseProps as AntCollapseProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type CollapseProps = AntCollapseProps

/**
 * Collapse — collapsible content panels.
 * Built on Ant Design Collapse with Flock DS tokens via FlockProvider.
 * Uses Flock arrow icon for expand indicator.
 */
export const Collapse = ({ expandIcon, ...props }: CollapseProps) => (
  <AntCollapse
    expandIcon={expandIcon ?? (() => <FlockIcons.ArrowRight />)}
    {...props}
  />
)

export default Collapse
