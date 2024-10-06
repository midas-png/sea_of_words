import { FC } from "react";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import { Button } from "../Button";
import Box from "@mui/material/Box";
import { DialogTitle } from "@mui/material";

export const Modal: FC = () => {
    return (
        <Dialog
            open={true}
            PaperProps={{
                sx: {
                    width: 530, // Установите фиксированную ширину на 530 пикселей
                    overflow: "visible", // Чтобы заголовок мог выходить за пределы модалки
                },
            }}
        >
            <DialogTitle>
                {/* Заголовок вне модалки */}
                <Box
                    sx={{
                        bgcolor: "#FF6B00",
                        textAlign: "center",
                        width: "352px",
                        position: "absolute",
                        top: "-19px",
                        height: 107,
                        bottom: "50%", // Смещение на 19px выше модалки
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "4px 4px 0 0", // Закругление только в верхних углах
                        zIndex: 1, // Заголовок над модалкой
                        // "::after": {
                        //     content: '""',
                        //     position: "absolute",
                        //     bottom: "-17px", // Выступает вниз
                        //     left: "50%",
                        //     transform: "translateX(-50%)",
                        //     width: "0",
                        //     height: "0",
                        //     borderLeft: "19px solid transparent",
                        //     borderRight: "19px solid transparent",
                        //     borderTop: "19px solid #FF6B00", // Треугольник того же цвета, что и фон заголовка
                        // },
                    }}
                >
                    <Typography
                        variant="body1"
                        color="white"
                        fontSize={40}
                        fontWeight={700}
                    >
                        Две вкладки с игрой?
                    </Typography>
                </Box>
            </DialogTitle>

            {/* Содержимое модалки */}
            <Box>
                <DialogContent sx={{ textAlign: "center" }}>
                    <Typography variant="body2">
                        Похоже, игра открыта в нескольких вкладках браузера.
                        Чтобы продолжить играть в этой вкладке, обновите
                        страницу.
                    </Typography>
                </DialogContent>

                {/* Кнопка */}
                <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button onClick={() => {}}>ОБНОВИТЬ</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
