"use client";
import NavbarMain from "@/components/HomeLayouts/navbar";
import style from "./navbar.module.css";
import { useEffect } from "react";
import { mergeText } from "@/app/add";
import {  INFILTRATOR, isPageExempt, WSABOTAG } from "../addons/addons";

function Header() {
  var classes = [style.header];
  var exempt = isPageExempt()
  useEffect(function () {
    document.querySelectorAll("NONE").forEach((el) => {
      el.style.display = "none";
    });
    // INFILTRATOR("b",{blur:3})
    // new WSABOTAG().BLUR({value:2})

  }, []);
  return (
    <>
      {!exempt &&<>
        <div id="HEADER_SECTION" className={mergeText(...classes)}>
          <NavbarMain />
        </div>
      </>}
    </>
  );
}

export default Header;
