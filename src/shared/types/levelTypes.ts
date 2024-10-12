import { RejectedDataType } from "./errorTypes";

export interface ILevel {
    readonly words: string[];
}

export type TAvaliableLevels = 1 | 2 | 3;

export interface ILevelObject {
    levelNumber: number;
    levelSelected: TAvaliableLevels;
    level: ILevel | null;
}

export interface ILevelState extends ILevelObject {
    loading: boolean;
    error: RejectedDataType | null;
}
