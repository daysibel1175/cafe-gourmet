import { useState } from 'react';
import '../assets/nav.css';
import logo from '../images/logo.svg';
import NavMobile from './NavMobile';



function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='navbar'>
      <div id='logo'><img src={logo} alt="logo" /></div>
      <div id='nav-menu'>
        <ul id="nav-itens">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#about">Sobre Nós</a></li>
          <li><a href="#mais-vendidos">Menu</a></li>
          <li><a href="#feedback">Avaliacoes</a></li>
          <li><a href="#map">Endereço</a></li>
        </ul>
      </div>
      <div className='nav-botao'>
        <a href="">COMPRAR</a>
      </div>
      <div id="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      {isMenuOpen && <NavMobile />}
    </div>
  );
}

export default Nav;
