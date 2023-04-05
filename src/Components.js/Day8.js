import React,{useState}from "react";
import { useEffect } from "react";


export default function Day8() {
    const[msg,setmsg]=useState("Entomology is the science that studies")
  
   useEffect(()=>{
        console.log('Answer...');
        setTimeout(()=>{
            setmsg("Insects");
        },5000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}