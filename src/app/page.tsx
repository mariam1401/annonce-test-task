import styles from "./page.module.css";
import {ProductCard} from "@/app/components/ProductCard";
import JacketImage from '@/app/assets/Jacket.png'
import {Products} from "@/app/components/Products";
import CoatImage from './assets/Coat.png'
import Image from "next/image";
import {Banner} from "@/app/components/Banner";
import {HeroSlider} from "@/app/components/HeroSlider";
import {FashionShowSlider} from "@/app/components/FashionShowSlider";

export default function Home() {
  return (
    <main>
        <HeroSlider/>
        <Banner text={'NEW COLLECTION'}/>
        <Products/>
        <Banner text={'SOON'}/>
        <FashionShowSlider/>
        <section className={styles.products}>
            <Image src={CoatImage} alt={'Coat'} className={styles.coat_img}/>
            <div className={styles.product_container}>
                <ProductCard data={{ image: JacketImage, price: '12 990 РУБ.', title: 'ЖАКЕТ'}}/>
            </div>
        </section>
    </main>
  );
}
