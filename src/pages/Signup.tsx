import React, { ChangeEvent, FormEvent, useState } from 'react';
import { SubmitButton } from '../components/buttons/SubmitButton';
import { Form } from '../components/form/Form';
import Input from '../components/form/Input';
import DividerWithText from '../components/layout/DividerWithText';

import {ReactComponent as Google} from '../components/icons/Google.svg'
import {ReactComponent as Facebook} from '../components/icons/Facebook.svg'
import { InputWithButton } from '../components/form/InputWithButton';
import { checkEmailInputValid } from '../components/utils/CheckEmailInputValid';
import { checkPasswordInputValid } from '../components/utils/CheckPasswordInputValid';
import { Link, Redirect } from 'react-router-dom';
import { LoadingPage } from '../components/loading/LoadingPage';
import { Animated } from 'react-animated-css';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/auth';

import { useTranslation } from 'react-i18next';
import { ConfirmAnimation } from '../components/utils/ConfirmAnimation';

export type ShowPassword = {
    text: "password" | "text"
}

export const Signup: React.FC = (props) => {

    const {t} = useTranslation("signup");

    const [pwd, setPwd] = useState('');
    const [pwdError, setPwdError] = useState(false);
    const [pwdErrorText, setPwdErrorText] = useState("");
    const [pwdRepeat, setPwdRepeat] = useState('');
    const [pwdRepeatError, setPwdRepeatError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const [successfulSignup, setSuccessfulSignup] = useState(false);

    const [serverError, setServerError] = useState(false)

    const [loading, setLoading]= useState(false)

    const [showPwd, setShowPwd] = useState<'password' | 'text'>('password');

    const [signupError, setSignupError] = useState('')

    const dispatch = useDispatch()
    const authError = useSelector((state: RootStateOrAny ) => state.auth.error);

    function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
        const validityCheckEmail = checkEmailInputValid(e.target.value);
        if (!validityCheckEmail) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setPwd(e.target.value)
        const validityCheckPassword = checkPasswordInputValid(e.target.value)
        if (!validityCheckPassword) {
            setPwdError(true)
        } else {
            setPwdError(false)
        }
    }

    function onChangePasswordRepeat(e: ChangeEvent<HTMLInputElement>) {
        setPwdRepeat(e.target.value)
        if (e.target.value !== pwd || e.target.value === '') {
            setPwdRepeatError(true)
        } else {
           setPwdRepeatError(false) 
        }
    }

    function submitSignupForm(e: FormEvent) {
        e.preventDefault()
        setLoading(true);
        if (!emailError && !pwdError && !pwdRepeatError && email !== '' && pwd !== "" && pwdRepeat !== "") {
            setPwdErrorText("")
            signUp(email, pwd)
        }
        setLoading(false);
        console.log(pwdError)
        if (pwdError) {
            setPwdErrorText(t("password.validation"))
        }
    }
    
    async function signUp(email: string, password: string) {
        try {
            await dispatch(actions.signUp(email, password))
            setLoading(false)
            setSuccessfulSignup(true)
        } catch (err) {
            setLoading(false)
            if (Number(err.message) === 400) {
                setSignupError(t("submit.error"))
            }
        }
    }

    function handlePasswordShowChange(show: boolean) {
        if (show) {
            setShowPwd('text')
        } else {
            setShowPwd('password')
        }
    }

    function onFormInputValueChange(e: ChangeEvent<HTMLFormElement>) {
        if (emailError || pwdRepeat !== pwd || email === '' || pwd === "" || pwdRepeat === "") {
            setSubmitButtonDisabled(true)
        } else {
            setSubmitButtonDisabled(false)
        }
    }

    return(
        <div style={{height:"700px"}}>
            <div style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"center", marginTop:"150px"}}>
                <Form onSubmit={submitSignupForm} onChange={onFormInputValueChange}>
                    <div style={{textAlign:"center", marginBottom:"29px", fontSize: "23px"}}>
                        {t("title")}
                    </div>
                    <div style={{marginBottom:"10px"}}>
                        <Input
                            error={emailError} 
                            validationText={t("email.validation")}
                            type="text"
                            style="filled"
                            onChange={onChangeEmail}
                            placeholder={t("email.placeholder")}/>
                    </div>
                    <InputWithButton 
                        placeholder={t("password.placeholder")}
                        type={showPwd}
                        style="filled"
                        showButton={true}
                        onChange={onChangePassword}
                        onShowPasswordChange={handlePasswordShowChange}
                        />
                    <InputWithButton 
                        placeholder={t("passwordRepeat.placeholder")}
                        error={pwdRepeatError}
                        type={showPwd}
                        style="filled"
                        showButton={false}
                        validationText={t("passwordRepeat.validation")}
                        onChange={onChangePasswordRepeat}
                        onShowPasswordChange={() => {}}
                    />
                    <SubmitButton type="submit">{t("button")}</SubmitButton>
                    {signupError.length !== 0 &&
                        <p style={{color: 'red'}}>{signupError}</p>
                    }
                    {pwdErrorText.length !== 0 &&
                        <p style={{color: 'red'}}>{pwdErrorText}</p>
                    }
                    <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
                        <DividerWithText>{t("extra.or")}</DividerWithText>
                    </div>
                    <div style={{display: "flex", justifyContent:"center", paddingBottom:"20px"}}>
                        <div style={{width:"30px", paddingRight:"28px"}}><Google /></div>
                        <div style={{width:"30px", paddingLeft:"28px"}}><Facebook /></div>
                    </div>
                    <div>{t("extra.text1")} <Link to="/login" style={{color: "#8bc34as"}}>{t("extra.text2")}</Link></div>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={loading}>
                        <LoadingPage />
                    </Animated>
                    {
                        successfulSignup && <ConfirmAnimation text1={t("success.text1")} text2={t("success.text2")}/>
                    }
                </Form>
            </div>
        </div>    
    )

    
}