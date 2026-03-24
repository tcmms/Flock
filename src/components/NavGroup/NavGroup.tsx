export type SidebarVariant = 'dark' | 'light'

export interface NavGroupProps {
  /** Section label text */
  label: string
  /** Whether the sidebar is collapsed */
  collapsed?: boolean
  /** Color variant */
  variant?: SidebarVariant
}

/**
 * NavGroup — sidebar navigation section label.
 * Displays a category heading for a group of NavItems.
 * Responsive to sidebar collapsed/expanded state.
 */
export const NavGroup = ({ label, collapsed = false, variant = 'dark' }: NavGroupProps) => (
  <div
    style={{
      height: 36,
      padding: collapsed ? '12px 4px 8px 4px' : '12px 12px 8px 12px',
      width: collapsed
        ? 'var(--flock-sidebar-item-width-collapsed)'
        : 'var(--flock-sidebar-item-width-expanded)',
      fontFamily: 'var(--flock-font-family)',
      fontWeight: 'var(--flock-font-weight-medium)',
      fontSize: 'var(--flock-font-size-sm)',
      lineHeight: 'var(--flock-line-height-sm)',
      color: variant === 'light'
        ? 'var(--flock-sidebar-light-label)'
        : 'var(--flock-sidebar-label-dark)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: collapsed ? 'center' : undefined,
      boxSizing: 'border-box',
      opacity: collapsed ? 0.7 : 1,
      transform: 'translateZ(0)',
      willChange: 'width, opacity',
      transition: collapsed
        ? 'opacity 80ms ease, width 180ms cubic-bezier(0.4, 0, 1, 1), padding 180ms cubic-bezier(0.4, 0, 1, 1)'
        : 'opacity 240ms ease 80ms, width 340ms cubic-bezier(0.4, 0, 0.2, 1), padding 340ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}
  >
    {collapsed ? label.split(/\s+/)[0] : label}
  </div>
)

export default NavGroup
