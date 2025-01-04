"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import styles from "./addons2.module.css"
import { addonsComplex, CEXModel, CInterval, EMonitor, mergeText, WMonitor } from "./addons"
import React, { use, useEffect, useRef } from "react"
import CSSHelper from "./cssHelper"


var cssHelper = CSSHelper()

export class Storage{
    constructor(key, defaultState = {"name":"<Your Name>"}){
        this.key = key
        this.item = defaultState
    }
    set(value){
        localStorage.setItem(this.key,JSON.stringify(value))
        this.item = value
        return this
    }
    update(kv){
        this.item = {
            ...this.item,
            ...kv
        }
        this.set(this.item)
        return this
    }

    remove(){
        localStorage.removeItem(this.key)
        return this
    }

    get(){
       this.item = JSON.parse(localStorage.getItem(this.key)) ? JSON.parse(localStorage.getItem(this.key)) : this.item
       this.set(this.item)
       return this.item
    }
}

export function FilterKeys(predicate = (key)=>true,keyReform =(key)=>undefined,dict={}){
    var filtrate = {}
    for (var key in dict){
        if (predicate(key)){
            filtrate[(keyReform(key)?keyReform(key):key)] = dict[key]
        }
    }
    return filtrate
}
export function FilterOutKeys(predicate = (key)=>true,keyReform =(key)=>true,dict={}){
    var filtrate = FilterKeys((key)=>!predicate(key),keyReform,dict)
    return filtrate
}

function BarShape({ fill, x, y, width, height,...style }){
    return <Div {...style} translate = {`${x}px ${y}px`} width={width} height={height} backgroundColor={fill}></Div>

}

export function BarChart({data,color = "rgba(38, 43, 61, 1)",bwidth = 500 ,bheight = 300,cellwidth,XDataKey = "name",YDataKey = "value",...style}){
    var styleForCell = {...FilterKeys((key)=>String(key).includes("$"),(key)=>String(key).replace("$",""))}
    return <Div {...style}>
        <BarChart
          width={bwidth}
          height={bheight}
          data={data}
        //   barSize = {cellwidth}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={XDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar  dataKey={YDataKey} shape = {(props)=><BarShape {...props} {...styleForCell}/>} fill={color} minPointSize={5}>
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color?entry.color:color} />
            ))}
          </Bar> 
        </BarChart>
    </Div>
}

export function CircleChart({className = ""
    ,
    data = [{name:"",value:50,color:"#000"}],
    children,
    innerRadius = 80,
    outerRadius = 100,
    bound = 300,
    startAngle = 0,
    endAngle = 360,
    max = 100,
    maxName = "max",
    maxColor = "#ccc",
    ...style
}){
    
    outerRadius = (bound*(outerRadius/2)/100)
    innerRadius = (bound*(innerRadius/2)/100)
    var total = 0
    data.forEach(cell => total += cell.value)
    var maxData = {name:maxName,value: max-total <= 0 ? 0 : max-total,color:maxColor}
    data.push(maxData)
    return<Div className={className} position ="relative" width={bound} height={bound} {...style}>
        <Div display="grid" position="absolute" placeItems="center" width="100%" height="100%">
                {children}
            </Div>
        <PieChart width={bound} height={bound}>
            <Pie
            dataKey = "value"
            innerRadius = {innerRadius}
            outerRadius = {outerRadius}
            data={data}
            activeIndex={0}
        
            stroke="none"
            startAngle={startAngle}
            endAngle={endAngle}
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />))}
        
            </Pie>
            </PieChart>
            
    </Div>


}


export function RingChart({className = ""
        ,
        data = [{name:"",value:50,color:"#000"}],
        children,
        innerRadius = 80,
        outerRadius = 100,
        bound = 300,
        incline = 30,
        max = 100,
        maxName = "max",
        maxColor = "#ccc",
        ...style
    }){
        
        
        return <CircleChart
        data={data}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        bound={bound}
        max={max}
        maxName={maxName}
        maxColor={maxColor}
        startAngle={incline}
        endAngle={incline+360}
        className={className}
        {...style}
        >{children}</CircleChart>


    }


/* HTML:  */

export function Loader1({className,color = "rgba(47, 54, 75, 1)",children,...props}){
    return <RDiv {...props} style = {{borderRightColor: color}} borderRightColor = {color} className = {mergeText(styles.loader1,className)}></RDiv>
}

export function LoadUi({className,channel,color = undefined,isloading = true,model = new CEXModel("loadui"),...props}){
    addonsComplex
    var ref = useRef()
    var eventH = model
    function onEvent(event){
        var el = ref.current
        if (event.detail.data.isloading == true){
            el.style.display = "grid"
            console.log(`loading ${channel}`)
        }else{
            el.style.display = "none"
            console.log(`loaded ${channel}`)
        }
    }
    return <Div {...props} ref={ref} position="absolute" background="white" zIndex="10000" top={0} left={0} width="100vw" height="100vh" display={isloading?"grid":"none"} placeItems="center" className={className}>
        <Loader1 color={color}></Loader1>
        <eventH.CEventXH self={eventH} onEvent = {onEvent} channel={channel}></eventH.CEventXH>
    </Div>
}

export function AtMedia({
         media = "max-width"
        ,pixels = 800
        ,className = "at-media"
        ,styleAtMedia = {}
        ,styleAtDefault = {}
        ,funcAtMedia = ()=>{}
        ,funcAtDefault = ()=>{}
        ,element = undefined
        ,returnReact = true}
        ,toWhomIsAtmedia = "window"  
    )
        {
    const ref = useRef()
    const SelfsInAtMedia ={
        "window":()=>window,
        "parent":()=> ref.current.parentElement,
        "class":()=>document.querySelector(`.${className}`),
        "element":()=>element
    }
    const Refresh = ()=>{
        // console.log(className)
        // console.log(element.className)
        const WhosMedia = SelfsInAtMedia[toWhomIsAtmedia]()
        var it = element==undefined?document.querySelector(className):element
        if (!it) return
        if (SelfsInAtMedia[toWhomIsAtmedia]().matchMedia(`(${media}:${pixels}px)`).matches){
            for (var style in styleAtMedia){
                // it.setAttribute(style,styleAtMedia[style])
                it.style[style] = styleAtMedia[style]
                funcAtMedia()
            }
        }else{
            for (var style in styleAtDefault){
                // it.setAttribute(style,styleAtDefault[style])
                it.style[style] = styleAtDefault[style]
                funcAtDefault()
            }
        }
        return window.matchMedia(`(${media}:${pixels}px)`).matches
    }
    return returnReact? ()=> <EMonitor elementReturnFunc={SelfsInAtMedia[toWhomIsAtmedia]} onChange = {Refresh}></EMonitor>  : Refresh
}

export function filterInStyles(Styles = {},tag = "div"){
    var allCSSProperties
        allCSSProperties = {...cssHelper};
        var propsforstyle = {}
        for (var cssAttr in  allCSSProperties){
            if (cssAttr in Styles){
                propsforstyle[cssAttr] = Styles[cssAttr]
            }
        }
    return propsforstyle
}
export function filterOutStyles(Styles = {},tag = "div"){
    var allCSSProperties
        allCSSProperties = {...cssHelper};
        var propforit = {}
        for (var key in Styles){
            if (!(key in allCSSProperties)){
                propforit[key] = Styles[key]
            }
        }
    return propforit
}

export function BCard({children,...props}){
    return <Div width ="fit-content" height="fit-content" padding="15px" border = "2px solid rgba(226, 232, 240, 1)" boxShadow = "0px 8.46458px 12.6969px rgba(0, 0, 0, 0.09)" borderRadius="14.9856px" display="inline-block" { ...props}>
            {children}
        </Div>
    }

export function PureDoubleGridWrapper({className,px = 800,GTC = "1fr 1fr",gap,children,styleAtMedia = {}
    ,styleAtDefault = {},...props}){
    var ref = useRef()
    var elementMediaRefresh
    var styleatdef = {
        display:"grid",
        gridTemplateColumns:GTC,
        placeItems:"center"
        ,gap:gap
        ,...styleAtDefault
    }
    var styleatmed = {
        display:"flex",
        flexDirection:"column",
        gap:gap,
        ...styleAtMedia
        

    }
    useEffect(()=>{
        elementMediaRefresh = AtMedia({element:ref.current,styleAtMedia:styleatmed,styleAtDefault:styleatdef,media:"max-width",returnReact:false,pixels:px})
        setInterval(() => {
            elementMediaRefresh()
        }, 1);
    })
    return <section ref={ref} {...filterOutStyles(props)} className={mergeText(styles.pureDoubleGridWrapper,className)} style={{...styleatdef,...filterInStyles(props)}} >
        {children}
    
    </section>
}



export function RepeatGridWrapper({className,sizing = "fill",gap,children,minmax = "200px,1fr"
    ,...props}){
 
    return <Section  className={mergeText(styles.RepeatGridWrapper,className)} display="grid"
    gridTemplateColumns={`repeat(auto-${sizing},minmax(${minmax}))`}
    placeItems="center"
    gap={gap} {...props} >
        {children}
    
    </Section>
}



// Get all CSS properties supported by the browser



export function BaseElement({className,tag = "div",children,id,ref,onClick,element = undefined,...props}){
    useEffect(()=>{
        cssHelper = CSSHelper({...document.createElement("div").style})
    })
    const Element =element?element: ({children,...attr})=>{return React.createElement(tag,attr,children)}
    var propsforstyle = filterInStyles(props,tag)
    
    var style = {
        ...propsforstyle  
    }
    var propforit = filterOutStyles(props,tag)
    
    return <Element { ...propforit} className={mergeText(className)} onClick={onClick} id={id} ref={ref} style={style}>
        {children}
    </Element>
}

export function Text({className,children,id,ref,...props}){
    return <BaseElement tag="p" display = "inline-block" {...props} className={className} id={id} ref={ref}  >{children}</BaseElement>
}
export function Span({className,children,id,ref,...props}){
    return <BaseElement tag="span" display="inline-block" {...props} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Div({className,children,id,ref,onClick,...props}){
    return <BaseElement tag="div" display="block" {...props} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function RDiv({className,children,id,ref,onClick,...props}){
    return <BaseElement tag="div"  {...props} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Main({className,children,id,ref,onClick,...props}){
    return <BaseElement tag="main"  {...props} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Section({className,children,id,ref,onClick,...props}){
    return <BaseElement tag="section"  {...props} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Button({className,children,id,ref,type = "button",onClick,...props}){
    return <BaseElement tag="button"  {...props} type = {type} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Input({className,children,id,ref,type = "text",placeholder,onClick,...props}){
    return <BaseElement tag="input"  {...props} type = {type} placeholder = {placeholder} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function TextArea({className,children,id,ref,onClick,...props}){
    return <BaseElement tag="textarea"  {...props} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Img({className,children,id,ref,src,onClick,...props}){
    return <BaseElement tag="img"  {...props} src = {src} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Audi0({className,children,id,ref,src,onClick,...props}){
    return <BaseElement tag="audio"  {...props}  element={({children,...attr})=><audio src={src} {...attr}> {children}</audio>} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function Vide0({className,children,id,ref,src,onClick,...props}){
    return <BaseElement tag="video"  {...props}  element={({children,...attr})=><video src={src} {...attr}> {children}</video>}onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}
export function H1({className,children,id,ref,onClick,...props}){
    return <BaseElement tag="h1" fontSize ="20px" fontWeight="bolder" {...props} onClick={onClick} className={className} id={id} ref={ref}   >{children}</BaseElement>
}

