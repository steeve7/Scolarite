import { GrCheckmark } from "react-icons/gr";
import { HiMiniXMark } from "react-icons/hi2";

export default function Plan() {
  const plans = [
    {
      type: "Basic Plan",
      amount: "₦10000",
      months: "/month",
      feature: "Avaliable Features",
      icon: <GrCheckmark />,
      icon2: <HiMiniXMark />, // Use this for replacing in six_desc and seven_desc
      first_desc: "Access to four JAMB subjects.",
      second_desc: "Access to subject materials and resources.",
      third_desc: "Basic community support.",
      fourth_desc: "Self-paced Study.",
      fifth_desc: "Ad-supported platform.",
      six_desc: "Access to exclusive Pro Plan community forums.",
      seven_desc: "Access to exclusive video explanations.",
      button: "Get Started",
    },
    {
      type: "Premium Plan",
      amount: "₦25000",
      months: "/month",
      feature: "Avaliable Features",
      icon: <GrCheckmark />,
      first_desc: "Unlimited access to all courses.",
      second_desc: "Unlimited course materials and resources.",
      third_desc: "Priority support from instructors.",
      fourth_desc: "Course completion certificates.",
      fifth_desc: "Ad-free experience.",
      six_desc: "Access to exclusive Pro Plan community forums.",
      seven_desc: "Early access to new courses and updates.",
      button: "Get Started",
    },
    {
      type: "Custom Plan",
      feature: "Avaliable Features",
      icon: <GrCheckmark />,
      first_desc: "Unlimited access to all courses.",
      second_desc: "Unlimited course materials and resources.",
      third_desc: "Priority support from instructors.",
      fourth_desc: "Course completion certificates.",
      fifth_desc: "Ad-free experience.",
      six_desc: "Access to exclusive Pro Plan community forums.",
      seven_desc: "Early access to new courses and updates.",
      button: "Get Started",
    },
  ];

  return (
    <div className="relative mt-20 lg:py-20 py-2 bg-gradient-to-b from-[#2F364B] to-[#262B3D] shadow-md">
      {/* Background Image */}

      {/* First content */}
      <div className="flex justify-center items-center flex-col lg:mt-0 mt-20 md:px-0 px-10">
        <h2 className="font-roboto font-bold lg:text-[20px] md:text-[15px] text-[10px] text-plan-color bg-plan-custom rounded-full py-4 px-4 uppercase">
          pricing
        </h2>
        <p className="font-roboto font-medium lg:text-[30px] md:text-[20px] text-[15px] text-white lg:mt-0 mt-5">
          Choose Your Plan:
        </p>
        <p className="font-roboto font-medium lg:text-[30px] md:text-[20px] text-[15px] text-white">
          Affordable Learning, Priceless Success
        </p>
        <p className="font-roboto font-normal text-center lg:text-[20px] md:text-[15px] text-[10px] text-custom-text-color mt-5">
          We have a range of affordable plans. Choose the option that fits your
          learning goals.
        </p>
      </div>

      {/* Second content */}
      <div className="flex flex-row justify-center items-center mt-20 border border-custom-border-color rounded-md xl:w-[20%] w-1/2 m-auto gap-3 py-2 lg:px-0">
        <button className="font-roboto font-medium lg:text-[15px] text-[10px] text-white bg-black rounded-full px-3 py-3">
          Monthly
        </button>
        <button className="font-roboto font-medium lg:text-[15px] text-[10px] text-white">
          Quarterly
        </button>
        <button className="font-roboto font-medium lg:text-[15px] text-[10px] text-white">
          Yearly
        </button>
      </div>  

      {/* Plan Cards */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-full mt-20 lg:px-20 px-10 md:px-5">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white rounded-md py-7 lg:px-7 w-full px-10"
          >
            <h2 className="font-roboto font-medium flex justify-center items-center border border-custom-border w-full m-auto p-2 rounded-md">
              {plan.type}
            </h2>
            {/* Conditionally render amount and months only if they exist */}
            {plan.type !== "Custom Plan" && (
              <div className="mt-10 flex justify-center items-center gap-2">
                <p className="font-[Be Vietnam Pro] font-semibold lg:text-[40px] text-[30px]">
                  {plan.amount}
                </p>
                <p className="font-roboto font-medium lg:text-[15px] text-[10px]">
                  {plan.months}
                </p>
              </div>
            )}
            {plan.type === "Custom Plan" && (
              <div className="mt-10" style={{ height: "60px" }}></div> // Maintain spacing for Custom Plan
            )}
            <h2 className="font-roboto font-medium text-[15px] mt-10 flex justify-center">
              {plan.feature}
            </h2>
            <div className="flex flex-col justify-start mt-10 gap-4">
              {/* Feature Descriptions */}
              {[...Array(5)].map((_, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <span className="bg-icon-color p-3 text-[15px]">
                    {plan.icon}
                  </span>
                  <p className="font-roboto font-normal text-[rgba(76, 76, 77, 1)] lg:text-[15px] text-[10px]">
                    {
                      plan[
                        `${
                          ["first", "second", "third", "fourth", "fifth"][index]
                        }_desc`
                      ]
                    }
                  </p>
                </div>
              ))}
              {/* Render HiMiniXMark icon for Basic Plan's six_desc and seven_desc */}
              <div className="flex items-center gap-2">
                <span className="bg-icon-color p-3 text-[15px]">
                  {i === 0 ? plan.icon2 : plan.icon}
                </span>
                <p className="font-roboto font-normal text-[rgba(76, 76, 77, 1)] lg:text-[15px] text-[10px]">
                  {plan.six_desc}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-icon-color p-3 text-[15px]">
                  {i === 0 ? plan.icon2 : plan.icon}
                </span>
                <p className="font-roboto font-normal text-[rgba(76, 76, 77, 1)] lg:text-[15px] text-[10px]">
                  {plan.seven_desc}
                </p>
              </div>
            </div>
            <button className="bg-plan-button w-full rounded-md text-white flex justify-center py-2 font-[Be Vietnam Pro] text-[15px] font-semibold mt-10">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 