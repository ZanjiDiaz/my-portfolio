import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import farmhub from '../assets/farmhubindex.png'
import Chrome from '../assets/chrome.png'
import { useState } from 'react';
import Fade from 'react-reveal/Fade'

const Projects = () => {

  const BoxBrowser = (props) => {
    return (
      <>

        <div className="conatiner flex-col h-full w-full ">
          <div className="img w-full h-[30vh] ">
            <img src={props.image} alt="" className="w-full h-full rounded-t-3xl"/>
          </div>
          <div className="img flex-col text-center items-start justify-center w-full h-[35vh] bg-[#161b22] pt-6 px-4 rounded-b-3xl hover:-translate-y-[15vh] ease-out duration-300"> 
            <p className="text-white font-Poppins text-xs font-bold ">{props.title}</p>
            <p className="text-[#4ca5ff] font-Poppins text-xs font-bold pt-[2vh]">{props.Role}</p>
          </div>
        </div>

      </>
    )
  }

  return (

    <div className="Container w-full h-full px-[10vw]" >
      <Fade>
        <div className="box shadow-lg mt-[5vh] cursor-pointer w-full h-[50vh] overflow-hidden rounded-3xl 
              bg-[#161b22] hover:shadow-xl duration-500 hover:-translate-y-5 
            lg:h-[80vh]" >
             
              <Fade>
              <a href="https://www.farmhubbpsu.com/">
              <BoxBrowser
                  field="Website"
                  title="FarmHub: An Online Farming Management Portal"
                  image={farmhub}
                  Role="Front-End Developer"
                />
              </a>
               
              </Fade>


        </div>
      </Fade>

      <Fade>
        <div className="box shadow-lg mt-[5vh] cursor-pointer w-full h-[50vh] overflow-hidden rounded-3xl 
                bg-[#161b22]
                hover:shadow-xl duration-500 hover:-translate-y-5 lg:h-[80vh]" >
        
            <Fade>
              <BoxBrowser
                field="PC Game"
                title="The Pandemic"
                image={farmhub}
                Role="Game Developer"
              />
            </Fade>

          
        </div>
      </Fade>

      <Fade>
        <div className="box shadow-lg mt-[5vh] cursor-pointer w-full h-[50vh] overflow-hidden rounded-3xl 
           bg-[#161b22]
              hover:shadow-xl duration-500 hover:-translate-y-5 lg:h-[80vh]" >
        
            <Fade>

              <BoxBrowser
                field="Mobile Game"
                title="Endless"
                image={farmhub}
                Role="Game Developer"
              />
            </Fade>

          
        </div>
      </Fade>


    </div>


  );
}

export default Projects;