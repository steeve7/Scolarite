"use client"
import style from "./addons.module.css"
import { mergeFunc, mergeText } from "../../app/add"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export var isPageExempt = ()=>{
    var Exempt = false
    const PageExemptList = []
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
    return <section   className={mergeText(props.rev==true?style.g2wrapperReverse:style.g2wrapper,props.className)} style={
        styleg2
    } >
        {props.children}
    </section>
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


export function CButton({className,onClick,id,children,Style,ani = true}){
    return <div id={id} style={Style} className={mergeText(className,style.button,ani?style.btnani:"")} onClick={onClick}>{children}</div>
}
export function CSButton({className,onClick,id,children,Style,ani = true}){
    return <span id={id} style={Style} className={mergeText(className,style.button,ani?style.btnani:"")} onClick={onClick}>{children}</span>
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