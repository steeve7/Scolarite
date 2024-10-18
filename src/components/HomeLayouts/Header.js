"use client";
import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../HomeLayouts/Assets/images/logo.png";
import Icon from "../HomeLayouts/Assets/images/Icon.png";
import Image from "next/image";

const menus = [
  { id: "#home", label: "Home" },
  { id: "#price", label: "Pricing/Plans" },
  { id: "#about", label: "About Us" },
  { id: "#blogs", label: "Blog" },
  { id: "#become", label: "Become an affiliate" },
];

export default function Header() {
  const [menuSlide, setMenuSlide] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleOpen = () => {
    setMenuSlide((prev) => {
      console.log("Menu Slide:", !prev);
      return !prev;
    });
  };

  const handleMenuClick = (id) => {
    console.log("Active Menu:", id);
    setActiveMenu(id);
    handleOpen();
  };

  const changeBackground = () => {
    console.log("Scroll Y:", window.scrollY);
    setNavbar(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const headerStyle = {
    position: "fixed",
    width: "100%",
    left: 0,
    top: 0,
    zIndex: 10,
    transition: "all 0.3s",
    background: navbar
      ? "linear-gradient(to bottom, #2F364B, #262B3D)"
      : "transparent",
    boxShadow: navbar ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <div style={headerStyle}>
      <div className="flex items-center gap-2 justify-center bg-custom-gray py-3">
        <p className="md:text-[15px] text-[10px] font-normal font-roboto text-white">
          Limited Time Offer🌟: Save Up To ₦xxx On SCOLARITÉ Plans Until
          December 31, 2200
        </p>
        <Image src={Icon} alt="arrow_image" className="md:w-[20px] w-[15px]" />
      </div>
      <div className="flex justify-between md:py-7 py-4 md:px-20 px-7 bg-gradient-to-b from-[#2F364B] to-[#262B3D]">
        <div className="flex-1 flex justify-between items-center">
          <a href="./" className="flex items-center justify-start gap-2">
            <Image src={Logo} alt="cartImage" className="w-[53px]" />
            <p className="text-white text-[30px] font-roboto">Scolarite</p>
          </a>
          <ul className="justify-around gap-10 items-center md:flex flex-row hidden font-normal text-[16px] text-dark-color font-circular">
            {menus.map((menu, i) => (
              <li key={i}>
                <a
                  href={menu.id}
                  onClick={() => setActiveMenu(menu.id)}
                  className={`hover:text-light-yellow text-text-color font-roboto font-bold text-[20px] ${
                    activeMenu === menu.id ? "text-white" : ""
                  }`}
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:flex items-center hidden gap-4 pl-14">
          <p className="text-white font-roboto text-[20px] font-bold">Login</p>
          <button
            type="button"
            className="text-black font_roboto font-bold text-[20px] py-[0.5rem] px-[1rem] bg-white rounded-full border-0 outline-none"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10" onClick={handleOpen}>
          {menuSlide ? (
            <RiCloseLine className="w-[32px] text-white" />
          ) : (
            <RiMenu3Line className="w-[32px] text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute top-14 left-0 right-0 bottom-0 w-full h-screen bg-custom-green text-center ease-in duration-700 text-black ${
            menuSlide ? "" : "left-[-100%]"
          }`}
        >
          <ul className="mt-8">
            {menus.map((menu, i) => (
              <li
                key={i}
                className={`p-4 border-b-2 py-4 font-medium text-[18px] text-dark-color font-circular ${
                  activeMenu === menu.id
                    ? "text-light-yellow"
                    : "hover:text-light-yellow"
                }`}
              >
                <a href={menu.id} onClick={() => handleMenuClick(menu.id)}>
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}