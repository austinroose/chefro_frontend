import React from 'react';
import './Style.css';

interface ConfirmAnimation {
    text1: string;
    text2: string;
}

export const ConfirmAnimation: React.FC<ConfirmAnimation> = (props) => {

    return (
        <div style={{top: 0, left: 0, width: "100%", height:"100%", position: 'absolute', display: "flex", alignItems:"center", justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 1)", flexDirection: "column"}}>
            <div className="success-animation">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
            <p style={{fontSize: "19px", textAlign: "center", paddingLeft: "10px", paddingRight: "10px"}}>
                {props.text1}<br/>
                {props.text2}</p>
        </div>
        </div>
    )
}