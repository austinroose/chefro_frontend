import EventEmitter from 'events';
import React, { FormEvent, MouseEventHandler, useState, useEffect, EventHandler, SyntheticEvent } from 'react';
import { ChangeEventHandler } from 'react';
import { FilledInputWithIcon } from './FilledInputWithIcon';
import { FilledInputWithIconContainer } from './FilledInputWithIconContainer';
import { PasswordShowHideButton } from './PasswordShowHideButton';
import { UnFilledInput } from './UnFilledInput';

export interface InputWithButton {
    error?: boolean,
    placeholder: string,
    validationText?: string,
    type: "text" | "password",
    style: "normal" | "filled",
    showButton: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onShowPasswordChange: (show: boolean) => void;
}

export const InputWithButton: React.FC<InputWithButton> = (props) => {


    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");

    useEffect(() => {
        setInputType(props.type)
    }, [props])

    function handlePasswordShowChange(e: FormEvent) {
        e.preventDefault()
        if (showPassword) {
            setInputType("password")
            setShowPassword(false)
            props.onShowPasswordChange(false)
        } else {
            setInputType("text")
            setShowPassword(true)
            props.onShowPasswordChange(true)
        }
    }

    function changeInput() {
        console.log(inputType);
    }

    return(<div style={{height:"50px", width:"100%", paddingBottom: "3px"}}>
    {props.style === "normal" ?
        <UnFilledInput type={props.type}/>
        :
        <FilledInputWithIconContainer style={{border: `${props.error ? "1px solid red" : "1px solid lightgray"}`}}>
            <FilledInputWithIcon type={inputType} onChange={props.onChange} placeholder={props.placeholder}
            style={{borderRadius: `${props.showButton? "20px 0px 0px 20px": "20px"}`}}/>
            {props.showButton &&
                <PasswordShowHideButton onClick={handlePasswordShowChange} >
                {showPassword ?
                    <img style={{height: "31px"}} src="https://static.thenounproject.com/png/1446376-200.png"/>
                :
                    <img style={{height: "25px", paddingRight: "3px"}} src="https://icons-for-free.com/iconfiles/png/512/eye+crossed-1324760527186532014.png"/>
                }
                </PasswordShowHideButton>
            }
        </FilledInputWithIconContainer>   
    }
    {props.error && <div style={{color:"red", fontSize:"14px"}}>{props.validationText}</div>}
</div>)
}