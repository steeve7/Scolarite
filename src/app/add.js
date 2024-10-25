
export function mergeText(...texts){
    return texts.join(" ")
}

export function mergeFunc(...func){
    return (param)=>{
        func.forEach(e=>{if (e instanceof Function){e(param)}})
    }
}
