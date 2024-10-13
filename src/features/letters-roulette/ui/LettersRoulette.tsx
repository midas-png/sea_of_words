import { FC, useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TLetter } from "shared/types";
import { ICoordinate, positionsByLength } from "../lib";

interface ILetterRoulette {
    letters: TLetter[];
}

export const LettersRoulette: FC<ILetterRoulette> = ({
    letters,
}: ILetterRoulette) => {
    const [selectedLetters, setSelectedLetters] = useState<TLetter[]>([]);
    const [selectedPositions, setSelectedPositions] = useState<ICoordinate[]>(
        []
    );
    const [isDragging, setIsDragging] = useState(false);
    const [currentMousePosition, setCurrentMousePosition] =
        useState<ICoordinate | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    const positions = positionsByLength[letters.length as 4 | 5];

    const handleMouseDown = (letter: TLetter, position: ICoordinate) => {
        setIsDragging(true);
        addLetterToSelection(letter, position);
    };

    const handleMouseEnter = (letter: TLetter, position: ICoordinate) => {
        if (isDragging) {
            addLetterToSelection(letter, position);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setSelectedLetters([]);
        setSelectedPositions([]);
        setCurrentMousePosition(null);
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (isDragging) {
            const containerRect = containerRef.current!.getBoundingClientRect();
            const x = event.clientX - containerRect.left;
            const y = event.clientY - containerRect.top;
            setCurrentMousePosition({ x, y });
        }
    };

    const addLetterToSelection = (letter: TLetter, position: ICoordinate) => {
        if (!selectedLetters.includes(letter)) {
            setSelectedLetters([...selectedLetters, letter]);
            setSelectedPositions([...selectedPositions, position]);
        }
    };

    const getRelativePosition = (event: React.MouseEvent) => {
        const containerRect = containerRef.current!.getBoundingClientRect();
        const letterElement = event.currentTarget.getBoundingClientRect();
        const x =
            letterElement.left - containerRect.left + letterElement.width / 2;
        const y =
            letterElement.top - containerRect.top + letterElement.height / 2;
        return { x, y };
    };

    return (
        <Stack
            ref={containerRef}
            sx={{
                position: "relative",
                width: 357,
                height: 357,
                borderRadius: "50%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <Box
                sx={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    p: 9,
                    border: "18px solid #34495E",
                }}
            />

            {letters.map((letter, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            position: "absolute",
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            backgroundColor: selectedLetters.includes(letter)
                                ? "#E96FA4"
                                : "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            zIndex: 1, // Буквы будут ниже линии
                            ...positions[index],
                            cursor: "pointer",
                        }}
                        onMouseDown={(e) =>
                            handleMouseDown(letter, getRelativePosition(e))
                        }
                        onMouseEnter={(e) =>
                            handleMouseEnter(letter, getRelativePosition(e))
                        }
                    >
                        <Typography
                            variant="h5"
                            fontSize={47}
                            color={
                                selectedLetters.includes(letter)
                                    ? "#fff"
                                    : "#4D4D4D"
                            }
                            sx={{ userSelect: "none" }}
                        >
                            {letter.toUpperCase()}
                        </Typography>
                    </Box>
                );
            })}

            {/* Рисование линии при движении мыши */}
            <svg
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            >
                {/* Динамическая линия, следующая за мышью */}
                {isDragging &&
                    currentMousePosition &&
                    selectedPositions.length > 0 && (
                        <polyline
                            points={
                                selectedPositions
                                    .map((pos) => `${pos.x},${pos.y}`)
                                    .join(" ") +
                                ` ${currentMousePosition.x},${currentMousePosition.y}`
                            }
                            fill="none"
                            stroke="#638EC4"
                            strokeWidth="17"
                            strokeLinecap="round"
                        />
                    )}
            </svg>
        </Stack>
    );
};
