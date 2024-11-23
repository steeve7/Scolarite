"use client"
import { CButton, CEDispatch, Center, CEventH, Cg2wrapper, clickHidden, FADispatch, Flip, ToolTip } from "@/components/addons/addons"
import style from "./style.module.css"
import frame1i1 from "./assets/frame1i1.png"
import frame2i1 from "./assets/frame2i1.png"
import frame3i1 from "./assets/frame3i1.png"
import frame4i1 from "./assets/frame4i1.png"
import frame5i1 from "./assets/frame5i1.png"
import frame6i1 from "./assets/frame6i1.png"
import frame7i1 from "./assets/frame7i1.png"
import frame8i1 from "./assets/frame8i1.png"
import sliderthumbimg from "./assets/sliderthumb.png"
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
        else{
            setdone(()=> false)
        }
    // console.log(barName,End,Start,index)
    }
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

function Innerframe1({state,ehandle}){
    const [index, setIndex] = state
    const Name = "IF1"

    return <Flip  Type={EventList.multiFormMove().type}   Name={Name}>
        <div className={style.if1}>
            <div  className={style.if1title}>
            What's your target jamb score? 
            </div>
            <Slider/>
            <div className={style.if1button1w}>
                <CButton className={style.if1button1} onClick={()=>{setIndex(1);ehandle()}}>Next step</CButton>
            </div>
        </div>

        <div className={style.if1}>
        <div  className={style.if1title}>
            What's your target School? 
            </div>
            <Center><input type="text" className={style.ifts} placeholder="Enter school name" /></Center>
           <br />
           <br />
           <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{setIndex(0);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1} onClick={()=>{setIndex(2);ehandle()}}>Next step</CButton>
            </div>
        </div> 

        <div className={style.if1}>
        <div  className={style.if1title}>
        Choose your target Department
            </div>
            <Center><input type="text" className={style.ifts} placeholder="Enter school name" /></Center>
           <br />
           <br />
           <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{setIndex(2);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1} onClick={()=>{setIndex(3);ehandle()}}>Next step</CButton>
            </div>
        </div>
        
        
    </Flip>
}

export default function Page(props){
    const [Index, setIndex] = useState(0)
    const FilllistAssign = ["Academic Goals", "Current Academic Status", "Study Preference", "Customization", "Congratulations"]
    var section1fills = CRange(0,4).map((value,index)=> {return{Name:`fill${value}`, Index:value+1,purpose:{start:value,end:value+1}}})
    const ImageList = [frame1i1,frame2i1,frame3i1,frame4i1,frame5i1,frame6i1,frame7i1,frame8i1]
    useEffect(function(){
        document.getElementById("HEADER").style.display = "none"
        // document.querySelector("body").style.overflow = "hidden"
        // document.getElementById("FOOTER").style.display = "none"
    },[])
    function ehandle(){
        // console.log(`- ${Math.floor(Math.random()*1000)} - `,Index)
        var Event = EventList.multiFormMove({index:Index})
        /* section1fills.map((i)=>{
            CEDispatch(`FILL-${i.Name}`,Event)
        })
        CEDispatch("FLIP-frame1",Event)
         */
        FADispatch(Event)
    }
    return <div className={style.main}>
        <Cg2wrapper className={style.wrapper}>
            <Flip Type={EventList.multiFormMove().type} className={style.side1}  Name={"frame1"}>
            {/* <ToolTip message={"message success"} /> */}

                {ImageList.map((image,i)=>
                    <div key={i} className={style.imagewrap}>
                        <Image src={image} alt="alt" style={{width:"100%"}}></Image>
                    </div>
                )}
            </Flip>
            <Flip className={style.side2}  Name={"frame2"}>
                <div className={mergeText(style.frame2section,style.frame2section1)}>
                    <div className={mergeText(style.frame2section1titlewrapper)}>
                        <div className={style.frame2section1title}>
                        Personalize Your Learning Path
                        </div>
                        <div className={style.frame2section1motto}>
                        Help us create a focused study plan tailored just for you.
                        </div>
                    </div>
                    <div className="w-full flex justify-center mb-4">
                        <div className={style.fillcom}>
                            {section1fills.map((obj,index)=><Fill key={index} need = {index !== 0} {...obj}/>)}
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className={mergeText(style.fillcom,style.fillassigncom)}>
                            {FilllistAssign.map((obj,index)=> <div key={`index-${index}`} className={style.fillassign}>{obj}</div>)}
                        </div>
                    </div>
                    <div className={style.notetext}>
                        Please ensure you fill in the correct information to help us tailor your JAMB preparation effectively.
                    </div>
                    <br />
                <Innerframe1 state = {[Index,setIndex]} ehandle = {ehandle} />
        {/* <CButton onClick={()=>{ehandle()}}> button next</CButton> */}

                </div>
            </Flip>
            
        </Cg2wrapper>
    </div>
}





function Slider(prop){
    useEffect(()=>{
        
const parentKey = document.getElementById("parentKey")
const value = document.getElementById("value-slider")
// const snap = document.getElementById("snap-audio")
function getElPosToParent(element) {
    const elementRect = element.getBoundingClientRect();
    const elparent = element.parentElement
    const parentRect = elparent.getBoundingClientRect();
    var top = elementRect.top - parentRect.top
    var left = elementRect.left - parentRect.left
    var topPercent = ((top/elparent.offsetHeight)*100)
    var leftPercent = ((left/elparent.offsetWidth)*100)
    return {
      top: top,
      left: left,
      topPercent:topPercent,
      leftPercent:leftPercent
    };
  }

class Key{
    index
    style
    varyStyle
    self
    trigger

    getPosToParent() {
        const element = this.self
        const elementRect = element.getBoundingClientRect();
        const elparent = element.parentElement
        const parentRect = elparent.getBoundingClientRect();
        var top = elementRect.top - parentRect.top
        var left = elementRect.left - parentRect.left
        var topPercent = ((top/elparent.offsetHeight)*100)
        var leftPercent = ((left/elparent.offsetWidth)*100)
        return {
          top: top,
          left: left,
          topPercent:topPercent,
          leftPercent:leftPercent
        };
      }
    

    constructor(index){
        this.index = index
        this.self = document.createElement("div")
        this.self.id = `slider-${this.index}-key`
        this.self.className = `slider-key`
        this.self.style.height = "50%"
        const height = 20
        const width = 2
        this.style = {
            display:"block",
            minWidth:`${width}px`,
            height:`${height}%`,
            backgroundColor:"rgba(215, 216, 217, 1)",
            borderRadius:"5px"
        }
        if (index%5 == 0){
            this.style.minWidth = `${width*2}px`
            this.style.height = `${height*2}%`
            this.style.backgroundColor = "rgba(186, 187, 190, 1)"
        }
        Object.assign(this.self.style,{...this.style})

    }


}

const before = document.createElement("div")
const after = document.createElement("div")
parentKey.append(before)
before.style.display = "block"
before.style.minWidth = "50%"

var keys = []

for (var i= 0; i<401;i++){
    var key = new Key(i)
    parentKey.appendChild(key.self)
    keys.push(key)

}
parentKey.append(after)
after.style.display = "block"
after.style.minWidth = "50%"

parentKey.onscroll = ()=>{
    keys.forEach(key=>{
        if (key.getPosToParent().leftPercent <= 51 && key.getPosToParent().leftPercent >= 49){
            value.innerText = String(key.index)
        /*     snap.currentTime = 0
            snap.volume = 0.34
            snap.play() */
            parentKey.scrollLeft += 50 - key.getPosToParent().leftPercent

        }
        if (key.index == 400){
            if (key.getPosToParent().leftPercent <= 52 ){
                value.innerText = String(key.index) 
            }
        }
        if (key.index == 0){
            if (key.getPosToParent().leftPercent >= 52 ){
                value.innerText = String(key.index) 
            }
        }
    })
}
var inc = 0
function INC(){
    setTimeout(()=>{
        inc++
        parentKey.scrollBy(keys[inc> 9?inc-9:inc].getPosToParent().left ,0)
            if (inc < 200){
                INC()
            }
    },1)}
INC()

        },[])
    return   <Center>
        <div style={{
            width:"100%",
            maxWidth:"400px",
            minHeight:"240px",
            overflowX:"hidden",
            position:"relative",
            }}>
            <div className="text" id="value-slider" style={{width: "100%", textAlign:"center", fontSize: "50px",fontWeight:"bold",}}>0</div>
            <div className={style.slider} id="parentKey"style ={{
                width:"100%",
                height:"150px",
                display:"flex",
                alignItems:"center",
                overflowY:"hidden",
                overflowX:"auto",
                gap:"20px",
                boxSizing:"border-box",
                paddingInline:"20px",
            }}>
            </div>
            <Image src={sliderthumbimg} alt="weghjktrewetkl" className="before" id="keyThumb" style={{
                position:"absolute",
                height:"120px",
                width:"auto",
                left:"50%",
                top:"60%",
                translate:"-50% -50%",
             }}/>
            {/* <audio src="app\assets\snap.mp3" style={{display: "none",}} id="snap-audio"></audio> */}
        </div>
    </Center>
}