import React from 'react'
import style from "./style.module.css"
import { mergeText } from '@/app/add'
import logo from "@/app/logo.png"

function NavBar(props){
    return <div className={mergeText("flex justify-between items-center w-full",style.navbar)}>
    <div className={style.navitem}><img src={logo} className={style.navlogo} alt="logo unavaliable" /></div>
    <div className={mergeText(style.navlinks,"flex gap-10",style.navitem)}>
      <a  href ="" className={style.navlink}>Home</a>
      <a  href ="" className={style.navlink}>Pricing/Plans</a>
      <a  href ="" className={style.navlink}>About us</a>
      <a  href ="" className={style.navlink}>Blog</a>
      <a  href ="" className={style.navlink}>Become an Affiliate</a>
    </div>
    <div className={style.navitem}></div>
  </div>
}

function Header() {
  return (
    <div className={style.header}>
      <NavBar/>
    </div>
  )
}

export default Header