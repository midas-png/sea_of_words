import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "shared/ui";

export const VictoryScreen = () => {
    return (
        <Stack justifyContent="space-between" alignItems="center" py={6} height={1}>
            <Stack gap="15px">
                <Typography color="#fff" fontSize={37} lineHeight="91.9%">
                    Уровень 1 пройден
                </Typography>
                <Typography color="#fff" fontSize={53} lineHeight="91.9%">
                    Изумительно!
                </Typography>
            </Stack>
            <Box>
                <Button sx={{ height: 94, width: 330 }}>Уровень 2</Button>
            </Box>
        </Stack>
    );
};
