"use client"
import { CButton, CEDispatch, CEventH, Cg2wrapper, clickHidden, Flip } from "@/components/addons/addons"
import style from "./style.module.css"
import frame1i1 from "./assets/frame1i1.png"
import frame2i1 from "./assets/frame2i1.png"
import doneimg from "./assets/done.png"
import Image from "next/image"

import { useEffect, useRef, useState } from "react"
import { mergeText } from "../add"


const EventList = {
    multiFormMove:(detail = {index:0})=>new CustomEvent("MULTIFORM-MOVE",{detail:detail}),
    multiFormReload:(detail = {index:0})=>new CustomEvent("MULTIFORM-RELOAD",{detail:detail})
}

function Fill({className, Name,propose={start: 0, end: 10} , need = true}){
    const EventName = `FILL-${Name}`
    const barName = `FILL-${Name}`
    const ref = useRef(null)
    const [done,setdone] = useState(false)
    function FillFunc(e){
        const index = Number(e.detail.index)
        const End = propose.end
        const Start = propose.start
        const el = ref.current
        const barWidth = Number((index/(End - Start))*100)
        if (index > Start){
            el.style.width = `${barWidth}%`
        }else if (index >= End){
            setdone(()=> true)
        }
        else{
            el.style.width = `0%`
        }
    }
    return <div className={mergeText(style.fill,className)}>
        <div className={mergeText(style.fillbar,"")}>
           {need && <div ref={ref} className={mergeText(style.fillbarthumb)}/>}
        </div>
        <div className={style.fillcircle}> 
            {done && <Image src={doneimg} className={style.filldoneimg}/> }
            {!done && propose.end}
        </div>
        <CEventH Name={EventName} Type={EventList.multiFormMove().type} onEvent={FillFunc}   />
    </div>
}


export default function Page(props){
    const ImageList = [frame1i1,frame2i1,frame2i1]
    useEffect(function(){
        document.getElementById("HEADER").style.display = "none"
    },[])
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
                    <div className={mergeText(style.frame2section1titlewrapper)}>
                        <div className={style.frame2section1title}>
                        Personalize Your Learning Path
                        </div>
                        <div className={style.frame2section1motto}>
                        Help us create a focused study plan tailored just for you.
                        </div>
                    </div>

                </div>
                
            </Flip>
            <Fill Name="DEMO1" ></Fill>
        <CButton onClick={()=>{clickHidden("FB-frame1-FORWARD");CEDispatch("FILL-DEMO1",EventList.multiFormMove({index:11}))}}> button next</CButton>
            <CButton onClick={()=>clickHidden("FB-frame1-BACKWARD")}> button back</CButton>
        </Cg2wrapper>
    </div>
}