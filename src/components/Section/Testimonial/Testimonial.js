"use client";
import React from "react";
import Slider from "react-slick";
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
        width: "30px",
        height: "30px",
        right: "-10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowRight className="text-white w-3 h-3 md:w-4 md:h-4 lg:w-2 lg:h-4" />
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
        width: "30px",
        height: "30px",
        left: "-10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-white w-3 h-3 md:w-4 md:h-4 lg:w-2 lg:h-10" />
    </div>
  );
}

export default function Testimonial() {
  const tests = [
    {
      desc: "“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”",
      name: "Ahmad Saugi",
      title: "Mahasiswa",
      image: "/image/test2.svg",
    },
    {
      desc: "“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami tailwindcss. Isinya cukup lengkap dan detail.”",
      name: "Dedik Sugiharto",
      title: "Front-end Engineer",
      image: "/image/test1.svg",
    },
    {
      desc: "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
      name: "Lutfi Hanafiah Ramadhan",
      title: "IT Support",
      image: "/image/test3.svg",
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
        breakpoint: 1083,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 rounded-2xl bg-bg-blue w-[80%] mt-20 m-auto md:overflow-visible overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex md:justify-start justify-center items-center gap-2">
          <div className="w-[5%] border-black h-[16%] border" />
          <h2 className="font-bold font-roboto lg:text-[20px] text-[15px] text-analytic-color uppercase">
            Testimonial
          </h2>
        </div>
        <p className="font-medium font-roboto md:text-start text-center lg:text-[30px] text-[20px] text-anal-color md:w-[90%] w-full">
          Hear from Our Achievers: Real Success Stories
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="mt-16 xl:w-[110%] w-[90%] lg:px-0 px-4 -mx-6">
        <Slider {...settings}>
          {tests.map((test, i) => (
            <div
              key={i}
              className="bg-white p-6 md:h-[250px] py-[50px] rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <p className="font-roboto font-normal lg:text-[15px] text-[14px] leading-relaxed">
                {test.desc}
              </p>
              <div className="flex items-center gap-3 mt-5">
                <img
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
    </div>
  );
}
