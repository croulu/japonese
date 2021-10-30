import React, {useEffect, useState} from "react";

export const CountdownTimer = ({onTimeout} ) => {
    const [countdown, setCountdown] = useState(700);
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown => {
                if (countdown === 1) {
                    clearInterval(interval)
                    onTimeout()
                }
                return countdown - 1;
            })
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    const minutes = onTwoDigits(Math.floor(countdown / 60));
    const seconds = onTwoDigits(countdown % 60);
    return <>
        <div className="countdownTimer">
            <div className="time">{minutes}:{seconds}</div>
        </div>
    </>;
};

const onTwoDigits = number => String(number).padStart(2, "0")
