import snoonuWordmark from '../../assets/snoonu-wordmark.svg'
import { Icon } from '../Icon'
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
  /** Store logo URL — shown as avatar in the store selector */
  storeLogo?: string
}

/* ─── Nav icon names (flock-ds Icon component) ─── */
const ICONS: Record<string, string> = {
  'live-orders':      'SidebarLiveOrdersIcon',
  'order-history':    'SidebarOrderHistoryIcon',
  'notifications':    'SidebarNotificationsIcon',
  'menu':             'SidebarMenuIcon',
  'working-hours':    'SidebarWorkingHoursIcon',
  'business-profile': 'SidebarBusinessProfileIcon',
  'advertisements':   'SidebarAdvertisementsIcon',
  'discounts':        'SidebarDiscountsIcon',
  'analytics':        'SidebarAnalyticsIcon',
  'payouts':          'SidebarPayoutsIcon',
  'dbs':              'SidebarDeliveryIcon',
  'account-contacts': 'SidebarAccountContactsIcon',
  'learn-grow':       'SidebarLearnGrowIcon',
}

/* ─── Icon helper ─── */
const NavIcon = ({ name, invert = false }: { name: string; invert?: boolean }) => (
  <div style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: invert ? 'black' : 'white' }}>
    <Icon name={name} size={20} color="currentColor" />
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
  storeLogo,
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
            src={snoonuWordmark}
            alt="Snoonu Merchant"
            onClick={onBrandClick}
            style={{ height: 20, width: 'auto', display: 'block', filter: isLight ? 'brightness(0) saturate(100%) invert(13%) sepia(97%) saturate(7469%) hue-rotate(353deg) brightness(89%) contrast(109%)' : undefined, cursor: onBrandClick ? 'pointer' : undefined }}
          />
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
            src={snoonuWordmark}
            alt="S"
            style={{ height: 20, width: 'auto', display: 'block', filter: isLight ? 'brightness(0) saturate(100%) invert(13%) sepia(97%) saturate(7469%) hue-rotate(353deg) brightness(89%) contrast(109%)' : undefined, maxWidth: 22, objectFit: 'cover', objectPosition: 'left' }}
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
        <Icon name="InterfaceEssentialLayoutIcon" size={24} color={isLight ? 'black' : 'white'} />
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
        {storeLogo ? (
          <img
            src={storeLogo}
            alt={storeName}
            style={{ width: 32, height: 32, borderRadius: '50%', display: 'block', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isLight ? 'var(--flock-color-primary)' : 'white' }}>
            <Icon name="BuildingConstructionStoreIcon" size={20} color="currentColor" />
          </div>
        )}
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
          <div style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isLight ? 'var(--flock-sidebar-light-text)' : 'white' }}>
            <Icon name="InterfaceEssentialArrowRightIcon" size={16} color="currentColor" />
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
                  icon={<NavIcon name={ICONS[item.id]} invert={isLight} />}
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
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
          <div style={{ width: 16, height: 16, flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isLight ? 'var(--flock-sidebar-light-text)' : 'white' }}>
            <Icon name="SidebarDocPillIcon" size={16} color="currentColor" />
          </div>
        </div>
      ) : (
        <div style={{ width: 16, height: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isLight ? 'var(--flock-sidebar-light-text)' : 'white' }}>
          <Icon name="SidebarDocPillIcon" size={16} color="currentColor" />
        </div>
      )}
    </div>
  </div>
  )
}

export default Sidebar
