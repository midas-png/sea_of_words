import { createSelector } from "@reduxjs/toolkit";
import { ILevelState, RootState } from "shared/types";

export const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.level
);

export const levelSelector = createSelector(
    selectBase,
    (state: ILevelState) => state.level
);
export const levelLoadingSelector = createSelector(
    selectBase,
    (state: ILevelState) => state.loading
);
export const levelErrorSelector = createSelector(
    selectBase,
    (state: ILevelState) => state.error
);
