import { AnyRecord } from 'dns';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const ResponsiveCard = (props: any) => {
    const screenType = useSelector((state: RootStateOrAny ) => state.browser.screenType);


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {
                screenType === "desktop" ?
                    <div style={{justifyContent: "flex-start"}}>
                        {props.children}
                    </div>
                :
                    <div style={{justifyContent: "center"}}>
                        {props.children}
                    </div>
            }
        </div>
    )
}

export default ResponsiveCard;