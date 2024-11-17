"use client";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { G2Wrapper, Title } from "@/components/addons/addons";
import style from "./choose.module.css";
import { mergeText } from "@/app/add";

export default function Choose() {
  return (
    <div className="flex flex-col justify-center w-full overflow-hidden">
      <div className="bg-gradient-to-b from-[#282E41] to-[#3E4A6F] md:h-[800px] w-full">
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <h2 className="font-roboto font-medium lg:text-[30px] text-[20px] text-white">
            WHY CHOOSE SCOLARITÉ ?
          </h2>
          <div className="border-b-2 border-custom-border-color md:w-[50%] w-[70%] h-[15%]" />
        </div>
        {/*first section*/}
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-0 md:px-40 px-10 mt-40">
          <div
            className={mergeText(
              style.wrapperimagewrapper,
              style.wrapper2item1,
              "ani-hidden left-hidee order-2"
            )}
          >
            <img
              src="/image/choose.gif"
              className={mergeText(style.imgAnir, "w-[700px]")}
              alt="about us"
            />
          </div>
          <div
            className={mergeText(
              style.wrapper2item2,
              "ani-hidden right-hidee order-1 md:w-[50%]"
            )}
          >
            <Title className={mergeText(style.wrapper2i2title, style.title)}>
              EXPERTISE AND EXCELLENCE
              <hr className={style.hr} />
            </Title>
            <div
              className={mergeText(
                style.wrapper2i2content,
                style.wrapper1i2content
              )}
            >
              <span className={style.w2i2cli1}>
                At Scolarité, we are a team of first class graduates and JAMB
                experts. Therefore, we have what it takes to impart academic
                excellence.
              </span>
              <button
                type="button"
                className="text-white font_roboto mt-6 uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1rem] px-[2rem] bg-black rounded-[212.76px] border-0 outline-none"
              >
                Register
                <FaRegArrowAltCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*second section*/}
      <G2Wrapper className={style.wrapperr2}>
        <div
          className={mergeText(
            style.wrapperimagewrapper,
            style.wrapper2item1,
            "ani-hidden left-hide order-1 xl:w-[600px]"
          )}
        >
          <img
            src="/image/student.gif"
            className={mergeText(
              style.imgAnir,
              "anidelay-600 md:w-[1100px] w-[1100px]"
            )}
            alt="choose_img"
          />
        </div>
        <div
          className={mergeText(
            style.wrapper2item2,
            "ani-hidden right-hide order-2"
          )}
        >
          <Title className={mergeText(style.wrapper2i2title, style.tittle)}>
            UNLOCKING STUDENT POTENTIAL
            <hr className="mt-[10px] mb-[10px] border border-black" />
          </Title>
          <div
            className={mergeText(
              style.wrapper2i2content,
              style.wrapper1i2content,
              "md:w-[80%] w-full"
            )}
          >
            <span className="relative md:text-[18px] text-[15px] text-black">
              Our approach is designed to guide students to study effectively.
              This will not only be useful for JAMB preparation but also for
              higher educational endeavours
            </span>
            <button
              type="button"
              className="text-white font_roboto mt-6 uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1rem] px-[2rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </G2Wrapper>
      {/*third section*/}
      <G2Wrapper className={style.wrapper2}>
        <div
          className={mergeText(
            style.wrapperimagewrapper,
            style.wrapper2item1,
            "ani-hidden left-hidee md:order-2 order-1 xl:w-[600px]"
          )}
        >
          <img
            src="/image/student2.gif"
            className={mergeText(style.imgAnir, "anidelay-600 w-[1100px]")}
            alt="choose_img"
          />
        </div>
        <div
          className={mergeText(
            style.wrapper2item2,
            "ani-hidden right-hidee md:order-1 order-2"
          )}
        >
          <Title className={mergeText(style.wrapper2i2title, style.title)}>
            CULTIVATING ACADEMIC FOUNDATIONS
            <hr className={style.hr} />
          </Title>
          <div
            className={mergeText(
              style.wrapper2i2content,
              style.wrapper1i2content
            )}
          >
            <span className={style.w2i2cli1}>
              The platform enables students to reinforce their strengths,
              address their weaknesses, and build a robust foundation for
              academic and future careers.
            </span>
            <button
              type="button"
              className="text-white font_roboto mt-6 uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1rem] px-[2rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </G2Wrapper>
      {/*fourth section*/}
      <G2Wrapper className={style.wrapperr2}>
        <div
          className={mergeText(
            style.wrapperimagewrapper,
            style.wrapper2item1,
            "ani-hidden left-hide order-1"
          )}
        >
          <img
            src="/image/student1.gif"
            className={mergeText(style.imgAnir, "anidelay-600 w-[1100px]")}
            alt="choose_img"
          />
        </div>
        <div
          className={mergeText(
            style.wrapper2item2,
            "ani-hidden right-hide order-2"
          )}
        >
          <Title className={mergeText(style.wrapper2i2title, style.tittle)}>
            PERSONALIZED EXAM PREPARATION
            <hr className="mt-[10px] mb-[10px] border border-black" />
          </Title>
          <div
            className={mergeText(
              style.wrapper2i2content,
              style.wrapper1i2content,
              "md:w-[80%] w-full"
            )}
          >
            <span className="relative text-[18px] text-black before:content-[''] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:absolute before:top-[10%] before:left-[-14px]">
              We are dedicated to guiding you through your exam preparations
              with personalized learning experience. You will be exposed to
              proven strategies that will help you study effectively for exams,
              even beyond JAMB.
            </span>
            <button
              type="button"
              className="text-white font_roboto mt-6 uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1rem] px-[2rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </G2Wrapper>
      {/*fifth section*/}
      <G2Wrapper className={style.wrapper2}>
        <div
          className={mergeText(
            style.wrapperimagewrapper,
            style.wrapper2item1,
            "ani-hidden left-hide order-1"
          )}
        >
          <img
            src="/image/student3.svg"
            className={mergeText(style.imgAnir, "anidelay-600 w-[1100px]")}
            alt="choose_img"
          />
        </div>
        <div
          className={mergeText(
            style.wrapper2item2,
            "ani-hidden right-hide order-2"
          )}
        >
          <Title className={mergeText(style.wrapper2i2title, style.title)}>
            ALL FACULTIES ARE COVERED
            <hr className={style.hr} />
          </Title>
          <div
            className={mergeText(
              style.wrapper2i2content,
              style.wrapper1i2content
            )}
          >
            <span className={style.w2i2cli1}>
              Use our platform to advance your career in various specializations
              such as Arts, Education, Law, Management Sciences, Medical
              sciences, Physical/Environmental Sciences, Engineering and Social
              Sciences, among others.
            </span>
            <button
              type="button"
              className="text-white font_roboto mt-6 uppercase flex items-center gap-2 font-bold text-[10px] xl:text-[15px] py-[1rem] px-[2rem] bg-black rounded-[212.76px] border-0 outline-none"
            >
              Register
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </G2Wrapper>
    </div>
  );
}
