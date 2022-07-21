import React from 'react'
import styles from './Find.module.css'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


function Card({image, make}) {
  return (
    <div className={styles.card}>
        <img src={image} alt="/"/>
        <p>{make}</p>
    </div>
  )
}

export default Card