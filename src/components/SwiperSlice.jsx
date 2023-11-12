import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/bundle';

import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SwiperSlice = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://i1.poltava.to/uploads/2021/03/2021-03-17/image2.jpg',
      text: 'Дрони',
    },
    {
      id: 2,
      imageUrl: 'https://images.unian.net/photos/2022_09/thumb_files/1200_0_1662481264-3169.jfif',
      text: 'ПРитула',
    },
    {
      id: 3,
      imageUrl: 'https://blog.metro.ua/wp-content/uploads/2017/11/shutterstock_574766635-1024x666.jpg',
      text: 'Харчі',
    },
  ];
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={2}

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
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity:'0.5',cursor:'pointer' }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '0.5';
            }}
            src={slide.imageUrl} alt={`Slide ${slide.id}`} />
            <div
              style={{
                position: 'absolute',
                bottom: '-10%',
                left: '35%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'black',
                fontSize: '24px',
                fontWeight: 'bold',
                background: "rgba( 255, 255, 255, 0.5 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: " blur( 1px )" ,
                borderRadius:"10px",
                border:"1px solid rgba( 255, 255, 255, 0.18 )",
                opacity:'1',
                height:"40%",
                width:"60%"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.5';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
              }}


            >
              {slide.text}
            </div>
          </div>
      </SwiperSlide>
    ))}
  </Swiper>
  );
};

export default SwiperSlice;
