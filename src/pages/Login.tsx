import React, {useState, useEffect} from 'react';

import {ReactComponent as Google} from '../components/icons/Google.svg'
import {ReactComponent as Facebook} from '../components/icons/Facebook.svg'

import Input from '../components/form/Input';
import { Form } from '../components/form/Form';
import { SubmitButton } from '../components/buttons/SubmitButton';
import Checkbox from '@material-ui/core/Checkbox';
import jwt_decode from "jwt-decode";
import { AccessToken } from '../components/auth/token';

import DividerWithText from '../components/layout/DividerWithText';
import { checkEmailInputValid } from '../components/utils/CheckEmailInputValid';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { InputWithButton } from '../components/form/InputWithButton';
import * as actions from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import { SubmitBtn2 } from '../components/buttons/SubmitButton2';
import { useTranslation } from 'react-i18next';
import { Animated } from 'react-animated-css';
import { LoadingPage } from '../components/loading/LoadingPage';
import { ConfirmAnimation } from '../components/utils/ConfirmAnimation';
import { PopUp } from '../components/notification/PopUp';

import './Style.css'
import { setTimeout } from 'timers';

export const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [afterEmailConfirm, setAfterEmailConfirm] = useState(false);

    const [pwd, setPwd] = useState('');
    const [pwdError, setPwdError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [rememberMe, setRememberMe] = useState(false);

    const [loading, setLoading] = useState(false);
    const [successfulLogin, setSuccessfulLogin] = useState(false);
    const [loginError, setLoginError] = useState('')

    const [closePopup, setClosePopup] = useState(false);

    const {t} = useTranslation("login");

    const search = useLocation().search

    useEffect(() => {
        const token = new URLSearchParams(search).get('token')
        if (token !== null) {
            const decodedToken: AccessToken = jwt_decode(token!)
            if (decodedToken.role === "authenticated") {
                setAfterEmailConfirm(true)
            }
        }
    })

    const onFinish = (e: any) => {
        e.preventDefault()
        if (!emailError && !pwdError) {
            logIn(email, pwd)
        }
    }

    const dispatch = useDispatch();

    async function logIn(email: string, password: string) {
        setLoading(true)
        try {
            await dispatch(actions.logIn(email, password, rememberMe))
            setLoginError('')
            setLoading(false)
            setSuccessfulLogin(true)
        } catch (err) {
            setSuccessfulLogin(false)
            setLoading(false)
            setLoginError(t("error.server"))
            if (Number(err.response.data.status) === 400) {
                setLoginError(t("login.error"))
            }
        }
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
        const res = checkEmailInputValid(e.target.value);
        if (!res) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    const rememberMeChange = (e: any) => {
        setRememberMe(e.target.checked)
    }

    const handlePasswordChange = (e: any) => {
        setPwd(e.target.value)
    }

    const popupNotificationShowChange = (e: any) => {
        console.log('notification show change', e);
        setClosePopup(true);

    
    }

    return (
        <div style={{height:"700px"}}>
            {afterEmailConfirm &&
            <div className={closePopup ? 'popup-hide' : 'popup-show'} onTransitionEnd={() => setAfterEmailConfirm(false)}>
                <PopUp type="success" boldText="Konto edukalt kinnitatud!" text="Võite andmetega sisse logida." position="static" onShowPopupChange={(show) => popupNotificationShowChange(show)}/>
            </div>
            }
            <div style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"center", marginTop:"150px"}}>
                <Form onSubmit={onFinish}>
                    <div style={{textAlign:"center", marginBottom:"29px", fontSize: "23px"}}>
                        {t("title")}
                    </div>
                    <div style={{marginBottom:"10px"}}>
                        <Input 
                            error={emailError}
                            validationText={t("email.validation")}
                            type="text"
                            style="filled"
                            onChange={handleEmailChange}
                            placeholder={t("email.placeholder")}/>
                    </div>
                    <InputWithButton 
                        placeholder={t("password.placeholder")}
                        type={showPassword ? "text" : "password"}
                        style="filled"
                        showButton={true}
                        onChange={handlePasswordChange}
                        onShowPasswordChange={(value) => {setShowPassword(value)}}
                        />
                    <div style={{fontSize:"15px"}}>
                        <Checkbox checked={rememberMe} onChange={rememberMeChange} color="primary" style={{borderRadius:"50%"}}/>
                        {t("rememberMe")}
                    </div>
                    <SubmitButton type="submit">{t("button")}</SubmitButton>
                    {loginError.length !== 0 &&
                        <p style={{color: 'red'}}>{loginError}</p>
                    }
                    <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
                        <DividerWithText>{t("or")}</DividerWithText>
                    </div>
                    <div style={{display: "flex", justifyContent:"center", paddingBottom:"20px"}}>
                        <div style={{width:"30px", paddingRight:"28px"}}><Google /></div>
                        <div style={{width:"30px", paddingLeft:"28px"}}><Facebook /></div>
                    </div>
                    <div>{t("extra.text1")} <Link to="/signup" style={{color: "#8bc34as"}}>{t("extra.text2")}</Link></div>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={loading}>
                        <LoadingPage />
                    </Animated>
                    {successfulLogin &&
                        <Redirect to="/home"/>
                    }
                </Form>
            </div>
        </div>
    )
}

