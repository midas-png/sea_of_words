import { FC } from "react";
import { Modal } from "shared/ui";
import { useIsMultipleTabs } from "shared/lib";

export const HomePage: FC = () => {
    const isMultipleTabs = useIsMultipleTabs();

    return (
        <div>
            home
            <Modal
                open={isMultipleTabs}
                title={undefined}
                content={undefined}
                buttonText={"вывы"}
            />
        </div>
    );
};
