import { Story, Meta } from '@storybook/react/types-6-0'
import { MenuProps } from 'types/menu'
import MenuSuppNav from '.'
import mock from './mock'

export default {
  title: 'MenuSuppNav',
  component: MenuSuppNav,
  args: {
    menuSuppLinks: mock.menuSuppLinks
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <MenuSuppNav {...args} />
