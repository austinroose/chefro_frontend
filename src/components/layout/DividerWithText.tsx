import React from 'react';

import { Divider } from './Divider';

const DividerWithText = (props: any) => {
    return (
        <div style={{width: "100%", display:"flex", alignItems:"center", height:"14px"}}>
            <Divider/>
            <div style={{position: "absolute", transform:"translateX(-50%)", left:"50%", backgroundColor:"white", padding:"6px"}}>
                {props.children}
            </div>
        </div>
    )
}

export default DividerWithText;