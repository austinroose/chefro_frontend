import styled from 'styled-components';

const Header = styled.div`
    margin: 0;
    padding: 5px;
    top: 0px;
    width: 100%;
    height: 70px;
    display: flex;
    background-color: ${props => props.theme.color.white};
    align-items: center;
`

export default Header;