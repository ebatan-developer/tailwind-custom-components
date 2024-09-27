import React from "react";
import { VariantProps } from "tailwind-variants";
declare const buttonVariables: import("tailwind-variants").TVReturnType<{
    color: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
    variant: {
        outline: string;
        link: string;
    };
}, undefined, "btn", import("tailwind-variants/dist/config").TVConfig<{
    color: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
    variant: {
        outline: string;
        link: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
    variant: {
        outline: string;
        link: string;
    };
}>, {
    color: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
    variant: {
        outline: string;
        link: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    color: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
    variant: {
        outline: string;
        link: string;
    };
}, undefined, "btn", import("tailwind-variants/dist/config").TVConfig<{
    color: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
    variant: {
        outline: string;
        link: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
    variant: {
        outline: string;
        link: string;
    };
}>, unknown, unknown, undefined>>;
type ButtonVariants = VariantProps<typeof buttonVariables>;
export type ButtonProps = React.ComponentProps<"button"> & ButtonVariants & {
    loading?: boolean;
};
export declare const Button: ({ loading, ...props }: ButtonProps) => React.JSX.Element;
export {};
