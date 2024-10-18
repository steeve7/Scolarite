import React from 'react'
import analytic from '../Analytic/Assets/Image/analytic.png'
import analytic1 from '../Analytic/Assets/Image/analytic1.png'
import analytic2 from '../Analytic/Assets/Image/analytic2.png'
import laptop from '../Analytic/Assets/Image/laptop.png'
import Image from 'next/image'

export default function Analytic() {
    const items = [
      {
        image: analytic2,
        ttile: "Performance Overview",
        desc: "Visualise your scores and study patterns in one glance for smarter, and targeted learning strategy.",
      },
      {
        image: analytic1,
        ttile: "Study Habits Analysis",
        desc: "Analyze and optimize your study habits to boost learning efficiency.",
      },
      {
        image: analytic,
        ttile: "Goal Setting & Tracking",
        desc: "Set and track your goals to stay motivated and measure your performance.",
      },
    ];

  return (
    <div className="flex md:flex-row flex-col justify-between lg:space-x-0 space-x-10 items-center w-full md:px-20 px-10 mt-10">
      <div className="md:w-1/2 w-full md:order-1 order-2 md:mt-0 mt-10">
        <Image src={laptop} alt="laptop-image" className="md:w-[500px] w-[600px]" />
      </div>
      <div className="md:w-1/2 w-full md:order-2 order-1">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex md:justify-start justify-center items-center gap-2">
            <div className="w-[5%] border-black h-[16%] border" />
            <h2 className="font-bold font-roboto lg:text-[20px] text-[15px] text-[rgba(40, 46, 65, 1)]">
              Analytics Dashboard
            </h2>
          </div>

          <p className="font-medium font-roboto md:text-start text-center lg:text-[30px] text-[20px] text-[rgba(39, 45, 62, 1)] md:w-[90%] w-full">
            Visualise Your Progress with our Analytics Dashboard
          </p>
          <p className="font-roboto font-normal lg:text-[15px] text-[10px] md:text-start text-center text-[rgba(39, 45, 62, 1)] md:w-[80%] w-full">
            Gain insight into your academic potential with Scolarite's Analytics
            Dashboard. We have developed Scolarite’s user interface to track
            your progress, identify your strengths, and discover areas for
            improvement.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-[80%] w-full mt-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 shadow-lg py-7 px-5"
            >
              <Image
                src={item.image}
                alt="analytic-image"
                className="lg:w-[30px] w-[20px]"
              />
              <div className="flex flex-col gap-2">
                <h2 className="font-roboto font-medium lg:text-[20px] text-[15px] text-[rgba(40, 46, 65, 1)]">
                  {item.ttile}
                </h2>
                <p className="font-roboto font-normal lg:text-[15px] text-[10px] text-[rgba(39, 45, 62, 0.8)]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
