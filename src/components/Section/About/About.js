import React from 'react'
import {BsPlayCircle } from 'react-icons/bs'
import {MdArrowOutward } from 'react-icons/md'


const items = [
  {
    icons: "/image/Icon1.svg",
    icons2: <MdArrowOutward />,
    title: "Over 10,000+JAMB Solutions",
    desc: "Enhance your abilities with a vast array of authentic JAMB questions covering all question types.",
  },
  {
    icons: "/image/Icon2.svg",
    icons2: <MdArrowOutward />,
    title: "Expert Instruction",
    desc: "Learn from industry experts with hands-on experience in curriculum design and development.",
  },
  {
    icons: "/image/Icon4.svg",
    icons2: <MdArrowOutward />,
    title: "All in one platform",
    desc: "Every study material  for JAMB examination is on our platform.",
  },
  {
    icons: "/image/Icon6.svg",
    icons2: <MdArrowOutward />,
    title: "Scolarité Analytics",
    desc: "Pinpoint your weak areas using powerful analytics and error tracking, and then transform them to strength.",
  },
  {
    icons: "/image/Icon3.svg",
    icons2: <MdArrowOutward />,
    title: "Personalized Curriculum",
    desc: "Receive a customized study plan based on your strengths and weaknesses for maximum preparation",
  },
  {
    icons: "/image/Icon5.svg",
    icons2: <MdArrowOutward />,
    title: "Guaranteed Success",
    desc: "Join our platform and become part of our success driven community.",
  },
];

export default function About() {
  return (
    <div className="w-full lg:-mt-60 md:-mt-48 xl:mt-32 mt-0">
      <div className="flex flex-col justify-center px-20 py-10">
        <h2 className="text-center font-roboto font-medium lg:text-[30px] text-[20px] uppercase">
          WHAT IS SCOLARITÉ ?
        </h2>
        <div className="xl:w-[15%] md:w-[30%] w-full flex flex-row justify-center items-center gap-2 mt-4 border py-4 m-auto uppercase font-roboto font-bold rounded-lg border-black border-b-4 border-b-black shadow-xl">
          <BsPlayCircle size={30} />
          <button className=" xl:text-[12px] lg:text-[15px] text-[17px]">
            watch video
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:text-start text-center md:gap-36 gap-2 xl:px-20 px-10 mt-20">
        <div className="md:w-[40%] w-full lg:space-y-0 space-y-4">
          <div className="flex items-center md:justify-start justify-center gap-2">
            <div className="w-[5%] border-black h-[16%] border" />
            <p className="font-roboto font-bold">
              Our unique approach distinguishes us
            </p>
          </div>
          <p className="font-roboto font-normal lg:text-[35px] text-[20px]  text-custom-blue">
            {" "}
            Your Path to Jamb Mastery - Unleash Your Potential
          </p>
        </div>
        <div className="md:w-[55%] w-full">
          <p className="font-medium font-roboto lg:text-[18px] text-[15px] text-light-blue">
            We have cracked the JAMB exam. Let us equip you with everything you
            need to crack it yourself, guiding you through every step of the
            way.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center items-center px-10 mt-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="xl:w-[80%] w-full text-center px-5 py-20 space-y-2"
          >
            {/*image icon */}
            <img
              src={item.icons}
              alt="image_icon"
              width={70}
              height={70}
              className="m-auto w-[80px] bounce-on-hover"
            />

            <h5 className="font-roboto font-semibold text-[20px] text-[rgba(51,51,51,1)]">
              {item.title}
            </h5>
            <p className="font-roboto font-normal text-[13px] text-[rgba(76, 76, 77, 1)]">
              {item.desc}
            </p>
            <div className="flex justify-end mt-10">
              <p className="bg-[rgba(241, 241, 243, 1)]  border w-[40px] py-2 px-3 rounded">
                {item.icons2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
