
export function mergeText(...texts){
    return texts.join(" ")
}

export function mergeFunc(...func){
    return (param)=>{
        func.forEach(e=>{if (e instanceof Function){e(param)}})
    }
}


export function LastIndex(list){
  var running = true
  var count = 0
  while (running){
    try{
      const indexretrive = list[count]
      count ++
    }catch(error){
      running = false
    }
  }
  return count
}

export function CRange(start= 0,stop = 0,step=1){
  const list = []
  for(let i = start;i<stop+step;i+=step){
    if (i >= stop){
      list.push(stop)
      break
    }else{list.push(i)}
  }
  return list
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