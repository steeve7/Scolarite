"use client"
import { CEXModel, FlipX, Pd, XMFlip, XMRadio } from "@/components/addons/addons";
import { Div,Span, LoadUi, PureDoubleGridWrapper, RingChart, Text, Audi0 } from "@/components/addons/addons2";
import { useEffect } from "react";
import styles from "./style.module.css"
import w12image from "./assets/w12image.png"
import Image from "next/image";
import { number } from "prop-types";
// import sound from "./assets/Disconnect .m4a"

export default function Home(){
    var loadevent = new CEXModel("loadui")
    var FlipEM = new CEXModel("sliders")
    var PerfRadio = new CEXModel("perfradio")
    var loadchannelname = "homeload"
    var setLoad = (val)=>loadevent.CEXDispatch(loadchannelname,{isloading : val})
    useEffect(()=>{
        console.log("loaded")
        PerfRadio.CEXDispatch("pefrad",{value:"0"})
        setTimeout(()=>{setLoad(false)},1000)
    })
    function PrefonEvent(it){
        it.parentElement.style.color = "rgba(0, 0, 0, 0.4)"
        it.parentElement.style.borderColor = "rgba(0, 0, 0, 0.4)"
    }
    function PrefValueListen(value,it){
        it.parentElement.style.color = "rgba(0, 0, 0, 1)"
        it.parentElement.style.borderColor = "rgba(0, 0, 0, 1)"
        FlipEM.CEXDispatch("filp1",{index:Number(value)})
    }
    return <Div  minHeight="100vh" maxWidth="1500px">
        <LoadUi channel={loadchannelname} model={loadevent} />
        <PureDoubleGridWrapper gap={"20px"} borderBottom="2px solid black" marginInline="4%" className={styles.w1} px={780}>
            <Div className={styles.w11}>
                <Div className={styles.w11inner} padding="2rem" display="flex" flexDirection="column" gap="20px">
                    <Div className={styles.w11title} fontSize="30px" fontWeight="bolder">Track Your Academic Progress</Div>
                    <Text className={styles.w11text} fontSize="13px" color="rgba(113, 113, 122, 1)" fontWeight="bold">Monitor your learning journey with real-time insights into your performance. Set goals, view achievements, and stay on course to academic success.</Text>
                    {/* <Audi0 border="2px solid black"  src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"} controls ></Audi0>  */}
                </Div>    
            </Div> 
            <Div>
                <Div className={styles.w12inner}>
                    <Image className={styles.w12image} src={w12image} alt="logo unavaliable"></Image>
                </Div>
            </Div>
        </PureDoubleGridWrapper>
        <Pd />
        <Div paddingInline ="2rem" width="100%" height = "100%">
            <Div display="flex" gap="20px">
                <Div paddingBlock ="5px" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"0"})}>Overall Performance <XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} isdefault channel={"pefrad"} value={"0"} ></XMRadio></Div>
                <Div paddingBlock ="5px" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"1"})}>Test Performance<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} channel={"pefrad"} value={"1"} ></XMRadio></Div>
            </Div>
            <Pd pady={50}></Pd>
            <XMFlip minHeight="500px" eventModel={FlipEM} background="black" color="white" channel={"filp1"} >
                <Div style={{backgroundColor:"red"}} width="100%">
                    <PureDoubleGridWrapper>
                        <Div className={styles.left}>
                            
                        </Div>
                        <Div className={styles.right}></Div>
                    </PureDoubleGridWrapper>
                </Div>
                <Div width="100%">tybnm,.hj</Div>
            </XMFlip>
        </Div>
        <Pd pady={50} />

        <RingChart color="black" fontSize="20px" textTransform="uppercase" fontWeight="bold" innerRadius={80} outerRadius = {100} max={1000} bound = {300}
        data={[{name:"",value:333,color:"#013133"},{name:"",value:333,color:"#007946"},{name:"",value:333,color:"#00E0FF"}]} incline = {30}
        
        >Guditton</RingChart>
        <RingChart>t4yyt</RingChart>
        
        {/* <div style={{border:"2px solid black"}} onClick={()=>{setLoad(true);console.log("clicked")}}>setload</div> */}
    </Div>
}
// background:"black"