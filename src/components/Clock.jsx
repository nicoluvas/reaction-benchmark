import { useEffect, useState } from "react"

export default function Clock() {

    const [time, setTime] = useState(new Date()); // initial value: current date

    // since it runs when rendered, to keep track if it only runs when rendered, we need to clear/cancel interval
    // step by step:
    // when mount
    useEffect(() => {
        // create an interval that update once every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // when we unmount the component, clear and stop interval
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();

        return `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
    }

    function padZero(n) {
        return n < 10 ? `0${n}` : n;
    }

    return (
        <>
            <span>
                {formatTime()}
            </span>
        </>
    )
}