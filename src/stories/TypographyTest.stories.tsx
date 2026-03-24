import type { Meta, StoryObj } from '@storybook/react'

const TypographyTest = () => (
  <div style={{ padding: 'var(--flock-padding-lg)', fontFamily: 'var(--flock-font-family)' }}>
    <h2 style={{ fontSize: 'var(--flock-font-size-sm)', color: 'var(--flock-color-text-tertiary)', marginBottom: 'var(--flock-space-4)' }}>HEADINGS</h2>

    <p style={{ fontSize: 'var(--flock-font-size-heading-1)', lineHeight: 'var(--flock-line-height-heading-1)', fontWeight: 'var(--flock-font-weight-heading-1)' }}>H1 · 40px / 48px · ExtraBold</p>
    <p style={{ fontSize: 'var(--flock-font-size-heading-2)', lineHeight: 'var(--flock-line-height-heading-2)', fontWeight: 'var(--flock-font-weight-heading-2)' }}>H2 · 30px / 40px · Bold</p>
    <p style={{ fontSize: 'var(--flock-font-size-heading-3)', lineHeight: 'var(--flock-line-height-heading-3)', fontWeight: 'var(--flock-font-weight-heading-3)' }}>H3 · 24px / 32px · Bold</p>
    <p style={{ fontSize: 'var(--flock-font-size-heading-4)', lineHeight: 'var(--flock-line-height-heading-4)', fontWeight: 'var(--flock-font-weight-heading-4)' }}>H4 · 20px / 28px · Bold</p>
    <p style={{ fontSize: 'var(--flock-font-size-heading-5)', lineHeight: 'var(--flock-line-height-heading-5)', fontWeight: 'var(--flock-font-weight-heading-5)' }}>H5 · 20px / 28px · SemiBold</p>
    <p style={{ fontSize: 'var(--flock-font-size-heading-6)', lineHeight: 'var(--flock-line-height-heading-6)', fontWeight: 'var(--flock-font-weight-heading-6)' }}>H6 · 16px / 24px · Medium</p>

    <h2 style={{ fontSize: 'var(--flock-font-size-sm)', color: 'var(--flock-color-text-tertiary)', margin: 'var(--flock-space-6) 0 var(--flock-space-4)' }}>BODY TEXT</h2>

    <p style={{ fontSize: 'var(--flock-font-size-xl)', lineHeight: 'var(--flock-line-height-xl)', fontWeight: 'var(--flock-font-weight-regular)' }}>XL Normal · 20px / 28px · 400</p>
    <p style={{ fontSize: 'var(--flock-font-size-lg)', lineHeight: 'var(--flock-line-height-lg)', fontWeight: 'var(--flock-font-weight-regular)' }}>LG Normal · 16px / 24px · 400</p>
    <p style={{ fontSize: 'var(--flock-font-size-base)', lineHeight: 'var(--flock-line-height-base)', fontWeight: 'var(--flock-font-weight-regular)' }}>Base Normal · 14px / 22px · 400</p>
    <p style={{ fontSize: 'var(--flock-font-size-base)', lineHeight: 'var(--flock-line-height-base)', fontWeight: 'var(--flock-font-weight-medium)' }}>Base Strong · 14px / 22px · 500</p>
    <p style={{ fontSize: 'var(--flock-font-size-base)', lineHeight: 'var(--flock-line-height-base)', fontWeight: 'var(--flock-font-weight-semibold)' }}>Base Semibold · 14px / 22px · 600</p>
    <p style={{ fontSize: 'var(--flock-font-size-sm)', lineHeight: 'var(--flock-line-height-sm)', fontWeight: 'var(--flock-font-weight-regular)' }}>SM Normal · 12px / 16px · 400</p>
  </div>
)

const meta: Meta = {
  title: 'General/Typography',
  component: TypographyTest,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj
export const AllStyles: Story = {}
