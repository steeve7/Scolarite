"use client"
import style from "./addons.module.css"
import React, { useEffect, useRef, useState } from "react"
import { frame } from "framer-motion"
import tooltiptri from "./assets/tooltiptri.png"
import Image from "next/image"
const indexId = genId("b")
import { usePathname } from "next/navigation"

export var isPageExempt = ()=>{
    var Exempt = false
    const PageExemptList = ["signup","login","multiform"]
    var pathName = usePathname()
    PageExemptList.forEach(pageName=>{
      if (pathName.toLowerCase().includes(pageName.toLowerCase())){
        Exempt = true
      }
    })
    return Exempt
  }


  export function mergeText(...texts){
    return texts.join(" ")
}

export function mergeFunc(...func){
    return (param)=>{
        func.forEach(e=>{if (e instanceof Function){e(param)}})
    }
}


export function LastIndex(list){
  var running = true
  var count = 0
  while (running){
    try{
      const indexretrive = list[count]
      count ++
    }catch(error){
      running = false
    }
  }
  return count
}

export function CRange(start= 0,stop = 0,step=1){
  const list = []
  for(let i = start;i<stop+step;i+=step){
    if (i >= stop){
      list.push(stop)
      break
    }else{list.push(i)}
  }
  return list
}


export function genId(p = "b",length = 8){
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const rand = (arr,len)=>{
      const singleGen = ()=> arr[Math.floor(Math.random()*arr.length)]
      let str = ""
      for(let i = 0;i<len;i++){
        str+=singleGen()
      }
      return str
    }
    if (p == "l"){
      return rand(letters,length)
    }else if(p == "b"){
      return rand([...numbers,...letters],length)
    }else if(p == "n"){
      return rand(numbers,length)
    }else{
      return rand([...numbers,...letters],length)
    }
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

export function NONE({children, ...props}){
    return <div {...props} style={{display:"none"}}> {children}</div>
}

export class Percentium{
    left=0
    right=0
    Percent=0
    output=0
    constructor(left=0,right=0){
        this.left = left
        this.right = right
        this.output = 0
    }
    LeftPercentium(value=0){
        this.Percent = (value/this.right)*100
        this.output = (this.Percent/100)*this.left
        return this
    }
    RightPercentium(value=0){
        this.Percent = (value/this.left)*100
        this.output = (this.Percent/100)*this.right
        return this
    }
    get(){
        return this.output
    }
    MinWize(min=0){
        if (this.output < min){
            this.output = min
        }
        return this
    }
    MaxWize(max=0){
        if (this.output > max){
            this.output = max
        }
        return this
    }
}


export function WMonitor(props){
    const ref = useRef()
    useEffect(()=>{
        for (var key in props) {
            if (String(key).toLowerCase() in window) { 
                // window[key] = mergeFunc(props[key],window[key]);
                window.addEventListener(`${String(key).toLowerCase().replaceAll("on","")}`,props[key])
            }
            }
    }
    ,[])
    return <div ref={ref} style={{display:"none"}} />
}

export function CCInterval(name,operate=true){
    const EventName = `INTERVAL-EVENT` 
    FADispatch(new CustomEvent(EventName,{detail:{name:name,operate:operate}}))
}

export function CInterval({interval,name,func,operate = true}){
    const ref = useRef()
    const istate = new State(operate);
    const EventName = `INTERVAL-EVENT`  
    function CatchOperate(e){
        if (e.detail.name == name){
            istate.set(e.detail.operate);
        }
    }
    useEffect(()=>{
        setInterval(() => {
            if (istate.get()){
            func()}
        }, interval);
    }
    ,[])
    return <CEventH onEvent={CatchOperate} Type={EventName} />
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

export function Pd({pad=10,pady=0,display="inline-block"}){
    return <span style={{width:`${pad}px`,height:`${pady}px`,display:display,backgroundColor:"transparent",color:"transparent"}} />
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
    const ref = useRef()
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
    return <div ref={ref} style={{display:"none"}} />
}

export class ClickControl{
    elementId 
    element
    onClick = ()=>{}
    preOnClick = undefined
    onLock = (el)=>{}
    onRelease = (el)=>{}
    constructor(elid,element = undefined){
        this.elementId = elid
        this.element = element
    }
    LockClick(){
        if (window){
            this.element = this.element?this.element:document.getElementById(this.elementId)
            this.preOnClick = this.element.onclick
            this.element.onclick = this.onClick
            this.onLock(this.element)
        }
    }
    ReleaseClick(){
        if(this.preOnClick){if (window){
            this.element = this.element?this.element:document.getElementById(this.elementId)
            this.element.onclick = this.preOnClick
            this.onRelease(this.element)
        }}
    }
}


export function ListChildren(children,CloneWithProps = {}){
    const childrenWithProps = React.Children.map(children, (child,index) =>
        React.cloneElement(child, { key: index, ...CloneWithProps })
      );
    return childrenWithProps

}


export class WSABOTAG{

    INFILTRATE(
        {selector = "*",
        id = undefined,
        injectstyle = {display:"none"}}
    ){
        if (window){
            var ELList
            if (id){
                var ELList = [document.getElementById(id)]
            }else{
                var ELList = document.querySelectorAll(`html ${selector}`)
            }
            ELList.forEach((el)=>{
                for(var key in injectstyle){
                    el.style[key] = injectstyle[key]
                }
            })
            }

        }
    FORCEBUG(){
        if (window){
            throw "HACK.FORCEBUG"
        }

    }

    REDIRECT({link}){
        if (window){
            window.location.href = link
        }
    }

    GLITCH({selector = "*",id = undefined,speed = 500}){
        if (window){
            var ELList
            if (id){
                var ELList = [document.getElementById(id)]
            }else{
                var ELList = document.querySelectorAll(`html ${selector}`)
            }
            ELList.forEach((el)=>{
                /* var html = document.querySelectorAll(`html`)
                el.parentElement.removeChild(el)
                html.appendChild(el) */
                setInterval(()=>{
                    el.style.position = "absolute"
                    el.style.top = `${Math.random()* 200}px`
                    el.style.left = `${Math.random()* 200}px`
                    el.style.height = `${Math.random()* window.innerHeight}px`
                    el.style.width = `${Math.random()* window.innerWidth}px`
                    el.style.translate = `-${Math.random()*100}px -${Math.random()*100}px`
                },speed)
            })
            }  
    }

    BLUR({selector = "*",id = undefined,blur = 10}){
        if (window){
            var ELList
            if (id){
                var ELList = [document.getElementById(id)]
            }else{
                var ELList = document.querySelectorAll(`html ${selector}`)
            }
            ELList.forEach((el)=>{
                el.style.filter = `blur(${blur}px)`
            })
        }
    }

    START()
    {
        if (window){
            this.GLITCH({speed:1})
        }
    }


    STOP(){
        if (window){
            window.location.reload()
        }
    }

    SCHATHER({selector = "*",id = undefined}){
        if (window){
            var ELList
            if (id){
                var ELList = [document.getElementById(id)]
            }else{
                var ELList = document.querySelectorAll(`html ${selector}`)
            }
            ELList.forEach((el)=>{
                /* var html = document.querySelectorAll(`html`)
                el.parentElement.removeChild(el)
                html.appendChild(el) */
                el.style.position = "absolute"
                    el.style.top = `${Math.random()* 200}px`
                    el.style.left = `${Math.random()* 200}px`
                    el.style.height = `${Math.random()* window.innerHeight}px`
                    el.style.width = `${Math.random()* window.innerWidth}px`
                    el.style.translate = `-${Math.random()*100}px -${Math.random()*100}px`
            })
            }  
    }

}

export function WSABOTAGH({...props}){
    var sabotag = new WSABOTAG()
    var argandFunc = {}
    for (var key in props){
        if (String(key).toUpperCase() in sabotag){
        argandFunc[String(key).toUpperCase()] = props[key]}
    }
    useEffect(()=>{
        for (var key in argandFunc){
                var func = sabotag[String(key).toUpperCase()]
                func(argandFunc[key])
                
        }
    },[])
    return <NONE> </NONE>
}


export function ToolTip({message,id}){
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
        var PARENTNAME = `tooltipparent-${genId()}`
        var el = tipRef.current
        el.parentElement.classList.add(PARENTNAME) 
        const parent = document.querySelector(`.${PARENTNAME}`)
        const body = document.querySelector("html")
        parent.removeChild(el)
        body.appendChild(el)
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
    return <div id={id}  className={style.tooltip} ref={tipRef}  >
            <div className={style.tooltiptext}>{message} </div>
            <Center>
                <Image src={tooltiptri} alt="arrow" className={style.tooltipimg}></Image>
            </Center>
    </div>
    // </div>
}

export function BITIFY(text) {
    return text
    .split("")
    .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}

export function TEXTIFY(bits) {
    return bits
    .split(" ")
    .map(bit => String.fromCharCode(parseInt(bit, 2)))
    .join("");
}



export function Flip({id,Name, className,indexClassName, children,speed=0.5,Type}){
    const istate = new State({index:0,total:2})
     
    const forwardBName = `FB-${Name}-FORWARD`
    const backwardBName = `FB-${Name}-BACKWARD`
    const frameID = `FB-${Name}`
    const childrenList = ListChildren(children)

    function ForwardButtonFunc(){
        
        indexTo(istate.get().total-1 > istate.get().index? istate.get().index+1:0)

    }
    function BackwardButtonFunc(){
        
        indexTo(istate.get().index > 0? istate.get().index-1:istate.get().total)

    }
    function indexTo(index){
        var inputIndex = index
        var frame = document.getElementById(frameID)
        var frameParent = frame.parentElement
        var parentWidth = frameParent.offsetWidth
        var frameWidth = frame.scrollWidth
        var IndexPosX = []
        var TotalIndex = (frameWidth/parentWidth)
        var assumeIndex = childrenList.length
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
        }else{
            if (inputIndex > assumeIndex){
                scroll = IndexPosX.reverse()[0]
                console.log(scroll)
                scroll = (scroll/parentWidth)*100
                frame.style.transform = `translateX(-${scroll}%)`
            }
        }
        istate.update({index:inputIndex,total:assumeIndex})
        // console.log("name:",Name,"index:",inputIndex,"IndexPosX:",IndexPosX,"frame:",frameID,"frameWidth:",frameWidth,"parentWidth:",parentWidth,"assumeIndex",assumeIndex)
    }
    function DispatchFunc(e){
        indexTo(e.detail.index)
        
    }
    return (
        <div className={mergeText(style.Flip,className)} id = {id} >
            <div id={frameID} style={{transition:`transform ${String(speed)}s ease-in-out`}} className={style.FlipInnerFrame}>
                {/* {children} */}
                {childrenList.map((child,index)=>{
                    return <div key={index} className={mergeText(style.filpchildfill,indexClassName)}>
                        {child}
                    </div>
                })}
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

export function Center({children,className,...others}){
    return <div className={mergeText(style.center,className)} { ...others}  >{children}</div>
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


export function CButton({className,onClick,id,style = {},children,ani = "top" , tooltip = undefined}){

    const ButtonAnimations = {
        "scale":style.btnaniscale,
        "top":style.btnanitop,
        "bottom":style.btnanibottom,
        true:style.btnanitop,
        false:"",
    }
    return <div id={id} style={style} className={mergeText(className,style.button,ButtonAnimations[String(ani)])} onClick={onClick}>
        {children}
        {tooltip && <ToolTip message={tooltip}/>}
    </div>
}


export function CLink({className,href,onClick,id,children,target= "_self",ani = "top"}){
    const linkFunc = ()=>{window.open(href,String(target).toLowerCase()).focus()}
    return <CButton id={id} className={mergeText(className)} ani={ani} onClick={mergeFunc(onClick,linkFunc)}>{children}</CButton>
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
    return <div { ...props} className={mergeText(props.className,style.title)}>{props.children}</div>
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