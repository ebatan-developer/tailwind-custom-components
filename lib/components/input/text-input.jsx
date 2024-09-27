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
export var TextInput = function (_a) {
    var label = _a.label, errorText = _a.errorText, props = __rest(_a, ["label", "errorText"]);
    return (<FormLabelContent label={label} errorText={errorText}>
    <input className={textVariants(props)} {...props}/>
  </FormLabelContent>);
};
