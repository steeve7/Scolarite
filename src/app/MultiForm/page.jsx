"use client"
import { CButton, Cg2wrapper, clickHidden, Flip } from "@/components/addons/addons"
import style from "./style.module.css"
import frame1i1 from "./assets/frame1i1.png"
import frame2i1 from "./assets/frame2i1.png"
import Image from "next/image"
import { useEffect } from "react"
import { mergeText } from "../add"


const EventList = {
    multiFormNext:(detail = {index:0})=>new CustomEvent("MULTIFORM-NEXT",{detail:detail}),
    multiFormPrev:(detail = {index:0})=>new CustomEvent("MULTIFORM-PREV",{detail:detail}),
    multiFormReload:(detail = {index:0})=>new CustomEvent("MULTIFORM-RELOAD",{detail:detail})
}

function Fill({className, Name,propose:{start = 0, end = 10} , need = true}){
    const barName = `FILL-${Name}-BAR`
    return <div className={mergeText(style.fill,"grid grid-cols-[1fr_auto] gap-2",className)}>
        <div className={mergeText(style.fillbar,"")}>
            <div className={mergeText(style.fillbarthumb)}/>
        </div>
    </div>
}


export default function Page(props){
    const ImageList = [frame1i1,frame2i1,frame2i1]
    /* useEffect(function(){
        document.getElementById("HEADER").style.display = "none"
    },[]) */
    return <div className={style.main}>
        <Cg2wrapper height="100vh">
            <Flip className={style.side1} Name={"frame1"}>
            
                {ImageList.map((image,i)=>
                    <div key={i} className={style.imagewrap}>
                        <Image src={image} alt="alt" style={{width:"100%"}}></Image>
                    </div>
                )}
            </Flip>
            <Flip className={style.side1} Name={"frame2"}>
                <div className={mergeText(style.frame2section,style.frame2section1)}>
                    <div className={style.frame2section1title}>
                    Personalize Your Learning Path
                    </div>
                    <div className={style.frame2section1motto}>
                    Help us create a focused study plan tailored just for you.   
                    </div>

                </div>
                
            </Flip>
            
            <CButton onClick={()=>clickHidden("FB-frame1-FORWARD")}> button next</CButton>
            <CButton onClick={()=>clickHidden("FB-frame1-BACKWARD")}> button back</CButton>
        </Cg2wrapper>
    </div>
}