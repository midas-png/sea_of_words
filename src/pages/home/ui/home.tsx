import { FC } from "react";
import { Modal } from "shared/ui";
import { useAppSelector, useIsMultipleTabs } from "shared/lib";
import { VictoryScreen } from "widgets/victory-screen";
import { GuessWord } from "widgets";
import { typeSelector } from "entities/screen";

export const HomePage: FC = () => {
    const screenStoreType = useAppSelector(typeSelector);
    const { isMultipleTabs, isCurrentTabActive } = useIsMultipleTabs();

    return (
        <>
            {screenStoreType === "guess" ? <GuessWord /> : <VictoryScreen />}
            <Modal
                open={isMultipleTabs && !isCurrentTabActive}
                title="Две вкладки с игрой?"
                content="Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой вкладке, обновите страницу."
                buttonText={"Обновить"}
                onAccept={() => window.location.reload()}
            />
        </>
    );
};
