import {Action} from "redux";

type StandardAction<T, P> = Action<T> & {
  payload: P;
}

export default StandardAction;