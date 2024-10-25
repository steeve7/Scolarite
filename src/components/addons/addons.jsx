"use client"
import style from "./addons.module.css"
import { mergeText } from "../../app/add"

export function G2Wrapper(props){
    return <section  className={mergeText(props.className,style.g2wrapper)} >
        {props.children}
    </section>
}
export function CInput({className,placeholder,...props}){
    className = mergeText(className,style.custominput)
    const attr = {
        placeholder:placeholder,
        className:className,
        ...props
    }
    const inputType = props.type || "input"
    if(inputType === "input"){
        return <input {...attr}/>
    }
    if(inputType === "textarea"){
        return <textarea {...attr}/>
    }
}

export function CButton({className,onClick,children,ani = true}){
    return <div className={mergeText(className,style.button,ani?style.btnani:"")} onClick={onClick}>{children}</div>
}

export function AInput({label, placeholder , className , inClassName,type="input"}){
    return <div className={mergeText("flex flex-col gap-2 ",style.ainputwrapper,className)}>
        <div className={style.ainputlabel}>
            {label}
        </div>
        <div className={style.ainput}>
            <CInput placeholder={placeholder} type={type} className={mergeText(style.custominput,inClassName)} ></CInput>
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