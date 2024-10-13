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
            state.currentGuess = [...state.currentGuess, action.payload];
        },
        addGuessedWord(state, action: PayloadAction<number>) {
            if (state.guessedWords.includes(action.payload)) return;

            state.guessedWords = [...state.guessedWords, action.payload];
        },
        clear(state) {
            state.currentGuess = [];
            state.guessedWords = [];
        }
    },
});

export default guessSlice.reducer;
