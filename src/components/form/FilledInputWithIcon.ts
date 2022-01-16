import styled from 'styled-components';

export const FilledInputWithIcon = styled.input`
    flex-grow: 2;
    border: none;
    border-radius: 20px 0px 0px 20px;
    background-color: lightgray;
    padding: 12px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: ${(props) => props.theme.font.body};
    font-size: 17px;
    height: 37px;
    &:focus {
        outline: none;
    }
    @media(max-width: 350px) {
        width: 80%;
    }
`