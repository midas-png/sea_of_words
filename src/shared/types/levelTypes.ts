import { RejectedDataType } from "./errorTypes";

export interface ILevel {
    readonly words: string[];
}

export interface ILevelState {
    level: ILevel | null;
    loading: boolean;
    error: RejectedDataType | null;
}
