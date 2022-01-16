import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 720;
    color: white;
    background-color: ${props => props.theme.color.primaryBtnColor};
    font-size: ${props => props.theme.fontSize.buttonText};
    padding: 9px;
    font-weight: bold;
    border-radius: ${props => props.theme.borderRadius.mainBtn};

    font-size: ${props => props.theme.fontSize.buttonText};
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    };
`

export default NavLink;