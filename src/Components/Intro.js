import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Intro.css";

export default function Intro() {
  useEffect(() => {
    var options = {




      strings: ["^2000 testing ^2000 still in first", "<i>First</i> ^2000 sentence.", "&amp; a second sentence."],
      typeSpeed: 100
    };

   new Typed(".typing", options);
    
  });

  return (
    <div className="intro">
      <h1>Hi! My name is Troy.</h1>
      <h3 className="typing"> Testing this out</h3>
      <h3> I'm a developer who is based out of NY & D.C.</h3>
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
