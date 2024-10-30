"use client";
import style from "./navbar.module.css";
import { mergeText } from "@/app/add";
import logo from "@/components/HomeLayouts/Assets/images/logo.png"
import nextw from "./assets/nextw.png";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";
import { CLink } from "../addons/addons";

const noteid = `noteification`;

const font = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["greek"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

function Notification({ message, link }) {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById(noteid).classList.toggle(style.notehidden);
    }, 3000);
  }, []);
  return (
    <div id={noteid} className={style.note}>
      <CLink ani={false} href={link} className={style.notecontent}>
        {message}{" "}
        <div className={style.notegoto}>
          <Image src={nextw} className={style.nextw} alt="logo" />
        </div>
      </CLink>
    </div>
  );
}
export default function NavbarMain() {
  return (
    <div className={style.nb}>
      <Notification
        message="Limited Time Offer🌟: Save Up To ₦xxx On SCOLARITÉ  Plans Until December 31, 2200"
        link="/pricingplans"
      />
      <NavBar />
    </div>
  );
}

function NavBar() {
    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);

  const ToogleNavBar = () => {
    document.getElementById("navbar").classList.toggle(style.navhidden);
  };
  useEffect(
    function () {
      const hides = document.querySelectorAll(".ani-hidden");
      const observer = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("ani-show");
              e.target.classList.remove("ani-hidden");
            } else {
              /* e.target.classList.remove("ani-show")
              e.target.classList.add("ani-hidden") */
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
      const handleScroll = () => {
        if (pathname === "/") {
          // Only apply scroll effect on the home page
          setNavbar(window.scrollY > 50);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    [pathname]
  );

  // Navbar background style based on route and scroll position
  const navbarBackgroundClass =
    pathname === "/"
      ? navbar
        ? "bg-gradient-to-b from-[#2F364B] to-[#262B3D] shadow-md w-full"
        : "bg-transparent"
      : "bg-gradient-to-b from-[#2F364B] to-[#262B3D] shadow-md w-full";

  return (
    <div
      className={mergeText(
        `flex justify-center items-center w-full ${navbarBackgroundClass}`,
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
            <Image
              src={logo}
              className={mergeText(style.navimage, style.navlogo)}
              alt="logo unavaliable"
            />
            <span className={style.navtitletext}>SOLARITÉ</span>
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
            <a href="/" className={style.navlink}>
              Home
            </a>
            <a href="/pricingplans" className={style.navlink}>
              Pricing/Plans
            </a>
            <a href="/about" className={style.navlink}>
              About us
            </a>
            <a href="" className={style.navlink}>
              Blog
            </a>
            <a href="" className={style.navlink}>
              Become an Affiliate
            </a>
          </div>
          <div className={style.navitem}>
            <div className={mergeText("", style.navauth)}>
              <span className={mergeText(style.navatextlogin, style.navatext)}>
                LOGIN
              </span>
            </div>
            <div className={mergeText("", style.navauth, style.navauth1)}>
              <span className={style.navatext}>SIGN UP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
