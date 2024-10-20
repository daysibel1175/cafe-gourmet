import '../assets/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
 
  return (
    <div id='footer'>
        <div id='footer-start'>
        <div id='footer-icons'>
       <a href=""> <InstagramIcon className='icon'/></a>
        <a href=""><FacebookIcon className='icon'/></a>
        <a href=""><WhatsAppIcon className='icon'/></a>
        </div>
        <div id='footer-links'>
<span>Politica de privacidade</span>
<span>Termos e condições</span>
        </div>
        </div>
     
        <div id='footer-direitos'>
        <CopyrightIcon/>

<span>Todos os direitos reservados por DVSolutions</span>
        </div>
      
    
  
    </div>
  )
}

export default Footer;