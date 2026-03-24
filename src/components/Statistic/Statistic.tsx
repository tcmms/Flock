import { Statistic as AntStatistic } from 'antd'
import type { StatisticProps } from 'antd'

/**
 * Statistic — display statistic number or countdown.
 * Built on Ant Design Statistic with Flock DS tokens via FlockProvider.
 * Supports all Ant Design Statistic props including Statistic.Countdown.
 */
export { AntStatistic as Statistic }
export type { StatisticProps }

const StatisticCountdown = AntStatistic.Countdown
export { StatisticCountdown }
