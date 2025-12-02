import logo_black_bg from '../assets/logo_black_bg.svg';
import character from '../assets/character.svg';
import button_sign from '../assets/button_sign.svg';

function Hero(){
    return(
        <section id="home" className="flex flex-col w-full max-w-screen gap-12 
                            sm:gap-0 p-0 items-center justify-center bg-black">
            <div className="flex flex-row mt-16 sm:mt-12 gap-[30vw] bg-black 
                            w-full items-center justify-center">
                <div className='text-[#8F8F8F] text-center text-sm sm:text-xl 
                                lg:text-2xl'> 
                   <p>A 48-HOUR game development competition</p>
                   <p className='sm:pl-20'>where CREATIVITY meets CHALLENGE</p>
                </div>
                <img src={logo_black_bg} alt='logo_black_bg' className='hidden sm:block sm:h-[20vh]'></img>
            </div>
            <div className='flex flex-col items-center w-screen max-w-screen gap-0 '>
                <h1 className='text-center text-3xl sm:text-4xl 
                        bg-linear-to-b from-[#9D9C9D] to-[#D9D9D9] 
                        bg-clip-text text-transparent'>
                    HACK<br/>OF THE FALLEN LORDS
                </h1>

                <div className='flex flex-col sm:flex-row items-center justify-center 
                        w-screen max-w-screen gap-0 sm:gap-32 py-6 
                        bg-linear-to-b from-black via-[#55552D] to-black'>
                            
                    <img src={character} className='block sm:hidden h-60 sm:h-75 
                            lg:h-[50vh] border-0 border-transparent outline-none'>
                    </img>

                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdueEcOVN175B2sDyozygTFK3lJOlbeU0ZxmTjgN7HRtUIJDA/viewform?usp=header' target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer flex flex-row items-center justify-center 
                                    h-14 sm:h-20 lg:h-32 w-48 sm:w-64 lg:w-80 gap-2 rounded-2xl lg:rounded-4xl border-2 border-[#A08D4A] 
                                    bg-linear-to-r from-[#594E28] via-[#D5C178] to-[#594E28] 
                                    transition-transform duration-200 hover:scale-105
                                    hover:bg-linear-to-l hover:from-[#796b37] hover:via-[#efd98c] hover:to-[#796b37] '>
                            <p className='text-sm sm:text-lg lg:text-2xl'>REGISTER NOW</p>
                            <img src={button_sign} className='h-[75%]'></img>
                        </button>
                    </a>
                    <img src={character} className='hidden sm:block h-60 sm:h-75 lg:h-[50vh] border-0 border-transparent outline-none'></img>
                </div>
            </div>
        </section>
    )
}

export default Hero