import '../assets/shopping.css';
import { useNavigate } from 'react-router-dom';

function Shopping() {
  const navigate = useNavigate();

  return (
    <div className='shopping'>
      <button style={{ color: 'white'}} onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
}

export default Shopping;
