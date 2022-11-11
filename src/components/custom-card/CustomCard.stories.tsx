import { ComponentMeta, ComponentStory } from '@storybook/react'
import CustomCard from './CustomCard'

export default {
  title: 'Custom Card',
  component: CustomCard,
} as ComponentMeta<typeof CustomCard>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CustomCard> = (args) => (
  <CustomCard {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  title: 'Harry Potter',
  image: 'https://cdn.rebrickable.com/media/sets/fig-000457/60621.jpg',
}
