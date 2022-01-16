import styled from 'styled-components'

export const UnFilledInput = styled.input`
    display: absolute;
    border-radius: 20px;
    border: 1px solid lightgray;
    padding: 12px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: ${(props) => props.theme.font.body};
    font-size: 17px;
    height: 37px;
    width: 100%;
    &:focus {
        outline: none;
        border: 1px solid #8bc34a;
    }
`