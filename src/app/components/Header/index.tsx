'use client'
import AccountIcon from '@/app/assets/Account.svg';
import SearchIcon from '@/app/assets/Search.svg';
import MenuIcon from '@/app/assets/Frame.svg';
import StarIcon from '@/app/assets/Star.svg';
import ListIcon from '@/app/assets/List.svg';
import {Menu} from "@/app/components/Menu";
import Logo from '@/app/assets/Logo.svg';
import styles from './index.module.css';
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

export const Header =()=>{
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const navData= [
        {icon:SearchIcon,link:'/'},
        {icon:AccountIcon,link:'/'},
        {icon:ListIcon,link:'/'},
        {icon:StarIcon,link:'/'}
    ]
    const handleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <nav className={styles.header}>
            <div className={styles.header_container}>
                <Image src={MenuIcon} alt={'menu'} onClick={handleMenu} className={styles.icon}/>
                <Link href={'/'}>
                    <Image src={Logo} alt={'logo'} className={styles.logo}/>
                </Link>
            </div>
            <ul className={styles.header_content}>
                {navData.map((el,index)=>{
                    return (
                        <li key={index}>
                            <Link href={el.link}>
                                <Image src={el.icon} alt={''} className={styles.icon}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {isMenuOpen &&
                <Menu handleMenu={handleMenu}/>
            }
        </nav>
    )
}
