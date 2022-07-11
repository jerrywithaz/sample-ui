import React from "react";
import { View } from "react-native";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import ThemeProvider from "@zerry-ui/components/theme/provider";
import { useThemeFonts } from "@zerry-ui/components";

const LoadFonts = ({ children }) => {
  const loaded = useThemeFonts();

  if (!loaded) return null;

  return <>{children}</>;
};

const StoryContainer = ({ children }) => {
  return <View style={{ padding: 12, flex: 1 }}>{children}</View>;
};

const withTheme = (Story) => {
  return (
    <ThemeProvider>
      <StoryContainer>
        <LoadFonts>
          <Story />
        </LoadFonts>
      </StoryContainer>
    </ThemeProvider>
  );
};

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
