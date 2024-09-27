import { tv, VariantProps } from "tailwind-variants";
import React from "react";
import { FormLabelContent } from "../label-content/formLabelContent";

const textVariants = tv({
  base: "input",
  variants: {
    variant: {
      border: "input-bordered",
      ghost: "input-ghost",
    },
    color: {
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
    size: {
      xs: "input-xs",
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
      xl: "input-xl",
    },
  },
  defaultVariants: {
    variant: "border",
    size: "md",
  },
});
type TextInputVariables = VariantProps<typeof textVariants>;
export type InputProps = React.ComponentProps<"input"> &
  TextInputVariables & {
    label?: string;
    errorText?: string;
  };
export const TextInput = ({ label, errorText, ...props }: InputProps) => (
  <FormLabelContent label={label} errorText={errorText}>
    <input className={textVariants(props)} {...props} />
  </FormLabelContent>
);
