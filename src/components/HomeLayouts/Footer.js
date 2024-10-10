import React from 'react'
import Logo from "../HomeLayouts/Assets/images/logo.png";
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineArrowCircleUp } from "react-icons/md";
import {HiOutlineMail} from 'react-icons/hi'
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center gap-6 mt-60 bg-custom-dark w-full md:px-20 md:py-16">
      <div className="flex justify-between items-center w-full pt-8 px-8">
        {/* Content Section */}
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="footer_logo"
            className="md:w-[63px] w-[35px]"
          />
          <div className="flex flex-col gap-2">
            <h2 className="font-roboto md:text-[30px] text-[15px] font-bold text-custom-white">
              Scolarite
            </h2>
            <p className="md:flex hidden font-roboto font-normal text-[20px] text-custom-text-color">
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

      <div className="md:hidden flex flex-row justify-start items-center gap-4 px-8 w-full">
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

      <div className="border-2 rounded-lg border-custom-border md:hidden flex flex-col gap-4 px-10 py-10">
        <div className="flex items-center gap-2 border-[1.54px] border-custom-border-color px-5 py-5">
          <HiOutlineMail color="white" size={20} />
          <p className="font-medium font-roboto text-[15px] text-white">
            hello@squareup.com
          </p>
        </div>
        <div className="flex items-center gap-2 border-[1.54px] border-custom-border-color px-5 py-5">
          <BsTelephone color="white" size={20} />
          <p className="font-medium font-roboto text-[15px] text-white">
            +9191813232309
          </p>
        </div>
        <div className="flex items-center gap-2 border-[1.54px] border-custom-border-color px-5 py-5">
          <CiLocationOn color="white" size={20} />
          <p className="font-medium font-roboto text-[15px] text-white">
            Somewhere in the World
          </p>
        </div>
        <p className="font-medium font-roboto text-[15px] text-white">
          @2024 SCOLARITE All rights reserved.
        </p>
      </div>

      <div className="md:flex justify-center items-center gap-20 hidden">
        <div className="space-y-2">
          <h2 className="font-roboto font-bold text-text-color text-[20px] uppercase">
            Products
          </h2>
          <ul>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Courses
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Books
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Freebies
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Classes
              </li>
            </Link>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="font-roboto font-bold text-text-color text-[20px] uppercase">
            Company
          </h2>
          <ul>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                About Us
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Contact
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Privacy Policy
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Terms of Service
              </li>
            </Link>
            <li className="font-roboto font-normal text-text-color text-[17px]">
              Help
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="font-roboto font-bold text-text-color text-[20px] uppercase">
            Get in Touch
          </h2>
          <ul>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Twitter
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Facebook
              </li>
            </Link>
            <Link href="">
              <li className="font-roboto font-normal text-text-color text-[17px]">
                Instagram
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
