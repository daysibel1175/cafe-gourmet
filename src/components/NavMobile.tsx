import '../assets/nav.css';

function NavMobile() {
  return (
    <div id='nav-menu-mobile'>
      <ul id="nav-itens-mobile">
        <li><a href="">Inicio</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Avaliacoes</a></li>
        <li><a href="">Endereço</a></li>
        <li><a href="" className='nav-botao-mobile'>COMPRAR</a></li>
      </ul>
    </div>
  );
}

export default NavMobile;
