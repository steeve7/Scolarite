import React from 'react'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import choose from '../Choose/Assets/Image/choose.png'
import student from '../Choose/Assets/Image/student.png'
import student1 from '../Choose/Assets/Image/student1.png'
import student2 from '../Choose/Assets/Image/student2.png'
import student3 from '../Choose/Assets/Image/student3.png'
import Image from 'next/image'

export default function Choose() {
  return (
    <div className="w-full py-[60px] flex flex-col justify-center items-center">
      <div className="bg-gradient-to-b from-[#282E41] to-[#3E4A6F] py-10 md:px-20 px-7">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-roboto font-medium lg:text-[30px] text-[20px] text-white">
            WHY CHOOSE SCOLARITÉ ?
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[50%] w-[70%] h-[15%]" />
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0 mt-36">
          <div className="flex flex-col justify-start items-start text-left md:w-[50%] w-full gap-6 md:px-0 px-10">
            <h2 className="font-medium lg:text-[30px] text-[18px] font-roboto text-white">
              EXPERTISE AND EXCELLENCE
            </h2>
            <div className="border-b-2 border-custom-border-color md:w-[60%] w-[50%] h-[15%] -mt-3" />
            <p className="font-roboto font-normal lg:text-[20px] text-[15px] text-white">
              At Scolarité, we are a team of first class graduates and JAMB
              experts. Therefore, we have what it takes to impart academic
              excellence.
            </p>
            {/*button section*/}
            <div className="md:w-[50%] w-full">
              <button
                type="button"
                className="text-white font_roboto uppercase flex items-center gap-2 font-bold lg:text-[15px] text-[10px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
              >
                Register
                <FaRegArrowAltCircleRight />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              src={choose}
              alt="student_image"
              className="md:w-[800px] w-[700px]"
              
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0 md:py-7 py-10 md:px-10 px-20">
        <div className="flex flex-col justify-start items-start text-left md:w-[50%] w-full md:order-2 order-1 gap-6">
          <h2 className="font-medium lg:text-[30px] text-[18px] font-roboto text-black">
            UNLOCKING STUDENT POTENTIAL
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[70%] w-[50%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[20px] text-[14px] font-normal text-[rgba(0, 0, 0, 1)]">
            Our approach is designed to guide students to study effectively.
            This will not only be useful for JAMB preparation but also for
            higher educational endeavours.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] lg:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="md:order-1 order-2 md:w-1/2 w-full">
          <Image
            src={student}
            alt="student_image"
            className="md:w-[800px] w-[700px]"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0 px-20 bg-gradient-to-b from-[#282E41] to-[#3E4A6F] py-20">
        <div className="flex flex-col justify-start items-start text-left md:w-1/2 w-full gap-6">
          <h2 className="font-medium lg:text-[30px] text-[18px] font-roboto text-white">
            CULTIVATING ACADEMIC FOUNDATIONS
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[80%] w-[60%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[20px] text-[14px] font-normal text-white">
            The platform enables students to reinforce their strengths, address
            their weaknesses, and build a robust foundation for academic and
            future careers.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] lg:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            src={student2}
            alt="student_image"
            className="md:w-[800px] w-[600px]"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0 py-10 md:px-10 px-20">
        <div className="flex flex-col justify-start items-start text-left md:w-[50%] w-full md:order-2 order-1 gap-6">
          <h2 className="font-medium lg:text-[30px] text-[18px] font-roboto text-black">
            PERSONALIZED EXAM PREPARATION
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[75%] w-[55%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[20px] text-[14px] font-normal text-black">
            We are dedicated to guiding you through your exam preparations with
            personalized learning experience. You will be exposed to proven
            strategies that will help you study effectively for exams, even
            beyond JAMB.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] lg:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="md:order-1 order-2 md:w-1/2 w-full">
          <Image src={student1} alt="student_image" className="w-[600px]" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0 px-20 bg-gradient-to-b from-[#282E41] to-[#3E4A6F] py-20">
        <div className="flex flex-col justify-start items-start text-left md:w-[50%] w-full md:order-2 order-1 gap-5">
          <h2 className="font-medium lg:text-[30px] text-[20px] font-roboto text-white">
            ALL FACULTIES ARE COVERED
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[60%] w-[47%] h-[15%] -mt-3" />
          <p className="w-full font-roboto lg:text-[18px] text-[14px] font-normal text-white">
            Use our platform to advance your career in various specializations
            such as Arts, Education, Law, Management Sciences, Medical sciences,
            Physical/Environmental Sciences, Engineering and Social Sciences,
            among others.Use our platform to advance your career in various
            specializations such as Arts, Education, Law, Management Sciences,
            Medical sciences, Physical/Environmental Sciences, Engineering and
            Social Sciences, among others.
          </p>
          <div className="md:w-[50%] w-full">
            <button
              type="button"
              className="text-white font_roboto uppercase flex items-center gap-2 font-bold text-[10px] lg:text-[15px] py-[1.5rem] px-[1.5rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="md:order-1 order-2 md:w-1/2 w-full">
          <Image
            src={student3}
            alt="student_image"
            className="w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
