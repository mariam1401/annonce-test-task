import styles from './index.module.css'
import Slider from "@/app/components/Slider";
import SliderImage1 from "@/app/assets/SlideImage.png";
import {Text} from "@/app/components/Text";


export const FashionShowSlider = ()=>{
    const mainSliderImages=[SliderImage1,SliderImage1,SliderImage1]

    return(
        <section className={styles.fashion_slider}>
            <div className={styles.slider_content}>
                <Text text={'FASHION SHOW'} color={'white'} size={'50px'}/>
                <Text text={'OUR FASHIOM SHOW SOON'} color={'white'} size={'14px'}/>
            </div>
            <Slider images={mainSliderImages} className={styles.slider_image}/>
        </section>
    )
}
