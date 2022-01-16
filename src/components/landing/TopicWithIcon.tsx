import Typography from '@material-ui/core/Typography';
import React from 'react';
import ResponsiveCenterBox from '../boxes/ResponsiveCenterBox';
import {useSelector, RootStateOrAny} from 'react-redux';

import TopicIcon from './TopicIcon';
import ResponsiveTextBox from '../text/ResponsiveTextBox';

type Side = 'right' | 'left'

interface TopicWithIcon {
    id: number,
    title: string,
    description: string;
    side: Side;
}

const TopicWithIcon: React.FC<TopicWithIcon> = (props) => {
    const screenType = useSelector((state: RootStateOrAny) => state.browser.screenType)

    function setPictureSide(side: string) {
        if ( side === "right" ) {
            return "row"
        } else if (side === "left" ) {
            return "row-reverse"           
        }
    }

    const flexDir = setPictureSide(props.side)

    return (
        <div style={{display: "flex", flexWrap:"wrap", flexDirection:flexDir, justifyContent:"center", paddingTop:"100px", width:`${screenType === "desktop" ? "90%" : "100%"}`, margin: 'auto'}}>
            <div style={{width:`${screenType === "desktop" ? "60%" : "100%"}`, top:"50%", display:"flex", alignItems:"center"}}>
                <ResponsiveCenterBox>
                    <ResponsiveTextBox style={{top: "50%", }}>
                            <Typography variant="h2">{props.title}</Typography>
                            <p style={{fontSize: "23px"}}>
                                {props.description}
                            </p>  
                    </ResponsiveTextBox>
                </ResponsiveCenterBox>
            </div>
            
            <TopicIcon id={props.id} />
        </div>
    )
}

export default TopicWithIcon;