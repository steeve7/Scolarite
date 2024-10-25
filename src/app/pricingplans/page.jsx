"use client"
import { useEffect, useState } from "react"
import { CButton, CLink, rclick } from "../../components/addons/addons"
import { mergeFunc, mergeText } from "../add"
import style from  "./pricing.module.css"
import pcfem from "./assets/pcfem.png"
import pcfex from "./assets/pcfex.png"
import faqi from "./assets/faqi.png"
import faqci from "./assets/faqci.png"
import nexti from "./assets/next.png"
import Image from "next/image"


const  test = [
    "Access to selected free courses.",
    "Limited course materials and resources.",
    "Basic community support.",
    "No certification upon completion.",
    "Ad-supported platform.",
    " Access to exclusive Pro Plan community forums.",
    " Early access to new courses and updates.",
]

function PcFe(props){
    const icon = String(props.value).includes("--X--")?pcfex:pcfem
    const value = String(props.value).replace("--X--","")
    return <div className={style.pcfe}>
            <Image className={style.pcfeicon} src={icon} alt="icon" width={20} height={20}/>
            <div className={style.pcfetext}>{value}</div>
        </div>
    
}

function PriceCom({label, value , list , className}){
    return <div className={mergeText(style.priceCom,className)}>
        <div className={style.pclabel}>{label}</div>
        <div className={style.pcvalue}>₦{value}<span className={style.pcsmonth}>/month</span></div>
        <div className={style.pcav}>Avaliable features:</div>
        <div className={style.pcfew}>
            <div className={style.pcfei}>
                {list.map((e,i)=><PcFe key={i} value={e}></PcFe>)}
            </div>
        </div>
        <CButton className={style.pcbutton}>Get Started</CButton>
    </div>
}

function FaqCom({text,title}){
    const id = "faqcom ___ "+title
    return <div className={mergeText("ani-hidden right-hide",style.faqcom)} id= {id}>
        <div  className={style.faqctw}>
            <div className={style.faqctitle}>{title}</div>
            <CButton  onClick={e=>document.getElementById(id).classList.toggle(style.faqactive)} className={style.faqci}>
                <Image src={faqci} className={style.faqciicon} alt="icon" width={30} height={30}/>
            </CButton>
        </div>
        <div className={style.faqctext}>
            <div className={style.edcctext}>{text}</div>
            <div  className={mergeText("ani-hidden left-hide",style.faqctw,style.edc)}>
                <div className={mergeText(style.faqctitle,style.edctext)}>
                Enrollment Process for Different Courses
                </div>
                <div  className={mergeText(style.edcci,style.faqci)}>
                <CLink ani={false} href="/about">
                    <Image src={nexti}  className={mergeText(style.faqdl)} alt="icon" width={30} height={30}/>
                </CLink>
            </div>
            </div>
        </div>

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
    const listetest = (...inde)=>{var test2 =Array.from(test);test2 = test2.map((val,index)=> inde.includes(index)?val+"--X--":val);return test2}

    return <main className={style.page_content}>
        <div className={style.main}>
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
                        <PriceCom className={mergeText("ani-hidden right-hide ","")} list={listetest(6,3)} label="Basic Plan" value={prices[0]}/>
                        <PriceCom className={mergeText("ani-hidden right-hide delay-100","")} list={listetest(0,1)} label="Premium Plan" value={prices[1]}/>
                        <PriceCom className={mergeText("ani-hidden right-hide delay-200","")} list={listetest(4,2)} label="Custom Plan" value=" Custom "/>
                    </div>
                </div>
            <div className={style.faqiw}>
                <Image src={faqi} alt="faqi" className={mergeText("ani-hidden bottom-hide",style.faqi)} width={80} height={80}/>
            </div>
            <div className={mergeText(style.faqiw,style.faqtitle)}>Frequently Asked Questions</div>
            <div className={mergeText(style.faqiw,style.faqtext)}>If you have any questions?
            Contact our Team viasupport@skillbridge.com</div>
            <br />
            <div className={style.fcw}>
                <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Can I enroll in multiple courses at once?"/>
        
                <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="What kind of support can I expect from instructors?"/>
                <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Are the courses self-paced or do they have specific start and end dates?"/>
                <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Are there any prerequisites for the courses?"/>
                <FaqCom text="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." title="Can I download the course materials for offline access?"/>
            </div>
            <br />
            <br />
            <br />
            <br />
        
        </div>
    </main>
}
