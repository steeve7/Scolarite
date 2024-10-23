"use client"
import Image from "next/image"
import { mergeText } from "../add"
import w1i1 from "./assets/w1i1.png"
import w2i1 from "./assets/w2i1.png"
import w3i2 from "./assets/w3i1.png"
import Link from "next/link"
import { AInput, CButton, CInput, G2Wrapper, getElementPositionRelativeToParent, rclick, Title } from "./addons"
import style from "./style.module.css"
import { useRouter } from "next/navigation"



export default function AboutPage(props){
    // console.log(router)
    return(<>
    <main className={mergeText("snap-y snap-mandatory",style.main)}>
        {/* <CustomInput placeholder={"placeholder test"}></CustomInput> */}
        <G2Wrapper className={style.wrapper1}>
            <div className={mergeText(style.wrapperimagewrapper,style.wrapper1item1)}>
                <Image src={w1i1} className={mergeText(style.imgAni,style.wrapperimage)} alt="about us" />
            </div>
            <div className={style.wrapper1item2}>
                <div className={style.pagename}><span className={style.pagenameline}></span> About us</div>
                <Title className={style.title}>Empowering Aspirants: THE SCOLARITE STORY</Title>
                <div className={style.wrapper1i2content}>
                Over the last few decades, students’ performance in the JAMB examination across Nigeria has been steadily declining. In 2024, over 78% of students scored below 200. This result is both abysmal and unacceptable given the high academic potential of Nigerian students. For instance, one of our founding partners scored 207 in the 2013 JAMB examination but went on to graduate with a first-class degree from a top Nigerian university. Obviously, his JAMB score was not a true reflection of his true academic ability and this applies to many students who have taken JAMB examination in Nigeria. 
                    <br /> <br />
                    At Scolarite’ after careful analysis, we have identified the core problems faced by most JAMB students. These are:
                    <ol className={style.orderedlist}>
                        <li>Poor systematic study materials that are not foolproof.</li>
                        <li>Inadequate JAMB-specific preparation.</li>
                        <li>Non-existent personalised study methodology.</li>
                    </ol>
                    <br /> 
                    <div>In view of the foregoing, Scolarite’ was founded to revolutionize the preparation process for JAMB students to comprehensively address these challenges. The principle we will show you will help teach students how to effectively study for any examination in the future and achieve academic excellence.</div>
                    <br /><Link href="/" className={style.joinbtn}>Join Us</Link>
                </div>
            </div>
        </G2Wrapper>
        <G2Wrapper className={style.wrapper2}>
            <div className={mergeText(style.wrapperimagewrapper,style.wrapper2item1)}>
                <Image src={w2i1} className={mergeText(style.imgAnir,"anidelay-600 ",style.wrapper2i1img)}  alt="about us" />
            </div>
            <div className={style.wrapper2item2}>
            <Title className={mergeText(style.wrapper2i2title)}>Our Mission & Vision</Title>
                <div className={style.wrapper2i2content}>
                    <span className={style.w2i2cli1}>To be a global leader in educational services that enhance the quality of learning for people in Africa and beyond. </span>

                    <hr className={style.hr} />
                    <ol className={style.orderedlist}>
                        <li>Deliver accessible, seamless and high quality education.</li>
                        <li>Facilitate high quality education through cutting edge technologies</li>
                        <li>Foster a culture of life-long learning process</li>
                    </ol>
                </div>
            </div>
        </G2Wrapper> 
        <G2Wrapper className={style.wrapper3}>
        <div className={style.wrapper2item2}>
            <Title className={mergeText(style.wrapper3i1title)}>Our Results Speak the loudest!!!</Title>
                <div className={style.wrapper3i1content}>
                At Scolarité, we are a team of dedicated educators, innovators, and lifelong learners committed to academic excellence.
                </div>
            </div>
            <div className={mergeText(style.wrapperimagewrapper,style.wrapper3item1)}>
            <Image src={w3i2} className={mergeText(style.imgAni,style.wrapperimage)} alt="about us" />
            </div>
        </G2Wrapper>
        <div className={mergeText("flex flex-col gap-4 items-center w-full",style.wrapper3)}>
            <Title className = {style.wrapper3title}>
                Get In Touch
            </Title>
            <div className={style.wrapper3decs}>
                Send your message to us as a/an
            </div>
                <div className={style.w3switch}>
                    
                    <div className={mergeText(style.w3sit,style.w3before)} id="w3before">before</div>
                    <CButton className={mergeText(style.w3sit,style.w3switchitem)} onClick={e=>rclick(e)}>School</CButton>
                    <CButton className={style.w3switchitem} onClick={e=>rclick(e)}>Student</CButton>
                    <CButton className={style.w3switchitem} onClick={e=>rclick(e)}>Affiliate</CButton>
                
            </div>

            <div className={mergeText("",style.wrapper3inputwrapper)}>
                <AInput label="Full Name" placeholder="Portela John"/>
                <AInput label="Email" placeholder="johndoe@gmail.com"/>
                <AInput label="Phone" placeholder="phone number"/>
                <AInput label="Subject" placeholder="subject"/>
            </div>
            <AInput label="Message" placeholder="message" type="textarea" inClassName={style.wrapper3messageii} className={style.wrapper3messageinput}/>
            <div className={style.w3sendbtn}>
                SEND MESSAGE
            </div>
        </div>
        <div className={style.w4}>
            <img src="" alt="" className={style.w4i} />
            <div className={style.w4content}>
                <img src="" alt="" className={style.w4ci} />
                {/* div.{style.w4title}>.{w4text}>. */}
            </div>
            </div>

    </main>
   
    </>)
}