import styled from 'styled-components';

export const SubmitBtn2 = styled.button`
    background-color: ${(props) => props.theme.color.submitBtnColor};
    font-family: ${(props) => props.theme.font.body};
    font-size: 17px;
    border-radius: 10px;
    color: white;
    border: 0px;
    margin-top: 10px;
    padding: 7px;
    transition: disabled 0.7s;

    cursor: pointer;

    &:focus {
        outline: none;
        
    };

    &:disabled {
        background-color: gray;
        cursor: not-allowed;
        pointer-events: none;
    
`