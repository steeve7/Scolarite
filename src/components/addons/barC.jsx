import { genId } from "./addons"
import { Div } from "./addons2"
var nums = (len)=>genId("n",len)

export var textdata = [
    {
        XName:"Mon",
        y:nums(2),
        z:50,
        YSuffix:"hr"
    },
    {
        XName:"Tues",
        y:nums(2),
        z:50,
        YSuffix:"hr"
    },
    {
        XName:"Wed",
        y:nums(2),
        z:50,
        YSuffix:"hr"
    },
    {
        XName:"Thurs",
        y:nums(2),
        z:50,
        YSuffix:"hr"
    },
    {
        XName:"Fri",
        y:nums(2),
        z:50,
        YSuffix:"hr"
    },
    {
        XName:"Sat",
        y:nums(2),
        z:50,
        YSuffix:"hr"
    },
    {
        XName:"Sun",
        y:nums(2),
        z:50,
        YSuffix:"hr"
    },
    
]

export function CBarChart({data = textdata,xkey,ykeys=["y","z"],ysuf}){
        
        return <Div>
                
        </Div>
}