import styles from './index.module.css'
import Link from "next/link";

export const Banner = ({text})=>{
    return(
        <section className={styles.banner_container}>
            <Link href={'/'}>
                {text}
            </Link>
        </section>
    )
}
