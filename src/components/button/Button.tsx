// components/button/button.tsx
import React from "react";
import styled, { css } from "styled-components";
import { lightTheme } from "../../styles/theme";

export type ButtonProps = {
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * The variant of the button
   * @default primary
   */
  variant?: "primary" | "secondary" | "transparent";
  /**
   * The size of the button
   * @default medium
   */
  size?: "small" | "medium" | "large";
  /**
   * The onClick function
   */
  onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>(
  ({ theme = lightTheme, variant = "primary", size = "medium" }) => css`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: ${theme.borderRadius.xxl};
    display: inline-block;
    color: ${theme.color.button[variant].text};
    background-color: ${theme.color.button[variant].background};
    padding: ${theme.padding.button[size].y} ${theme.padding.button[size].x};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
      background-color: ${theme.color.button[variant].hover};
    }
    &:active {
      box-shadow: 0 1px 30px 5px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
      background-color: ${theme.color.button[variant].background};
      opacity: 0.4;
      cursor: not-allowed;
    }
  `,
);
/**
 * # Button
 * Shows a button
 */
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  size,
  variant,
  ...props
}) => {
  return (
    <StyledButton type="button" variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
