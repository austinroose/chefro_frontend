import React, { useState } from 'react';
import './Style.css';

interface PopUpNotification {
    type: 'success' | 'danger' | 'progress',
    boldText: string,
    text: string,
    position: 'absolute' | 'static',
    onShowPopupChange: (show: boolean) => void;
}

export const PopUp: React.FC<PopUpNotification> = (props) => {
    const [notifactionOpen, setNotifactionOpen] = useState(true)
    
    function closePopup(): void {
        setNotifactionOpen(false);
        props.onShowPopupChange(false);
    }

    function getBackgroundColor(type: 'success' | 'danger' | 'progress') {
        switch(type) {
            case 'success':
                return backgroundColors.success
            case 'danger':
                return backgroundColors.danger
            default:
                return backgroundColors.progress
        }
    }

    const backgroundColors = {
        success: '#4ca825',
        danger: '#f44336',
        progress: '#ffce00'
    }

    return (
        <div className="alert" style={{position: "static", backgroundColor: getBackgroundColor(props.type)}}>
            <span className="closebtn" onClick={closePopup}>&times;</span>
            <strong>{props.boldText}! </strong>{props.text}
        </div>
    )
}