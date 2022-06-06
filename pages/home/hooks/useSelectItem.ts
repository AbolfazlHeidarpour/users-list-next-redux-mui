import React from "react";
import {UseSelectItemReturnType} from "../types/UseSelectItemReturnType";

const useSelectItem = (initialSelected = 0): UseSelectItemReturnType => {
  const [state, setState] = React.useState(initialSelected);

  const select = React.useCallback(
    (index: number) => {
      setState(index)
    }
    , [setState]
  );

  return [
    state,
    select
  ];
};

export default useSelectItem;