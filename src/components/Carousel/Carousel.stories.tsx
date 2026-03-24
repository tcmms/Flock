import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Carousel } from './Carousel'

const slideStyle: React.CSSProperties = {
  height: 160,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--flock-color-text-light-solid)',
  fontSize: 'var(--flock-font-size-xl)',
  fontWeight: 600,
}

const colors = [
  'var(--flock-color-info)',
  'var(--flock-color-success)',
  'var(--flock-color-warning)',
  'var(--flock-color-error)',
]

/**
 * Carousel — rotating content display (image slider, banner rotator).
 */
const meta: Meta<typeof Carousel> = {
  title: 'Layout/Carousel',
  component: Carousel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Carousel>

// ─── Default ───────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <Carousel>
      <div>
        <div style={{ ...slideStyle, background: colors[0] }}>Slide 1</div>
      </div>
      <div>
        <div style={{ ...slideStyle, background: colors[1] }}>Slide 2</div>
      </div>
      <div>
        <div style={{ ...slideStyle, background: colors[2] }}>Slide 3</div>
      </div>
      <div>
        <div style={{ ...slideStyle, background: colors[3] }}>Slide 4</div>
      </div>
    </Carousel>
  ),
}

// ─── Fade Effect ───────────────────────────────────────────
export const FadeEffect: Story = {
  name: 'Fade effect',
  render: () => (
    <Carousel effect="fade">
      {colors.map((bg, i) => (
        <div key={i}>
          <div style={{ ...slideStyle, background: bg }}>Slide {i + 1}</div>
        </div>
      ))}
    </Carousel>
  ),
}

// ─── Autoplay ──────────────────────────────────────────────
export const Autoplay: Story = {
  render: () => (
    <Carousel autoplay>
      {colors.map((bg, i) => (
        <div key={i}>
          <div style={{ ...slideStyle, background: bg }}>Slide {i + 1}</div>
        </div>
      ))}
    </Carousel>
  ),
}

// ─── Dots Position ─────────────────────────────────────────
export const DotsPosition: Story = {
  name: 'Dots position',
  render: () => (
    <Carousel dotPosition="left">
      {colors.map((bg, i) => (
        <div key={i}>
          <div style={{ ...slideStyle, background: bg }}>Slide {i + 1}</div>
        </div>
      ))}
    </Carousel>
  ),
}

// ─── Vertical ──────────────────────────────────────────────
export const Vertical: Story = {
  render: () => (
    <Carousel dotPosition="right">
      {colors.map((bg, i) => (
        <div key={i}>
          <div style={{ ...slideStyle, background: bg }}>Slide {i + 1}</div>
        </div>
      ))}
    </Carousel>
  ),
}
