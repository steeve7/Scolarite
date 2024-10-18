import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import Home from '../Hero/Assets/Image/hero1.png';
import Back from "../Hero/Assets/Image/hero.png";
import Mobile from "../Hero/Assets/Image/mobile.png";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative pt-20 md:mt-36 mt-28 flex flex-col md:flex-row justify-between bg-cover bg-center bg-no-repeat w-full md:h-[1000px] h-[150vh]">
      {/* Background Image for Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={Back}
          alt="Background image"
          fill // Replaces layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Define responsive sizes for different screen widths
          style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
          priority
        />
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src={Mobile}
          alt="mobile-image"
          fill // Replaces layout="fill"
          sizes="100vw" // Full width for mobile devices
          style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative md:w-1/2 w-full flex flex-col md:gap-12 gap-10 justify-start z-10 mt-20 px-10 md:px-20">
        <div className="flex flex-col justify-start lg:text-start text-center">
          <p className="font-roboto font-medium md:text-[55px] text-[35px] text-white leading-tight">
            Scolarité:
          </p>
          <p className="md:text-[50px] text-[32px] font-medium text-white font-roboto leading-tight">
            <b className="text-hero_color font-bold">Conquer JAMB</b> with Game
            Changing Strategies & Targeted Resources
          </p>
          <p className="font-roboto font-normal text-[18px] md:text-[20px] text-white mt-4">
            As seasoned JAMB veterans, we are here to empower you with
            professionally crafted learning strategies and proven approaches to
            help you achieve your dream JAMB score. Our comprehensive JAMB
            preparation platform provides a diverse range of resources uniquely
            tailored to meet your specific requirements. Join us and embark on
            your journey to a guaranteed success in JAMB.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row justify-start items-center gap-5 md:gap-10 mt-6 md:mt-0">
          <button
            type="button"
            className="text-white font_roboto uppercase md:w-[50%] w-full flex items-center justify-center gap-2 font-bold text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
          >
            Free trial
            <FaRegArrowAltCircleRight />
          </button>
          <button
            type="button"
            className="text-black font_roboto md:w-[50%] w-full uppercase flex items-center justify-center gap-2 font-bold text-[15px] py-[1.5rem] px-[1.5rem] bg-button-color rounded-[212.76px] border-0 outline-none"
          >
            View Pricing
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative md:absolute md:right-0 md:w-1/2 w-full mt-24 z-10">
        <Image
          src={Home}
          alt="hero_page"
          width={1566}
          height={1000} // Replaces layout="responsive"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" // Responsive sizing for different screen widths
        />
      </div>
    </div>
  );
}
