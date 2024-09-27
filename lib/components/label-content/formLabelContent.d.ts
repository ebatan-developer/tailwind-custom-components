import React from "react";
export type FormLabelContentProps = {
    label?: string;
    labelSub?: string;
    errorText?: string;
    children?: React.ReactNode | string;
};
export declare const FormLabelContent: ({ label, children, errorText, }: FormLabelContentProps) => React.ReactNode;
