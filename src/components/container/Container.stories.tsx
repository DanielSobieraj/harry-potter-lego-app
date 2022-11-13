import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Main: ComponentStory<typeof Container> = () => <Container />;
