import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 720;
    color: #8bc34a;
    background-color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.fontSize.buttonText};
    padding: 9px 18px;
    font-weight: bold;
    border-radius: ${props => props.theme.borderRadius.mainBtn};

    font-size: ${props => props.theme.fontSize.buttonText};
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    };
`

export default NavLink;