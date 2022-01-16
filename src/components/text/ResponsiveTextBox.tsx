import { AnyRecord } from 'dns';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const ResponsiveTextBox = (props: any) => {
    const screenType = useSelector((state: RootStateOrAny ) => state.browser.screenType);


    return (
        <div>
            {
                screenType === "desktop" ?
                    <div style={{textAlign: "left"}}>
                        {props.children}
                    </div>
                :
                    <div style={{textAlign: "center"}}>
                        {props.children}
                    </div>
            }
        </div>
    )
}

export default ResponsiveTextBox;