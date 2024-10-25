"use client"
import style from "./style.module.css"
import { mergeText } from '@/app/add'
import logo from "@/app/assets/logo.png"
import { Roboto } from "next/font/google"
import Image from 'next/image'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const font = Roboto({
  weight: ['300', '400', '500', '700',"900"],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});


export default function NavBar(){
  // const router = useRouter()

    const ToogleNavBar = ()=>{
      document.getElementById("navbar").classList.toggle(style.navhidden)

      }
      useEffect(function(){
        console.log(`main  ${Math.random()*1000}`)

        setInterval(e=>{
          
          document.querySelectorAll(`.${style.navatext}`).forEach(e=>{
            const bgpos = Number(String(e.style.backgroundPositionX).replace("px",""))+1
            e.style.backgroundPositionX = `${bgpos}px`
            console.log("pos x: ",bgpos)
          })
        },200)
        const hides = document.querySelectorAll(".ani-hidden")
        const observer = new IntersectionObserver(e=>{
          e.forEach(e=>{
            if(e.isIntersecting){
              e.target.classList.add("ani-show")
              e.target.classList.remove("ani-hidden")
            }else{
              /* e.target.classList.remove("ani-show")
              e.target.classList.add("ani-hidden") */
            }
          })
        },{
          root:null,
          threshold:0.5
        })
        hides.forEach(e=>{
          observer.observe(e)
        })
    
      },[])
 
    return <div className={mergeText("flex justify-center  items-center w-full",style.navbar,font.className)} id='navbar'>
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
          <a  href ="/pricingplans" className={style.navlink}>Pricing/Plans</a>
          <a  href ="/about" className={style.navlink}>About us</a>
          <a  href ="" className={style.navlink}>Blog</a>
          <a  href ="" className={style.navlink}>Become an Affiliate</a>
        </div>
        <div className={style.navitem}>
          <div className={mergeText("",style.navauth)}><span className={mergeText(style.navatextlogin,style.navatext)}>LOGIN</span></div>
          <div className={mergeText("",style.navauth,style.navauth1)}><span className={style.navatext}>SIGN UP</span></div>
        </div>
      </div>
    </div>
  </div>
}