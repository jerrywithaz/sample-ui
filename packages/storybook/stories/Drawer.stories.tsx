import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@zerry-ui/components";

export default {
  title: "Navigation/Drawer",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box backgroundColor="gray" flex={1} padding={20}>
    <Box backgroundColor="red" padding={20}></Box>
    <Box backgroundColor="blue" padding={20}></Box>
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {};
