import React from 'react';

interface Image {
    image: string
}

const CircleWithInfo: React.FC<Image> = (props) => {
    return (
        <div>
            <h1>{props.image}</h1>
        </div>
    )
}

export default CircleWithInfo;


