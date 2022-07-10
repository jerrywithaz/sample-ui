import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchInput } from "@zerry-ui/components";

export default {
  title: "Forms/SearchInput",
  component: SearchInput,
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
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  size: "small",
  borderRadius: "pill",
  placeholder: "Search for doctors, medications, etc"
};
