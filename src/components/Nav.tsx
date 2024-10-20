import '../assets/nav.css'
import logo from '../images/logo.svg'

function Nav() {
 

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
  <div id='nav-botao'>
    <a href="">COMPRAR</a>
  </div>
    </div>
  )
}

export default Nav