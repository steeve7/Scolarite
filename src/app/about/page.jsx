import Image from "next/image"
import { mergeText } from "../add"
import style from "./style.module.css"
import w1i1 from "./assets/w1i1.png"
import w2i1 from "./assets/w2i1.png"
import Link from "next/link"


function G2Wrapper(props){
    return <section  className={mergeText(props.className,style.g2wrapper)} >
        {props.children}
    </section>
}

export default function AboutPage(props){
    return(<>
    <main className={mergeText("snap-y snap-mandatory",style.main)}>
        <G2Wrapper className={style.wrapper1}>
            <div className={mergeText(style.wrapperimagewrapper,style.wrapper1item1)}>
                <Image src={w1i1} className={mergeText(style.imgAni,style.wrapperimage)} alt="about us" />
            </div>
            <div className={style.wrapper1item2}>
                <div className={style.pagename}><span className={style.pagenameline}></span> About us</div>
                <div className={style.title}>Empowering Aspirants: THE SCOLARITE STORY</div>
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
            <div className={mergeText(style.wrapper2i2title,style.title)}>Our Mission & Vision</div>
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
        
    </main>
   
    </>)
}