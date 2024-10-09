import style from "./nav.module.css"

export default function NavBar(props){
    var pages = [
        "Home",
        "About",
        "Blog",
        "Pricing"
    ]
    var current = props.current
    return (
        <div className={style.navbar}>
            <div className=""></div>
            <div className="">
                {
                    pages.map(page=>
                        <a className={style.navlinks}> </a>
                    )
                }
            </div>
            <div className=""></div>
        </div>
    )
}