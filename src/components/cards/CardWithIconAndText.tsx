import React, { ReactChildren, ReactComponentElement } from 'react';

interface CardIconAndText {
    title: string,
    description: string
}

export const CardWithIconAndText: React.FC<CardIconAndText> = (props) => {
    return (
        <div style={{padding: '20px', backgroundColor: 'lighgrey', display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}