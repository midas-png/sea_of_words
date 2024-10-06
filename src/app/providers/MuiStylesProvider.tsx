import { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Vag-World",
    },
});

interface MuiStylesProviderProps {
    children: JSX.Element;
}

export const MuiStylesProvider: FC<MuiStylesProviderProps> = ({
    children,
}: MuiStylesProviderProps) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
