import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "shared/lib";
import { selectBase } from "entities/level";
import { WordBlock } from "features/word-block";
import { TLetter } from "shared/types";

export const GuessWord = () => {
    const levelStore = useAppSelector(selectBase);

    return (
        <Stack alignItems="center" py={4} height={1} gap="57px">
            <Typography color="#fff" fontSize={30} lineHeight="35px">
                Уровень {levelStore.levelNumber}
            </Typography>
            <Stack alignItems="center" gap='6px'>
                {levelStore.level?.words.map((word) => (
                    <WordBlock
                        key={Math.random() + word}
                        word={word.split("") as TLetter[]}
                    />
                ))}
            </Stack>
        </Stack>
    );
};
