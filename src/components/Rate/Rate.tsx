import { Rate as AntRate } from 'antd'
import type { RateProps as AntRateProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type RateProps = AntRateProps

/**
 * Rate — star rating control.
 * Built on Ant Design Rate with Flock DS tokens via FlockProvider.
 * Uses Flock star icon by default.
 */
export const Rate = ({ character, ...props }: RateProps) => (
  <AntRate
    character={character ?? <FlockIcons.Star />}
    {...props}
  />
)

export default Rate
