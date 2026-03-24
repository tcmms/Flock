import type { ComponentType, SVGProps } from 'react'
import * as icons from '../../icons'

export interface IconProps {
  /** Icon name — matches export name from src/icons (e.g. "ArrowsDiagramsArrowIcon") */
  name: string
  /** Icon size in px */
  size?: number
  /** Icon color — defaults to currentColor */
  color?: string
  /** Additional class name */
  className?: string
}

/** Map of all available icons (excludes non-component exports like FlockIcons) */
export const iconMap = Object.fromEntries(
  Object.entries(icons).filter(([, value]) => typeof value === 'function')
) as Record<string, ComponentType<SVGProps<SVGSVGElement>>>

/**
 * Icon — renders an icon from the Flock icon library.
 * Uses currentColor for fill, so it inherits text color.
 */
export const Icon = ({
  name,
  size = 16,
  color = 'currentColor',
  className,
}: IconProps) => {
  const IconComponent = iconMap[name]
  if (!IconComponent) return null

  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', color }}
    />
  )
}

export default Icon
