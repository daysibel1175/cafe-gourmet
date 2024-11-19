import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Inicio from './home/Inicio';
import About from './home/About';
import Products from './home/Products';
import Feedbacks from './home/Feedbacks';
import Map from './home/Map';
import Footer from './home/Footer';
import Shopping from './shopping/Shopping'; 

function Home() {
  return (
    <>
      <Nav />
      <Inicio />
      <About />
      <Products />
      <Feedbacks />
      <Map />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </Router>
  );
}

export default App;
