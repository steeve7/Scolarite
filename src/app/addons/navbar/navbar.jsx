import style from "./nav.module.css"

export default function NavBar(props){
    var pages = [
        {nameTitle:["home","Home"]},
        {nameTitle:["about","About Us"]},
        {nameTitle:["blog","Blog"]},
        {nameTitle:["pricing","Pricing Plan"]}
    ]
    var current = props.current
    return (
        <div className={style.navbar}>
            <div className=""></div>
            <div className="">
                {
                    pages.map((page, index)=>
                        <a key={`pagenavkeyindex${index}`} href={`/${page.nameTitle[0]}`} className={style.navlinks} > {page.nameTitle[1]} </a>
                    )
                }
            </div>
            <div className=""></div>
        </div>
    )
}