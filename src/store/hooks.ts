import { TypedUseSelectorHook, useDispatch as useDispatchDefault, useSelector as useSelectorDefault } from 'react-redux';
import type { StoreState, Dispatch } from './store';

export const useDispatch: () => Dispatch = useDispatchDefault;
export const useSelector: TypedUseSelectorHook<StoreState> = useSelectorDefault;
