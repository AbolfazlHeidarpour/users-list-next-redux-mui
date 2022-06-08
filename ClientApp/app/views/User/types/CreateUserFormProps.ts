import NewUser from "../../../models/Users/NewUser";
import React from "react";

export type CreateUserFormProps = {
  readonly user: NewUser;
  readonly onFNameChange: React.ChangeEventHandler<HTMLInputElement>;
  readonly onLNameChange: React.ChangeEventHandler<HTMLInputElement>;
  readonly onMobileChange: React.ChangeEventHandler<HTMLInputElement>;
  readonly onSubmit: () => void;
  readonly onClear: () => void;
  readonly submitAllowed: () => boolean;
  readonly cancelAllowed: () => boolean;
}