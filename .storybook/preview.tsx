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
      storySort: {
        order: ['General', 'Layout', 'Navigation', 'Data Entry', 'Data Display', 'Feedback'],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F9FAFB' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
}
export default preview
