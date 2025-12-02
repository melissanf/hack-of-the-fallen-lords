import React, { useEffect, useRef } from 'react';

function Objectives(){
    const objectives = [
        { text: 'ENHANCE SKILLS', direction: 'left' },
        { text: 'PROMOTE GAME DEV IN ALGERIA', direction: 'right' },
        { text: 'MARKET CSE CLUB', direction: 'left' },
        { text: 'FOSTER CREATIVITY', direction: 'right' }
    ];

    const itemsRef = useRef([]);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting){
                    const dir = entry.target.getAttribute("data-dir");
                    entry.target.classList.add(`show-${dir}`);
                }
            });
        },{ threshold: 0.1 }
        );
        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });
        return ()=> observer.disconnect();
    },[]);
    return(
        <section id="objectives" className="flex flex-col justify-center items-center
                            min-h-screen max-w-screen overflow-hidden px-4 py-8 md:py-0
                            m-0 gap-6 md:gap-8 bg-black">
            <h1 className='bg-linear-to-b from-[#594E28] to-[#DEBD52] 
                        bg-clip-text text-transparent text-center 
                        text-3xl md:text-5xl'>
                OBJECTIVES
            </h1>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-8">
                {objectives.map((obj,index)=>{
                    return(
                        <div key={index} 
                            ref={(el) => itemsRef.current[index] = el}
                            className={`objective-item transform w-[60vw] opacity-0 transition-all 
                            duration-700 bg-linear-to-l from-[#9D9C9D] to-[#373737]
                            flex items-center justify-center p-4 md:p-6 rounded-xl md:rounded-2xl
                            text-sm md:text-base lg:text-lg text-center
                            ${obj.direction ==="left" ? 'md:self-start' : 'md:self-end'}`
                            }
                            data-dir={obj.direction}
                            style={{transitionDelay: `${index*100}ms`}}
                        >
                            {obj.text}
                        </div>)
                })}
            </div>    
            <style>
                {`
                .objective-item[data-dir="left"] {
                    /* Initial position off-screen left (mobile/default) */
                    transform: translateX(-50vw);
                }
                .objective-item[data-dir="right"] {
                    /* Initial position off-screen right (mobile/default) */
                    transform: translateX(50vw);
                }
                
                /* 2. Desktop Initial Hidden State (Overrides #1 on MD screens) */
                @media (min-width: 768px) {
                    .objective-item[data-dir="left"] {
                        transform: translateX(-50vw);
                    }
                    .objective-item[data-dir="right"] {
                        transform: translateX(50vw);
                    }
                }

                /* 3. Final Visible State (Applies to all screens when intersecting) */
                .objective-item.show-left,
                .objective-item.show-right {
                    opacity: 1;
                    /* All items slide back to their normal, centered position */
                    transform: translateX(0) !important; 
                }
                `}

            </style>
        </section>
    )
}

export default Objectives