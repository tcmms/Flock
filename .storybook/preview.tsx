import type { Preview } from '@storybook/react'
import '../src/tokens/index.css'
import { FlockProvider } from '../src/providers/FlockProvider'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Flock DS theme',
      defaultValue: 'ops',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'ops', title: 'OPS — Ruby/Red' },
          { value: 'ff', title: 'FF — Indigo/Purple' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <FlockProvider theme={context.globals.theme}>
        <Story />
      </FlockProvider>
    ),
  ],
  parameters: {
    options: {
      storySort: (a, b) => {
        const roots = [
          'Introduction',
          'General',
          'Layout',
          'Navigation',
          'Data Entry',
          'Data Display',
          'Feedback',
        ]
        const rank = (title) => {
          const root = title.split('/')[0]
          const idx = roots.indexOf(root)
          return idx === -1 ? roots.length : idx
        }
        const ra = rank(a.title)
        const rb = rank(b.title)
        if (ra !== rb) return ra - rb
        return a.title.localeCompare(b.title, undefined, { numeric: true })
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F9FAFB' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#0c0c0d' },
      ],
    },
  },
}
export default preview
