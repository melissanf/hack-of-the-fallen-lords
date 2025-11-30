import sword from '../assets/sword.svg';

function About(){
    return(
        <section id="about" className='flex flex-row p-[20vh] justify-center items-center w-full h-screen bg-black'>
                    <img src={sword} className='h-[75vh] -mr-16'></img>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <h1 className='bg-linear-to-b from-[#594E28] to-[#DEBD52] bg-clip-text text-transparent text-4xl'>ABOUT US</h1>
                        <p className='text-[#9D9C9D] w-[40vw]'>
                    Hack of the Fallen Lords is a 48-hour 
                    game development competition organized 
                    by the CSE Club at ESI Algiers.12 teams 
                    will compete to create innovative games 
                    based on revealed themes within a strict 
                    time limit.The event takes place at the 
                    Higher National School of Computer Science 
                    (ESI), Algiers, challenging participants
                    with two one-word themes revealed at 
                    strategic moments throughout the competition.
                        </p>
                    </div>
                
        </section>
    )
}

export default About