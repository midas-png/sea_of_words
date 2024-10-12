import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILevel } from "shared/types";
import { ILevelState, TAvaliableLevels } from "shared/types/levelTypes";
import { level_1, level_2, level_3 } from "shared/mocks";

const levels = [level_1, level_2, level_3];

const initialState: ILevelState = {
    levelNumber: 1,
    levelSelected: 1,
    level: null,
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
