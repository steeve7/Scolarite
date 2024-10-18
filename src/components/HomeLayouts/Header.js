import style from "./style.module.css"
import NavBar from '@/components/HomeLayouts/navbar'
// import React, { useEffect } from 'react'


function Header() {
  return (
    <div className={style.header}>
      <NavBar/>
    </div>
  )
}

export default Header