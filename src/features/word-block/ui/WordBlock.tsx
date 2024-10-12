import Stack from "@mui/material/Stack";
import { FC } from "react";
import { TLetter } from "shared/types";
import { LetterBlock } from "shared/ui/LetterBlock";

interface ILetterBlock {
    word: TLetter[];
    isGuessed: boolean;
}

export const WordBlock: FC<ILetterBlock> = ({ word, isGuessed }: ILetterBlock) => {
    return (
        <Stack flexDirection="row" gap="6px">
            {word.map((letter) => (
                <LetterBlock
                    key={Math.random() + letter}
                    letter={letter}
                    isGuessed={isGuessed}
                />
            ))}
        </Stack>
    );
};
