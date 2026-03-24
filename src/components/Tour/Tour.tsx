import { Tour as AntTour } from 'antd'
import type { TourProps as AntTourProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type TourProps = AntTourProps

/**
 * Tour — guided product tour.
 * Built on Ant Design Tour with Flock DS tokens via FlockProvider.
 * Uses Flock close icon by default.
 */
export const Tour = ({ closeIcon, ...props }: TourProps) => (
  <AntTour
    closeIcon={closeIcon ?? <FlockIcons.Close />}
    {...props}
  />
)

export default Tour
