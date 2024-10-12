import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { TLetter } from "shared/types";

interface ILetterBlock {
    letter: TLetter;
}

export const LetterBlock: FC<ILetterBlock> = ({ letter }: ILetterBlock) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#F2F2F2"
            height={72}
            width={72}
            borderRadius="16px"
        >
            <Typography fontSize={42}>{letter}</Typography>
        </Box>
    );
};
