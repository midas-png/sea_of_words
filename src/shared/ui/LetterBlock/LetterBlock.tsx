import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { TLetter } from "shared/types";

interface ILetterBlock {
    letter: TLetter;
    isGuessed: boolean;
    isSmalled?: boolean;
}

export const LetterBlock: FC<ILetterBlock> = ({
    letter,
    isGuessed,
    isSmalled,
}: ILetterBlock) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor={isGuessed ? "#65BD65" : "#F2F2F2"}
            height={isSmalled ? 42 : 72}
            width={isSmalled ? 42 : 72}
            borderRadius="16px"
        >
            {(isGuessed || isSmalled) && (
                <Typography
                    display="flex"
                    alignItems="center"
                    height={1}
                    fontSize={isSmalled ? 30 : 42}
                    color={isSmalled ? "#4D4D4D" : "#fff"}
                >
                    {letter.toUpperCase()}
                </Typography>
            )}
        </Box>
    );
};
