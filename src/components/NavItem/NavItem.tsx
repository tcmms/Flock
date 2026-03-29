import { useState } from 'react'
import type { SidebarVariant } from '../NavGroup'

export interface NavItemProps {
  /** Icon element (20×20px) */
  icon: React.ReactNode
  /** Item label text */
  label: string
  /** Whether this item is currently selected */
  isSelected?: boolean
  /** Blue signifier pill count */
  signifier?: number
  /** Red notification dot */
  hasDot?: boolean
  /** Document tag indicator */
  hasDoc?: boolean
  /** Whether the sidebar is collapsed */
  isCollapsed?: boolean
  /** Click handler */
  onClick?: () => void
  /** Stagger delay for expand animation (ms) */
  animationDelay?: number
  /** Color variant */
  variant?: SidebarVariant
}

/**
 * NavItem — sidebar navigation item.
 * Supports selected state, signifier pill, notification dot, and doc tag.
 * Responsive to sidebar collapsed/expanded state with layered animations.
 */
export const NavItem = ({
  icon,
  label,
  isSelected = false,
  signifier,
  hasDot = false,
  hasDoc = false,
  isCollapsed = false,
  onClick,
  animationDelay = 0,
  variant = 'dark',
}: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const isLight = variant === 'light'

  /* Layer B — label transition */
  const labelTransition = isCollapsed
    ? 'opacity 100ms ease, transform 100ms ease'
    : `opacity 280ms ease ${120 + animationDelay}ms, transform 280ms ease ${120 + animationDelay}ms`

  /* Stagger — item entrance */
  const itemTransition = isCollapsed
    ? 'background 100ms ease, width 180ms cubic-bezier(0.4, 0, 1, 1), padding 180ms cubic-bezier(0.4, 0, 1, 1), gap 180ms cubic-bezier(0.4, 0, 1, 1)'
    : `background 150ms ease, width 340ms cubic-bezier(0.4, 0, 0.2, 1), padding 340ms cubic-bezier(0.4, 0, 0.2, 1), gap 340ms cubic-bezier(0.4, 0, 0.2, 1)`

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: isCollapsed ? 0 : 'var(--flock-space-2)',
        justifyContent: isCollapsed ? 'center' : undefined,
        height: 'var(--flock-sidebar-item-height)',
        padding: isCollapsed ? 'var(--flock-padding-xs)' : 'var(--flock-sidebar-item-padding)',
        borderRadius: 'var(--flock-sidebar-item-radius)',
        width: isCollapsed
          ? 'var(--flock-sidebar-item-width-collapsed)'
          : 'var(--flock-sidebar-item-width-expanded)',
        background: isSelected
          ? (isLight ? 'var(--flock-sidebar-light-item-selected)' : 'var(--flock-sidebar-item-selected)')
          : isHovered
            ? (isLight ? 'var(--flock-sidebar-light-item-hover)' : 'var(--flock-sidebar-item-hover)')
            : 'transparent',
        cursor: 'pointer',
        position: 'relative',
        boxSizing: 'border-box',
        transition: itemTransition,
        transform: 'translateZ(0)',
        willChange: 'width, background',
      }}
    >
      {/* Icon — with hover scale */}
      <div
        style={{
          width: 'var(--flock-sidebar-item-icon-size)',
          height: 'var(--flock-sidebar-item-icon-size)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isHovered ? 'scale(1.12) translateZ(0)' : 'scale(1) translateZ(0)',
          transition: isHovered
            ? 'transform 260ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            : 'transform 220ms ease',
          filter: isLight ? 'var(--flock-sidebar-light-icon-filter)' : undefined,
        }}
      >
        {icon}
      </div>

      {/* Dot indicator */}
      {hasDot && (
        <div
          style={{
            position: 'absolute',
            width: 6,
            height: 6,
            left: 26,
            top: 6,
            borderRadius: '50%',
            background: 'var(--flock-color-error)',
          }}
        />
      )}

      {/* Label — always in DOM, animated via opacity+transform */}
      <span
        style={{
          flex: isCollapsed ? '0 0 0px' : 1,
          fontFamily: 'var(--flock-font-family)',
          fontWeight: 600,
          fontSize: 'var(--flock-font-size-base)',
          lineHeight: 'var(--flock-line-height-base)',
          color: isLight ? 'var(--flock-sidebar-light-text)' : 'var(--flock-sidebar-text)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: isCollapsed ? 0 : 'var(--flock-sidebar-item-label-max-width)',
          opacity: isCollapsed ? 0 : 1,
          transform: isCollapsed ? 'translateX(-6px) translateZ(0)' : 'translateX(0) translateZ(0)',
          transition: labelTransition,
          pointerEvents: isCollapsed ? 'none' : undefined,
        }}
      >
        {label}
      </span>

      {/* Signifier pill — animated */}
      {signifier != null && signifier > 0 && (
        <div
          style={{
            background: isLight ? 'var(--flock-sidebar-light-signifier-bg)' : 'var(--flock-sidebar-signifier-bg)',
            padding: '1px 12px',
            borderRadius: 'var(--flock-sidebar-signifier-radius)',
            flexShrink: 0,
            fontFamily: 'var(--flock-font-family)',
            fontWeight: 'var(--flock-font-weight-semibold)',
            fontSize: 'var(--flock-font-size-sm)',
            lineHeight: 'var(--flock-line-height-sm)',
            color: isLight ? '#FFFFFF' : 'var(--flock-sidebar-text)',
            opacity: isCollapsed ? 0 : 1,
            transform: isCollapsed ? 'translateX(-6px) scale(0.8) translateZ(0)' : 'translateX(0) scale(1) translateZ(0)',
            transition: labelTransition,
            pointerEvents: isCollapsed ? 'none' : undefined,
            position: isCollapsed ? 'absolute' : undefined,
          }}
        >
          {signifier}
        </div>
      )}

      {/* Doc tag — animated */}
      {hasDoc && (
        <div
          style={{
            background: 'var(--flock-color-white)',
            padding: '2px 6px 2px 8px',
            borderRadius: 24,
            gap: 'var(--flock-space-1)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'var(--flock-font-family)',
            fontWeight: 'var(--flock-font-weight-regular)',
            fontSize: 'var(--flock-font-size-sm)',
            lineHeight: 'var(--flock-line-height-sm)',
            color: 'var(--flock-color-text)',
            opacity: isCollapsed ? 0 : 1,
            transform: isCollapsed ? 'translateX(-6px) scale(0.8) translateZ(0)' : 'translateX(0) scale(1) translateZ(0)',
            transition: labelTransition,
            pointerEvents: isCollapsed ? 'none' : undefined,
            position: isCollapsed ? 'absolute' : undefined,
          }}
        >
          .doc
        </div>
      )}
    </div>
  )
}

export default NavItem
