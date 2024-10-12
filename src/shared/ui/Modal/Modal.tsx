import { FC, MouseEventHandler, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import { DialogTitle } from "@mui/material";
import { Button } from "../Button";

interface ModalProps {
    open: boolean;
    title: ReactNode;
    content: ReactNode;
    buttonText: string;
    onAccept?: MouseEventHandler<HTMLButtonElement>;
}

export const Modal: FC<ModalProps> = ({
    open,
    title,
    content,
    buttonText,
    onAccept,
}: ModalProps) => {
    return (
        <Dialog
            open={open}
            PaperProps={{
                sx: {
                    width: 530,
                    borderRadius: "40px",
                    overflow: "visible",
                },
            }}
        >
            <DialogTitle>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#FF6B00",
                        textAlign: "center",
                        width: "352px",
                        position: "absolute",
                        top: "-19px",
                        height: 107,
                        bottom: "50%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "4px 4px 0 0",
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="body1"
                        color="white"
                        fontSize={40}
                        fontWeight={700}
                        lineHeight="90.9%"
                    >
                        {title}
                    </Typography>
                </Box>
            </DialogTitle>
            <Box>
                <DialogContent
                    sx={{ textAlign: "center", mt: "53px", pb: 0.5 }}
                >
                    <Typography variant="body2" color="#4D4D4D" fontSize={30}>
                        {content}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center" }}>
                    <Button onClick={onAccept}>{buttonText}</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
