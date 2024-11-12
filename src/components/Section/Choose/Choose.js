'use client'
import React from 'react'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import choose from '../Choose/Assets/Image/choose.png'
import student from '../Choose/Assets/Image/student.png'
import student1 from '../Choose/Assets/Image/student1.png'
import student2 from '../Choose/Assets/Image/student2.png'
import student3 from '../Choose/Assets/Image/student3.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function Choose() {
  return (
    <div className="w-full py-[60px] flex flex-col justify-center items-center overflow-hidden">
      <div className="bg-gradient-to-b from-[#282E41] to-[#3E4A6F] py-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-roboto font-medium lg:text-[30px] text-[20px] text-white">
            WHY CHOOSE SCOLARITÉ ?
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[50%] w-[70%] h-[15%]" />
        </div>
        {/*first section*/}
        <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0 mt-24 px-10">
          <motion.div
            className="flex flex-col ani-hidden  left-hide justify-start items-start text-start md:w-[40%] w-full gap-6"
            
          >
            <h2 className="font-medium xl:text-[30px] lg:text-[25px] md:text-[18px] text-[13px] font-roboto text-white">
              EXPERTISE AND EXCELLENCE
            </h2>
            <div className="border-b-2 border-custom-border-color xl:w-[80%] lg:w-[90%] md:w-[85%] w-[75%] h-[15%] -mt-3" />
            <p className="font-roboto font-normal lg:text-[20px] text-[15px] text-white">
              At Scolarité, we are a team of first class graduates and JAMB
              experts. Therefore, we have what it takes to impart academic
              excellence.
            </p>
            {/*button section*/}
            <div className="md:w-[50%] w-full">
              <button
                type="button"
                className="text-white font_roboto uppercase flex items-center gap-2 font-bold xl:text-[15px] text-[10px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
              >
                Register
                <FaRegArrowAltCircleRight />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="md:-mt-20 ani-hidden  right-hide"
            
          >
            <Image
              src={choose}
              alt="student_image"
              className="xl:w-[500px] w-[300px]"
            />
          </motion.div>
        </div>
      </div>
      {/*second section*/}
      <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0 md:py-7 py-10 md:px-0 px-10">
        <motion.div
          className="flex flex-col justify-start ani-hidden  right-hide items-start text-left md:w-[40%] w-full md:order-2 order-1 gap-6"
          
        >
          <h2 className="font-medium xl:text-[30px] lg:text-[25px] text-[18px] font-roboto text-black">
            UNLOCKING STUDENT POTENTIAL
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[85%] lg:w-[95%] xl:w-[85%] w-[95%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[20px] text-[14px] font-normal text-[rgba(0, 0, 0, 1)]">
            Our approach is designed to guide students to study effectively.
            This will not only be useful for JAMB preparation but also for
            higher educational endeavours.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </motion.div>
        <motion.div
          className="md:order-1 order-2 ani-hidden  left-hide"
          
        >
          <Image
            src={student}
            alt="student_image"
            className="xl:w-[500px] w-[300px]"
          />
        </motion.div>
      </div>
      {/*third section*/}
      <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0 px-10 bg-gradient-to-b from-[#282E41] to-[#3E4A6F] py-20">
        <motion.div
          style={{
            paddingBlock:"10%"
          }}
          className="flex flex-col justify-start ani-hidden   left-hide items-start text-left md:w-[40%] w-full gap-6"
          
        >
          <h2 className="font-medium xl:text-[25px] lg:text-[20px] md:text-[15px] text-[15px] font-roboto text-white">
            CULTIVATING ACADEMIC FOUNDATIONS
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[90%] xl:w-[92%] lg:w-[98%] w-[92%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[20px] text-[14px] font-normal text-white">
            The platform enables students to reinforce their strengths, address
            their weaknesses, and build a robust foundation for academic and
            future careers.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </motion.div>
        <motion.div
          className="ani-hidden  right-hide"
          
        >
          <Image
            src={student2}
            alt="student_image"
            className="xl:w-[500px] w-[300px]"
          />
        </motion.div>
      </div>
      {/*fourth section*/}
      <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0 py-10 md:px-0 px-10">
        <motion.div
          className="flex flex-col ani-hidden  right-hide justify-start items-start text-left md:w-[40%] w-full md:order-2 order-1 gap-6"
          
        >
          <h2 className="font-medium xl:text-[30px] lg:text-[22px] md:text-[18px] text-[15px] font-roboto text-black">
            PERSONALIZED EXAM PREPARATION
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[95%] w-[85%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[20px] text-[14px] font-normal text-black">
            We are dedicated to guiding you through your exam preparations with
            personalized learning experience. You will be exposed to proven
            strategies that will help you study effectively for exams, even
            beyond JAMB.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </motion.div>
        <motion.div
          className="md:order-1 order-2 ani-hidden  left-hide"
          
        >
          <Image
            src={student1}
            alt="student_image"
            className="xl:w-[500px] w-[300px]"
          />
        </motion.div>
      </div>
      {/*fifth section*/}
      <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0 px-10 bg-gradient-to-b from-[#282E41] to-[#3E4A6F] py-20">
        <motion.div
          className="flex flex-col justify-start items-start ani-hidden  right-hide text-left md:w-[40%] w-full md:order-2 order-1 gap-5"
          
        >
          <h2 className="font-medium xl:text-[30px] lg:text-[22px] text-[20px] font-roboto text-white">
            ALL FACULTIES ARE COVERED
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[85%] w-[90%] xl:w-[80%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[18px] text-[14px] font-normal text-white">
            Use our platform to advance your career in various specializations
            such as Arts, Education, Law, Management Sciences, Medical sciences,
            Physical/Environmental Sciences, Engineering and Social Sciences,
            among others.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </motion.div>
        <motion.div
          className="md:order-1 order-2 ani-hidden  left-hide"
          
        >
          <Image
            src={student3}
            alt="student_image"
            className="xl:w-[500px] w-[300px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
