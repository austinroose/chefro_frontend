import React, {useState} from 'react';
import { Loader } from './Loader';

export const LoadingPage = () => {

    return (
        <div style={{top: 0, left: 0, width: "100%", height:"100%", position: 'absolute', display: "flex", alignItems:"center", justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
            <Loader />
        </div>
    )
}