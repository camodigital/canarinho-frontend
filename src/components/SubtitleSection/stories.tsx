import { Story, Meta } from '@storybook/react/types-6-0'
import SubtitleSection, { SubtitleSectionProps } from '.'

export default {
  title: 'SubtitleSection',
  component: SubtitleSection
} as Meta

export const Default: Story<SubtitleSectionProps> = (args) => (
  <SubtitleSection {...args} />
)
