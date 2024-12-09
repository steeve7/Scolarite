import React from "react";

export function ListChildren(children,CloneWithProps = {}){
    const childrenWithProps = React.Children.map(children, (child,index) =>
        React.cloneElement(child, { key: index, ...CloneWithProps })
      );
    return childrenWithProps

}


//  
// WSABOTAG:class {

  // INFILTRATE(
      // {selector = "*",
      // id = undefined,
      // injectstyle = {display:"none"}}
  // ){
      // if (window){
          // var ELList
          // if (id){
              // var ELList = [document.getElementById(id)]
          // }else{
              // var ELList = document.querySelectorAll(`html ${selector}`)
          // }
          // ELList.forEach((el)=>{
              // for(var key in injectstyle){
                  // el.style[key] = injectstyle[key]
              // }
          // })
          // }

      // }
  // FORCEBUG(){
      // if (window){
          // throw "HACK.FORCEBUG"
      // }

  // }
  // RELOAD(){
      // if (window){
          // window.location.reload()
      // }
  // }

  // REDIRECT({link}){
      // if (window){
          // window.location.href = link
      // }
  // }

  // GLITCH({selector = "*",id = undefined,speed = 0.5}){
      // if (window){
          // var ELList
          // if (id){
              // var ELList = [document.getElementById(id)]
          // }else{
              // var ELList = document.querySelectorAll(`html ${selector}`)
          // }
          // ELList.forEach((el)=>{
              // /* var html = document.querySelectorAll(`html`)
              // el.parentElement.removeChild(el)
              // html.appendChild(el) */
              // setInterval(()=>{
                  // el.style.position = "absolute"
                  // el.style.top = `${Math.random()* 200}px`
                  // el.style.left = `${Math.random()* 200}px`
                  // el.style.height = `${Math.random()* window.innerHeight}px`
                  // el.style.width = `${Math.random()* window.innerWidth}px`
                  // el.style.translate = `-${Math.random()*100}px -${Math.random()*100}px`
              // },Math.floor(speed*1000))
          // })
          // }  
  // }

  // BLUR({selector = "*",id = undefined,value = 10}){
      // this.INFILTRATE({selector:selector,id:id,injectstyle:{filter:`blur(${value}px)`}})
  // }
  // OPACITY({selector = "*",id = undefined,value = 0.5}){
      // this.INFILTRATE({selector:selector,id:id,injectstyle:{opacity:`${value}`}})
  // }

  // START()
  // {
      // if (window){
          // this.GLITCH({speed:1})
      // }
  // }


  // STOP(){
      // if (window){
          // window.location.reload()
      // }
  // }

  // SCHATHER({selector = "*",id = undefined}){
      // if (window){
          // var ELList
          // if (id){
              // var ELList = [document.getElementById(id)]
          // }else{
              // var ELList = document.querySelectorAll(`html ${selector}`)
          // }
          // ELList.forEach((el)=>{
              // /* var html = document.querySelectorAll(`html`)
              // el.parentElement.removeChild(el)
              // html.appendChild(el) */
              // el.style.position = "absolute"
                  // el.style.top = `${Math.random()* 200}px`
                  // el.style.left = `${Math.random()* 200}px`
                  // el.style.height = `${Math.random()* window.innerHeight}px`
                  // el.style.width = `${Math.random()* window.innerWidth}px`
                  // el.style.translate = `-${Math.random()*100}px -${Math.random()*100}px`
          // })
          // }  
  // }

// },

// WSABOTAGH ({...props}){
  // var sabotag = new addonsComplex.WSABOTAG()
  // var argandFunc = {}
  // for (var key in props){
      // if (String(key).toUpperCase() in sabotag){
      // argandFunc[String(key).toUpperCase()] = props[key]}
  // }
  // useEffect(()=>{
      // for (var key in argandFunc){
              // var func = sabotag[String(key).toUpperCase()]
              // func(argandFunc[key])
              // 
      // }
  // },[])
  // return <NONE> </NONE>
// },