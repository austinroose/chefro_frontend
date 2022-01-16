import { AnyRecord } from 'dns';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const ResponsiveCenterBox = (props: any) => {
    const screenType = useSelector((state: RootStateOrAny ) => state.browser.screenType);


    return (
        <div>
            {
                screenType === "desktop" ?
                    <div style={{margin: 0}}>
                        {props.children}
                    </div>
                :
                    <div style={{margin: "auto"}}>
                        {props.children}
                    </div>
            }
        </div>
    )
}

export default ResponsiveCenterBox;