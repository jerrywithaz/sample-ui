/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

// temporary fix for https://github.com/storybookjs/react-native/issues/327 whilst the issue is investigated
try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require("../stories/Box.stories.tsx"),
    require("../stories/Button.stories.tsx"),
    require("../stories/ButtonBase.stories.tsx"),
    require("../stories/Drawer.stories.tsx"),
    require("../stories/FlexBox.stories.tsx"),
    require("../stories/Grid.stories.tsx"),
    require("../stories/Icon.stories.tsx"),
    require("../stories/List.stories.tsx"),
    require("../stories/Menu.stories.tsx"),
    require("../stories/Navigation.stories.tsx"),
    require("../stories/Recipe.cards.stories.tsx"),
    require("../stories/SearchInput.stories.tsx"),
    require("../stories/Table.stories.tsx"),
    require("../stories/Text.stories.tsx"),
    require("../stories/TextInput.stories.tsx"),
  ];
};

configure(getStories, module, false);
