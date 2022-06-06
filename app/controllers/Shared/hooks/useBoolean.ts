import React from "react";
import {UseBooleanReturnType} from "../types/UseBooleanReturnType";

const useBoolean = (initialState: boolean = false): UseBooleanReturnType => {
  const [state, setState] = React.useState<boolean>(initialState);

  const on = React.useCallback(
    () => setState(true),
    [setState]
  );

  const off = React.useCallback(
    () => setState(false),
    [setState]
  );

  const toggle = React.useCallback(
    () => setState(prevState => !prevState)
    ,
    [setState]
  );

  return [state, on, off, toggle];
};

export default useBoolean;