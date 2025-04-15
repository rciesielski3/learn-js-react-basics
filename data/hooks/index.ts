import { useStateData } from "@/data/hooks/useState";
import { ExampleHookData } from "../../components/shared/types";
import { useContextData } from "@/data/hooks/useContext";
import { useMemoData } from "@/data/hooks/useMemo";
import { useReducerData } from "@/data/hooks/useReducer";
import { useCallbackData } from "@/data/hooks/useCallback";
import { useTransitionData } from "@/data/hooks/useTransition";

export const hookData: Record<string, ExampleHookData> = {
  useState: useStateData,
  useContext: useContextData,
  useMemo: useMemoData,
  useReducer: useReducerData,
  useCallback: useCallbackData,
  useTransition: useTransitionData,
};
