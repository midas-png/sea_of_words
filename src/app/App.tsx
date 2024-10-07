import { FC } from "react";
import { MuiStylesProvider } from "./providers/MuiStylesProvider";
import { HomePage } from "../pages/home";
import "./styles/global.css";
import "../shared/fonts/VAG-World/VAG-World.css";

const App: FC = () => (
    <MuiStylesProvider>
        <HomePage />
    </MuiStylesProvider>
);

export default App;
