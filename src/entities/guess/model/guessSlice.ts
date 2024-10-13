import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLetter } from "shared/types";
import { IGuessState } from "shared/types/guessTypes";

const initialState: IGuessState = {
    currentGuess: [],
    guessedWords: [],
};

export const guessSlice = createSlice({
    name: "guess",
    initialState,
    reducers: {
        setCurrentGuess(state, action: PayloadAction<TLetter[]>) {
            state.currentGuess = action.payload;
        },
        addCurrentGuess(state, action: PayloadAction<TLetter>) {
            if (state.currentGuess.includes(action.payload)) return;

            state.currentGuess = [...state.currentGuess, action.payload];
        },
    },
});

export default guessSlice.reducer;
