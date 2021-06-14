import { Story, Meta } from '@storybook/react/types-6-0'
import { MenuProps } from 'types/menu'
import MenuDesk from '.'
import mock from './mock'

export default {
  title: 'MenuDesk',
  component: MenuDesk,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    logoName: mock.logoName,
    menuLinks: mock.menuLinks,
    menuButtons: mock.menuButtons,
    menuSuppTitle: mock.menuSuppTitle,
    menuSuppLinks: mock.menuSuppLinks
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <MenuDesk {...args} />
