import "@testing-library/jest-dom";
import {
  queries,
  Queries,
  render,
  RenderOptions,
} from "@testing-library/react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { PropsWithChildren, ReactElement } from "react";
import { lightTheme } from "./styles";

const TEST_THEME = lightTheme;

function createWrapper(theme?: DefaultTheme) {
  return function Wrapper({
    children,
  }: PropsWithChildren): ReactElement | null {
    return (
      <ThemeProvider theme={theme ? theme : TEST_THEME}>
        {children}
      </ThemeProvider>
    );
  };
}

interface RenderWithThemeOptions<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
> extends RenderOptions<Q, Container, BaseElement> {
  theme?: DefaultTheme;
}

export function renderWithTheme(
  children: React.ReactElement,
  options?: RenderWithThemeOptions,
) {
  const { theme, ...rest } = { ...options };
  return render(children, { wrapper: createWrapper(theme), ...rest });
}
