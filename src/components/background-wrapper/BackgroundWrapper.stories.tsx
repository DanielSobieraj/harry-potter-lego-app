import { ComponentMeta, ComponentStory } from '@storybook/react'
import BackgroundWrapper from './BackgroundWrapper'

export default {
  title: 'BackgroundWrapper',
  component: BackgroundWrapper,
} as ComponentMeta<typeof BackgroundWrapper>

export const Main: ComponentStory<typeof BackgroundWrapper> = () => (
  <BackgroundWrapper />
)
