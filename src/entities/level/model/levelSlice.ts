import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILevel } from "shared/types";
import { ILevelState, TAvaliableLevels } from "shared/types/levelTypes";
import { level_1, level_2, level_3 } from "shared/mocks";

const sortWordsByLength = (words: string[]): string[] => {
    return words.sort((a, b) => a.length - b.length);
};

const levels: ILevel[] = [level_1, level_2, level_3].map((level) => ({
    ...level,
    words: sortWordsByLength(level.words),
}));

const loadFromStorage = (key: string, fallback: string): string => {
    return localStorage.getItem(key) || fallback;
};

const initialState: ILevelState = {
    levelNumber: parseInt(loadFromStorage("sow_level_number", "1"), 10),
    levelSelected: parseInt(
        loadFromStorage("sow_level_selected", "1"),
        10
    ) as TAvaliableLevels,
    level: levels[parseInt(loadFromStorage("sow_level_selected", "1"), 0) - 1],
    loading: false,
    error: null,
};

export const levelSlice = createSlice({
    name: "level",
    initialState,
    reducers: {
        setLevel(state, action: PayloadAction<ILevel>) {
            state.level = action.payload;
        },
        getNextLevel(state) {
            state.loading = true;

            const nextLevelNumber = (state.levelSelected % levels.length) + 1;

            state.levelNumber += 1;
            localStorage.setItem(
                "sow_level_number",
                state.levelNumber.toString()
            );

            state.levelSelected = nextLevelNumber as TAvaliableLevels;
            localStorage.setItem(
                "sow_level_selected",
                state.levelSelected.toString()
            );

            state.level = levels[state.levelSelected - 1];
            state.loading = false;
        },
    },
});

export const { setLevel, getNextLevel } = levelSlice.actions;
export default levelSlice.reducer;
