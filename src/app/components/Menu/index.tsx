'use client'
import LogoBlack from  '@/app/assets/LogoBlack.svg';
import {Button} from "@/app/components/Button";
import CloseIcon from '@/app/assets/Close.svg';
import {Text} from "@/app/components/Text";
import styles from './index.module.css';
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
export const Menu = ({handleMenu})=>{
    const [isClicked,setIsClicked] = useState(false)
    const menuData = [
        {name:'Жакеты',link:'/'},
        {name:'Пальто',link:'/'},
        {name:'Платья',link:'/'},
        {name:'Юбки',link:'/'},
        {name:'Костюмы',link:'/'},
        {name:'Брюки',link:'/'},
        {name:'NEW YEAR COLLECTION',link:'/',isBold:true},
        {name:'Лонгсливы',link:'/'},
        {name:'Топы',link:'/'},
        {name:'Блузы',link:'/'},
        {name:'Велюр ',link:'/'},
        {name:'Обувь',link:'/'}
    ]

    const closeMenu = ()=>{
        setIsClicked(true)
        setTimeout(()=>{
            handleMenu()
        },500)
    }
    return (
        <div className={`${styles.menu} ${!isClicked ? styles.fadeInLeft : styles.fadeOutLeft}`}>
            <div className={styles.menu_container}>
                <div className={styles.menu_header}>
                    <Image src={CloseIcon} alt={''} onClick={closeMenu} className={styles.close_icon}/>
                    <Image src={LogoBlack} alt={''} className={styles.icon}/>
                </div>
                <ul className={styles.menu_content}>
                    {menuData.map((el,index)=>{
                        return (
                            <li key={index} style={{fontWeight:el?.isBold ? '600' : '400'}}>
                                <Link href={el.link}>{el.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div  className={styles.menu_btn_container}>
                    <Button text={'СМОТРЕТЬ ВСЕ'} background={'black'}/>
                    <Button text={'GIFT CARD/ПОДАРОЧНАЯ КАРТА'} background={'#B3B3B3'}/>
                </div>
            </div>
            <div>
                <Text text={'ANNONCE'} size={'14px'}/>
                <Text text={'Все права защищены'} size={'10px'}/>
            </div>
        </div>
    )
}
