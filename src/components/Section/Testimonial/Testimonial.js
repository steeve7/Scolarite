"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import test from "../Testimonial/Assets/Image/tests.png";
import test1 from "../Testimonial/Assets/Image/test1.png";
import test2 from "../Testimonial/Assets/Image/test2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Custom Next Arrow Component
function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        borderRadius: "50px",
        width: "40px", // Default size
        height: "40px", // Default size
        right: "-20px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowRight className="text-white w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
    </div>
  );
}

// Custom Previous Arrow Component
function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        borderRadius: "50px",
        width: "40px", // Default size
        height: "40px", // Default size
        left: "-20px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-white w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
    </div>
  );
}

export default function Testimonial() {
  const tests = [
    {
      desc: "“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”",
      name: "Ahmad Saugi",
      title: "Mahasiswa",
      image: test,
    },
    {
      desc: "“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami tailwindcss. Isinya cukup lengkap dan detail.”",
      name: "Dedik Sugiharto",
      title: "Front-end Engineer",
      image: test1,
    },
    {
      desc: "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
      name: "Lutfi Hanafiah Ramadhan",
      title: "IT Support",
      image: test2,
    },
    {
      desc: "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
      name: "Lutfi Hanafiah Ramadhan",
      title: "IT Support",
      image: test2,
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1083, // For devices with a width of 1083px or less
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For devices with a width of 768px or less
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 bg-bg-blue rounded-2xl mt-10 lg:w-[80%] w-full m-auto md:overflow-visible overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col lg:justify-start lg:items-start md:px-0 px-6 justify-center items-center">
        <div className="w-[10%] border-black h-[2px] border mb-4" />
        <h2 className="font-roboto font-bold lg:text-[20px] text-[16px] ani-hidden right-hide text-dark-blue">
          Testimonial
        </h2>
        <p className="font-roboto font-medium lg:text-[30px] text-[22px] text-custom-blue lg:w-[70%] w-full md:text-start text-center mt-4">
          Hear from Our Achievers: Real Success Stories
        </p>
      </div>

      {/* Testimonial Slider */}
      <Slider {...settings} className="mt-16 xl:w-full w-[80%] lg:px-0 px-4">
        {tests.map((test, i) => (
          <div
            key={i}
            className="bg-white p-6 h-[250px] rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <p className="font-roboto font-normal lg:text-[15px] text-[14px] leading-relaxed">
              {test.desc}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Image
                src={test.image}
                alt="testimonial_image"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-roboto font-medium lg:text-[17px] text-[15px]">
                  {test.name}
                </h2>
                <p className="font-roboto font-medium text-[14px] lg:text-[16px]">
                  {test.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
