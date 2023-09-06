import Logo from '../../componentes/Logo';
import IconesHeader from '../../componentes/IconesHeader';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Header () {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;