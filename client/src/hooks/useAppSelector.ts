import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../app/store';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export default useAppSelector;