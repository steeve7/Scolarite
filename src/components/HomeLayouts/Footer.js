"use client";
import React, { useEffect, useState } from "react";
import Logo from "../HomeLayouts/Assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {

   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
     setIsClient(true);
   }, []);

   if (!isClient) return null;

  return (
   <div>
    
   </div>
  );
}
