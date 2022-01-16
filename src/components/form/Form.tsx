import React from 'react';

import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    @media(max-width: 350px) {
        width: 80%;
    }
`
