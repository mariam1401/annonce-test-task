'use client'
import SliderImageMobile from '@/app/assets/CoverImageMobile.png';
import SliderImage from "@/app/assets/CoverImage.png";
import Slider from "@/app/components/Slider";
import { Text } from "@/app/components/Text";
import { useState, useEffect } from 'react';
import styles from "./index.module.css";
import Link from "next/link";

export const HeroSlider = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mainSliderImages = [SliderImage, SliderImage, SliderImage];
    const mainSliderMobileImages = [SliderImageMobile, SliderImageMobile, SliderImageMobile];

    return (
        <section className={styles.hero_slider}>
            <div className={styles.slider_content}>
                <Text text={'BE FEMININE - CHOOSE US'} size={'10px'} color={'white'} />
                <Link href={'/'}>LOOK ALL</Link>
            </div>
            <Slider
                images={isMobile ? mainSliderMobileImages : mainSliderImages}
                className={styles.slider_image}
            />
        </section>
    );
};
