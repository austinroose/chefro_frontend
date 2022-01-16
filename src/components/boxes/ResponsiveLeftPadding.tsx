import { AnyRecord } from 'dns';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const ResponsiveLeftPadding = (props: any) => {
    const screenType = useSelector((state: RootStateOrAny ) => state.browser.screenType);


    return (
        <div>
            {
                screenType === "desktop" ?
                    <div style={{paddingLeft: props.desktopPadding}}>
                        {props.children}
                    </div>
                :
                    <div style={{paddingLeft: props.mobilePadding}}>
                        {props.children}
                    </div>
            }
        </div>
    )
}

export default ResponsiveLeftPadding;