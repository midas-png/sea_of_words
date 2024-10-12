import Stack from "@mui/material/Stack";
import { FC } from "react";
import { TLetter } from "shared/types";
import { LetterBlock } from "shared/ui/LetterBlock";

interface ILetterBlock {
    word: TLetter[];
}

export const WordBlock: FC<ILetterBlock> = ({ word }: ILetterBlock) => {
    return (
        <Stack flexDirection="row" gap='6px'>
            {word.map((letter) => (
                <LetterBlock key={Math.random() + letter} letter={letter} />
            ))}
        </Stack>
    );
};
