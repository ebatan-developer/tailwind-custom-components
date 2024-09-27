import React from "react";

export type FormLabelContentProps = {
  label?: string;
  labelSub?: string;
  errorText?: string;
  children?: React.ReactNode | string;
};
export const FormLabelContent = ({
  label,
  children,
  errorText,
}: FormLabelContentProps): React.ReactNode => {
  return (
    <label className={"form-control"}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
      <div className="label">
        <span className="label-text-alt text-red-600">{errorText}</span>
      </div>
    </label>
  );
};
