import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Header(){
    return(
      
            <div className="fixed w-screen z-10 h-24 bg-transparent backdrop-blur-sm flex lg:pl-56 py-10 justify-between pl-12">
                
                <p className='name font-SairaReg text-4xl tracking-widest 
                font-bold text-yellow-400 select-none'>ZANJI</p>

                <div className="div flex justify-evenly w-1/2">
                <Link to="/" className='font-SairaReg text-2xl tracking-widest 
                    font-light text-white cursor-pointer hover:text-yellow-400'>Home</Link>
                    <Link to="/projects" className='font-SairaReg text-2xl tracking-widest 
                    font-light text-white cursor-pointer hover:text-yellow-400'>Projects</Link>
                     
                
                </div>
            </div>
     
        
    );
}

export default Header;