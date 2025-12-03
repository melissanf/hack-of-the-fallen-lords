import { useState } from 'react';
import '../index.css';

function Navbar_item({link,text}){
    return(
        <li>
            <a href={link} className='text-white hover:text-black sm:hover:text-[#D6BC61] 
                            transition-colors relative after:content-[""] 
                            after:absolute after:bottom-0 after:left-0 
                            after:w-0 after:h-0.5 after:bg-black sm:after:bg-[#D6BC61] 
                            after:transition-all after:duration-300 
                            hover:after:w-full'>
                {text}
            </a>
        </li>
    )
}

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
    <nav className="fixed top-0 left-0 right-0 pb-3 pt-3 max-w-screen z-50 bg-[#D6BC61] sm:bg-black">
        <button className='sm:hidden px-[10vw]' onClick={()=>setIsOpen(!isOpen)}>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
        </button>
        <ul className="hidden sm:flex flex-row gap-8 m-0 justify-center">
            <Navbar_item link="#home" text="HOME"/>
            <Navbar_item link="#about" text="ABOUT US"/>
            <Navbar_item link="#mentors" text="MENTORS"/>
            <Navbar_item link="#agenda" text="AGENDA"/>
            <Navbar_item link="#objectives" text="OBJECTIVES"/>
            <Navbar_item link="#contacts" text="CONTACTS"/>
        </ul>
        {isOpen && (
            <ul className="flex flex-col gap-4 mt-2 sm:hidden text-center">
                <Navbar_item link="#home" text="HOME"/>
                <Navbar_item link="#about" text="ABOUT US"/>
                <Navbar_item link="#mentors" text="MENTORS"/>
                <Navbar_item link="#agenda" text="AGENDA"/>
                <Navbar_item link="#objectives" text="OBJECTIVES"/>
                <Navbar_item link="#contacts" text="CONTACTS"/>
            </ul>
        )}
    </nav>
    )
}

export default Navbar