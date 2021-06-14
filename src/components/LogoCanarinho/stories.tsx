import { Story, Meta } from '@storybook/react/types-6-0'
import LogoCanarinho, { LogoCanarinhoProps } from '.'

export default {
  title: 'LogoCanarinho',
  component: LogoCanarinho,
  args: {
    tone: 'secondary',
    compact: false
  }
} as Meta

export const Default: Story<LogoCanarinhoProps> = (args) => (
  <LogoCanarinho {...args} />
)
