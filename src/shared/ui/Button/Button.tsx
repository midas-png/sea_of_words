import { useState, useCallback, ReactNode, FC, MouseEventHandler } from "react";
import MUIButton from "@mui/material/Button";

interface IButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButtonProps> = ({ children, onClick }: IButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseToggle = useCallback((isPressed: boolean) => {
        setIsPressed(isPressed);
    }, []);

    return (
        <MUIButton
            sx={{
                bgcolor: isPressed ? "#508853" : "#65BD65",
                color: "#FFFFFF",
                padding: "16px 32px",
                fontSize: "24px",
                borderRadius: "45px",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "rgba(80, 136, 83, 1) 0px 4px",
                transform: isPressed ? "scale(0.95)" : "scale(1)",
                transition: "all 0.1s ease-in-out",
                "&:focus": {
                    outline: "none",
                },
            }}
            onMouseDown={() => handleMouseToggle(true)}
            onMouseUp={() => handleMouseToggle(false)}
            onMouseLeave={() => handleMouseToggle(false)}
            onClick={onClick}
        >
            {children}
        </MUIButton>
    );
};
