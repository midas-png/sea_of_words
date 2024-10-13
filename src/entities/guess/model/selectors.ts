import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "shared/types";
import { IGuessState } from "shared/types/guessTypes";

export const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.guess
);

export const currentGuessSelector = createSelector(
    selectBase,
    (state: IGuessState) => state.currentGuess
);

export const guessedWordsSelector = createSelector(
    selectBase,
    (state: IGuessState) => state.guessedWords
);
