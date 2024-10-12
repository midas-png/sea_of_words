import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { Button } from "shared/ui";
import { levelSlice } from "entities/level/model/levelSlice";
import { useCallback } from "react";
import { selectBase } from "entities/level";

export const VictoryScreen = () => {
    const levelStore = useAppSelector(selectBase);
    const dispatch = useAppDispatch();

    const handleNextLevel = useCallback(() => {
        dispatch(levelSlice.actions.getNextLevel());
    }, []);

    return (
        <Stack
            justifyContent="space-between"
            alignItems="center"
            py={6}
            height={1}
        >
            <Stack gap="15px">
                <Typography color="#fff" fontSize={37} lineHeight="91.9%">
                    Уровень {levelStore.levelNumber} пройден
                </Typography>
                <Typography color="#fff" fontSize={53} lineHeight="91.9%">
                    Изумительно!
                </Typography>
            </Stack>
            <Box>
                <Button
                    sx={{ height: 94, width: 330 }}
                    onClick={handleNextLevel}
                >
                    Уровень {levelStore.levelNumber + 1}
                </Button>
            </Box>
        </Stack>
    );
};
