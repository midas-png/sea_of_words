import React from "react";
import { MuiStylesProvider } from "./providers/MuiStylesProvider";
import { Modal } from "../shared/ui";
import "./styles/global.css";
import "../shared/fonts/VAG-World/VAG-World.css";

const App: React.FC = () => {
    return (
        <MuiStylesProvider>
            <div>
                <Modal />
            </div>
        </MuiStylesProvider>
    );
};

export default App;
