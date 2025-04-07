import { CallbackDemo } from "./CallbackDemo";
import { ContextDemo } from "./ContextDemo";
import { MemoDemo } from "./MemoDemo";
import { ReducerDemo } from "./ReducerDemo";
import { StateDemo } from "./StateDemo";
import { TransitionDemo } from "./TransitionDemo";

export const demos = [
  { id: "state", label: "useState", Component: StateDemo },
  { id: "context", label: "useContext", Component: ContextDemo },
  { id: "memo", label: "useMemo", Component: MemoDemo },
  { id: "reducer", label: "useReducer", Component: ReducerDemo },
  { id: "callback", label: "useCallback", Component: CallbackDemo },
  { id: "transition", label: "useTransition", Component: TransitionDemo },
];
