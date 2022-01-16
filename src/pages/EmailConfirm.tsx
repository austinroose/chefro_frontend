import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {ReactComponent as ConfirmEmail} from '../components/icons/ConfirmEmail.svg'
import { CardWithIconAndText } from '../components/cards/CardWithIconAndText';
import { Typography } from '@material-ui/core';
import { RootStateOrAny, useSelector } from 'react-redux';

export const EmailConfirm = () => {

    const [mobile, setMobile] = useState(false)
    
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 400
              ? setMobile(true)
              : setMobile(false)
          };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, [])

    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}} style={{height: "700px", display: "flex", alignItems: "center", justifyContent:"center", padding:"20px"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"lightgrey", width:`${mobile ? "100%" : "400px"}`,
            padding: "20px",textAlign:"center", borderRadius: "20px", boxSizing: "border-box", height: "auto"}}>
                <ConfirmEmail style={{height:"90px",paddingBottom: "30px"}}/>
                <Typography variant="h2">Kinnituslink saadetud!</Typography>
                <p style={{fontSize:"19px"}}>Saatsime teie emailile lingi, millega saate oma konto kinnitada.</p>
            </div>
        </motion.div>
    )
}