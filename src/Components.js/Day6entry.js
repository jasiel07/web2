import React from "react";
import { redirect } from "react-router-dom";


export default function Day6entry(props) {
  return (
    <div className="Saree" style={{textAlign:"center"}}>
      <img  style={{height:"450px",width:"350px"}} src={props.imgUrl}></img>
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
       <hr></hr>
    </div>
  );
}

