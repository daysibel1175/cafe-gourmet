// Products.tsx
import '../assets/products.css'
import '../assets/carrouselprodutos.css'
import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import primerproduto from '../images/produto1.png';
import segundoproduto from '../images/produto2.png';
import tercerproduto from '../images/produto3.png';
import cuartoproduto from '../images/produto4.png';
import quintoproduto from '../images/produto5.png';



const SwiperComponent: React.FC = () => {

    const products = [
      { image: primerproduto, title: "Café Arábica", price: "R$ 25.99", discountedPrice: "35.99", buttonText: "Comprar" },
      { image: segundoproduto, title: "Café Robusta Premium", price: "R$ 95.75", discountedPrice: "119.99", buttonText: "Comprar" },
      { image: tercerproduto, title: "Café Descafeinado", price: "R$ 35.99", discountedPrice: "45.99", buttonText: "Comprar" },
      { image: cuartoproduto, title: "Café Fair Trade", price: "R$ 13.89", discountedPrice: "25.99", buttonText: "Comprar" },
      { image: quintoproduto, title: "Café Saborizado", price: "R$ 45.99", discountedPrice: "55.99", buttonText: "Comprar" },
      { image: segundoproduto, title: "Café Orgânico", price: "R$ 65.99", discountedPrice: "75.99", buttonText: "Comprar" },
    ];

 

  return (
    <Swiper
    className='produtos-carrousel'
    navigation={true}
    modules={[Navigation, Autoplay]}
      autoplay={{ delay: 6000 }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 1,
        },
      }}
      centeredSlides={true}
      pagination={{ clickable: false }}
     
    >
          
 {products.map((product, index) => (
            <SwiperSlide className='produto-slide' key={index}>
              <Card 
                image={product.image}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                buttonText={product.buttonText}
              />
            </SwiperSlide>
          ))}
        </Swiper>

  );
};

export default SwiperComponent;







