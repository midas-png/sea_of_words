import React from "react";
import { MuiStylesProvider } from "./providers/MuiStylesProvider";
import { Modal } from "../shared/ui";
import "./styles/global.css";
import "../shared/fonts/VAG-World/VAG-World.css";

const App: React.FC = () => {
    return (
        <MuiStylesProvider>
            <Modal
                open={false}
                title={undefined}
                content={undefined}
                buttonText={""}
            />
        </MuiStylesProvider>
    );
};

export default App;
