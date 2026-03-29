import { ConfigProvider } from 'antd'
import type { ReactNode } from 'react'

export type FlockTheme = 'ops' | 'ff'

const brandTokens = {
  ops: {
    colorPrimary: '#D90217',
    colorPrimaryHover: '#B30018',
    colorPrimaryActive: '#B30018',
    colorPrimaryBg: '#FFE7E6',
    colorPrimaryBorder: '#FF7D7D',
  },
  ff: {
    colorPrimary: '#5C44F0',
    colorPrimaryHover: '#3E2EC9',
    colorPrimaryActive: '#3E2EC9',
    colorPrimaryBg: '#F4F0FF',
    colorPrimaryBorder: '#D0C2FF',
  },
} as const

const inputTokens = {
  ops: {
    activeBorderColor: '#D90217',
    activeShadow: '0 0 0 2px rgba(217, 2, 23, 0.1)',
  },
  ff: {
    activeBorderColor: '#5C44F0',
    activeShadow: '0 0 0 2px rgba(92, 68, 240, 0.1)',
  },
} as const

export const FlockProvider = ({
  theme = 'ops',
  children,
}: {
  theme?: FlockTheme
  children: ReactNode
}) => (
  <ConfigProvider
    theme={{
      token: {
        /* Brand — theme-dependent */
        ...brandTokens[theme],

        /* Neutral text */
        colorText: 'rgba(0, 0, 0, 0.88)',
        colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
        colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
        colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
        colorTextPlaceholder: 'rgba(0, 0, 0, 0.45)',
        colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
        colorTextLightSolid: '#FFFFFF',

        /* Neutral background */
        colorBgContainer: '#FFFFFF',
        colorBgElevated: '#FFFFFF',
        colorBgLayout: '#F6F6F6',
        colorBgContainerDisabled: '#F6F6F6',
        colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
        colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
        colorBgMask: 'rgba(0, 0, 0, 0.45)',

        /* Neutral border */
        colorBorder: '#D9D9D9',
        colorBorderSecondary: '#F0F0F0',
        colorSplit: 'rgba(0, 0, 0, 0.06)',

        /* Neutral fill */
        colorFill: 'rgba(0, 0, 0, 0.15)',
        colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
        colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
        colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',

        /* Semantic */
        colorSuccess: '#08AF3B',
        colorWarning: '#FF9900',
        colorError: '#F5222D',
        colorInfo: '#0A84FF',

        /* Typography */
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: 14,
        fontSizeLG: 16,
        fontSizeSM: 12,
        fontSizeXL: 20,
        fontSizeHeading1: 40,
        fontSizeHeading2: 30,
        fontSizeHeading3: 24,
        fontSizeHeading4: 20,
        fontSizeHeading5: 20,
        lineHeight: 1.5714,
        lineHeightLG: 1.5,
        lineHeightSM: 1.6667,

        /* Spacing */
        padding: 16,
        paddingLG: 24,
        paddingSM: 12,
        paddingXS: 8,
        paddingXXS: 4,
        margin: 16,
        marginLG: 24,
        marginSM: 12,
        marginXS: 8,
        marginXXS: 4,

        /* Border radius */
        borderRadius: 8,
        borderRadiusLG: 12,
        borderRadiusSM: 4,
        borderRadiusXS: 2,

        /* Control heights */
        controlHeight: 32,
        controlHeightLG: 40,
        controlHeightSM: 24,

        /* Line width */
        lineWidth: 1,
        lineWidthBold: 2,
      },
      components: {
        Button: {
          fontWeight: 500,
          borderRadius: 8,
          controlHeight: 32,
          controlHeightSM: 24,
          controlHeightLG: 40,
          paddingInline: 15,
          paddingInlineSM: 7,
          paddingInlineLG: 15,
        },
        Input: {
          colorBgContainer: 'rgba(0, 0, 0, 0.04)',
          colorBorder: 'transparent',
          hoverBorderColor: 'transparent',
          ...inputTokens[theme],
          errorActiveShadow: '0 0 0 2px rgba(245, 34, 45, 0.1)',
          warningActiveShadow: '0 0 0 2px rgba(255, 153, 0, 0.1)',
          paddingInline: 12,
        },
        Steps: {
          colorSplit: 'rgba(0, 0, 0, 0.03)',
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
)

export default FlockProvider
