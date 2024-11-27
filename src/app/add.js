


export function mergeText(...texts){
    return texts.join(" ")
}

export function mergeFunc(...func){
    return (param)=>{
        func.forEach(e=>{if (e instanceof Function){e(param)}})
    }
}

export function genId(p = "",length = 8){
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const rand = (arr,len)=>{
      const singleGen = ()=> arr[Math.floor(Math.random()*arr.length)]
      let str = ""
      for(let i = 0;i<len;i++){
        str+=singleGen()
      }
      return str
    }
    if (p == "l"){
      return rand(letters,length)
    }else if(p == "b"){
      return rand([...numbers,...letters],length)
    }else if(p == "n"){
      return rand(numbers,length)
    }else{
      return rand([...numbers,...letters],length)
    }
  }