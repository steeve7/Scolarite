"use client";
import NavbarMain from "@/components/HomeLayouts/navbar";
import style from "./navbar.module.css";
import NavBar from "@/components/HomeLayouts/navbar";
import { useEffect } from "react";
import { mergeText } from "@/app/add";
import { isPageExempt } from "../addons/addons";
import { usePathname } from "next/navigation";
// import React, { useEffect } from 'react'

function Header() {
  var classes = [style.header];
  var exempt = isPageExempt()
  useEffect(function () {
    if(exempt){
      document.getElementById("HEADER_SECTION").style.display = "none";
    }
    document.querySelectorAll("NONE").forEach((el) => {
      el.style.display = "none";
    });
  }, []);
  return (
    <>
      <div id="HEADER_SECTION" className={mergeText(...classes)}>
        <NavbarMain />
      </div>
      <div style={{ marginBottom: "130px" }}></div>
    </>
  );
}

export default Header;
