import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLetter } from "shared/types";
import { IGuessState } from "shared/types/guessTypes";

const loadGuessedWordsFromStorage = (): number[] => {
    const storedData = localStorage.getItem("sow_guessed_words");
    return storedData ? JSON.parse(storedData) : [];
};

const initialState: IGuessState = {
    currentGuess: [],
    guessedWords: loadGuessedWordsFromStorage(),
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
            if (!state.guessedWords.includes(action.payload)) {
                state.guessedWords.push(action.payload);
                localStorage.setItem(
                    "sow_guessed_words",
                    JSON.stringify(state.guessedWords)
                );
            }
        },
        clear(state) {
            state.currentGuess = [];
            state.guessedWords = [];
            localStorage.removeItem("sow_guessed_words");
        },
    },
});

export const { setCurrentGuess, addCurrentGuess, addGuessedWord, clear } =
    guessSlice.actions;
export default guessSlice.reducer;
