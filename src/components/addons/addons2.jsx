"use client"


export class Storage{
    constructor(key, defaultState = {"name":"<Your Name>"}){
        this.key = key
        this.item = defaultState
    }
    set(value){
        localStorage.setItem(this.key,JSON.stringify(value))
        this.item = value
        return this
    }
    update(kv){
        this.item = {
            ...this.item,
            ...kv
        }
        this.set(this.item)
        return this
    }

    remove(){
        localStorage.removeItem(this.key)
        return this
    }

    get(){
       this.item = JSON.parse(localStorage.getItem(this.key)) ? JSON.parse(localStorage.getItem(this.key)) : this.item
       this.set(this.item)
       return this.item
    }
}