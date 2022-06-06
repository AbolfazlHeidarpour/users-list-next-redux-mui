import React from "react";

export type LastNameFieldProps = {
  readonly lastName: string;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}