import type { CSSProperties } from 'react'

export type TierVariant = 'splus' | 'platinum' | 'gold'

export interface CustomerTierBadgeProps {
  /** Customer membership tier */
  tier: TierVariant
}

/** Neutral pill style — shared by Platinum, Gold */
const neutralStyle: CSSProperties = {
  background: 'rgba(0,0,0,0.04)',
  color: 'var(--flock-color-text)',
}

const tierConfig: Record<TierVariant, { label: string; style: CSSProperties }> = {
  splus: {
    label: 'S+ Member',
    style: {
      background: 'linear-gradient(73.35deg, var(--flock-color-tier-splus-start) 0%, var(--flock-color-tier-splus-mid) 50%, var(--flock-color-tier-splus-end) 100%)',
      color: 'var(--flock-color-white)',
    },
  },
  platinum: {
    label: 'Platinum Member',
    style: neutralStyle,
  },
  gold: {
    label: 'Gold Member',
    style: neutralStyle,
  },
}

/**
 * CustomerTierBadge — compact pill indicating customer membership tier.
 * Variants: S+ (gradient), Platinum (neutral), Gold (neutral).
 * Matches Figma OrderCard badge spec.
 */
export function CustomerTierBadge({ tier }: CustomerTierBadgeProps) {
  const { label, style } = tierConfig[tier]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexShrink: 0,
        padding: '1px var(--flock-padding-xs)',
        borderRadius: 'var(--flock-radius-full)',
        fontSize: 'var(--flock-font-size-sm)',
        fontWeight: 'var(--flock-font-weight-medium)',
        lineHeight: 'var(--flock-line-height-sm)',
        fontFamily: 'var(--flock-font-family)',
        ...style,
      }}
    >
      {label}
    </span>
  )
}

export default CustomerTierBadge
