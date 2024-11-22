"use client"
import style from "./addons.module.css"
import { CRange, genId, LastIndex, mergeFunc, mergeText } from "../../app/add"
import React, { useEffect, useState } from "react"
import { frame } from "framer-motion"

const indexId = genId("b")
export function G2Wrapper(props){
    var styleg2 =props.repel ? {
        // color: "white",
        paddingInline:" 9%",
        paddingBlock: "14%",
    }: {color:""}
    styleg2 = {
        ...styleg2
    }
    return <section   className={mergeText(style.g2wrapper,props.className)} style={
        styleg2
    } >
        {props.children}
    </section>
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

export function CEventH({Name , Type, onEvent = function(){}}){
    const CEventName = `CEVENT-${Name}`
    useEffect(
        ()=>{
            const func = onEvent
            const type = Type
            const el = document.getElementById(CEventName)
            el.addEventListener(type,(e)=>{
                func(e)
            })

        }
    )
    return <div id={CEventName} style={{display:"none"}} ></div>

}


export function Flip({id,Name, className, children,Type}){
    const [totalIndex, setTotalIndex] = useState(0) 
    const forwardBName = `FB-${Name}-FORWARD`
    const backwardBName = `FB-${Name}-BACKWARD`
    const [index,setIndex] = useState(0)
    const frameID = style.FlipInnerFrame

    function ForwardButtonFunc(){
        var nowIndex = index < totalIndex ? index+1 : totalIndex
        indexTo(nowIndex)

    }
    function BackwardButtonFunc(){
        var nowIndex = index <= 0 ? index-1 : totalIndex
        indexTo(nowIndex)

    }
    function indexTo(index){
        const inputIndex = index
        const frame = document.getElementById(frameID)
        const frameParent = frame.parentElement
        const parentWidth = frameParent.offsetWidth
        const frameWidth = frame.scrollWidth
        const IndexPosX = []
        const TotalIndex = (frameWidth/parentWidth)
        const assumeIndex = Math.floor(TotalIndex)
        CRange(0,assumeIndex).forEach(index=>{
                IndexPosX.push(index*(frameWidth/TotalIndex))
        })
        if (inputIndex< assumeIndex){
            scroll = IndexPosX[inputIndex]
            scroll = (scroll/parentWidth)*100
            frame.style.transform = `translateX(-${scroll}%)`
        }
        setTotalIndex(()=>assumeIndex)
        setIndex(()=>inputIndex)
    }
    function DispatchFunc(e){
        indexTo(e.detail.index)
        
    }
    return (
        <div className={mergeText(style.Flip,className)} id = {id} >
            <div id={frameID}  className={frameID}>
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


export function CButton({className,onClick,id,children,ani = true}){
    return <div id={id} className={mergeText(className,style.button,ani?style.btnani:"")} onClick={onClick}>{children}</div>
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