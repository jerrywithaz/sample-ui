import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FlexBox } from '@zerry-ui/components';

export default {
  title: 'Layout/FlexBox',
  component: FlexBox,
} as ComponentMeta<typeof FlexBox>;

const Template: ComponentStory<typeof FlexBox> = (args) => (
  <FlexBox vertical backgroundColor="gray" flex={1} padding={20}>
    <FlexBox horizontal flex={1} backgroundColor="red" padding={20}>
      <FlexBox flex={1} backgroundColor="green" vertical padding={20}>
        <FlexBox flex={2} backgroundColor="orange"></FlexBox>
        <FlexBox flex={1} backgroundColor="pink"></FlexBox>
      </FlexBox>
      <FlexBox flex={1} backgroundColor="yellow"></FlexBox>
    </FlexBox>
    <FlexBox flex={1} backgroundColor="blue"></FlexBox>
  </FlexBox>
);

export const Primary = Template.bind({});

Primary.args = {
  
};