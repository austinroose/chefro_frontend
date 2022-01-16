import styled from 'styled-components'

export const FilledInput = styled.input`
    display: absolute;
    background-color: lightgray;
    border-radius: 20px;
    border: 0px;
    padding: 12px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: ${(props) => props.theme.font.body};
    font-size: 17px;
    height: 37px;
    width: 100%;
    transition: border 0.6s;
    &:focus {
        outline: none;
        border: 1px solid #8bc34a;
    }
`