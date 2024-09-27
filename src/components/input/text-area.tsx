import { tv, VariantProps } from "tailwind-variants";
import React from "react";
import { FormLabelContent } from "../label-content/formLabelContent";

const textVariants = tv({
  base: "textarea",
  variants: {
    variant: {
      border: "textarea-bordered",
      ghost: "textarea-ghost",
    },
    color: {
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
    },
    size: {
      xs: "textarea-xs",
      md: "textarea-md",
      sm: "textarea-sm",
      lg: "textarea-lg",
      xl: "textarea-xl",
    },
  },
  defaultVariants: {
    variant: "border",
    size: "sm",
  },
});
type TextAreaVariables = VariantProps<typeof textVariants>;
export type TextAreaProps = React.ComponentProps<"textarea"> &
  TextAreaVariables & {
    label?: string;
    errorText?: string;
  };
export const TextArea = ({ label, errorText, ...props }: TextAreaProps) => (
  <FormLabelContent label={label} errorText={errorText}>
    <textarea className={textVariants(props)} {...props} />
  </FormLabelContent>
);
