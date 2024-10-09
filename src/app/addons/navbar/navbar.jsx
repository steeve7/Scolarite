import { mergeText } from "@/app/add"
import style from "./style.module.css"

export default function NavBar(props){
    var pages = [
        {nameTitle:["home","Home"]},
        {nameTitle:["about","About Us"]},
        {nameTitle:["blog","Blog"]},
        {nameTitle:["pricing","Pricing Plan"]}
    ]
    var current = props.current
    return (
        <div className={mergeText("flex items-center justify-between",style.navbar)}>
            <div className={mergeText(style.navitem,style.naviconwrapper)}>

            </div>
            <div className={style.navitem}>
                {
                    pages.map((page, index)=>
                        <a key={`pagenavkeyindex${index}`}
                         href={`/${page.nameTitle[0]}`}
                          className={[style.navlink , current == page.nameTitle[0]?style.navcurrent:""]} 
                           > {page.nameTitle[1]} </a>
                    )
                }
            </div>
            <div className={style.navitem}></div>
        </div>
    )
}