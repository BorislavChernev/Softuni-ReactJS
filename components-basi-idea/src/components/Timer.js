import React from 'react'

export const Timer = (props) => {
    const [time, setTime] = React.useState(0);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);
    
    return (
        <div>
            <h2>Timer: {time}</h2>
        </div>
    )
}