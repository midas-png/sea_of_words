import { FC } from "react";
import { MuiStylesProvider } from "./providers/MuiStylesProvider";
import { Modal } from "../shared/ui";
import { useIsMultipleTabs } from "../shared/lib";
import "./styles/global.css";
import "../shared/fonts/VAG-World/VAG-World.css";

const App: FC = () => {
    const isMultipleTabs = useIsMultipleTabs();

    return (
        <MuiStylesProvider>
            <Modal
                open={isMultipleTabs}
                title={undefined}
                content={undefined}
                buttonText={"вывы"}
            />
        </MuiStylesProvider>
    );
};

export default App;
