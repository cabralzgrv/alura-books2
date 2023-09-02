import Logo from '../../componentes/Logo';
import IconesHeader from '../../componentes/IconesHeader';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Header () {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;