'use client'
import CreativeGroupIcon from '@/app/assets/Creative.svg';
import InstagramIcon from '@/app/assets/Instagram.svg';
import TelegramIcon from '@/app/assets/Telegram.svg';
import ArrowIcon from '@/app/assets/Arrow.svg';
import {Button} from "@/app/components/Button";
import {Text} from "@/app/components/Text";
import WKIcon from '@/app/assets/WK.svg';
import styles from './index.module.css';
import Image from "next/image";
import Link from "next/link";
export const Footer = ()=>{
    const footerData = [
        {
            title:'ПОМОЩЬ',
            options:[
                {name:'Оплата',link:'/'},
                {name:'Доставка',link:'/'},
                {name:'Обмен и возврат',link:'/'},
                {name:'Подарочные карты',link:'/'}
            ]
        },
        {
            title:'КОНТАКТЫ',
            options: [
                {name:'Обратная связь',link:'/'},
                {name:'Контакты',link:'/'},
                {name:'8(800)250-19-50'}
            ]
        },
        {
            title:'ИНФОРМАЦИЯ',
            options: [
                {name:'О компании',link:'/'},
                {name:'Публичная оферта',link:'/'},
                {name:'Политика конфиденциальности',link:'/'},
                {name:'Использование файлов cookie',link:'/'}
            ]
        }
    ]

    const socialData = [
        {icon:TelegramIcon,link:'/',alt:'Telegram'},
        {icon:WKIcon,link:'/',alt:'WK'},
        {icon:InstagramIcon,link:'/',alt:'Instagram'}
    ]

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_first_row}>
                <div className={styles.footer_header_ctn}>
                    <h3 className={styles.footer_title}>ПОДПИСКА НА РАССЫЛКУ И СКИДКА</h3>
                    <Button text={'ПОДПИСАТЬСЯ'} borderColor={'white'}/>
                </div>
                <div className={styles.footer_content_ctn}>
                    {footerData.map((el,index:number)=>{
                        return(
                            <ul key={index} className={styles.footer_list}>
                                <li className={styles.footer_list_title}>{el.title}</li>
                                {el.options.map((item,index:number)=>{
                                    return (
                                        <li key={index}>
                                            {!item?.link ?
                                                <Text text={item.name} color={'white'}/>
                                                :
                                                <Link href={item.link} className={styles.link}>{item.name}</Link>
                                            }
                                        </li>
                                    )
                                })}
                                {el.title === 'КОНТАКТЫ' &&
                                    (
                                        <ul className={styles.footer_socials_ctn}>
                                            {socialData.map((el,index:number)=>{
                                                return (
                                                    <li key={index}>
                                                        <Link href={el.link}>
                                                            <Image src={el.icon} alt={el.alt}/>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )
                                }
                            </ul>
                        )
                    })}
                </div>
            </div>
            <div className={styles.footer_second_row}>
                <div className={styles.footer_privacy_ctn}>
                    <Text text={'©'} color={'white'}/>
                    <div>
                        <Text text={'ANNONCE'} color={'white'}/>
                        <Text text={'Все права защищены'} color={'#777575'}/>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <Image src={CreativeGroupIcon} alt={'Creative Sight Group'}/>
                    <Image src={ArrowIcon} alt={'arrow'} className={styles.arrow} onClick={scrollToTop}/>
                </div>
            </div>
        </footer>
    )
}
