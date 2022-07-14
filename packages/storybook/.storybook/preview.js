import { ThemeProvider, FlexBox, useThemeFonts, ResponsiveProvider } from "@zerry-ui/components";
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

const LoadFonts = ({ children }) => {
  const loaded = useThemeFonts();

  if (!loaded) return null;

  return <>{children}</>;
};

const withTheme = (Story) => (
  <ThemeProvider>
    <GlobalStyle />
    <LoadFonts>
      <ResponsiveProvider>

      <FlexBox height="100%" width="100%">
        <Story />
      </FlexBox>
      </ResponsiveProvider>
    </LoadFonts>
  </ThemeProvider>
);

export const decorators = [withTheme];
