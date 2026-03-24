import { Avatar as AntAvatar } from 'antd'
import type { CSSProperties, ReactNode } from 'react'

export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  /** Size — preset or number in px */
  size?: 'small' | 'default' | 'large' | number
  /** Shape */
  shape?: AvatarShape
  /** Image source URL */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Icon element */
  icon?: ReactNode
  /** Text content (initials) */
  children?: ReactNode
  /** Inline styles */
  style?: CSSProperties
}

/**
 * Avatar — user or entity image/icon/initials.
 * Built on Ant Design Avatar with Flock DS tokens via FlockProvider.
 */
export const Avatar = (props: AvatarProps) => <AntAvatar {...props} />

/** Avatar.Group for stacking multiple avatars */
export const AvatarGroup = AntAvatar.Group

export default Avatar
