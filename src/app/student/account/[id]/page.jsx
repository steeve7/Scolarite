"use client"
import { Br, CButton, CEXModel, FlipX, Pd, XMFlip, XMRadio } from "@/components/addons/addons";
import { Div,Span, LoadUi, PureDoubleGridWrapper, RingChart, Text, Audi0, LessonLabel, BCard, H1, css, CImage, Hr, Input, Img, FilterKeys, TextArea, AtMedia, ImageText, filterInStyles, filterOutStyles } from "@/components/addons/addons2";
import { useEffect, useState } from "react";
import styles from "./style.module.css"
import w12image from "./assets/w12image.png"
import picimage from "./assets/picimage.png"
import payimage from "./assets/payimage.png"
import corimage from "./assets/corimage.png"
import cadimage from "./assets/cadimage.png"
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
export function LabeledTextArea({label,placeholder,value,onChange,className,...props}){
    return <Div width="100%" {...FilterKeys(props,(key)=>String(key).includes("$"),(key)=>String(key).replace("$",""))}>
        <Div color="rgba(76, 83, 95, 1)" fontSize="20px" fontWeight="500">{label}</Div>
        <Br pady={10}></Br>
        <TextArea padding="15px" outline="none" borderRadius="10.56px" paddingInline="20px" width="100%" placeholder={placeholder} background="rgba(237, 242, 246, 1)" border = "2.32px solid rgba(224, 228, 236, 1)" value={value} onChange={onChange} className={className} {...props} />
    </Div>
}
export function StarIcon({bound="39",...props}){
    return <svg width={bound} height={bound} style={filterInStyles(props)} {...filterOutStyles(props)} viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9472 28.5845L27.4098 33.3125C28.3637 33.9169 29.5481 33.018 29.265 31.9045L27.1089 23.4229C27.0482 23.1866 27.0554 22.9381 27.1297 22.7057C27.2039 22.4734 27.3423 22.2668 27.5288 22.1096L34.2208 16.5397C35.1001 15.8078 34.6462 14.3485 33.5165 14.2752L24.7772 13.708C24.5418 13.6912 24.316 13.6078 24.1262 13.4677C23.9363 13.3275 23.7902 13.1363 23.7048 12.9163L20.4454 4.7083C20.3568 4.47479 20.1992 4.27376 19.9937 4.1319C19.7881 3.99004 19.5443 3.91406 19.2945 3.91406C19.0448 3.91406 18.8009 3.99004 18.5954 4.1319C18.3898 4.27376 18.2323 4.47479 18.1437 4.7083L14.8843 12.9163C14.7989 13.1363 14.6527 13.3275 14.4629 13.4677C14.273 13.6078 14.0472 13.6912 13.8118 13.708L5.07251 14.2752C3.94279 14.3485 3.48895 15.8078 4.36825 16.5397L11.0603 22.1096C11.2468 22.2668 11.3851 22.4734 11.4594 22.7057C11.5336 22.9381 11.5408 23.1866 11.4801 23.4229L9.48056 31.2886C9.14089 32.6248 10.5621 33.7035 11.7068 32.9782L18.6418 28.5845C18.8369 28.4603 19.0633 28.3944 19.2945 28.3944C19.5257 28.3944 19.7521 28.4603 19.9472 28.5845V28.5845Z" fill="#262B3D"/>
    </svg>
    
}
export function UpArrowIcon({width="34",height="34",color="white",...props}){
    return <svg width={width} height={height} style={filterInStyles(props)} {...filterOutStyles(props)} viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.0781 39.0938V7.84375" stroke={color} strokeWidth="2.84091" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.2969 20.625L23.081 7.84091L35.8651 20.625" stroke={color} strokeWidth="2.84091" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    
}
export function Courselabel({rating,title,author,price,reviews,ISB=true,...props}){
    return <Div border={ISB?" 1.89px solid rgba(233, 234, 240, 1)":undefined} padding="10px" {...props} display="grid"  {...css.gridTemplateColumns("1fr 0.4fr")}>
        <Div display="flex" flexDirection="column" gap="10px">
            <Div color="rgba(140, 148, 163, 1)" display="flex" {...css.alignItems("center")} gap="5px" fontSize="17px" fontWeight="bold"><StarIcon bound="27" /> <Div color="rgba(29, 32, 38, 1)">{rating}</Div> ({reviews} Review) </Div>
            <Div color="rgba(29, 32, 38, 1)" fontSize="20px" fontWeight="bold">{title}</Div>
            <Div color="rgba(161, 165, 179, 1)" fontSize="17px" display="flex" gap="5px" fontWeight="bold">Course by: <Div color="rgba(78, 85, 102, 1)">{author}</Div></Div>
        </Div>
        <Div height="100%" display="grid" placeItems="center" fontSize="23px">{price}</Div>
    </Div>
}
export default function Home(){
    var loadevent = new CEXModel("loadui")
    var FlipEM = new CEXModel("sliders")
    var PerfRadio = new CEXModel("perfradio")
    var loadchannelname = "homeload"
    var [isloaded,setisloaded] = useState(false)
    var [phs,setphs] = useState([{is:false}])
    var setLoad = (val)=>loadevent.CEXDispatch(loadchannelname,{isloading : val})
    useEffect(()=>{
        console.log("loaded")
        PerfRadio.CEXDispatch("pefrad",{value:"0"})
        setTimeout(()=>{setLoad(false);setisloaded(true)},1000)
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
                fileLabel.innerHTML = `${file.name} | ${Math.round(file.size/1024)} KB `
                fileClicker.style.display = "none"
                fileImager.style.display = "block"
            }
        })
        fileScanner.click()
    }


    return <Div  minHeight="100vh" >
        {!isloaded && <LoadUi channel={loadchannelname} model={loadevent} />}
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
        <Div paddingInline ="1.5rem" width="100%" height = "100%">
            <Div display="flex" overflowX="auto" paddingBottom="20px" gap="20px">
                <Div paddingBlock ="5px" fontWeight="bolder" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"0"})}>Account  Setting<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} isdefault channel={"pefrad"} value={"0"} ></XMRadio></Div>
                <Div paddingBlock ="5px" fontWeight="bolder" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"1"})}>Login & Security<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} channel={"pefrad"} value={"1"} ></XMRadio></Div>
                <Div paddingBlock ="5px" fontWeight="bolder" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"2"})}>Purchase History<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} channel={"pefrad"} value={"2"} ></XMRadio></Div>
                <Div paddingBlock ="5px" fontWeight="bolder" transition = "color 0.3s ease-in-out,border-color 0.3s ease-in-out" paddingInline = "1.6rem" borderBottom = "2px solid black" onClick={()=>PerfRadio.CEXDispatch("pefrad",{value:"3"})}>Subscription<XMRadio eventModel={PerfRadio} onEvent={PrefonEvent} valueListener={PrefValueListen} channel={"pefrad"} value={"3"} ></XMRadio></Div>
            </Div>
            <Pd pady={50}></Pd>
            <XMFlip minHeight="500px" eventModel={FlipEM} background="" channel={"filp1"} >
                <Div comment="Account Setting" width="100%">
                    <Div fontSize="20px" color="rgba(76, 83, 95, 1)" fontWeight="bold" id="profilePicLabel">Your Profile  Picture</Div>
                    <Br pady={20}></Br>
                    <Input type="file" id="profilePic" name="profilePic" accept="image" hidden ></Input>
                    <Div display="flex" gap="20px">
                        <CImage src={picimage} id="profilePicImageClicker"   onClick={()=>ProfilePicload()} width="fit-content" height="150px"></CImage>
                        <Img src={picimage} id="profilePicImage" display="none" onClick={()=>ProfilePicload()} width="fit-content" height="150px"></Img>
                    </Div>
                    <Br pady={30}></Br>
                    <Hr borderWidth="2px"></Hr>
                    <Br pady={30}></Br>
                    <PureDoubleGridWrapper px={800} gap={"20px"}>
                       <Div display="flex" {...css.flexDirection("column")} gap="20px" width="100%">
                        <LabeledInput label="Full name" placeholder={"Please enter your full name"}></LabeledInput>
                        <LabeledInput label="Username" placeholder={"Please enter your Username"}></LabeledInput>
                       </Div>
                       <Div display="flex" {...css.flexDirection("column")} gap="20px" width="100%">
                       <LabeledInput label="Email" placeholder={"Please enter your email"}></LabeledInput>
                       <LabeledInput label="Phone number" type="number" placeholder={"Please enter your phone number"}></LabeledInput>
                       </Div>
                    </PureDoubleGridWrapper>
                    <Br pady={20}></Br>
                    <LabeledTextArea label="Bio" type="text" placeholder={"Write your Bio here e.g your hobbies, interests ETC"}></LabeledTextArea>
                    <Br pady={20}></Br>
                    <Div display="flex" gap="20px">
                        <CButton backgroundColor="black" paddingBlock="10px" paddingInline="20px" borderRadius="10px" color="white" width="fit-content">Update Profile</CButton>
                        <CButton backgroundColor="rgba(237, 242, 246, 1)" paddingBlock="10px" paddingInline="20px" borderRadius="10px" color="rgba(76, 83, 95, 1)" width="fit-content">Cancel</CButton>
                    </Div>
                </Div>
                <Div comment="Login & Security" width="100%">
                    <Br pady={30}></Br>
                    <PureDoubleGridWrapper {...css.placeItems("start")}  px={800} gap={"20px"}>
                       <Div display="flex" {...css.flexDirection("column")} gap="20px" width="100%">
                        <LabeledInput label="Current Password" placeholder={"**************************"}></LabeledInput>
                        <LabeledInput label="New Password" placeholder={"Please enter New Password"}></LabeledInput>
                       </Div>
                       <Div display="flex" {...css.flexDirection("column")} gap="20px" width="100%">
                       <LabeledInput label="Confirm New Password" placeholder={"Please enter New Password"}></LabeledInput>
                       <Div width="100%" height="100px" className={styles.uselessgap1}> <AtMedia pixels={800} styleAtDefault={{display:"block"}} styleAtMedia={{display:"none"}} className={styles.uselessgap1}></AtMedia></Div>
                       </Div>
                    </PureDoubleGridWrapper>
                    <Br pady={50}></Br>
                    <Div display="flex" gap="20px">
                        <CButton backgroundColor="black" paddingBlock="10px" paddingInline="20px" borderRadius="10px" color="white" width="fit-content">Update Profile</CButton>
                        <CButton backgroundColor="rgba(237, 242, 246, 1)" paddingBlock="10px" paddingInline="20px" borderRadius="10px" color="rgba(76, 83, 95, 1)" width="fit-content">Cancel</CButton>
                    </Div>
                </Div>
                <Div comment="Purchase History" width="100%">
                    <Div comment="Component" width="100%">
                        <Div  comment="wrapper" width="100%" border="1.89px solid rgba(233, 234, 240, 1)" padding="10px" display="grid" {...css.gridTemplateColumns("1fr auto")} gap="20px">
                            <Div comment="inner wrapper"  display="flex" {...css.flexDirection("column")} gap="10px" width="100%">
                                <Div comment="text" fontSize="20px" fontWeight="bold">1st Septembar, 2021 at 11:30 PM</Div>
                                <Div comment="imagetext wrapper" display="flex" gap="10px" width="100%" overflowX="visible">
                                    <ImageText fontSize="13px" gap="7px" src={corimage}>3 Courses</ImageText>
                                    <ImageText fontSize="13px" gap="7px" src={payimage}>$75.00 USD</ImageText>
                                    <ImageText fontSize="13px" gap="7px" src={cadimage}>Credit Card</ImageText>
                                </Div>
                            </Div>
                            <Div background="rgba(245, 247, 250, 1)" id="PHw0" display="grid" width="60px" scale="0.8" placeItems="center">
                                <UpArrowIcon transition="rotate 0.3s ease-in-out" id="PHL0" rotate="180deg"  color="black" onClick={()=>{
                                    document.getElementById("PHC0").style.display = document.getElementById("PHC0").style.display=="block"?"none":"block"
                                    document.getElementById("PHL0").style.rotate = document.getElementById("PHL0").style.rotate=="180deg"?"0deg":"180deg"

                                    // setphs([{is:!phs[0].is}])
                                    
                                    // setphs([{is:!phs[0].is}])

                                    }}></UpArrowIcon>
                            </Div>
                        </Div>
                        <Div comment="wrapper" id="PHC0" display="none" >
                            <Courselabel title="Software Engineering" rating={"4.7"} reviews={"451,444"} author={"Scolarite Team"} price={"$13.99"}></Courselabel>
                            <Courselabel title="Software Engineering" rating={"4.7"} reviews={"451,444"} author={"Scolarite Team"} price={"$13.99"}></Courselabel>
                            <Courselabel title="Software Engineering" rating={"4.7"} reviews={"451,444"} author={"Scolarite Team"} price={"$13.99"}></Courselabel>
                        </Div>
                    </Div>
                </Div>
                <Div comment="Subscription" width="100%">
                <PureDoubleGridWrapper border="1.89px solid rgba(233, 234, 240, 1)" GTC="1fr 1fr" gap={"20px"} padding="10px">
                    <Courselabel ISB={false} width="100%" title="Software Engineering" rating={"4.7"} reviews={"451,444"} author={"Scolarite Team"} price={"$13.99"}></Courselabel>
                    <Div width="100%" display="grid" placeItems="center"  gap="20px">
                        <Div display="flex" gap="20px">
                            {<CButton paddingBlock="10px" paddingInline="20px" borderRadius="20px" color="black" width="fit-content" backgroundColor="rgba(245, 247, 250, 1)">Cancel </CButton>}
                            <CButton paddingBlock="10px" paddingInline="20px" borderRadius="20px" color="white" width="fit-content" backgroundColor="rgba(38, 43, 61, 1)">Auto Subscription</CButton>
                        </Div>
                    </Div>
                </PureDoubleGridWrapper>
                </Div>
            </XMFlip>
        </Div>
        <Pd pady={50} />

      {/*   <RingChart color="black" fontSize="20px" textTransform="uppercase" fontWeight="bold" innerRadius={80} outerRadius = {100} max={1000} bound = {300}
        data={[{name:"",value:333,color:"#013133"},{name:"",value:333,color:"#007946"},{name:"",value:333,color:"#00E0FF"}]} incline = {30}
        
        >Guditton</RingChart>
        <RingChart>t4yyt</RingChart>}
        
        {/* <div style={{border:"2px solid black"}} onClick={()=>{setLoad(true);console.log("clicked")}}>setload</div> */}
    </Div>
}
// background:"black"