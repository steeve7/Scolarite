import React from 'react'
import {BsPlayCircle } from 'react-icons/bs'
import {MdArrowOutward } from 'react-icons/md'
import Icon1 from "../About/Assets/Image/Icon1.png";
import back2 from '../About/Assets/Image/Icon2.png'
import Icon3 from '../About/Assets/Image/Icon3.png'
import Icon4 from '../About/Assets/Image/Icon4.png'
import Icon5 from '../About/Assets/Image/Icon5.png'
import Icon6 from '../About/Assets/Image/Icon6.png'
import Image from 'next/image';


const items = [
  {
    icons: Icon1,
    icons2: (
      <MdArrowOutward />
    ),
    title: "Over 10,000+JAMB Solutions",
    desc: "Enhance your abilities with a vast array of authentic JAMB questions covering all question types.",
  },
  {
    icons: back2,
    icons2: <MdArrowOutward />,
    title: "Expert Instruction",
    desc: "Learn from industry experts with hands-on experience in curriculum design and development.",
  },
  {
    icons: Icon3,
    icons2: <MdArrowOutward />,
    title: "All in one platform",
    desc: "Every study material  for JAMB examination is on our platform.",
  },
  {
    icons: Icon4,
    icons2: <MdArrowOutward />,
    title: "Scolarité Analytics",
    desc: "Pinpoint your weak areas using powerful analytics and error tracking, and then transform them to strength.",
  },
  {
    icons: Icon5,
    icons2: <MdArrowOutward />,
    title: "Personalized Curriculum",
    desc: "Receive a customized study plan based on your strengths and weaknesses for maximum preparation",
  },
  {
    icons: Icon6,
    icons2: <MdArrowOutward />,
    title: "Guaranteed Success",
    desc: "Join our platform and become part of our success driven community.",
  },
];

export default function About() {
  return (
    <div className="w-full lg:mt-20 mt-48">
      <div className="flex flex-col justify-center">
        <h2 className="text-center font-roboto font-normal lg:text-[40px] text-[20px] uppercase">
          What Is Scolarite?
        </h2>
        <div className='md:px-0 px-40'>
        <button className="flex flex-row justify-center text-[12px] items-center gap-2 mt-4 border md:w-[15%] w-full py-4 m-auto uppercase font-roboto font-bold px-5 rounded-lg border-black border-b-8 border-b-black shadow-lg">
          <BsPlayCircle size={30} className="font-bold font-roboto" />
          watch video
        </button>
        </div>
        
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:text-start text-center md:gap-20 gap-2 px-20 md:mt-10 mt-20">
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
          <p className="font-medium font-roboto lg:text-[20px] text-[15px] text-light-blue">
            We have cracked the JAMB exam. Let us equip you with everything you
            need to crack it yourself, guiding you through every step of the
            way.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center items-center px-20 gap-16 mt-10">
        {items.map((item, i) => (
          <div key={i} className="md:w-[80%] w-full text-center space-y-2 px-5">
            <Image
              src={item.icons}
              alt="image_icon"
              width={70} // Provide width
              height={70} // Provide height
              className="m-auto w-[80px]"
            />
            <h5 className="font-roboto font-semibold text-[20px] text-[rgba(51,51,51,1)]">
              {item.title}
            </h5>
            <p className="font-roboto font-normal text-[13px] text-[rgba(76, 76, 77, 1)]">
              {item.desc}
            </p>
            <div className="flex justify-end">
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
