import React from "react";
import { TextInput } from "../../src/components/input/text-input";
import { TextArea } from "../../src/components/input/text-area";

export const BaseInput = (): React.ReactNode => {
  return (
    <TextInput
      placeholder={"ここにテキスト"}
      label={"hogehoge"}
      errorText={"ここにエラーが入ります"}
    />
  );
};

export const BaseTextAreaInput = (): React.ReactNode => {
  return (
    <TextArea
      placeholder={"ここにテキスト"}
      label={"hogehoge"}
      errorText={"ここにエラーが入ります"}
      rows={5}
    />
  );
};
