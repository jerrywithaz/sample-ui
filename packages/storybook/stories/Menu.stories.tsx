import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu, MenuItem, FlexBox, MenuGroup } from "@zerry-ui/components";
import { NavigationContainer } from "@zerry-ui/navigation";

export default {
  title: "Navigation/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <NavigationContainer memoryRouter>
    <FlexBox flex={1} vertical width={300}>
      <Menu>
        <MenuItem title="Home" to="/" name="Home" />
        <MenuItem title="Dashboard" to="/dashboard" name="Dashboard" />
        <MenuItem title="Profile" to="/profile" name="Home" />
        <MenuGroup title="Analytics" to="/analytics" name="Analytics">
          <MenuItem title="Profile" to="/profile" name="Home" />
        </MenuGroup>
      </Menu>
    </FlexBox>
  </NavigationContainer>
);

export const Primary = Template.bind({});

Primary.args = {};
