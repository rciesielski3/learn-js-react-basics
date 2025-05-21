import { useStateData } from '@/data/react/hooks/useState';
import { ExampleHookData } from '@/components/shared/types';
import { useContextData } from '@/data/react/hooks/useContext';
import { useMemoData } from '@/data/react/hooks/useMemo';
import { useReducerData } from '@/data/react/hooks/useReducer';
import { useCallbackData } from '@/data/react/hooks/useCallback';
import { useTransitionData } from '@/data/react/hooks/useTransition';

export const hookData: Record<string, ExampleHookData> = {
  useState: useStateData,
  useContext: useContextData,
  useMemo: useMemoData,
  useReducer: useReducerData,
  useCallback: useCallbackData,
  useTransition: useTransitionData
};
