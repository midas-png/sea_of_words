import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "shared/types";
import { IScreenState } from "shared/types/screenTypes";

const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.screen
);

export const typeSelector = createSelector(
    selectBase,
    (state: IScreenState) => state.type
);
