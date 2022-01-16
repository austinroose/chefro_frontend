import React, { ChangeEvent, ChangeEventHandler } from 'react';

import {FilledInput} from './FilledInput';
import { UnFilledInput } from './UnFilledInput';

interface Input {
    error?: boolean,
    placeholder: string,
    validationText?: string,
    type: "text" | "password",
    style: "normal" | "filled",
    onChange: ChangeEventHandler<HTMLInputElement>

}

const Input: React.FC<Input> = (props) => {
    return (
        <div style={{height:"50px", width:"100%"}}>
            {props.style === "normal" ?
                <UnFilledInput type={props.type}/>
            :
                <FilledInput type={props.type} onChange={props.onChange} placeholder={props.placeholder} style={{border: `${props.error ? "1px solid red" : "1px solid lightgray"}`}}/>
            }
            
            {props.error && <div style={{color:"red", fontSize:"14px"}}>{props.validationText}</div>}
        </div>
    )
}

export default Input