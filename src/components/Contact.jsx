import logo from '../assets/logo_black_bg.svg';
import facebook from '../assets/facebook_logo.svg';
import youtube from '../assets/youtube_logo.svg';
import linkdin from '../assets/linkedin_logo.svg';
import instagram from '../assets/insta_logo.svg';
import twitter from '../assets/twitter_logo.svg';
import CSE_logo from '../assets/CSE_logo.svg';

function Contacts_item({link, logo, alt}){
    return(
        <li>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt={alt} className='h-6 sm:h-16'></img>
            </a>
        </li>
    )
}

function Contact(){
    return(
        <section id="contacts" className="flex flex-col justify-center items-center relative
                                min-h-screen max-w-screen gap-[8vh] p-0 m-0 bg-black">
            <img src={logo} alt="hack of the fallen lords" className='h-[20vh] sm:h-[40vh]'></img>
            <div className='flex flex-col justify-center items-center gap-4 mb-16'>
                <h1 className='text-3xl bg-linear-to-b from-[#5a5a5a] to-white bg-clip-text text-transparent'>Contact us</h1>
                <ul className='flex flex-row items-center justify-evenly w-full sm:w-[54vw]'>
                    <Contacts_item link="https://www.facebook.com/club.scientifique.esi/" logo={facebook} alt="Facebook"/>
                    <Contacts_item link="https://www.youtube.com/@ClubScientifiqueESI-CSE" logo={youtube} alt="Youtube"/>
                    <Contacts_item link="https://dz.linkedin.com/company/cse-club" logo={linkdin} alt="LinkdIn"/>
                    <Contacts_item link="https://www.instagram.com/cse.club" logo={instagram} alt="Instagram"/>
                    <Contacts_item link="https://x.com/CSESI_Club" logo={twitter} alt="Twitter"/>
                </ul>
            </div>
            <footer className='flex flex-col absolute bottom-0 items-center 
                        justify-start pb-8 w-full h-[20vh] bg-black'>
                <div className='flex flex-row justify-start w-full'>
                    <a href="https://cse.club/" target="_blank" rel="noopener noreferrer" className='cursor-pointer'> 
                        <img src={CSE_logo} alt="CSE" className='h-20 sm:h-24 sm:ml-8'></img>
                    </a>
                </div>
                <p className='text-[#D4D4D4] text-center text-sm font-sans self-center w-full bg-black pb-4 '>
                    Copyright ©2025 Club Scientifique de l'ESI. All Rights Reserved.
                </p>
            </footer>
        </section>
    )
}

export default Contact