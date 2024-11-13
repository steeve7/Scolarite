import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Mobile from "../Hero/Assets/Image/mobile.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col -mt-40 xl:flex-row justify-between bg-cover bg-center bg-no-repeat w-full min-h-screen xl:h-[1200px] lg:h-[1500px] h-auto">
      {/* Background Image for Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/image/hero.png"
          alt="Background image"
          fill // Replaces layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Define responsive sizes for different screen widths
          style={{ objectFit: "cover" }} // Replaces objectFit="cover"
          priority
        />
      </div>
      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src={Mobile}
          alt="mobile-image"
          fill
          sizes="400px" // Assuming image is about 400px wide on mobile
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="relative xl:w-1/2 w-full flex flex-col md:gap-12 gap-10 justify-start lg:mt-60 md:mt-52 mt-40 px-10 md:px-20" 
      style={{paddingTop:"calc(15px + 20px)"}}>
        <div className="flex flex-col justify-start xl:text-start text-center">
          <p className="font-roboto font-medium lg:text-[55px] text-[35px] text-white leading-tight">
            Scolarité:
          </p>
          <p className="md:text-[50px] text-[32px] font-medium text-white font-roboto leading-tight">
            <b className="text-hero_color font-bold">Conquer JAMB</b> with Game
            Changing Strategies & Targeted Resources
          </p>
          <p className="font-roboto font-normal text-[18px] md:text-[20px] text-hero-color mt-4">
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
            className="text-white font_roboto uppercase lg:w-[50%] w-full flex items-center justify-center gap-2 font-bold lg:text-[15px] md:text-[13px] text-[9px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
          >
            Free trial
            <FaRegArrowAltCircleRight />
          </button>
          <button
            type="button"
            className="text-black font_roboto uppercase lg:w-[50%] w-full flex items-center justify-center gap-2 font-bold lg:text-[15px] md:text-[13px] text-[9px] py-[1.5rem] px-[1.5rem] bg-button-color rounded-[212.76px] border-0 outline-none"
          >
            View Pricing
            <FaRegArrowAltCircleRight />
          </button>
        </div>
        <div className="flex flex-row items-center gap-2 xl:justify-start justify-center">
          <div className="w-[6%] border-hero-color h-[2px] border" />
          <p className="font-roboto font-bold lg:text-[15px] md:text-[18px] text-[10px] text-hero-color xl:text-start text-center">
            🌟 ONGOING SALE ENDS SOON, GET REGIISTERED NOW
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative xl:w-1/2 lg:w-[55%] w-full xl:mt-60 lg:mt-16 lg:m-auto md:mt-20 mt-10">
        <img
          src="/image/hero1.gif"
          alt="hero_page"
          width={1566}
          height={1000}
          quality={75}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          style={{ objectFit: "contain" ,translate:"0px -20%"}}
          className="slow-bounce"
        />
      </div>
    </div>
  );
}