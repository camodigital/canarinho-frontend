import { Story, Meta } from '@storybook/react/types-6-0'
import { MenuProps } from 'types/menu'
import MenuNav from '.'
import mock from './mock'

export default {
  title: 'MenuNav',
  component: MenuNav,
  args: {
    menuLinks: mock.menuLinks,
    menuButtons: mock.menuButtons
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <MenuNav {...args} />
