import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getLettersFromWords, useAppSelector } from "shared/lib";
import { selectBase } from "entities/level";
import { WordBlock } from "features/word-block";
import { TLetter } from "shared/types";
import Box from "@mui/material/Box";
import { LettersRoulette } from "features/letters-roulette";

export const GuessWord = () => {
    const levelStore = useAppSelector(selectBase);
    const letters = getLettersFromWords(levelStore.level?.words || []);

    return (
        <Stack alignItems="center" py={4} height={1} gap="57px">
            <Typography color="#fff" fontSize={30} lineHeight="35px">
                Уровень {levelStore.levelNumber}
            </Typography>
            <Stack alignItems="center" gap="19px">
                <Stack alignItems="center" gap="6px">
                    {levelStore.level?.words.map((word) => (
                        <WordBlock
                            key={Math.random() + word}
                            word={word.split("") as TLetter[]}
                            isGuessed
                        />
                    ))}
                </Stack>
                <WordBlock word={["р", "о", "в"]} isSmalled isGuessed={false} />
            </Stack>
            <Box>
                <LettersRoulette letters={letters} />
            </Box>
        </Stack>
    );
};
