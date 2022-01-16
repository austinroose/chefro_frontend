import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const BasicButton = styled(Button)`
    font-family: ${props => props.theme.font.body};
    font-size: ${props => props.theme.fontSize.buttonText};
    background-color: ${props => props.theme.color.primaryColor};
    font-weight: bold;
    border-radius: ${props => props.theme.borderRadius.mainBtn};

`

export default BasicButton;