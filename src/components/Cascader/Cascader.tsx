import { Cascader as AntCascader } from 'antd'
import type { CascaderProps as AntCascaderProps, DefaultOptionType } from 'antd/es/cascader'
import type { ReactNode } from 'react'
import { FlockIcons } from '../../icons/flockIcons'

export type CascaderProps = AntCascaderProps<DefaultOptionType>

/**
 * Cascader — cascade selection control.
 * Built on Ant Design Cascader with Flock DS tokens via FlockProvider.
 * Uses Flock icons for suffix and expand indicators.
 */
export const Cascader = ({ suffixIcon, expandIcon, ...props }: CascaderProps) => {
  const mergedProps = {
    suffixIcon: (suffixIcon ?? <FlockIcons.ArrowDown />) as ReactNode,
    expandIcon: (expandIcon ?? <FlockIcons.ArrowRight />) as ReactNode,
    ...props,
  }
  // @ts-expect-error antd 6 expandIcon type mismatch — ReactNode is valid at runtime
  return <AntCascader {...mergedProps} />
}

export default Cascader
