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
    document.querySelectorAll("NONE").forEach((el) => {
      el.style.display = "none";
    });
  }, []);
  return (
    <>
      {!exempt &&<>
        <div id="HEADER_SECTION" className={mergeText(...classes)}>
          <NavbarMain />
        </div>
        <div id="HEADER_STICKY_SIMULATOR" style={{ marginBottom: "130px" }}></div>
      </>}
    </>
  );
}

export default Header;
