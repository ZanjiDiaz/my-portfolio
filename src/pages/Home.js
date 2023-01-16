import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Jizan from '../jizan.png';
import { Transition } from '@headlessui/react'
import { useState } from 'react'

function Home (){
  const [count, setCount] = useState(0);
  
    return(
        <div className="Container">
          <div className="flex items-center justify-center text-center h-screen">
            <div className="image absolute mb-96 rounded-full border-2 
            h-2/5 w-1/5 overflow-hidden bg-yellow-300">
            <img src={Jizan} alt="" srcset="" className="select-none"/>
            </div>

            <div className="left w-screen mt-80 flex-row text-center items-center justify-center ">
                <p className="animate-text bg-gradient-to-r from-yellow-500
                 via-purple-500 to-orange-500 bg-clip-text text-transparent 
                 text-8xl font-Bold tracking-wide font-SairaReg select-none">Jizan Diaz Villafuerte</p>
                 <p className="text-white 
                 text-2xl font-light mt-10 font-SairaReg select-none">Front-end Developer</p>
            </div>
        
          </div>
          <div className="middle h-screen flex">
            <div className="w-1/2  flex items-center">
                <p className="text"></p>
            </div>
            <div className="w-1/2  flex items-center relative">
              <div className="absolute h-3/5 w-3/5 rounded-full bg-yellow-400 z-0 filter blur-xl mix-blend-screen opacity-30 animate-pulse">

              </div>
              <div className="absolute h-3/5 w-3/5 rounded-full right-4  bg-purple-400 z-0 filter blur-xl mix-blend-screen opacity-30 animate-pulse">

              </div>
              <div className="absolute h-3/5 w-3/5 rounded-full top-24 left-44 bg-orange-400 z-0 filter blur-xl mix-blend-screen opacity-30 animate-pulse">

              </div>
              <div className="box bg-white w-4/5 h-3/6 flex m-auto rounded-2xl z-10 opacity-100 shadow-lg">
                  <p className="f font-SairaReg"></p>
              </div>
            </div>
          </div>
        </div>
    );
}




export default Home;