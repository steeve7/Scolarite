"use client"
import React, { useEffect } from 'react'
import style from "./style.module.css"
import { mergeText } from '@/app/add'
import logo from "@/app/assets/logo.png"
import menu from "@/app/assets/menu.png"

function NavBar(props){
  useEffect(function(){
    console.log(logo)
  },[])
    return <div className={mergeText("flex justify-center items-center w-full",style.navbar)}>
    <div className={mergeText(style.betweencenter,style.navinner)}>
      <div className={mergeText(style.betweencenter,style.naviconwrapper,style.navitem)}>
        <img src={logo}  className={style.navlogo} alt="logo unavaliable" />
        <img src={menu}  className={style.navmenuicon} alt="logo unavaliable" />

        </div>
      <div className={mergeText(style.betweencenter,style.navres)}>
        <div className={mergeText(style.navlinks,"flex",style.navitem)}>
          <a  href ="" className={style.navlink}>Home</a>
          <a  href ="" className={style.navlink}>Pricing/Plans</a>
          <a  href ="/about" className={style.navlink}>About us</a>
          <a  href ="" className={style.navlink}>Blog</a>
          <a  href ="" className={style.navlink}>Become an Affiliate</a>
        </div>
        <div className={style.navitem}>
          <div className={mergeText(" ",style.navauth)}>LOGIN</div>
          <div className={mergeText("bg-white text-black ",style.navauth)}>SIGN UP</div>
        </div>
      </div>
    </div>
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