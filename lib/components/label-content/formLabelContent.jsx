import React from "react";
export var FormLabelContent = function (_a) {
    var label = _a.label, children = _a.children, errorText = _a.errorText;
    return (<label className={"form-control"}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
      <div className="label">
        <span className="label-text-alt text-red-600">{errorText}</span>
      </div>
    </label>);
};
