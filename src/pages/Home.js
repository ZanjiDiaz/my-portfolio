import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jizan from '../jizan.png';
import { Transition } from '@headlessui/react'
import { useState } from 'react'

function Home() {
 
  return (
    <div className="Container w-full h-full mt-[25vh] mb-[15vh] flex flex-col items-center justify-center">
      <div className="top flex flex-col max-h-[50vh] w-full text-left justify-center  select-none lg:justify-center lg:text-left">
        
        <h1 className="name text-5xl font-Poppins w-full text-left font-bold lg:max-w-[500px] my-[1rem] text-white lg:lg:text-6xl lg:leading-snug">
          I'm Jizan Diaz Villafuerte,<br /> <span className="text-[#4ca5ff]">Front-End </span>Developer</h1>
        <p className="font w-full font-Poppins font-normal text-md justify-center text-[#A3B3BC] items-center mt-4 lg:max-w-[500px] lg:text-2xl">
          I'm a Front-End Developer specializing in HTML/CSS, JavaScript and ReactJS.
        </p>

        <div className="w-screen h-[10vh] py-[3vh] flex items-start ">
          <button className="text-white font-bold text-xs bg-[#0b82fa] py-[1.5vh] px-[6vw] rounded-3xl"> Hire Me!</button>
        </div>
      </div>
    
    </div>
  );
}




export default Home;