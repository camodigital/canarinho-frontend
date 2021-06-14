import { Story, Meta } from '@storybook/react/types-6-0'
import TitleSection, { TitleSectionProps } from '.'

export default {
  title: 'TitleSection',
  component: TitleSection,
  args: {
    tone: 'secondary',
    text: 'Title Section',
    dark: false
  }
} as Meta

export const Default: Story<TitleSectionProps> = (args) => (
  <TitleSection {...args} />
)
