"use client"
import styles from "./addons.module.css"
import React, { useEffect, useReducer, useRef, useState } from "react"
import { frame } from "framer-motion"
import tooltiptri from "./assets/tooltiptri.png"
import Image from "next/image"
const indexId = genId("b")
import { usePathname } from "next/navigation"
import { ListChildren } from "./addonsServer"

// for controling header and footer
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

// for get 
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

// for range array generation 
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


// generates unique id
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
    return <section className = {mergeText(styles.g2wrapper,props.className)} style = {
        styleg2
    } >
        {props.children}
    </section>
}

//  clientable
export function Clientable(func){
    var interval
    var isClientable = false
    var speed = new State(0)
    var loop = new State(0)
    var interval = setInterval(() => {
        speed.set(speed.get()+1)
        loop.set(loop.get()+1)
        try{if (window){
            clearInterval(interval)
            isClientable = true
        }}catch(e){}
        if (isClientable){
            func()
        }
        
    }, 1);
}

export function RClientable(func){
    useEffect(()=>{
        Clientable(func)
    },[])
}

// for hiding comps
export function NONE({children, ...props}){
    return <div {...props} style={{display:"none"}}> {children}</div>
}
// for generating propotional values between two max
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



export const addonsComplex = {
    //# "NO GO" AREA
    // for updating a comment
    useUpdate(){
        const [, forceUpdate] = useReducer(x => x + 1, 1);
            return forceUpdate;
    },

    ScrollIntoView({selector = undefined, id = undefined}){
        var el
        if (selector){
            el = document.querySelector(selector)
        }else{
            el = document.getElementById(id)
        }
        console.log(el)
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
          })
        
    },
    // a custom useState that solves, deep nesting
    State:class{
        states
        onChange = ()=>{}
        onGet = ()=>{}
        forceUpdate 

        constructor(state = {},forceChange=false){
            this.states = state
            this.forceUpdate =  forceChange?addonsComplex.useUpdate():()=>{};
        }

        forceUpdateInit(){
            this.forceUpdate =  addonsComplex.useUpdate();

        }

        set(value){
            if (value instanceof Function){
                this.states = value(this.states)
            }else{
                this.states = value
            }
            
            this.onChange()
            this.forceUpdate()
            return this
        }
        update(kv){
            /* Works only if "states" is a json Object */
            this.states = {
                ...this.states,
                ...kv
            }
            this.onChange()
            this.forceUpdate()
            return this
        }
        get(){
            this.onGet()
            return this.states
        }
        toString(){
            return JSON.stringify(this.states)
        }
    },
    
    // ! NOT FOR USES 
    WSABOTAG:class {

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
        RELOAD(){
            if (window){
                window.location.reload()
            }
        }

        REDIRECT({link}){
            if (window){
                window.location.href = link
            }
        }

        GLITCH({selector = "*",id = undefined,speed = 0.5}){
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
                    },Math.floor(speed*1000))
                })
                }  
        }

        BLUR({selector = "*",id = undefined,value = 10}){
            this.INFILTRATE({selector:selector,id:id,injectstyle:{filter:`blur(${value}px)`}})
        }
        OPACITY({selector = "*",id = undefined,value = 0.5}){
            this.INFILTRATE({selector:selector,id:id,injectstyle:{opacity:`${value}`}})
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

    },

    WSABOTAGH ({...props}){
        var sabotag = new addonsComplex.WSABOTAG()
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
    },


    useRecognition ({
        lang = 'en-US', 
        interimResults = false, 
        maxAlternatives = 1,
        onResult,
        onError,
        onStart,
        onEnd
    } = {}) {
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            console.error('Web Speech API is not supported in this browser.');
            alert('Your browser does not support Speech-to-Text.');
            return;
        }
    
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
    
        // Set properties
        recognition.lang = lang;
        recognition.interimResults = interimResults;
        recognition.maxAlternatives = maxAlternatives;
    
        // Event listeners
        recognition.onstart = () => {
            console.log('Speech recognition started.');
            if (onStart) onStart();
        };
    
        recognition.onspeechend = () => {
            console.log('Speech recognition ended.');
            recognition.stop();
            if (onEnd) onEnd();
        };
    
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('Transcript:', transcript);
            if (onResult) onResult(transcript);
        };
    
        recognition.onerror = (event) => {
            console.error('Error occurred:', event.error);
            if (onError) onError(event.error);
        };
    
        // Start recognition
        recognition.start();
    },
    
    FADispatch(Event,excludedId=[""],excludedClass=[""]){
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
    ,FIDispatch(Event,selector = "*"){
        if (window){
            
            const ListAll = document.querySelectorAll(`.${selector}`)
            ListAll.forEach((el)=>{
                el.dispatchEvent(Event)
            })
            // console.log(ListAll)
        }
    }
    ,CEventXType:"CEventX"
    ,CEventX(channel,data = {}){return new CustomEvent(addonsComplex.CEventXType,{detail:{channel:channel,data:data}})}
    ,XADispatch(channel,data = {}){addonsComplex.FIDispatch(addonsComplex.CEventX(channel,data),addonsComplex.CEventXType)}
    ,CEventXH({channel , onEvent = function(){}}){
        const ref = useRef()
        useEffect(
            ()=>{
                const func = onEvent
                const type = addonsComplex.CEventXType
                const el = ref.current
                el.id = `CEVENTX-${genId()}`
                el.addEventListener(type,(e)=>{
                    if (e.detail.channel == channel){
                        func(e)

                    }
                })
    
            },[]
        )
        return <div ref={ref} className={mergeText(addonsComplex.CEventXType)} style={{display:"none"}} />
    },

    CEXModel:class{
        uniType
        constructor(uniType){
            this.uniType = uniType

        }
        CEventX(channel,data = {}){return new CustomEvent(this.uniType,{detail:{channel:channel,data:data}})}
        FIDispatch(Event,selector = "*"){
            if (window){
                
                const ListAll = document.querySelectorAll(`.${selector}`)
                ListAll.forEach((el)=>{
                    el.dispatchEvent(Event)
                })
                // console.log(ListAll)
            }
        }

        CEXDispatch(channel,data = {}){this.FIDispatch(this.CEventX(channel,data),this.uniType)}

        CEventXH({channel,self, Public = function(){} , onEvent = function(){}}){
            self = this?this:self
            const ref = useRef()
            useEffect(
                ()=>{
                    const func = onEvent
                    const type = self.uniType
                    const el = ref.current
                    el.id = `CEVENTX-${genId()}`
                    el.addEventListener(type,(e)=>{
                        Public(e)
                        if (e.detail.channel == channel){
                            func(e)
    
                        }
                    })
        
                },[]
            )
            return <div ref={ref} className={mergeText(self.uniType)} style={{display:"none"}} />
        }
    }

    //# INCOMPLETE
    ,Mic({listenerId,channel}){
        const ref = useRef()

    },
    

}
export const CEXModel = addonsComplex.CEXModel
export const State = addonsComplex.State

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

export function CCInterval(channel,operate=true){
    const EventName = `INTERVAL-EVENT` 
    addonsComplex.XADispatch(channel,{operate:operate})
}

export function CInterval({interval,channel,func,operate = true}){
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
    return <CEventXH onEvent={CatchOperate} channel={channel} />
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
    addonsComplex.FADispatch(Event,excludedId,excludedClass)
}

export function Pd({pad=10,pady=0,display="inline-block"}){
    return <span style={{width:`${pad}px`,height:`${pady}px`,display:display,backgroundColor:"transparent",color:"transparent"}} />
}

export function Radio({className,value,channel,valueListener,isdefault,onEvent,children,onClick,ref,...others}){
    const EventName = `RADIO-CHANNEL-EVENT-${channel}`
    const radioRef = useRef(null)
    const [hasdef,setDef] = useState(isdefault)
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
        if (hasdef){
            click()
            setDef(false)
        }
    })
    return <div ref={radioRef} onClick={click} className={mergeText(className,styles.radio)} {...others}>
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



export function Draggable({
    className,
    children,
    id, 
    Public,
    channel = "all",
    dragStart = ()=>{},
    drop = ()=>{},
    currentListener = ()=>{},
    ...props
}){
    const ref = useRef()
    var uniid = null
    const DropEventName = `DROP-${channel}`
    RClientable(()=>{
        var draggable = ref.current
        uniid = uniid || genId("b")
        var classname = `draggable-${channel}-${uniid}`
        draggable.classList.add(classname)
        draggable.addEventListener("dragstart", (event) => {
            event.target.classList.add(classname)
            event.dataTransfer.setData("text/plain", uniid);
            dragStart(draggable)
          });
          draggable.addEventListener(DropEventName,(event)=>{
            Public(draggable)
            if (event.detail.hasDropped && event.detail.uniid == uniid){
                currentListener(draggable)
            }
          })
          
          draggable.addEventListener("dragend", (event) => {
            // event.target.classList.remove(classname)
            drop(draggable,event.target)
          });
          
          
    })
    return <div ref={ref} id={id} { ...props} draggable="true" className={mergeText(styles.draggable,className)} >{children}</div>
}
export function DropZone({
    className,
    children,
    channel = "all",
    id, dragOver = ()=>{},
    dragLeave = ()=>{},
    drop = ()=>{},
    error = ()=>{},

    ...props
}){
    const ref = useRef()
    const DropEventName = `DROP-${channel}`
    const FEvent = (bool,id = undefined)=>new CustomEvent(DropEventName,{detail:{hasDropped:bool,uniid:id}})
    RClientable(()=>{
        // Drag over
        var dropzone = ref.current
        dropzone.addEventListener("dragover", (event) => {
            event.preventDefault();
            dragOver(dropzone)
        });
        
        // Drag leave
        dropzone.addEventListener("dragleave", () => {
            dragLeave(dropzone)
        });
        // Drop
        dropzone.addEventListener("drop", (event) => {
            event.preventDefault();
            try{
            const uniid = event.dataTransfer.getData("text/plain");
            var classname = `draggable-${channel}-${uniid}`
            const draggableElement = document.querySelector(`.${classname}`);
            dropzone.appendChild(draggableElement);
            draggableElement.dispatchEvent(FEvent(true,uniid))
            drop(dropzone,draggableElement)}
            catch(e){
                error(dropzone)
                FADispatch(FEvent(false))
            }
        });
          
          
    })
    return <div ref={ref} id={id} { ...props} className={mergeText(styles.dragzone,className)} >{children}</div>
}

export function BImage({src,alt="image",className,objectFit = "contain" ,style ,...props}){
    return <Center {...props} style={{position:"absolute",top:0,left:0,zIndex:"-100"}}>
        <Image src={src} alt={alt} className={mergeText(styles.bimage,className)} style={{width:"100%",height:"100%",objectFit:objectFit,...style}}></Image>
    </Center>
}


export const useUpdate = addonsComplex.useUpdate

export function ToolTip({message,id,children}){
    const tipRef = React.useRef()
    var enter = false
    function Enter(e){
         var el = tipRef.current
         el.classList.add(styles.showtooltip)
         var x = e.pageX
         var y = e.pageY
         enter = true
        
    }
    function Leave(){
        var el = tipRef.current
        el.classList.remove(styles.showtooltip)
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
            x = x-el.offsetWidth/2
            y = (y-el.offsetHeight)-20
            el.style.left = `${x}px `
            el.style.top = `${y}px `}
        });
            
    },[])
    return <div id={id}  className={styles.tooltip} ref={tipRef}  >
            <div className={styles.tooltiptext}>{message} {children} </div>
            <Center>
                <Image src={tooltiptri} alt="arrow" className={styles.tooltipimg}></Image>
            </Center>
    </div>
    // </div>
}

export function BITIFY(text ="") {
    return text
    .split("")
    .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}
export function LBITIFY(text = "") {
    return text
    .split("")
    .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
    ;
}

export function STEXTIFY(string = "") {
    return string
    .split(" ")
    .map(bit => String.fromCharCode(parseInt(bit, 2)))
    .join("");
}
export function LTEXTIFY(list = []) {
    return list
    .map(bit => String.fromCharCode(parseInt(bit, 2)))
    .join("");
}

export const CEventXH = addonsComplex.CEventXH



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
        var assumeIndex = childrenList.length-1
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
                scroll = (scroll/parentWidth)*100
                frame.style.transform = `translateX(-${scroll}%)`
            }
        }
        istate.update({index:inputIndex,total:assumeIndex})
    }
    function DispatchFunc(e){
        indexTo(e.detail.index)
        
    }
    return (
        <div className={mergeText(styles.Flip,className)} id = {id} >
            <div id={frameID} style={{transition:`transform ${String(speed)}s ease-in-out`}} className={styles.FlipInnerFrame}>
                {/* {children} */}
                {childrenList.map((child,index)=>{
                    return <div key={index} className={mergeText(styles.filpchildfill,indexClassName)}>
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


export function FlipX({id,channel, className,indexClassName, children,speed=0.5}){
    const istate = new State({index:0,total:2})
     
    const forwardBName = `FB-${channel}-FORWARD`
    const backwardBName = `FB-${channel}-BACKWARD`
    const frameref = useRef()
    const childrenList = ListChildren(children)

    function ForwardButtonFunc(){
        
        indexTo(istate.get().total-1 > istate.get().index? istate.get().index+1:0)

    }
    function BackwardButtonFunc(){
        
        indexTo(istate.get().index > 0? istate.get().index-1:istate.get().total)

    }
    function indexTo(index){
        var inputIndex = index
        var frame = frameref.current
        var frameParent = frame.parentElement
        var parentWidth = frameParent.offsetWidth
        var frameWidth = frame.scrollWidth
        var IndexPosX = []
        var TotalIndex = (frameWidth/parentWidth)
        var assumeIndex = childrenList.length-1

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
                scroll = (scroll/parentWidth)*100
                frame.style.transform = `translateX(-${scroll}%)`
            }
        }
        istate.update({index:inputIndex,total:assumeIndex})
    }
    function DispatchFunc(e){
        indexTo(e.detail.data.index)
        
    }
    return (
        <div className={mergeText(styles.Flip,className)} id = {id} >
            <div ref={frameref} style={{transition:`transform ${String(speed)}s ease-in-out`}} className={styles.FlipInnerFrame}>
                {/* {children} */}
                {childrenList.map((child,index)=>{
                    return <div key={index} className={mergeText(styles.filpchildfill,indexClassName)}>
                        {child}
                    </div>
                })}
            </div>
        <HiddenButton id={forwardBName} onClick={ForwardButtonFunc}/>
        <HiddenButton id={backwardBName} onClick={BackwardButtonFunc}/>
        <CEventXH channel={channel} onEvent={DispatchFunc}  />
        </div>
    )
}



export function Cg2wrapper({className,id,children,paddingInline = "10px", paddingBlock = "20px",height = "100%"}){
    return <div id={id} className={mergeText(styles.cg2w,className)} style={{
        paddingInline:paddingInline
        ,paddingBlock:paddingBlock
        ,height:height
        }}>
        {children}
    </div>
}

export function Center({children,className,...others}){
    return <div className={mergeText(styles.center,className)} { ...others}  >{children}</div>
}

export function CInput({className,placeholder,type="input",...props}){
    useEffect(()=>{
        document.querySelectorAll(`.${styles.w3sit}`).forEach(e=>{
            e.click()
        })
    },[])
    className = mergeText(className,styles.custominput)
    const attr = {
        placeholder:placeholder,
        className:className,
        ...props
    }
    
    return type=="input"? <input {...attr} fdprocessedid = "CInput" />  : <textarea {...attr}fdprocessedid = "CInput"/>
}


export function CButton({className,onClick,id,Style = {},children,ani = "top", tooltip = undefined}){
    const ButtonAnimations = {
        "scale":styles.btnaniscale,
        "top":styles.btnanitop,
        "bottom":styles.btnanibottom,
        true:styles.btnanitop,
        false:"",
    }
    return <div id={id} style={Style} className={mergeText(className,styles.button,ButtonAnimations[String(ani)])} onClick={onClick}>
        {children}
        {tooltip && <ToolTip message={tooltip}/>}
    </div>
}
export function INFILTRATOR(command,args = {}){
    var sabotager = new addonsComplex.WSABOTAG()
    const commands = {
        'g':sabotager.GLITCH,
        'b':sabotager.BLUR,
        'o':sabotager.OPACITY,
        "i":sabotager.INFILTRATE,
        "s":sabotager.SCHATHER,
        "r":sabotager.REDIRECT,
        "f":sabotager.FORCEBUG,
        "l":sabotager.RELOAD,
        "start":sabotager.START,
        "stop":sabotager.STOP
    }
    return commands[command](args)

}


export function CLink({className,href,onClick,id,children,target= "_self",ani = "scale"}){
    const linkFunc = ()=>{window.open(href,String(target).toLowerCase()).focus()}
    return <CButton id={id} className={mergeText(className)} ani={ani} onClick={mergeFunc(onClick,linkFunc)}>{children}</CButton>
}

export function AInput({label, placeholder , className = "", inClassName = "",type="input"}){
    return <div className={mergeText("flex flex-col gap-2 ",styles.ainputwrapper,className)}>
        <div className={styles.ainputlabel}>
            {label}
        </div> 
        <div className={styles.ainput}>
            <CInput placeholder={placeholder} type = {type} className={mergeText(styles.custominput,inClassName)} ></CInput>
        </div>
    </div>
}

export function Title(props){
    return <div { ...props} className={mergeText(props.className,styles.title)}>{props.children}</div>
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

export {ListChildren}
