import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import * as actions from '../store/actions/browser';

import MainLogo from '../components/layout/MainLogo';
import LanguageSwitch from '../components/utils/LanguageSelect';
import LinkButton from '../components/buttons/LinkButton';
import RightFlexBox from '../components/boxes/RightFlexbox';
import Footer from '../components/layout/Footer';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';


import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useTranslation } from 'react-i18next';

function ElevationScroll(props: any) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
      });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const BaseLayout: React.FC = (props: any) => {

    const mobileView = useSelector((state: RootStateOrAny) => state.browser.screenType)
    const dispatch = useDispatch()

    const { t, i18n } = useTranslation('landing');

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    function handleMenu(event: any) {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    } 

    function handleMenuClose() {
        setAnchorEl(null);
    }

    const mobileNavbar = () => {
        return (
            <div>
                <Toolbar>
                    <MainLogo/>
                    <RightFlexBox>
                        <IconButton
                        aria-label="mobile menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            disableScrollLock={true}
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleMenuClose}
                            style={{float: "left"}}>
                            <MenuItem onClick={handleMenuClose}><LinkButton path="/login" type="outlined">{t("loginbtn")}</LinkButton></MenuItem>
                            <MenuItem onClick={handleMenuClose}><LinkButton type="primary" path="/book_chef">{t("mainbtn")}</LinkButton></MenuItem>
                            <MenuItem><LanguageSwitch /></MenuItem>
                        </Menu>    
                    </RightFlexBox>
                </Toolbar>
            </div>
        )
    }
    
    const desktopNavbar = () => {
        return (
            <div>
                <Toolbar>
                    <div style={{paddingLeft:"18px"}}>
                        <MainLogo/>
                    </div>
                    <RightFlexBox>
                        <LanguageSwitch />
                        <LinkButton path="/login" type="outlined">{t("loginbtn")}</LinkButton>
                        <div style={{paddingLeft:"10px"}}></div>
                        <LinkButton path="/book_chef" type="primary">{t("mainbtn")}</LinkButton>
                    </RightFlexBox>
                </Toolbar>
            </div>
        )
    
    }

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
              ? dispatch(actions.screenType("mobile"))
              : dispatch(actions.screenType("desktop"))
          };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, [])

    return (
        <div>
            <ElevationScroll>
                <AppBar position="static" color="secondary" style={{height:"70px", paddingRight:"10px", position:"fixed"}}>
                    { mobileView === "mobile" ?
                        mobileNavbar()
                    :
                        desktopNavbar()
                    }
                </AppBar>    
            </ElevationScroll>
            <div style={{paddingTop:"70px", display:"absolute"}}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default BaseLayout;

