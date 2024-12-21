"use client";
import NavbarMain from "@/components/HomeLayouts/navbar";
import style from "./navbar.module.css";
import { useEffect } from "react";
import { mergeText } from "@/app/add";
import {  Clientable, INFILTRATOR, isPageExempt, State, addonsComplex } from "../addons/addons";
import { usePathname } from "next/navigation";
import Navbar2Main from "./navbar2";

function Header() {
  var classes = [style.header];
  var exempt = isPageExempt()
  var inc = 0
  var pathName = usePathname()
  Clientable(()=>{
    console.log(Math.random())
  })
  useEffect(function () {
    document.querySelectorAll("NONE").forEach((el) => {
      el.style.display = "none";
    });
    // INFILTRATOR("g",{speed:0.1})
    // new addonsComplex.WSABOTAG().BLUR({value:10})

  }, []);
  return (
    <>
      {!exempt &&<>
        <div id="HEADER_SECTION" className={mergeText(...classes)}>
          {pathName.includes("/student")? <Navbar2Main />: <NavbarMain/>}
        </div>
      </>}
    </>
  );
}

export default Header;
