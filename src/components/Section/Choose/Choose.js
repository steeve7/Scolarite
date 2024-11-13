"use client";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Choose() {
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      {/*section Template */}
      <div className="relative w-full bg-gradient-to-b from-[#282E41] to-[#3E4A6F] py-20 flex flex-col justify-center items-center">
        <div className="text-center text-white">
          <h2 className="font-roboto font-medium lg:text-[30px] text-[20px]">
            WHY CHOOSE SCOLARITÉ?
          </h2>
          <div className="border-b-2 border-custom-border-color xl:w-[700px] w-[100%] lg:w-[800px] md:max-w-[1200px] mx-auto my-4" />
        </div>
        <div className="relative w-full flex md:flex-row flex-col items-center justify-center min-h-[500px] md:px-0 px-10">
          <motion.div
            className="md:w-[40%] w-full flex flex-col justify-start items-start text-start gap-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
          >
            {/*titles section */}
            <h2 className="font-medium lg:text-[25px] text-[18px] font-roboto text-white">
              EXPERTISE AND EXCELLENCE
            </h2>
            {/*lines section */}
            <div className="border-b-2 border-custom-border-color w-full max-w-[85%] md:max-w-[80%] xl:max-w-[62%] h-[2px] -mt-2" />
            <p className="font-roboto font-normal lg:text-[20px] text-[15px] text-white">
              At Scolarité, we are a team of first-class graduates and JAMB
              experts. Therefore, we have what it takes to impart academic
              excellence.
            </p>
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold xl:text-[15px] text-[10px] py-[1.5rem] px-[2rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </motion.div>
          <motion.div
            className="md:order-1 order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
          >
            <img
              src="/image/student.svg"
              alt="student_image"
              className="xl:w-[500px] w-[300px]"
            />
          </motion.div>
        </div>
      </div>
      {/* Section Template */}
      {[
        {
          title: "UNLOCKING STUDENT POTENTIAL",
          description:
            "Our approach is designed to guide students to study effectively. This will not only be useful for JAMB preparation but also for higher educational endeavors.",
          image: "/image/student.png",
          order: "order-2",
          lines:
            "max-w-[80%] md:max-w-[75%] xl:max-w-[85%] lg:max-w-[80%] sm:max-w-[72%]",
          bgColor: "bg-white",
          color: "text-black",
        },
        {
          title: "CULTIVATING ACADEMIC FOUNDATIONS",
          description:
            "The platform enables students to reinforce their strengths, address their weaknesses, and build a robust foundation for academic and future careers.",
          image: "/image/choose.svg",
          order: "order-1",
          color: "text-white",
          lines:
            "max-w-[90%] md:max-w-[88%] xl:max-w-[85%] lg:max-w-[90%] sm:max-w-[80%]",
          bgColor: "bg-gradient-to-b from-[#282E41] to-[#3E4A6F]",
        },
        {
          title: "PERSONALIZED EXAM PREPARATION",
          description:
            "We are dedicated to guiding you through your exam preparations with a personalized learning experience. You will be exposed to proven strategies that will help you study effectively for exams, even beyond JAMB.",
          image: "/image/student1.svg",
          order: "order-2",
          bgColor: "bg-white",
          lines:
            "max-w-[85%] md:max-w-[80%] xl:max-w-[78%] lg:max-w-[86%] sm:max-w-[75%]",
          color: "text-black",
        },
        {
          title: "ALL FACULTIES ARE COVERED",
          description:
            "Use our platform to advance your career in various specializations such as Arts, Education, Law, Management Sciences, Medical sciences, Physical/Environmental Sciences, Engineering and Social Sciences, among others.",
          image: "image/student3.svg",
          order: "order-2",
          color: "text-white",
          lines:
            "max-w-[68%] md:max-w-[65%] xl:max-w-[63%] lg:max-w-[70%] sm:w-[60%]",
          bgColor: "bg-gradient-to-b from-[#282E41] to-[#3E4A6F]",
        },
      ].map(
        ({ title, description, image, order, bgColor, color, lines }, idx) => (
          <div
            key={idx}
            className={`relative w-full flex md:flex-row flex-col items-center justify-center py-56 md:px-0 px-10 ${bgColor} ${
              idx === 0 ? "min-h-[700px]" : ""
            }`}
          >
            <motion.div
              className={`md:w-[40%] w-full ${order} flex flex-col justify-start items-start text-start gap-6`}
              initial={{ x: order === "order-1" ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2 + idx * 0.1,
                type: "spring",
                stiffness: 60,
                duration: 1,
              }}
            >
              {/*titles */}
              <h2
                className={`${color} font-medium xl:text-[25px] lg:text-[20px] text-[15px] md:text-[15px] font-roboto`}
              >
                {title}
              </h2>
              {/*lines */}
              <div
                className={`border-b-2 border-custom-border-color w-full ${lines} h-[2px] -mt-2`}
              />
              <p
                className={`${color} font-roboto font-normal lg:text-[20px] text-[15px]`}
              >
                {description}
              </p>
              <button
                type="button"
                className="text-white font_roboto uppercase flex items-center gap-2 font-bold xl:text-[15px] text-[10px] py-[1.5rem] px-[2rem] bg-black rounded-[212.76px] border-0 outline-none"
              >
                Register
                <FaRegArrowAltCircleRight />
              </button>
            </motion.div>
            <motion.div
              className="md:order-1 order-2"
              initial={{ x: order === "order-2" ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3 + idx * 0.1,
                type: "spring",
                stiffness: 60,
                duration: 1,
              }}
            >
              <img
                src={image}
                alt="student_image"
                className="xl:w-[500px] w-[300px]"
              />
            </motion.div>
          </div>
        )
      )}
    </div>
  );
}
