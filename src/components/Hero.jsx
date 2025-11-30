import logo_black_bg from '../assets/logo_black_bg.svg';
import character from '../assets/character.svg';
import button_sign from '../assets/button_sign.svg';

function Hero(){
    return(
        <section id="home" className="flex flex-col w-full h-screen gap-4 p-0 items-center justify-end bg-black">
            <div className="flex flex-row gap-[30vw] bg-black w-full items-center justify-center">
                <div className='text-[#8F8F8F]'>
                   <p>A 48-HOUR game development competition</p>
                   <p className='pl-20'>where CREATIVITY meets CHALLENGE</p>
                </div>
                <img src={logo_black_bg} alt='logo_black_bg' className='h-[20vh]'></img>
            </div>
            <div className='flex flex-col pb-0 mb-0 w-full '>
                <h1 className='text-center text-4xl bg-linear-to-b from-[#9D9C9D] to-[#D9D9D9] bg-clip-text text-transparent'>
                    HACK<br/>OF THE FALLEN LORDS
                </h1>
                <div className='flex flex-row items-center justify-center gap-[30vw] pb-0 bg-linear-to-b from-black via-[#55552D] to-black'>
                    <button className='cursor-pointer flex flex-row items-center justify-center 
                                    h-[12vh] w-[22vw] p-2 rounded-2xl border-2 border-[#A08D4A] 
                                    bg-linear-to-r from-[#594E28] via-[#D5C178] to-[#594E28] 
                                    hover:h-[13vh] hover:w-[23vw] '>
                        <p>REGISTER NOW</p>
                        <img src={button_sign} className='h-[75%]'></img>
                    </button>
                    <img src={character} className='h-[50vh] border-0 border-transparent outline-none'></img>
                </div>
            </div>
        </section>
    )
}

export default Hero