import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { Button } from "shared/ui";
import { levelSlice } from "entities/level/model/levelSlice";
import { useCallback } from "react";
import { selectBase } from "entities/level";
import { WordBlock } from "features/word-block";
import { TLetter } from "shared/types";

export const GuessWord = () => {
    const levelStore = useAppSelector(selectBase);
    const dispatch = useAppDispatch();

    const handleNextLevel = useCallback(() => {
        dispatch(levelSlice.actions.getNextLevel());
    }, []);

    return (
        <Stack
            justifyContent="space-between"
            alignItems="center"
            py={4}
            height={1}
        >
            <Typography color="#fff" fontSize={30} lineHeight="35px">
                Уровень {levelStore.levelNumber}
            </Typography>
            {levelStore.level?.words.map((word) => (
                <WordBlock
                    key={Math.random() + word}
                    word={word.split(",") as TLetter[]}
                />
            ))}
        </Stack>
    );
};
