import React, { useState } from 'react';
import younes from '../assets/cherifi_younes.svg';
import reda from '../assets/brikci_reda.svg';


const speakers = [
    {
        id: 1,
        name: "CHERIFI Younes",
        image: younes, 
        details: [
            "3rd year AI engineer student at USTHB",
            "Game developer at MAWHUB"
        ],
    },
    {
        id: 2,
        name: "BRIKCI Reda",
        image: reda, 
        details: [
            "Junior software engineer at vituos"
        ],
    }
];


function SpeakerCard({ speaker }){
    const { name, image, details } = speaker;
    return(
        <div className='flex flex-col justify-start items-center rounded-4xl 
                w-[75vw] md:w-[35vw] h-[70vh]  gap-2 shadow-2xl transition-all 
                duration-500 ease-in-out bg-[#D4BB60]'>

            <div className='bg-linear-to-b from-[#3C3621] via-[#D5C178] to-[#BFA959]
                        flex flex-col justify-center items-center h-[60%] sm:h-[75%] w-full 
                        rounded-t-4xl p-4 '>
                <img src={image} alt={name} className='w-[80%] md:w-[60%]' ></img>
                <h1 className='text-[#423B22] text-3xl sm:text-4xl text-center'>{name}</h1>
            </div>

            <ul className="list-disc list-inside space-y-2 text-center 
                        flex flex-col justify-center items-center h-[40%] md:h-[25%] w-full">
                {details.map((detail, index) => (
                    <li key={index} className="text-base lg:text-xl w-full">
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Mentors(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalMentors = speakers.length;

    const handleNext = ()=>{
        setCurrentIndex((currentIndex+1)%totalMentors);
    };

    const handlePrev = ()=>{
        setCurrentIndex((currentIndex-1+totalMentors)%totalMentors);
    };

    const currentMentor = speakers[currentIndex];

    return(
        <section id="mentors" className="flex flex-col justify-center items-center 
                                        min-h-screen max-w-screen pb-12 m-0 gap-8 bg-black">
            <h1 className='bg-linear-to-b from-[#594E28] to-[#DEBD52] 
                            bg-clip-text text-transparent text-3xl sm:text-5xl'>
                MENTORS
            </h1>

            <div className="flex justify-center items-center w-full gap-1">
                <button onClick={handlePrev} className='text-4xl md:text-6xl transition-all duration-300
                                                    text-gray-400 hover:text-[#D4BB60]'>
                    {'<'}
                </button>

                <div key={currentMentor.id} className="transition-opacity 
                                        duration-500 ease-in-out opacity-100">
                    <SpeakerCard speaker={currentMentor} />
                </div>

                <button onClick={handleNext} className='text-4xl md:text-6xl transition-all duration-300
                                                    text-gray-400 hover:text-[#D4BB60]'>
                    {'>'}
                </button>
            </div>
            <div className="flex space-x-2 mt-8">
                {speakers.map((_, index) => (
                    <div key={index} className={`h-3 w-3 rounded-full transition-all duration-300 
                        ${index===currentIndex ? 'bg-[#D6BC61] scale-125' : 'bg-gray-500 opacity-50 hover:opacity-80'}`}
                        onClick={() => setCurrentIndex(index)}
                        role="button"
                    />
                ))}
            </div>
        </section>
    )
}

export default Mentors
