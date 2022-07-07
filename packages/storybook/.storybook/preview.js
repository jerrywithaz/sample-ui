import { ThemeProvider, FlexBox } from "@zerry-ui/components";
import { createGlobalStyle } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  #root {
    display: flex;
  }
`;

const withTheme = (Story) => (
  <ThemeProvider>
    <GlobalStyle />
    <FlexBox height="100%" width="100%">
      <Story />
    </FlexBox>
  </ThemeProvider>
);

export const decorators = [withTheme];
