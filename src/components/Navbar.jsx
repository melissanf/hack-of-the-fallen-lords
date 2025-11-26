import '../index.css';
function Navbar(){
    return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black">
        <ul className="flex flex-row gap-8 m-0 justify-center ">
            <li><a href="#home" className='text-white hover:underline hover:text-[#D6BC61]'>HOME</a></li>
            <li><a href="#about" className='text-white hover:underline hover:text-[#D6BC61]' >ABOUT US</a></li>
            <li><a href="#mentors" className='text-white hover:underline hover:text-[#D6BC61]' >MENTORS</a></li>
            <li><a href="#agenda" className="text-white hover:underline hover:text-[#D6BC61]" >AGENDA</a></li>
            <li><a href="#objectives" className="text-white hover:underline hover:text-[#D6BC61]" >OBJECTIVES</a></li>
            <li><a href="#contacts" className="text-white hover:underline hover:text-[#D6BC61]" >CONTACTS</a></li>
        </ul>
    </nav>
    )
}

export default Navbar