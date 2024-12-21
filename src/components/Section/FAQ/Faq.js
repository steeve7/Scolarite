"use client";
import React, { useState } from "react";
import { FaqCom } from "@/app/pricingplans/page";
import style from "@/app/pricingplans/pricing.module.css";

export default function Faq() {
  // State to track the active buttons
  const [activeButton, setActiveButton] = useState("Technical Support");

  // List of faq buttons
  const supportButtons = [
    "Technical Support",
    "Billing Support",
    "Academic & Course Support",
    "Upgrade Related Support",
  ];

  // Shared content for all buttons
  const sharedContent = (
    <div className={style.fcw}>
      <FaqCom
        text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        title="Can I enroll in multiple courses at once?"
      />
      <FaqCom
        text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        title="What kind of support can I expect from instructors?"
      />
      <FaqCom
        text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        title="Are the courses self-paced or do they have specific start and end dates?"
      />
      <FaqCom
        text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        title="Are there any prerequisites for the courses?"
      />
      <FaqCom
        text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        title="Can I download the course materials for offline access?"
      />
    </div>
  );

  return (
    <div className="mt-16 w-full px-4 md:px-10 lg:px-0 mb-20">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4">
      {/* faq image */}
        <img
          src="/image/faq.svg"
          alt="faq_image"
          className="w-[40px] ani-hidden bottom-hide md:w-[60px]"
        />
        <h2 className="font-roboto font-semibold text-[20px] md:text-[24px] lg:text-[30px] text-center">
          Frequently Asked Questions
        </h2>
        <p className="font-roboto text-[14px] md:text-[18px] lg:text-[20px] text-center">
          If you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
      </div>

      {/* Support Buttons */}
      <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
        {supportButtons.map((buttonName, index) => (
          <button
            key={index}
            onClick={() => setActiveButton(buttonName)} // Set active button
            className={`py-2 px-4 md:py-4 md:px-6 rounded-lg font-roboto font-bold text-[12px] md:text-[15px] ${
              activeButton === buttonName
                ? "bg-custom-blue text-white"
                : "border-2 border-black"
            }`}
          >
            {buttonName}
          </button>
        ))}
      </div>

      {/* Shared Content */}
      {sharedContent}
    </div>
  );
}
