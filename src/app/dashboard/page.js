import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";

export default function page() {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <div className="w-[27rem] bg-white text-black p-4">
        <div className="flex gap-2 items-center md:pl-8">
          <img src="/image/logo.png" alt="logo" className="w-10" />
          <h2 className="text-2xl py-6 font-bold font-roboto">SCOLARITÉ</h2>
        </div>
        <div
          className="flex flex-col justify-between"
          style={{ height: "calc(100vh - 100px)" }}
        >
          {/*dashboard menu */}
          <div className="mt-10">
            <div className="flex items-center gap-2 p-2 md:pl-8 cursor-pointer rounded-md hover:bg-black hover:text-white group">
              <img
                src="/image/dashboard.svg"
                alt="dashboard_icon"
                className="w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <p className="font-roboto font-medium">Dashboard</p>
            </div>

            <div className="flex items-center gap-2 p-2 pl-8 cursor-pointer rounded-md hover:bg-black hover:text-white group">
              <img
                src="/image/analytic.svg"
                alt="dashboard_icon"
                className="w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <div className="flex items-center gap-[7.2rem]">
                <p className="font-roboto font-medium">Analytic</p>
                <RiArrowDropRightLine size={30} />
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 pl-8 cursor-pointer rounded-md hover:bg-black hover:text-white group">
              <img
                src="/image/marketing.svg"
                alt="dashboard_icon"
                className="w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <div className="flex items-center gap-10">
                <p className="font-roboto font-medium">Marketing Material</p>
                <RiArrowDropRightLine size={30} className="" />
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 pl-8 cursor-pointer rounded-md hover:bg-black hover:text-white group">
              <img
                src="/image/earning.svg"
                alt="dashboard_icon"
                className="w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <div className="flex items-center gap-[2.6rem]">
                <p className="font-roboto font-medium">Withdraw Earnings</p>
                <RiArrowDropRightLine size={30} className="" />
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 pl-8 cursor-pointer rounded-md hover:bg-black hover:text-white group">
              <img
                src="/image/history.svg"
                alt="dashboard_icon"
                className="w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <div className="flex items-center gap-[2.2rem]">
                <p className="font-roboto font-medium">Transaction History</p>
                <RiArrowDropRightLine size={30} className="" />
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 pl-8 cursor-pointer rounded-md hover:bg-black hover:text-white group">
              <img
                src="/image/settings.png"
                alt="dashboard_icon"
                className="w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <div className="flex items-center gap-[7.2rem]">
                <p className="font-roboto font-medium">Settings</p>
                <RiArrowDropRightLine size={30} className="" />
              </div>
            </div>
          </div>
          {/*profile menu */}
          <div>
            <div className="flex items-center flex-row gap-2 p-2 cursor-pointer rounded-md">
              <img
                src="/image/profile.svg"
                alt="dashboard_profile"
                className="w-10"
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-[15px]">Okechukwu</h2>
                <p className="font-bold text-[12px] text-gray-500">
                  Project Manager
                </p>
              </div>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
      {/*header menu */}
      <div className="w-full bg-gray-100">
        <div className="flex items-center justify-between p-10">
          <div>
            <div>
              <h2 className="font-roboto font-medium text-[20px]">
                Hello Okechukwu,
              </h2>
            </div>
          </div>
          {/* dashboard search */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <LuSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
              <input
                type="text"
                className="bg-white outline-none w-60 pl-10 p-2 rounded-md"
                placeholder="search..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
