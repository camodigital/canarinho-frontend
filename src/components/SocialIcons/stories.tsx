import { Story, Meta } from '@storybook/react/types-6-0'
import SocialIcons, { SocialIconsProps } from '.'

export default {
  title: 'SocialIcons',
  component: SocialIcons,
  args: {
    tone: 'secondary'
  }
} as Meta

export const Default: Story<SocialIconsProps> = (args) => (
  <SocialIcons {...args} />
)
