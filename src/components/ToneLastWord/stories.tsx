import { Story, Meta } from '@storybook/react/types-6-0'
import ToneLastWord, { ToneLastWordProps } from '.'

export default {
  title: 'ToneLastWord',
  component: ToneLastWord,
  args: {
    children: 'Last Word'
  }
} as Meta

export const Default: Story<ToneLastWordProps> = (args) => (
  <ToneLastWord {...args} />
)
