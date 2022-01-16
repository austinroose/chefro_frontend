import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../navigation/NavLink';
import NavLink2 from '../navigation/NavLink2';
import NavLinkOutlined from '../navigation/NavLinkOutlined';
import BasicButton from './BasicButton';

interface LinkButton {
    path: string,
    type: string
}

const LinkButton: React.FC<LinkButton> = (props) => {

    function setButton(type: string) {
        if (type === "primary") {
            return (<NavLink to={props.path}>{props.children}</NavLink>)
        } else if (type === "outlined") {
            return (<NavLinkOutlined to={props.path}>{props.children}</NavLinkOutlined>)
        } else {
            return (<NavLink2 to={props.path}>{props.children}</NavLink2>)
        }
    }

    const button = setButton(props.type)

    return(
        <div>
            {button}
        </div>
    )
}


export default LinkButton;
