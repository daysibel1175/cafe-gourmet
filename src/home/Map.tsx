import GoogleMap from '../components/GoogleMap'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import '../assets/map.css'

function Map() {
 
  return (
    <div id='map'>
      <h2>Endereço </h2>
    <GoogleMap/>
  <a href="#navbar"><ArrowCircleUpIcon id='buttonUp'/></a>
    </div>
  )
}

export default Map