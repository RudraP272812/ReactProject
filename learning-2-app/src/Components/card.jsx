import React from "react";
import Avatar from "./Avatar";
  import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar 
        imgurl = {props.img}
        />
      </div>
      <div className="bottom">
        <Details 
        data = {props.tel}/>
        <Details 
        data = {props.email}/>
      </div>
    </div>
  );
}
export default Card;
