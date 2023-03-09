import { useDispatch } from "react-redux";
import { store } from "../app/store";

export type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;