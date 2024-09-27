var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { tv } from "tailwind-variants";
import React from "react";
import { FormLabelContent } from "../label-content/formLabelContent";
var textVariants = tv({
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
export var TextArea = function (_a) {
    var label = _a.label, errorText = _a.errorText, props = __rest(_a, ["label", "errorText"]);
    return (<FormLabelContent label={label} errorText={errorText}>
    <textarea className={textVariants(props)} {...props}/>
  </FormLabelContent>);
};
