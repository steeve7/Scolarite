"use client"
import style from "./addons.module.css"
import { CRange, genId, LastIndex, mergeFunc, mergeText } from "../../app/add"
import React, { useEffect, useRef, useState } from "react"
import { frame } from "framer-motion"
import tooltiptri from "./assets/tooltiptri.png"
import Image from "next/image"
const indexId = genId("b")
import { usePathname } from "next/navigation"

export var isPageExempt = ()=>{
    var Exempt = false
    const PageExemptList = ["signup","login"]
    var pathName = usePathname()
    PageExemptList.forEach(pageName=>{
      if (pathName.toLowerCase().includes(pageName.toLowerCase())){
        Exempt = true
      }
    })
    return Exempt
  }

export function G2Wrapper(props){
    var styleg2 =props.repel ? {
        // color: "white",
        paddingInline:" 9%",
        paddingBlock: "14%",
    }: {color:""}
    styleg2 = {
        ...styleg2
    }
    return <section className = {mergeText(style.g2wrapper,props.className)} style = {
        styleg2
    } >
        {props.children}
    </section>
}

export class State{
    
    states
    constructor(state = {}){
        this.states = state
    }
    set(value){
        try{
            this.states = value(this.states)
        }catch(e){
            this.states = value
        }
        
    }
    update(kv){
        /* Works only if "states" is a json Object */
        this.states = {
            ...this.states,
            ...kv
        }
    }
    get(){
        return this.states
    }
    toString(){
        return JSON.stringify(this.states)
    }
}


export function  INDEX ({name, value = 0}){
    const IndexName = `INDEX-${name}`
    return <span className="NONE" id={IndexName}>{value}</span>
}


export function HiddenButton({id,onClick}){
    return <div id={id} onClick={onClick} style={{display:"none"}}/>
}


export function clickHidden(id , click = true){
    const button = document.getElementById(id)
    if (window && click){
        button.click()
    }
    return button
    
}

export function CEDispatch(Name,Event){
    const CEventName = `CEVENT-${Name}`
    if (window){
            const el = document.getElementById(CEventName)
            el.dispatchEvent(Event)
    }
}
export function FADispatch(Event,excludedId=[""],excludedClass=[""]){
    if (window){
        const ListAll = document.querySelectorAll("html *")
        ListAll.forEach((el)=>{
            var excluded  = false
            if (excludedId.includes(el.id)){
                excluded = true
            }

            excludedClass.forEach(className=>{
                if (el.classList.contains(className)){
                    excluded = true
                }
            })
            if (!excluded){
                el.dispatchEvent(Event)
            }
            
        })
    }
}

export function Pd({pad=10}){
    return <span style={{width:`${pad}px`,display:"inline-block",backgroundColor:"transparent",color:"transparent"}} />
}

export function Radio({className,value,channel,valueListener,isdefault,onEvent,children,onClick,ref,...others}){
    const EventName = `RADIO-CHANNEL-EVENT-${channel}`
    const radioRef = useRef(null)
    function click(){
        FADispatch(new CustomEvent(EventName,{detail:{value:value}})) 
    }
    function listener(e){
        onEvent(radioRef.current)
        if (e.detail.value == value){
            valueListener(value,radioRef.current)
        }
        
    }
    useEffect(()=>{
        if (isdefault){
            click()
        }
    })
    return <div ref={radioRef} onClick={click} className={mergeText(className)} {...others}>
        {children}
        <CEventH Type={EventName} onEvent={listener} ></CEventH>
    </div>
}


export function CEventH({Name , Type, onEvent = function(){}}){
    const CEventName = `CEVENT-${Name}`
    const ref = useRef(null)
    useEffect(
        ()=>{
            const func = onEvent
            const type = Type
            const el = ref.current
            el.id = Name?CEventName:`CEVENT-${genId()}`
            el.addEventListener(type,(e)=>{
                func(e)
            })

        },[]
    )
    return <div ref={ref} style={{display:"none"}} ></div>

}




export function ToolTip({message}){
    const tipRef = React.useRef()
    var enter = false
    function Enter(e){
         var el = tipRef.current
         el.classList.add(style.showtooltip)
         var x = e.pageX
         var y = e.pageY
         enter = true
        
    }
    function Leave(){
        var el = tipRef.current
         el.classList.remove(style.showtooltip)
         enter = false
    }
    useEffect(()=>{
        var PARENTNAME = `tooltipparent-${Math.ceil(Math.random()*1000)}`
        var el = tipRef.current
        el.parentElement.classList.add(PARENTNAME) 
        const parent = document.querySelector(`.${PARENTNAME}`)
        parent.addEventListener("mouseenter",Enter)
        parent.addEventListener("mouseleave",Leave)
        parent.addEventListener("click",Leave)
        // Attach a mousemove event listener to the window
        parent.addEventListener('mousemove', (e) => {
            if(enter){var el = tipRef.current
            var x = e.pageX
            var y = e.pageY
            // console.log(x,y,enter)
            x = x-el.offsetWidth/2
            y = (y-el.offsetHeight)-20
            el.style.left = `${x}px `
            el.style.top = `${y}px `}
        });
            
    },[])
    return <div  className={style.tooltip} ref={tipRef}  >
            <div className={style.tooltiptext}>{message} </div>
            <Center>
                <Image src={tooltiptri} alt="arrow" className={style.tooltipimg}></Image>
            </Center>
    </div>
    // </div>
}




export function Flip({id,Name, className, children,Type}){
    const [totalIndex, setTotalIndex] = useState(0) 
    const forwardBName = `FB-${Name}-FORWARD`
    const backwardBName = `FB-${Name}-BACKWARD`
    const [index,setIndex] = useState(0)
    const frameID = `FB-${Name}`

    function ForwardButtonFunc(){
        
        indexTo(index+1)

    }
    function BackwardButtonFunc(){
        
        indexTo(index-1)

    }
    function indexTo(index){
        var inputIndex = index
        var frame = document.getElementById(frameID)
        var frameParent = frame.parentElement
        var parentWidth = frameParent.offsetWidth
        var frameWidth = frame.scrollWidth
        var IndexPosX = []
        var TotalIndex = (frameWidth/parentWidth)
        var assumeIndex = Math.ceil(TotalIndex)
        CRange(0,assumeIndex).forEach(index=>{
                var x = index*(frameWidth/TotalIndex)
                if (x > frameWidth){
                    return
                }
                IndexPosX.push(x)
        })
        if (inputIndex < assumeIndex){
            scroll = IndexPosX[inputIndex]
            scroll = (scroll/parentWidth)*100
            frame.style.transform = `translateX(-${scroll}%)`
        }
        setIndex(()=>inputIndex)
        // console.log("name:",Name,"index:",inputIndex,"IndexPosX:",IndexPosX,"frame:",frameID,"frameWidth:",frameWidth,"parentWidth:",parentWidth,"assumeIndex",assumeIndex)
    }
    function DispatchFunc(e){
        indexTo(e.detail.index)
        
    }
    return (
        <div className={mergeText(style.Flip,className)} id = {id} >
            <div id={frameID}  className={style.FlipInnerFrame}>
                {children}
            </div>
        <HiddenButton id={forwardBName} onClick={ForwardButtonFunc}/>
        <HiddenButton id={backwardBName} onClick={BackwardButtonFunc}/>
        <CEventH Name={`FLIP-${Name}`} Type={Type} onEvent={DispatchFunc}  />
        </div>
    )
}



export function Cg2wrapper({className,id,children,paddingInline = "10px", paddingBlock = "20px",height = "100%"}){
    return <div id={id} className={mergeText(style.cg2w,className)} style={{
        paddingInline:paddingInline
        ,paddingBlock:paddingBlock
        ,height:height
        }}>
        {children}
    </div>
}

export function Center(props){
    return <div className={mergeText(style.center,props.className)}>{props.children}</div>
}

export function CInput({className,placeholder,type="input",...props}){
    useEffect(()=>{
        document.querySelectorAll(`.${style.w3sit}`).forEach(e=>{
            e.click()
        })
    },[])
    className = mergeText(className,style.custominput)
    const attr = {
        placeholder:placeholder,
        className:className,
        ...props
    }
    
    return type=="input"? <input {...attr} fdprocessedid = "CInput" />  : <textarea {...attr}fdprocessedid = "CInput"/>
}


export function CButton({className,onClick,id,children,ani = true , tooltip = undefined}){
    return <div id={id} className={mergeText(className,style.button,ani?style.btnani:"")} onClick={onClick}>
        {children}
        {tooltip && <ToolTip message={tooltip}/>}
    </div>
}


export function CLink({className,href,onClick,id,children,target,ani = true}){
    const linkFunc = ()=>{window.open(href,String(target).toLowerCase()).focus()}
    return <div id={id} className={mergeText(className,style.button,ani?style.btnani:"")}  onClick={mergeFunc(onClick,linkFunc)}>{children}</div>
}

export function AInput({label, placeholder , className = "", inClassName = "",type="input"}){
    return <div className={mergeText("flex flex-col gap-2 ",style.ainputwrapper,className)}>
        <div className={style.ainputlabel}>
            {label}
        </div> 
        <div className={style.ainput}>
            <CInput placeholder={placeholder} type = {type} className={mergeText(style.custominput,inClassName)} ></CInput>
        </div>
    </div>
}

export function Title(props){
    return <div className={mergeText(props.className,style.title)}>{props.children}</div>
}
export function rclick (e){
    const className = Array.from(e.target.classList).find((value,any)=> String(value).includes("w3switchitem"))
    document.getElementById("w3before").style.left = getElementPositionRelativeToParent(e.target).left + "px"
    document.getElementById("w3before").style.width = e.target.offsetWidth + "px"
    document.getElementById("w3before").style.height = e.target.offsetHeight + "px"
    document.querySelectorAll(`.${className}`).forEach(el => el.style.color = "rgba(40, 46, 64, 1)")
    e.target.style.color = "white"
}
export function getElementPositionRelativeToParent(element) {
    const elementRect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();
  
    return {
      top: elementRect.top - parentRect.top,
      left: elementRect.left - parentRect.left,
    };
  }