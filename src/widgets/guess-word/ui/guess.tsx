import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getLettersFromWords, useAppSelector } from "shared/lib";
import { selectBase } from "entities/level";
import { WordBlock } from "features/word-block";
import { LettersRoulette } from "features/letters-roulette";
import { TLetter } from "shared/types";
import { currentGuessSelector, guessedWordsSelector } from "entities/guess";

export const GuessWord = () => {
    const levelStore = useAppSelector(selectBase);
    const currentGuessStore = useAppSelector(currentGuessSelector);
    const guessedWordsStore = useAppSelector(guessedWordsSelector);
    const letters = getLettersFromWords(levelStore.level?.words || []);

    return (
        <Stack alignItems="center" py={4} height={1} gap="19px">
            <Typography color="#fff" fontSize={30} lineHeight="35px">
                Уровень {levelStore.levelNumber}
            </Typography>
            <Stack alignItems="center" gap="6px">
                {levelStore.level?.words.map((word, index) => (
                    <WordBlock
                        key={Math.random() + word}
                        word={word.split("") as TLetter[]}
                        isGuessed={guessedWordsStore.includes(index)}
                    />
                ))}
            </Stack>
            <Stack gap="38px">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="42px"
                >
                    <WordBlock
                        word={currentGuessStore}
                        isSmalled
                        isGuessed={false}
                    />
                </Box>
                <LettersRoulette letters={letters} />
            </Stack>
        </Stack>
    );
};
