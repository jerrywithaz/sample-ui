import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "@zerry-ui/components";

export default {
  title: "Forms/TextInput",
  component: TextInput,
  argTypes: {
    size: {
      options: ["large", "medium", "small", "xSmall"],
      control: { type: "select" },
    },
    borderRadius: {
      options: ["pill", "default", "sharp"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  size: "small",
  borderRadius: "pill",
  placeholder: "Search for doctors, medications, etc"
};
