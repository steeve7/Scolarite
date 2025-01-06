"use client"
import { Br, Center, CEXModel, FlipX, genId, Pd, Title, XMFlip, XMRadio } from "@/components/addons/addons";
import { Div,Span, LoadUi, PureDoubleGridWrapper, RingChart, Text, H1, BCard, CircleChart, BarChart, css, LessonLabel, LineChart, AreaChart, ImageText } from "@/components/addons/addons2";
import { useEffect } from "react";
import styles from "./style.module.css"
import w12image from "./assets/w12image.png"
import ncimage from "./assets/ncimage.png"
import ycimage from "./assets/ycimage.png"
import mimage from "./assets/mimage.png"
import Image from "next/image";
import { number } from "prop-types";
// import sound from "./assets/Disconnect .m4a"
var nums = (len)=>genId("n",len)
const testdata = [
    {
      name: 'Mon',
      value:nums(4),
      pv:nums(4),
      amt: nums(4),
    },
    {
      name: 'Tue',
      value:nums(4),
      pv:nums(4),
      amt: nums(4),
    },
    {
      name: 'Wed',
      value:nums(4),
      pv:nums(4),
      amt: nums(4),
    },
    {
      name: 'Thr',
      value:nums(4),
      pv:nums(4),
      amt: nums(4),
    },
    {
      name: 'Fri',
      value:nums(4),
      pv:nums(4),
      amt: nums(4),
    },
    {
      name: 'Sat',
      value:nums(4),
      pv:nums(4),
      amt: nums(4),
    },
    {
      name: 'Sun',
      value:nums(4),
      pv:nums(4),
      amt: nums(4),
    },

  ];

export function GoalCard({done = false,title="fgfg",label1="rvvbvb",...props}){
    const typeImageSelect = {
        "done":ycimage,
        "notdone":ncimage,

    }
    var type = String(done? "done":"notdone").toLowerCase()

    return <ImageText {...css.borderBottomWidth("2px")} width="100%"  transition="border 0.3s ease-in-out"   gap="20px" imageHeight="20px" padding="10px"
       src={typeImageSelect[type]}
       {...props}
       >
        <Div display = "flex" {...css.justifyContent("space-between")} {...css.alignItems("center")}>
            <Div display = "flex" height="100%" width="100%" {...css.flexDirection("column")}>
                <H1 fontSize="20px" color="rgba(18, 18, 18, 1)" {...css.textDecoration(done?"line-through":"initial")}>{title}</H1>
                <Div display="flex" gap="30px">
                    {label1 && <ImageText color="rgba(65, 71, 94, 1)" eximage={true} fontSize="14px" imageHeight="15px">{label1}</ImageText>}
                </Div>
            </Div>
            
        </Div>

       </ImageText>
}


export default function Home(){
    var loadevent = new CEXModel("loadui")
    var PerfRadio = new CEXModel("perfradio")
    var loadchannelname = "homeload"
    var perfdata = {name:"",value:90.644,color:"rgba(38, 43, 61, 1)",max:100}
    var setLoad = (val)=>loadevent.CEXDispatch(loadchannelname,{isloading : val})
    useEffect(()=>{
        console.log("loaded")
        PerfRadio.CEXDispatch("pefrad",{value:"0"})
        setTimeout(()=>{setLoad(false)},1000)
    })
    
    return <Div  minHeight="100vh" width="100vw" >
        <LoadUi channel={loadchannelname} model={loadevent} />
        <Br pady={20}></Br>
        <PureDoubleGridWrapper gap={"20px"} paddingBlock = "15px" borderBottom="2px solid black" marginInline="4%" className={styles.w1} px={780}>
            <Div className={styles.w11}>
                <Div className={styles.w11inner} padding="2rem" display="flex" flexDirection="column" gap="20px">
                    <Div className={styles.w11title} fontSize="30px" >Welcome,
                        <Br></Br>
                        <Div fontWeight="bolder">Okechukwu Ogbonna!</Div>
                        <Br></Br>
                        Your path to success starts Here
                    </Div>
                    <Text className={styles.w11text} fontSize="13px" color="rgba(113, 113, 122, 1)" fontWeight="bold">Ready to continue your journey to academic excellence? Let’s dive in!</Text>
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
            <PureDoubleGridWrapper gap="30px" GTC="1fr 0.5fr" px={1500}>
                <PureDoubleGridWrapper gap="30px" GTC="1fr 1fr" width="100%">
                    <BCard width="100%">
                        <H1 fontSize="25px">Performance</H1>
                        <Br pady={20}></Br>
                        <Div borderRadius="21.32px" padding="15px" paddingInline="20px" border = "1.78px solid rgba(229, 231, 233, 1)">
                            <Div width = "100%" display="flex" alignItems = "center" gap="10px" justifyContent = "space-between" >
                                <Div display="flex" alignItems = "center" gap="8px" fontSize ="14px"> <Span minWidth = "20px" height = "20px" backgroundColor = "rgba(38, 43, 61, 1)" borderRadius = "5px"></Span> See your performance trends and track improvements.</Div>
                                <Div backgroundColor="rgba(239, 241, 243, 1)" paddingBlock = "5px" borderRadius="5px" display="flex" alignItems="center" gap="10px" paddingInline="16px">Monthly <Div><svg width="16" height="8" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.71875 1.70312C1.71875 1.70312 8.81319 9.68899 10.5868 9.68899C12.3604 9.68899 19.4548 1.70312 19.4548 1.70312" stroke="#82888F" strokeWidth="2.66479" strokeLinecap="round"/>
                                </svg>
                            </Div></Div>
                            </Div>
                            <Br pady={30}></Br>
                            <Center>
                                <CircleChart max = {perfdata.max} data={[perfdata]} startAngle={180+30} endAngle={-30}  maxColor="rgba(248, 239, 226, 1)" bound={180}>
                                    <Div rotate="-135deg" transform={`rotateZ(${((perfdata.value/perfdata.max)*(180+(30*2))+10)}deg) `} maxHeight="25px" display="flex" justifyContent="center" alignItems="end" overflow="visible" minHeight="25px" >
                                        <Image src={mimage} style={{height:"70px",width:"auto",objectFit:"contain"}} alt="logo not found"></Image>
                                    </Div>
                                </CircleChart>
                            </Center>
                            <Br></Br>
                            <Center>
                                <Div display="flex" alignItems="center" gap="10px"><Span fontSize="20px" fontWeight="bolder" color="rgba(131, 134, 142, 1)">your grade:</Span> <Span fontWeight="bold" fontSize="25px">{perfdata.value}</Span></Div>
                            </Center>
                        </Div>
                    </BCard>
                    <BCard width="100%">
                    <H1 fontSize="25px">Hours Spent</H1>
                    <Br pady={20}></Br>
                    <Div display="inline-flex"  alignItems = "center" gap="8px" fontSize ="14px"> <Span minWidth = "20px" width = "20px" height = "20px" backgroundColor = "rgba(38, 43, 61, 1)" borderRadius = "5px"></Span> Study</Div>
                    <Pd></Pd>
                    <Div display="inline-flex"  alignItems = "center" gap="8px" fontSize ="14px"> <Span minWidth = "20px" width = "20px" height = "20px" backgroundColor = "rgba(248, 239, 226, 1)" borderRadius = "5px"></Span>Online Test</Div>
                        <Br pady={20}></Br>
                        <Center>
                            <AreaChart data={testdata} width={400} height={300} ady={false} lineConfig ={ [{
                                    XDataKey:"name",
                                    YDataKey:"value",
                                    stroke:"rgba(38, 43, 61, 1)",
                                    fill:"rgba(38, 43, 61, 1)",
                                },{
                                    XDataKey:"name",
                                    YDataKey:"pv",
                                    stroke:"rgba(248, 239, 226, 1)",
                                    fill:"rgba(248, 239, 226, 1)",
                                }]}></AreaChart>
                        </Center>
                    </BCard>
                </PureDoubleGridWrapper>
                <BCard width="100%" padding="20px" paddingInline="30px">
                    <H1 fontSize="18px">Goals for the Week</H1>
                    <GoalCard title="New mock test! Try now."  label1="Tuesday, 30 June 2024" ></GoalCard>
                    <GoalCard title="New mock test! Try now."  label1="Tuesday, 30 June 2024" ></GoalCard>
                    <GoalCard title="New mock test! Try now."  label1="Tuesday, 30 June 2024" ></GoalCard>
                    <GoalCard title="New mock test! Try now." done label1="Tuesday, 30 June 2024" ></GoalCard>
                    <GoalCard title="New mock test! Try now." done label1="Tuesday, 30 June 2024" ></GoalCard>
                </BCard>
            </PureDoubleGridWrapper>
            {<Br pady={50}></Br>}
            <BCard width="100%"  padding="20px">
                <H1 fontSize="25px">Jump Right Back In</H1>
               
                <Br pady={30}></Br>
                <LessonLabel title={"Advanced Physics"} label1={"15 Lessons"} label2={"Mock Test"} height="80px" play width="100%" ></LessonLabel>
                <Br pady={20}></Br>
                <LessonLabel title={"Advanced Physics"} label1={"15 Lessons"} label2={"Mock Test"} height="80px" play width="100%" ></LessonLabel>
            </BCard>
        </Div>
        <Pd pady={50} />
        {/* <BarChart data ={testdata}  YDataKey="uv" XDataKey="name"></BarChart> */}
        
    </Div>
}
// background:"black"
// transform={`rotateZ(${((perfdata.value/perfdata.max)*360)}deg)`}