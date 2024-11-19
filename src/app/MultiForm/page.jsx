"use client"
import { CButton, Cg2wrapper, clickHidden, Flip } from "@/components/addons/addons"
import style from "./style.module.css"
import frame1i1 from "./assets/frame1i1.png"
import frame2i1 from "./assets/frame2i1.png"
import Image from "next/image"


export default function Page(props){
    const ImageList = [frame1i1,frame2i1,frame2i1]
    
    return <div className={style.main}>
        <Cg2wrapper height="100vh">
            <Flip Name={"frame1"}>
            
                {ImageList.map((image,i)=>
                <div key={i} className={style.imagewrap}>
                <Image src={image} alt="alt" style={{width:"100%"}}></Image>
             </div>
            )}
            </Flip>
            <div> <center>this is a test</center></div>
            <CButton onClick={()=>clickHidden("FB-frame1-FORWARD")}> button next</CButton>
            <CButton onClick={()=>clickHidden("FB-frame1-BACKWARD")}> button back</CButton>
        </Cg2wrapper>
    </div>
}