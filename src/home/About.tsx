import aboutimage from "../images/about1.png"
import aboutimagedois from "../images/about2.png"
import CheckIcon from '@mui/icons-material/Check';
import '../assets/about.css'
function About() {
 
  return (
    <div id='about'>
    <div id="about-images">
      <img src={aboutimagedois} alt="" className="about-image" />  
      <img src={aboutimage} alt="" className="about-image end"/>
    </div>
    <div id="about-texto">
        <h2>Sobre Nós</h2>
        <h3>Porque escolher nosso café?</h3>
        <div id="about-subtexto">
        <div className="about-parrafos">
        <h4><CheckIcon className="about-icon"/> Qualidade Artesanal Garantida</h4>
        <p>Nosso café é selecionado a partir dos melhores grãos de fazendas sustentáveis. </p>
        </div>
        <div className="about-parrafos">
           <h4><CheckIcon className="about-icon"/> Experiência Personalizada</h4>  
           <p>Cada pessoa tem um paladar único. Por isso, personalizamos seu café para combinar perfeitamente com suas preferências.</p>
        </div>
       <div className="about-parrafos">
               <h4><CheckIcon className="about-icon"/> Conveniência e Praticidade</h4>
               <p>"Receba café gourmet em casa com planos flexíveis e desfrute de uma experiência premium sem complicações."</p>
       </div>
        </div>
       
    </div>
    </div>
  )
}

export default About