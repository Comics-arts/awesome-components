import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import React from "react";

/**
 * These stories showcase the button
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The primary button
 */
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

/**
 * The secondary button
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

/**
 * The transparent button
 */
export const Transparent: Story = {
  args: {
    variant: "transparent",
  },
};

/**
 * The small button
 */
export const Small: Story = {
  args: {
    size: "small",
  },
};

/**
 * The medium button
 */
export const Medium: Story = {
  args: {
    size: "medium",
  },
};

/**
 * The large button
 */
export const Large: Story = {
  args: {
    size: "large",
  },
};

/**
 * The disabled button
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
