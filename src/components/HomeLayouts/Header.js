import style from "./navbar.module.css"
import NavBar from '@/components/HomeLayouts/navbar'
// import React, { useEffect } from 'react'


function Header() {
  return (
    <div className={style.header}>
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Header