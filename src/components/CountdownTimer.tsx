import { useEffect, useRef, useState } from "react";
import { Timer } from "lucide-react";

interface CountdownTimerProps {
    duration: number;
    onTimeout: () => void;
}

export const CountdownTimer = ({ duration, onTimeout }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const timeoutCalled = useRef(false);

    useEffect(() => {
        setTimeLeft(duration);
        timeoutCalled.current = false;

        const interval = setInterval(() => {
            setTimeLeft((prev: number) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    if (!timeoutCalled.current) {
                        timeoutCalled.current = true;
                        onTimeout();
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [duration, onTimeout]);

    return (
        <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 text-gray-700">
            <Timer size={18} className="text-gray-500" />
            <span className="font-semibold">{timeLeft}s</span>
        </div>
    );
};