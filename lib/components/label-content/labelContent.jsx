import React from "react";
export var LabelContent = function (_a) {
    var label = _a.label, children = _a.children;
    return (<div>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
    </div>);
};
