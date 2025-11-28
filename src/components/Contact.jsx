import logo from '../assets/logo_black_bg.svg';
import facebook from '../assets/facebook_logo.svg';
import youtube from '../assets/youtube_logo.svg';
import linkdin from '../assets/linkdin_logo.svg';
import instagram from '../assets/insta_logo.svg';
import twitter from '../assets/twitter_logo.svg';
import CSE_logo from '../assets/CSE_logo.svg';

function Contacts_item({link, logo, alt}){
    return(
        <li>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt={alt}></img>
            </a>
        </li>
    )
}

function Contact(){
    return(
        <section id="contacts" className="flex flex-col justify-center items-center h-full w-full gap-[1.5vh] p-0 m-0 bg-black">
            <img src={logo} alt="hack of the fallen lords" className='h-[50vh]'></img>
            <h1 className='text-3xl bg-linear-to-b from-[#5a5a5a] to-white bg-clip-text text-transparent'>Contact us</h1>
            <ul className='flex flex-row items-center justify-between w-[54vw]'>
                <Contacts_item link="https://www.facebook.com/club.scientifique.esi/" logo={facebook} alt="Facebook"/>
                <Contacts_item link="https://www.youtube.com/@ClubScientifiqueESI-CSE" logo={youtube} alt="Youtube"/>
                <Contacts_item link="https://dz.linkedin.com/company/cse-club" logo={linkdin} alt="LinkdIn"/>
                <Contacts_item link="https://www.instagram.com/cse.club" logo={instagram} alt="Instagram"/>
                <Contacts_item link="" logo={twitter} alt="Twitter"/>
            </ul>
            <footer className='flex items-end justify-center pb-4 w-full h-[20vh] relative bg-black'>
                <a href="https://cse.club/" target="_blank" rel="noopener noreferrer">
                    <img src={CSE_logo} alt="CSE" className='h-24 absolute left-8 top-1/2 -translate-y-1/2'></img>
                </a>
                <p className='text-[#D4D4D4] text-center text-sm font-sans'>Copyright ©2025 Club Scientifique de l'ESI. All Rights Reserved.</p>
            </footer>
        </section>
    )
}

export default Contact