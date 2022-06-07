import React from "react";
import User from "../../../models/Users/User";

export type UseSearchUser = {
  readonly keyword: string;
  readonly handleKeywordChange: React.ChangeEventHandler<HTMLInputElement>;
  readonly handleSearch: (data: Record<number, User[]>) => Record<number, User[]>;
}