import '../assets/nav.css';

function NavMobile() {
  return (
    <div id='nav-menu-mobile'>
      <ul id="nav-itens-mobile">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#about">Sobre Nós</a></li>
          <li><a href="#mais-vendidos">Menu</a></li>
          <li><a href="#feedback">Avaliacoes</a></li>
          <li><a href="#map">Endereco</a></li>
        <li><a href="" className='nav-botao-mobile'>COMPRAR</a></li>
      </ul>
    </div>
  );
}

export default NavMobile;
