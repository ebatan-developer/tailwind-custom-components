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
import React from "react";
import { tv } from "tailwind-variants";
var buttonVariables = tv({
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
export var Button = function (_a) {
    var loading = _a.loading, props = __rest(_a, ["loading"]);
    return (<button className={buttonVariables(props)} {...props} disabled={props.disabled || loading}>
      {loading && <span className={"loading loading-spinner"}/>}
      {props.children}
    </button>);
};
