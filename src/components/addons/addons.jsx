"use client"
import style from "./addons.module.css"
import { genId, LastIndex, mergeFunc, mergeText } from "../../app/add"
import React, { useEffect } from "react"

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


export function Flip({id,Name, className,List}){
    const buttonName = `FHB-${Name}`
    const list  = List
    const currentIName = "FLIP"
    const lastIndex = LastIndex(list)
    const childName = "FlipChildID"
    function FlipButtonFunc(){
        const Index = document.getElementById(`INDEX-${currentIName}`)
        const value = Number(Index.innerText)

    }
    return (
        <div className={mergeText(style.Flip,className)} id = {id} >
            {list.map((comp, index)=>
                React.cloneElement(comp,{
                    id:`${childName} ${index}`
                })
            )}
        <CButton id={buttonName} onClick={FlipButtonFunc} className={mergeText(style.FlipButtonClick,"NONE")}> </CButton>
        <INDEX name={currentIName} />
        </div>
    )
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