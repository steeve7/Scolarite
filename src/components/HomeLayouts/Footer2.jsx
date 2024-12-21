"use client"

import Image from "next/image"
import logo from "./assets/images/logo.png"
import { Center, Cg2wrapper } from "../addons/addons"


export default function Footer2(props){
    return <Cg2wrapper style={{backgroundColor:"rgba(38, 43, 61, 1)",height:"fit-content"}}>
        <Center>
            <div className="flex justify-center items-center gap-3">
                <Image src={logo} width={50} height={50}></Image>
                <div className="" style={{fontSize:"30px",color:"white"}}>Scolarité</div>
            </div>
            <div className="" style={{color:"rgba(255, 255, 255, 0.8)",fontSize:"14px"}}>
            Turning Potential into Excellence, One Student at a Time
            </div>
        </Center>
        <Center>
            <div className="" style={{color:"rgba(255, 255, 255, 0.8)",fontSize:"14px"}}>
            2024 © Scolarité. All rights reserved.

            </div>
        </Center>
    </Cg2wrapper>
}