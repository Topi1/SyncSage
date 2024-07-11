import React, { useState, useEffect } from 'react';

const DateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="datetime">
            {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
        </div>
    );
};

export default DateTime;
