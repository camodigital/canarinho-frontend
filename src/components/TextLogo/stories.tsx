import { Story, Meta } from '@storybook/react/types-6-0'
import TextLogo, { TextLogoProps } from '.'

export default {
  title: 'TextLogo',
  component: TextLogo,
  args: {
    children: 'Escola Canarinho'
  }
} as Meta

export const Default: Story<TextLogoProps> = (args) => <TextLogo {...args} />
