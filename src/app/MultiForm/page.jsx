"use client"
import { CButton, CEDispatch, CEventH, Cg2wrapper, clickHidden, Flip } from "@/components/addons/addons"
import style from "./style.module.css"
import frame1i1 from "./assets/frame1i1.png"
import frame2i1 from "./assets/frame2i1.png"
import doneimg from "./assets/done.png"
import Image from "next/image"

import { useEffect, useRef, useState } from "react"
import { CRange, mergeText, Range } from "../add"


const EventList = {
    multiFormMove:(detail = {index:0})=>new CustomEvent("MULTIFORM-MOVE",{detail:detail}),
    multiFormReload:(detail = {index:0})=>new CustomEvent("MULTIFORM-RELOAD",{detail:detail})
}

function Fill({className, Name,purpose={start: 0, end: 10} , need = true}){
    const EventName = `FILL-${Name}`
    const barName = `FILL-${Name}`
    const ref = useRef(null)
    const [done,setdone] = useState(false)
    function FillFunc(e){
        const index = Number(e.detail.index)
        const End = purpose.end
        const Start = purpose.start
        var el = ref.current
        const barWidth = Number((index/(End - Start))*100)

       if (index > Start){
            el.style.width = `${barWidth}%`
        }
        else{
            el.style.width = `0%`
        }
        if (index >= End){
            setdone(()=> true)
        }
    console.log(barName,End,Start,index)}
    return <>
     <div style={{display:need?"initial": "none"}} className={mergeText(style.fillbar,"")}>
            <div  ref={ref} id={barName} className={mergeText(style.fillbarthumb)}/>
        </div>
        <div className={style.fillcircle}> 
            {done && <Image src={doneimg} alt="2" className={style.filldoneimg}/> }
            {!done && purpose.end}
        </div>
        <CEventH Name={EventName} Type={EventList.multiFormMove().type} onEvent={FillFunc}   />
    </>
}


export default function Page(props){
    const [Index, setIndex] = useState(2)
    var section1fills = CRange(0,4).map((value,index)=> {return{Name:`fill${value}`, Index:value+1,purpose:{start:value,end:value+1}}})
    const ImageList = [frame1i1,frame2i1,frame2i1]
    useEffect(function(){
        console.log(section1fills)
        document.getElementById("HEADER").style.display = "none"
        // document.getElementById("FOOTER").style.display = "none"
    },[])
    function ehandle(){
        const Event = EventList.multiFormMove({index:Index})
        section1fills.map((i)=>{
            CEDispatch(`FILL-${i.Name}`,Event)
            console.log(`FILL-${i.Name}`)
        })
    }
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
                    <div className="w-full flex justify-center">
                        <div className={style.fillcom}>
                            {section1fills.map((obj,index)=><Fill key={index} need = {index !== 0} {...obj}/>)}
                        </div>
                    </div>
                </div>
                
            </Flip>
            
        <CButton onClick={()=>{clickHidden("FB-frame1-FORWARD");ehandle()}}> button next</CButton>
            <CButton onClick={()=>clickHidden("FB-frame1-BACKWARD")}> button back</CButton>
        </Cg2wrapper>
    </div>
}