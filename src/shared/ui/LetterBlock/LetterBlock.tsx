import { FC } from "react";
import { TLetter } from "shared/types";

interface ILetterBlock {
    letter: TLetter;
}

export const LetterBlock: FC<ILetterBlock> = ({ letter }: ILetterBlock) => {
    return <>{letter}</>;
};
