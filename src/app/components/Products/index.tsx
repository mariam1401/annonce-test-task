'use client'
import styles from "./index.module.css";
import {ProductCard} from "@/app/components/ProductCard";
import JeansImage from "@/app/assets/JeansSuit.png";
import {useEffect, useState} from "react";
import Image from "next/image";
import BackIcon from "@/app/assets/Back.svg";
import NextIcon from "@/app/assets/Next.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
export const Products = ()=>{
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <section className={styles.product_container}>
            {!isMobile ?
                Array.from({ length: 3 }).map((_, index) => (
                    <ProductCard
                        key={index}
                        data={{ image: JeansImage, price: '12 990 РУБ.', title: 'ДЖИНСОВЫЙ КОСТЮМ' }}
                    />
                ))
                :
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
                        <Image src={BackIcon} alt={'Previous'} style={{filter:'invert(1)'}}/>
                    </div>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard
                                key={index}
                                data={{ image: JeansImage, price: '12 990 РУБ.', title: 'ДЖИНСОВЫЙ КОСТЮМ' }}
                            />
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next">
                        <Image src={NextIcon} alt={'Next'} style={{filter:'invert(1)'}}/>
                    </div>
                </Swiper>
            }
        </section>
    )
}
