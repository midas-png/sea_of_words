import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IScreenState, TScreen } from "shared/types/screenTypes";

const loadScreenTypeFromStorage = (): TScreen => {
    const storedType = localStorage.getItem("sow_screen_type");
    const validScreenTypes: TScreen[] = ["guess", "next"];
    return validScreenTypes.includes(storedType as TScreen)
        ? (storedType as TScreen)
        : "guess";
};

const initialState: IScreenState = {
    type: loadScreenTypeFromStorage(),
};

export const screenSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreen(state, action: PayloadAction<TScreen>) {
            state.type = action.payload;
            localStorage.setItem("sow_screen_type", action.payload);
        },
    },
});

export default screenSlice.reducer;
