import NavbarMain from "@/components/HomeLayouts/navbar"
import style from "./navbar.module.css"
import NavBar from '@/components/HomeLayouts/navbar'
// import React, { useEffect } from 'react'


function Header() {
  return (
    <>
      <div id="HEADER_SECTION" className={mergeText(...classes)}>
        <NavbarMain/>
      </div>
      <div style={{marginBottom:"130px"}}></div>
    </>
  )
}

export default Header