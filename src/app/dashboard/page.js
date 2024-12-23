"use client"
import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";

// Sample components for each menu item

const DashboardContent = () => <div>Dashboard Content</div>;
const AnalyticContent = () => <div>Analytic Content</div>;
const MarketingContent = () => <div>Marketing Material Content</div>;
const WithdrawContent = () => <div>Withdraw Earnings Content</div>;
const TransactionContent = () => <div>Transaction History Content</div>;
const SettingsContent = () => <div>Settings Content</div>;

export default function Page() {
  // State to manage the selected menu
  
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  // Render the corresponding component based on the selected menu
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

  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Sidebar */}
      <div className="w-[27rem] bg-white text-black p-4">
        <div className="flex gap-2 items-center md:pl-8">
          <img src="/image/logo.png" alt="logo" className="w-10" />
          <h2 className="text-2xl py-6 font-bold font-roboto">SCOLARITÉ</h2>
        </div>
        <div
          className="flex flex-col justify-between"
          style={{ height: "calc(100vh - 100px)" }}
        >
          {/* Dashboard menu */}
          <div className="mt-10">
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
                onClick={() => setSelectedMenu(menu.name)}
                className={`flex items-center gap-2 p-2 pl-8 cursor-pointer rounded-md ${
                  selectedMenu === menu.name
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                } group`}
              >
                <img
                  src={menu.icon}
                  alt={`${menu.name}_icon`}
                  className="w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
                <p className="font-roboto font-medium">{menu.name}</p>
                <RiArrowDropRightLine size={30} />
              </div>
            ))}
          </div>

          {/* Profile menu */}
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

      {/* Main Content */}
      <div className="w-full bg-gray-100">
        {/* Header menu */}
        <div className="flex items-center justify-between p-10">
          <div>
            <h2 className="font-roboto font-medium text-[20px]">
              Hello Okechukwu,
            </h2>
          </div>
          {/* Dashboard search */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <LuSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
              <input
                type="text"
                className="bg-white outline-none w-60 pl-10 p-2 rounded-md"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        {/* Dynamic content area */}
        <div className="p-10">{renderContent()}</div>
      </div>
    </div>
  );
}
