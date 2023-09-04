import logo from '../../images/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 3rem;
`

const Image = styled.img`
  margin-right: 10px;

`

function Logo() {
    return (
        <LogoContainer>
          <Image 
            src={logo}
            alt='Logo'
            className='LogoImg'>
          </Image>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;