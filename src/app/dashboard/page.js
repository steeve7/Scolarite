"use client";
import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import DashboardContent from "../dashboard/DashboardContent/page";
import AnalyticContent from "../dashboard/AnalyticContent/page";
import MarketingContent from "../dashboard/MarketingContent/page";
import WithdrawContent from "../dashboard/WithdrawContent/page";
import TransactionContent from "../dashboard/TransactionContent/page";
import SettingsContent from "../dashboard/SettingsContent/page";

export default function Page() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (selectedMenu) {
      case "Dashboard":
        return <DashboardContent />;
      case "Analytic":
        return <AnalyticContent />;
      case "Marketing Material":
        return <MarketingContent />;
      case "Withdraw Earnings":
        return <WithdrawContent />;
      case "Transaction History":
        return <TransactionContent />;
      case "Settings":
        return <SettingsContent />;
      default:
        return <div>Select a menu</div>;
    }
  };

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
    setIsSidebarOpen(false); // Close the sidebar on menu click
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <div
        className={`w-full md:w-[20rem] bg-white text-black p-4 md:h-full transition-transform duration-700 ease-in-out ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full md:translate-x-0 "
        } absolute left-0 z-10 md:relative md:translate-x-0`}
      >
        <div className="flex gap-2 items-center pl-4">
          <img src="/image/logo.png" alt="logo" className="w-10" />
          <h2 className="text-2xl py-10 font-bold font-roboto flex-1">
            SCOLARITÉ
          </h2>
          {/* Close button for mobile */}
          <MdClose
            className="block md:hidden text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div
          className="flex flex-col justify-between"
          style={{ height: "calc(100vh - 120px)" }}
        >
          {/* Dashboard menu */}
          <div className="mt-6 space-y-2">
            {[
              { name: "Dashboard", icon: "/image/dashboard.svg" },
              { name: "Analytic", icon: "/image/analytic.svg" },
              { name: "Marketing Material", icon: "/image/marketing.svg" },
              { name: "Withdraw Earnings", icon: "/image/earning.svg" },
              { name: "Transaction History", icon: "/image/history.svg" },
              { name: "Settings", icon: "/image/settings.png" },
            ].map((menu) => (
              <div
                key={menu.name}
                onClick={() => handleMenuClick(menu.name)}
                className={`flex items-center justify-start gap-2 p-2 pl-4 cursor-pointer rounded-md ${
                  selectedMenu === menu.name ? "bg-black text-white" : ""
                }`}
              >
                <div className="flex items-center gap-2 flex-1">
                  <img
                    src={menu.icon}
                    alt={`${menu.name}_icon`}
                    className="w-8"
                    style={{
                      filter:
                        selectedMenu === menu.name
                          ? "brightness(0) invert(1)"
                          : "none",
                    }}
                  />
                  <p className="font-roboto font-medium">{menu.name}</p>
                </div>
                <RiArrowDropRightLine
                  size={30}
                  className={`${
                    selectedMenu === menu.name ? "text-white" : "text-black"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Profile menu */}
          <div className="mt-8">
            <div className="flex items-center gap-2 p-2 pl-4 cursor-pointer rounded-md">
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

      {/* Main content */}
      <div
        className={`flex-1 bg-gray-100 ${
          isSidebarOpen ? "overflow-hidden" : ""
        }`}
      >
        {/* Header menu */}
        <div className="flex flex-row items-start md:items-center justify-between p-6 gap-4">
          <div className="flex items-center justify-between w-full md:mt-0 mt-2">
            <MdMenu
              className="block md:hidden text-2xl cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
            <h2 className="font-roboto font-medium md:text-[20px] text-[15px]">
              Hello Okechukwu,
            </h2>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-60">
              <LuSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
              <input
                type="text"
                className="bg-white outline-none w-full pl-10 p-2 rounded-md"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        {/* Dynamic content area */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
}
