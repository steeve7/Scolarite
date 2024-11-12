"use client"

import { mergeFunc, mergeText } from "@/app/add";
import { PriceCom } from "@/app/pricingplans/page";
import { CButton, rclick } from "@/components/addons/addons";
import { GrCheckmark } from "react-icons/gr";
import { HiMiniXMark } from "react-icons/hi2";
import style from  "@/app/pricingplans/pricing.module.css"
import { useEffect, useState } from "react";


const  test = [
  "Access to selected free courses.",
  "Limited course materials and resources.",
  "Basic community support.",
  "No certification upon completion.",
  "Ad-supported platform.",
  " Access to exclusive Pro Plan community forums.",
  " Early access to new courses and updates.",
]

export default function Plan() {
  const priceMap = {
    "Monthly":[10000,25000],
    "Quarterly":[30000,75000],
    "Yearly":[120000,250000]
  }
  const [prices,setPrices] = useState(priceMap["Monthly"])

  const priceMapFunc = {
      "Monthly":()=>setPrices(()=>priceMap["Monthly"]),
      "Quarterly":()=>setPrices(()=>priceMap["Quarterly"]),
      "Yearly":()=>setPrices(()=>priceMap["Yearly"])
  }
  useEffect(()=>{
      document.querySelectorAll(`.${style.w3sit}`).forEach(e=>{
          e.click()
      })
  },[])
  const listed = (list,...inde)=>{var test2 =Array.from(list);test2 = test2.map((val,index)=> inde.includes(index)?val+"--X--":val);return test2}

  return (
    <div className="relative mt-20 lg:py-20 py-2 bg-gradient-to-b from-[#2F364B] to-[#262B3D] shadow-md">
      {/* Background Image */}

      {/* First content */}
      <div className="flex justify-center items-center flex-col lg:mt-0 mt-20 md:px-0 px-10">
        <h2 className="font-roboto font-bold lg:text-[20px] md:text-[15px] text-[10px] ani-hidden bottom-hide text-plan-color bg-plan-custom rounded-full py-4 px-4 uppercase">
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

      <center style={{marginTop:"40px"}}>
        <div className={style.w3switch}>
        
          <div className={mergeText(style.w3sit,style.w3before)} id="w3before">before</div>
          {["Monthly","Quarterly","Yearly"].map((label,index) => <CButton key={index} ani={false}
           className={mergeText(index==0?style.w3sit:"" ,style.w3switchitem)}
            onClick={mergeFunc((e)=>rclick(e),priceMapFunc[label],()=>document.querySelectorAll(`.${style.w3switchitem}`).forEach(e=>e.classList.remove(style.w3sit)))}>{label}</CButton>
          )}
        
            </div>
            <div className={style.priceview}>
                    
                    <div className={style.prices}>
                        <PriceCom className={mergeText("ani-hidden right-hide ","")} list={listed(test,6,3)} label="Basic Plan" value={prices[0]}/>
                        <PriceCom className={mergeText("ani-hidden right-hide delay-100","")} list={listed(test,0,1)} label="Premium Plan" value={prices[1]}/>
                        <PriceCom className={mergeText("ani-hidden right-hide delay-200","")} list={listed(test,4,2)} label="Custom Plan" value=" Custom "/>
                    </div>
                </div>
      </center>

    </div>
  );
} 