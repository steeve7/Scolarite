"use client"
import { addonsComplex, BImage, CButton, CEDispatch, Center, CEventH, CEXModel, Cg2wrapper, clickHidden, CLink, Draggable, DropZone, FADispatch, Flip, FlipX, Pd, Radio, State, ToolTip, useUpdate } from "@/components/addons/addons"
import style from "./style.module.css"
import frame1i1 from "./assets/frame1i1.png"
import dragimg from "./assets/drag.png"
import cancelimg from "./assets/cancel.png"
import frame2i1 from "./assets/frame2i1.png"
import dropzonebg from "./assets/dropzonebg.png"
import frame3i1 from "./assets/frame3i1.png"
import frame4i1 from "./assets/frame4i1.png"
import frame5i1 from "./assets/frame5i1.png"
import frame6i1 from "./assets/frame6i1.png"
import frame7i1 from "./assets/frame7i1.png"
import frame8i1 from "./assets/frame8i1.png"
import depin from "./assets/depin.png"
import listimg from "./assets/list.png"
import calimg from "./assets/cal.png"
import engimg from "./assets/department/eng.png"
import medimg from "./assets/department/med.png"
import artimg from "./assets/department/art.png"
import comimg from "./assets/department/com.png"
import sliderthumbimg from "./assets/sliderthumb.png"
import doneimg from "./assets/done.png"
import Image from "next/image"
import db from "./MFormDatabase"
import { useEffect, useRef, useState } from "react"
import { CRange, genId, mergeText, Range } from "../add"
import MFormDatabase from "./MFormDatabase"
import "./config.css"

const EventNameList = {
    multiFormMove:"MULTIFORM-MOVE",
    multiFormReload:"MULTIFORM-RELOAD",
    departmentCall:"DEPARTMENT-CALL"

}
const EventList = {
    multiFormMove:(detail = {index:0})=>new CustomEvent("MULTIFORM-MOVE",{detail:detail}),
    multiFormReload:(detail = {index:0})=>new CustomEvent("MULTIFORM-RELOAD",{detail:detail}),
    departmentCall:(detail = {name:""})=>new CustomEvent("DEPARTMENT-CALL",{detail:detail})

}

function Fill({ Name,purpose={start: 0, end: 10},value=0 , need = true}){
    const EventName = `FILL-${Name}`
    const barName = `FILL-${Name}`
    const ref = useRef(null)
    
    const [done,setdone] = useState(false)
    function FillFunc(e){
        var index = Number(e.detail.data.index)
        const End = purpose.end
        const Start = purpose.start
        var el = ref.current
        var barWidth = Number(((index-Start)/(End - Start))*100)
       if (index > Start){
            el.style.width = `${barWidth}%`
        }
        else{
            el.style.width = `0%`
        }
        if (index > End){
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
        <div className={style.fillcircle} style={{border:done?"":`3px solid rgba(161, 174, 190, 1)`}}> 
            {done && <Image src={doneimg} alt="2" className={style.filldoneimg}/> }
            {!done && value}
        </div>
        <addonsComplex.CEventXH channel={EventNameList.multiFormMove} onEvent={FillFunc}   />
        
    </>
}

function InnerSections({state,ehandle,form}){
    const index = state
    const Name = "IF1"
    const Form = form
    index.forceUpdateInit()
    function FormInsertValidate(key,UnlessCallFunc,IfNotFunc){
        if(Form.get()[key]){
            UnlessCallFunc()
        }else{
            IfNotFunc()
        }
    }

    return <FlipX id={"frame3"} channel={EventNameList.multiFormMove} indexClassName={style.innersection}  >
        {/* <ToolTip message={"message success"} /> */}
        <div className={style.if1}>
            <div  className={style.if1title}>
            What's your target jamb score? 
            </div>
            <Slider onEvent={(value)=>{Form.update({JambScore:value})}} />
            <div className={style.if1button1w}>
                <CButton className={style.if1button1}  onClick={()=>{index.set(e=>e+1);ehandle()}}>Next step</CButton>
            </div>
        </div>

        <div className={style.if1}>
        <div  className={style.if1title}>
            What's your target School?  
            </div>
            <Center><Finput change={el=>Form.update({School:el})} dl={db.School} channel={"school"}  placeholder="Enter school name" /></Center>
           <br />
           <br />
           <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{index.set(e=>e-1);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1} onClick={()=>{index.set(e=>e+1);ehandle()}}>Next step</CButton>
            </div>
        </div> 

        <div className={style.if1}>
         <div  className={style.if1title}>
            Choose your target Department
            </div>
            <Center>
                <Depw>

                    <DepartmentCard icon={engimg} form = {Form} isdefault = {true} name={"Engineering"}/>
                    <DepartmentCard icon={medimg} form = {Form} name={"Medicine"}/>
                    <DepartmentCard icon={artimg} form = {Form} name={"Arts"}/>
                    <DepartmentCard icon={comimg} form = {Form} name={"Commerce"}/>
                </Depw>
            </Center>
            <div className={mergeText(style.notetext)} style={{textAlign:"left"}}>
                <Pd pad={30}></Pd> Search for your ideal  course now.
                <Pd display="block" pady={30} ></Pd>
            </div>
            <DepInput form={Form}></DepInput>
            <div className={mergeText(style.notetext)} style={{textAlign:"left"}}>
                <Pd pad={30}></Pd>Can't find your course? Enter the course you're looking for, and we'll assist you in finding it.
            </div>
            <br />
            <Center> <input type="text" placeholder="Enter course name" onChange={el=>Form.update({Course:el.target.value})} className={style.cfc} /></Center>
           <br />
           <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{index.set(e=>e-1);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1}  onClick={()=>{index.set(e=>e+1);ehandle()}}>Next step</CButton>
            </div>
        </div>
        <div className={style.if1}>
         <div  className={style.if1title}>
                Have you written Jamb before?
            </div>
            <Center>
                <Depw>
                    <Yesno3 form={Form} value={"Yes"} ></Yesno3>
                    <Yesno3 form={Form} value={"No"} isdefault={true} ></Yesno3>
                </Depw>
            </Center>
            <div id="preScore-input-l" className={mergeText(style.notetext)} style={{textAlign:"left"}}>
                <Pd pad={30}></Pd> If ‘Yes’, Kindly enter your score for a tailored prep plan.
            </div>
            <Pd pad={50} /><input type="number" max={400} id="preScore-input" onChange={el=>Form.update({preScore:Number(el.target.value)})} className={style.ifts} style={{width:"60%",marginLeft:"30px"}} placeholder="Enter Score" />
           <br />
           <br />
           <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{index.set(e=>e-1);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1}  onClick={()=>{index.set(e=>e+1);ehandle()}}>Next step</CButton>
            </div>
        </div>
       
        <div className={style.if1}>
         <div  className={style.if1title}>
             Select target subjects
            </div>
            <Center>
                <div style={{listStyleType:"disc",fontSize:"14px",fontWeight:"bold",width:"90%"}}>Please note that you selected your department to be <CButton  Style={{textDecoration:"underline",display:"inline"}} onClick={()=>{index.set(e=>e-2);ehandle()}} >{form.get().Department}</CButton> </div>
            </Center>
            <Center>
                
                <Depw >
                    <Finput change={(v)=>{form.states.Subjects[0]=v}} dl={db.Course} channel={"subi0"} placeholder="Enter first subject" />
                    <Finput change={(v)=>{form.states.Subjects[1]=v}} dl={db.Course} channel={"subi1"} placeholder="Enter first subject" />
                    <Finput change={(v)=>{form.states.Subjects[2]=v}} dl={db.Course} channel={"subi2"} placeholder="Enter first subject" />
                    <Finput change={(v)=>{form.states.Subjects[3]=v}} dl={db.Course} channel={"subi3"} placeholder="Enter first subject" />
                    
                </Depw>
            </Center>
            
           <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{index.set(e=>e-1);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1}  onClick={()=>{index.set(e=>e+1);ehandle()}}>Next step</CButton>
            </div>
        </div>
        <div className={style.if1}>
         <div  className={style.if1title2}>
         Based on our expertise, we recommend dedicating a specific number of hours to study each week. How many hours do you plan to study each day or week? You can follow our recommendation or customize your own schedule.
            <Pd display="block" pady={20} ></Pd>
            Would you like to follow our recommended study plan ?
            </div>
            
            <Center>
                
                <Depw>
                <YesnoA form={Form} value={"Yes"} ></YesnoA>
                <YesnoA form={Form} value={"No"} isdefault={true} ></YesnoA>
                </Depw>
            </Center>
            <div id="calf-input-l"  className={style.if1title}>
            Which calendar format would you prefer for organizing your study schedule?
            </div>
            <div id="calf-input" style={{width:"100%"}}>
            <Center >
                
                    <Depw >
                    <YesnoC  icon={calimg} form={Form} value={"Calendar Format"} tooltip={`**Calendar Format:**
- Displays events or tasks in a grid organized by date, offering a visual overview of scheduled activities.
- Ideal for planning and quickly seeing commitments over days, weeks, or months.
`} ></YesnoC>
                    <YesnoC  icon={listimg} form={Form} value={"List Format"} isdefault={true} tooltip={`**List Format:**
- Presents items in a sequential, linear order, 
perfect for outlining tasks or steps.
- Simplifies viewing and managing information
 in a straightforward, chronological manner.`} ></YesnoC>
                    </Depw>
            </Center>
            </div>

           <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{index.set(e=>e-1);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1}  onClick={()=>{index.set(e=>e+1);ehandle()}}>Next step</CButton>
            </div>
        </div>
        <div className={style.if1}>
         <div  className={style.if1title}>
         Please arrange your subjects in the order of priority for your studies
            </div>
            <br />
            <Center>
                <DropZone id="subject" channel="subject-card" className={style.fdropzone}>
                    {Form.get().Subjects.map((sub,index)=><DragCard key={index} subject={sub} index={index} form={Form}></DragCard>
                )}
                </DropZone>
            </Center>
            <br />
            <Center>
                <DropZone drop={e=>document.getElementById("dropzonebg").style.display = "none"} dragOver={e=>document.getElementById("dropzonebg").style.display = "block"} dragLeave={e=>document.getElementById("dropzonebg").style.display = "none"} style={{position:"relative"}} className={style.studcarddropzone} id={"subject-zone"} channel="subject-card">
                    <BImage id={"dropzonebg"} style={{height:"120%"}} objectFit="cover" src={dropzonebg}></BImage>
                </DropZone>
            </Center>
            <br />
           <br />
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{index.set(e=>e-1);ehandle()}}>Previous step</CButton>
                <CButton className={style.if1button1}  onClick={()=>{index.set(e=>10);ehandle()}}>Next step</CButton>
            </div>
        </div>
        <div className={mergeText(style.if1,style.rcs)}>
            <Center>
                
                    <Image src={doneimg} alt="2" className={style.rcsi} ></Image>
                
            </Center>
            <div className={style.rcstitle}>
            Review and Confirm Your Selections
            </div>
            <Center>
                <div className={style.rcstext}>
                Please take a moment to review all the information below to ensure it's correct. Confirm your details to finalize your preferences and start your personalized JAMB preparation journey. If you need to make any changes, you can do so now.
                </div>
            </Center>
            <CLink href={"/"} className={style.rcsbutton}>
            Submit
            </CLink>
            <div className={style.if1button2w}>
                <CButton className={mergeText(style.if1button1,style.if1button2)} onClick={()=>{index.set(e=>6);ehandle()}}>Previous step</CButton>
            </div>
        </div>
        
    </FlipX>
}


function Finput({channel,change,dl,...props}){
    const dropEmodel = new CEXModel("DROPDOWN")
    const inref = useRef(null)
    function InputChange(e){
        change(e.target.value)
        dropEmodel.CEXDispatch(channel,data={drop:true,filter:e.target.value,target:e.target})
    }
    function cardClick(name){
        var input = inref.current
        input.value = name
        change(name)
    }
    return <div onBlur={()=>setTimeout(()=>{dropEmodel.CEXDispatch(channel,{drop:false,filter:""})},500)} style={{width:"100%"}}>
        <input ref={inref} type="text" max={400}
         onChange={InputChange}
         onClick={InputChange}
         fdprocessedid="pbf2tq" 
        
         className={style.ifts} style={{width:"100%"}} 
         {...props} />
         <Dropdown channel={channel} onCClick={cardClick} dataList={dl} ></Dropdown>
    </div>
}

function Depw({children, ...props}){
    return <div className={style.dpww}>
        <div { ...props} className={mergeText(props.className,style.depwrapper)}>
            {children}
        </div>
    </div>
}

function DragCard({subject, index,form}){
    const listcardiinput = ["First","Second","Third","Forth"]
    const [isin, setisin]  = useState(false)
    var id
    function currentListener(e){
        var ref = document.getElementById(`subject-card${index}`);
        console.log("ref",ref)
        var indexs = document.querySelectorAll(`.${style.studcarddropzone} .${style.dragecardsub} `)
        // if (!isin){
            // form.states.Subjects[indexs.length] = subject
            form.update({Subjects:Array.from(indexs).map(el=>{return el.innerText})})
        // console.log(Array.from(indexs).map(el=>{return el.innerText}))
    // }
        // setisin(()=>true)
        
        
    }
    function Public(el){
        var ref = el
        //get all from main drop zone
        var indexs = document.querySelectorAll(`.${style.studcarddropzone} .${style.dragcard} `)
        setisin(()=>false)
        // check if in main drop zone
        indexs.forEach(ele=>{

            if (ele.id == ref.id ){
                console.log("inin")
                setisin(()=>true)
            }
            else{
                setisin(()=>false)
            }
        })
        
    }
    return <Draggable Public={Public} channel = {"subject-card"}  id={`subject-card${index}`}   currentListener={currentListener} className={style.dragcard} >
            <Center className={style.dragcardico}>
                {!isin && <Image src={dragimg} alt="2" className={style.dragimg}></Image>}
                {isin &&<Image src={cancelimg} alt="2"   className={style.dragimg}></Image>}
            </Center>
            <div className={style.dragccontent}>
                <div className={mergeText(style.tl,style.dragecardsub)}>{subject}</div>
                <div className={mergeText(style.tl,style.draginputi)}>{listcardiinput[index]} input</div>
            </div>
    </Draggable>
}


function Dropdown({channel,onCClick,dataList}){
    const ref = useRef(null)
    const Emodel = new CEXModel("DROPDOWN")
    const ListElRefs =  CRange(0,dataList.length-1).map(()=>useRef(null))
    function Filter(e){
        const filter = e.detail.data.filter
        var cardellist = ListElRefs.map(ELref=>ELref.current)
        cardellist.forEach(el=>{
            el.classList.remove(style.active)
            if (el.innerText.toLowerCase().includes(filter)){
                el.classList.add(style.active)
            }
        })
    }
    function onEvent(e){
        ref.current.parentElement.style.position = "relative"
        const data = e.detail.data
        if (e.detail.target){
            e.detail.target.addEventListener('keydown', (event) => {
                console.log(event.key)
                if (event.key === 'Escape' || event.keyCode === 27) {
                        Emodel.CEXDispatch(channel,{drop:false,filter:""})
                    }
            })
        }
        if (data.drop){
            ref.current.classList.add(style.active)
        }
        else{
            ref.current.classList.remove(style.active)
        }
        if (e.detail.data.filter){
            Filter(e)
        }

    }
    function cardClick(name){
        onCClick(name)
        Emodel.CEXDispatch(channel,{drop:false,filter:""})
    }
    return <div className={style.dropdown}>
        <div id={style.searchcardwrap} ref={ref} className={style.searchcardwrap}>
        {dataList.map((obj,index)=>{
            return <div key={index} ref={ListElRefs[index]} onClick={()=>cardClick(obj.name)} className={mergeText(style.depincard)}>
            <div style={{textAlign:"left"}}>{obj.name}</div> <Image width={20}  src={depin} alt="222"></Image>
        </div>
        })}
        </div>
        {<Emodel.CEventXH channel={channel} self={Emodel}  onEvent={onEvent}></Emodel.CEventXH>}
    </div>
}

function DepInput({form}){
    const dropEmodel = new CEXModel("DROPDOWN")
    function InputChange(e){
        dropEmodel.CEXDispatch("depinput",data={drop:true,filter:e.target.value,target:e.target})
    }
    function cardClick(name){
        var input = document.getElementById(style.depsearch)
        input.value = name
        form.update({Course:name})
    }
    return <Center   >
    <ToolTip message={"Input a valid course name"}/>
        <div  className={style.depsearchwrap}>
            <div onClick ={()=>{document.getElementById(style.depsearch).focus()}}  className={style.depsearchinw}>
                <div className={style.depsearchiconw}>
                    <svg className={style.depsearchicon} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.668 27.6889C34.0128 22.1906 33.6469 14.1873 28.5705 9.11085C23.0998 3.64013 14.23 3.64013 8.75928 9.11085C3.28857 14.5816 3.28857 23.4513 8.75928 28.9221C13.8357 33.9985 21.839 34.3644 27.3373 30.0196L33.2319 35.9142C33.8756 36.5579 34.9191 36.5579 35.5627 35.9142C36.2063 35.2706 36.2063 34.2271 35.5627 33.5835L29.668 27.6889ZM26.2398 11.4416C30.4232 15.6251 30.4232 22.4078 26.2398 26.5913C22.0563 30.7748 15.2735 30.7748 11.09 26.5913C6.90653 22.4078 6.90653 15.6251 11.09 11.4416C15.2735 7.25809 22.0563 7.25809 26.2398 11.4416Z" fill="#282828"/>
                    </svg>
                </div>
                <input onChange={InputChange} onClick={InputChange} 
                onBlur={()=>dropEmodel.CEXDispatch("depinput",{drop:false,filter:""})}
                  type="text" id={style.depsearch}  className={style.depsearch} />
            </div>
            <Dropdown channel={"depinput"} dataList={db.Course} onCClick={cardClick}></Dropdown>
        </div>
    </Center>
}


function DepartmentCard({icon,name,form,isdefault = false}){
    function onevent(el){
        el.style.border =  "1.21px solid rgba(0, 0, 0, 0)"
        
    }
    function valueListener(value,el){
        el.style.border =  "1.21px solid rgba(0, 0, 0, 1)"
        /* document.getElementById(style.depsearch).value = ""
        var cardellist = document.querySelectorAll(`.${style.depincard}`)
        cardellist.forEach(el=>{
            el.classList.remove(style.active)
            
        }) */

        form.update({Department:value})
        // document.getElementById("ydep").innerText = value
    }
    return <Radio value={name} channel={"department-card"} isdefault={isdefault} onEvent={onevent} valueListener={valueListener} className={style.departmentcard}>
        <div className={style.departmentcardiconw}>
            <Image className={style.departmenticon} src={icon} alt="alt"></Image>
        </div>
        <div className={style.departmenttext}>
            {name}
        </div>
    </Radio>
}
function Yesno3({value,isdefault , form = new State(),toChange = "HasWrittenBefore"}){
    function onevent(el){
        el.style.border = "1.21px solid rgba(0, 0, 0, 0)"
    }
    function valueListener(value,el){
        form.states[toChange] = String(value).toLowerCase() ==="yes"
        if(String(value).toLowerCase() ==="yes"){
        document.getElementById("preScore-input").classList.remove("NONE")
        document.getElementById("preScore-input-l").classList.remove("NONE")
        }else{
            document.getElementById("preScore-input").classList.add("NONE")
            document.getElementById("preScore-input-l").classList.add("NONE")  
        }
        el.style.border = "1.21px solid rgba(0, 0, 0, 1)"
    }
    return <Radio value={value} isdefault={isdefault} className={style.yesnoframe4} onEvent={onevent} valueListener={valueListener} channel={"yesno-frame4"} >
        {value}
    </Radio>
}
function YesnoA({value,isdefault , form = new State(),toChange = "FollowStudyPlan"}){
    function onevent(el){
        el.style.border = "1.21px solid rgba(0, 0, 0, 0)"
    }
    function valueListener(value,el){
        form.states[toChange] = String(value).toLowerCase() ==="yes"
        if(String(value).toLowerCase() ==="yes"){
        document.getElementById("calf-input").classList.remove("NONE")
        document.getElementById("calf-input-l").classList.remove("NONE")
        }else{
            document.getElementById("calf-input").classList.add("NONE")
            document.getElementById("calf-input-l").classList.add("NONE")  
        }
        el.style.border = "1.21px solid rgba(0, 0, 0, 1)"
    }
    return <Radio value={value} isdefault={isdefault} className={style.yesnoframe4} onEvent={onevent} valueListener={valueListener} channel={"yesnoA-frame4"} >
        {value}
    </Radio>
}
function YesnoC({value,isdefault,icon,tooltip ,id , form = new State(),toChange = "ScheduleFormat"}){
    function onevent(el){
        el.style.border = "1.21px solid rgba(0, 0, 0, 0)"
    }
    function valueListener(value,el){
        form.states[toChange] = String(value).toLowerCase()
        el.style.border = "1.21px solid rgba(0, 0, 0, 1)"
    }
    return <Radio id = {id} value={value} isdefault={isdefault} className={mergeText(style.departmentcard,style.yesnoccard)} onEvent={onevent} valueListener={valueListener} channel={"yesnoC-frame4"} >
        <ToolTip message={tooltip}></ToolTip>
        <div className={style.departmentcardiconw}>
            <Image className={style.departmenticon} src={icon} alt="alt"></Image>
        </div>
        <div className={style.departmenttext}>
            {value}
        </div>
    </Radio>
}

export default function Page(props){
    const Form  = new State(
        {
            JambScore:0,
            School:"",
            Department:"Enginnering",
            HasWrittenBefore:false,
            Subjects:["","","",""],
            SubjectsByPir:{s0:"",s1:"",s2:"",s3:""},
            FollowStudyPlan:false,
            ScheduleFormat:0,
            preScore:0,
            Course:""

        },
        // true

    )
    const Index = new State(0)
    const FilllistAssign = ["Academic Goals", "Current Academic Status", "Study Preference", "Customization", "Congratulations"]
    var section1fills = CRange(0,8,2).map((value,index)=> {return{Name:`fill${value}`, Index:(value/2)+1,purpose:{start:value==0?0:value-2,end:value}}})
    const ImageList = [frame1i1,frame2i1,frame3i1,frame4i1,frame5i1,frame6i1,frame7i1,frame8i1]
    useEffect(function(){
        // document.getElementById("HEADER").style.display = "none"
        // document.querySelector("body").style.overflow = "hidden"
        // document.getElementById("FOOTER").style.display = "none"
    },[])
    function ehandle(){
        // console.log(`- ${Math.floor(Math.random()*1000)} - `,Index)
        var Event = EventList.multiFormMove({index:Index.get()})
        /* section1fills.map((i)=>{
            CEDispatch(`FILL-${i.Name}`,Event)
        })
        CEDispatch("FLIP-frame1",Event)
         */
        /* console.log(Index.get())
        // console.log(Event)
        console.log(Form.toString()) */
        // FADispatch(Event)
        addonsComplex.XADispatch(EventNameList.multiFormMove,{index:Index.get()})
    }
    
    return <div className={style.main}>
        <Cg2wrapper className={style.wrapper}>
            <addonsComplex.CEventXH channel={EventNameList.multiFormMove} onEvent={()=>{console.log("eventX")}}></addonsComplex.CEventXH>
            <FlipX channel={EventNameList.multiFormMove} speed={0.8} className={style.side1}  >
            {/* <ToolTip message={"message success"} /> */}

                {ImageList.map((image,i)=>
                    <div key={i} className={style.imagewrap}>
                        <Image src={image} alt="alt" style={{width:"100%"}}></Image>
                    </div>
                )}
            </FlipX>
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
                    <div className="w-full flex justify-center ">
                        <div className={style.fillcom}>
                            {section1fills.map((obj,index)=><Fill key={index} value={obj.Index} need = {index !== 0} {...obj}/>)}
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className={mergeText(style.fillcom,style.fillassigncom)}>
                            {FilllistAssign.map((obj,index)=> <div key={`index-${index}`} className={style.fillassign} style={index==1?{paddingTop:"20%"}:{}}>{obj}</div>)}
                        </div>
                    </div>
                    <Pd pady={30}></Pd>
                    <Center>
                        <hr className={style.mhr} />
                    </Center>
                    <Center>
                        <div className={style.notetext}>
                            Please ensure you fill in the correct information to help us tailor your JAMB preparation effectively.
                        </div>
                    </Center>
                    <br />
                <InnerSections state = {Index} ehandle = {ehandle} form={Form} />
        {/* <CButton onClick={()=>{ehandle()}}> button next</CButton> */}

                </div>
            </Flip>
            
        </Cg2wrapper>
    </div>
}





function Slider({onEvent = null}){
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
    var result
    var key = keys.filter(k => k.getPosToParent().leftPercent <= 53 && k.getPosToParent().leftPercent >= 0).reverse()[0]
    if (key){
        result = key.index
    }else{
        result = keys[0].index
        return
    }
    result = key.index
/*     snap.currentTime = 0
    snap.volume = 0.34
    snap.play() */
    // parentKey.scrollLeft += 50 - key.getPosToParent().leftPercent

    
    if (key.index == 400){
        if (key.getPosToParent().leftPercent <= 52 ){
            result = key.index
        }
    }
    if (key.index == 0){
        if (key.getPosToParent().leftPercent >= 52 ){
            result = key.index 
        }
    }
    value.innerText = String(result)
    if (onEvent){
        onEvent(result)
    }
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