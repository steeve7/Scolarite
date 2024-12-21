    "use client";
import style from "./navbar.module.css";
import { mergeText } from "@/app/add";
import logo from "@/components/HomeLayouts/Assets/images/logo.png"
import nextw from "./assets/nextw.png";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";
import { CButton, CLink, WSABOTAGH } from "../addons/addons";
import pimage from "./assets/pimage.png"
import { Storage } from "../addons/addons2";
const noteid = `noteification`;

const font = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["greek"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});



export default function Navbar2Main() {
  const pathname = usePathname();
  return (
    <div className={mergeText(style.nb, "navbarBackgroundClass")}>

      <NavBar /> {/* navattr ={[navbar,setNavbar]} isattr = {[isNavOpened,setIsNavOpened]} onscroll = {handleScroll} */}
    </div>
  );
}

function NavBar(props) {
    const pathname = usePathname();
    const param = useParams()
    const testRequest = {"Name":"Okechukwu","id":"1"}
    
    const storage = new Storage("student",testRequest);
    const Name = "Okechukwu"
    const navigationObject = [
      {PATH:"/",NAME:"Home"},
      {PATH:"/pricingplans",NAME:"Study Plans"},
      {PATH:"/about",NAME:"Past Questions"},
      {PATH:"/blogs",NAME:"Courses"},
      {PATH:"/becomeAffliate",NAME:"Education Tracker"}
    ]
  
    // for mobile toogle
    const ToogleNavBar = () => {
      document.getElementById("navbar").classList.toggle(style.navhidden);
      
    };
  useEffect(
    function () {
      //# slide animation initialiser
      const hides = document.querySelectorAll(".ani-hidden");
      const observer = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("ani-show");
              e.target.classList.remove("ani-hidden");
            } else {
              if (e.target.classList.contains("ani-loop")){e.target.classList.remove("ani-show")
              e.target.classList.add("ani-hidden")}
            }
          });
        },
        {
          root: null,
          threshold: 0.5,
        }
      );
      hides.forEach((e) => {
        observer.observe(e);
      });
      // nav bar link "active" control
      navigationObject.forEach(entry=>{
        var el = document.getElementById(`${entry.PATH}-navbarlink`)
        el.classList.remove(style.active)
        if (pathname== entry.PATH ){
          console.log(el)
          console.log(pathname)
          el.classList.add(style.active)
        }
      })
    },
    []
  );

  // Navbar background style based on route and scroll position
 
  return (
    <div
      className={mergeText(
        `flex justify-center items-center w-full`,
        style.navbar,
        font.className
      )}
      id="navbar"
    >
      
      <div className={mergeText("grid grid-cols-[auto_1fr]", style.navinner)}>
        <div
        
          className={mergeText(
            style.betweencenter,
            style.naviconwrapper,
            style.navitem
          )}
        >
          <span
            className={mergeText(
              "flex gap-3 justify-center items-center",
              style.navtitle
            )}
          >
            <CButton 
        onClick={e=>{window.location.reload()}}
         
        >
              <Image
                src={logo}
                className={mergeText(style.navimage, style.navlogo)}
                alt="logo unavaliable"
              />
            </CButton>
            <span className={style.navtitletext}><CButton 
        ani = {false}
        onClick={e=>{window.location.reload()}}
         
        >SCOLARITÉ 
        
        </CButton></span>
          </span>
          <div
            className={mergeText(style.navmenuicon)}
            id="menu"
            onClick={ToogleNavBar}
          >
            <span
              className={mergeText("", style.navmenuvicon, style.nmi1)}
            ></span>
            <span
              className={mergeText("", style.navmenuvicon, style.nmi2)}
            ></span>
            <span
              className={mergeText("", style.navmenuvicon, style.nmi3)}
            ></span>
          </div>
        </div>
        <div className={mergeText(style.betweencenter, style.navres)}>
          <div className="!DO Not Remove"></div>
          <div className={mergeText(style.navlinks, "flex", style.navitem)}>
            {navigationObject.map((entry,i)=><CLink key={i} href={entry.PATH} id = {`${entry.PATH}-navbarlink`} className={style.navlink}>
                {entry.NAME}
            </CLink>
            )}
            
          </div>
          <div className={style.navitem} style={{display:"felx",justifyContent:"center",alignItems:"center",gap:"20px"}}>
            <Image src={pimage} width={50}></Image>
            <CLink style = {{color:"white",fontSize:"20px"}}>{Name}</CLink>
          </div>
        </div>
      </div>
      
    </div>
  );
}
