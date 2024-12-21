'use client'
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Analytic() {

  const items = [
    {
      image: "/image/analytic1.svg",
      ttile: "Performance Overview",
      desc: "Visualise your scores and study patterns in one glance for smarter, and targeted learning strategy.",
      duration: 1.2, // Custom duration for the first item
    },
    {
      image: "/image/analytic2.svg",
      ttile: "Study Habits Analysis",
      desc: "Analyze and optimize your study habits to boost learning efficiency.",
      duration: 1.4, // Custom duration for the second item
    },
    {
      image: "/image/analytic.svg",
      ttile: "Goal Setting & Tracking",
      desc: "Set and track your goals to stay motivated and measure your performance.",
      duration: 1.6, // Custom duration for the third item
    },
  ];

  return (
    <div className="w-full py-20">
      {/* Analytic dashboard section */}
      <div className="container mx-auto flex md:flex-row flex-col md:justify-between justify-center items-center px-10">
        {/* Laptop image */}
        <div className="md:w-1/2 w-full md:order-1 order-2 md:mt-0 mt-10">
          <img
            src="/image/laptop.svg"
            alt="laptop-image"
            className="md:w-[570px] w-[600px]"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 w-full md:order-2 order-1">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex md:justify-start justify-center items-center gap-2">
              <div className="w-[5%] border-black h-[16%] border" />
              <h2 className="font-bold font-roboto lg:text-[20px] text-[15px] text-analytic-color">
                Analytics Dashboard
              </h2>
            </div>

            <p className="font-medium font-roboto md:text-start text-center lg:text-[30px] text-[20px] text-anal-color md:w-[90%] w-full">
              Visualise Your Progress with our Analytics Dashboard
            </p>
            <p className="font-roboto font-normal lg:text-[15px] text-[10px] md:text-start text-center text-anal-color md:w-[80%] w-full">
              Gain insight into your academic potential with Scolarite's
              Analytics Dashboard. We have developed Scolarite’s user interface
              to track your progress, identify your strengths, and discover
              areas for improvement.
            </p>
          </div>
          {/* Animated Analytic Cards */}
          <div className="flex flex-col gap-4 md:w-[80%] w-full mt-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 shadow-lg py-7 px-5 bg-white rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 60,
                  duration: item.duration, // Apply the custom duration
                }}
              >
                <img
                  src={item.image}
                  alt="analytic-image"
                  className="lg:w-[30px] w-[20px]"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="font-roboto font-medium lg:text-[20px] text-[15px] text-analytic-color">
                    {item.ttile}
                  </h2>
                  <p className="font-roboto font-normal lg:text-[15px] text-[10px] text-anal-color">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
