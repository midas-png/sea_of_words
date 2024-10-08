import { FC } from "react";
import { MuiStylesProvider, ReduxProvider } from "./providers";
import { HomePage } from "../pages/home";
import "./styles/global.css";
import "../shared/fonts/VAG-World/VAG-World.css";
import Box from "@mui/material/Box";

const App: FC = () => (
    <ReduxProvider>
        <MuiStylesProvider>
            <Box
                display="flex"
                justifyContent="center"
                height="100vh"
                bgcolor="#202432"
            >
                <Box width={640} bgcolor="#2B344B" height={1}>
                    <HomePage />
                </Box>
            </Box>
        </MuiStylesProvider>
    </ReduxProvider>
);

export default App;
