import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { TLetter } from "shared/types";

interface ILetterBlock {
    letter: TLetter;
    isGuessed: boolean;
}

export const LetterBlock: FC<ILetterBlock> = ({
    letter,
    isGuessed,
}: ILetterBlock) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor={isGuessed ? "#65BD65" : "#F2F2F2"}
            height={72}
            width={72}
            borderRadius="16px"
        >
            {isGuessed && (
                <Typography fontSize={42} color="#fff">
                    {letter.toUpperCase()}
                </Typography>
            )}
        </Box>
    );
};
