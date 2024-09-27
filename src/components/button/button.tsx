import React from "react";

export const Button = (props: React.ComponentProps<"button">) => {
  return <button className={"btn btn-primary"} {...props} />;
};
