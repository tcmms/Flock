import { BRAND_SNOONU_LOGO_MARK_URL, BRAND_SNOONU_LOGO_WORDMARK_URL } from '../../constants/brandAssets'
import { NavGroup } from '../NavGroup'
import type { SidebarVariant } from '../NavGroup'
import { NavItem } from '../NavItem'

export interface SidebarProps {
  /** Whether the sidebar is collapsed */
  isCollapsed?: boolean
  /** Toggle callback */
  onToggle?: () => void
  /** Store name displayed in the store selector */
  storeName?: string
  /** Merchant email displayed in the footer */
  merchantEmail?: string
  /** Currently active navigation item ID */
  activeItem?: string
  /** Navigation item click handler */
  onItemClick?: (id: string) => void
  /** Color variant: 'dark' (default) or 'light' (white) */
  variant?: SidebarVariant
  /** Callback when the brand label ("MERCHANT") is clicked */
  onBrandClick?: () => void
}

/* ─── Figma MCP asset URLs ─── */
const ICONS: Record<string, string> = {
  'live-orders':      'https://www.figma.com/api/mcp/asset/f3f65fd6-1214-4fa7-8262-bdca402df9a7',
  'order-history':    'https://www.figma.com/api/mcp/asset/1ebe3871-a2e4-483c-9910-84c6b02dd706',
  'notifications':    'https://www.figma.com/api/mcp/asset/7f4a2db4-0517-41fc-9c55-ffd19baa7f58',
  'menu':             'https://www.figma.com/api/mcp/asset/35a4d6d2-98f8-4aee-9594-02c54ada6a17',
  'working-hours':    'https://www.figma.com/api/mcp/asset/73100f25-ac7c-4de2-a2a4-e8afc2d33446',
  'business-profile': 'https://www.figma.com/api/mcp/asset/030113ee-63e8-4b36-af8c-64fba238b737',
  'advertisements':   'https://www.figma.com/api/mcp/asset/7ae6bd58-68ad-44f9-b966-657ccd0db700',
  'discounts':        'https://www.figma.com/api/mcp/asset/bed2e34a-0330-42a4-9fba-474eda55b483',
  'analytics':        'https://www.figma.com/api/mcp/asset/5959bf0f-563e-42ce-ba53-602ff2c49bb2',
  'payouts':          'https://www.figma.com/api/mcp/asset/db71bfe2-e2e2-4801-a104-7c1907e923ca',
  'dbs':              'https://www.figma.com/api/mcp/asset/9ce4df9d-5364-4722-8184-55520376e706',
  'account-contacts': 'https://www.figma.com/api/mcp/asset/b387c291-50f8-4baf-bbce-fcd07542caa0',
  'learn-grow':       'https://www.figma.com/api/mcp/asset/8ad204c8-574d-4827-aed5-6d929a5f73a6',
}
const ICON_LAYOUT_TOGGLE = 'https://www.figma.com/api/mcp/asset/ac1b1c8a-8338-4eb9-8b37-44c5f182c1e3'
const ICON_STORE_AVATAR  = 'https://www.figma.com/api/mcp/asset/23a42348-2217-4050-b673-3a764d945f8c'
const ICON_CHEVRON_RIGHT = 'https://www.figma.com/api/mcp/asset/b4bebe92-ac6e-4580-91a4-a3007be79c3b'
const ICON_LOGOUT        = 'https://www.figma.com/api/mcp/asset/5c1494be-e7a6-4149-95fe-07a04efbe34e'

/* ─── Icon helper ─── */
const NavIcon = ({ src, alt = '', invert = false }: { src: string; alt?: string; invert?: boolean }) => (
  <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
    <img src={src} alt={alt} style={{ display: 'block', position: 'absolute', inset: '-0.02%', width: '100%', height: '100%', filter: invert ? 'brightness(0) saturate(100%)' : undefined }} />
  </div>
)

/* ─── Nav data ─── */
interface NavEntry {
  id: string
  label: string
  signifier?: number
  hasDot?: boolean
  hasDoc?: boolean
}

interface NavSection {
  group: string
  items: NavEntry[]
}

const navSections: NavSection[] = [
  {
    group: 'ORDERS',
    items: [
      { id: 'live-orders', label: 'Live Orders' },
      { id: 'order-history', label: 'Order History' },
    ],
  },
  {
    group: 'ALERTS AND MESSAGES',
    items: [
      { id: 'notifications', label: 'Notifications', signifier: 3, hasDot: true },
    ],
  },
  {
    group: 'STORE SETUP',
    items: [
      { id: 'menu', label: 'Menu' },
      { id: 'working-hours', label: 'Working Hours' },
      { id: 'business-profile', label: 'Business Profile' },
    ],
  },
  {
    group: 'GROWTH & INSIGHTS',
    items: [
      { id: 'advertisements', label: 'Advertisements' },
      { id: 'discounts', label: 'Discounts & Bundles' },
      { id: 'analytics', label: 'Analytics' },
    ],
  },
  {
    group: 'FINANCE',
    items: [
      { id: 'payouts', label: 'Payouts' },
    ],
  },
  {
    group: 'NEW SERVICES',
    items: [
      { id: 'dbs', label: 'Delivery by Snoonu (DBS)' },
    ],
  },
  {
    group: 'HELP & RESOURCES',
    items: [
      { id: 'account-contacts', label: 'Account Contacts' },
      { id: 'learn-grow', label: 'Learn & Grow', hasDoc: true },
    ],
  },
]

/**
 * Sidebar — main navigation organism for the Merchant Portal.
 * Contains header with Snoonu logo, store selector, navigation sections, and footer.
 * Supports expanded (280px) and collapsed (78px) states with smooth transition.
 */
export const Sidebar = ({
  isCollapsed = false,
  onToggle,
  storeName = 'KFC For Americana',
  merchantEmail = 'khaled@snoonu.com',
  activeItem = 'live-orders',
  onItemClick,
  variant = 'dark',
  onBrandClick,
}: SidebarProps) => {
  const isLight = variant === 'light'

  return (
  <div
    style={{
      background: isLight
        ? 'var(--flock-sidebar-light-bg)'
        : isCollapsed
          ? 'var(--flock-sidebar-bg-gradient-collapsed)'
          : 'var(--flock-sidebar-bg-gradient)',
      width: isCollapsed ? 'var(--flock-sidebar-width-collapsed)' : 'var(--flock-sidebar-width-expanded)',
      transition: isCollapsed
        ? 'width 180ms cubic-bezier(0.4, 0, 1, 1), background 180ms ease'
        : 'width 340ms cubic-bezier(0.4, 0, 0.2, 1), background 340ms ease',
      overflow: 'clip',
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      willChange: 'width',
      contain: 'layout style',
      borderRight: isLight ? `1px solid var(--flock-sidebar-light-border)` : undefined,
    }}
  >
    {/* A — Header */}
    <div
      style={{
        height: 64,
        padding: '24px 20px 16px 20px',
        borderBottom: `1px solid ${isLight ? 'var(--flock-sidebar-light-border)' : 'rgba(255, 255, 255, 0.15)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Logo — crossfade between full and icon */}
      <div style={{ position: 'relative', height: 24, minWidth: 22 }}>
        {/* Full logo + MERCHANT (expanded) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 6,
            whiteSpace: 'nowrap',
            opacity: isCollapsed ? 0 : 1,
            pointerEvents: isCollapsed ? 'none' : 'auto',
            transition: isCollapsed ? 'opacity 120ms ease' : 'opacity 140ms ease 100ms',
            transform: 'translateZ(0)',
          }}
        >
          <img
            src={BRAND_SNOONU_LOGO_WORDMARK_URL}
            width={99}
            height={20}
            alt="Snoonu"
            style={{ display: 'block', filter: isLight ? 'brightness(0)' : undefined }}
          />
          <span
            onClick={onBrandClick}
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: '1px', color: isLight ? 'var(--flock-sidebar-light-text)' : 'white', lineHeight: 'normal', cursor: onBrandClick ? 'pointer' : undefined }}
          >
            MERCHANT
          </span>
        </div>
        {/* "S" icon (collapsed) */}
        <div
          style={{
            position: 'absolute',
            top: 2,
            left: -3,
            opacity: isCollapsed ? 1 : 0,
            pointerEvents: isCollapsed ? 'auto' : 'none',
            transition: isCollapsed ? 'opacity 140ms ease 60ms' : 'opacity 120ms ease',
            transform: 'translateZ(0)',
          }}
        >
          <img
            src={BRAND_SNOONU_LOGO_MARK_URL}
            width={22}
            height={20}
            alt="S"
            style={{ display: 'block', filter: isLight ? 'brightness(0)' : undefined }}
          />
        </div>
      </div>

      {/* Toggle button — always on the right */}
      <div
        onClick={onToggle}
        style={{
          width: 24, height: 24, cursor: 'pointer', flexShrink: 0, position: 'relative',
          transform: isCollapsed ? 'rotate(90deg) translateZ(0)' : 'rotate(-90deg) translateZ(0)',
          transition: isCollapsed
            ? 'transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            : 'transform 360ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <img src={ICON_LAYOUT_TOGGLE} alt="Toggle sidebar" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', filter: isLight ? 'brightness(0)' : undefined }} />
      </div>
    </div>

    {/* B — Store selector */}
    <div
      style={{
        height: 64,
        padding: isCollapsed ? '16px 20px' : '16px 20px',
        borderBottom: `1px solid ${isLight ? 'var(--flock-sidebar-light-border)' : 'rgba(255, 255, 255, 0.15)'}`,
        display: 'flex',
        flexDirection: isCollapsed ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : undefined,
        gap: isCollapsed ? 0 : 8,
        flexShrink: 0,
        boxSizing: 'border-box',
        transition: isCollapsed
          ? 'gap 180ms cubic-bezier(0.4, 0, 1, 1)'
          : 'gap 340ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        style={{
          background: isLight ? 'var(--flock-sidebar-light-store-avatar-bg)' : 'rgba(255, 255, 255, 0.15)',
          borderRadius: 6,
          padding: 2,
          flexShrink: 0,
        }}
      >
        <div style={{ width: 28, height: 28, position: 'relative', overflow: 'hidden' }}>
          <img
            src={ICON_STORE_AVATAR}
            alt={storeName}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
      {!isCollapsed && (
        <>
          <div style={{ flex: 1, minWidth: 0, minHeight: 1 }}>
            <p
              style={{
                fontFamily: 'var(--flock-font-family)',
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '22px',
                color: isLight ? 'var(--flock-sidebar-light-text)' : 'white',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              {storeName}
            </p>
          </div>
          <div style={{ width: 20, height: 20, flexShrink: 0, position: 'relative' }}>
            <img src={ICON_CHEVRON_RIGHT} alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', filter: isLight ? 'brightness(0)' : undefined }} />
          </div>
        </>
      )}
    </div>

    {/* C — Nav sections */}
    <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
      {(() => {
        let itemIndex = 0
        return navSections.map((section) => (
          <div key={section.group} style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', padding: isCollapsed ? 4 : '4px 8px' }}>
            <NavGroup label={section.group} collapsed={isCollapsed} variant={variant} />
            {section.items.map((item) => {
              const delay = isCollapsed ? 0 : itemIndex * 22
              itemIndex++
              return (
                <NavItem
                  key={item.id}
                  icon={<NavIcon src={ICONS[item.id]} alt={item.label} invert={isLight} />}
                  label={item.label}
                  isSelected={activeItem === item.id}
                  signifier={item.signifier}
                  hasDot={item.hasDot}
                  hasDoc={item.hasDoc}
                  isCollapsed={isCollapsed}
                  onClick={() => onItemClick?.(item.id)}
                  animationDelay={delay}
                  variant={variant}
                />
              )
            })}
          </div>
        ))
      })()}
    </div>

    {/* D — Footer */}
    <div
      style={{
        background: isLight ? 'var(--flock-sidebar-light-footer-bg)' : '#3c3c3c',
        borderTop: isLight ? `1px solid var(--flock-sidebar-light-border)` : undefined,
        height: 68,
        padding: isCollapsed ? '10px 20px' : '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCollapsed ? 'center' : 'start',
        justifyContent: isCollapsed ? 'center' : 'space-between',
        flexShrink: 0,
        boxSizing: 'border-box',
      }}
    >
      {!isCollapsed ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--flock-font-family)', fontWeight: 500, whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: 12, lineHeight: '16px', color: isLight ? 'var(--flock-sidebar-light-text-muted)' : 'rgba(255, 255, 255, 0.65)' }}>
              Merchant account
            </span>
            <span style={{ fontSize: 14, lineHeight: '22px', color: isLight ? 'var(--flock-sidebar-light-text)' : 'white' }}>
              {merchantEmail}
            </span>
          </div>
          <div style={{ width: 16, height: 16, flexShrink: 0, position: 'relative', cursor: 'pointer' }}>
            <img src={ICON_LOGOUT} alt="Logout" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', filter: isLight ? 'brightness(0)' : undefined }} />
          </div>
        </div>
      ) : (
        <div style={{ width: 16, height: 16, position: 'relative', cursor: 'pointer' }}>
          <img src={ICON_LOGOUT} alt="Logout" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', filter: isLight ? 'brightness(0)' : undefined }} />
        </div>
      )}
    </div>
  </div>
  )
}

export default Sidebar
