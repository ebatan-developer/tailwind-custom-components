import React from "react";

export type LabelContentProps = {
  label?: string;
  children?: React.ReactNode | string;
};
export const LabelContent = ({
  label,
  children,
}: LabelContentProps): React.ReactNode => {
  return (
    <div>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
    </div>
  );
};
