import Stack from "@mui/material/Stack";
import { FC } from "react";
import { TLetter } from "shared/types";
import { LetterBlock } from "shared/ui/LetterBlock";

interface IWordBlock {
    word: TLetter[];
    isGuessed: boolean;
    isSmalled?: boolean;
}

export const WordBlock: FC<IWordBlock> = ({
    word,
    isGuessed,
    isSmalled,
}: IWordBlock) => {
    return (
        <Stack flexDirection="row" gap={isSmalled ? "3px" : "6px"}>
            {word.map((letter) => (
                <LetterBlock
                    key={Math.random() + letter}
                    letter={letter}
                    isGuessed={isGuessed}
                    isSmalled={isSmalled}
                />
            ))}
        </Stack>
    );
};
