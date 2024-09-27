import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariables = tv({
  base: "btn",
  variants: {
    color: {
      primary: "btn-primary",
      secondary: "btn-secondary",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    fullWidth: {
      true: "w-full",
    },
    variant: {
      outline: "btn-outline",
      link: "btn-link",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    fullWidth: false,
  },
});
type ButtonVariants = VariantProps<typeof buttonVariables>;

export type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariants & {
    loading?: boolean;
  };

export const Button = ({ loading, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariables(props)}
      {...props}
      disabled={props.disabled || loading}
    >
      {loading && <span className={"loading loading-spinner"} />}
      {props.children}
    </button>
  );
};
