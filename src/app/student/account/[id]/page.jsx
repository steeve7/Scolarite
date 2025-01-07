"use client"
import { Br, CEXModel, FlipX, Pd, XMFlip, XMRadio } from "@/components/addons/addons";
import { Div,Span, LoadUi, PureDoubleGridWrapper, RingChart, Text, Audi0, LessonLabel, BCard, H1, css, CImage, Hr, Input, Img, FilterKeys } from "@/components/addons/addons2";
import { useEffect } from "react";
import styles from "./style.module.css"
import w12image from "./assets/w12image.png"
import picimage from "./assets/picimage.png"
import Image from "next/image";
import { number } from "prop-types";
// import sound from "./assets/Disconnect .m4a"

export function LabeledInput({label,placeholder,value,onChange,className,...props}){
    return <Div width="100%" {...FilterKeys(props,(key)=>String(key).includes("$"),(key)=>String(key).replace("$",""))}>
        <Div color="rgba(76, 83, 95, 1)" fontSize="20px" fontWeight="500">{label}</Div>
        <Br pady={10}></Br>
        <Input padding="15px" outline="none" borderRadius="10.56px" paddingInline="20px" width="100%" placeholder={placeholder} background="rgba(237, 242, 246, 1)" border = "2.32px solid rgba(224, 228, 236, 1)" value={value} onChange={onChange} className={className} {...props} />
    </Div>
}

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
    function ProfilePicload(){
        const fileLabel = document.getElementById("profilePicLabel")
        const fileScanner = document.getElementById("profilePic")
        const fileImager = document.getElementById("profilePicImage")
        const fileClicker = document.getElementById("profilePicImageClicker")
        fileScanner.addEventListener("change",()=>{
            const files = fileScanner.files
            if (files.length > 0) {
                const file = files[0]
                const reader = new FileReader();

                // Load file as a data URL
                reader.onload = (e) => {
                    fileImager.src = e.target.result; // Set the image source
                    console.log(fileImager.src)
                };

                reader.readAsDataURL(file); // Read the file as a Data URL
                fileLabel.innerHTML = `${file.name} | ${Math.round(file.size/1024)} MB `
                fileClicker.style.display = "none"
                fileImager.style.display = "block"
            }
        })
        fileScanner.click()
    }


    return <Div  minHeight="100vh" maxWidth="1500px">
        <LoadUi channel={loadchannelname} model={loadevent} />
        <PureDoubleGridWrapper gap={"20px"} paddingBlock="20px" borderBottom="2px solid black" marginInline="4%" className={styles.w1} px={780}>
            <Div  className={styles.w11}>
                <Div className={styles.w11inner} padding="2rem" display="flex" flexDirection="column" gap="20px">
                    <Div className={styles.w11title} fontSize="30px" fontWeight="bolder">Manage Your Profile</Div>
                    <Text className={styles.w11text} fontSize="13px" color="rgba(113, 113, 122, 1)" fontWeight="bold">Update your personal information and preferences here to keep your profile current.</Text>
                    {/* <Audi0 border="2px solid black"  src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"} controls ></Audi0>  */}
                </Div>    
            </Div> 
            <Div >
                <Div   className={styles.w12inner}>
                    <CImage className={styles.w12image} maxHeight="500px" width="fit-content"  src={w12image} alt="logo unavaliable"></CImage>
                </Div>
            </Div>
        </PureDoubleGridWrapper>
        <Pd />
        <Div paddingInline ="2rem" width="100%" height = "100%">
            <Div display="flex" overflowX="auto" paddingBottom="20px" gap="20px">
                <Div paddingBlock ="5px" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"0"})}>Account  Setting<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} isdefault channel={"pefrad"} value={"0"} ></XMRadio></Div>
                <Div paddingBlock ="5px" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"1"})}>Login & Security<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} channel={"pefrad"} value={"1"} ></XMRadio></Div>
                <Div paddingBlock ="5px" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"2"})}>Purchase History<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} channel={"pefrad"} value={"2"} ></XMRadio></Div>
                <Div paddingBlock ="5px" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"3"})}>Subscription<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} channel={"pefrad"} value={"3"} ></XMRadio></Div>
            </Div>
            <Pd pady={50}></Pd>
            <XMFlip minHeight="500px" eventModel={FlipEM} background="" channel={"filp1"} >
                <Div  width="100%">
                    <Div fontSize="20px" color="rgba(76, 83, 95, 1)" fontWeight="bold" id="profilePicLabel">Your Profile  Picture</Div>
                    <Br pady={20}></Br>
                    <Input type="file" id="profilePic" name="profilePic" accept="image/*" hidden ></Input>
                    <Div display="flex" gap="20px">
                        <CImage src={picimage} id="profilePicImageClicker"   onClick={()=>ProfilePicload()} width="fit-content" height="150px"></CImage>
                        <Img src={picimage} id="profilePicImage" display="none" onClick={()=>ProfilePicload()} width="fit-content" height="150px"></Img>
                    </Div>
                    <Br pady={30}></Br>
                    <Hr borderWidth="2px"></Hr>
                    <Br pady={30}></Br>
                    <PureDoubleGridWrapper px={600} gap={"20px"}>
                       <Div display="flex" {...css.flexDirection("column")} gap="20px" width="100%">
                        <LabeledInput label="Full name" placeholder={"Please enter your full name"}></LabeledInput>
                        <LabeledInput label="Username" placeholder={"Please enter your Username"}></LabeledInput>
                       </Div>
                       <Div display="flex" {...css.flexDirection("column")} gap="20px" width="100%">
                       <LabeledInput label="Email" placeholder={"Please enter your email"}></LabeledInput>
                       <LabeledInput label="Phone number" type="number" placeholder={"Please enter your phone number"}></LabeledInput>
                       </Div>
                    </PureDoubleGridWrapper>
                </Div>
                <Div width="100%">tybnm,.hj</Div>
            </XMFlip>
        </Div>
        <Pd pady={50} />

      {/*   <RingChart color="black" fontSize="20px" textTransform="uppercase" fontWeight="bold" innerRadius={80} outerRadius = {100} max={1000} bound = {300}
        data={[{name:"",value:333,color:"#013133"},{name:"",value:333,color:"#007946"},{name:"",value:333,color:"#00E0FF"}]} incline = {30}
        
        >Guditton</RingChart>
        <RingChart>t4yyt</RingChart> */}
        
        {/* <div style={{border:"2px solid black"}} onClick={()=>{setLoad(true);console.log("clicked")}}>setload</div> */}
    </Div>
}
// background:"black"