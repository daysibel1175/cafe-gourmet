import React, { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import CardComponent from './CardFeedback';
import '../assets/cardfeedback.css';
import pessoaum from '../images/Img-Female09.svg';
import pessoadois from '../images/Img-Female12.svg';
import pessoatres from '../images/Img-Male-02.svg';
import pessoacuatro from '../images/Img-Male-04.svg';
import pessoacinco from '../images/Img-Male-09.svg';

const cardsData = [
  { image: pessoaum, title: 'Taylor Coleman', feedback: 'Este producto es genial.' },
  { image: pessoadois, title: 'Indigo Browm', feedback: 'Me encantó este producto.' },
  { image: pessoatres, title: 'Daniel McClain', feedback: 'Altamente recomendado.' },
  { image: pessoacuatro, title: 'Norman Diaz', feedback: 'Muy buen producto.' },
  { image: pessoacinco, title: 'Producto 5', feedback: 'Excelente calidad.' },
  { image: pessoatres, title: 'Producto 3', feedback: 'Altamente recomendado.' },
  { image: pessoacuatro, title: 'Producto 4', feedback: 'Muy buen producto.' },
  { image: pessoacinco, title: 'Producto 5', feedback: 'Excelente calidad.' },
];

const SwiperComponent: React.FC = () => {
  const [mainIndex, setMainIndex] = useState(1);

  const handleSlideChange = (swiper: SwiperClass) => {
    setMainIndex(swiper.realIndex);
  };

  const getClassNames = (index: number, mainIndex: number, totalSlides: number) => {
    if (index === mainIndex) return 'main-card';
    if (index === (mainIndex - 1 + totalSlides) % totalSlides || index === (mainIndex + 1) % totalSlides) return 'side-card';
    return 'back-card';
  };

  return (
    <Swiper
    className="my-swiper"
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Autoplay]}
      onSlideChange={handleSlideChange}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 2,
        },
      }}
      centeredSlides={true}
      navigation={false}
      pagination={{ clickable: false }}
     
    >
      {cardsData.map((card, index) => {
        const totalSlides = cardsData.length;
        const cardClass = getClassNames(index, mainIndex, totalSlides);
        return (
          <SwiperSlide key={index}>
            <div className={cardClass}>
              <CardComponent
                image={card.image}
                title={card.title}
                feedback={card.feedback}
                isMain={cardClass === 'main-card'}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
