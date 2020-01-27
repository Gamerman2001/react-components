import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Intro.css";

export default function Intro() {
  useEffect(() => {
    var options = {
      strings: ["I am a", "I am a Developer^1000", "I am a Code Monkey", "I am a Human", "I am a .........", "I am a Digital Alchemist"],
      typeSpeed: 80,
      smartBackspace: true
    };

   new Typed(".typing", options);
  
  
  });
 const putWord = ()=> {
  return setTimeout(() => {
    return 'hi'
  }, 3000);
    }
   
     
  return (
    <div className="intro">
      <h1>Hi! My name is Troy.</h1>
      <h3> <span className="typing"> </span></h3>
      {()=> {return <h3>heeeey</h3>}}
      <br/>
      <h3>Some Tech I Work With:</h3>
    
      <img
        alt="css3"
        src="https://img.icons8.com/color/48/000000/css3.png"
      ></img>
      <img
        alt="html5"
        src="https://img.icons8.com/color/48/000000/html-5.png"
      ></img>
      <img
        alt="js"
        src="https://img.icons8.com/color/48/000000/javascript.png"
      ></img>
      <img
        alt="react"
        src="https://img.icons8.com/color/48/000000/react-native.png"
      ></img>
      <img
        alt="node"
        src="https://img.icons8.com/color/48/000000/npm.png"
      ></img>
      <img
        alt="ruby"
        src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"
      ></img>
    </div>
  );
}
