'use client';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import Image from "next/image";
import 'swiper/css';
import NextIcon from '@/app/assets/Next.svg';
import BackIcon from '@/app/assets/Back.svg';

const Slider = ({ images, className }) => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
        >
            <div className="swiper-button-prev">
                <Image src={BackIcon} alt={'Previous'} />
            </div>
            {images?.map((el, index) => (
                <SwiperSlide key={index}>
                    <Image src={el} alt={`Slide ${index}`} className={className} />
                </SwiperSlide>
            ))}
            <div className="swiper-button-next">
                <Image src={NextIcon} alt={'Next'} />
            </div>
        </Swiper>
    );
};

export default Slider;
