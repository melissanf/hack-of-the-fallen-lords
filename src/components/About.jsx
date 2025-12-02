import sword from '../assets/sword.svg';

function About(){
    return(
        <section id="about" className='flex flex-row justify-center items-center 
                        w-full min-h-screen bg-black '>
            <div className='flex flex-row justify-center items-start w-full
                            px-4 md:px-8 py-12 md:py-0 gap-8 md:gap-6'>
                <img src={sword} className='h-100 md:h-[70vh] -mr-16'></img>
                    
                <div className='flex flex-col justify-center items-center w-screen sm:w-[50%] mt-4 gap-16 md:gap-12'>
                    <h1 className='bg-linear-to-b from-[#594E28] to-[#DEBD52] 
                                bg-clip-text text-transparent text-3xl md:text-5xl text-center'>
                        ABOUT US
                    </h1>
                    <p className='text-[#9D9C9D] text-sm sm:text-lg'>
                    Hack of the Fallen Lords is a 48-hour 
                    game development competition organized 
                    by the CSE Club at ESI Algiers.12 teams 
                    will compete to create innovative games 
                    based on revealed themes within a strict 
                    time limit.<br/><br/>The event takes place at the 
                    Higher National School of Computer Science 
                    (ESI), Algiers, challenging participants
                    with two one-word themes revealed at 
                    strategic moments throughout the competition.
                    </p>
                </div>
            </div>                
                
        </section>
    )
}

export default About