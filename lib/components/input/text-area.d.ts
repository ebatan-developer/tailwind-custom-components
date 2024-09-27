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
        md: string;
        sm: string;
        lg: string;
        xl: string;
    };
}, undefined, "textarea", import("tailwind-variants/dist/config").TVConfig<{
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
        md: string;
        sm: string;
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
        md: string;
        sm: string;
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
        md: string;
        sm: string;
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
        md: string;
        sm: string;
        lg: string;
        xl: string;
    };
}, undefined, "textarea", import("tailwind-variants/dist/config").TVConfig<{
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
        md: string;
        sm: string;
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
        md: string;
        sm: string;
        lg: string;
        xl: string;
    };
}>, unknown, unknown, undefined>>;
type TextAreaVariables = VariantProps<typeof textVariants>;
export type TextAreaProps = React.ComponentProps<"textarea"> & TextAreaVariables & {
    label?: string;
    errorText?: string;
};
export declare const TextArea: ({ label, errorText, ...props }: TextAreaProps) => React.JSX.Element;
export {};
