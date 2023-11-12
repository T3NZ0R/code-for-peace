import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import photo1 from '../assets/63c23543bb8eb590629846.png';
import photo2 from '../assets/Screenshot_1-min.jpg';
import photo3 from '../assets/1022965208_0_3_900_509_600x0_80_0_0_a2ddc60d6e0fb430224c936d9936f5f5.jpg';


const SwiperSlice = () => {
  const slides = [
    {
      id: 1,
      imageUrl: photo1,
      text: 'Разом',
    },
    {
      id: 2,
      imageUrl: photo2,
      text: 'Ми',
    },
    {
      id: 3,
      imageUrl: photo3,
      text: 'Переможемо',
    },
  ];
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}

    navigation
    pagination={{ clickable: true }}
    loop
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}

  >
    {slides.map((slide) => (
      <SwiperSlide key={slide.id}
      >
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <img
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
            src={slide.imageUrl} alt={`Slide ${slide.id}`} />
            {/*<div*/}
            {/*  style={{*/}
            {/*    position: 'absolute',*/}
            {/*    top: '50%',*/}
            {/*    left: '50%',*/}
            {/*    transform: 'translate(-50%, -50%)',*/}
            {/*    textAlign: 'center',*/}
            {/*    color: 'black',*/}
            {/*    fontSize: '24px',*/}
            {/*    fontWeight: 'bold',*/}
            {/*    background: "rgba( 255, 255, 255, 0.5 )",*/}
            {/*    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",*/}
            {/*    backdropFilter: " blur( 1px )" ,*/}
            {/*    borderRadius:"10px",*/}
            {/*    border:"1px solid rgba( 255, 255, 255, 0.18 )",*/}
            {/*    opacity:'1',*/}
            {/*    padding: "30px",*/}
            {/*    display: "flex",*/}
            {/*    justifyContent:"center",*/}
            {/*    alignItems:"center"*/}
            {/*  }}*/}
            {/*>*/}
              {/*<div className={"animate-character"}>*/}
              {/*  {slide.text}*/}
              {/*</div>*/}
            {/*</div>*/}
          </div>
      </SwiperSlide>
    ))}
  </Swiper>
  );
};

export default SwiperSlice;
