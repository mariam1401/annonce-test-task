import Image from "next/image";
import StarIcon from '@/app/assets/Star2.svg'
import styles from './index.module.css'
import {Text} from "@/app/components/Text";

export const ProductCard = ({data})=>{
    return(
        <div className={styles.product_card}>
            <Image src={data.image} alt={''} className={styles.product_image}/>
            <div className={styles.product_content}>
                <div className={styles.product_info}>
                    <h3 className={styles.product_title}>{data.title}</h3>
                    <Text text={data.price} size={'14px'}/>
                </div>
                <Image src={StarIcon} alt={''} className={styles.icon}/>
            </div>
        </div>
    )
}
