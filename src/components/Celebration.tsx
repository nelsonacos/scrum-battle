import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const Celebration = ({ show }: { show: boolean }) => {
    const { width, height } = useWindowSize();

    return show ? <Confetti width={width} height={height} numberOfPieces={200} /> : null;
};