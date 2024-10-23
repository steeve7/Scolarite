"use client"
import style from "./style.module.css"
import { mergeText } from '@/app/add'
import logo from "@/app/assets/logo.png"
import Image from 'next/image'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



export default function NavBar(){
  // const router = useRouter()

    const ToogleNavBar = ()=>{
      document.getElementById("navbar").classList.toggle(style.navhidden)
      console.log(`testing ${Math.random()*1000}`)

      }
      useEffect(function(){
        console.log(`testing  ${Math.random()*1000} ///////////////////////////////////////////////////`)
        // document.getElementById("navbar").addEventListener("click",ToogleNavBar)
    
      },[])
 
    return <div className={mergeText("flex justify-center  items-center w-full",style.navbar,)} id='navbar'>
    <div className={mergeText("grid grid-cols-[auto_1fr]",style.navinner)}>
      <div className={mergeText(style.betweencenter,style.naviconwrapper,style.navitem)}>
        <span className={mergeText("flex gap-3 justify-center items-center",style.navtitle)}>
          <Image src={logo}  className={mergeText(style.navimage,style.navlogo)} alt="logo unavaliable" />
          <span className={style.navtitletext}>SOLARITÉ</span>
        </span> 
        <div className={mergeText(style.navmenuicon)} id='menu' onClick={ToogleNavBar}>
        <span className={mergeText("",style.navmenuvicon,style.nmi1)}></span>
        <span className={mergeText("",style.navmenuvicon,style.nmi2)}></span>
        <span className={mergeText("",style.navmenuvicon,style.nmi3)}></span>
        </div>

        </div>
      <div className={mergeText(style.betweencenter,style.navres)}>
        <div className="!DO Not Remove"></div>
        <div className={mergeText(style.navlinks,"flex",style.navitem)}>
          <a  href ="" className={style.navlink}>Home</a>
          <a  href ="" className={style.navlink}>Pricing/Plans</a>
          <a  href ="/about" className={style.navlink}>About us</a>
          <a  href ="" className={style.navlink}>Blog</a>
          <a  href ="" className={style.navlink}>Become an Affiliate</a>
        </div>
        <div className={style.navitem}>
          <div className={mergeText("text-white ",style.navauth)}>LOGIN</div>
          <div className={mergeText("bg-white text-black ",style.navauth)}>SIGN UP</div>
        </div>
      </div>
    </div>
  </div>
}