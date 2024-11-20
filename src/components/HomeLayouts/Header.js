import NavbarMain from "@/components/HomeLayouts/navbar"
import style from "./navbar.module.css"
import NavBar from '@/components/HomeLayouts/navbar'
// import React, { useEffect } from 'react'


function Header() {
  return (
    <div id="HEADER" className={style.header}>
      <NavbarMain/>
    </div>
  )
}

export default Header