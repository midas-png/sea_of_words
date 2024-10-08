import { createSelector } from "@reduxjs/toolkit";

import { ILevelState } from "./types";

const selectBase = createSelector(
    (state: ILevelState) => state,
    (state) => state
);

export const selectCategoryPreviewBooks = createSelector(
    selectBase,
    (state: ILevelState) => state.level
);
export const selectCategoryPreviewLoading = createSelector(
    selectBase,
    (state: ILevelState) => state.loading
);
export const selectCategoryPreviewError = createSelector(
    selectBase,
    (state: ILevelState) => state.error
);
