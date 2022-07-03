import React from "react";
import { View, ScrollView } from "react-native";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "@zerry-ui/components";

const StoryContainer = ({ children }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 12, flex: 1 }}>{children}</View>
    </ScrollView>
  );
};

const withTheme = (Story) => (
  <ThemeProvider>
    <StoryContainer>
      <Story />
    </StoryContainer>
  </ThemeProvider>
);

export const decorators = [withBackgrounds, withTheme];

export const parameters = {
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
