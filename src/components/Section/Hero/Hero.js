import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative flex flex-col xl:flex-row w-full -mt-20">
      {/* Background Image for Desktop */}
      <div
        className="absolute inset-0 z-0 hidden md:block xl:bg-contain bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/image/hero.svg')",
          height: "100%",
          width: "100%",
        }}
      ></div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 block md:hidden bg-cover bg-center bg-no-repeat">
        <img
          src="/image/mobile.png"
          alt="mobile-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures it scales within viewport boundaries
          }}
        />
      </div>

      {/* Content Section */}
      <div className="relative xl:w-[50%] w-full flex flex-col md:gap-12 gap-10 justify-start lg:mt-60 md:mt-52 mt-40 px-5 md:px-20">
        <div className="flex flex-col justify-start xl:text-start text-center">
          <p className="font-roboto font-medium lg:text-[40px] md:text-[35px] text-[25px] text-white leading-tight">
            Scolarité: <br />
            <b className="text-hero_color font-bold font-roboto">
              Conquer JAMB
            </b>{" "}
            with Game Changing Strategies & Targeted Resources
          </p>
          <p className="font-roboto font-normal text-[12px] md:text-[20px] leading-[30px] text-custom-text-color mt-4 xl:w-[80%] w-full">
            As seasoned JAMB veterans, wne are here to empower you with
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
      <div className="relative xl:w-[50%] lg:w-[55%] w-full xl:mt-72 lg:mt-16 lg:m-auto md:mt-20 mt-10">
        <img
          src="/image/book.svg"
          alt="hero_page"
          className="slow-bounce animated-image w-[2500px]"
        />
      </div>
    </div>
  );
}
