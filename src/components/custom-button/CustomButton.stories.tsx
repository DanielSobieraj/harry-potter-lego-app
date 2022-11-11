import { ComponentMeta, ComponentStory } from '@storybook/react'
import CustomButton from './CustomButton'
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Custom Button',
  component: CustomButton,
  decorators: [withRouter],
} as ComponentMeta<typeof CustomButton>

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  children: 'Button',
  to: 'select',
  textTransform: 'capitalize',
}
