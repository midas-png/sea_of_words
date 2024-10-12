import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILevel } from "shared/types";
import { ILevelState, TAvaliableLevels } from "shared/types/levelTypes";
import { level_1, level_2, level_3 } from "shared/mocks";

const levels: ILevel[] = [level_1, level_2, level_3];

const sortWordsByLength = (words: string[]): string[] => {
  return words.sort((a, b) => a.length - b.length);
};

levels.forEach((level: ILevel) => {
  level.words = sortWordsByLength(level.words);
});

const initialState: ILevelState = {
    levelNumber: 1,
    levelSelected: 1,
    level: levels[0],
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

            const newLevelNumber = (state.levelSelected % levels.length) + 1;

            state.levelNumber += 1;
            state.levelSelected = newLevelNumber as TAvaliableLevels;
            state.level = levels[newLevelNumber - 1];
            state.loading = false;
        },
    },
});

export default levelSlice.reducer;
