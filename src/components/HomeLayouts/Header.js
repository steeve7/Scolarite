"use client"
import NavbarMain from "@/components/HomeLayouts/navbar"
import style from "./navbar.module.css"
import NavBar from '@/components/HomeLayouts/navbar'
import { useEffect } from "react"
import { mergeText } from "@/app/add"
// import React, { useEffect } from 'react'



function Header() {
  var classes = [style.header]
  useEffect(function(){
  document.querySelectorAll("NONE").forEach(el=>{el.style.display = "none"})

  },[])
  return (
    <div id="HEADER_SECTION" className={mergeText(...classes)}>
      <NavbarMain/>
    </div>
  )
}

export default Header