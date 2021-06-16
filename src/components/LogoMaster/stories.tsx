import { Story, Meta } from '@storybook/react/types-6-0'
import LogoMaster, { logoMasterProps } from '.'

export default {
  title: 'LogoMaster',
  component: LogoMaster,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<logoMasterProps> = (args) => (
  <LogoMaster {...args} />
)

Default.args = {
  name: 'Escola Canarinho',
  tone: 'secondary'
}
