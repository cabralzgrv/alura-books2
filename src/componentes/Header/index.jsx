import './style.css';
import Logo from '../../componentes/Logo';
import IconesHeader from '../../componentes/IconesHeader';
import OpcoesHeader from '../../componentes/OpcoesHeader';

function Header () {
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header;