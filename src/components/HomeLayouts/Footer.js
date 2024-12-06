"use client";
import React, { useEffect, useState } from "react";
import Logo from "../HomeLayouts/Assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { isPageExempt } from "../addons/addons";

export default function Footer() {

  const [isClient, setIsClient] = useState(false);
  var exempt = isPageExempt()
   useEffect(() => {
     setIsClient(true);
    
   }, []);

  //  if (!isClient) return null;

  return (
    <>
      {!exempt && (
        <>
          <div
            id="FOOTER_SECTION"
            className="flex md:flex-row flex-col items-center justify-between gap-6 mt-[7rem] bg-custom-dark w-full lg:px-20 md:px-10 px-5 md:py-16 rounded-tr-[2rem]"
          >
            {/*web & mobile view*/}
            <div className="flex justify-between items-center w-full md:-mt-20 pt-8 md:w-[50%]">
              {/* Content Section */}
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="footer_logo"
                  className="md:w-[63px] w-[35px]"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="font-[Century] lg:text-[22px] text-[15px] font-normal text-custom-white">
                    SCOLARITÉ
                  </h2>
                  <p className="md:flex hidden font-roboto font-normal lg:text-[20px] text-[10px] text-custom-text-color">
                    Study smart, achieve your dreams
                  </p>
                </div>
              </div>
              {/* Top Section */}
              <div className="md:hidden flex items-center gap-2 text-white font-roboto font-semibold text-[15px]">
                Get To Top
                <MdOutlineArrowCircleUp color="white" size={20} />
              </div>
            </div>
            <div className="md:hidden flex flex-row justify-start items-center gap-4 md:px-8 px-4 w-full">
              <Link
                href=""
                className="font-roboto font-medium text-[15px] text-white"
              >
                Home
              </Link>
              <Link
                href=""
                className="font-roboto font-medium text-[15px] text-white"
              >
                About
              </Link>
              <Link
                href=""
                className="font-roboto font-medium text-[15px] text-white"
              >
                Pricing
              </Link>
              <Link
                href=""
                className="font-roboto font-medium text-[15px] text-white"
              >
                Blog
              </Link>
              <Link
                href=""
                className="font-roboto font-medium text-[15px] text-white"
              >
                Become Afflliate
              </Link>
            </div>
            {/*Mobile view */}
            <div className="border-[1.54px] rounded-lg border-custom-border md:hidden flex flex-col gap-4 px-5 py-10 w-full justify-center">
              <div className="flex items-center justify-center gap-2 border-[1.54px] border-custom-border-color px-5 py-5">
                <HiOutlineMail color="white" size={20} />
                <p className="font-medium font-roboto text-[15px] text-white">
                  hello@squareup.com
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 border-[1.54px] border-custom-border-color px-5 py-5">
                <BsTelephone color="white" size={20} />
                <p className="font-medium font-roboto text-[15px] text-white">
                  +9191813232309
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 border-[1.54px] border-custom-border-color px-5 py-5">
                <CiLocationOn color="white" size={20} />
                <p className="font-medium font-roboto text-[15px] text-white">
                  Somewhere in the World
                </p>
              </div>
              <p className="font-medium font-roboto text-[15px] text-white flex justify-center mt-5">
                @2024 SCOLARITE All rights reserved.
              </p>
            </div>
            {/*web view*/}
            <div className="md:flex justify-center lg:gap-20 gap-10 hidden w-1/2">
              <div className="space-y-2">
                <h2 className="font-roboto font-bold text-text-color lg:text-[20px] text-[15px] uppercase">
                  Products
                </h2>
                <ul className="flex flex-col gap-2">
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Courses
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Books
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Freebies
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Classes
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="font-roboto font-bold text-text-color lg:text-[20px] text-[15px] uppercase">
                  Company
                </h2>
                <ul className="flex flex-col gap-2">
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      About Us
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Contact
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Privacy Policy
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Terms of Service
                    </li>
                  </Link>
                  <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                    Help
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="font-roboto font-bold text-text-color lg:text-[20px] text-[15px] uppercase">
                  Get in Touch
                </h2>
                <ul className="flex flex-col gap-2">
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Twitter
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Facebook
                    </li>
                  </Link>
                  <Link href="">
                    <li className="font-roboto font-normal text-text-color lg:text-[17px] text-[12px]">
                      Instagram
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="md:flex hidden items-center gap-2 text-white font-roboto font-semibold text-[15px]">
              Top
              <MdOutlineArrowCircleUp color="white" size={20}  className="cursor-pointer"/>
            </div>
          </div>
        </>
      )}
    </>
  );
}
