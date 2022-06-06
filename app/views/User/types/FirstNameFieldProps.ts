import React from "react";

export type FirstNameFieldProps = {
  readonly firstName: string;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}