import { FC } from "react";
import { Modal } from "shared/ui";
import { useIsMultipleTabs } from "shared/lib";
import { VictoryScreen } from "widgets/victory-screen";

export const HomePage: FC = () => {
    const isMultipleTabs = useIsMultipleTabs();

    return (
        <>
            <VictoryScreen />
            <Modal
                open={isMultipleTabs}
                title={undefined}
                content={undefined}
                buttonText={"вывы"}
            />
        </>
    );
};
