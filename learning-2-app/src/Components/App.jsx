import React from "react";
import Card from "./card";
import Contacts from "../contact";

function CardProperties(contacts){
  return(<Card 
  key = {contacts.id}
  name={contacts.name}
  img={contacts.imgURL}
  email={contacts.email}
  tel={contacts.phone}
  />)
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(CardProperties)}
      
    </div>
  );
}

export default App;
