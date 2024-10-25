"use client"
import { useEffect, useState } from "react"
import { CButton, rclick } from "../../components/addons/addons"
import { mergeFunc, mergeText } from "../add"
import style from  "./style.module.css"
import pcfem from "./assets/pcfem.png"
import pcfex from "./assets/pcfex.png"
import Image from "next/image"


const  test = [
    "Access to selected free courses.",
    "Limited course materials and resources.",
    "Basic community support.",
    "No certification upon completion.",
    "Ad-supported platform.",
    "--X-- Access to exclusive Pro Plan community forums.",
    "--X-- Early access to new courses and updates.",
]

function PcFe(props){
    const icon = String(props.value).includes("--X--")?pcfex:pcfem
    const value = String(props.value).replace("--X--","")
    return <div className={style.pcfe}>
            <Image className={style.pcfeicon} src={icon} alt="icon" width={20} height={20}/>
            <div className={style.pcfetext}>{value}</div>
        </div>
    
}

function PriceCom(props){
    return <div className={style.priceCom}>
        <div className={style.pclabel}>{props.label}</div>
        <div className={style.pcvalue}>₦{props.value}<span className={style.pcsmonth}>/month</span></div>
        <div className={style.pcav}>Avaliable features:</div>
        <div className={style.pcfew}>
            <div className={style.pcfei}>
                <PcFe value = "there " ></PcFe>
                {props.list.map((e,i)=><PcFe key={i} value={e}></PcFe>)}
            </div>
        </div>
        <CButton className={style.pcbutton}>Get Started</CButton>
    </div>
}

export default function PricingPage(props){
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
    
    return <div className={style.main}>
            <div className={style.pagename}>PRICING</div>
            <div className={style.title}>Choose Your Plan: <br />
            Affordable Learning, Priceless Success</div>
            <div className={style.text1}>We have a range of affordable plans. Choose the option that fits your learning goals.</div>
            <div className={style.priceview}>
            <div className={style.swrapper}>
                <div className={style.w3switch}>
                
                    <div className={mergeText(style.w3sit,style.w3before)} id="w3before">before</div>
                    {["Monthly","Quarterly","Yearly"].map((label,index) => <CButton key={index} ani={false}
                     className={mergeText(index==0?style.w3sit:"" ,style.w3switchitem)}
                      onClick={mergeFunc((e)=>rclick(e),priceMapFunc[label],()=>document.querySelectorAll(`.${style.w3switchitem}`).forEach(e=>e.classList.remove(style.w3sit)))}>{label}</CButton>
                    )}
                
                </div>
            </div>
                <div className={style.prices}>
                    <PriceCom list={test} label="Basic Plan" value={prices[0]}/>
                    <PriceCom list={test} label="Premium Plan" value={prices[1]}/>
                    <PriceCom list={test} label="Custom Plan" value=" Custom "/>
                </div>
            </div>


    </div>
}
