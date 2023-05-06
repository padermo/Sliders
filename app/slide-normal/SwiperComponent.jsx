'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Image from 'next/image'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import './slide.css'

function SwiperComponent() {

  return (
    <div className='slide__normal'>
      <Swiper
        spaceBetween={30}
        slidesPerView={3} // manipula la cantidad de images
        pagination={{clickable:true}}
        modules={[Pagination]}
        className='slide__content'
      >
        <SwiperSlide className='slide__picture'>
          <Image src={image1} alt='' className='slide__image' />
        </SwiperSlide>
        <SwiperSlide className='slide__picture'>
          <Image src={image2} alt='' className='slide__image' />
        </SwiperSlide>
        <SwiperSlide className='slide__picture'>
          <Image src={image3} alt='' className='slide__image' />
        </SwiperSlide>
        <SwiperSlide className='slide__picture'>
          <Image src={image4} alt='' className='slide__image' />
        </SwiperSlide>
        <SwiperSlide className='slide__picture'>
          <Image src={image5} alt='' className='slide__image' />
        </SwiperSlide>
        <SwiperSlide className='slide__picture'>
          <Image src={image6} alt='' className='slide__image' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperComponent