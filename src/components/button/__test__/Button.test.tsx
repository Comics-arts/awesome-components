import "@testing-library/jest-dom";
import React from "react";
import { vi, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { renderWithTheme } from "../../../testWrapper";

import * as stories from "../__docs__/Button.stories";

const { Primary, Disabled } = composeStories(stories);

test("renders button with custom children", async () => {
  renderWithTheme(<Primary />);
  expect(screen.getByText(/Button/i)).toBeInTheDocument();
});

test("onclick handler is called", async () => {
  const onClickSpy = vi.fn();
  renderWithTheme(<Primary onClick={onClickSpy} />);
  const buttonElement = screen.getByRole("button");
  buttonElement.click();
  expect(onClickSpy).toHaveBeenCalled();
});

test("onclick handler is not called when disabled", async () => {
  const onClickSpy = vi.fn();
  renderWithTheme(<Disabled onClick={onClickSpy} />);
  screen.getByRole("button").click();
  expect(onClickSpy).not.toHaveBeenCalled();
});
