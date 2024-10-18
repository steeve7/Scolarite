import style from "./addons.module.css"
import { mergeText } from "../add"

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


export function AInput({label, placeholder , className , inClassName,type="input"}){
    return <div className={mergeText("flex flex-col gap-2",style.ainputwrapper,className)}>
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