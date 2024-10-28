// Nav.tsx
import  { useState } from 'react';
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
          <li><a href="">Inicio</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Avaliacoes</a></li>
          <li><a href="">Endereço</a></li>
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
