import React from "react";

export type MobileFieldProps = {
  readonly mobile: string;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}