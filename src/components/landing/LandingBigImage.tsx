import React from 'react';
import chef_kitchen from '../../static/landing/chef_at_kitchen.jpeg';

import ResponsiveCenterBox from '../boxes/ResponsiveCenterBox';
import ResponsiveTextBox from '../text/ResponsiveTextBox';

import { useTranslation } from 'react-i18next';

import {useSelector, RootStateOrAny} from 'react-redux';
import './Styles.css'
import Typography from '@material-ui/core/Typography';
import LinkButton from '../buttons/LinkButton';

const LandingBigImage = (props: any) => {

    const screenType = useSelector((state: RootStateOrAny) => state.browser.screenType)
    const { t, i18n } = useTranslation("landing")

    return (
        <div>
        <div style={{position:"relative"}}>

                <div style={{display:"flex", flexWrap:"wrap", height: `${screenType === "desktop" ? "600px" : "800px"}`}}>
                        <div style={{background: "#8bc34a", width: `${screenType === "desktop" ? "52%" : "100%"}`, height: `${screenType === "desktop" ? "auto" : "500px"}`}}>
                            <div style={{padding: "30px", paddingTop:"95px"}}>
                                <ResponsiveCenterBox>
                                    <ResponsiveTextBox>
                                        <Typography variant="h1" style={{color:"white"}}>
                                            {t("title")}
                                        </Typography>
                                        <p style={{fontSize: "23px", color:"white"}}>
                                            {t("mainText1")}<br/>{t("mainText2")}
                                        </p>
                                    </ResponsiveTextBox>
                                    <div style={{display: "flex", justifyContent:`${screenType === "desktop" ? "flex-start" : "center"}`, paddingTop:"25px"}}>
                                        <LinkButton path="/chefs" type="secondary">{t("secondbtn")}</LinkButton>
                                    </div> 
                                </ResponsiveCenterBox>
                            </div>
                        </div>
                        {screenType === "desktop" ?
                            <div style={{backgroundImage:`url(${chef_kitchen})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width:"48%"}}></div>
                            :
                            <div style={{backgroundImage:`url(${chef_kitchen})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width:"100%", height: "300px"}}></div>
                        }
                </div>
                
            <div className="custom-shape-divider-bottom-1620912850" style={{zIndex: 200}}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>   
        </div>
        
    )
}

//<img src={chef} style={{position: "absolute", top:"100px", height: "500px"}}></img>

export default LandingBigImage;