import React, { useEffect, useState } from 'react';
import LandingBigImage from '../components/landing/LandingBigImage';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router';

import TopicList from '../components/landing/TopicList';

import { useTranslation } from 'react-i18next';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DesktopHorizontalCenterContainer from '../components/boxes/DesktopHorizontalCenterContainer';



export const Landing: React.FC = () => {
    const {t, i18n} = useTranslation('landing')
    const search = useLocation().hash

    const [ afterEmailConfirm, setAfterEmailConfirm ] = useState(false)
    const [ accessToken, setAccessToken ] = useState('')

    useEffect(() => {
        const accessToken = new URLSearchParams(search).get('#access_token')
        if (accessToken !== null) {
            setAccessToken(accessToken)
            setAfterEmailConfirm(true)
        }
    })

    const screenType = useSelector((state: RootStateOrAny) => state.browser.screenType)

    return (
        <div>
            <LandingBigImage >
            </LandingBigImage>
            <DesktopHorizontalCenterContainer>
                <div style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom:"50px"}}>
                    <div style={{textAlign:"center", paddingTop: "110px"}}>
                        <Typography variant="h1">{t("subHeading1")}</Typography>
                    </div>
                    <div style={{paddingTop:"25px"}}>
                        <TopicList />
                    </div>
                </div>
            </DesktopHorizontalCenterContainer>
            {afterEmailConfirm &&
                <Redirect to={`/login?token=${accessToken}`}/>
            }
        </div>

    )
}
