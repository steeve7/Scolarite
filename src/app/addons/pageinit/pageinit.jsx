import { mergeText } from "@/app/add"
import NavBar from "../navbar/navbar"
import style from "./style.module.css"

export default function PageInit (props){
    return <main className={mergeText("grid grid-cols-[auto_1fr]",style.pageinit)}>
        <NavBar current ={props.current}/>
        <main className={style.pagecontent}>
            {props.children}
        </main>
    </main>
}