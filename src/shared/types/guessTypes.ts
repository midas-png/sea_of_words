import { TLetter } from "./letterTypes";

export interface IGuessState {
    currentGuess: TLetter[];
    guessedWords: number[];
}
