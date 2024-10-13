import { TLetter } from "shared/types";

export const getLettersFromWords = (words: string[]): TLetter[] => {
    if (words.length === 0) return [];

    const uniqueLetters = new Set<TLetter>();
    words.forEach((word) => {
        word.split("").forEach((letter) => {
            uniqueLetters.add(letter as TLetter);
        });
    });
    return Array.from(uniqueLetters);
};
