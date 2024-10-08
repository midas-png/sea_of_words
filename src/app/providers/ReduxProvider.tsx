import { ReactNode } from "react";
import { Provider } from "react-redux";

import { mainStore } from "../store";

type Props = {
    children: ReactNode;
};

export const ReduxProvider = ({ children }: Props) => {
    return <Provider store={mainStore}>{children}</Provider>;
};
