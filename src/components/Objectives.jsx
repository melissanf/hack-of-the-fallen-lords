import React, { useEffect, useRef } from 'react';

function Objectives(){
    const objectives = [
        { text: 'ENHANCE SKILLS', direction: 'left' },
        { text: 'PROMOTE GAME DEV IN ALGERIA', direction: 'right' },
        { text: 'MARKET CSE CLUB', direction: 'left' },
        { text: 'FOSTER CREATIVITY', direction: 'right' }
    ];

    const observerRef = useRef(null);

    useEffect(()=>{
        observerRef.current= new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting){
                    const dir = entry.target.getAttribute("data-dir");
                    entry.target.classList.add(`show-${dir}`);
                }
            });
        });
        document.querySelectorAll('.objective-item').forEach((item)=>{
            observerRef.current.observe(item);
        })
        return ()=> observerRef.current.disconnect();
    },[]);
    return(
        <section id="objectives" className="flex flex-col justify-center items-center h-screen w-full p-0 m-0 gap-8 bg-black">
            <h1 className='bg-linear-to-b from-[#594E28] to-[#DEBD52] bg-clip-text text-transparent text-4xl'>OBJECTIVES</h1>
            {objectives.map((obj,index)=>{
                return(<div key={index} className={`objective-item transform w-[50vw] opacity-0 
                    transition-all duration-700 bg-linear-to-l from-[#9D9C9D] to-[#373737]
                    flex items-center justify-center p-4 rounded-2xl
                    ${obj.direction === 'left' ? '-translate-x-[300px]' : 'translate-x-[300px]'}`
                    }
                    data-dir={obj.direction}
                    style={{transitionDelay: `${index*100}ms`}}
                >
                    {obj.text}
                </div>)
            })}
            <style>
                {`
                .objective-item.show-left {
                    opacity: 1;
                    transform: translateX(60px);
                }
                .objective-item.show-right {
                    opacity: 1;
                    transform: translateX(-60px);
                }
                `}

            </style>
        </section>
    )
}

export default Objectives