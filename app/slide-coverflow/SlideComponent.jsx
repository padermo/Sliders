'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow } from 'swiper'
import Image from 'next/image'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';
import './style.css'

function SlideComponent() {
  return (
    <div className='swiper__normal'>
      <Swiper
        effect='coverflow'
        slidesPerView={3} // manipula la cantidad de images
        pagination={{clickable:true}}
        modules={[EffectCoverflow, Pagination]}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className='swiper__content'
      >
        <SwiperSlide className='swiper__picture'>
          <Image src={image1} alt='' className='swiper__image' />
        </SwiperSlide>
        <SwiperSlide className='swiper__picture'>
          <Image src={image2} alt='' className='swiper__image' />
        </SwiperSlide>
        <SwiperSlide className='swiper__picture'>
          <Image src={image3} alt='' className='swiper__image' />
        </SwiperSlide>
        <SwiperSlide className='swiper__picture'>
          <Image src={image4} alt='' className='swiper__image' />
        </SwiperSlide>
        <SwiperSlide className='swiper__picture'>
          <Image src={image5} alt='' className='swiper__image' />
        </SwiperSlide>
        <SwiperSlide className='swiper__picture'>
          <Image src={image6} alt='' className='swiper__image' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideComponent