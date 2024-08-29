import React from 'react';
import './Style.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const DivElement = (props: any) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const MaxWidthContainer = styled(DivElement)`
    max-width: ${props => props.theme.containers.desktopContainerMaxWidth};
    width: 100%;
`

const DesktopHorizontalCenterContainer: React.FC<any> = (props) => {
    return <div className={'main-desktop-container'}>
        <MaxWidthContainer {...props}/>
    </div>
}

export default DesktopHorizontalCenterContainer;
