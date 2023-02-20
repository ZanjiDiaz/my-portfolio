import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx';

function Header(){
    const [isShowing, setIsShowing] = useState(false);
    

    return(
      
            <div className="fixed w-full z-10 h-[15vh] items-center bg-[#0d1117] flex lg:py-[5vh] justify-between">
                
                <p className='name font-Poppins text-2xl tracking-widest 
                font-bold text-white select-none lg:text-3xl'>Zanji</p>
            </div>
     
        
    );
}

export default Header;