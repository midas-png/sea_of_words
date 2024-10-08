import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "shared/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
