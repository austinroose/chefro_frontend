import React from 'react'

interface Text {
    text: string;
    number: number;
}

export const TextComponent: React.FC<Text> = (props) => {
    return (
        <div>
            {props.text}
        </div>
    );
}
