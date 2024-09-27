import { Button } from "../../src";
import React from "react";

export const BaseButton = (): React.ReactNode => (
  <Button color={"primary"}>MainButton</Button>
);

export const LoadingButton = (): React.ReactNode => (
  <Button loading={true}>Loading...</Button>
);
