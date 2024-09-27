import { VariantProps } from "tailwind-variants";
import React from "react";
declare const textVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        border: string;
        ghost: string;
    };
    color: {
        primary: string;
        secondary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "input", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        border: string;
        ghost: string;
    };
    color: {
        primary: string;
        secondary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, {
    variant: {
        border: string;
        ghost: string;
    };
    color: {
        primary: string;
        secondary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}>, {
    variant: {
        border: string;
        ghost: string;
    };
    color: {
        primary: string;
        secondary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        border: string;
        ghost: string;
    };
    color: {
        primary: string;
        secondary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "input", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        border: string;
        ghost: string;
    };
    color: {
        primary: string;
        secondary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, {
    variant: {
        border: string;
        ghost: string;
    };
    color: {
        primary: string;
        secondary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}>, unknown, unknown, undefined>>;
type TextInputVariables = VariantProps<typeof textVariants>;
export type InputProps = React.ComponentProps<"input"> & TextInputVariables & {
    label?: string;
    errorText?: string;
};
export declare const TextInput: ({ label, errorText, ...props }: InputProps) => React.JSX.Element;
export {};
