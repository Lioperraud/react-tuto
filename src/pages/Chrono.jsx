import { useState, useEffect } from "react";

function Chrono() {
    const [time, setTime] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
        setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="card chrono">
            <h1>Chrono</h1>
            <div className="contenu">
                <h2>{time} s</h2>
                <div>
                    <button onClick={() => setIsRunning(true)}>Start</button>
                    <button onClick={() => setIsRunning(false)}>Stop</button>
                    <button onClick={() => setTime(0)}>Reset</button>
                </div>
            </div>
       </div>
    );
}

export default Chrono;