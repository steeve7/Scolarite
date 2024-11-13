"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaqCom } from "@/app/pricingplans/page";
import style from  "@/app/pricingplans/pricing.module.css"

export default function Faq() {
  const reads = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      desc: "Enrollment Process for Different Courses",
      icon: <IoIosArrowRoundForward />,
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer: "",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer: "",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer: "",
    },
  ];

  const [openSections, setOpenSections] = useState(
    Array(reads.length).fill(false)
  );
  const [height, setHeight] = useState(Array(reads.length).fill("0px"));
  const contentRefs = useRef([]);

  useEffect(() => {
    const updatedHeights = openSections.map((isOpen, index) =>
      isOpen ? `${contentRefs.current[index].scrollHeight}px` : "0px"
    );
    setHeight(updatedHeights);
  }, [openSections]);

  const toggleSection = (index) => {
    setOpenSections((prevSections) =>
      prevSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="mt-16 w-full px-4 md:px-10 lg:px-0 mb-20">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src={Fag} alt="faq_image" className="w-[40px] ani-hidden bottom-hide md:w-[60px]" />
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
        <button className="bg-black ani-hidden bottom-hide delay-0 text-white py-2 px-4 md:py-4 md:px-6 rounded-lg font-roboto font-bold text-[12px] md:text-[15px]">
          Technical Support
        </button>
        <button className="border-2 ani-hidden bottom-hide delay-100 border-black py-2 px-4 md:py-4 md:px-6 rounded-lg font-roboto font-bold text-[12px] md:text-[15px]">
          Billing Support
        </button>
        <button className="border-2 ani-hidden bottom-hide delay-200 border-black py-2 px-4 md:py-4 md:px-6 rounded-lg font-roboto font-bold text-[12px] md:text-[15px]">
          Academic & Course Support
        </button>
        <button className="border-2 ani-hidden bottom-hide delay-300 border-black py-2 px-4 md:py-4 md:px-6 rounded-lg font-roboto font-bold text-[12px] md:text-[15px]">
          Upgrade Related Support
        </button>
      </div>

      <div className={style.fcw}>
        <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Can I enroll in multiple courses at once?"/>

        <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="What kind of support can I expect from instructors?"/>
        <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Are the courses self-paced or do they have specific start and end dates?"/>
        <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Are there any prerequisites for the courses?"/>
        <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Can I download the course materials for offline access?"/>
    </div>

      
    </div>
  );
}
