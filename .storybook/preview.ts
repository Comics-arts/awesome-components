import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
      toc: true,
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyle,
    }),
  ],
};

export default preview;
