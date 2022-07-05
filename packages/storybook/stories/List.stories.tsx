import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { List, ListItem } from "@zerry-ui/components";
import { ListRenderItem } from "react-native";

export default {
  title: "Layout/List",
  component: List,
} as ComponentMeta<typeof List>;

const RenderItem: ListRenderItem<{ id: number }> = ({ item }) => {
  return (
    <ListItem title={`${Math.random()}`} description={`${Math.random()}`} />
  );
}

const Template: ComponentStory<typeof List> = (args) => (
  <List data={[{ id: 1}, { id: 2 }]} renderItem={RenderItem} />
);

export const Primary = Template.bind({});

Primary.args = {};
